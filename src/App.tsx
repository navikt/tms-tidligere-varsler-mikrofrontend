import { Alert, Heading, Ingress, Loader } from "@navikt/ds-react";
import { useContext } from "react";
import useSWRImmutable from "swr/immutable";
import styles from "./App.module.css";
import { fetcher } from "./api/api";
import { inaktiveVarslerApiUrl } from "./api/urls";
import NoTidligereVarslerPage from "./components/noTidligereVarslerPage/NoTidligereVarslerPage.js";
import TidligereVarslerPage from "./components/tidligereVarslerPage/TidligereVarslerPage.js";
import { Varsel } from "./components/varsel/Varsel";
import text from "./language/text";
import { LanguageContext } from "./provider/LanguageProvider";

function App() {
  const language = useContext(LanguageContext);
  const { data: varsler, isLoading, error } = useSWRImmutable<Array<Varsel>>(inaktiveVarslerApiUrl, fetcher);

  const hasMaskedVarsel = varsler && varsler.some((varsel) => varsel.isMasked);

  return (
    <div className={styles.app}>
      <Heading className={styles.pageTitle} size="large">
        {text.tidligereVarslerOverskrift[language]}
      </Heading>
      <Ingress className={styles.pageDescription}>{text.sidebeskrivelse[language]}</Ingress>
      {hasMaskedVarsel && (
        <Alert className={styles.authenticationAlert} variant="info">
          {text.hoyereSikkerhetsnivaa[language]}
        </Alert>
      )}
      <div className={styles.pageBodyWrapper}>
        {isLoading || varsler === undefined ? (
          <Loader className={styles.loader} size="3xlarge" title="venter..." />
        ) : varsler?.length === 0 ? (
          <NoTidligereVarslerPage />
        ) : (
          <TidligereVarslerPage varsler={varsler} isSuccess={!error} />
        )}
      </div>
    </div>
  );
}

export default App;
