import { ToggleGroup } from "@navikt/ds-react";
import style from "./ToggleNotifikasjon.module.css";
import useStore from "../../../store/store";
import { selectAlle, selectBeskjed, selectOppgave } from "../../../store/selectors";
import { useContext } from "react";
import { LanguageContext } from "../../../provider/LanguageProvider";
import text from "../../../language/text";

const ToggleNotifikasjon = () => {
  const alle = useStore(selectAlle);
  const oppgave = useStore(selectOppgave);
  const beskjed = useStore(selectBeskjed);
  const language = useContext(LanguageContext);

  return (
    <ToggleGroup className={style.toggleNotifikasjon} size="medium" defaultValue="alle">
      <ToggleGroup.Item value="alle" onClick={alle}>
        {text["filterToggleItemAlle"][language]}
      </ToggleGroup.Item>
      <ToggleGroup.Item value="oppgave" onClick={oppgave}>
        {text["filterToggleItemOppgave"][language]}
      </ToggleGroup.Item>
      <ToggleGroup.Item value="beskjed" onClick={beskjed}>
        {text["filterToggleItemBeskjed"][language]}
      </ToggleGroup.Item>
    </ToggleGroup>
  );
};

export default ToggleNotifikasjon;
