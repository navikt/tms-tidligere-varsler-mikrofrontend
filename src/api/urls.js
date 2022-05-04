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

export const notifikasjonerUrl = `${EVENT_HANDLER_URL[getEnvironment()]}/notifikasjon`;
export const inaktiveNotifikasjonerUrl = `${EVENT_HANDLER_URL[getEnvironment()]}/notifikasjon/inaktiv`;
