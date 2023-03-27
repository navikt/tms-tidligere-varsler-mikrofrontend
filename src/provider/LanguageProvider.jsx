import { useEffect, useState, createContext } from "react";

const defaultLanguage = sessionStorage.getItem("language") ?? "nb";
export const LanguageContext = createContext(defaultLanguage);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(defaultLanguage);
  useEffect(() => {
    window.addEventListener("storage", () => {
      console.log("New event listener");
      setLanguage(sessionStorage.getItem("language") ?? "nb");
    });
  }, []);

  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
