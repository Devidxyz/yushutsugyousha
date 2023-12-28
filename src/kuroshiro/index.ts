// @ts-ignore
import Kuroshiro from "kuroshiro";
// @ts-ignore
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";
import logger from "../utils/logger";

let kuroshiro: any;

export const initKuroshiro = async () => {
  kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());
};

export const toFurigana = async (sentence: string) => {
  const result: string = await kuroshiro.convert(sentence, {
    mode: "furigana",
  });

  logger.info(
    `Kuroshiro param: ${sentence}, result: ${JSON.stringify(result)}`
  );

  return result;
};
