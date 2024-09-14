import { z } from "zod";
import { UpdateType } from "./update_type.ts";

export const Z_UpdateType = z.number()
  .and(z.nativeEnum(UpdateType, { description: "enum_UpdateType" }));
