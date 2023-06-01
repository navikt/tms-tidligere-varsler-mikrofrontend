import { useContext, useMemo } from "react";
import { BodyLong, BodyShort } from "@navikt/ds-react";
import Varsel from "../varsel/Varsel";
import style from "./TidligereVarslerPage.module.css";
import { selectSearch, selectType } from "../../store/selectors";
import { byForstBehandlet } from "../../utils/date";
import TomSokKatt from "../../assets/TomSokKatt";
import Filter from "../filter/Filter";
import useStore from "../../store/store";
import { LanguageContext } from "../../provider/LanguageProvider";
import text from "../../language/text";

const TidligereVarslerPage = ({ varsler, isSuccess }) => {
  const language = useContext(LanguageContext);
  const filterType = useStore(selectType);
  const filterSok = useStore(selectSearch);

  const sortedVarsler = useMemo(() => varsler?.sort(byForstBehandlet));
  const filtertedVarseler = sortedVarsler?.filter(
    (varsel) =>
      (filterType === "ALLE" || varsel.type === filterType) &&
      (varsel.tekst === null || varsel.tekst.toLowerCase().includes(filterSok))
  );

  return (
    <>
      <Filter />
      <BodyShort className={style.numberOfSearchHit}>
        {text.antallSokeTreff(language, filtertedVarseler.length, varsler.length)}
      </BodyShort>
      {filtertedVarseler.length > 0 ? (
        <ul className={style.varslerList}>
          {isSuccess &&
            filtertedVarseler?.map((varsel) => (
              <li key={varsel.eventId}>
                <Varsel varselData={varsel} />
              </li>
            ))}
        </ul>
      ) : (
        <div className={style.emptySearchContainer}>
          <TomSokKatt />
          <BodyLong className={style.emptySearchDescription}>{text["ingenSokeresultat"][language]}</BodyLong>
        </div>
      )}
    </>
  );
};

export default TidligereVarslerPage;
