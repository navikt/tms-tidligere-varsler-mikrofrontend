import { ToggleGroup } from "@navikt/ds-react";
import "./ToggleNotifikasjon.css";
import useStore from "../../../store/store";
import { useIntl } from "react-intl";
import { selectAlle, selectBeskjed, selectOppgave, selectInnboks } from "../../../store/selectors";

const ToggleNotifikasjon = () => {
  const alle = useStore(selectAlle);
  const oppgave = useStore(selectOppgave);
  const beskjed = useStore(selectBeskjed);
  const innboks = useStore(selectInnboks);

  const translate = useIntl();

  return (
    <ToggleGroup className="toggle-notifikasjon" size="small" defaultValue="alle">
      <ToggleGroup.Item value="alle" onClick={alle}>
        {translate.formatMessage({ id: "filter.toggle-item.alle" })}
      </ToggleGroup.Item>
      <ToggleGroup.Item value="oppgave" onClick={oppgave}>
        {translate.formatMessage({ id: "filter.toggle-item.oppgave" })}
      </ToggleGroup.Item>
      <ToggleGroup.Item value="beskjed" onClick={beskjed}>
        {translate.formatMessage({ id: "filter.toggle-item.beskjed" })}
      </ToggleGroup.Item>
      <ToggleGroup.Item value="innboks" onClick={innboks}>
        {translate.formatMessage({ id: "filter.toggle-item.innboks" })}
      </ToggleGroup.Item>
    </ToggleGroup>
  );
};

export default ToggleNotifikasjon;
