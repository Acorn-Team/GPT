export const ELEVENLABS_AGENT_NAME = 'Support agent xcally';
export const XCALLY_TRANSFER_NUMBER = '+390299977124';

export type CollectedCallData = {
  caller_name?: string | null;
  caller_age?: string | number | null;
  caller_province?: string | null;
  call_reason?: string | null;
  caller_phone_number?: string | null;
};

export type NormalizedCallData = {
  caller_name: string;
  caller_age: string;
  caller_province: string;
  call_reason: string;
  caller_phone_number: string | null;
};

export type XcallyPayload = {
  source: 'elevenlabs';
  agent_name: typeof ELEVENLABS_AGENT_NAME;
  caller_phone_number: string | null;
  caller_name: string;
  caller_age: string;
  caller_province: string;
  call_reason: string;
  collected_at: string;
};

export type ValidationIssueCode =
  | 'missing_caller_name'
  | 'invalid_caller_age'
  | 'missing_caller_province'
  | 'generic_call_reason'
  | 'missing_caller_phone_number';

export type ValidationIssue = {
  field: keyof CollectedCallData;
  code: ValidationIssueCode;
  message: string;
  blocking: boolean;
};

export type XcallyOpenChannelInteraction = {
  id?: string | number;
  [key: string]: unknown;
};
