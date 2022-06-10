import BeskjedPanel from "./BeskjedPanel";
import BeskjedLinkPanel from "./BeskjedLinkPanel";
import useStore from "../../../store/store";
import { selectRemoveBeskjed, selectAddInaktivBeskjed } from "../../../store/selectors";

const Beskjed = ({ props, aktiv }) => {
  const isBeskjedPanel = props.link === "";
  const removeBeskjed = useStore(selectRemoveBeskjed);
  const AddInaktivBeskjed = useStore(selectAddInaktivBeskjed);
  const handleArkiver = () => {
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
