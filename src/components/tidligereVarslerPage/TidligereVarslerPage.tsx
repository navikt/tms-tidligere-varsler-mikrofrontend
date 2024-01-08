import { BodyLong, Heading } from "@navikt/ds-react";
import { useContext, useMemo } from "react";
import TomSokKatt from "../../assets/TomSokKatt";
import text from "../../language/text";
import { LanguageContext } from "../../provider/LanguageProvider";
import { filterSearch, filterType } from "../../store/store";
import { byForstBehandlet } from "../../utils/date";
import Filter from "../filter/Filter";
import TidligereVarsel from "../varsel/TidligereVarsel";
import { Varsel } from "../varsel/Varsel";
import { useStore } from "@nanostores/react";
import styles from "./TidligereVarslerPage.module.css";

const TidligereVarslerPage = ({ varsler, isSuccess }: { varsler: Array<Varsel>; isSuccess: boolean }) => {
  const language = useContext(LanguageContext);

  const selectedFilter = useStore(filterType);
  const searchTextInput = useStore(filterSearch);

  const sortedVarsler = useMemo(() => varsler?.sort(byForstBehandlet), [varsler]);
  const filtertedVarseler = sortedVarsler?.filter(
    (varsel) =>
      (selectedFilter === "alle" || varsel.type.toLowerCase() === selectedFilter) &&
      (varsel.tekst === null || varsel.tekst.toLowerCase().includes(searchTextInput)),
  );

  console.log(filterType.get());
  console.log(filtertedVarseler);

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
