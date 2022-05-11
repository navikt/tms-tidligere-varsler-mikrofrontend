import { Heading } from "@navikt/ds-react";
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

export default VarslingerList;
