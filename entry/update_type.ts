// UInt8
export enum UpdateType {
  Unknown = 0,

  // messages
  Message,
  MessageEdited,
  MessagesDeleted,
  CallbackQuery,

  // boosts
  ChatBoost,
  ChatBoostRemoved,

  // inline
  InlineQuery,
  InlineResultChosen,

  // chat members
  JoinRequest,
  ChatMember,
  ChatMemberMy,

  // reactions
  MessageReactionCount,
  MessageReactions,
}
