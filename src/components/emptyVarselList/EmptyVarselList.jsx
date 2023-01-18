import { BodyLong, Heading, Link } from "@navikt/ds-react";
import { useIntl } from "react-intl";
import IngenVarslerKatt from "../../assets/IngenVarslerKatt";
import style from "./EmptyVarselList.module.css";
import globalStyle from "../../App.module.css";

const EmptyVarselList = () => {
  const translate = useIntl();
  return (
    <div className={style.wrapper}>
      <div className={`${style.innerWrapper} ${globalStyle.tekstInnhold}`}>
        <IngenVarslerKatt />
        <dev className={style.ingenVarslerTekstWrapper}>
          <Heading level="2" className={style.header} size={"small"}>
            {translate.formatMessage({ id: "ingen-tidligere-varsler-header" })}
          </Heading>
          <BodyLong className={style.body}>{translate.formatMessage({ id: "ingen-tidligere-varsler-body" })}</BodyLong>
          <Link className={style.link}>{translate.formatMessage({ id: "gaa-til-min-side" })}</Link>
        </dev>
      </div>
    </div>
  );
};

export default EmptyVarselList;
