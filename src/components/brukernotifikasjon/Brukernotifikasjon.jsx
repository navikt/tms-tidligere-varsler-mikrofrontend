import useStore from "../../store/store";
import { selectSearch, selectType } from "../../store/selectors";
import BrukernotifikasjonPanel from "./brukernotifikasjonPanel/BrukernotifikasjonPanel";
import BrukernotifikasjonLinkPanel from "./brukernotifikasjonLinkPanel/BrukernotifikasjonLinkPanel";

const Brukernotifikasjon = ({ notifikasjon }) => {
  const filterType = useStore(selectType);
  const filterSok = useStore(selectSearch);

  const tittel = notifikasjon.tekst;
  const dato = notifikasjon.sistOppdatert;
  const type = notifikasjon.type;

  const erPanelMedArkiver = notifikasjon.link === "" && type === "beskjed";
  const innholderSok = notifikasjon.tekst.toLowerCase().includes(filterSok.toLowerCase());
  const showNotifikasjon = filterType === type || (filterType === "alle" && innholderSok);

  if (!showNotifikasjon) {
    return "";
  }
  return erPanelMedArkiver ? (
    <BrukernotifikasjonPanel tittel={tittel} dato={dato} />
  ) : (
    <BrukernotifikasjonLinkPanel tittel={tittel} dato={dato} type={type} />
  );
};
export default Brukernotifikasjon;
