import ToggleNotifikasjon from "./toggleNotifikasjon/ToggleNotifikasjon";
import SearchField from "./searchField/SearchField";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <SearchField />
      <ToggleNotifikasjon />
    </div>
  );
};

export default Filter;
