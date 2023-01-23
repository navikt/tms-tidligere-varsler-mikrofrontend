import { QueryClientProvider } from "react-query";
import { initializeAmplitude } from "./utils/amplitude";
import LanguageProvider from "./utils/LanguageProvider";
import queryClient from "./utils/query";
import App from "./App";
import "./App.module.css";

const Mikrofrontend = () => {
  initializeAmplitude();

  return (
    <LanguageProvider defaultSprak="nb">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </LanguageProvider>
  );
};

export default Mikrofrontend;
