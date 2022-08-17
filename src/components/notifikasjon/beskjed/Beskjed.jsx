import BeskjedPanel from "./BeskjedPanel";
import BeskjedLinkPanel from "./BeskjedLinkPanel";
import useStore from "../../../store/store";
import { selectRemoveBeskjed, selectAddInaktivBeskjed } from "../../../store/selectors";
import { postDigisosDone, postDone } from "../../../api/api";
import { loginserviceStepUpUrl } from "../../../api/urls";

const requestDone = (beskjed) => {
  if (beskjed.produsent === "digiSos") {
    postDigisosDone({
      eventId: beskjed.eventId,
      grupperingsId: beskjed.grupperingsId,
    });
  } else {
    postDone({
      eventId: beskjed.eventId,
    });
  }
};

const Beskjed = ({ props, aktiv, isMasked }) => {
  const isBeskjedPanel = props.link === "";
  const removeBeskjed = useStore(selectRemoveBeskjed);
  const AddInaktivBeskjed = useStore(selectAddInaktivBeskjed);

  const tittel = isMasked
    ? "Du har fått en beskjed, logg inn med høyere sikkerhetsnivå for å se meldingen."
    : props.tekst;
  const link = isMasked ? loginserviceStepUpUrl : props.link;
  const dato = props.forstBehandlet;

  const handleArkiver = () => {
    requestDone(props);
    removeBeskjed(props);
    AddInaktivBeskjed(props);
  };

  return isBeskjedPanel && !isMasked ? (
    <BeskjedPanel tittel={tittel} dato={dato} handleArkiver={handleArkiver} aktiv={aktiv} />
  ) : (
    <BeskjedLinkPanel tittel={tittel} dato={dato} link={link} aktiv={aktiv} requestDone={() => requestDone(props)} />
  );
};

export default Beskjed;
