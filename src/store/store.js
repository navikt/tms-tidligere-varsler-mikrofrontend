import create from "zustand";

const actions = (set) => ({
  alle: () =>
    set((state) => ({
      filterType: "alle",
    })),
  oppgave: () =>
    set({
      filterType: "oppgave",
    }),
  beskjed: () =>
    set({
      filterType: "beskjed",
    }),
  innboks: () =>
    set({
      filterType: "innboks",
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
