import { fetchInaktiveNotifikasjoner, fetchAktiveNotifikasjoner, fetchInnloggingsstatus } from "../../api/api";
import { setLocaleDate } from "../../utils/date";
import VarslingerList from "../varslingerList/VarslingerList";
import Filter from "../filter/Filter";
import "./Varslinger.css";

const VarslingerPage = () => {
  const { isLoading, notifikasjoner } = fetchAktiveNotifikasjoner();
  const { isLoadingInaktiv, inaktiveNotifikasjoner } = fetchInaktiveNotifikasjoner();
  const innloggingsstatus = fetchInnloggingsstatus();

  setLocaleDate();
  return (
    <section className="varslinger">
      <Filter />
      <VarslingerList
        innloggingsstatus={innloggingsstatus?.authLevel}
        notifikasjoner={notifikasjoner}
        tittel={"Nye varsler"}
        isLoading={isLoading}
        aktiv={true}
      />
      <VarslingerList
        innloggingsstatus={innloggingsstatus?.authLevel}
        notifikasjoner={inaktiveNotifikasjoner}
        tittel={"Tidligere varsler"}
        isLoading={isLoadingInaktiv}
        aktiv={false}
      />
    </section>
  );
};

export default VarslingerPage;
