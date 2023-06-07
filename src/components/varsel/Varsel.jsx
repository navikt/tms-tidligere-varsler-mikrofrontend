import { BodyLong, Tag } from "@navikt/ds-react";
import styles from "./Varsel.module.css";
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
    <div className={styles.varselWrapper}>
      <BodyLong aria-label={varselData.isMasked ? maskedAriaLabel : undefined} className={styles.varselHeading}>
        <span aria-hidden={varselData.isMasked ? true : undefined}>
          {varselData.isMasked ? maskedText : varselData.tekst}
        </span>
      </BodyLong>
      <div className={styles.varselMetaData}>
        {isOppgave ? <OppgaveIkon /> : <BeskjedIkon />}
        <Tag className={styles.tag} variant="neutral" size="small">{`${
          text["varselMottatt"][language]
        } ${formatToReadableDate(varselData.forstBehandlet)}`}</Tag>
        {eksternVarslingStatus && (
          <Tag variant="neutral" size="small" className={`${styles.tag} ${styles.eksternVarslingStatus}`}>
            {eksternVarslingStatus}
          </Tag>
        )}
      </div>
    </div>
  );
}

export default Varsel;
