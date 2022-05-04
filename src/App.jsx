import { useState } from "react";
import { useQuery } from "react-query";
import { fetcher } from "./api/api";
import "@navikt/ds-css";
import "./App.css";
import VarslingerPage from "./components/varslingerPage/VarslingerPage";

function App() {
  return (
    <main className="main">
      <div className="app">
        <VarslingerPage />
      </div>
    </main>
  );
}

export default App;
