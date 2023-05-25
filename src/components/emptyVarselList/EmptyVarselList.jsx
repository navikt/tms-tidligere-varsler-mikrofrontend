import { BodyLong, Heading, Link } from "@navikt/ds-react";
import style from "./EmptyVarselList.module.css";
import { minSideUrl } from "../../api/urls";
import text from "../../language/text";
import { useContext } from "react";
import { LanguageContext } from "../../provider/LanguageProvider";
import IngenVarslerKatt from "../../assets/IngenVarslerKatt.jsx";

const EmptyVarselList = () => {
  const language = useContext(LanguageContext);
  return (
    <div className={style.emptyPageContainer}>
      <IngenVarslerKatt />
      <Heading level="2" className={style.header} size={"small"}>
        {text["ingenTidligereVarslerHeader"][language]}
      </Heading>
      <BodyLong className={style.body}>{text["ingenTidligereVarslerbody"][language]} </BodyLong>
      <Link href={minSideUrl} className={style.link}>
        {text["gaaTilMinSide"][language]}
      </Link>
    </div>
  );
};

export default EmptyVarselList;
