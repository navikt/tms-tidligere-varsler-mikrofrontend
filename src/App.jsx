import style from "./App.module.css";
import { LanguageContext } from "./provider/LanguageProvider";
import { useContext, useMemo } from "react";
import { inaktiveVarslerApiUrl } from "./api/urls";
import { fetcher } from "./api/api";
import { byForstBehandlet } from "./utils/date";
import { useQuery } from "react-query";
import { Alert, Heading } from "@navikt/ds-react";
import text from "./language/text";
import Varsel from "./components/varsel/Varsel";
import { selectSearch, selectType } from "./store/selectors";
import useStore from "./store/store";
import Filter from "./components/filter/Filter";

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
    <>
      <Filter />
      <ul className={`${style.varslerList}`}>
        {isSuccess &&
          filtertedVarseler?.map((varsel) => (
            <li key={varsel.eventId}>
              <Varsel varselData={varsel} />
            </li>
          ))}
      </ul>
    </>
  );
};

function App() {
  const language = useContext(LanguageContext);
  const { data: varsler, isSuccess } = useQuery(inaktiveVarslerApiUrl, fetcher);
  const hasMaskedVarsel = varsler && varsler.some((varsel) => varsel.isMasked);

  return (
    <div className={style.app}>
      <Heading size={"large"}>{text["tidligereVarslerOverskrift"][language]}</Heading>
      {hasMaskedVarsel && (
        <Alert className={style.hoyereSikkerhetsnivaaAlert} variant="info">
          {text["hoyereSikkerhetsnivaa"][language]}
        </Alert>
      )}
      {varsler?.length === 0 ? <EmptyVarselList /> : <PageBody varsler={varsler} isSuccess={isSuccess} />}
    </div>
  );
}

export default App;
