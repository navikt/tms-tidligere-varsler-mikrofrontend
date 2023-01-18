/*eslint no-undef: "off"*/
const inaktiveVarsler = require("./mockData/varsler-inaktiv.json");

export default [
  {
    url: "/api/dittnav-api/inaktive",
    method: "get",
    response: () => {
      return [
        {
          eventId: "1584093204636",
          type: "oppgave",
          varselMottatt: "2022-02-01T11:12:04+01:00",
          sistOppdatert: "2022-04-01T11:16:04+01:00",
          arkivertAvNAV: false,
          tekst: "Du har sagt du skal ettersende vedlegg til Søknad om stønad til anskaffelse av motorkjøretøy",
          produsent: "henvendelse",
          isMasked: false,
          eksternVarslingSendt: false,
          eksternVarslingKanaler: ["SMS"],
        },
        {
          eventId: "1584093785733",
          type: "oppgave",
          varselMottatt: "2020-03-13T09:03:05.934825",
          sistOppdatert: "2020-04-01T11:16:04+01:00",
          arkivertAvNAV: true,
          tekst: "Mangelende dokumentasjon til søknad",
          produsent: "henvendelse",
          isMasked: false,
          eksternVarslingSendt: false,
          eksternVarslingKanaler: ["EPOST"],
        },
        {
          eventId: "3984093204236",
          type: "beskjed",
          varselMottatt: "2021-01-01T11:12:04+01:00",
          sistOppdatert: "2022-04-01T11:16:04+01:00",
          arkivertAvNAV: false,
          tekst: "Svar fra veilederen din i innboksen: Hei, nå har jeg sjekket om...",
          produsent: "henvendelse",
          isMasked: false,
          eksternVarslingSendt: false,
          eksternVarslingKanaler: ["SMS", "EPOST"],
        },
        {
          eventId: "1584093197470",
          type: "beskjed",
          varselMottatt: "2021-01-01T11:12:04+01:00",
          sistOppdatert: "2022-04-01T11:16:04+01:00",
          arkivertAvNAV: false,
          tekst:
            "Søknad om forskudd på dagpenger er mottatt. Hvis du trenger forskudd på dagpenger eller ettersende vedlegg til sønakden din kan du trykke deg inn i den nye forskuddskøsningen ved å gå til denne siden.",
          produsent: "henvendelse",
          isMasked: false,
          eksternVarslingSendt: false,
          eksternVarslingKanaler: [],
        },
        {
          eventId: "1174857474672",
          type: "beskjed",
          varselMottatt: "2019-11-27T12:24:34.671Z",
          sistOppdatert: "2020-04-01T11:16:04+01:00",
          arkivertAvNAV: true,
          tekst: "Vi mangler vedlegg for å kunne behandle søknaden din om dagpenger",
          produsent: "henvendelse",
          isMasked: false,
          eksternVarslingSendt: false,
          eksternVarslingKanaler: [],
        },
        {
          eventId: "1584093781449",
          type: "beskjed",
          varselMottatt: "2019-11-27T12:24:34.671Z",
          sistOppdatert: "2020-04-01T11:16:04+01:00",
          arkivertAvNAV: true,
          tekst: "",
          produsent: "henvendelse",
          isMasked: true,
          eksternVarslingSendt: false,
          eksternVarslingKanaler: [],
        },
      ];
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
