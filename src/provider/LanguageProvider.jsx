import { useEffect, useState, createContext } from "react";

const defaultLanguage = sessionStorage.getItem("language") ?? "nb";
export const LanguageContext = createContext(defaultLanguage);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    const handleLanguageEvent = () => {
      setLanguage(sessionStorage.getItem("language") ?? "nb");
    };

    window.addEventListener("language", handleLanguageEvent);

    return () => {
      window.removeEventListener("language", handleLanguageEvent);
    };
  }, []);

  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
