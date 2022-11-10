import { Panel } from "@navikt/ds-react";
import "./NotifikasjonPanel.css";

const NotifikasjonPanel = ({ children }) => {
  return <Panel className="notifikasjon-panel">{children}</Panel>;
};

export default NotifikasjonPanel;
