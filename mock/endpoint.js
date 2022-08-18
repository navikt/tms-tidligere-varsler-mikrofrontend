/*eslint no-undef: "off"*/
const notifikasjoner = require("./mockData/notifikasjoner");
const notifikasjonerInaktiv = require("./mockData/notifikasjoner-inaktiv");
const oppgaver = require("./mockData/oppgave.json");
const beskjeder = require("./mockData/beskjed.json");
const innboks = require("./mockData/innboks.json");
const inaktiveOppgave = require("./mockData/oppgave-inaktiv.json");
const inaktiveBeskjed = require("./mockData/beskjed-inaktiv.json");
const inaktiveInnboks = require("./mockData/innboks-inaktiv.json");

export default [
  {
    url: "/api/fetch/event",
    method: "get",
    response: () => {
      return notifikasjoner;
    },
  },
  {
    url: "/api/fetch/event/inaktive",
    method: "get",
    response: () => {
      return notifikasjonerInaktiv;
    },
  },
  {
    url: "/api/dittnav-api/oppgave",
    method: "get",
    response: () => {
      return oppgaver;
    },
  },
  {
    url: "/api/dittnav-api/innboks",
    method: "get",
    response: () => {
      return innboks;
    },
  },
  {
    url: "/api/dittnav-api/beskjed",
    method: "get",
    response: () => {
      return beskjeder;
    },
  },
  {
    url: "/api/dittnav-api/oppgave/inaktiv",
    method: "get",
    response: () => {
      return inaktiveOppgave;
    },
  },
  {
    url: "/api/dittnav-api/innboks/inaktiv",
    method: "get",
    response: () => {
      return inaktiveInnboks;
    },
  },
  {
    url: "/api/dittnav-api/beskjed/inaktiv",
    method: "get",
    response: () => {
      return inaktiveBeskjed;
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
