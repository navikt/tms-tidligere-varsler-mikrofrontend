import { Heading } from "@navikt/ds-react";
import PropTypes from "prop-types";
import "./VarslingerList.css";
import Notifikasjon from "../notifikasjon/Notifikasjon";

const VarslingerList = ({ notifikasjoner, tittel, isLoading }) => {
  return (
    <section className="varslinger-list">
      <Heading spacing size="medium" level="4" className="varslinger-liste-heading">
        {tittel}
      </Heading>
      <div>
        {isLoading
          ? "Loading..."
          : notifikasjoner.map((notifikasjon) => (
              <Notifikasjon key={notifikasjon.eventId} notifikasjon={notifikasjon} />
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
