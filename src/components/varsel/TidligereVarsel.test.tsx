import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import TidligereVarsel from "./TidligereVarsel";
import { axe } from "vitest-axe";

test("rendrer varsel", async () => {
  const { container } = render(
    <TidligereVarsel
      varselData={{
        link: null,
        eventId: "1584093204636",
        type: "oppgave",
        forstBehandlet: "2022-02-01T11:12:04+01:00",
        arkivertAvNAV: false,
        tekst: "Du har sagt du skal ettersende vedlegg til Søknad om stønad til anskaffelse av motorkjøretøy",
        produsent: "henvendelse",
        isMasked: false,
        eksternVarslingSendt: false,
        eksternVarslingKanaler: ["SMS"],
      }}
    />,
  );

  expect(await axe(container)).toHaveNoViolations();
});
