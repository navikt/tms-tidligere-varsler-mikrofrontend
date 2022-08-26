import { useQuery } from "react-query";
import useStore from "../store/store";
import { byForstBehandlet } from "../utils/date.js";
import {
  selectBeskjedList,
  selectSetBeskjedList,
  selectInaktivBeskjedList,
  selectSetInaktivBeskjedList,
} from "../store/selectors";
import {
  oppgaverApiUrl,
  beskjederApiUrl,
  innboksApiUrl,
  inaktiveBeskjederApiUrl,
  inaktiveOppgaverApiUrl,
  inaktiveInnboksApiUrl,
  doneUrl,
  digisosDoneUrl,
  innloggingsstatusUrl,
} from "./urls";

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error("Fetch request failed");
  }
};

const fetcher = async ({ queryKey }) => {
  const response = await fetch(queryKey, {
    method: "GET",
    credentials: "include",
  });
  checkResponse(response);

  return response.json();
};

const fetchNotifikasjonMedType = (notifikasjonsurl, type) => {
  const { isLoading, data, isSuccess } = useQuery(notifikasjonsurl, fetcher);
  const typedNotifikasjonList = isSuccess ? data.map((notifikasjon) => ({ ...notifikasjon, type: type })) : [];

  return { isLoading: isLoading, data: typedNotifikasjonList, isSuccess };
};

const postJSON = (url, content) =>
  new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((response) => response.headers)
      .then((headers) => resolve(headers))
      .catch((e) => reject(e));
  });

export const fetchInnloggingsstatus = () => {
  const { data } = useQuery(innloggingsstatusUrl, fetcher);
  return data;
};

export const fetchAktiveNotifikasjoner = () => {
  const beskjedList = useStore(selectBeskjedList);
  const setBeskjedList = useStore(selectSetBeskjedList);

  const { isLoading: isLoadingOppgave, data: oppgave } = fetchNotifikasjonMedType(oppgaverApiUrl, "oppgave");
  const { isLoading: isLoadingInnboks, data: innboks } = fetchNotifikasjonMedType(innboksApiUrl, "innboks");
  const { isLoading: isLoadingBeskjed } = useQuery(beskjederApiUrl, fetcher, {
    onSuccess: setBeskjedList,
  });

  const isLoading = isLoadingOppgave || isLoadingBeskjed || isLoadingInnboks;
  const notifikasjoner = [
    ...oppgave.sort(byForstBehandlet),
    ...beskjedList.sort(byForstBehandlet),
    ...innboks.sort(byForstBehandlet),
  ];
  return { isLoading, notifikasjoner };
};

export const fetchInaktiveNotifikasjoner = () => {
  const inaktivBeskjedList = useStore(selectInaktivBeskjedList);
  const setInaktivBeskjedList = useStore(selectSetInaktivBeskjedList);

  const { isLoading: isLoadingOppgave, data: inakriveOppgaver } = fetchNotifikasjonMedType(
    inaktiveOppgaverApiUrl,
    "oppgave"
  );
  const { isLoading: isLoadingInnboks, data: inakriveInnboks } = fetchNotifikasjonMedType(
    inaktiveInnboksApiUrl,
    "innboks"
  );

  const { isLoading: isLoadingBeskjed } = useQuery(inaktiveBeskjederApiUrl, fetcher, {
    onSuccess: setInaktivBeskjedList,
  });

  const isLoading = isLoadingOppgave || isLoadingBeskjed || isLoadingInnboks;
  const inaktiveNotifikasjoner = [...inakriveOppgaver, ...inaktivBeskjedList, ...inakriveInnboks].sort(
    byForstBehandlet
  );
  return { isLoading, inaktiveNotifikasjoner };
};

export const postDone = (content) => postJSON(`${doneUrl}`, content);
export const postDigisosDone = (content) => postJSON(`${digisosDoneUrl}`, content);
