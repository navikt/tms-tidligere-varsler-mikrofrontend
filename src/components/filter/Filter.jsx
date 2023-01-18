import { Panel } from "@navikt/ds-react";
import globalStyle from "../../App.module.css";
import ToggleNotifikasjon from "./toggleNotifikasjon/ToggleNotifikasjon";
import SearchField from "./searchField/SearchField";
import style from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={style.filterWrapper}>
      <div className={`${style.filter} ${globalStyle.tekstInnhold}`}>
        <SearchField />
        <ToggleNotifikasjon />
      </div>
    </div>
  );
};

export default Filter;
