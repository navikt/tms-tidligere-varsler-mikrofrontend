import { useQuery } from "react-query";
import {
  oppgaverApiUrl,
  beskjederApiUrl,
  innboksApiUrl,
  inaktiveBeskjederApiUrl,
  inaktiveOppgaverApiUrl,
  inaktiveInnboksApiUrl,
} from "./urls";

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error("Fetch request failed");
  }
};

export const fetcher = async ({ queryKey }) => {
  const response = await fetch(queryKey, {
    method: "GET",
    credentials: "include",
  });
  checkResponse(response);

  return response.json();
};

const fetchNotifikasjonMedType = (notifikasjonsurl, type) => {
  const { isLoading, data, isSuccess } = useQuery(notifikasjonsurl, fetcher);
  const typetEllerTomNotifikasjoner = isSuccess ? data.map((notifikasjon) => ({ ...notifikasjon, type: type })) : [];

  return { isLoading: isLoading, data: typetEllerTomNotifikasjoner };
};

export const fetchAktivNotifikasjoner = () => {
  const { isLoading: isLoadingOppgave, data: oppgave } = fetchNotifikasjonMedType(oppgaverApiUrl, "oppgave");
  const { isLoading: isLoadingBeskjed, data: beskjed } = fetchNotifikasjonMedType(beskjederApiUrl, "beskjed");
  const { isLoading: isLoadingInnboks, data: innboks } = fetchNotifikasjonMedType(innboksApiUrl, "innboks");

  const isLoading = isLoadingOppgave || isLoadingBeskjed || isLoadingInnboks;
  const samletNotifikasjoner = [...oppgave, ...beskjed, ...innboks];
  return { isLoading: isLoading, data: samletNotifikasjoner };
};

export const fetchInktivBrukernotifikasjoner = () => {
  const { isLoading: isLoadingOppgave, data: oppgave } = fetchNotifikasjonMedType(inaktiveOppgaverApiUrl, "oppgave");
  const { isLoading: isLoadingBeskjed, data: beskjed } = fetchNotifikasjonMedType(inaktiveBeskjederApiUrl, "beskjed");
  const { isLoading: isLoadingInnboks, data: innboks } = fetchNotifikasjonMedType(inaktiveInnboksApiUrl, "innboks");

  const isLoading = isLoadingOppgave || isLoadingBeskjed || isLoadingInnboks;
  const samletNotifikasjoner = [...oppgave, ...beskjed, ...innboks];
  return { isLoading: isLoading, data: samletNotifikasjoner };
};
