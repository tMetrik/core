import { z } from "zod";
import { MessageType } from "./message_type.ts";

export const Z_MessageType = z.number()
  .and(z.nativeEnum(MessageType, { description: "enum_MessageType" }));
