import { Panel, Heading, BodyLong, Button } from "@navikt/ds-react";
import ChatIkon from "../../../assets/ChatIkon";
import { formatToReadableDate } from "../../../utils/date";
import "./BrukernotifikasjonPanel.css";

const BrukernotifikasjonPanel = ({ tittel, dato }) => {
  return (
    <Panel className="brukernotifikasjon-panel">
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-6)",
          alignItems: "center",
        }}
      >
        <ChatIkon />
        <div className="brukernotifikasjon-tekst-wrapper">
          <Heading className="brukernotifikasjon-title-tekst">{tittel}</Heading>
          <BodyLong className="brukernotifikasjon-dato-beskrivelse">{formatToReadableDate(dato)}</BodyLong>
        </div>
      </div>
      <div className="arkiver-knapp-container">
        <Button size={"small"} variant={"tertiary"} className="arkiver-knapp">
          Arkiver
        </Button>
      </div>
    </Panel>
  );
};

export default BrukernotifikasjonPanel;
