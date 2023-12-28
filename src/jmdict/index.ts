import fs from "fs";
import logger from "../utils/logger";
import { arrayOrToArray, fieldOrFirstElement } from "../utils";
import { JMdict } from "./types";

const jsonFile = fs.readFileSync(
  process.env.NODE_ENV === "production"
    ? `${__dirname}/../../../static/JMdict_e_examp.json`
    : `${__dirname}/../../static/JMdict_e_examp.json`,
  {
    encoding: "utf8",
  }
);

const jmdict: JMdict = JSON.parse(jsonFile);

// eslint-disable-next-line import/prefer-default-export
export const findInJmdict = (word: string) => {
  const result = jmdict.JMdict.entry.find((x) => {
    if (fieldOrFirstElement(x.k_ele)?.keb === word) return true;
    if (fieldOrFirstElement(x.r_ele)?.reb === word) return true;

    if (arrayOrToArray(x.sense).some((s) => s.gloss === word)) return true;

    return false;
  });

  logger.info(`JMdict param: ${word}, result ${JSON.stringify(result)}`);

  return result;
};
