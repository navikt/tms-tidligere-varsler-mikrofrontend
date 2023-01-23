import { ToggleGroup } from "@navikt/ds-react";
import style from "./ToggleNotifikasjon.module.css";
import useStore from "../../../store/store";
import { useIntl } from "react-intl";
import { selectAlle, selectBeskjed, selectOppgave } from "../../../store/selectors";

const ToggleNotifikasjon = () => {
  const alle = useStore(selectAlle);
  const oppgave = useStore(selectOppgave);
  const beskjed = useStore(selectBeskjed);
  const translate = useIntl();

  return (
    <ToggleGroup className={style.toggleNotifikasjon} size="medium" defaultValue="alle">
      <ToggleGroup.Item value="alle" onClick={alle}>
        {translate.formatMessage({ id: "filter.toggle-item.alle" })}
      </ToggleGroup.Item>
      <ToggleGroup.Item value="oppgave" onClick={oppgave}>
        {translate.formatMessage({ id: "filter.toggle-item.oppgave" })}
      </ToggleGroup.Item>
      <ToggleGroup.Item value="beskjed" onClick={beskjed}>
        {translate.formatMessage({ id: "filter.toggle-item.beskjed" })}
      </ToggleGroup.Item>
    </ToggleGroup>
  );
};

export default ToggleNotifikasjon;
