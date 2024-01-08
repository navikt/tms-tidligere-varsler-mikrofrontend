import { atom } from "nanostores";

export type FilterTypes = "alle" | "oppgave" | "beskjed";

export const filterType = atom<string>("alle");

export const setFilterType = (type: FilterTypes) => {
  filterType.set(type);
};

export const filterSearch = atom<string>("");

export const setFilterSearch = (searchWord: string) => {
  filterSearch.set(searchWord);
};
