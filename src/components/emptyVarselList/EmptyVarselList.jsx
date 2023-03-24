import { BodyLong, Heading, Link } from "@navikt/ds-react";
import IngenVarslerKatt from "../../assets/IngenVarslerKatt";
import style from "./EmptyVarselList.module.css";
import globalStyle from "../../App.module.css";
import { minSideUrl } from "../../api/urls";
import text from "../../language/text";
import { useContext } from "react";
import { LanguageContext } from "../../provider/LanguageProvider";

const EmptyVarselList = () => {
  const language = useContext(LanguageContext);
  return (
    <div className={style.wrapper}>
      <div className={`${style.innerWrapper} ${globalStyle.tekstInnhold}`}>
        <IngenVarslerKatt />
        <div className={style.ingenVarslerTekstWrapper}>
          <Heading level="2" className={style.header} size={"small"}>
            {text["ingenTidligereVarslerHeader"][language]}
          </Heading>
          <BodyLong className={style.body}>{text["ingenTidligereVarslerbody"][language]} </BodyLong>
          <Link href={minSideUrl} className={style.link}>
            {text["gaaTilMinSide"][language]}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyVarselList;
