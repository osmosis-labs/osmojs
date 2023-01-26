import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Params holds parameters for the incentives module */

export interface Params {
  poolCreationFee: Coin[];
}
/** Params holds parameters for the incentives module */

export interface ParamsSDKType {
  pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the gamm module's genesis state. */

export interface GenesisState {
  pools: Any[];
  /** will be renamed to next_pool_id in an upcoming version */

  nextPoolNumber: Long;
  params?: Params;
  migrationRecords?: MigrationRecords;
}
/** GenesisState defines the gamm module's genesis state. */

export interface GenesisStateSDKType {
  pools: AnySDKType[];
  /** will be renamed to next_pool_id in an upcoming version */

  next_pool_number: Long;
  params?: ParamsSDKType;
  migration_records?: MigrationRecordsSDKType;
}
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools
 */

export interface MigrationRecords {
  balancerToConcentratedPoolLinks: BalancerToConcentratedPoolLink[];
}
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools
 */

export interface MigrationRecordsSDKType {
  balancer_to_concentrated_pool_links: BalancerToConcentratedPoolLinkSDKType[];
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 */

export interface BalancerToConcentratedPoolLink {
  balancerPoolId: Long;
  clPoolId: Long;
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 */

export interface BalancerToConcentratedPoolLinkSDKType {
  balancer_pool_id: Long;
  cl_pool_id: Long;
}

function createBaseParams(): Params {
  return {
    poolCreationFee: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.poolCreationFee = object.poolCreationFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    pools: [],
    nextPoolNumber: Long.UZERO,
    params: undefined,
    migrationRecords: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (!message.nextPoolNumber.isZero()) {
      writer.uint32(16).uint64(message.nextPoolNumber);
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }

    if (message.migrationRecords !== undefined) {
      MigrationRecords.encode(message.migrationRecords, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;

        case 2:
          message.nextPoolNumber = (reader.uint64() as Long);
          break;

        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 4:
          message.migrationRecords = MigrationRecords.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    message.nextPoolNumber = object.nextPoolNumber !== undefined && object.nextPoolNumber !== null ? Long.fromValue(object.nextPoolNumber) : Long.UZERO;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.migrationRecords = object.migrationRecords !== undefined && object.migrationRecords !== null ? MigrationRecords.fromPartial(object.migrationRecords) : undefined;
    return message;
  }

};

function createBaseMigrationRecords(): MigrationRecords {
  return {
    balancerToConcentratedPoolLinks: []
  };
}

export const MigrationRecords = {
  encode(message: MigrationRecords, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balancerToConcentratedPoolLinks) {
      BalancerToConcentratedPoolLink.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrationRecords {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrationRecords();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balancerToConcentratedPoolLinks.push(BalancerToConcentratedPoolLink.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MigrationRecords>): MigrationRecords {
    const message = createBaseMigrationRecords();
    message.balancerToConcentratedPoolLinks = object.balancerToConcentratedPoolLinks?.map(e => BalancerToConcentratedPoolLink.fromPartial(e)) || [];
    return message;
  }

};

function createBaseBalancerToConcentratedPoolLink(): BalancerToConcentratedPoolLink {
  return {
    balancerPoolId: Long.UZERO,
    clPoolId: Long.UZERO
  };
}

export const BalancerToConcentratedPoolLink = {
  encode(message: BalancerToConcentratedPoolLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.balancerPoolId.isZero()) {
      writer.uint32(8).uint64(message.balancerPoolId);
    }

    if (!message.clPoolId.isZero()) {
      writer.uint32(16).uint64(message.clPoolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalancerToConcentratedPoolLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerToConcentratedPoolLink();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balancerPoolId = (reader.uint64() as Long);
          break;

        case 2:
          message.clPoolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<BalancerToConcentratedPoolLink>): BalancerToConcentratedPoolLink {
    const message = createBaseBalancerToConcentratedPoolLink();
    message.balancerPoolId = object.balancerPoolId !== undefined && object.balancerPoolId !== null ? Long.fromValue(object.balancerPoolId) : Long.UZERO;
    message.clPoolId = object.clPoolId !== undefined && object.clPoolId !== null ? Long.fromValue(object.clPoolId) : Long.UZERO;
    return message;
  }

};