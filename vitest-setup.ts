import "vitest-axe/extend-expect";
import * as matchers from "vitest-axe/matchers";
import { expect, vi } from "vitest";
expect.extend(matchers);

// @ts-expect-error mock for å fikse jsdom-feil i testene
HTMLCanvasElement.prototype.getContext = vi.fn();
