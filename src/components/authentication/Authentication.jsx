import React from "react";
import { apiStatusUrl, apiLoginUrl, tidligereVarslerUrl } from "../../api/urls";
import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import { Loader } from "@navikt/ds-react";
import style from "./Authentication.module.css";

const Authentication = ({ children }) => {
  const { data: status, isLoading, isError } = useQuery(apiStatusUrl, fetcher);
  if (status?.authenticated === false || isError) {
    window.location.assign(`${apiLoginUrl}?redirect_uri=${tidligereVarslerUrl}`);
    return null;
  }

  return isLoading ? (
    <div className={style.pageLoader}>
      <Loader transparent title="Laster inn..." size="2xlarge" />
    </div>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};

export default Authentication;
