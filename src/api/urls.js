const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("www.dev.nav.no");

export const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};

const EVENT_HANDLER_URL = {
  local: "http://localhost:3000/api",
  development: "https://person.dev.nav.no/dittnav-event-handler",
  production: "https://person.nav.no/dittnav-event-handler",
};

const DITTNAV_API_URL = {
  local: "http://localhost:3000/api/dittnav-api",
  development: "https://person.dev.nav.no/dittnav-api",
  production: "https://person.nav.no/dittnav-api",
};

const dittNavApiUrl = DITTNAV_API_URL[getEnvironment()];

export const notifikasjonerUrl = `${EVENT_HANDLER_URL[getEnvironment()]}/fetch/event`;
export const inaktiveNotifikasjonerUrl = `${EVENT_HANDLER_URL[getEnvironment()]}/fetch/event/inaktive`;

export const oppgaverApiUrl = `${dittNavApiUrl}/oppgave`;
export const beskjederApiUrl = `${dittNavApiUrl}/beskjed`;
export const innboksApiUrl = `${dittNavApiUrl}/innboks`;

export const inaktiveOppgaverApiUrl = `${dittNavApiUrl}/oppgave/inaktiv`;
export const inaktiveBeskjederApiUrl = `${dittNavApiUrl}/beskjed/inaktiv`;
export const inaktiveInnboksApiUrl = `${dittNavApiUrl}/innboks/inaktiv`;

export const doneUrl = `${dittNavApiUrl}/producer/done`;
export const digisosDoneUrl = `${dittNavApiUrl}/digisos/paabegynte/done`;
