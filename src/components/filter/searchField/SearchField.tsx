import { Search } from "@navikt/ds-react";
import { useContext } from "react";
import text from "../../../language/text";
import { LanguageContext } from "../../../provider/LanguageProvider";
import { updateSearch } from "../../../store/selectors";
import useStore from "../../../store/store";
import styles from "./SearchField.module.css";

const SearchField = () => {
  const sok = useStore(updateSearch);
  const language = useContext(LanguageContext);

  return (
    <Search
      className={styles.searchField}
      label={text.sokefeltLabel[language]}
      variant="simple"
      hideLabel={false}
      onChange={(obj) => {
        sok(obj.toLowerCase());
      }}
    />
  );
};

export default SearchField;
