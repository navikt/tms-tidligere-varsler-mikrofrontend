import dayjs from "dayjs";
import "dayjs/locale/nb";
import localeData from "dayjs/plugin/localeData";

const FormatForstBehandlet = "YYYY-MM-DDTHH:mm:ss:SSS[Z]";

export const setLocaleDate = () => {
  dayjs.extend(localeData);
  dayjs.locale("nb");
};

export const formatToReadableDate = (date) => {
  return dayjs(date).format("D. MMMM YYYY, kl. HH.mm");
};

export const byForstBehandlet = (a, b) => {
  const dayjsA = dayjs(a.forstBehandlet, FormatForstBehandlet);
  const dayjsB = dayjs(b.forstBehandlet, FormatForstBehandlet);

  return dayjsB.diff(dayjsA);
};
