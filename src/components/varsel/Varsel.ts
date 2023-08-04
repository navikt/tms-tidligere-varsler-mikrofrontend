export interface Varsel {
  eventId: string;
  type: string;
  forstBehandlet: string;
  arkivertAvNAV: boolean;
  tekst: string;
  produsent: string;
  isMasked: boolean;
  eksternVarslingSendt: boolean;
  eksternVarslingKanaler: string[];
}
