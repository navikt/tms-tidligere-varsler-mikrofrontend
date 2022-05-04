const notifikasjoner = require("./mockData/notifikasjoner");
const notifikasjonerInaktiv = require("./mockData/notifikasjoner-inaktiv");

export default [
  {
    url: "/api/notifikasjon",
    method: "get",
    response: () => {
      return notifikasjoner;
    },
  },
  {
    url: "/api/notifikasjon/inaktiv",
    method: "get",
    response: () => {
      return notifikasjonerInaktiv;
    },
  },
];
