import { QueryClientProvider } from "react-query";
import { initializeAmplitude } from "./utils/amplitude";
import queryClient from "./utils/query";
import App from "./App";
import "./App.css";

const Mikrofrontend = () => {
  initializeAmplitude();

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

export default Mikrofrontend;
