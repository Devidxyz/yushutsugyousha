import axios, { AxiosResponse } from "axios";
import Bottleneck from "bottleneck";
import { SocksProxyAgent } from "socks-proxy-agent";
import config from "../config";
import logger from "./logger";

export const PROXY = {
  MIN_TIME: 100,
  MAX_SOCKS_USER: 10000,
  HEADERS: {
    cookie: "prf_ls_uad=time.d.200.normal",
  },
};

const limiter = new Bottleneck({
  maxConcurrent: 50,
  minTime: PROXY.MIN_TIME,
});

const randomInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const proxyFetch = async <T extends any>(
  url: string,
  data: string,
  retry: boolean = false
): Promise<AxiosResponse<T>> => {
  logger.debug(`proxyFetch params: ${url} ${retry}`);
  const num = randomInteger(1, PROXY.MAX_SOCKS_USER);

  const agent = new SocksProxyAgent(
    `socks5h://${num}:x@${config.tor.host}:${config.tor.port}`
  );

  return limiter.schedule<AxiosResponse<T>>(async () => {
    try {
      const response = await axios<T>({
        method: "POST",
        url,
        data,
        httpsAgent: agent,
        headers: {
          ...PROXY.HEADERS,
        },
      });
      return response;
    } catch (error: any) {
      logger.error(error);
      if (!retry) {
        logger.warn(`retrying proxy fetch ${url}`);
        return proxyFetch(url, data, true);
      }
      return null;
    }
  });
};

export default proxyFetch;
