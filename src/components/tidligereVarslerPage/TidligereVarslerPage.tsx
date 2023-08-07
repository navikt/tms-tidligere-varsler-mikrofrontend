import { BodyLong, Heading } from "@navikt/ds-react";
import { useContext, useMemo } from "react";
import TomSokKatt from "../../assets/TomSokKatt";
import text from "../../language/text";
import { LanguageContext } from "../../provider/LanguageProvider";
import { selectSearch, selectType } from "../../store/selectors";
import useStore from "../../store/store";
import { byForstBehandlet } from "../../utils/date";
import Filter from "../filter/Filter";
import TidligereVarsel from "../varsel/TidligereVarsel";
import { Varsel } from "../varsel/Varsel";
import styles from "./TidligereVarslerPage.module.css";

const TidligereVarslerPage = ({ varsler, isSuccess }: { varsler: Array<Varsel>; isSuccess: boolean }) => {
  const language = useContext(LanguageContext);
  const filterType = useStore(selectType);
  const filterSok = useStore(selectSearch);

  const sortedVarsler = useMemo(() => varsler?.sort(byForstBehandlet), [varsler]);
  const filtertedVarseler = sortedVarsler?.filter(
    (varsel) =>
      (filterType === "alle" || varsel.type.toLowerCase() === filterType) &&
      (varsel.tekst === null || varsel.tekst.toLowerCase().includes(filterSok))
  );

  return (
    <>
      <Filter />
      <Heading level="2" size="xsmall" className={styles.varslerListHeading}>
        {text.antallSokeTreff(language, filtertedVarseler.length, varsler.length)}
      </Heading>
      {filtertedVarseler.length > 0 ? (
        <ul className={styles.varslerList}>
          {isSuccess &&
            filtertedVarseler?.map((varsel) => (
              <li key={varsel.eventId}>
                <TidligereVarsel varselData={varsel} />
              </li>
            ))}
        </ul>
      ) : (
        <div className={styles.emptySearchContainer}>
          <TomSokKatt />
          <BodyLong className={styles.emptySearchDescription}>{text.ingenSokeresultat[language]}</BodyLong>
        </div>
      )}
    </>
  );
};

export default TidligereVarslerPage;
