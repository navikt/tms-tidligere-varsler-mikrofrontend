import { LinkPanel, Panel } from "@navikt/ds-react";
import { SpeechBubble } from "@navikt/ds-icons";
import { formatToReadableDate } from "../../../utils/date";
import { loginserviceStepUpUrl } from "../../../api/urls";
import { logAmplitudeEvent, komponent } from "../../../utils/amplitude";
import InaktivBeskjed from "../beskjed/InaktivBeskjed";

const Innboks = ({ props, isMasked, aktiv }) => {
  const amplitudeKomponent = aktiv ? komponent.nyInnboks : komponent.tidligereInnboks;
  const dato = props.forstBehandlet;
  const tittel = isMasked
    ? "Du har fått en melding, logg inn med høyere sikkerhetsnivå for å se meldingen."
    : props.tekst;
  const link = isMasked ? loginserviceStepUpUrl : props.link;

  if (!aktiv) {
    return <InaktivBeskjed tekst={tittel} forstBehandlet={dato} isMasked={isMasked} />;
  }

  return (
    <LinkPanel
      className="notifikasjon-link-panel innboks-link-panel"
      border={false}
      href={link}
      onClick={() => logAmplitudeEvent(amplitudeKomponent)}
    >
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
          <LinkPanel.Description className="notifikasjon-dato">{formatToReadableDate(dato)}</LinkPanel.Description>
        </div>
      </div>
    </LinkPanel>
  );
};

export default Innboks;
