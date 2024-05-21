import dayjs from "dayjs";
import "dayjs/locale/nb";
import localeData from "dayjs/plugin/localeData";
import { Varsel } from "../components/varsel/Varsel";
import { useContext } from "react";
import { LanguageContext } from "../provider/LanguageProvider";
import text from "../language/text";

const FormatForstBehandlet = "YYYY-MM-DDTHH:mm:ss:SSS[Z]";

export const setLocaleDate = () => {
  dayjs.extend(localeData);
  dayjs.locale("nb");
};

export const byForstBehandlet = (a: Varsel, b: Varsel) => {
  const dayjsA = dayjs(a.forstBehandlet, FormatForstBehandlet);
  const dayjsB = dayjs(b.forstBehandlet, FormatForstBehandlet);

  return dayjsB.diff(dayjsA);
};

const dateAsText = (date: string): string => {
  const language = useContext(LanguageContext);

  if (dayjs(date).isSame(dayjs(), "day")) {
    return text.iDag[language];
  }

  if (dayjs(date).isSame(dayjs().subtract(1, "day"), "day")) {
    return text.iGår[language];
  }

  return dayjs(date).format("DD.MM.YY");
};

const timeAsText = (date: string): string => {
  const language = useContext(LanguageContext);

  return `${text.klokkeslettPrefix[language]} ${dayjs(date).format("HH.mm")}`;
};

export const formatToReadableDate = (date: string) => `${dateAsText(date)}, ${timeAsText(date)}`;
