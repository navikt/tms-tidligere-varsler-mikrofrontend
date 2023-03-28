import { useEffect, useState, createContext } from "react";

const defaultLanguage = sessionStorage.getItem("language") ?? "nb";
export const LanguageContext = createContext(defaultLanguage);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    console.log("useEffect");
    const handleStorageOnEvent = () => {
      setLanguage(sessionStorage.getItem("language") ?? "nb");
      console.log("listiner ---");
    };

    window.addEventListener("storage", handleStorageOnEvent);

    return () => {
      window.removeEventListener("storage", handleStorageOnEvent);
    };
  }, []);

  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
