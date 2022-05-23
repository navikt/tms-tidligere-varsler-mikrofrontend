import { LinkPanel } from "@navikt/ds-react";
import PropTypes from "prop-types";
import OppgaveIkon from "../../../assets/OppgaveIkon";
import ChatIkon from "../../../assets/ChatIkon";
import { formatToReadableDate } from "../../../utils/date";
import "./NotifikasjonLinkPanel.css";

const NotifikasjonLinkPanel = ({ tittel, dato, type, link }) => {
  const Icon = type === "oppgave" ? OppgaveIkon : ChatIkon;

  return (
    <LinkPanel className="notifikasjon-link-panel" border={false} href={link}>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-8)",
          alignItems: "center",
        }}
      >
        {<Icon />}
        <div className="notifikasjon-link-panel-text-wrapper">
          <LinkPanel.Title className="notifikasjon-link-panel-tittel">{tittel}</LinkPanel.Title>
          <LinkPanel.Description className="notifikasjon-dato">{formatToReadableDate(dato)}</LinkPanel.Description>
        </div>
      </div>
    </LinkPanel>
  );
};

NotifikasjonLinkPanel.prototypes = {
  tittel: PropTypes.string.isRequired,
  dato: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NotifikasjonLinkPanel;
