import useStore from "../../store/store";
import { selectSearch, selectType } from "../../store/selectors";
import Beskjed from "./beskjed/Beskjed";
import Oppgave from "./oppgave/Oppgave";
import Innboks from "./innboks/Innboks";
import "./Notifikasjon.css";

const mapTypeToComponent = {
  beskjed: Beskjed,
  oppgave: Oppgave,
  innboks: Innboks,
};

const Notifikasjon = ({ notifikasjon, aktiv, isMasked }) => {
  const filterType = useStore(selectType);
  const filterSok = useStore(selectSearch);

  const type = notifikasjon.type;
  const NotifikasjonComponent = mapTypeToComponent[type];

  const innholderSok = notifikasjon.tekst.toLowerCase().includes(filterSok.toLowerCase());
  const showNotifikasjon = (filterType === type || filterType === "alle") && innholderSok;

  return (
    showNotifikasjon && (
      <li>
        <NotifikasjonComponent props={notifikasjon} aktiv={aktiv} isMasked={isMasked} />
      </li>
    )
  );
};

export default Notifikasjon;
