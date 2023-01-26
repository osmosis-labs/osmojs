import * as _m0 from "protobufjs/minimal";
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */

export interface ValidatorPreference {
  /**
   * val_oper_address holds the validator address the user wants to delegate
   * funds to.
   */
  valOperAddress: string;
  /** weight is decimal between 0 and 1, and they all sum to 1. */

  weight: string;
}
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */

export interface ValidatorPreferenceSDKType {
  /**
   * val_oper_address holds the validator address the user wants to delegate
   * funds to.
   */
  val_oper_address: string;
  /** weight is decimal between 0 and 1, and they all sum to 1. */

  weight: string;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */

export interface ValidatorSetPreferences {
  /** preference holds {valAddr, weight} for the user who created it. */
  preferences: ValidatorPreference[];
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */

export interface ValidatorSetPreferencesSDKType {
  /** preference holds {valAddr, weight} for the user who created it. */
  preferences: ValidatorPreferenceSDKType[];
}

function createBaseValidatorPreference(): ValidatorPreference {
  return {
    valOperAddress: "",
    weight: ""
  };
}

export const ValidatorPreference = {
  encode(message: ValidatorPreference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valOperAddress !== "") {
      writer.uint32(10).string(message.valOperAddress);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorPreference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorPreference();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.valOperAddress = reader.string();
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<ValidatorPreference>): ValidatorPreference {
    const message = createBaseValidatorPreference();
    message.valOperAddress = object.valOperAddress ?? "";
    message.weight = object.weight ?? "";
    return message;
  }

};

function createBaseValidatorSetPreferences(): ValidatorSetPreferences {
  return {
    preferences: []
  };
}

export const ValidatorSetPreferences = {
  encode(message: ValidatorSetPreferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSetPreferences {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSetPreferences();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<ValidatorSetPreferences>): ValidatorSetPreferences {
    const message = createBaseValidatorSetPreferences();
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  }

};