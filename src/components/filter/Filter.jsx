import ToggleNotifikasjon from "./toggleNotifikasjon/ToggleNotifikasjon";
import SearchField from "./searchField/SearchField";
import style from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={style.filter}>
      <SearchField />
      <ToggleNotifikasjon />
    </div>
  );
};

export default Filter;
