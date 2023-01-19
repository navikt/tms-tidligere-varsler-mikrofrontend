import create from "zustand";

const actions = (set) => ({
  alle: () =>
    set({
      filterType: "ALLE",
    }),
  oppgave: () =>
    set({
      filterType: "OPPGAVE",
    }),
  beskjed: () =>
    set({
      filterType: "BESKJED",
    }),
  search: (search) =>
    set({
      filterSearch: search,
    }),
});

const useStore = create((set) => ({
  filterType: "ALLE",
  filterSearch: "",
  ...actions(set),
}));

export default useStore;
