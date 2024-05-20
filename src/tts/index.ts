/* eslint-disable no-console */
import axios from "axios";
import logger from "../utils/logger";

export type MakeMp3Response = {
  Error: number;
  Speaker: string;
  Cached: number;
  Text: string;
  tasktype: string;
  URL: string;
  MP3: string;
};

export const scrapeTTS = async (word: string) => {
  if (!word) return undefined;

  const response = await axios.post<MakeMp3Response>(
    "https://ttsmp3.com/makemp3_new.php",
    `msg=${encodeURI(word)}&lang=Takumi&source=ttsmp3`
  );

  if (response.data.Text === "Error" || response.data.Error !== 0) {
    throw new Error(`error response ${JSON.stringify(response.data)}`);
  }

  logger.info(`TTS param: ${word}, result: ${JSON.stringify(response.data)}`);

  return response.data.URL;
};
