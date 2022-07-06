const isProduction = window.location.href.includes("www.intern.nav.no") || window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("www.dev.nav.no");

export const getEnvironment = () => {
  if (isDevelopment) {
    return "development";
  }

  if (isProduction) {
    return "production";
  }

  return "local";
};

const INNLOGGINSSTATUS_URL = {
  local: "http://localhost:3000/innloggingsstatus/summary",
  development: "https://innloggingsstatus.dev.nav.no/person/innloggingsstatus/summary",
  production: "https://innloggingsstatus.nav.no/person/innloggingsstatus/summary",
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

const LOGINSERVICE_LEVEL4_URL = {
  local: "http://localhost:3000/loginservice",
  development: "https://loginservice.dev.nav.no/login?level=Level4",
  production: "https://loginservice.nav.no/login?level=Level4",
};

const MIN_SIDE_URL = {
  local: "http://localhost:3000/minside",
  development: "https://www.dev.nav.no/minside",
  production: "https://www.intern.nav.no/minside",
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

export const doneUrl = `${dittNavApiUrl}/produce/done`;
export const digisosDoneUrl = `${dittNavApiUrl}/digisos/paabegynte/done`;

export const loginserviceStepUpUrl = `${LOGINSERVICE_LEVEL4_URL}&redirect=${MIN_SIDE_URL}`;
export const innloggingsstatusUrl = INNLOGGINSSTATUS_URL[getEnvironment()];
