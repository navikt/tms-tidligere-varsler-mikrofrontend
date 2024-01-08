import { Search } from "@navikt/ds-react";
import { useContext } from "react";
import text from "../../../language/text";
import { LanguageContext } from "../../../provider/LanguageProvider";
import { setFilterSearch } from "../../../store/store";
import styles from "./SearchField.module.css";

const SearchField = () => {
  const language = useContext(LanguageContext);

  return (
    <Search
      className={styles.searchField}
      label={text.sokefeltLabel[language]}
      variant="simple"
      hideLabel={false}
      onChange={(obj) => {
        setFilterSearch(obj.toLowerCase());
      }}
    />
  );
};

export default SearchField;
