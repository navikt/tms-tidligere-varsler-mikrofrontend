import { ToggleGroup } from "@navikt/ds-react";
import { useContext } from "react";
import text from "../../../language/text";
import { LanguageContext } from "../../../provider/LanguageProvider";
import { FilterTypes, setFilterType } from "../../../store/store";
import styles from "./ToggleNotifikasjon.module.css";

const ToggleNotifikasjon = () => {
  const language = useContext(LanguageContext);

  return (
    <ToggleGroup
      className={styles.toggleNotifikasjon}
      size="medium"
      defaultValue="alle"
      onChange={(value) => {
        setFilterType(value as FilterTypes);
      }}
    >
      <ToggleGroup.Item value="alle">{text.filterToggleItemAlle[language]}</ToggleGroup.Item>
      <ToggleGroup.Item value="oppgave">{text.filterToggleItemOppgave[language]}</ToggleGroup.Item>
      <ToggleGroup.Item value="beskjed">{text.filterToggleItemBeskjed[language]}</ToggleGroup.Item>
    </ToggleGroup>
  );
};

export default ToggleNotifikasjon;
