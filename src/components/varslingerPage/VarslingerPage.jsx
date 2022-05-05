import { fetchInktivBrukernotifikasjoner, fetchAktivNotifikasjoner } from "../../api/api";
import { setLocaleDate } from "../../utils/date";
import VarslingerList from "../varslingerList/VarslingerList";
import Filter from "../filter/Filter";
import "./Varslinger.css";

const VarslingerPage = () => {
  const { isLoading, data: notifikasjoner } = fetchAktivNotifikasjoner();
  const { isLoading: isLoadingInaktiv, data: inaktiveNotifikasjoner } = fetchInktivBrukernotifikasjoner();

  setLocaleDate();
  return (
    <section className="varslinger">
      <Filter />
      <VarslingerList brukernotifikasjoner={notifikasjoner} tittel={"Nye varsler"} isLoading={isLoading} />
      <VarslingerList
        brukernotifikasjoner={inaktiveNotifikasjoner}
        tittel={"Tidligere varsler"}
        isLoading={isLoadingInaktiv}
      />
    </section>
  );
};

export default VarslingerPage;
