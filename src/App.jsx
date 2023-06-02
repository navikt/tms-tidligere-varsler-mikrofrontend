import style from "./App.module.css";
import { LanguageContext } from "./provider/LanguageProvider";
import { useContext } from "react";
import { inaktiveVarslerApiUrl } from "./api/urls";
import { fetcher } from "./api/api";
import { useQuery } from "react-query";
import { Alert, Heading, Loader, Ingress } from "@navikt/ds-react";
import text from "./language/text";
import NoTidligereVarslerPage from "./components/NoTidligereVarslerPage/NoTidligereVarslerPage.jsx";
import TidligereVarslerPage from "./components/TidligereVarslerPage/TidligereVarslerPage.jsx";

function App() {
  const language = useContext(LanguageContext);
  const { data: varsler, isSuccess, isLoading } = useQuery(inaktiveVarslerApiUrl, fetcher);
  const hasMaskedVarsel = varsler && varsler.some((varsel) => varsel.isMasked);

  return (
    <div className={style.app}>
      <Heading className={style.pageTitle} size="large">
        {text["tidligereVarslerOverskrift"][language]}
      </Heading>
      <Ingress className={style.pageDescription}>{text["sidebeskrivelse"][language]}</Ingress>
      {hasMaskedVarsel && (
        <Alert className={style.authenticationAlert} variant="info">
          {text["hoyereSikkerhetsnivaa"][language]}
        </Alert>
      )}
      <div className={style.pageBodyWrapper}>
        {isLoading ? (
          <Loader className={style.loader} size="3xlarge" title="venter..." />
        ) : varsler.length === 0 ? (
          <NoTidligereVarslerPage />
        ) : (
          <TidligereVarslerPage varsler={varsler} isSuccess={isSuccess} />
        )}
      </div>
    </div>
  );
}

export default App;
