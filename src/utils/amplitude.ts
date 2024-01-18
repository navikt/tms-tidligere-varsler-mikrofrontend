import { init, logEvent } from "@amplitude/analytics-browser";

const APP_NAME = "tms-min-side-varslinger";

export const logNavigereBeskjed = () => {
  logEvent("navigere", { app: APP_NAME, komponent: "tidligere-beskjed" });
};

export const logFilterToggle = (filterValg: string) => {
  logEvent("tidligere-varsler-filter", { app: APP_NAME, filterValg: filterValg });
};

export const initAmplitude = () => {
  init("default", undefined, {
    useBatch: true,
    defaultTracking: false,
    serverUrl: "https://amplitude.nav.no/collect-auto",
    ingestionMetadata: {
      sourceName: window.location.toString(),
    },
  });
};
