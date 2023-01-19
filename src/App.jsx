import TidligereVarsler from "./components/tidligereVarsler/TidligereVarsler";
import Authentication from "./components/authentication/Authentication";
import "@navikt/ds-css";

function App() {
  return (
    <Authentication>
      <TidligereVarsler />
    </Authentication>
  );
}

export default App;
