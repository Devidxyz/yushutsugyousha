import axios from "axios";
import config from "../config";
import logger from "../utils/logger";

export type PixabayResponse = {
  total: number;
  totalHits: number;
  hits: {
    id: number;
    pageURL: string;
    type: string;
    tags: string;
    previewURL: string;
    previewWidth: number;
    previewHeight: number;
    webformatURL: string;
    webformatWidth: number;
    webformatHeight: number;
    largeImageURL: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    views: number;
    downloads: number;
    collections: number;
    likes: number;
    comments: number;
    user_id: number;
    user: string;
    userImageURL: string;
  }[];
};

export const getImageForWord = async (word: string) => {
  const response = await axios.get<PixabayResponse>(
    `https://pixabay.com/api/?key=${config.pixabayApiKey}&q=${encodeURI(
      word
    )}&per_page=3`
  );

  logger.info(
    `Pixabay param: ${word}, response: ${JSON.stringify(response.data)}`
  );

  if (response?.data?.hits?.length < 1) {
    logger.warn(`Didn't get any image from pixabay for word "${word}"`);
    return null;
  }

  return response.data.hits[0].webformatURL; // replace with previewURL for smaller image sizes
};
