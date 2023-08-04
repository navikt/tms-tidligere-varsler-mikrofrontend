import { ToggleGroup } from "@navikt/ds-react";
import styles from "./ToggleNotifikasjon.module.css";
import useStore from "../../../store/store";
import { selectAlle, selectBeskjed, selectOppgave } from "../../../store/selectors";
import { useContext } from "react";
import { LanguageContext } from "../../../provider/LanguageProvider";
import text from "../../../language/text";

const ToggleNotifikasjon = () => {
  const language = useContext(LanguageContext);

  const toggleVarsler: Record<string, () => any> = {
    alle: useStore(selectAlle),
    oppgave: useStore(selectOppgave),
    beskjed: useStore(selectBeskjed),
  };

  return (
    <ToggleGroup
      className={styles.toggleNotifikasjon}
      size="medium"
      defaultValue="alle"
      onChange={(value) => {
        console.log(value);
        toggleVarsler[value]();
      }}
    >
      <ToggleGroup.Item value="alle">{text.filterToggleItemAlle[language]}</ToggleGroup.Item>
      <ToggleGroup.Item value="oppgave">{text.filterToggleItemOppgave[language]}</ToggleGroup.Item>
      <ToggleGroup.Item value="beskjed">{text.filterToggleItemBeskjed[language]}</ToggleGroup.Item>
    </ToggleGroup>
  );
};

export default ToggleNotifikasjon;
