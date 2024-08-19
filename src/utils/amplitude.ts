import { init, logEvent } from "@amplitude/analytics-browser";

const APP_NAME = "tms-min-side-varslinger";

export const logNavigereBeskjed = () => {
  logEvent("navigere", { app: APP_NAME, komponent: "tidligere-beskjed" });
};

export const logFilterToggle = (filterValg: string) => {
  logEvent("tidligere-varsler-filter", { app: APP_NAME, filterValg: filterValg });
};

export const logClickVarselWithoutLink = (varselType: string) => {
  logEvent("tidligere-varsler-click", { app: APP_NAME, komponent: "varsel-uten-link", varselType: varselType });
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
