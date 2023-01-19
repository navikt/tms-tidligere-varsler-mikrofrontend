import { Heading, Ingress, BodyShort, Tag } from "@navikt/ds-react";
import { useIntl } from "react-intl";
import { setLocaleDate } from "../../utils/date";
import Filter from "../filter/Filter";
import globalStyle from "../../App.module.css";
import style from "./TidligereVarsler.module.css";
import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import { inaktiveVarslerApiUrl, innloggingsstatusUrl } from "../../api/urls";
import Varsel from "../varsel/Varsel";
import { selectSearch, selectType } from "../../store/selectors";
import useStore from "../../store/store";
import EmptyVarselList from "../emptyVarselList/EmptyVarselList";

const VarslingerPage = () => {
  const translate = useIntl();
  const { data: varsler, isSuccess } = useQuery(inaktiveVarslerApiUrl, fetcher);

  const filterType = useStore(selectType);
  const filterSok = useStore(selectSearch);
  const filtertedVarseler = varsler?.filter(
    (varsel) => (filterType === "ALLE" || varsel.type === filterType) && varsel.tekst.toLowerCase().includes(filterSok)
  );
  const hasMaskedVarsel = varsler && varsler.some((varsel) => varsel.tekst === "");

  setLocaleDate();
  return (
    <div className={style.mainWrapper}>
      <div className={`${style.tidligereVarslerHeading} ${globalStyle.tekstInnhold}`}>
        <Heading size={"large"}>{translate.formatMessage({ id: "tidligere-varsler.overskrift" })}</Heading>
        {hasMaskedVarsel && (
          <Ingress className={style.hoyereSikkerhetsnivaaIngress}>
            {translate.formatMessage({ id: "hoyere-sikkerhetnivaa" })}
          </Ingress>
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
