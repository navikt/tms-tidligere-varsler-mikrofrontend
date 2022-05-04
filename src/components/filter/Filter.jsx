import { Panel } from "@navikt/ds-react";
import "@navikt/ds-css";
import ToggleBrukernotifikasjon from "./ToggleBrukernotifikasjon/ToggleBrukernotifikasjon";
import SearchField from "./SearchField/SearchField";
import "./Filter.css";

const Filter = () => {
  return (
    <Panel className="filter">
      <SearchField />
      <ToggleBrukernotifikasjon />
    </Panel>
  );
};

export default Filter;
