import React from "react";
import { Heading, Ingress, BodyShort, Tag, BodyLong } from "@navikt/ds-react";
import style from "./Varsel.module.css";
import VarselTag from "../varselTag/VarselTag";
import { formatToReadableDate } from "../../utils/date";
import { useIntl } from "react-intl";

const getVarsletPaa = (kanaler) => {
  if (kanaler.includes("SMS") && kanaler.includes("EPOST")) {
    return "varsel.varslet-paa-epost-sms";
  } else if (kanaler.includes("SMS")) {
    return "varsel.varslet-paa-sms";
  } else if (kanaler.includes("EPOST")) {
    return "varsel.varslet-paa-epost";
  }
};

function Varsel({ varselData }) {
  const isOppgave = varselData.type === "OPPGAVE";
  const varselMottatt = isOppgave ? "varsel.oppgave-mottatt" : "varsel.beskjed-mottatt";
  const translate = useIntl();
  const maskedText = "** ******* ******* *** * ***** ******** ******** *** ** ***********************";
  const maskedAriaLabel = "Tekst ikke synlig";

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

      <BodyLong size="small" className={style.varselDate}>
        {`${translate.formatMessage({ id: varselMottatt })} ${formatToReadableDate(varselData.forstBehandlet)}`}
      </BodyLong>
    </div>
  );
}

export default Varsel;
