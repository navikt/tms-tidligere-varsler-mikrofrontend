import { useIntl } from "react-intl";
import { Detail, LinkPanel } from "@navikt/ds-react";
import { SpeechBubble } from "@navikt/ds-icons";
import { formatToReadableDate } from "../../../utils/date";
import NotifikasjonPanel from "../panel/NotifikasjonPanel";

const InaktivBeskjed = ({ tekst, forstBehandlet, isMasked }) => {
  const transalte = useIntl();
  const tittel = isMasked ? transalte.formatMessage({ id: "beskjed.masked-title" }) : tekst;
  const dato = forstBehandlet;

  return (
    <NotifikasjonPanel>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-4)",
          alignItems: "center",
        }}
      >
        <div className="icon-container beskjed-icon-container">
          <SpeechBubble className="beskjed-icon" fontSize="1.375rem" />
        </div>
        <div className="notifikasjon-link-panel-text-wrapper">
          <LinkPanel.Title className="notifikasjon-link-panel-tittel">{tittel}</LinkPanel.Title>
          <Detail className="notifikasjon-dato">{formatToReadableDate(dato)}</Detail>
        </div>
      </div>
    </NotifikasjonPanel>
  );
};

export default InaktivBeskjed;
