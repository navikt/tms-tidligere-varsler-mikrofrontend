import { Heading } from "@navikt/ds-react";
import "./VarslingerList.css";
import Brukernotifikasjon from "../brukernotifikasjon/Brukernotifikasjon";

const VarslingerList = ({ brukernotifikasjoner, tittel, isLoading }) => {
  return (
    <section className="varslinger-list">
      <Heading spacing size="medium" level="4" className="varslinger-liste-heading">
        {tittel}
      </Heading>
      <div>
        {isLoading
          ? "Loading..."
          : brukernotifikasjoner.map((notifikasjon) => (
              <Brukernotifikasjon key={notifikasjon.eventId} notifikasjon={notifikasjon} />
            ))}
      </div>
    </section>
  );
};

export default VarslingerList;
