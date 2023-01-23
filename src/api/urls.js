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

const TMS_VARSEL_API = {
  local: "http://localhost:3000/api/tms-varsel-api",
  development: "https://www.dev.nav.no/tms-varsel-api",
  production: "https://www.nav.no/tms-varsel-api",
};

const LOGINSERVICE_LEVEL4_URL = {
  local: "http://localhost:3000/loginservice",
  development: "https://loginservice.dev.nav.no/login?level=Level4",
  production: "https://loginservice.nav.no/login?level=Level4",
};

const MIN_SIDE_URL = {
  local: "http://localhost:3000/minside",
  development: "https://www.dev.nav.no/minside",
  production: "https://www.nav.no/minside",
};

const tmsVarselAPI = TMS_VARSEL_API[getEnvironment()];
export const minSideUrl = MIN_SIDE_URL[getEnvironment()];

export const apiLoginUrl = `${tmsVarselAPI}/login`;
export const apiStatusUrl = `${apiLoginUrl}/status`;
export const inaktiveVarslerApiUrl = `${tmsVarselAPI}/inaktive`;

export const loginserviceStepUpUrl = `${LOGINSERVICE_LEVEL4_URL[getEnvironment()]}&redirect=${minSideUrl}`;

export const tidligereVarslerUrl = `${minSideUrl}/varslinger`;
