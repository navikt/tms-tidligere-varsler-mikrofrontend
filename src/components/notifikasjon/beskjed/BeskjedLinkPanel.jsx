import { LinkPanel } from "@navikt/ds-react";
import { formatToReadableDate } from "../../../utils/date";
import { SpeechBubble } from "@navikt/ds-icons";

const BeskjedLinkPanel = ({ tittel, dato, link }) => {
  return (
    <LinkPanel className="notifikasjon-link-panel beskejd-link-panel" border={false} href={link}>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-8)",
          alignItems: "center",
        }}
      >
        <div className="icon-container beskjed-icon-container">
          <SpeechBubble className="beskjed-icon" fontSize="1.5rem" />
        </div>
        <div className="notifikasjon-link-panel-text-wrapper">
          <LinkPanel.Title className="notifikasjon-link-panel-tittel">{tittel}</LinkPanel.Title>
          <LinkPanel.Description className="notifikasjon-dato">{formatToReadableDate(dato)}</LinkPanel.Description>
        </div>
      </div>
    </LinkPanel>
  );
};

export default BeskjedLinkPanel;
