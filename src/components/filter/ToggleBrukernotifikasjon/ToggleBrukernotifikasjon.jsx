import React from "react";
import { ToggleGroup } from "@navikt/ds-react";
import "./ToggleBrukernotifikasjon.css";
import useStore from "../../../store/store";
import { selectAlle, selectBeskjed, selectOppgave, selectInnboks } from "../../../store/selectors";

const ToggleBrukernotifikasjon = () => {
  const [value, setValue] = React.useState("ulest");
  const alle = useStore(selectAlle);
  const oppgave = useStore(selectOppgave);
  const beskjed = useStore(selectBeskjed);
  const innboks = useStore(selectInnboks);

  return (
    <ToggleGroup className="toggle-brukernotifikasjon" onChange={setValue} value={value} size="small">
      <ToggleGroup.Item value="alle" onClick={alle}>
        Alle
      </ToggleGroup.Item>
      <ToggleGroup.Item value="oppgave" onClick={oppgave}>
        Oppgave
      </ToggleGroup.Item>
      <ToggleGroup.Item value="beskjed" onClick={beskjed}>
        Beskjed
      </ToggleGroup.Item>
      <ToggleGroup.Item value="innboks" onClick={innboks}>
        Innboks
      </ToggleGroup.Item>
    </ToggleGroup>
  );
};

export default ToggleBrukernotifikasjon;
