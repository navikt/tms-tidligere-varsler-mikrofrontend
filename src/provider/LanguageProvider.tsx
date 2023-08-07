import { createContext, useEffect, useState } from "react";

export type Language = "nb" | "en" | "nn";

const defaultLanguage = (sessionStorage.getItem("language") ?? "nb") as Language;
export const LanguageContext = createContext(defaultLanguage);

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    const handleLanguageEvent = () => {
      setLanguage((sessionStorage.getItem("language") ?? "nb") as Language);
    };

    window.addEventListener("language", handleLanguageEvent);

    return () => {
      window.removeEventListener("language", handleLanguageEvent);
    };
  }, []);

  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
