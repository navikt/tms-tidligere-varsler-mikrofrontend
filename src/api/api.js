import { useQuery } from "react-query";
import { notifikasjonerUrl, inaktiveNotifikasjonerUrl } from "./urls";

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

export const fetchAktivBrukernotifikasjoner = () => {
  console.log(notifikasjonerUrl);
  const response = useQuery(notifikasjonerUrl, fetcher);
  return response;
};

export const fetchInktivBrukernotifikasjoner = () => {
  console.log(inaktiveNotifikasjonerUrl);
  const response = useQuery(inaktiveNotifikasjonerUrl, fetcher);
  return response;
};
