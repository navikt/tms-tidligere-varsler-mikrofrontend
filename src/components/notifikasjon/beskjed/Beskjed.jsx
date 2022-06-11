import BeskjedPanel from "./BeskjedPanel";
import BeskjedLinkPanel from "./BeskjedLinkPanel";
import useStore from "../../../store/store";
import { selectRemoveBeskjed, selectAddInaktivBeskjed } from "../../../store/selectors";
import { postDigisosDone, postDone } from "../../../api/api";

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

  const handleArkiver = () => {
    requestDone(props);
    removeBeskjed(props);
    AddInaktivBeskjed(props);
  };

  return isBeskjedPanel ? (
    <BeskjedPanel props={props} handleArkiver={handleArkiver} aktiv={aktiv} />
  ) : (
    <BeskjedLinkPanel props={props} />
  );
};

export default Beskjed;
