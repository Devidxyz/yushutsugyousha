import axios from "axios";
import config from "../config";
import { ankiConnectLimiter } from "../utils/limiters";
import logger from "../utils/logger";
import { AddNoteParams, NotesInfoResult } from "./types";

const ANKI_URL = "http://localhost:8765";

export const addNoteToAnki = async (params: AddNoteParams) => {
  const result = await ankiConnectLimiter.schedule(() =>
    axios.post(ANKI_URL, {
      action: "addNote",
      version: 6,
      params: {
        note: {
          deckName: config.deckName,
          modelName: config.modelName,
          fields: params.fields,
          tags: params.tags,
          options: {
            allowDuplicate: false,
            duplicateScope: "deck",
          },
          audio: [
            params.wordAudioUrl && {
              url: params.wordAudioUrl,
              filename: `${params.fields.Word}.mp3`,
              fields: ["Audio"],
            },
            params.sentenceAudioUrl && {
              url: params.sentenceAudioUrl,
              filename: `${params.fields.Sentence}.mp3`,
              fields: ["SentenceAudio"],
            },
          ],
          picture: [
            params.imageUrl && {
              url: params.imageUrl,
              filename: `${params.imageUrl.split(".").pop()}.mp3`,
              fields: ["Image"],
            },
          ],
        },
      },
    })
  );

  logger.info(
    `Anki params: ${JSON.stringify(params)}, response: ${JSON.stringify(
      result.data
    )}`
  );
  return result.data;
};

export const syncAnki = async (): Promise<boolean> => {
  const syncResponse = await ankiConnectLimiter.schedule(() =>
    axios.post(ANKI_URL, {
      action: "sync",
      version: 6,
    })
  );

  if (syncResponse.data.error !== null) {
    logger.error(`Error while syncing: ${syncResponse.data.error}`);
    return false;
  }

  return true;
};

export const fetchNotes = async (deck: string) => {
  const findNotesReponse = await ankiConnectLimiter.schedule(() =>
    axios.post<{ result?: number[]; error?: any }>(ANKI_URL, {
      action: "findNotes",
      version: 6,
      params: {
        query: `"deck:${deck}"`,
      },
    })
  );

  if (findNotesReponse.data.error !== null) {
    logger.error(
      `Error while finding anki notes notes: ${findNotesReponse.data.error}`
    );
    return null;
  }

  const notesInfoReponse = await ankiConnectLimiter.schedule(() =>
    axios.post<NotesInfoResult>(ANKI_URL, {
      action: "notesInfo",
      version: 6,
      params: {
        notes: findNotesReponse.data.result,
      },
    })
  );

  if (notesInfoReponse.data.error !== null) {
    logger.error(
      `Error while fetching anki notes info: ${findNotesReponse.data.error}`
    );
    return null;
  }

  return notesInfoReponse.data;
};
