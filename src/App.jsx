import style from "./App.module.css";
import { LanguageContext } from "./provider/LanguageProvider";
import { useContext, useMemo } from "react";
import { inaktiveVarslerApiUrl } from "./api/urls";
import { fetcher } from "./api/api";
import { byForstBehandlet } from "./utils/date";
import { useQuery } from "react-query";
import { Alert, BodyLong, Heading, Loader } from "@navikt/ds-react";
import text from "./language/text";
import Varsel from "./components/varsel/Varsel";
import { selectSearch, selectType } from "./store/selectors";
import useStore from "./store/store";
import Filter from "./components/filter/Filter";
import NoTidligereVarslerPage from "./components/NoTidligereVarslerPage/NoTidligereVarslerPage.jsx";
import TomSokKatt from "./assets/TomSokKatt";

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
    <div className={style.tidligereVarslerPage}>
      <Filter />
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
    </div>
  );
};

function App() {
  const language = useContext(LanguageContext);
  const { data: varsler, isSuccess, isLoading } = useQuery(inaktiveVarslerApiUrl, fetcher);
  const hasMaskedVarsel = varsler && varsler.some((varsel) => varsel.isMasked);

  return (
    <div className={style.app}>
      <Heading className={style.pageTitle} size={"large"}>
        {text["tidligereVarslerOverskrift"][language]}
      </Heading>
      {hasMaskedVarsel && (
        <Alert className={style.authenticationAlert} variant="info">
          {text["hoyereSikkerhetsnivaa"][language]}
        </Alert>
      )}
      {isLoading ? (
        <Loader className={style.loader} size="3xlarge" title="venter..." />
      ) : varsler.length === 0 ? (
        <NoTidligereVarslerPage />
      ) : (
        <TidligereVarslerPage varsler={varsler} isSuccess={isSuccess} />
      )}
    </div>
  );
}

export default App;
