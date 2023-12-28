import dotenv from "dotenv";
import logger from "./utils/logger";

dotenv.config();

const requiredEnvs = [
  "PIXABAY_API_KEY",
  "DECK_NAME",
  "MODEL_NAME",
  "BUFFER_DECK_NAME",
];

const missingEnvs: string[] = [];
requiredEnvs.forEach((env) => {
  if (!process.env[env]) {
    missingEnvs.push(env);
  }
});
if (missingEnvs.length > 0) {
  logger.error(
    `You have to provide the ${missingEnvs.join(", ")} environment variable(s).`
  );
  process.exit(1);
}

export default {
  port: process.env.PORT ?? 8764,
  pixabayApiKey: process.env.PIXABAY_API_KEY,
  deckName: process.env.DECK_NAME,
  modelName: process.env.MODEL_NAME,
  bufferDeckName: process.env.BUFFER_DECK_NAME,
  scanner: process.env.SCANNER === "true",
  scanIntervalMs: process.env.SCAN_INTERVAL_MS
    ? +process.env.SCAN_INTERVAL_MS
    : 60 * 1000,
};
