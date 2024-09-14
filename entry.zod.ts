import { z } from "zod";
import { Z_UpdateType } from "./entry/update_type.zod.ts";
import { Z_ChatType } from "./entry/chat_type.zod.ts";
import { Z_MessageType } from "./entry/message_type.zod.ts";
import { Z_ChatMemberStatus } from "./entry/chat_member_status.zod.ts";
import { UpdateType } from "./entry/update_type.ts";
import { ChatType } from "./entry/chat_type.ts";
import { MessageType } from "./entry/message_type.ts";
import { ChatMemberStatus } from "./entry/chat_member_status.ts";

export const Z_Entry = z.object({
  // generic
  timestamp: z.string().datetime().default(new Date(0).toISOString()),
  type: Z_UpdateType.default(UpdateType.Unknown),
  to: z.number().default(0),
  from: z.number().default(0),

  // Sender
  from_bot: z.boolean().default(false),
  from_firstname: z.string().default(""),
  from_lastname: z.string().default(""),
  from_username: z.string().default(""),
  from_languagecode: z.string().default(""),
  from_premium: z.boolean().default(false),
  from_type: Z_ChatType.default(ChatType.Unknown),
  from_title: z.string().default(""),
  from_businessconnection: z.string().default(""),
  from_boostcount: z.number().default(0),
  from_signature: z.string().default(""),

  // Receiver
  to_bot: z.boolean().default(false),
  to_firstname: z.string().default(""),
  to_lastname: z.string().default(""),
  to_username: z.string().default(""),

  // Chat
  chat_id: z.number().default(0),
  chat_username: z.string().default(""),
  chat_title: z.string().default(""),
  chat_firstname: z.string().default(""),
  chat_lastname: z.string().default(""),
  chat_type: Z_ChatType.default(ChatType.Unknown),

  // Message
  message_type: Z_MessageType.default(MessageType.Unsupported),
  message_id: z.number().default(0),
  message_threadid: z.number().default(0),
  message_date: z.string().datetime().default(new Date(0).toISOString()),
  message_topic: z.boolean().default(false),
  message_automaticforward: z.boolean().default(false),
  message_effectid: z.string().default(""),
  message_replytomessageid: z.number().default(0),
  message_quotetext: z.string().default(""),

  // Forward
  forward_date: z.string().datetime().default(new Date(0).toISOString()),
  forward_from: z.number().default(0),
  forward_messageid: z.number().default(0),
  forward_signature: z.string().default(""),
  forward_bot: z.boolean().default(false),
  forward_name: z.string().default(""),

  // Text message / media captions
  message_text: z.string().default(""),

  // Link preview-only message
  message_url: z.string().default(""),

  // Dice message
  dice_emoji: z.string().default(""),
  dice_value: z.number().default(0),

  // Callback query
  callbackquery_id: z.string().default(""),
  callbackquery_inlinemessageid: z.string().default(""),
  callbackquery_data: z.string().default(""),

  // Inline query
  inlinequery_id: z.string().default(""),
  inlinequery_text: z.string().default(""),
  inlinequery_offset: z.string().default(""),

  // Chosen inline result
  inlineresultchosen_id: z.string().default(""),
  inlineresultchosen_query: z.string().default(""),
  inlineresultchosen_inlinemessageid: z.string().default(""),

  // Chat member updates
  chatmember_id: z.number().default(0),
  chatmember_bot: z.boolean().default(false),
  chatmember_firstname: z.string().default(""),
  chatmember_lastname: z.string().default(""),
  chatmember_username: z.string().default(""),
  chatmember_premium: z.boolean().default(false),
  chatmember_oldstatus: Z_ChatMemberStatus.default(ChatMemberStatus.Unknown),
  chatmember_newstatus: Z_ChatMemberStatus.default(ChatMemberStatus.Unknown),

  // library
  payload: z.string().default(""),
});
