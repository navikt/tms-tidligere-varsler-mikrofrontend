import React from "react";
import { ToggleGroup } from "@navikt/ds-react";
import "./ToggleNotifikasjon.css";
import useStore from "../../../store/store";
import { selectAlle, selectBeskjed, selectOppgave, selectInnboks } from "../../../store/selectors";

const ToggleNotifikasjon = () => {
  const [value, setValue] = React.useState("ulest");
  const alle = useStore(selectAlle);
  const oppgave = useStore(selectOppgave);
  const beskjed = useStore(selectBeskjed);
  const innboks = useStore(selectInnboks);

  return (
    <ToggleGroup className="toggle-notifikasjon" onChange={setValue} size="small" defaultValue="alle">
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

export default ToggleNotifikasjon;
