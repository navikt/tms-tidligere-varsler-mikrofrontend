import { Panel, Heading, BodyLong, Button } from "@navikt/ds-react";
import { SpeechBubble, FileFolder } from "@navikt/ds-icons";
import { formatToReadableDate } from "../../../utils/date";
import { useState } from "react";
import { useIntl } from "react-intl";
import "./BeskjedPanel.css";

const BeskjedPanel = ({ tittel, dato, handleArkiver, aktiv }) => {
  const [showArkiverIkon, setShowArkiverIkon] = useState(false);
  const translate = useIntl();

  return (
    <Panel className="notifikasjon-panel">
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-4)",
          alignItems: "center",
        }}
      >
        <div className="icon-container beskjed-icon-container">
          {showArkiverIkon ? (
            <FileFolder className="beskjed-icon" fontSize="1.375rem" />
          ) : (
            <SpeechBubble className="beskjed-icon" fontSize="1.375rem" />
          )}
        </div>
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
            onClick={handleArkiver}
            onMouseEnter={() => {
              setShowArkiverIkon(true);
            }}
            onMouseLeave={() => {
              setShowArkiverIkon(false);
            }}
          >
            {translate.formatMessage({ id: "beskjed.arkiver-button.label" })}
          </Button>
        ) : (
          ""
        )}
      </div>
    </Panel>
  );
};

export default BeskjedPanel;
