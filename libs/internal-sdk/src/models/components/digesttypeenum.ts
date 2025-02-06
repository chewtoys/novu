/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The Digest Type
 */
export const DigestTypeEnum = {
  Regular: "regular",
  Backoff: "backoff",
  Timed: "timed",
} as const;
/**
 * The Digest Type
 */
export type DigestTypeEnum = ClosedEnum<typeof DigestTypeEnum>;

/** @internal */
export const DigestTypeEnum$inboundSchema: z.ZodNativeEnum<
  typeof DigestTypeEnum
> = z.nativeEnum(DigestTypeEnum);

/** @internal */
export const DigestTypeEnum$outboundSchema: z.ZodNativeEnum<
  typeof DigestTypeEnum
> = DigestTypeEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DigestTypeEnum$ {
  /** @deprecated use `DigestTypeEnum$inboundSchema` instead. */
  export const inboundSchema = DigestTypeEnum$inboundSchema;
  /** @deprecated use `DigestTypeEnum$outboundSchema` instead. */
  export const outboundSchema = DigestTypeEnum$outboundSchema;
}
