import TidligereVarsler from "./components/tidligereVarsler/TidligereVarsler";

import style from "./App.module.css";
import "@navikt/ds-css";
import { Authentication } from "./components/authentication/Authentication";

function App() {
  return (
    <Authentication>
      <TidligereVarsler />
    </Authentication>
  );
}

export default App;
