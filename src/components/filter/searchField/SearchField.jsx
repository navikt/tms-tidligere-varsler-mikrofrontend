import { Search } from "@navikt/ds-react";
import style from "./SearchField.module.css";
import useStore from "../../../store/store";
import { updateSearch } from "../../../store/selectors";
import text from "../../../language/text";
import { useContext } from "react";
import { LanguageContext } from "../../../provider/LanguageProvider";

const SearchField = () => {
  const sok = useStore(updateSearch);
  const language = useContext(LanguageContext);

  return (
    <Search
      className={style.searchField}
      label={text["sokefeltLabel"][language]}
      variant="simple"
      hideLabel={false}
      onChange={(obj) => {
        sok(obj.toLowerCase());
      }}
    />
  );
};

export default SearchField;
