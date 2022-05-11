import useStore from "../../store/store";
import { selectSearch, selectType } from "../../store/selectors";
import NotifikasjonPanel from "./notifikasjonPanel/NotifikasjonPanel";
import NotifikasjonLinkPanel from "./notifikasjonLinkPanel/NotifikasjonLinkPanel";

const Notifikasjon = ({ notifikasjon }) => {
  const filterType = useStore(selectType);
  const filterSok = useStore(selectSearch);

  const tittel = notifikasjon.tekst;
  const dato = notifikasjon.sistOppdatert;
  const type = notifikasjon.type;
  const link = notifikasjon.link;

  const isArkiver = link === "" && type === "beskjed";
  const innholderSok = notifikasjon.tekst.toLowerCase().includes(filterSok.toLowerCase());
  const showNotifikasjon = (filterType === type || filterType === "alle") && innholderSok;

  if (!showNotifikasjon) {
    return "";
  }
  return isArkiver ? (
    <NotifikasjonPanel tittel={tittel} dato={dato} />
  ) : (
    <NotifikasjonLinkPanel tittel={tittel} dato={dato} type={type} link={link} />
  );
};
export default Notifikasjon;
