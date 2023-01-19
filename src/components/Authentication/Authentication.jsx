import React from "react";
import { apiStatusUrl, apiLoginUrl, tidligereVarslerUrl } from "../../api/urls";
import { useQuery } from "react-query";
import { fetcher } from "../../api/api";

export const Authentication = ({ children }) => {
  const { data: status, isLoading, isError } = useQuery(apiStatusUrl, fetcher);
  console.log(status);
  if (status?.authenticated === false || isError) {
    console.log(status);
    window.location.assign(`${apiLoginUrl}?redirect_uri=${tidligereVarslerUrl}`);
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};
