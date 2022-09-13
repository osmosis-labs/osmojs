import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export enum SuperfluidAssetType {
  SuperfluidAssetTypeNative = 0,
  SuperfluidAssetTypeLPShare = 1,
  UNRECOGNIZED = -1,
}
export function superfluidAssetTypeFromJSON(object: any): SuperfluidAssetType {
  switch (object) {
    case 0:
    case "SuperfluidAssetTypeNative":
      return SuperfluidAssetType.SuperfluidAssetTypeNative;

    case 1:
    case "SuperfluidAssetTypeLPShare":
      return SuperfluidAssetType.SuperfluidAssetTypeLPShare;

    case -1:
    case "UNRECOGNIZED":
    default:
      return SuperfluidAssetType.UNRECOGNIZED;
  }
}
export function superfluidAssetTypeToJSON(object: SuperfluidAssetType): string {
  switch (object) {
    case SuperfluidAssetType.SuperfluidAssetTypeNative:
      return "SuperfluidAssetTypeNative";

    case SuperfluidAssetType.SuperfluidAssetTypeLPShare:
      return "SuperfluidAssetTypeLPShare";

    default:
      return "UNKNOWN";
  }
}

/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAsset {
  denom: string;
  asset_type: SuperfluidAssetType;
}

/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking
 */
export interface SuperfluidIntermediaryAccount {
  denom: string;
  val_addr: string;

  /** perpetual gauge for rewards distribution */
  gauge_id: Long;
}

/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary.  For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecord {
  epoch_number: Long;

  /** superfluid asset denom, can be LP token or native token */
  denom: string;
  multiplier: string;
}

/**
 * SuperfluidDelegationRecord takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking
 */
export interface SuperfluidDelegationRecord {
  delegator_address: string;
  validator_address: string;
  delegation_amount: Coin;
  equivalent_staked_amount: Coin;
}
export interface LockIdIntermediaryAccountConnection {
  lock_id: Long;
  intermediary_account: string;
}
export interface UnpoolWhitelistedPools {
  ids: Long[];
}

function createBaseSuperfluidAsset(): SuperfluidAsset {
  return {
    denom: "",
    asset_type: 0
  };
}

export const SuperfluidAsset = {
  encode(message: SuperfluidAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.asset_type !== 0) {
      writer.uint32(16).int32(message.asset_type);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidAsset();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.asset_type = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidAsset {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      asset_type: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : 0
    };
  },

  toJSON(message: SuperfluidAsset): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.asset_type !== undefined && (obj.asset_type = superfluidAssetTypeToJSON(message.asset_type));
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidAsset>): SuperfluidAsset {
    const message = createBaseSuperfluidAsset();
    message.denom = object.denom ?? "";
    message.asset_type = object.asset_type ?? 0;
    return message;
  }

};

function createBaseSuperfluidIntermediaryAccount(): SuperfluidIntermediaryAccount {
  return {
    denom: "",
    val_addr: "",
    gauge_id: Long.UZERO
  };
}

export const SuperfluidIntermediaryAccount = {
  encode(message: SuperfluidIntermediaryAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.val_addr !== "") {
      writer.uint32(18).string(message.val_addr);
    }

    if (!message.gauge_id.isZero()) {
      writer.uint32(24).uint64(message.gauge_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidIntermediaryAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidIntermediaryAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.val_addr = reader.string();
          break;

        case 3:
          message.gauge_id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidIntermediaryAccount {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      val_addr: isSet(object.val_addr) ? String(object.val_addr) : "",
      gauge_id: isSet(object.gauge_id) ? Long.fromString(object.gauge_id) : Long.UZERO
    };
  },

  toJSON(message: SuperfluidIntermediaryAccount): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.val_addr !== undefined && (obj.val_addr = message.val_addr);
    message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidIntermediaryAccount>): SuperfluidIntermediaryAccount {
    const message = createBaseSuperfluidIntermediaryAccount();
    message.denom = object.denom ?? "";
    message.val_addr = object.val_addr ?? "";
    message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? Long.fromValue(object.gauge_id) : Long.UZERO;
    return message;
  }

};

function createBaseOsmoEquivalentMultiplierRecord(): OsmoEquivalentMultiplierRecord {
  return {
    epoch_number: Long.ZERO,
    denom: "",
    multiplier: ""
  };
}

export const OsmoEquivalentMultiplierRecord = {
  encode(message: OsmoEquivalentMultiplierRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epoch_number.isZero()) {
      writer.uint32(8).int64(message.epoch_number);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.multiplier !== "") {
      writer.uint32(26).string(message.multiplier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OsmoEquivalentMultiplierRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmoEquivalentMultiplierRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epoch_number = (reader.int64() as Long);
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.multiplier = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OsmoEquivalentMultiplierRecord {
    return {
      epoch_number: isSet(object.epoch_number) ? Long.fromString(object.epoch_number) : Long.ZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      multiplier: isSet(object.multiplier) ? String(object.multiplier) : ""
    };
  },

  toJSON(message: OsmoEquivalentMultiplierRecord): unknown {
    const obj: any = {};
    message.epoch_number !== undefined && (obj.epoch_number = (message.epoch_number || Long.ZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    return obj;
  },

  fromPartial(object: DeepPartial<OsmoEquivalentMultiplierRecord>): OsmoEquivalentMultiplierRecord {
    const message = createBaseOsmoEquivalentMultiplierRecord();
    message.epoch_number = object.epoch_number !== undefined && object.epoch_number !== null ? Long.fromValue(object.epoch_number) : Long.ZERO;
    message.denom = object.denom ?? "";
    message.multiplier = object.multiplier ?? "";
    return message;
  }

};

function createBaseSuperfluidDelegationRecord(): SuperfluidDelegationRecord {
  return {
    delegator_address: "",
    validator_address: "",
    delegation_amount: undefined,
    equivalent_staked_amount: undefined
  };
}

export const SuperfluidDelegationRecord = {
  encode(message: SuperfluidDelegationRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }

    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }

    if (message.delegation_amount !== undefined) {
      Coin.encode(message.delegation_amount, writer.uint32(26).fork()).ldelim();
    }

    if (message.equivalent_staked_amount !== undefined) {
      Coin.encode(message.equivalent_staked_amount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;

        case 2:
          message.validator_address = reader.string();
          break;

        case 3:
          message.delegation_amount = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.equivalent_staked_amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationRecord {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      delegation_amount: isSet(object.delegation_amount) ? Coin.fromJSON(object.delegation_amount) : undefined,
      equivalent_staked_amount: isSet(object.equivalent_staked_amount) ? Coin.fromJSON(object.equivalent_staked_amount) : undefined
    };
  },

  toJSON(message: SuperfluidDelegationRecord): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.delegation_amount !== undefined && (obj.delegation_amount = message.delegation_amount ? Coin.toJSON(message.delegation_amount) : undefined);
    message.equivalent_staked_amount !== undefined && (obj.equivalent_staked_amount = message.equivalent_staked_amount ? Coin.toJSON(message.equivalent_staked_amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidDelegationRecord>): SuperfluidDelegationRecord {
    const message = createBaseSuperfluidDelegationRecord();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.delegation_amount = object.delegation_amount !== undefined && object.delegation_amount !== null ? Coin.fromPartial(object.delegation_amount) : undefined;
    message.equivalent_staked_amount = object.equivalent_staked_amount !== undefined && object.equivalent_staked_amount !== null ? Coin.fromPartial(object.equivalent_staked_amount) : undefined;
    return message;
  }

};

function createBaseLockIdIntermediaryAccountConnection(): LockIdIntermediaryAccountConnection {
  return {
    lock_id: Long.UZERO,
    intermediary_account: ""
  };
}

export const LockIdIntermediaryAccountConnection = {
  encode(message: LockIdIntermediaryAccountConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lock_id.isZero()) {
      writer.uint32(8).uint64(message.lock_id);
    }

    if (message.intermediary_account !== "") {
      writer.uint32(18).string(message.intermediary_account);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockIdIntermediaryAccountConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockIdIntermediaryAccountConnection();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lock_id = (reader.uint64() as Long);
          break;

        case 2:
          message.intermediary_account = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LockIdIntermediaryAccountConnection {
    return {
      lock_id: isSet(object.lock_id) ? Long.fromString(object.lock_id) : Long.UZERO,
      intermediary_account: isSet(object.intermediary_account) ? String(object.intermediary_account) : ""
    };
  },

  toJSON(message: LockIdIntermediaryAccountConnection): unknown {
    const obj: any = {};
    message.lock_id !== undefined && (obj.lock_id = (message.lock_id || Long.UZERO).toString());
    message.intermediary_account !== undefined && (obj.intermediary_account = message.intermediary_account);
    return obj;
  },

  fromPartial(object: DeepPartial<LockIdIntermediaryAccountConnection>): LockIdIntermediaryAccountConnection {
    const message = createBaseLockIdIntermediaryAccountConnection();
    message.lock_id = object.lock_id !== undefined && object.lock_id !== null ? Long.fromValue(object.lock_id) : Long.UZERO;
    message.intermediary_account = object.intermediary_account ?? "";
    return message;
  }

};

function createBaseUnpoolWhitelistedPools(): UnpoolWhitelistedPools {
  return {
    ids: []
  };
}

export const UnpoolWhitelistedPools = {
  encode(message: UnpoolWhitelistedPools, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.ids) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnpoolWhitelistedPools {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpoolWhitelistedPools();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.ids.push((reader.uint64() as Long));
            }
          } else {
            message.ids.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UnpoolWhitelistedPools {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromString(e)) : []
    };
  },

  toJSON(message: UnpoolWhitelistedPools): unknown {
    const obj: any = {};

    if (message.ids) {
      obj.ids = message.ids.map(e => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<UnpoolWhitelistedPools>): UnpoolWhitelistedPools {
    const message = createBaseUnpoolWhitelistedPools();
    message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};