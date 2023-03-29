import { TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType } from "./protorev";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */

export interface MsgSetHotRoutes {
  /** admin is the account that is authorized to set the hot routes. */
  admin: string;
  /** hot_routes is the list of hot routes to set. */

  hotRoutes: TokenPairArbRoutes[];
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */

export interface MsgSetHotRoutesSDKType {
  /** admin is the account that is authorized to set the hot routes. */
  admin: string;
  /** hot_routes is the list of hot routes to set. */

  hot_routes: TokenPairArbRoutesSDKType[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */

export interface MsgSetHotRoutesResponse {}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */

export interface MsgSetHotRoutesResponseSDKType {}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */

export interface MsgSetDeveloperAccount {
  /** admin is the account that is authorized to set the developer account. */
  admin: string;
  /**
   * developer_account is the account that will receive a portion of the profits
   * from the protorev module.
   */

  developerAccount: string;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */

export interface MsgSetDeveloperAccountSDKType {
  /** admin is the account that is authorized to set the developer account. */
  admin: string;
  /**
   * developer_account is the account that will receive a portion of the profits
   * from the protorev module.
   */

  developer_account: string;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */

export interface MsgSetDeveloperAccountResponse {}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */

export interface MsgSetDeveloperAccountResponseSDKType {}
/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */

export interface MsgSetPoolWeights {
  /** admin is the account that is authorized to set the pool weights. */
  admin: string;
  /** pool_weights is the list of pool weights to set. */

  poolWeights?: PoolWeights;
}
/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */

export interface MsgSetPoolWeightsSDKType {
  /** admin is the account that is authorized to set the pool weights. */
  admin: string;
  /** pool_weights is the list of pool weights to set. */

  pool_weights?: PoolWeightsSDKType;
}
/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */

export interface MsgSetPoolWeightsResponse {}
/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */

export interface MsgSetPoolWeightsResponseSDKType {}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */

export interface MsgSetMaxPoolPointsPerTx {
  /** admin is the account that is authorized to set the max pool points per tx. */
  admin: string;
  /**
   * max_pool_points_per_tx is the maximum number of pool points that can be
   * consumed per transaction.
   */

  maxPoolPointsPerTx: Long;
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */

export interface MsgSetMaxPoolPointsPerTxSDKType {
  /** admin is the account that is authorized to set the max pool points per tx. */
  admin: string;
  /**
   * max_pool_points_per_tx is the maximum number of pool points that can be
   * consumed per transaction.
   */

  max_pool_points_per_tx: Long;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */

export interface MsgSetMaxPoolPointsPerTxResponse {}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */

export interface MsgSetMaxPoolPointsPerTxResponseSDKType {}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */

export interface MsgSetMaxPoolPointsPerBlock {
  /**
   * admin is the account that is authorized to set the max pool points per
   * block.
   */
  admin: string;
  /**
   * max_pool_points_per_block is the maximum number of pool points that can be
   * consumed per block.
   */

  maxPoolPointsPerBlock: Long;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */

export interface MsgSetMaxPoolPointsPerBlockSDKType {
  /**
   * admin is the account that is authorized to set the max pool points per
   * block.
   */
  admin: string;
  /**
   * max_pool_points_per_block is the maximum number of pool points that can be
   * consumed per block.
   */

  max_pool_points_per_block: Long;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */

export interface MsgSetMaxPoolPointsPerBlockResponse {}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */

export interface MsgSetMaxPoolPointsPerBlockResponseSDKType {}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */

export interface MsgSetBaseDenoms {
  /** admin is the account that is authorized to set the base denoms. */
  admin: string;
  /** base_denoms is the list of base denoms to set. */

  baseDenoms: BaseDenom[];
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */

export interface MsgSetBaseDenomsSDKType {
  /** admin is the account that is authorized to set the base denoms. */
  admin: string;
  /** base_denoms is the list of base denoms to set. */

  base_denoms: BaseDenomSDKType[];
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */

export interface MsgSetBaseDenomsResponse {}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */

export interface MsgSetBaseDenomsResponseSDKType {}

function createBaseMsgSetHotRoutes(): MsgSetHotRoutes {
  return {
    admin: "",
    hotRoutes: []
  };
}

export const MsgSetHotRoutes = {
  encode(message: MsgSetHotRoutes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    for (const v of message.hotRoutes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetHotRoutes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHotRoutes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.hotRoutes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgSetHotRoutes>): MsgSetHotRoutes {
    const message = createBaseMsgSetHotRoutes();
    message.admin = object.admin ?? "";
    message.hotRoutes = object.hotRoutes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgSetHotRoutesResponse(): MsgSetHotRoutesResponse {
  return {};
}

export const MsgSetHotRoutesResponse = {
  encode(_: MsgSetHotRoutesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetHotRoutesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHotRoutesResponse();

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

  fromPartial(_: Partial<MsgSetHotRoutesResponse>): MsgSetHotRoutesResponse {
    const message = createBaseMsgSetHotRoutesResponse();
    return message;
  }

};

function createBaseMsgSetDeveloperAccount(): MsgSetDeveloperAccount {
  return {
    admin: "",
    developerAccount: ""
  };
}

export const MsgSetDeveloperAccount = {
  encode(message: MsgSetDeveloperAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.developerAccount !== "") {
      writer.uint32(18).string(message.developerAccount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDeveloperAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDeveloperAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.developerAccount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgSetDeveloperAccount>): MsgSetDeveloperAccount {
    const message = createBaseMsgSetDeveloperAccount();
    message.admin = object.admin ?? "";
    message.developerAccount = object.developerAccount ?? "";
    return message;
  }

};

function createBaseMsgSetDeveloperAccountResponse(): MsgSetDeveloperAccountResponse {
  return {};
}

export const MsgSetDeveloperAccountResponse = {
  encode(_: MsgSetDeveloperAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDeveloperAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDeveloperAccountResponse();

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

  fromPartial(_: Partial<MsgSetDeveloperAccountResponse>): MsgSetDeveloperAccountResponse {
    const message = createBaseMsgSetDeveloperAccountResponse();
    return message;
  }

};

function createBaseMsgSetPoolWeights(): MsgSetPoolWeights {
  return {
    admin: "",
    poolWeights: undefined
  };
}

export const MsgSetPoolWeights = {
  encode(message: MsgSetPoolWeights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.poolWeights !== undefined) {
      PoolWeights.encode(message.poolWeights, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPoolWeights {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolWeights();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.poolWeights = PoolWeights.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgSetPoolWeights>): MsgSetPoolWeights {
    const message = createBaseMsgSetPoolWeights();
    message.admin = object.admin ?? "";
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? PoolWeights.fromPartial(object.poolWeights) : undefined;
    return message;
  }

};

function createBaseMsgSetPoolWeightsResponse(): MsgSetPoolWeightsResponse {
  return {};
}

export const MsgSetPoolWeightsResponse = {
  encode(_: MsgSetPoolWeightsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPoolWeightsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolWeightsResponse();

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

  fromPartial(_: Partial<MsgSetPoolWeightsResponse>): MsgSetPoolWeightsResponse {
    const message = createBaseMsgSetPoolWeightsResponse();
    return message;
  }

};

function createBaseMsgSetMaxPoolPointsPerTx(): MsgSetMaxPoolPointsPerTx {
  return {
    admin: "",
    maxPoolPointsPerTx: Long.UZERO
  };
}

export const MsgSetMaxPoolPointsPerTx = {
  encode(message: MsgSetMaxPoolPointsPerTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (!message.maxPoolPointsPerTx.isZero()) {
      writer.uint32(16).uint64(message.maxPoolPointsPerTx);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.maxPoolPointsPerTx = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgSetMaxPoolPointsPerTx>): MsgSetMaxPoolPointsPerTx {
    const message = createBaseMsgSetMaxPoolPointsPerTx();
    message.admin = object.admin ?? "";
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? Long.fromValue(object.maxPoolPointsPerTx) : Long.UZERO;
    return message;
  }

};

function createBaseMsgSetMaxPoolPointsPerTxResponse(): MsgSetMaxPoolPointsPerTxResponse {
  return {};
}

export const MsgSetMaxPoolPointsPerTxResponse = {
  encode(_: MsgSetMaxPoolPointsPerTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerTxResponse();

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

  fromPartial(_: Partial<MsgSetMaxPoolPointsPerTxResponse>): MsgSetMaxPoolPointsPerTxResponse {
    const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
    return message;
  }

};

function createBaseMsgSetMaxPoolPointsPerBlock(): MsgSetMaxPoolPointsPerBlock {
  return {
    admin: "",
    maxPoolPointsPerBlock: Long.UZERO
  };
}

export const MsgSetMaxPoolPointsPerBlock = {
  encode(message: MsgSetMaxPoolPointsPerBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (!message.maxPoolPointsPerBlock.isZero()) {
      writer.uint32(16).uint64(message.maxPoolPointsPerBlock);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.maxPoolPointsPerBlock = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgSetMaxPoolPointsPerBlock>): MsgSetMaxPoolPointsPerBlock {
    const message = createBaseMsgSetMaxPoolPointsPerBlock();
    message.admin = object.admin ?? "";
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? Long.fromValue(object.maxPoolPointsPerBlock) : Long.UZERO;
    return message;
  }

};

function createBaseMsgSetMaxPoolPointsPerBlockResponse(): MsgSetMaxPoolPointsPerBlockResponse {
  return {};
}

export const MsgSetMaxPoolPointsPerBlockResponse = {
  encode(_: MsgSetMaxPoolPointsPerBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();

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

  fromPartial(_: Partial<MsgSetMaxPoolPointsPerBlockResponse>): MsgSetMaxPoolPointsPerBlockResponse {
    const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
    return message;
  }

};

function createBaseMsgSetBaseDenoms(): MsgSetBaseDenoms {
  return {
    admin: "",
    baseDenoms: []
  };
}

export const MsgSetBaseDenoms = {
  encode(message: MsgSetBaseDenoms, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBaseDenoms {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseDenoms();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgSetBaseDenoms>): MsgSetBaseDenoms {
    const message = createBaseMsgSetBaseDenoms();
    message.admin = object.admin ?? "";
    message.baseDenoms = object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgSetBaseDenomsResponse(): MsgSetBaseDenomsResponse {
  return {};
}

export const MsgSetBaseDenomsResponse = {
  encode(_: MsgSetBaseDenomsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBaseDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseDenomsResponse();

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

  fromPartial(_: Partial<MsgSetBaseDenomsResponse>): MsgSetBaseDenomsResponse {
    const message = createBaseMsgSetBaseDenomsResponse();
    return message;
  }

};