import { useQuery } from "react-query";
import { useMemo, useContext } from "react";
import { Heading, Alert } from "@navikt/ds-react";
import EmptyVarselList from "../emptyVarselList/EmptyVarselList";
import Filter from "../filter/Filter";
import Varsel from "../varsel/Varsel";
import { setLocaleDate, byForstBehandlet } from "../../utils/date";
import { fetcher } from "../../api/api";
import { inaktiveVarslerApiUrl } from "../../api/urls";
import { selectSearch, selectType } from "../../store/selectors";
import useStore from "../../store/store";
import style from "./TidligereVarsler.module.css";
import globalStyle from "../../App.module.css";
import text from "../../language/text";
import { LanguageContext } from "../../provider/LanguageProvider";

const VarslingerPage = () => {
  const language = useContext(LanguageContext);
  const { data: varsler, isSuccess } = useQuery(inaktiveVarslerApiUrl, fetcher);

  const filterType = useStore(selectType);
  const filterSok = useStore(selectSearch);

  const sortedVarsler = useMemo(() => varsler?.sort(byForstBehandlet));
  const filtertedVarseler = sortedVarsler?.filter(
    (varsel) =>
      (filterType === "ALLE" || varsel.type === filterType) &&
      (varsel.tekst === null || varsel.tekst.toLowerCase().includes(filterSok))
  );
  const hasMaskedVarsel = varsler && varsler.some((varsel) => varsel.isMasked);

  setLocaleDate();
  return (
    <div className={style.mainWrapper}>
      <div className={`${style.tidligereVarslerHeading} ${globalStyle.tekstInnhold}`}>
        <Heading size={"large"}>{text["tidligereVarslerOverskrift"][language]}</Heading>
        {hasMaskedVarsel && (
          <Alert className={style.hoyereSikkerhetsnivaaAlert} variant="info">
            {text["hoyereSikkerhetsnivaa"][language]}
          </Alert>
        )}
      </div>
      {varsler?.length === 0 ? (
        <EmptyVarselList />
      ) : (
        <>
          <Filter />
          <div className={globalStyle.tekstInnhold}>
            {isSuccess && (
              <ul className={style.varslerList}>
                {filtertedVarseler.map((varsel) => (
                  <li key={varsel.eventId}>
                    <Varsel varselData={varsel} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default VarslingerPage;
