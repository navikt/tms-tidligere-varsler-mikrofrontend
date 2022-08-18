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
  innboks: () =>
    set({
      filterType: "innboks",
    }),
  search: (search) =>
    set({
      filterSearch: search,
    }),

  setBeskjedList: (list) =>
    set(() => ({
      beskjedList: list.map((obj) => ({ ...obj, type: "beskjed" })),
    })),

  removeBeskjed: (beskjed) =>
    set((state) => ({
      beskjedList: state.beskjedList.filter((b) => b.eventId !== beskjed.eventId),
    })),

  setInaktivBeskjedList: (list) =>
    set(() => ({ inaktivBeskjedList: list.map((obj) => ({ ...obj, type: "beskjed" })) })),

  addInaktivBeskjedList: (beskjed) => set((state) => ({ inaktivBeskjedList: [...state.inaktivBeskjedList, beskjed] })),
});

const useStore = create((set) => ({
  filterType: "alle",
  filterSearch: "",
  beskjedList: [],
  inaktivBeskjedList: [],
  ...actions(set),
}));

export default useStore;
