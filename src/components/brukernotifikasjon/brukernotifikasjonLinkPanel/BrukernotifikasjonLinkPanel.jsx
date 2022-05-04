import { LinkPanel } from "@navikt/ds-react";
import OppgaveIkon from "../../../assets/OppgaveIkon";
import ChatIkon from "../../../assets/ChatIkon";
import { formatToReadableDate } from "../../../utils/date";
import "./BrukernotifikasjonLinkPanel.css";

const BrukernotifikasjonLinkPanel = ({ tittel, dato, type }) => {
  const Icon = type === "oppgave" ? OppgaveIkon : ChatIkon;

  return (
    <LinkPanel className="brukernotifikasjon-link-panel" border={false} href="#">
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-8)",
          alignItems: "center",
        }}
      >
        {<Icon />}
        <div className="brukernotifikasjon-tekst-wrapper">
          <LinkPanel.Title className="brukernotifikasjon-title-tekst">{tittel}</LinkPanel.Title>
          <LinkPanel.Description className="brukernotifikasjon-dato-beskrivelse">
            {formatToReadableDate(dato)}
          </LinkPanel.Description>
        </div>
      </div>
    </LinkPanel>
  );
};

export default BrukernotifikasjonLinkPanel;
