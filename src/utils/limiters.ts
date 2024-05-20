import Bottleneck from "bottleneck";

const ankiConnectLimiter = new Bottleneck({ minTime: 100 });

// eslint-disable-next-line import/prefer-default-export
export { ankiConnectLimiter };
