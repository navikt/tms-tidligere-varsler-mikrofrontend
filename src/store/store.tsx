import create from "zustand";

const actions = (set: any) => ({
  alle: () =>
    set({
      filterType: "alle",
    }),
  oppgave: () =>
    set({
      filterType: "oppgave",
    }),
  beskjed: () =>
    set({
      filterType: "beskjed",
    }),
  search: (search: string) =>
    set({
      filterSearch: search,
    }),
});

export interface SelectionState extends ReturnType<typeof actions> {
  filterType: string,
  filterSearch: string
}

const useStore = create<SelectionState>((set) => ({
  filterType: "alle",
  filterSearch: "",
  ...actions(set),
}));

export default useStore;
