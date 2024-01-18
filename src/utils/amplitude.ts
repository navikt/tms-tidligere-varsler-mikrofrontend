import { init, logEvent } from "@amplitude/analytics-browser";

const APP_NAME = "tms-min-side-varslinger";

export const logNavigereBeskjed = () => {
  logEvent("navigere", { app: APP_NAME, komponent: "tidligere-beskjed" });
};

export const logFilterToggle = (filterBy: string) => {
  logEvent("fitler", { app: APP_NAME, filterBy: filterBy });
};

export const initAmplitude = () => {
  init("default", undefined, {
    useBatch: true,
    serverUrl: "https://amplitude.nav.no/collect-auto",
    ingestionMetadata: {
      sourceName: window.location.toString(),
    },
  });
};
