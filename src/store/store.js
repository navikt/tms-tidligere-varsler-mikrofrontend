import create from "zustand";

const actions = (set) => ({
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
  search: (search) =>
    set({
      filterSearch: search,
    }),
});

const useStore = create((set) => ({
  filterType: "alle",
  filterSearch: "",
  ...actions(set),
}));

export default useStore;
