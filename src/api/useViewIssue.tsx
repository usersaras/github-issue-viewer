/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosError } from "axios";
import { useAtom } from "jotai";
import { useQuery } from "react-query";
import { apiErrorAtom, apiLoadingAtom, issuesAtom } from "./store/apiStore";
import { useEffect } from "react";

export const useViewIssue = () => {
  const [, setData] = useAtom(issuesAtom);
  const [, setError] = useAtom(apiErrorAtom);
  const [, setLoading] = useAtom(apiLoadingAtom);

  const retrieveIssues = async () => {
    const response = await axios.get(
      "https://api.github.com/repos/usersaras/ReactTS_Pokedex/issues"
    );
    return response.data;
  };

  const {
    data: issues,
    error,
    isLoading,
  } = useQuery(["issues"], retrieveIssues);

  useEffect(() => {
    setData(issues);
  }, [issues]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    typeof error === "object" && setError(error as AxiosError);
  }, [error]);
};
