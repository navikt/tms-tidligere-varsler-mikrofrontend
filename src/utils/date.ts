import dayjs from "dayjs";
import "dayjs/locale/nb";
import localeData from "dayjs/plugin/localeData";
import { Varsel } from "../components/varsel/Varsel";

const FormatForstBehandlet = "YYYY-MM-DDTHH:mm:ss:SSS[Z]";

export const setLocaleDate = () => {
  dayjs.extend(localeData);
  dayjs.locale("nb");
};

export const formatToReadableDate = (date: string) => {
  return dayjs(date).format("DD.MM.YYYY");
};

export const byForstBehandlet = (a: Varsel, b: Varsel) => {
  const dayjsA = dayjs(a.forstBehandlet, FormatForstBehandlet);
  const dayjsB = dayjs(b.forstBehandlet, FormatForstBehandlet);

  return dayjsB.diff(dayjsA);
};
