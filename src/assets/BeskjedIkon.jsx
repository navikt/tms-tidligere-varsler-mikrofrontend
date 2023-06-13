import styles from "./Ikon.module.css";
import text from "../language/text";
import { LanguageContext } from "../provider/LanguageProvider";
import { useContext } from "react";

const BeskjedIkon = () => {
  const language = useContext(LanguageContext);

  return (
    <svg
      className={styles.varselIkon}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={text["filterToggleItemBeskjed"][language]}
    >
      <rect width="24" height="24" rx="4" fill="#3380A5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.43701 7.49951C5.43701 6.36042 6.36042 5.43701 7.49951 5.43701H16.4995C17.6386 5.43701 18.562 6.36042 18.562 7.49951V14.2495C18.562 15.3886 17.6386 16.312 16.4995 16.312H9.90532L6.28892 18.4819C6.11514 18.5861 5.89872 18.5888 5.72237 18.489C5.54602 18.3892 5.43701 18.2022 5.43701 17.9995V7.49951Z"
        fill="white"
      />
    </svg>
  );
};

export default BeskjedIkon;
