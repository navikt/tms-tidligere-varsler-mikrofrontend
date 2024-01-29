import { ChatIcon, CheckmarkCircleIcon, ChevronRightIcon } from "@navikt/aksel-icons";
import { BodyLong, BodyShort } from "@navikt/ds-react";
import { useContext } from "react";
import text from "../../language/text";
import { Language, LanguageContext } from "../../provider/LanguageProvider";
import { logNavigereBeskjed } from "../../utils/amplitude";
import { formatToReadableDate } from "../../utils/date";
import { Varsel } from "./Varsel";
import styles from "./Varsel.module.css";

const getVarsletPaa = (kanaler: string[], language: Language) => {
  if (kanaler.includes("SMS") && kanaler.includes("EPOST")) {
    return text.varselEksterntVarsletEpostOgSMS[language];
  } else if (kanaler.includes("SMS")) {
    return text.varselEksterntVarsletSMS[language];
  } else if (kanaler.includes("EPOST")) {
    return text.varselEksterntVarsletEpost[language];
  }
};

function TidligereVarsel({ varselData }: { varselData: Varsel }) {
  const isOppgave = varselData.type.toLowerCase() === "oppgave";
  const language = useContext(LanguageContext);
  const maskedText = "**** **** **** **** **** ****";
  const maskedAriaLabel = "Tekst ikke synlig";

  const eksternVarslingStatus = getVarsletPaa(varselData.eksternVarslingKanaler, language);

  const VarselMetadata = (
    <BodyShort size="small" className={styles.metadata}>
      {formatToReadableDate(varselData.forstBehandlet)}
      {eksternVarslingStatus && ` - ${eksternVarslingStatus}`}
    </BodyShort>
  );

  const VarselHeader = (
    <div className={styles.header}>
      {isOppgave ? (
        <>
          <div className={styles.iconWrapper}>
            <CheckmarkCircleIcon className={styles.icon} aria-hidden />
          </div>
          <BodyShort>{text.filterToggleItemOppgave[language]}</BodyShort>
        </>
      ) : (
        <>
          <div className={styles.iconWrapper}>
            <ChatIcon className={styles.icon} aria-hidden />
          </div>
          <BodyShort>{text.filterToggleItemBeskjed[language]}</BodyShort>
        </>
      )}
    </div>
  );

  if (varselData.isMasked) {
    return (
      <div className={styles.varselContainer}>
        {VarselHeader}
        <BodyLong aria-label={maskedAriaLabel} className={styles.title}>
          <span aria-hidden={true}>{maskedText}</span>
        </BodyLong>
        {VarselMetadata}
      </div>
    );
  } else if (varselData.link && !isOppgave) {
    return (
      <a onClick={logNavigereBeskjed} href={varselData.link} className={styles.link}>
        <div className={styles.varselContainer}>
          {VarselHeader}
          <div className={styles.clickableTitleContainer}>
            <BodyLong className={styles.linkText}>{varselData.tekst}</BodyLong>
            <ChevronRightIcon fontSize="24px" className={styles.chevron} />
          </div>
          {VarselMetadata}
        </div>
      </a>
    );
  } else {
    return (
      <div className={styles.varselContainer}>
        {VarselHeader}
        <BodyLong>{varselData.tekst}</BodyLong>
        {VarselMetadata}
      </div>
    );
  }
}

export default TidligereVarsel;
