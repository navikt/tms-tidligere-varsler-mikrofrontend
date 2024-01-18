export interface Varsel {
  link: null | string;
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
