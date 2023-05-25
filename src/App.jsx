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
import EmptyVarselList from "./components/emptyVarselList/EmptyVarselList.jsx";

const PageBody = ({ varsler, isSuccess }) => {
  const filterType = useStore(selectType);
  const filterSok = useStore(selectSearch);

  const sortedVarsler = useMemo(() => varsler?.sort(byForstBehandlet));
  const filtertedVarseler = sortedVarsler?.filter(
    (varsel) =>
      (filterType === "ALLE" || varsel.type === filterType) &&
      (varsel.tekst === null || varsel.tekst.toLowerCase().includes(filterSok))
  );

  return (
    <div className={style.pageBody}>
      <Filter />
      <ul className={`${style.varslerList}`}>
        {isSuccess &&
          filtertedVarseler?.map((varsel) => (
            <li key={varsel.eventId}>
              <Varsel varselData={varsel} />
            </li>
          ))}
      </ul>
    </div>
  );
};

function App() {
  const language = useContext(LanguageContext);
  const { data: varsler, isSuccess, isLoading } = useQuery(inaktiveVarslerApiUrl, fetcher);
  const hasMaskedVarsel = varsler && varsler.some((varsel) => varsel.isMasked);
  const visVarsel = false;

  return (
    <div className={style.app}>
      <Heading className={style.pageTitle} size={"large"}>
        {text["tidligereVarslerOverskrift"][language]}
      </Heading>
      {!visVarsel && (
        <Alert className={style.authenticationAlert} variant="info">
          {text["hoyereSikkerhetsnivaa"][language]}
        </Alert>
      )}
      {isLoading ? (
        <Loader className={style.loader} size="3xlarge" title="venter..." />
      ) : visVarsel ? (
        <EmptyVarselList />
      ) : (
        <PageBody varsler={varsler} isSuccess={isSuccess} />
      )}
    </div>
  );
}

export default App;
