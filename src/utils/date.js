import dayjs from "dayjs";
import "dayjs/locale/nb";
import localeData from "dayjs/plugin/localeData";
import moment from "moment";

const FormatForstBehandlet = "YYYY-MM-DDTHH:mm:ss:SSS[Z]";

export const setLocaleDate = () => {
  dayjs.extend(localeData);
  dayjs.locale("nb");
};

export const formatToReadableDate = (date) => {
  return dayjs(date).format("D. MMMM YYYY, kl. HH.mm");
};

export const byForstBehandlet = (a, b) => {
  const momentA = moment(a.forstBehandlet, FormatForstBehandlet);
  const momentB = moment(b.forstBehandlet, FormatForstBehandlet);

  return momentB.diff(momentA);
};
