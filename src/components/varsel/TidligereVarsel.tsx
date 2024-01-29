import { BodyLong, BodyShort, Chat, Detail, Link, Tag } from "@navikt/ds-react";
import { useContext } from "react";
import BeskjedIkon from "../../assets/BeskjedIkon";
import OppgaveIkon from "../../assets/OppgaveIkon";
import text from "../../language/text";
import { Language, LanguageContext } from "../../provider/LanguageProvider";
import { formatToReadableDate } from "../../utils/date";
import { Varsel } from "./Varsel";
import styles from "./Varsel.module.css";
import { logNavigereBeskjed } from "../../utils/amplitude";
import { ChatIcon, TasklistIcon } from "@navikt/aksel-icons";

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

  return (
    <div className={styles.varselContainer}>
      <div className={styles.iconWrapper} aria-hidden>
        {isOppgave ? <TasklistIcon /> : <ChatIcon />}
      </div>
      <div className={styles.textContainer}>
        {varselData.isMasked || isOppgave || !varselData.link ? (
          <BodyShort
            size="small"
            aria-label={varselData.isMasked ? maskedAriaLabel : undefined}
            className={styles.title}
          >
            <span aria-hidden={varselData.isMasked ? true : undefined}>
              {varselData.isMasked ? maskedText : varselData.tekst}
            </span>
          </BodyShort>
        ) : (
          <a
            onClick={logNavigereBeskjed}
            href={varselData.link}
            aria-label={varselData.isMasked ? maskedAriaLabel : undefined}
            className={styles.link}
          >
            <BodyShort size="small" className={`${styles.title} ${styles.linkText}`}>
              <span aria-hidden={varselData.isMasked ? true : undefined}>
                {varselData.isMasked ? maskedText : varselData.tekst}
              </span>
            </BodyShort>
          </a>
        )}
        <BodyShort className={styles.metadata}>
          {formatToReadableDate(varselData.forstBehandlet)}
          {eksternVarslingStatus && ` - ${eksternVarslingStatus}`}
        </BodyShort>
      </div>
    </div>
  );
}

export default TidligereVarsel;
