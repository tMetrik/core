import { z } from "zod";
import { ChatMemberStatus } from "./chat_member_status.ts";

export const Z_ChatMemberStatus = z.number()
  .and(
    z.nativeEnum(ChatMemberStatus, { description: "enum_ChatMemberStatus" }),
  );
