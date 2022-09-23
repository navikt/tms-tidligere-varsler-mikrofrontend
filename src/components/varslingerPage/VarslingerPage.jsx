import { fetchInaktiveNotifikasjoner, fetchAktiveNotifikasjoner, fetchInnloggingsstatus } from "../../api/api";
import { useIntl } from "react-intl";
import { setLocaleDate } from "../../utils/date";
import VarslingerList from "../varslingerList/VarslingerList";
import Filter from "../filter/Filter";
import "./Varslinger.css";

const VarslingerPage = () => {
  const { isLoading, notifikasjoner } = fetchAktiveNotifikasjoner();
  const { isLoadingInaktiv, inaktiveNotifikasjoner } = fetchInaktiveNotifikasjoner();
  const innloggingsstatus = fetchInnloggingsstatus();

  const translate = useIntl();

  setLocaleDate();
  return (
    <section className="varslinger">
      <Filter />
      <VarslingerList
        innloggingsstatus={innloggingsstatus?.authLevel}
        notifikasjoner={notifikasjoner}
        tittel={translate.formatMessage({ id: "varsler-list.tittel.nye-varsler" })}
        isLoading={isLoading}
        aktiv={true}
      />
      <VarslingerList
        innloggingsstatus={innloggingsstatus?.authLevel}
        notifikasjoner={inaktiveNotifikasjoner}
        tittel={translate.formatMessage({ id: "varsler-list.tittel.tidligere-varsler" })}
        isLoading={isLoadingInaktiv}
        aktiv={false}
      />
    </section>
  );
};

export default VarslingerPage;
