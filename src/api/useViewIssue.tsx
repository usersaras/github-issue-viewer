/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useQuery } from "react-query";

export const useViewIssue = <T,>() => {
  const retrieveIssues = async () => {
    const response = await axios.get(
      "https://api.github.com/repos/usersaras/ReactTS_Pokedex/issues"
    );
    return response.data;
  };

  return useQuery<T, Error>(["issues"], retrieveIssues);
};
