import express from "express";
import config from "./config";
import { initKuroshiro } from "./kuroshiro";
import scanner from "./logic/scanner";
import wordToAnki from "./logic/wordToAnki";
import logger from "./utils/logger";

const app = express();

app.post("/:word", async (req, res) => {
  const { word } = req.params;
  try {
    const result = await wordToAnki(word);
    res.status(200).json(result);
  } catch (error: any) {
    logger.error(error);
    const status = error.message?.toLowerCase()?.includes("not found")
      ? 404
      : 500;
    res.status(status).json(error.message);
  }
});

initKuroshiro().then(() => {
  app.listen(config.port, () => {
    logger.info(`Api is listening on ${config.port}`);
    if (config.scanner) {
      logger.info(`Starting scanner...`);
      scanner();
    }
  });
});
