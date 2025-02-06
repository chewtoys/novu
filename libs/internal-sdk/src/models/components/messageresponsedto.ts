/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChannelTypeEnum,
  ChannelTypeEnum$inboundSchema,
  ChannelTypeEnum$outboundSchema,
} from "./channeltypeenum.js";
import {
  EmailBlock,
  EmailBlock$inboundSchema,
  EmailBlock$Outbound,
  EmailBlock$outboundSchema,
} from "./emailblock.js";
import {
  MessageCTA,
  MessageCTA$inboundSchema,
  MessageCTA$Outbound,
  MessageCTA$outboundSchema,
} from "./messagecta.js";
import {
  MessageStatusEnum,
  MessageStatusEnum$inboundSchema,
  MessageStatusEnum$outboundSchema,
} from "./messagestatusenum.js";
import {
  SubscriberResponseDto,
  SubscriberResponseDto$inboundSchema,
  SubscriberResponseDto$Outbound,
  SubscriberResponseDto$outboundSchema,
} from "./subscriberresponsedto.js";
import {
  WorkflowResponse,
  WorkflowResponse$inboundSchema,
  WorkflowResponse$Outbound,
  WorkflowResponse$outboundSchema,
} from "./workflowresponse.js";

/**
 * Content of the message, can be an email block or a string
 */
export type Content = EmailBlock | string;

/**
 * The payload that was used to send the notification trigger
 */
export type MessageResponseDtoPayload = {};

/**
 * Provider specific overrides used when triggering the notification
 */
export type MessageResponseDtoOverrides = {};

export type MessageResponseDto = {
  /**
   * Unique identifier for the message
   */
  id?: string | undefined;
  /**
   * Template ID associated with the message
   */
  templateId: string;
  /**
   * Environment ID where the message is sent
   */
  environmentId: string;
  /**
   * Message template ID
   */
  messageTemplateId: string;
  /**
   * Organization ID associated with the message
   */
  organizationId: string;
  /**
   * Notification ID associated with the message
   */
  notificationId: string;
  /**
   * Subscriber ID associated with the message
   */
  subscriberId: string;
  /**
   * Subscriber details, if available
   */
  subscriber?: SubscriberResponseDto | undefined;
  /**
   * Workflow template associated with the message
   */
  template?: WorkflowResponse | undefined;
  /**
   * Identifier for the message template
   */
  templateIdentifier?: string | undefined;
  /**
   * Creation date of the message
   */
  createdAt: string;
  /**
   * Last seen date of the message, if available
   */
  lastSeenDate?: string | undefined;
  /**
   * Last read date of the message, if available
   */
  lastReadDate?: string | undefined;
  /**
   * Content of the message, can be an email block or a string
   */
  content: EmailBlock | string;
  /**
   * Transaction ID associated with the message
   */
  transactionId: string;
  /**
   * Subject of the message, if applicable
   */
  subject?: string | undefined;
  /**
   * Channel type through which the message is sent
   */
  channel: ChannelTypeEnum;
  /**
   * Indicates if the message has been read
   */
  read: boolean;
  /**
   * Indicates if the message has been seen
   */
  seen: boolean;
  /**
   * Email address associated with the message, if applicable
   */
  email?: string | undefined;
  /**
   * Phone number associated with the message, if applicable
   */
  phone?: string | undefined;
  /**
   * Direct webhook URL for the message, if applicable
   */
  directWebhookUrl?: string | undefined;
  /**
   * Provider ID associated with the message, if applicable
   */
  providerId?: string | undefined;
  /**
   * Device tokens associated with the message, if applicable
   */
  deviceTokens?: Array<string> | undefined;
  /**
   * Title of the message, if applicable
   */
  title?: string | undefined;
  /**
   * Call to action associated with the message
   */
  cta: MessageCTA;
  /**
   * Feed ID associated with the message, if applicable
   */
  feedId?: string | null | undefined;
  /**
   * Status of the message
   */
  status: MessageStatusEnum;
  /**
   * Error ID if the message has an error
   */
  errorId?: string | undefined;
  /**
   * Error text if the message has an error
   */
  errorText?: string | undefined;
  /**
   * The payload that was used to send the notification trigger
   */
  payload?: MessageResponseDtoPayload | undefined;
  /**
   * Provider specific overrides used when triggering the notification
   */
  overrides?: MessageResponseDtoOverrides | undefined;
};

/** @internal */
export const Content$inboundSchema: z.ZodType<Content, z.ZodTypeDef, unknown> =
  z.union([EmailBlock$inboundSchema, z.string()]);

/** @internal */
export type Content$Outbound = EmailBlock$Outbound | string;

/** @internal */
export const Content$outboundSchema: z.ZodType<
  Content$Outbound,
  z.ZodTypeDef,
  Content
> = z.union([EmailBlock$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Content$ {
  /** @deprecated use `Content$inboundSchema` instead. */
  export const inboundSchema = Content$inboundSchema;
  /** @deprecated use `Content$outboundSchema` instead. */
  export const outboundSchema = Content$outboundSchema;
  /** @deprecated use `Content$Outbound` instead. */
  export type Outbound = Content$Outbound;
}

export function contentToJSON(content: Content): string {
  return JSON.stringify(Content$outboundSchema.parse(content));
}

export function contentFromJSON(
  jsonString: string,
): SafeParseResult<Content, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Content$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Content' from JSON`,
  );
}

/** @internal */
export const MessageResponseDtoPayload$inboundSchema: z.ZodType<
  MessageResponseDtoPayload,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type MessageResponseDtoPayload$Outbound = {};

/** @internal */
export const MessageResponseDtoPayload$outboundSchema: z.ZodType<
  MessageResponseDtoPayload$Outbound,
  z.ZodTypeDef,
  MessageResponseDtoPayload
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageResponseDtoPayload$ {
  /** @deprecated use `MessageResponseDtoPayload$inboundSchema` instead. */
  export const inboundSchema = MessageResponseDtoPayload$inboundSchema;
  /** @deprecated use `MessageResponseDtoPayload$outboundSchema` instead. */
  export const outboundSchema = MessageResponseDtoPayload$outboundSchema;
  /** @deprecated use `MessageResponseDtoPayload$Outbound` instead. */
  export type Outbound = MessageResponseDtoPayload$Outbound;
}

export function messageResponseDtoPayloadToJSON(
  messageResponseDtoPayload: MessageResponseDtoPayload,
): string {
  return JSON.stringify(
    MessageResponseDtoPayload$outboundSchema.parse(messageResponseDtoPayload),
  );
}

export function messageResponseDtoPayloadFromJSON(
  jsonString: string,
): SafeParseResult<MessageResponseDtoPayload, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageResponseDtoPayload$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageResponseDtoPayload' from JSON`,
  );
}

/** @internal */
export const MessageResponseDtoOverrides$inboundSchema: z.ZodType<
  MessageResponseDtoOverrides,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type MessageResponseDtoOverrides$Outbound = {};

/** @internal */
export const MessageResponseDtoOverrides$outboundSchema: z.ZodType<
  MessageResponseDtoOverrides$Outbound,
  z.ZodTypeDef,
  MessageResponseDtoOverrides
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageResponseDtoOverrides$ {
  /** @deprecated use `MessageResponseDtoOverrides$inboundSchema` instead. */
  export const inboundSchema = MessageResponseDtoOverrides$inboundSchema;
  /** @deprecated use `MessageResponseDtoOverrides$outboundSchema` instead. */
  export const outboundSchema = MessageResponseDtoOverrides$outboundSchema;
  /** @deprecated use `MessageResponseDtoOverrides$Outbound` instead. */
  export type Outbound = MessageResponseDtoOverrides$Outbound;
}

export function messageResponseDtoOverridesToJSON(
  messageResponseDtoOverrides: MessageResponseDtoOverrides,
): string {
  return JSON.stringify(
    MessageResponseDtoOverrides$outboundSchema.parse(
      messageResponseDtoOverrides,
    ),
  );
}

export function messageResponseDtoOverridesFromJSON(
  jsonString: string,
): SafeParseResult<MessageResponseDtoOverrides, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageResponseDtoOverrides$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageResponseDtoOverrides' from JSON`,
  );
}

/** @internal */
export const MessageResponseDto$inboundSchema: z.ZodType<
  MessageResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string().optional(),
  _templateId: z.string(),
  _environmentId: z.string(),
  _messageTemplateId: z.string(),
  _organizationId: z.string(),
  _notificationId: z.string(),
  _subscriberId: z.string(),
  subscriber: SubscriberResponseDto$inboundSchema.optional(),
  template: WorkflowResponse$inboundSchema.optional(),
  templateIdentifier: z.string().optional(),
  createdAt: z.string(),
  lastSeenDate: z.string().optional(),
  lastReadDate: z.string().optional(),
  content: z.union([EmailBlock$inboundSchema, z.string()]),
  transactionId: z.string(),
  subject: z.string().optional(),
  channel: ChannelTypeEnum$inboundSchema,
  read: z.boolean(),
  seen: z.boolean(),
  email: z.string().optional(),
  phone: z.string().optional(),
  directWebhookUrl: z.string().optional(),
  providerId: z.string().optional(),
  deviceTokens: z.array(z.string()).optional(),
  title: z.string().optional(),
  cta: MessageCTA$inboundSchema,
  _feedId: z.nullable(z.string()).optional(),
  status: MessageStatusEnum$inboundSchema,
  errorId: z.string().optional(),
  errorText: z.string().optional(),
  payload: z.lazy(() => MessageResponseDtoPayload$inboundSchema).optional(),
  overrides: z.lazy(() => MessageResponseDtoOverrides$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "_templateId": "templateId",
    "_environmentId": "environmentId",
    "_messageTemplateId": "messageTemplateId",
    "_organizationId": "organizationId",
    "_notificationId": "notificationId",
    "_subscriberId": "subscriberId",
    "_feedId": "feedId",
  });
});

/** @internal */
export type MessageResponseDto$Outbound = {
  _id?: string | undefined;
  _templateId: string;
  _environmentId: string;
  _messageTemplateId: string;
  _organizationId: string;
  _notificationId: string;
  _subscriberId: string;
  subscriber?: SubscriberResponseDto$Outbound | undefined;
  template?: WorkflowResponse$Outbound | undefined;
  templateIdentifier?: string | undefined;
  createdAt: string;
  lastSeenDate?: string | undefined;
  lastReadDate?: string | undefined;
  content: EmailBlock$Outbound | string;
  transactionId: string;
  subject?: string | undefined;
  channel: string;
  read: boolean;
  seen: boolean;
  email?: string | undefined;
  phone?: string | undefined;
  directWebhookUrl?: string | undefined;
  providerId?: string | undefined;
  deviceTokens?: Array<string> | undefined;
  title?: string | undefined;
  cta: MessageCTA$Outbound;
  _feedId?: string | null | undefined;
  status: string;
  errorId?: string | undefined;
  errorText?: string | undefined;
  payload?: MessageResponseDtoPayload$Outbound | undefined;
  overrides?: MessageResponseDtoOverrides$Outbound | undefined;
};

/** @internal */
export const MessageResponseDto$outboundSchema: z.ZodType<
  MessageResponseDto$Outbound,
  z.ZodTypeDef,
  MessageResponseDto
> = z.object({
  id: z.string().optional(),
  templateId: z.string(),
  environmentId: z.string(),
  messageTemplateId: z.string(),
  organizationId: z.string(),
  notificationId: z.string(),
  subscriberId: z.string(),
  subscriber: SubscriberResponseDto$outboundSchema.optional(),
  template: WorkflowResponse$outboundSchema.optional(),
  templateIdentifier: z.string().optional(),
  createdAt: z.string(),
  lastSeenDate: z.string().optional(),
  lastReadDate: z.string().optional(),
  content: z.union([EmailBlock$outboundSchema, z.string()]),
  transactionId: z.string(),
  subject: z.string().optional(),
  channel: ChannelTypeEnum$outboundSchema,
  read: z.boolean(),
  seen: z.boolean(),
  email: z.string().optional(),
  phone: z.string().optional(),
  directWebhookUrl: z.string().optional(),
  providerId: z.string().optional(),
  deviceTokens: z.array(z.string()).optional(),
  title: z.string().optional(),
  cta: MessageCTA$outboundSchema,
  feedId: z.nullable(z.string()).optional(),
  status: MessageStatusEnum$outboundSchema,
  errorId: z.string().optional(),
  errorText: z.string().optional(),
  payload: z.lazy(() => MessageResponseDtoPayload$outboundSchema).optional(),
  overrides: z.lazy(() => MessageResponseDtoOverrides$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    templateId: "_templateId",
    environmentId: "_environmentId",
    messageTemplateId: "_messageTemplateId",
    organizationId: "_organizationId",
    notificationId: "_notificationId",
    subscriberId: "_subscriberId",
    feedId: "_feedId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageResponseDto$ {
  /** @deprecated use `MessageResponseDto$inboundSchema` instead. */
  export const inboundSchema = MessageResponseDto$inboundSchema;
  /** @deprecated use `MessageResponseDto$outboundSchema` instead. */
  export const outboundSchema = MessageResponseDto$outboundSchema;
  /** @deprecated use `MessageResponseDto$Outbound` instead. */
  export type Outbound = MessageResponseDto$Outbound;
}

export function messageResponseDtoToJSON(
  messageResponseDto: MessageResponseDto,
): string {
  return JSON.stringify(
    MessageResponseDto$outboundSchema.parse(messageResponseDto),
  );
}

export function messageResponseDtoFromJSON(
  jsonString: string,
): SafeParseResult<MessageResponseDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageResponseDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageResponseDto' from JSON`,
  );
}
