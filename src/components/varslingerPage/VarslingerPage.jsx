import { fetchInaktiveNotifikasjoner, fetchAktiveNotifikasjoner } from "../../api/api";
import { setLocaleDate } from "../../utils/date";
import VarslingerList from "../varslingerList/VarslingerList";
import Filter from "../filter/Filter";
import "./Varslinger.css";

const VarslingerPage = () => {
  const { isLoading, data: notifikasjoner } = fetchAktiveNotifikasjoner();
  const { isLoading: isLoadingInaktiv, data: inaktiveNotifikasjoner } = fetchInaktiveNotifikasjoner();

  setLocaleDate();
  return (
    <section className="varslinger">
      <Filter />
      <VarslingerList notifikasjoner={notifikasjoner} tittel={"Nye varsler"} isLoading={isLoading} />
      <VarslingerList
        notifikasjoner={inaktiveNotifikasjoner}
        tittel={"Tidligere varsler"}
        isLoading={isLoadingInaktiv}
      />
    </section>
  );
};

export default VarslingerPage;
