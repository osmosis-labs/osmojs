import { ValidatorPreference, ValidatorPreferenceAmino, ValidatorPreferenceSDKType } from "./state";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreference {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreference[];
}
export interface MsgSetValidatorSetPreferenceProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference";
  value: Uint8Array;
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceAmino {
  /** delegator is the user who is trying to create a validator-set. */
  delegator?: string;
  /** list of {valAddr, weight} to delegate to */
  preferences?: ValidatorPreferenceAmino[];
}
export interface MsgSetValidatorSetPreferenceAminoMsg {
  type: "osmosis/MsgSetValidatorSetPreference";
  value: MsgSetValidatorSetPreferenceAmino;
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
export interface MsgSetValidatorSetPreferenceResponse {}
export interface MsgSetValidatorSetPreferenceResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse";
  value: Uint8Array;
}
export interface MsgSetValidatorSetPreferenceResponseAmino {}
export interface MsgSetValidatorSetPreferenceResponseAminoMsg {
  type: "osmosis/valsetpref/set-validator-set-preference-response";
  value: MsgSetValidatorSetPreferenceResponseAmino;
}
export interface MsgSetValidatorSetPreferenceResponseSDKType {}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSet {
  /** delegator is the user who is trying to delegate. */
  delegator: string;
  /**
   * the amount of tokens the user is trying to delegate.
   * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
   * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
   * B, 2osmo to C.
   */
  coin: Coin;
}
export interface MsgDelegateToValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet";
  value: Uint8Array;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetAmino {
  /** delegator is the user who is trying to delegate. */
  delegator?: string;
  /**
   * the amount of tokens the user is trying to delegate.
   * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
   * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
   * B, 2osmo to C.
   */
  coin?: CoinAmino;
}
export interface MsgDelegateToValidatorSetAminoMsg {
  type: "osmosis/MsgDelegateToValidatorSet";
  value: MsgDelegateToValidatorSetAmino;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
export interface MsgDelegateToValidatorSetResponse {}
export interface MsgDelegateToValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgDelegateToValidatorSetResponseAmino {}
export interface MsgDelegateToValidatorSetResponseAminoMsg {
  type: "osmosis/valsetpref/delegate-to-validator-set-response";
  value: MsgDelegateToValidatorSetResponseAmino;
}
export interface MsgDelegateToValidatorSetResponseSDKType {}
export interface MsgUndelegateFromValidatorSet {
  /** delegator is the user who is trying to undelegate. */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
   * ValC
   * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
   * 3osmo from B, 2osmo from C
   */
  coin: Coin;
}
export interface MsgUndelegateFromValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet";
  value: Uint8Array;
}
export interface MsgUndelegateFromValidatorSetAmino {
  /** delegator is the user who is trying to undelegate. */
  delegator?: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
   * ValC
   * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
   * 3osmo from B, 2osmo from C
   */
  coin?: CoinAmino;
}
export interface MsgUndelegateFromValidatorSetAminoMsg {
  type: "osmosis/MsgUndelegateFromValidatorSet";
  value: MsgUndelegateFromValidatorSetAmino;
}
export interface MsgUndelegateFromValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
export interface MsgUndelegateFromValidatorSetResponse {}
export interface MsgUndelegateFromValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgUndelegateFromValidatorSetResponseAmino {}
export interface MsgUndelegateFromValidatorSetResponseAminoMsg {
  type: "osmosis/valsetpref/undelegate-from-validator-set-response";
  value: MsgUndelegateFromValidatorSetResponseAmino;
}
export interface MsgUndelegateFromValidatorSetResponseSDKType {}
export interface MsgUndelegateFromRebalancedValidatorSet {
  /** delegator is the user who is trying to undelegate. */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 50 osmo with validator-set {ValA -> 0.5, ValB -> 0.5}
   * Our undelegate logic would first check the current delegation balance.
   * If the user has 90 osmo delegated to ValA and 10 osmo delegated to ValB,
   * the rebalanced validator set would be {ValA -> 0.9, ValB -> 0.1}
   * So now the 45 osmo would be undelegated from ValA and 5 osmo would be
   * undelegated from ValB.
   */
  coin: Coin;
}
export interface MsgUndelegateFromRebalancedValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet";
  value: Uint8Array;
}
export interface MsgUndelegateFromRebalancedValidatorSetAmino {
  /** delegator is the user who is trying to undelegate. */
  delegator?: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 50 osmo with validator-set {ValA -> 0.5, ValB -> 0.5}
   * Our undelegate logic would first check the current delegation balance.
   * If the user has 90 osmo delegated to ValA and 10 osmo delegated to ValB,
   * the rebalanced validator set would be {ValA -> 0.9, ValB -> 0.1}
   * So now the 45 osmo would be undelegated from ValA and 5 osmo would be
   * undelegated from ValB.
   */
  coin?: CoinAmino;
}
export interface MsgUndelegateFromRebalancedValidatorSetAminoMsg {
  type: "osmosis/MsgUndelegateFromRebalValset";
  value: MsgUndelegateFromRebalancedValidatorSetAmino;
}
export interface MsgUndelegateFromRebalancedValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
export interface MsgUndelegateFromRebalancedValidatorSetResponse {}
export interface MsgUndelegateFromRebalancedValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgUndelegateFromRebalancedValidatorSetResponseAmino {}
export interface MsgUndelegateFromRebalancedValidatorSetResponseAminoMsg {
  type: "osmosis/valsetpref/undelegate-from-rebalanced-validator-set-response";
  value: MsgUndelegateFromRebalancedValidatorSetResponseAmino;
}
export interface MsgUndelegateFromRebalancedValidatorSetResponseSDKType {}
export interface MsgRedelegateValidatorSet {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreference[];
}
export interface MsgRedelegateValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet";
  value: Uint8Array;
}
export interface MsgRedelegateValidatorSetAmino {
  /** delegator is the user who is trying to create a validator-set. */
  delegator?: string;
  /** list of {valAddr, weight} to delegate to */
  preferences?: ValidatorPreferenceAmino[];
}
export interface MsgRedelegateValidatorSetAminoMsg {
  type: "osmosis/MsgRedelegateValidatorSet";
  value: MsgRedelegateValidatorSetAmino;
}
export interface MsgRedelegateValidatorSetSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
export interface MsgRedelegateValidatorSetResponse {}
export interface MsgRedelegateValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgRedelegateValidatorSetResponseAmino {}
export interface MsgRedelegateValidatorSetResponseAminoMsg {
  type: "osmosis/valsetpref/redelegate-validator-set-response";
  value: MsgRedelegateValidatorSetResponseAmino;
}
export interface MsgRedelegateValidatorSetResponseSDKType {}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewards {
  /** delegator is the user who is trying to claim staking rewards. */
  delegator: string;
}
export interface MsgWithdrawDelegationRewardsProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards";
  value: Uint8Array;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsAmino {
  /** delegator is the user who is trying to claim staking rewards. */
  delegator?: string;
}
export interface MsgWithdrawDelegationRewardsAminoMsg {
  type: "osmosis/MsgWithdrawDelegationRewards";
  value: MsgWithdrawDelegationRewardsAmino;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsSDKType {
  delegator: string;
}
export interface MsgWithdrawDelegationRewardsResponse {}
export interface MsgWithdrawDelegationRewardsResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse";
  value: Uint8Array;
}
export interface MsgWithdrawDelegationRewardsResponseAmino {}
export interface MsgWithdrawDelegationRewardsResponseAminoMsg {
  type: "osmosis/valsetpref/withdraw-delegation-rewards-response";
  value: MsgWithdrawDelegationRewardsResponseAmino;
}
export interface MsgWithdrawDelegationRewardsResponseSDKType {}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokens {
  /** delegator is the user who is trying to force unbond osmo and delegate. */
  delegator: string;
  /** lockup id of osmo in the pool */
  lockID: bigint;
}
export interface MsgDelegateBondedTokensProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens";
  value: Uint8Array;
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokensAmino {
  /** delegator is the user who is trying to force unbond osmo and delegate. */
  delegator?: string;
  /** lockup id of osmo in the pool */
  lockID?: string;
}
export interface MsgDelegateBondedTokensAminoMsg {
  type: "osmosis/valsetpref/delegate-bonded-tokens";
  value: MsgDelegateBondedTokensAmino;
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokensSDKType {
  delegator: string;
  lockID: bigint;
}
export interface MsgDelegateBondedTokensResponse {}
export interface MsgDelegateBondedTokensResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse";
  value: Uint8Array;
}
export interface MsgDelegateBondedTokensResponseAmino {}
export interface MsgDelegateBondedTokensResponseAminoMsg {
  type: "osmosis/valsetpref/delegate-bonded-tokens-response";
  value: MsgDelegateBondedTokensResponseAmino;
}
export interface MsgDelegateBondedTokensResponseSDKType {}
function createBaseMsgSetValidatorSetPreference(): MsgSetValidatorSetPreference {
  return {
    delegator: "",
    preferences: []
  };
}
export const MsgSetValidatorSetPreference = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
  aminoType: "osmosis/MsgSetValidatorSetPreference",
  is(o: any): o is MsgSetValidatorSetPreference {
    return o && (o.$typeUrl === MsgSetValidatorSetPreference.typeUrl || typeof o.delegator === "string" && Array.isArray(o.preferences) && (!o.preferences.length || ValidatorPreference.is(o.preferences[0])));
  },
  isSDK(o: any): o is MsgSetValidatorSetPreferenceSDKType {
    return o && (o.$typeUrl === MsgSetValidatorSetPreference.typeUrl || typeof o.delegator === "string" && Array.isArray(o.preferences) && (!o.preferences.length || ValidatorPreference.isSDK(o.preferences[0])));
  },
  isAmino(o: any): o is MsgSetValidatorSetPreferenceAmino {
    return o && (o.$typeUrl === MsgSetValidatorSetPreference.typeUrl || typeof o.delegator === "string" && Array.isArray(o.preferences) && (!o.preferences.length || ValidatorPreference.isAmino(o.preferences[0])));
  },
  encode(message: MsgSetValidatorSetPreference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
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
  fromJSON(object: any): MsgSetValidatorSetPreference {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSetValidatorSetPreference): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toJSON(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgSetValidatorSetPreference>): MsgSetValidatorSetPreference {
    const message = createBaseMsgSetValidatorSetPreference();
    message.delegator = object.delegator ?? "";
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSetValidatorSetPreferenceAmino): MsgSetValidatorSetPreference {
    const message = createBaseMsgSetValidatorSetPreference();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetValidatorSetPreferenceAminoMsg): MsgSetValidatorSetPreference {
    return MsgSetValidatorSetPreference.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceAminoMsg {
    return {
      type: "osmosis/MsgSetValidatorSetPreference",
      value: MsgSetValidatorSetPreference.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetValidatorSetPreferenceProtoMsg): MsgSetValidatorSetPreference {
    return MsgSetValidatorSetPreference.decode(message.value);
  },
  toProto(message: MsgSetValidatorSetPreference): Uint8Array {
    return MsgSetValidatorSetPreference.encode(message).finish();
  },
  toProtoMsg(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
      value: MsgSetValidatorSetPreference.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetValidatorSetPreference.typeUrl, MsgSetValidatorSetPreference);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetValidatorSetPreference.aminoType, MsgSetValidatorSetPreference.typeUrl);
function createBaseMsgSetValidatorSetPreferenceResponse(): MsgSetValidatorSetPreferenceResponse {
  return {};
}
export const MsgSetValidatorSetPreferenceResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse",
  aminoType: "osmosis/valsetpref/set-validator-set-preference-response",
  is(o: any): o is MsgSetValidatorSetPreferenceResponse {
    return o && o.$typeUrl === MsgSetValidatorSetPreferenceResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetValidatorSetPreferenceResponseSDKType {
    return o && o.$typeUrl === MsgSetValidatorSetPreferenceResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetValidatorSetPreferenceResponseAmino {
    return o && o.$typeUrl === MsgSetValidatorSetPreferenceResponse.typeUrl;
  },
  encode(_: MsgSetValidatorSetPreferenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreferenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetValidatorSetPreferenceResponse {
    return {};
  },
  toJSON(_: MsgSetValidatorSetPreferenceResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetValidatorSetPreferenceResponse>): MsgSetValidatorSetPreferenceResponse {
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    return message;
  },
  fromAmino(_: MsgSetValidatorSetPreferenceResponseAmino): MsgSetValidatorSetPreferenceResponse {
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    return message;
  },
  toAmino(_: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetValidatorSetPreferenceResponseAminoMsg): MsgSetValidatorSetPreferenceResponse {
    return MsgSetValidatorSetPreferenceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/set-validator-set-preference-response",
      value: MsgSetValidatorSetPreferenceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetValidatorSetPreferenceResponseProtoMsg): MsgSetValidatorSetPreferenceResponse {
    return MsgSetValidatorSetPreferenceResponse.decode(message.value);
  },
  toProto(message: MsgSetValidatorSetPreferenceResponse): Uint8Array {
    return MsgSetValidatorSetPreferenceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse",
      value: MsgSetValidatorSetPreferenceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetValidatorSetPreferenceResponse.typeUrl, MsgSetValidatorSetPreferenceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetValidatorSetPreferenceResponse.aminoType, MsgSetValidatorSetPreferenceResponse.typeUrl);
function createBaseMsgDelegateToValidatorSet(): MsgDelegateToValidatorSet {
  return {
    delegator: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgDelegateToValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
  aminoType: "osmosis/MsgDelegateToValidatorSet",
  is(o: any): o is MsgDelegateToValidatorSet {
    return o && (o.$typeUrl === MsgDelegateToValidatorSet.typeUrl || typeof o.delegator === "string" && Coin.is(o.coin));
  },
  isSDK(o: any): o is MsgDelegateToValidatorSetSDKType {
    return o && (o.$typeUrl === MsgDelegateToValidatorSet.typeUrl || typeof o.delegator === "string" && Coin.isSDK(o.coin));
  },
  isAmino(o: any): o is MsgDelegateToValidatorSetAmino {
    return o && (o.$typeUrl === MsgDelegateToValidatorSet.typeUrl || typeof o.delegator === "string" && Coin.isAmino(o.coin));
  },
  encode(message: MsgDelegateToValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegateToValidatorSet {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined
    };
  },
  toJSON(message: MsgDelegateToValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgDelegateToValidatorSet>): MsgDelegateToValidatorSet {
    const message = createBaseMsgDelegateToValidatorSet();
    message.delegator = object.delegator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgDelegateToValidatorSetAmino): MsgDelegateToValidatorSet {
    const message = createBaseMsgDelegateToValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateToValidatorSetAminoMsg): MsgDelegateToValidatorSet {
    return MsgDelegateToValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAminoMsg {
    return {
      type: "osmosis/MsgDelegateToValidatorSet",
      value: MsgDelegateToValidatorSet.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateToValidatorSetProtoMsg): MsgDelegateToValidatorSet {
    return MsgDelegateToValidatorSet.decode(message.value);
  },
  toProto(message: MsgDelegateToValidatorSet): Uint8Array {
    return MsgDelegateToValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
      value: MsgDelegateToValidatorSet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelegateToValidatorSet.typeUrl, MsgDelegateToValidatorSet);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDelegateToValidatorSet.aminoType, MsgDelegateToValidatorSet.typeUrl);
function createBaseMsgDelegateToValidatorSetResponse(): MsgDelegateToValidatorSetResponse {
  return {};
}
export const MsgDelegateToValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse",
  aminoType: "osmosis/valsetpref/delegate-to-validator-set-response",
  is(o: any): o is MsgDelegateToValidatorSetResponse {
    return o && o.$typeUrl === MsgDelegateToValidatorSetResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDelegateToValidatorSetResponseSDKType {
    return o && o.$typeUrl === MsgDelegateToValidatorSetResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDelegateToValidatorSetResponseAmino {
    return o && o.$typeUrl === MsgDelegateToValidatorSetResponse.typeUrl;
  },
  encode(_: MsgDelegateToValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDelegateToValidatorSetResponse {
    return {};
  },
  toJSON(_: MsgDelegateToValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDelegateToValidatorSetResponse>): MsgDelegateToValidatorSetResponse {
    const message = createBaseMsgDelegateToValidatorSetResponse();
    return message;
  },
  fromAmino(_: MsgDelegateToValidatorSetResponseAmino): MsgDelegateToValidatorSetResponse {
    const message = createBaseMsgDelegateToValidatorSetResponse();
    return message;
  },
  toAmino(_: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateToValidatorSetResponseAminoMsg): MsgDelegateToValidatorSetResponse {
    return MsgDelegateToValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/delegate-to-validator-set-response",
      value: MsgDelegateToValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateToValidatorSetResponseProtoMsg): MsgDelegateToValidatorSetResponse {
    return MsgDelegateToValidatorSetResponse.decode(message.value);
  },
  toProto(message: MsgDelegateToValidatorSetResponse): Uint8Array {
    return MsgDelegateToValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse",
      value: MsgDelegateToValidatorSetResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelegateToValidatorSetResponse.typeUrl, MsgDelegateToValidatorSetResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDelegateToValidatorSetResponse.aminoType, MsgDelegateToValidatorSetResponse.typeUrl);
function createBaseMsgUndelegateFromValidatorSet(): MsgUndelegateFromValidatorSet {
  return {
    delegator: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgUndelegateFromValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
  aminoType: "osmosis/MsgUndelegateFromValidatorSet",
  is(o: any): o is MsgUndelegateFromValidatorSet {
    return o && (o.$typeUrl === MsgUndelegateFromValidatorSet.typeUrl || typeof o.delegator === "string" && Coin.is(o.coin));
  },
  isSDK(o: any): o is MsgUndelegateFromValidatorSetSDKType {
    return o && (o.$typeUrl === MsgUndelegateFromValidatorSet.typeUrl || typeof o.delegator === "string" && Coin.isSDK(o.coin));
  },
  isAmino(o: any): o is MsgUndelegateFromValidatorSetAmino {
    return o && (o.$typeUrl === MsgUndelegateFromValidatorSet.typeUrl || typeof o.delegator === "string" && Coin.isAmino(o.coin));
  },
  encode(message: MsgUndelegateFromValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUndelegateFromValidatorSet {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined
    };
  },
  toJSON(message: MsgUndelegateFromValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUndelegateFromValidatorSet>): MsgUndelegateFromValidatorSet {
    const message = createBaseMsgUndelegateFromValidatorSet();
    message.delegator = object.delegator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgUndelegateFromValidatorSetAmino): MsgUndelegateFromValidatorSet {
    const message = createBaseMsgUndelegateFromValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateFromValidatorSetAminoMsg): MsgUndelegateFromValidatorSet {
    return MsgUndelegateFromValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetAminoMsg {
    return {
      type: "osmosis/MsgUndelegateFromValidatorSet",
      value: MsgUndelegateFromValidatorSet.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateFromValidatorSetProtoMsg): MsgUndelegateFromValidatorSet {
    return MsgUndelegateFromValidatorSet.decode(message.value);
  },
  toProto(message: MsgUndelegateFromValidatorSet): Uint8Array {
    return MsgUndelegateFromValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
      value: MsgUndelegateFromValidatorSet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUndelegateFromValidatorSet.typeUrl, MsgUndelegateFromValidatorSet);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUndelegateFromValidatorSet.aminoType, MsgUndelegateFromValidatorSet.typeUrl);
function createBaseMsgUndelegateFromValidatorSetResponse(): MsgUndelegateFromValidatorSetResponse {
  return {};
}
export const MsgUndelegateFromValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse",
  aminoType: "osmosis/valsetpref/undelegate-from-validator-set-response",
  is(o: any): o is MsgUndelegateFromValidatorSetResponse {
    return o && o.$typeUrl === MsgUndelegateFromValidatorSetResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUndelegateFromValidatorSetResponseSDKType {
    return o && o.$typeUrl === MsgUndelegateFromValidatorSetResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUndelegateFromValidatorSetResponseAmino {
    return o && o.$typeUrl === MsgUndelegateFromValidatorSetResponse.typeUrl;
  },
  encode(_: MsgUndelegateFromValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUndelegateFromValidatorSetResponse {
    return {};
  },
  toJSON(_: MsgUndelegateFromValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUndelegateFromValidatorSetResponse>): MsgUndelegateFromValidatorSetResponse {
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    return message;
  },
  fromAmino(_: MsgUndelegateFromValidatorSetResponseAmino): MsgUndelegateFromValidatorSetResponse {
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    return message;
  },
  toAmino(_: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateFromValidatorSetResponseAminoMsg): MsgUndelegateFromValidatorSetResponse {
    return MsgUndelegateFromValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/undelegate-from-validator-set-response",
      value: MsgUndelegateFromValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateFromValidatorSetResponseProtoMsg): MsgUndelegateFromValidatorSetResponse {
    return MsgUndelegateFromValidatorSetResponse.decode(message.value);
  },
  toProto(message: MsgUndelegateFromValidatorSetResponse): Uint8Array {
    return MsgUndelegateFromValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse",
      value: MsgUndelegateFromValidatorSetResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUndelegateFromValidatorSetResponse.typeUrl, MsgUndelegateFromValidatorSetResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUndelegateFromValidatorSetResponse.aminoType, MsgUndelegateFromValidatorSetResponse.typeUrl);
function createBaseMsgUndelegateFromRebalancedValidatorSet(): MsgUndelegateFromRebalancedValidatorSet {
  return {
    delegator: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgUndelegateFromRebalancedValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet",
  aminoType: "osmosis/MsgUndelegateFromRebalValset",
  is(o: any): o is MsgUndelegateFromRebalancedValidatorSet {
    return o && (o.$typeUrl === MsgUndelegateFromRebalancedValidatorSet.typeUrl || typeof o.delegator === "string" && Coin.is(o.coin));
  },
  isSDK(o: any): o is MsgUndelegateFromRebalancedValidatorSetSDKType {
    return o && (o.$typeUrl === MsgUndelegateFromRebalancedValidatorSet.typeUrl || typeof o.delegator === "string" && Coin.isSDK(o.coin));
  },
  isAmino(o: any): o is MsgUndelegateFromRebalancedValidatorSetAmino {
    return o && (o.$typeUrl === MsgUndelegateFromRebalancedValidatorSet.typeUrl || typeof o.delegator === "string" && Coin.isAmino(o.coin));
  },
  encode(message: MsgUndelegateFromRebalancedValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromRebalancedValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromRebalancedValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUndelegateFromRebalancedValidatorSet {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined
    };
  },
  toJSON(message: MsgUndelegateFromRebalancedValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUndelegateFromRebalancedValidatorSet>): MsgUndelegateFromRebalancedValidatorSet {
    const message = createBaseMsgUndelegateFromRebalancedValidatorSet();
    message.delegator = object.delegator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgUndelegateFromRebalancedValidatorSetAmino): MsgUndelegateFromRebalancedValidatorSet {
    const message = createBaseMsgUndelegateFromRebalancedValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgUndelegateFromRebalancedValidatorSet): MsgUndelegateFromRebalancedValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateFromRebalancedValidatorSetAminoMsg): MsgUndelegateFromRebalancedValidatorSet {
    return MsgUndelegateFromRebalancedValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateFromRebalancedValidatorSet): MsgUndelegateFromRebalancedValidatorSetAminoMsg {
    return {
      type: "osmosis/MsgUndelegateFromRebalValset",
      value: MsgUndelegateFromRebalancedValidatorSet.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateFromRebalancedValidatorSetProtoMsg): MsgUndelegateFromRebalancedValidatorSet {
    return MsgUndelegateFromRebalancedValidatorSet.decode(message.value);
  },
  toProto(message: MsgUndelegateFromRebalancedValidatorSet): Uint8Array {
    return MsgUndelegateFromRebalancedValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateFromRebalancedValidatorSet): MsgUndelegateFromRebalancedValidatorSetProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet",
      value: MsgUndelegateFromRebalancedValidatorSet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUndelegateFromRebalancedValidatorSet.typeUrl, MsgUndelegateFromRebalancedValidatorSet);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUndelegateFromRebalancedValidatorSet.aminoType, MsgUndelegateFromRebalancedValidatorSet.typeUrl);
function createBaseMsgUndelegateFromRebalancedValidatorSetResponse(): MsgUndelegateFromRebalancedValidatorSetResponse {
  return {};
}
export const MsgUndelegateFromRebalancedValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse",
  aminoType: "osmosis/valsetpref/undelegate-from-rebalanced-validator-set-response",
  is(o: any): o is MsgUndelegateFromRebalancedValidatorSetResponse {
    return o && o.$typeUrl === MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUndelegateFromRebalancedValidatorSetResponseSDKType {
    return o && o.$typeUrl === MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUndelegateFromRebalancedValidatorSetResponseAmino {
    return o && o.$typeUrl === MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl;
  },
  encode(_: MsgUndelegateFromRebalancedValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromRebalancedValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUndelegateFromRebalancedValidatorSetResponse {
    return {};
  },
  toJSON(_: MsgUndelegateFromRebalancedValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUndelegateFromRebalancedValidatorSetResponse>): MsgUndelegateFromRebalancedValidatorSetResponse {
    const message = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
    return message;
  },
  fromAmino(_: MsgUndelegateFromRebalancedValidatorSetResponseAmino): MsgUndelegateFromRebalancedValidatorSetResponse {
    const message = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
    return message;
  },
  toAmino(_: MsgUndelegateFromRebalancedValidatorSetResponse): MsgUndelegateFromRebalancedValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateFromRebalancedValidatorSetResponseAminoMsg): MsgUndelegateFromRebalancedValidatorSetResponse {
    return MsgUndelegateFromRebalancedValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateFromRebalancedValidatorSetResponse): MsgUndelegateFromRebalancedValidatorSetResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/undelegate-from-rebalanced-validator-set-response",
      value: MsgUndelegateFromRebalancedValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateFromRebalancedValidatorSetResponseProtoMsg): MsgUndelegateFromRebalancedValidatorSetResponse {
    return MsgUndelegateFromRebalancedValidatorSetResponse.decode(message.value);
  },
  toProto(message: MsgUndelegateFromRebalancedValidatorSetResponse): Uint8Array {
    return MsgUndelegateFromRebalancedValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateFromRebalancedValidatorSetResponse): MsgUndelegateFromRebalancedValidatorSetResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse",
      value: MsgUndelegateFromRebalancedValidatorSetResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl, MsgUndelegateFromRebalancedValidatorSetResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUndelegateFromRebalancedValidatorSetResponse.aminoType, MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl);
function createBaseMsgRedelegateValidatorSet(): MsgRedelegateValidatorSet {
  return {
    delegator: "",
    preferences: []
  };
}
export const MsgRedelegateValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
  aminoType: "osmosis/MsgRedelegateValidatorSet",
  is(o: any): o is MsgRedelegateValidatorSet {
    return o && (o.$typeUrl === MsgRedelegateValidatorSet.typeUrl || typeof o.delegator === "string" && Array.isArray(o.preferences) && (!o.preferences.length || ValidatorPreference.is(o.preferences[0])));
  },
  isSDK(o: any): o is MsgRedelegateValidatorSetSDKType {
    return o && (o.$typeUrl === MsgRedelegateValidatorSet.typeUrl || typeof o.delegator === "string" && Array.isArray(o.preferences) && (!o.preferences.length || ValidatorPreference.isSDK(o.preferences[0])));
  },
  isAmino(o: any): o is MsgRedelegateValidatorSetAmino {
    return o && (o.$typeUrl === MsgRedelegateValidatorSet.typeUrl || typeof o.delegator === "string" && Array.isArray(o.preferences) && (!o.preferences.length || ValidatorPreference.isAmino(o.preferences[0])));
  },
  encode(message: MsgRedelegateValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
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
  fromJSON(object: any): MsgRedelegateValidatorSet {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgRedelegateValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toJSON(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgRedelegateValidatorSet>): MsgRedelegateValidatorSet {
    const message = createBaseMsgRedelegateValidatorSet();
    message.delegator = object.delegator ?? "";
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRedelegateValidatorSetAmino): MsgRedelegateValidatorSet {
    const message = createBaseMsgRedelegateValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgRedelegateValidatorSetAminoMsg): MsgRedelegateValidatorSet {
    return MsgRedelegateValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAminoMsg {
    return {
      type: "osmosis/MsgRedelegateValidatorSet",
      value: MsgRedelegateValidatorSet.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedelegateValidatorSetProtoMsg): MsgRedelegateValidatorSet {
    return MsgRedelegateValidatorSet.decode(message.value);
  },
  toProto(message: MsgRedelegateValidatorSet): Uint8Array {
    return MsgRedelegateValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
      value: MsgRedelegateValidatorSet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRedelegateValidatorSet.typeUrl, MsgRedelegateValidatorSet);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRedelegateValidatorSet.aminoType, MsgRedelegateValidatorSet.typeUrl);
function createBaseMsgRedelegateValidatorSetResponse(): MsgRedelegateValidatorSetResponse {
  return {};
}
export const MsgRedelegateValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse",
  aminoType: "osmosis/valsetpref/redelegate-validator-set-response",
  is(o: any): o is MsgRedelegateValidatorSetResponse {
    return o && o.$typeUrl === MsgRedelegateValidatorSetResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRedelegateValidatorSetResponseSDKType {
    return o && o.$typeUrl === MsgRedelegateValidatorSetResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRedelegateValidatorSetResponseAmino {
    return o && o.$typeUrl === MsgRedelegateValidatorSetResponse.typeUrl;
  },
  encode(_: MsgRedelegateValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRedelegateValidatorSetResponse {
    return {};
  },
  toJSON(_: MsgRedelegateValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRedelegateValidatorSetResponse>): MsgRedelegateValidatorSetResponse {
    const message = createBaseMsgRedelegateValidatorSetResponse();
    return message;
  },
  fromAmino(_: MsgRedelegateValidatorSetResponseAmino): MsgRedelegateValidatorSetResponse {
    const message = createBaseMsgRedelegateValidatorSetResponse();
    return message;
  },
  toAmino(_: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRedelegateValidatorSetResponseAminoMsg): MsgRedelegateValidatorSetResponse {
    return MsgRedelegateValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/redelegate-validator-set-response",
      value: MsgRedelegateValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedelegateValidatorSetResponseProtoMsg): MsgRedelegateValidatorSetResponse {
    return MsgRedelegateValidatorSetResponse.decode(message.value);
  },
  toProto(message: MsgRedelegateValidatorSetResponse): Uint8Array {
    return MsgRedelegateValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse",
      value: MsgRedelegateValidatorSetResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRedelegateValidatorSetResponse.typeUrl, MsgRedelegateValidatorSetResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRedelegateValidatorSetResponse.aminoType, MsgRedelegateValidatorSetResponse.typeUrl);
function createBaseMsgWithdrawDelegationRewards(): MsgWithdrawDelegationRewards {
  return {
    delegator: ""
  };
}
export const MsgWithdrawDelegationRewards = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
  aminoType: "osmosis/MsgWithdrawDelegationRewards",
  is(o: any): o is MsgWithdrawDelegationRewards {
    return o && (o.$typeUrl === MsgWithdrawDelegationRewards.typeUrl || typeof o.delegator === "string");
  },
  isSDK(o: any): o is MsgWithdrawDelegationRewardsSDKType {
    return o && (o.$typeUrl === MsgWithdrawDelegationRewards.typeUrl || typeof o.delegator === "string");
  },
  isAmino(o: any): o is MsgWithdrawDelegationRewardsAmino {
    return o && (o.$typeUrl === MsgWithdrawDelegationRewards.typeUrl || typeof o.delegator === "string");
  },
  encode(message: MsgWithdrawDelegationRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawDelegationRewards {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : ""
    };
  },
  toJSON(message: MsgWithdrawDelegationRewards): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawDelegationRewards>): MsgWithdrawDelegationRewards {
    const message = createBaseMsgWithdrawDelegationRewards();
    message.delegator = object.delegator ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawDelegationRewardsAmino): MsgWithdrawDelegationRewards {
    const message = createBaseMsgWithdrawDelegationRewards();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    return message;
  },
  toAmino(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDelegationRewardsAminoMsg): MsgWithdrawDelegationRewards {
    return MsgWithdrawDelegationRewards.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsAminoMsg {
    return {
      type: "osmosis/MsgWithdrawDelegationRewards",
      value: MsgWithdrawDelegationRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawDelegationRewardsProtoMsg): MsgWithdrawDelegationRewards {
    return MsgWithdrawDelegationRewards.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegationRewards): Uint8Array {
    return MsgWithdrawDelegationRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
      value: MsgWithdrawDelegationRewards.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawDelegationRewards.typeUrl, MsgWithdrawDelegationRewards);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWithdrawDelegationRewards.aminoType, MsgWithdrawDelegationRewards.typeUrl);
function createBaseMsgWithdrawDelegationRewardsResponse(): MsgWithdrawDelegationRewardsResponse {
  return {};
}
export const MsgWithdrawDelegationRewardsResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse",
  aminoType: "osmosis/valsetpref/withdraw-delegation-rewards-response",
  is(o: any): o is MsgWithdrawDelegationRewardsResponse {
    return o && o.$typeUrl === MsgWithdrawDelegationRewardsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWithdrawDelegationRewardsResponseSDKType {
    return o && o.$typeUrl === MsgWithdrawDelegationRewardsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWithdrawDelegationRewardsResponseAmino {
    return o && o.$typeUrl === MsgWithdrawDelegationRewardsResponse.typeUrl;
  },
  encode(_: MsgWithdrawDelegationRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWithdrawDelegationRewardsResponse {
    return {};
  },
  toJSON(_: MsgWithdrawDelegationRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgWithdrawDelegationRewardsResponse>): MsgWithdrawDelegationRewardsResponse {
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawDelegationRewardsResponseAmino): MsgWithdrawDelegationRewardsResponse {
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    return message;
  },
  toAmino(_: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDelegationRewardsResponseAminoMsg): MsgWithdrawDelegationRewardsResponse {
    return MsgWithdrawDelegationRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/withdraw-delegation-rewards-response",
      value: MsgWithdrawDelegationRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawDelegationRewardsResponseProtoMsg): MsgWithdrawDelegationRewardsResponse {
    return MsgWithdrawDelegationRewardsResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegationRewardsResponse): Uint8Array {
    return MsgWithdrawDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse",
      value: MsgWithdrawDelegationRewardsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawDelegationRewardsResponse.typeUrl, MsgWithdrawDelegationRewardsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWithdrawDelegationRewardsResponse.aminoType, MsgWithdrawDelegationRewardsResponse.typeUrl);
function createBaseMsgDelegateBondedTokens(): MsgDelegateBondedTokens {
  return {
    delegator: "",
    lockID: BigInt(0)
  };
}
export const MsgDelegateBondedTokens = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens",
  aminoType: "osmosis/valsetpref/delegate-bonded-tokens",
  is(o: any): o is MsgDelegateBondedTokens {
    return o && (o.$typeUrl === MsgDelegateBondedTokens.typeUrl || typeof o.delegator === "string" && typeof o.lockID === "bigint");
  },
  isSDK(o: any): o is MsgDelegateBondedTokensSDKType {
    return o && (o.$typeUrl === MsgDelegateBondedTokens.typeUrl || typeof o.delegator === "string" && typeof o.lockID === "bigint");
  },
  isAmino(o: any): o is MsgDelegateBondedTokensAmino {
    return o && (o.$typeUrl === MsgDelegateBondedTokens.typeUrl || typeof o.delegator === "string" && typeof o.lockID === "bigint");
  },
  encode(message: MsgDelegateBondedTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.lockID !== BigInt(0)) {
      writer.uint32(16).uint64(message.lockID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateBondedTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateBondedTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.lockID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegateBondedTokens {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      lockID: isSet(object.lockID) ? BigInt(object.lockID.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgDelegateBondedTokens): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.lockID !== undefined && (obj.lockID = (message.lockID || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgDelegateBondedTokens>): MsgDelegateBondedTokens {
    const message = createBaseMsgDelegateBondedTokens();
    message.delegator = object.delegator ?? "";
    message.lockID = object.lockID !== undefined && object.lockID !== null ? BigInt(object.lockID.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDelegateBondedTokensAmino): MsgDelegateBondedTokens {
    const message = createBaseMsgDelegateBondedTokens();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.lockID !== undefined && object.lockID !== null) {
      message.lockID = BigInt(object.lockID);
    }
    return message;
  },
  toAmino(message: MsgDelegateBondedTokens): MsgDelegateBondedTokensAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    obj.lockID = message.lockID ? message.lockID.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateBondedTokensAminoMsg): MsgDelegateBondedTokens {
    return MsgDelegateBondedTokens.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateBondedTokens): MsgDelegateBondedTokensAminoMsg {
    return {
      type: "osmosis/valsetpref/delegate-bonded-tokens",
      value: MsgDelegateBondedTokens.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateBondedTokensProtoMsg): MsgDelegateBondedTokens {
    return MsgDelegateBondedTokens.decode(message.value);
  },
  toProto(message: MsgDelegateBondedTokens): Uint8Array {
    return MsgDelegateBondedTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateBondedTokens): MsgDelegateBondedTokensProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens",
      value: MsgDelegateBondedTokens.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelegateBondedTokens.typeUrl, MsgDelegateBondedTokens);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDelegateBondedTokens.aminoType, MsgDelegateBondedTokens.typeUrl);
function createBaseMsgDelegateBondedTokensResponse(): MsgDelegateBondedTokensResponse {
  return {};
}
export const MsgDelegateBondedTokensResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse",
  aminoType: "osmosis/valsetpref/delegate-bonded-tokens-response",
  is(o: any): o is MsgDelegateBondedTokensResponse {
    return o && o.$typeUrl === MsgDelegateBondedTokensResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDelegateBondedTokensResponseSDKType {
    return o && o.$typeUrl === MsgDelegateBondedTokensResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDelegateBondedTokensResponseAmino {
    return o && o.$typeUrl === MsgDelegateBondedTokensResponse.typeUrl;
  },
  encode(_: MsgDelegateBondedTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateBondedTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateBondedTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDelegateBondedTokensResponse {
    return {};
  },
  toJSON(_: MsgDelegateBondedTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDelegateBondedTokensResponse>): MsgDelegateBondedTokensResponse {
    const message = createBaseMsgDelegateBondedTokensResponse();
    return message;
  },
  fromAmino(_: MsgDelegateBondedTokensResponseAmino): MsgDelegateBondedTokensResponse {
    const message = createBaseMsgDelegateBondedTokensResponse();
    return message;
  },
  toAmino(_: MsgDelegateBondedTokensResponse): MsgDelegateBondedTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateBondedTokensResponseAminoMsg): MsgDelegateBondedTokensResponse {
    return MsgDelegateBondedTokensResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateBondedTokensResponse): MsgDelegateBondedTokensResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/delegate-bonded-tokens-response",
      value: MsgDelegateBondedTokensResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateBondedTokensResponseProtoMsg): MsgDelegateBondedTokensResponse {
    return MsgDelegateBondedTokensResponse.decode(message.value);
  },
  toProto(message: MsgDelegateBondedTokensResponse): Uint8Array {
    return MsgDelegateBondedTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateBondedTokensResponse): MsgDelegateBondedTokensResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse",
      value: MsgDelegateBondedTokensResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelegateBondedTokensResponse.typeUrl, MsgDelegateBondedTokensResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDelegateBondedTokensResponse.aminoType, MsgDelegateBondedTokensResponse.typeUrl);