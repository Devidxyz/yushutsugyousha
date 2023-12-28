/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { addNoteToAnki, fetchNotes, syncAnki } from "../anki";
import { AddNoteParams, NotesInfoResult } from "../anki/types";
import config from "../config";
import wordToAnki from "./wordToAnki";
import { scrapeTTS } from "../tts";
import logger from "../utils/logger";
import { sleep } from "../utils";

const addNonJmdictWordAnyway = async (
  bufferDeckWord: NotesInfoResult["result"][0]
) => {
  const bufferedWord = bufferDeckWord.fields.Entry.value;
  const bufferedWordFurigana = bufferDeckWord.fields.EntryFurigana.value;
  const bufferedWordMeaning = bufferDeckWord.fields.Meaning.value;

  const wordAudioUrl = await scrapeTTS(bufferedWord);

  const addNoteParams: AddNoteParams = {
    fields: {
      Word: bufferedWord,
      Furigana: bufferedWordFurigana,
      Meaning: bufferedWordMeaning,
    },
    tags: [],
    wordAudioUrl,
  };

  const ankiResult = await addNoteToAnki(addNoteParams);
  return { addNoteParams, ankiResult };
};

const scanForNewCards = async () => {
  // fetch new cards
  await syncAnki();

  // fetch both decks' words
  const bufferNotes = await fetchNotes(config.bufferDeckName);
  const bufferDeckWords = bufferNotes.result.map(
    (r) => r.fields.Entry.value.split(",")[0] // first word if there are multiple ones, so JMdict will recognize it
  );

  const generatedNotes = await fetchNotes(config.deckName);
  const generatedDeckWords = generatedNotes.result.map(
    (r) => r.fields.Word.value
  );

  // search for new cards
  const missingWords = bufferDeckWords.filter(
    (w) => !generatedDeckWords.includes(w)
  );

  logger.info(`Scanner missing words: ${JSON.stringify(missingWords)}`);

  // add missing words to anki
  for (const word of missingWords) {
    let result: Awaited<ReturnType<typeof wordToAnki>>;
    try {
      result = await wordToAnki(word);
    } catch (error: any) {
      if (error.message === "Not found in JMdict") {
        // if not found in JMdict, add the buffer's card to the generated deck
        const bufferDeckWord = bufferNotes.result.find(
          (r) => r.fields.Entry.value === word
        );

        result = await addNonJmdictWordAnyway(bufferDeckWord);
      } else {
        throw error;
      }
    }

    logger.info(
      `Scanner result for missing word: ${word}, result: ${JSON.stringify(
        result
      )}`
    );

    // avoid potential rate limits
    await sleep(1000);
  }

  // sync again to upload the changes
  await syncAnki();
};

const scanner = async () => {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      await scanForNewCards();
    } catch (error: any) {
      logger.error(`Uncaught error in scanner: ${error.message}`);
    }
    await sleep(config.scanIntervalMs);
  }
};

export default scanner;
