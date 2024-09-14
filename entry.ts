import type { ChatType } from "./entry/chat_type.ts";
import type { MessageType } from "./entry/message_type.ts";
import type { UpdateType } from "./entry/update_type.ts";
import type { ChatMemberStatus } from "./entry/chat_member_status.ts";

export interface Entry {
  // generic
  timestamp: Date;
  type: UpdateType;
  to: number;
  from: number;

  // Sender
  from_bot: boolean;
  from_firstname: string;
  from_lastname: string;
  from_username: string;
  from_languagecode: string;
  from_premium: boolean;
  from_type: ChatType;
  from_title: string;
  from_businessconnection: string;
  from_boostcount: number;
  from_signature: string;

  // Receiver
  to_bot: boolean;
  to_firstname: string;
  to_lastname: string;
  to_username: string;

  // Chat
  chat_id: number;
  chat_username: string;
  chat_title: string;
  chat_firstname: string;
  chat_lastname: string;
  chat_type: ChatType;

  // Message
  message_type: MessageType;
  message_id: number;
  message_threadid: number;
  message_date: Date;
  message_topic: boolean;
  message_automaticforward: boolean;
  message_effectid: string;
  message_replytomessageid: number;
  message_quotetext: string;

  // Forward
  forward_date: Date;
  forward_from: number;
  forward_messageid: number;
  forward_signature: string;
  forward_bot: boolean;
  forward_name: string;

  // Text message / media captions
  message_text: string;

  // Link preview-only message
  message_url: string;

  // Dice message
  dice_emoji: string;
  dice_value: number;

  // Callback query
  callbackquery_id: string;
  callbackquery_inlinemessageid: string;
  callbackquery_data: string;

  // Inline query
  inlinequery_id: string;
  inlinequery_text: string;
  inlinequery_offset: string;

  // Chosen inline result
  inlineresultchosen_id: string;
  inlineresultchosen_query: string;
  inlineresultchosen_inlinemessageid: string;

  // Chat member updates
  chatmember_id: number;
  chatmember_bot: boolean;
  chatmember_firstname: string;
  chatmember_lastname: string;
  chatmember_username: string;
  chatmember_premium: boolean;
  chatmember_oldstatus: ChatMemberStatus;
  chatmember_newstatus: ChatMemberStatus;

  // library
  payload: string;
}
