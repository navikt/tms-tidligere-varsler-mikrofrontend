import { Panel } from "@navikt/ds-react";
import "@navikt/ds-css";
import ToggleNotifikasjon from "./toggleNotifikasjon/ToggleNotifikasjon";
import SearchField from "./searchField/SearchField";
import "./Filter.css";

const Filter = () => {
  return (
    <Panel className="filter">
      <SearchField />
      <ToggleNotifikasjon />
    </Panel>
  );
};

export default Filter;
