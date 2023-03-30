import { QueryClientProvider } from "react-query";
import { initializeAmplitude } from "./utils/amplitude";
import LanguageProvider from "./provider/LanguageProvider";
import queryClient from "./utils/query";
import App from "./App";
import "./App.module.css";

const Mikrofrontend = () => {
  initializeAmplitude();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default Mikrofrontend;
