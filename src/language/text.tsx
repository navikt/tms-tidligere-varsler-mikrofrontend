const text = {
  tidligereVarslerOverskrift: {
    nb: "Tidligere varsler",
    nn: "Tidlegare varsel",
    en: "Past notifications",
  },
  sidebeskrivelse: {
    //Fylle inn oversettelsene for nn og en før bruk
    nb: "Vi viser tidligere varsler fra siste 12 måneder.",
    nn: "Vi viser tidligare varsel fra dei siste 12 månadar.",
    en: "Showing inactive notifications from last 12 months.",
  },
  hoyereSikkerhetsnivaa: {
    nb: "Du må logge inn med BankID, Buypass eller Commfides for å se alle varslene.",
    nn: "Du må logge inn med BankID, Buypass eller Commfides for å sjå alle varsla.",
    en: "Please log in with BankID, Buypass or Commfides to see all notifications.",
  },
  sokefeltLabel: {
    nb: "Søk i varsler",
    nn: "Søk i varsel",
    en: "Search notifications",
  },
  filterToggleItemAlle: {
    nb: "Alle",
    nn: "Alle",
    en: "All",
  },
  filterToggleItemOppgave: {
    nb: "Oppgave",
    nn: "Oppgåve",
    en: "Task",
  },
  filterToggleItemBeskjed: {
    nb: "Beskjed",
    nn: "Beskjed",
    en: "Message",
  },
  filterToggleItemInnboks: {
    nb: "Innboks",
    nn: "Innboks",
    en: "Inbox",
  },
  varslerListTittelNyeVarsler: {
    nb: "Nye varsler",
    nn: "Nye varsel",
    en: "New notifications",
  },
  varslerListTittelTidligereVarsler: {
    nb: "Tidligere varsler",
    nn: "Tidlegare varsel",
    en: "Past notifications",
  },
  beskjedArkiverButtonLabel: {
    nb: "Arkiver",
    nn: "Arkiver",
    en: "Archive",
  },
  beskjedMaskedTitle: {
    nb: "Du har fått en beskjed, logg inn med høyere sikkerhetsnivå for å se meldingen.",
    nn: "Du har fått ein beskjed, logg inn med høgare sikkerheitsnivå for å sjå beskjeden.",
    en: "You have a message, please log in with a higher security level to read the message.",
  },
  oppgaveMaskedTitle: {
    nb: "Du har fått en oppgave, logg inn med høyere sikkerhetsnivå for å se oppgaven.",
    nn: "Du har fått ei oppgåve, logg inn med høgare sikkerheitsnivå for å sjå oppgåva.",
    en: "You have a task, please log in with a higher security level to see the task.",
  },
  varslerIngenNyeVarsler: {
    nb: "Du har ingen nye varsler",
    nn: "Du har ingen nye varsel",
    en: "You have no new messages.",
  },
  varslerViVarslerDeg: {
    nb: "Vi varsler deg når noe skjer",
    nn: "Vi varslar deg når noko skjer",
    en: "We will notify you when something happens.",
  },
  ingenTidligereVarslerHeader: {
    nb: "Du har ingen tidligere varsler",
    nn: "Du har ingen tidlegare varsel",
    en: "You have no past notifications",
  },
  ingenTidligereVarslerbody: {
    nb: "Når du har gjort en oppgave eller lest en beskjed havner de her.",
    nn: "Når du har gjort ei oppgåve eller lest ein beskjed ligg dei her.",
    en: "When you have completed a task or read a message, you will find them here.",
  },
  ingenSokeresultat: {
    nb: "Vi fant dessverre ikke det du søkte etter. Sjekk om du har skrevet feil eller prøv med et annet søkeord.",
    nn: "Vi fann dessverre ikkje det du søkte etter. Sjekk om du har skrive feil eller prøv med eit anna søkeord.",
    en: "Unfortunately, we did not find what you were looking for. Check if you have typed it wrong or try another search term.",
  },
  varselMottatt: {
    nb: "Mottatt",
    nn: "Motteke",
    en: "Received",
  },
  gaaTilMinSide: {
    nb: "Gå til Min side",
    nn: "Gå til Mi Side",
    en: "Go to My page",
  },
  varselEksterntVarsletSMS: {
    nb: "Varslet på SMS",
    nn: "Varslet på SMS",
    en: "Notified by SMS",
  },
  varselEksterntVarsletEpost: {
    nb: "Varslet på e-post",
    nn: "Varslet på e-post",
    en: "Notified by e-mail",
  },
  varselEksterntVarsletEpostOgSMS: {
    nb: "Varslet på e-post og SMS",
    nn: "Varslet på e-post og SMS",
    en: "Notified by e-mail and SMS",
  },
  antallSokeTreff: (language: string, hits: number, totalNumberOfSearch: number) => {
    if (language === "en") {
      return `Showing ${hits} out of ${totalNumberOfSearch} notifications`;
    } else if (language === "nn") {
      return `Viser ${hits} av ${totalNumberOfSearch} varsel`;
    } else {
      return `Viser ${hits} av ${totalNumberOfSearch} varsler`;
    }
  },
};

export default text;
