import { Detail, LinkPanel } from "@navikt/ds-react";
import { Task } from "@navikt/ds-icons";
import { formatToReadableDate } from "../../../utils/date";
import NotifikasjonPanel from "../panel/NotifikasjonPanel";
import "./Oppgave.css";

const InaktivOppgave = ({ tekst, forstBehandlet, isMasked }) => {
  const dato = forstBehandlet;
  const tittel = isMasked ? "Du har fått en oppgave, logg inn med høyere sikkerhetsnivå for å se oppgaven." : tekst;

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
        <div className="icon-container oppgave-icon-container">
          <Task className="oppgave-icon" fontSize="1.375rem" />
        </div>
        <div className="notifikasjon-link-panel-text-wrapper">
          <LinkPanel.Title className="notifikasjon-link-panel-tittel">{tittel}</LinkPanel.Title>
          <Detail className="notifikasjon-dato">{formatToReadableDate(dato)}</Detail>
        </div>
      </div>
    </NotifikasjonPanel>
  );
};

export default InaktivOppgave;
