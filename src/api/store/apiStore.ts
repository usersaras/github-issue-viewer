import { AxiosError } from "axios";
import { atom } from "jotai";

export const apiErrorAtom = atom<AxiosError | null>(null);
export const apiLoadingAtom = atom(false);

export const issuesAtom = atom([]);
