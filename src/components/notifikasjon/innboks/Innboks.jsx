import { LinkPanel } from "@navikt/ds-react";
import { SpeechBubble } from "@navikt/ds-icons";
import { formatToReadableDate } from "../../../utils/date";
import { loginserviceStepUpUrl } from "../../../api/urls";

const Innboks = ({ props, isMasked }) => {
  const dato = props.forstBehandlet;
  const tittel = isMasked
    ? "Du har fått en melding, logg inn med høyere sikkerhetsnivå for å se meldingen."
    : props.tekst;
  const link = isMasked ? loginserviceStepUpUrl : props.link;

  return (
    <LinkPanel className="notifikasjon-link-panel innboks-link-panel" border={false} href={link}>
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

export default Innboks;
