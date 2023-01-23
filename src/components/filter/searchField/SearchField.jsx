import SearchIkon from "../../../assets/SearchIkon";
import { TextField, Search } from "@navikt/ds-react";
import style from "./SearchField.module.css";
import useStore from "../../../store/store";
import { updateSearch } from "../../../store/selectors";
import { useIntl } from "react-intl";

const SearchField = () => {
  const sok = useStore(updateSearch);
  const translate = useIntl();

  return (
    <Search
      className={style.searchField}
      label={translate.formatMessage({ id: "sokefelt.label" })}
      variant="simple"
      hideLabel={false}
      onChange={(obj) => {
        sok(obj.toLowerCase());
      }}
    />
  );
};

export default SearchField;
