import { SelectionState } from "./store";

export const selectType = (state: SelectionState) => state.filterType;

export const selectAlle = (state: SelectionState) => state.alle;

export const selectBeskjed = (state: SelectionState) => state.beskjed;

export const selectOppgave = (state: SelectionState) => state.oppgave;

export const selectSearch = (state: SelectionState) => state.filterSearch;

export const updateSearch = (state: SelectionState) => state.search;
