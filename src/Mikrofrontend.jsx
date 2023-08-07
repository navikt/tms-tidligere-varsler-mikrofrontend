import { QueryClientProvider } from "react-query";
import App from "./App";
import "./App.module.css";
import LanguageProvider from "./provider/LanguageProvider";
import { initializeAmplitude } from "./utils/amplitude";
import queryClient from "./utils/query";

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
