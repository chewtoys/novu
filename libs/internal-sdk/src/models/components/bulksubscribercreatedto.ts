/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CreateSubscriberRequestDto,
  CreateSubscriberRequestDto$inboundSchema,
  CreateSubscriberRequestDto$Outbound,
  CreateSubscriberRequestDto$outboundSchema,
} from "./createsubscriberrequestdto.js";

export type BulkSubscriberCreateDto = {
  /**
   * An array of subscribers to be created in bulk.
   */
  subscribers: Array<CreateSubscriberRequestDto>;
};

/** @internal */
export const BulkSubscriberCreateDto$inboundSchema: z.ZodType<
  BulkSubscriberCreateDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  subscribers: z.array(CreateSubscriberRequestDto$inboundSchema),
});

/** @internal */
export type BulkSubscriberCreateDto$Outbound = {
  subscribers: Array<CreateSubscriberRequestDto$Outbound>;
};

/** @internal */
export const BulkSubscriberCreateDto$outboundSchema: z.ZodType<
  BulkSubscriberCreateDto$Outbound,
  z.ZodTypeDef,
  BulkSubscriberCreateDto
> = z.object({
  subscribers: z.array(CreateSubscriberRequestDto$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkSubscriberCreateDto$ {
  /** @deprecated use `BulkSubscriberCreateDto$inboundSchema` instead. */
  export const inboundSchema = BulkSubscriberCreateDto$inboundSchema;
  /** @deprecated use `BulkSubscriberCreateDto$outboundSchema` instead. */
  export const outboundSchema = BulkSubscriberCreateDto$outboundSchema;
  /** @deprecated use `BulkSubscriberCreateDto$Outbound` instead. */
  export type Outbound = BulkSubscriberCreateDto$Outbound;
}

export function bulkSubscriberCreateDtoToJSON(
  bulkSubscriberCreateDto: BulkSubscriberCreateDto,
): string {
  return JSON.stringify(
    BulkSubscriberCreateDto$outboundSchema.parse(bulkSubscriberCreateDto),
  );
}

export function bulkSubscriberCreateDtoFromJSON(
  jsonString: string,
): SafeParseResult<BulkSubscriberCreateDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BulkSubscriberCreateDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BulkSubscriberCreateDto' from JSON`,
  );
}
