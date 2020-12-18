(function() {var implementors = {};
implementors["serenity"] = [{"text":"impl Clone for OpCode","synthetic":false,"types":[]},{"text":"impl Clone for ApplicationInfo","synthetic":false,"types":[]},{"text":"impl Clone for BotApplication","synthetic":false,"types":[]},{"text":"impl Clone for CurrentApplicationInfo","synthetic":false,"types":[]},{"text":"impl Clone for Team","synthetic":false,"types":[]},{"text":"impl Clone for TeamMember","synthetic":false,"types":[]},{"text":"impl Clone for MembershipState","synthetic":false,"types":[]},{"text":"impl Clone for Attachment","synthetic":false,"types":[]},{"text":"impl&lt;H:&nbsp;Clone + AsRef&lt;Http&gt;&gt; Clone for MessagesIter&lt;H&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Embed","synthetic":false,"types":[]},{"text":"impl Clone for EmbedAuthor","synthetic":false,"types":[]},{"text":"impl Clone for EmbedField","synthetic":false,"types":[]},{"text":"impl Clone for EmbedFooter","synthetic":false,"types":[]},{"text":"impl Clone for EmbedImage","synthetic":false,"types":[]},{"text":"impl Clone for EmbedProvider","synthetic":false,"types":[]},{"text":"impl Clone for EmbedThumbnail","synthetic":false,"types":[]},{"text":"impl Clone for EmbedVideo","synthetic":false,"types":[]},{"text":"impl Clone for GuildChannel","synthetic":false,"types":[]},{"text":"impl Clone for Message","synthetic":false,"types":[]},{"text":"impl Clone for MessageReaction","synthetic":false,"types":[]},{"text":"impl Clone for MessageType","synthetic":false,"types":[]},{"text":"impl Clone for MessageActivityKind","synthetic":false,"types":[]},{"text":"impl Clone for MessageApplication","synthetic":false,"types":[]},{"text":"impl Clone for MessageActivity","synthetic":false,"types":[]},{"text":"impl Clone for MessageReference","synthetic":false,"types":[]},{"text":"impl Clone for ChannelMention","synthetic":false,"types":[]},{"text":"impl Clone for MessageFlags","synthetic":false,"types":[]},{"text":"impl Clone for PrivateChannel","synthetic":false,"types":[]},{"text":"impl Clone for Reaction","synthetic":false,"types":[]},{"text":"impl Clone for ReactionType","synthetic":false,"types":[]},{"text":"impl Clone for ChannelCategory","synthetic":false,"types":[]},{"text":"impl Clone for Sticker","synthetic":false,"types":[]},{"text":"impl Clone for StickerFormatType","synthetic":false,"types":[]},{"text":"impl Clone for Channel","synthetic":false,"types":[]},{"text":"impl Clone for ChannelType","synthetic":false,"types":[]},{"text":"impl Clone for PermissionOverwrite","synthetic":false,"types":[]},{"text":"impl Clone for PermissionOverwriteType","synthetic":false,"types":[]},{"text":"impl Clone for Error","synthetic":false,"types":[]},{"text":"impl Clone for ChannelCreateEvent","synthetic":false,"types":[]},{"text":"impl Clone for ChannelDeleteEvent","synthetic":false,"types":[]},{"text":"impl Clone for ChannelPinsUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for ChannelUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildBanAddEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildBanRemoveEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildCreateEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildDeleteEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildEmojisUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildIntegrationsUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildMemberAddEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildMemberRemoveEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildMemberUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildMembersChunkEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildRoleCreateEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildRoleDeleteEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildRoleUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for InviteCreateEvent","synthetic":false,"types":[]},{"text":"impl Clone for InviteDeleteEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildUnavailableEvent","synthetic":false,"types":[]},{"text":"impl Clone for GuildUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for MessageCreateEvent","synthetic":false,"types":[]},{"text":"impl Clone for MessageDeleteBulkEvent","synthetic":false,"types":[]},{"text":"impl Clone for MessageDeleteEvent","synthetic":false,"types":[]},{"text":"impl Clone for MessageUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for PresenceUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for PresencesReplaceEvent","synthetic":false,"types":[]},{"text":"impl Clone for ReactionAddEvent","synthetic":false,"types":[]},{"text":"impl Clone for ReactionRemoveEvent","synthetic":false,"types":[]},{"text":"impl Clone for ReactionRemoveAllEvent","synthetic":false,"types":[]},{"text":"impl Clone for ReadyEvent","synthetic":false,"types":[]},{"text":"impl Clone for ResumedEvent","synthetic":false,"types":[]},{"text":"impl Clone for TypingStartEvent","synthetic":false,"types":[]},{"text":"impl Clone for UnknownEvent","synthetic":false,"types":[]},{"text":"impl Clone for UserUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for VoiceServerUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for VoiceStateUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for WebhookUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for GatewayEvent","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl Clone for EventType","synthetic":false,"types":[]},{"text":"impl Clone for BotGateway","synthetic":false,"types":[]},{"text":"impl Clone for Activity","synthetic":false,"types":[]},{"text":"impl Clone for ActivityAssets","synthetic":false,"types":[]},{"text":"impl Clone for ActivityFlags","synthetic":false,"types":[]},{"text":"impl Clone for ActivityParty","synthetic":false,"types":[]},{"text":"impl Clone for ActivitySecrets","synthetic":false,"types":[]},{"text":"impl Clone for ActivityEmoji","synthetic":false,"types":[]},{"text":"impl Clone for ActivityType","synthetic":false,"types":[]},{"text":"impl Clone for Gateway","synthetic":false,"types":[]},{"text":"impl Clone for ClientStatus","synthetic":false,"types":[]},{"text":"impl Clone for Presence","synthetic":false,"types":[]},{"text":"impl Clone for Ready","synthetic":false,"types":[]},{"text":"impl Clone for SessionStartLimit","synthetic":false,"types":[]},{"text":"impl Clone for ActivityTimestamps","synthetic":false,"types":[]},{"text":"impl Clone for Emoji","synthetic":false,"types":[]},{"text":"impl&lt;H:&nbsp;Clone + AsRef&lt;Http&gt;&gt; Clone for MembersIter&lt;H&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Integration","synthetic":false,"types":[]},{"text":"impl Clone for IntegrationAccount","synthetic":false,"types":[]},{"text":"impl Clone for Member","synthetic":false,"types":[]},{"text":"impl Clone for PartialMember","synthetic":false,"types":[]},{"text":"impl Clone for PartialGuild","synthetic":false,"types":[]},{"text":"impl Clone for Role","synthetic":false,"types":[]},{"text":"impl Clone for PremiumTier","synthetic":false,"types":[]},{"text":"impl Clone for Ban","synthetic":false,"types":[]},{"text":"impl Clone for Guild","synthetic":false,"types":[]},{"text":"impl Clone for GuildContainer","synthetic":false,"types":[]},{"text":"impl Clone for GuildEmbed","synthetic":false,"types":[]},{"text":"impl Clone for GuildPrune","synthetic":false,"types":[]},{"text":"impl Clone for GuildInfo","synthetic":false,"types":[]},{"text":"impl Clone for GuildUnavailable","synthetic":false,"types":[]},{"text":"impl Clone for GuildStatus","synthetic":false,"types":[]},{"text":"impl Clone for DefaultMessageNotificationLevel","synthetic":false,"types":[]},{"text":"impl Clone for ExplicitContentFilter","synthetic":false,"types":[]},{"text":"impl Clone for MfaLevel","synthetic":false,"types":[]},{"text":"impl Clone for Region","synthetic":false,"types":[]},{"text":"impl Clone for VerificationLevel","synthetic":false,"types":[]},{"text":"impl Clone for ApplicationId","synthetic":false,"types":[]},{"text":"impl Clone for ChannelId","synthetic":false,"types":[]},{"text":"impl Clone for EmojiId","synthetic":false,"types":[]},{"text":"impl Clone for GuildId","synthetic":false,"types":[]},{"text":"impl Clone for IntegrationId","synthetic":false,"types":[]},{"text":"impl Clone for MessageId","synthetic":false,"types":[]},{"text":"impl Clone for RoleId","synthetic":false,"types":[]},{"text":"impl Clone for UserId","synthetic":false,"types":[]},{"text":"impl Clone for WebhookId","synthetic":false,"types":[]},{"text":"impl Clone for AuditLogEntryId","synthetic":false,"types":[]},{"text":"impl Clone for AttachmentId","synthetic":false,"types":[]},{"text":"impl Clone for StickerId","synthetic":false,"types":[]},{"text":"impl Clone for StickerPackId","synthetic":false,"types":[]},{"text":"impl Clone for Invite","synthetic":false,"types":[]},{"text":"impl Clone for InviteUser","synthetic":false,"types":[]},{"text":"impl Clone for InviteChannel","synthetic":false,"types":[]},{"text":"impl Clone for InviteGuild","synthetic":false,"types":[]},{"text":"impl Clone for RichInvite","synthetic":false,"types":[]},{"text":"impl Clone for EmojiIdentifier","synthetic":false,"types":[]},{"text":"impl Clone for AffectedComponent","synthetic":false,"types":[]},{"text":"impl Clone for Incident","synthetic":false,"types":[]},{"text":"impl Clone for IncidentUpdate","synthetic":false,"types":[]},{"text":"impl Clone for IncidentStatus","synthetic":false,"types":[]},{"text":"impl Clone for Maintenance","synthetic":false,"types":[]},{"text":"impl Clone for Permissions","synthetic":false,"types":[]},{"text":"impl Clone for CurrentUser","synthetic":false,"types":[]},{"text":"impl Clone for DefaultAvatar","synthetic":false,"types":[]},{"text":"impl Clone for OnlineStatus","synthetic":false,"types":[]},{"text":"impl Clone for User","synthetic":false,"types":[]},{"text":"impl Clone for VoiceRegion","synthetic":false,"types":[]},{"text":"impl Clone for VoiceState","synthetic":false,"types":[]},{"text":"impl Clone for Webhook","synthetic":false,"types":[]},{"text":"impl Clone for CreateEmbed","synthetic":false,"types":[]},{"text":"impl Clone for CreateEmbedAuthor","synthetic":false,"types":[]},{"text":"impl Clone for CreateEmbedFooter","synthetic":false,"types":[]},{"text":"impl Clone for Timestamp","synthetic":false,"types":[]},{"text":"impl Clone for CreateChannel","synthetic":false,"types":[]},{"text":"impl Clone for CreateInvite","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for CreateMessage&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for ParseValue","synthetic":false,"types":[]},{"text":"impl Clone for CreateAllowedMentions","synthetic":false,"types":[]},{"text":"impl Clone for EditChannel","synthetic":false,"types":[]},{"text":"impl Clone for EditGuild","synthetic":false,"types":[]},{"text":"impl Clone for EditMember","synthetic":false,"types":[]},{"text":"impl Clone for EditMessage","synthetic":false,"types":[]},{"text":"impl Clone for EditProfile","synthetic":false,"types":[]},{"text":"impl Clone for EditRole","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for ExecuteWebhook&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for GetMessages","synthetic":false,"types":[]},{"text":"impl Clone for Settings","synthetic":false,"types":[]},{"text":"impl Clone for ShardStageUpdateEvent","synthetic":false,"types":[]},{"text":"impl Clone for ShardMessenger","synthetic":false,"types":[]},{"text":"impl Clone for ChunkGuildFilter","synthetic":false,"types":[]},{"text":"impl Clone for ShardRunnerMessage","synthetic":false,"types":[]},{"text":"impl Clone for GatewayIntents","synthetic":false,"types":[]},{"text":"impl Clone for ShardClientMessage","synthetic":false,"types":[]},{"text":"impl Clone for ShardManagerMessage","synthetic":false,"types":[]},{"text":"impl Clone for ShardQueuerMessage","synthetic":false,"types":[]},{"text":"impl Clone for ShardId","synthetic":false,"types":[]},{"text":"impl Clone for Context","synthetic":false,"types":[]},{"text":"impl Clone for Error","synthetic":false,"types":[]},{"text":"impl Clone for Extras","synthetic":false,"types":[]},{"text":"impl Clone for GroupCommandsPair","synthetic":false,"types":[]},{"text":"impl Clone for SuggestedCommandName","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for Command&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Suggestions","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for CustomisedHelpData&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Delimiter","synthetic":false,"types":[]},{"text":"impl Clone for Args","synthetic":false,"types":[]},{"text":"impl Clone for WithWhiteSpace","synthetic":false,"types":[]},{"text":"impl Clone for Reason","synthetic":false,"types":[]},{"text":"impl Clone for OnlyIn","synthetic":false,"types":[]},{"text":"impl Clone for HelpBehaviour","synthetic":false,"types":[]},{"text":"impl Clone for HelpOptions","synthetic":false,"types":[]},{"text":"impl Clone for Error","synthetic":false,"types":[]},{"text":"impl Clone for ConnectionStage","synthetic":false,"types":[]},{"text":"impl Clone for InterMessage","synthetic":false,"types":[]},{"text":"impl Clone for DiscordJsonError","synthetic":false,"types":[]},{"text":"impl Clone for ErrorResponse","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for Request&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Route","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for RouteInfo&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for LightMethod","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for AttachmentType&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Colour","synthetic":false,"types":[]},{"text":"impl Clone for MessageBuilder","synthetic":false,"types":[]},{"text":"impl Clone for Content","synthetic":false,"types":[]},{"text":"impl Clone for CustomMessage","synthetic":false,"types":[]},{"text":"impl Clone for ContentSafeOptions","synthetic":false,"types":[]},{"text":"impl Clone for MessageFilter","synthetic":false,"types":[]},{"text":"impl Clone for ReactionFilter","synthetic":false,"types":[]},{"text":"impl Clone for CacheAndHttp","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()