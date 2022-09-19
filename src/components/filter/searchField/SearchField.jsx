import SearchIkon from "../../../assets/SearchIkon";
import ClearButton from "./clearButton/ClearButton";
import { TextField } from "@navikt/ds-react";
import "./SearchField.css";
import useStore from "../../../store/store";
import { updateSearch } from "../../../store/selectors";
import { useIntl } from "react-intl";

const SearchField = () => {
  const sok = useStore(updateSearch);
  const translate = useIntl();

  const handleClearClick = () => {
    document.getElementById("varslingersok").value = "";
    sok("");
  };

  return (
    <div className="search-field-wrapper">
      <SearchIkon aria-hidden className="pointer-events-none absolute top-4 left-4 text-large" />
      <TextField
        id="varslingersok"
        className="search-field"
        label={translate.formatMessage({ id: "sokefelt.label" })}
        onChange={(obj) => {
          sok(obj.target.value.toLowerCase());
        }}
      />
      <ClearButton handleClearClick={handleClearClick} />
    </div>
  );
};

export default SearchField;
