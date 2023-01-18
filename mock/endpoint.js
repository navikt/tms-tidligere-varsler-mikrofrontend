/*eslint no-undef: "off"*/
const inaktiveVarsler = require("./mockData/varsler-inaktiv.json");

export default [
  {
    url: "/api/dittnav-api/varsler/inaktive",
    method: "get",
    response: () => {
      return [];
    },
  },
  {
    url: "/innloggingsstatus/summary",
    method: "get",
    response: () => {
      return {
        authenticated: true,
        authLevel: 4,
        oidc: {
          authLevel: 4,
          issueTime: "2022-06-11T01:45:40",
          expiryTime: "2022-06-11T02:45:40",
        },
      };
    },
  },
];
