import { z } from "zod";
import { ChatType } from "./chat_type.ts";

export const Z_ChatType = z.number()
  .and(z.nativeEnum(ChatType, { description: "enum_ChatType" }));
