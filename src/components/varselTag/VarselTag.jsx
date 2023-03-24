import style from "./VarselTag.module.css";
import { Tag } from "@navikt/ds-react";
import "@navikt/ds-css";

const VarselTag = ({ dato, varselType, arkivertAvNAV }) => {
  let tagClassName;
  let tagText = "";
  let tagVariant = "";

  if (varselType == "oppgave") {
    tagClassName = arkivertAvNAV === true ? "redTag" : "greenTag";
    tagText = arkivertAvNAV === true ? "Ikke fullført. NAV arkivert oppgave " : "Fullført ";
    tagVariant = arkivertAvNAV === true ? "error" : "success";
  } else {
    tagClassName = "grayTag";
    tagText = arkivertAvNAV === true ? "Arkivert av NAV " : "Lest ";
    tagVariant = "neutral-filled";
  }

  return (
    <Tag size="small" variant={tagVariant} className={`${style.varselTag} ${style[tagClassName]}`}>
      {tagText + dato}
    </Tag>
  );
};

export default VarselTag;
