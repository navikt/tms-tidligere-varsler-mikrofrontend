import { Panel, Heading, BodyLong, Button } from "@navikt/ds-react";
import BeskjedIkon from "../../../assets/BeskjedIkon";
import { formatToReadableDate } from "../../../utils/date";
import "./BeskjedPanel.css";

const BeskjedPanel = ({ tittel, dato, handleArkiver, aktiv }) => {
  return (
    <Panel className="notifikasjon-panel">
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-6)",
          alignItems: "center",
        }}
      >
        <BeskjedIkon />
        <div className="notifikasjon-panel-text-wrapper">
          <Heading className="notifikasjon-panel-tittel">{tittel}</Heading>
          <BodyLong className="notifikasjon-dato">{formatToReadableDate(dato)}</BodyLong>
        </div>
      </div>
      <div className="arkiver-button-container">
        {aktiv ? (
          <Button
            size={"small"}
            variant={"tertiary"}
            className="arkiver-button"
            aria-label="Tøm"
            onClick={handleArkiver}
          >
            Arkiver
          </Button>
        ) : (
          ""
        )}
      </div>
    </Panel>
  );
};

export default BeskjedPanel;
