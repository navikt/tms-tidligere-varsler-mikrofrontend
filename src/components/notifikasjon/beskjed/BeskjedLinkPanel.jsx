import { LinkPanel } from "@navikt/ds-react";
import BeskjedIkon from "../../../assets/BeskjedIkon";
import { formatToReadableDate } from "../../../utils/date";

const BeskjedLinkPanel = ({ props }) => {
  const tittel = props.tekst;
  const dato = props.forstBehandlet;
  const link = props.link;

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
        {<BeskjedIkon />}
        <div className="notifikasjon-link-panel-text-wrapper">
          <LinkPanel.Title className="notifikasjon-link-panel-tittel">{tittel}</LinkPanel.Title>
          <LinkPanel.Description className="notifikasjon-dato">{formatToReadableDate(dato)}</LinkPanel.Description>
        </div>
      </div>
    </LinkPanel>
  );
};

export default BeskjedLinkPanel;
