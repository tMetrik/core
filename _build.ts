import { Z_Entry } from "./entry.zod.ts";

Deno.writeTextFileSync(
  "entry_keys.ts",
  `export const ENTRY_KEYS = [
${Object.keys(Z_Entry._def.shape()).map((v) => `  "${v}",\n`).join("")}];\n`,
);
