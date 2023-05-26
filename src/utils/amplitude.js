import amplitude from "amplitude-js";

export const komponent = {
  nyOppgave: "Nye varsler - oppgave",
  nyBeskjed: "Nye varsler - beskjed",
  nyInnboks: "Nye varsler - innboks",
  tidligereOppgave: "Tidligere varsler - oppgave",
  tidligereBeskjed: "Tidligere varsler - beskjed",
  tidligereInnboks: "Tidligere varsler - innboks",
};

export const initializeAmplitude = () => {
  amplitude.getInstance().init("default", "", {
    apiEndpoint: "amplitude.nav.no/collect-auto",
    saveEvents: false,
    includeUtm: true,
    includeReferrer: true,
    platform: window.location.toString(),
  });
};

export function logAmplitudeEvent(komponent) {
  amplitude.getInstance().logEvent("navigere", {
    label,
  });
}
