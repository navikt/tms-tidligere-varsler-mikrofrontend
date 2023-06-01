import React from "react";
import { Heading, Tag } from "@navikt/ds-react";
import style from "./Varsel.module.css";
import { formatToReadableDate } from "../../utils/date";
import { useContext } from "react";
import { LanguageContext } from "../../provider/LanguageProvider";
import text from "../../language/text";
import BeskjedIkon from "../../assets/BeskjedIkon";
import OppgaveIkon from "../../assets/OppgaveIkon";

const getVarsletPaa = (kanaler, language) => {
  if (kanaler.includes("SMS") && kanaler.includes("EPOST")) {
    return text["varselEksterntVarsletEpostOgSMS"][language];
  } else if (kanaler.includes("SMS")) {
    return text["varselEksterntVarsletSMS"][language];
  } else if (kanaler.includes("EPOST")) {
    return text["varselEksterntVarsletEpost"][language];
  }
};

function Varsel({ varselData }) {
  const isOppgave = varselData.type === "OPPGAVE";
  const language = useContext(LanguageContext);
  const maskedText = "**** **** **** **** **** ****";
  const maskedAriaLabel = "Tekst ikke synlig";

  const eksternVarslingStatus = getVarsletPaa(varselData.eksternVarslingKanaler, language);

  return (
    <div className={style.varselWrapper}>
      <Heading
        level="2"
        size="xsmall"
        aria-label={varselData.isMasked ? maskedAriaLabel : undefined}
        className={style.varselHeading}
      >
        <span aria-hidden={varselData.isMasked ? true : undefined}>
          {varselData.isMasked ? maskedText : varselData.tekst}
        </span>
      </Heading>
      <div className={style.varselMetaData}>
        {isOppgave ? <OppgaveIkon /> : <BeskjedIkon />}
        <Tag className={style.tag} variant="neutral" size="small">{`${
          text["varselMottatt"][language]
        } ${formatToReadableDate(varselData.forstBehandlet)}`}</Tag>
        {eksternVarslingStatus && (
          <Tag variant="neutral" size="small" className={`${style.tag} ${style.eksternVarslingStatus}`}>
            {eksternVarslingStatus}
          </Tag>
        )}
      </div>
    </div>
  );
}

export default Varsel;
