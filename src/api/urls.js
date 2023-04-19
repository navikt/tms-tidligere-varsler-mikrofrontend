const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("www.intern.dev.nav.no");

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
  development: "https://www.intern.dev.nav.no/tms-min-side-proxy/varsel/tms-varsel-api",
  production: "https://www.nav.no/tms-min-side-proxy/varsel/tms-varsel-api",
};

const MIN_SIDE_URL = {
  local: "http://localhost:3000/minside",
  development: "https://www.intern.dev.nav.no/minside",
  production: "https://www.nav.no/minside",
};

const tmsVarselAPI = TMS_VARSEL_API[getEnvironment()];
export const minSideUrl = MIN_SIDE_URL[getEnvironment()];
export const inaktiveVarslerApiUrl = `${tmsVarselAPI}/inaktive`;
export const tidligereVarslerUrl = `${minSideUrl}/varslinger`;
