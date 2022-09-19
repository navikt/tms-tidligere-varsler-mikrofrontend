import BeskjedPanel from "./BeskjedPanel";
import BeskjedLinkPanel from "./BeskjedLinkPanel";
import useStore from "../../../store/store";
import { selectRemoveBeskjed, selectAddInaktivBeskjed } from "../../../store/selectors";
import { postDigisosDone, postDone } from "../../../api/api";
import { loginserviceStepUpUrl } from "../../../api/urls";
import { useIntl } from "react-intl";

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
  const transalte = useIntl();

  const tittel = isMasked ? transalte.formatMessage({ id: "beskjed.masked-title" }) : props.tekst;
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
    <BeskjedLinkPanel
      tittel={tittel}
      dato={dato}
      link={link}
      aktiv={aktiv}
      requestDone={() => requestDone(props)}
      isMasked={isMasked}
    />
  );
};

export default Beskjed;
