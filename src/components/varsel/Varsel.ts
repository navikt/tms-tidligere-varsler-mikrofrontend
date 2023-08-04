export interface Varsel {
  eventId: string;
  type: string;
  forstBehandlet: string;
  tekst: string;
  produsent: string;
  isMasked: boolean;
  eksternVarslingSendt: boolean;
  eksternVarslingKanaler: string[];
}
