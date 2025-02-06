/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { NovuCore } from "../core.js";
import { cancel } from "../funcs/cancel.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useNovuContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type CancelMutationVariables = {
  transactionId: string;
  idempotencyKey?: string | undefined;
  options?: RequestOptions;
};

export type CancelMutationData = operations.EventsControllerCancelResponse;

/**
 * Cancel triggered event
 *
 * @remarks
 *
 *     Using a previously generated transactionId during the event trigger,
 *      will cancel any active or pending workflows. This is useful to cancel active digests, delays etc...
 */
export function useCancelMutation(
  options?: MutationHookOptions<
    CancelMutationData,
    Error,
    CancelMutationVariables
  >,
): UseMutationResult<CancelMutationData, Error, CancelMutationVariables> {
  const client = useNovuContext();
  return useMutation({
    ...buildCancelMutation(client, options),
    ...options,
  });
}

export function mutationKeyCancel(): MutationKey {
  return ["@novu/api", "cancel"];
}

export function buildCancelMutation(
  client$: NovuCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: CancelMutationVariables,
  ) => Promise<CancelMutationData>;
} {
  return {
    mutationKey: mutationKeyCancel(),
    mutationFn: function cancelMutationFn({
      transactionId,
      idempotencyKey,
      options,
    }): Promise<CancelMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(cancel(
        client$,
        transactionId,
        idempotencyKey,
        mergedOptions,
      ));
    },
  };
}
