import { Heading } from "@navikt/ds-react";
import PropTypes from "prop-types";
import "./VarslingerList.css";
import Notifikasjon from "../notifikasjon/Notifikasjon";
import isMasked from "../../utils/isMasked";

const VarslingerList = ({ notifikasjoner, tittel, isLoading, aktiv, innloggingsstatus }) => {
  return (
    <section className="varslinger-list">
      <Heading spacing size="medium" level="4" className="varslinger-liste-heading">
        {tittel}
      </Heading>
      <div>
        {isLoading
          ? "Laster innhold..."
          : notifikasjoner.map((notifikasjon) => (
              <Notifikasjon
                key={notifikasjon.eventId}
                notifikasjon={notifikasjon}
                aktiv={aktiv}
                isMasked={isMasked(innloggingsstatus, notifikasjon?.sikkerhetsnivaa)}
              />
            ))}
      </div>
    </section>
  );
};

VarslingerList.prototypes = {
  isLoading: PropTypes.bool.isRequired,
  tittel: PropTypes.string.isRequired,
};

export default VarslingerList;
