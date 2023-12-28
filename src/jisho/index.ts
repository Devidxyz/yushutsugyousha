import axios from "axios";
import logger from "../utils/logger";

export type JishoReponse = {
  meta: {
    status: number;
  };
  data: {
    slug: string;
    is_common: boolean;
    tags: string[];
    jlpt: string[];
    japanese: {
      word?: string;
      reading: string;
    }[];
    senses: {
      english_definitions: string[];
      parts_of_speech: string[];
      links: {
        text: string;
        url: string;
      }[];
      tags: string[];
      restrictions: any[];
      see_also: string[];
      antonyms: any[];
      source: any[];
      info: any[];
      sentences?: any[];
    }[];
    attribution: {
      jmdict: boolean;
      jmnedict: boolean;
      dbpedia: boolean | string;
    };
  }[];
};

export const scrapeJisho = async (word: string) => {
  const response = await axios.get<JishoReponse>(
    `https://jisho.org/api/v1/search/words?keyword=${encodeURI(word)}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    }
  );

  logger.info(
    `Jisho param: ${word}, response: ${JSON.stringify(response.data)}`
  );

  return response.data;
};
