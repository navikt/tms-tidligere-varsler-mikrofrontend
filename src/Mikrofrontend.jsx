import App from "./App";
import "./App.module.css";
import LanguageProvider from "./provider/LanguageProvider";
import { initAmplitude } from "./utils/amplitude";

const Mikrofrontend = () => {
  initAmplitude();
  
  return (
      <LanguageProvider>
        <App />
      </LanguageProvider>
  );
};

export default Mikrofrontend;
