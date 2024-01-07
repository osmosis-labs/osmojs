import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType, InfoByPoolType, InfoByPoolTypeAmino, InfoByPoolTypeSDKType, BaseDenom, BaseDenomAmino, BaseDenomSDKType } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutes {
  /** admin is the account that is authorized to set the hot routes. */
  admin: string;
  /** hot_routes is the list of hot routes to set. */
  hotRoutes: TokenPairArbRoutes[];
}
export interface MsgSetHotRoutesProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes";
  value: Uint8Array;
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesAmino {
  /** admin is the account that is authorized to set the hot routes. */
  admin?: string;
  /** hot_routes is the list of hot routes to set. */
  hot_routes?: TokenPairArbRoutesAmino[];
}
export interface MsgSetHotRoutesAminoMsg {
  type: "osmosis/MsgSetHotRoutes";
  value: MsgSetHotRoutesAmino;
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesSDKType {
  admin: string;
  hot_routes: TokenPairArbRoutesSDKType[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponse {}
export interface MsgSetHotRoutesResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse";
  value: Uint8Array;
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseAmino {}
export interface MsgSetHotRoutesResponseAminoMsg {
  type: "osmosis/protorev/set-hot-routes-response";
  value: MsgSetHotRoutesResponseAmino;
}
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
export interface MsgSetDeveloperAccountProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount";
  value: Uint8Array;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountAmino {
  /** admin is the account that is authorized to set the developer account. */
  admin?: string;
  /**
   * developer_account is the account that will receive a portion of the profits
   * from the protorev module.
   */
  developer_account?: string;
}
export interface MsgSetDeveloperAccountAminoMsg {
  type: "osmosis/MsgSetDeveloperAccount";
  value: MsgSetDeveloperAccountAmino;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountSDKType {
  admin: string;
  developer_account: string;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponse {}
export interface MsgSetDeveloperAccountResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse";
  value: Uint8Array;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseAmino {}
export interface MsgSetDeveloperAccountResponseAminoMsg {
  type: "osmosis/protorev/set-developer-account-response";
  value: MsgSetDeveloperAccountResponseAmino;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseSDKType {}
/** MsgSetInfoByPoolType defines the Msg/SetInfoByPoolType request type. */
export interface MsgSetInfoByPoolType {
  /** admin is the account that is authorized to set the pool weights. */
  admin: string;
  /** info_by_pool_type contains information about the pool types. */
  infoByPoolType: InfoByPoolType;
}
export interface MsgSetInfoByPoolTypeProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolType";
  value: Uint8Array;
}
/** MsgSetInfoByPoolType defines the Msg/SetInfoByPoolType request type. */
export interface MsgSetInfoByPoolTypeAmino {
  /** admin is the account that is authorized to set the pool weights. */
  admin?: string;
  /** info_by_pool_type contains information about the pool types. */
  info_by_pool_type?: InfoByPoolTypeAmino;
}
export interface MsgSetInfoByPoolTypeAminoMsg {
  type: "osmosis/MsgSetInfoByPoolType";
  value: MsgSetInfoByPoolTypeAmino;
}
/** MsgSetInfoByPoolType defines the Msg/SetInfoByPoolType request type. */
export interface MsgSetInfoByPoolTypeSDKType {
  admin: string;
  info_by_pool_type: InfoByPoolTypeSDKType;
}
/** MsgSetInfoByPoolTypeResponse defines the Msg/SetInfoByPoolType response type. */
export interface MsgSetInfoByPoolTypeResponse {}
export interface MsgSetInfoByPoolTypeResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse";
  value: Uint8Array;
}
/** MsgSetInfoByPoolTypeResponse defines the Msg/SetInfoByPoolType response type. */
export interface MsgSetInfoByPoolTypeResponseAmino {}
export interface MsgSetInfoByPoolTypeResponseAminoMsg {
  type: "osmosis/protorev/set-info-by-pool-type-response";
  value: MsgSetInfoByPoolTypeResponseAmino;
}
/** MsgSetInfoByPoolTypeResponse defines the Msg/SetInfoByPoolType response type. */
export interface MsgSetInfoByPoolTypeResponseSDKType {}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTx {
  /** admin is the account that is authorized to set the max pool points per tx. */
  admin: string;
  /**
   * max_pool_points_per_tx is the maximum number of pool points that can be
   * consumed per transaction.
   */
  maxPoolPointsPerTx: bigint;
}
export interface MsgSetMaxPoolPointsPerTxProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx";
  value: Uint8Array;
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTxAmino {
  /** admin is the account that is authorized to set the max pool points per tx. */
  admin?: string;
  /**
   * max_pool_points_per_tx is the maximum number of pool points that can be
   * consumed per transaction.
   */
  max_pool_points_per_tx?: string;
}
export interface MsgSetMaxPoolPointsPerTxAminoMsg {
  type: "osmosis/MsgSetMaxPoolPointsPerTx";
  value: MsgSetMaxPoolPointsPerTxAmino;
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTxSDKType {
  admin: string;
  max_pool_points_per_tx: bigint;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponse {}
export interface MsgSetMaxPoolPointsPerTxResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse";
  value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponseAmino {}
export interface MsgSetMaxPoolPointsPerTxResponseAminoMsg {
  type: "osmosis/protorev/set-max-pool-points-per-tx-response";
  value: MsgSetMaxPoolPointsPerTxResponseAmino;
}
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
  maxPoolPointsPerBlock: bigint;
}
export interface MsgSetMaxPoolPointsPerBlockProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock";
  value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlockAmino {
  /**
   * admin is the account that is authorized to set the max pool points per
   * block.
   */
  admin?: string;
  /**
   * max_pool_points_per_block is the maximum number of pool points that can be
   * consumed per block.
   */
  max_pool_points_per_block?: string;
}
export interface MsgSetMaxPoolPointsPerBlockAminoMsg {
  type: "osmosis/MsgSetPoolWeights";
  value: MsgSetMaxPoolPointsPerBlockAmino;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlockSDKType {
  admin: string;
  max_pool_points_per_block: bigint;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponse {}
export interface MsgSetMaxPoolPointsPerBlockResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse";
  value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponseAmino {}
export interface MsgSetMaxPoolPointsPerBlockResponseAminoMsg {
  type: "osmosis/protorev/set-max-pool-points-per-block-response";
  value: MsgSetMaxPoolPointsPerBlockResponseAmino;
}
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
export interface MsgSetBaseDenomsProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms";
  value: Uint8Array;
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenomsAmino {
  /** admin is the account that is authorized to set the base denoms. */
  admin?: string;
  /** base_denoms is the list of base denoms to set. */
  base_denoms?: BaseDenomAmino[];
}
export interface MsgSetBaseDenomsAminoMsg {
  type: "osmosis/MsgSetBaseDenoms";
  value: MsgSetBaseDenomsAmino;
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenomsSDKType {
  admin: string;
  base_denoms: BaseDenomSDKType[];
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponse {}
export interface MsgSetBaseDenomsResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse";
  value: Uint8Array;
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponseAmino {}
export interface MsgSetBaseDenomsResponseAminoMsg {
  type: "osmosis/protorev/set-base-denoms-response";
  value: MsgSetBaseDenomsResponseAmino;
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponseSDKType {}
function createBaseMsgSetHotRoutes(): MsgSetHotRoutes {
  return {
    admin: "",
    hotRoutes: []
  };
}
export const MsgSetHotRoutes = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
  aminoType: "osmosis/MsgSetHotRoutes",
  is(o: any): o is MsgSetHotRoutes {
    return o && (o.$typeUrl === MsgSetHotRoutes.typeUrl || typeof o.admin === "string" && Array.isArray(o.hotRoutes) && (!o.hotRoutes.length || TokenPairArbRoutes.is(o.hotRoutes[0])));
  },
  isSDK(o: any): o is MsgSetHotRoutesSDKType {
    return o && (o.$typeUrl === MsgSetHotRoutes.typeUrl || typeof o.admin === "string" && Array.isArray(o.hot_routes) && (!o.hot_routes.length || TokenPairArbRoutes.isSDK(o.hot_routes[0])));
  },
  isAmino(o: any): o is MsgSetHotRoutesAmino {
    return o && (o.$typeUrl === MsgSetHotRoutes.typeUrl || typeof o.admin === "string" && Array.isArray(o.hot_routes) && (!o.hot_routes.length || TokenPairArbRoutes.isAmino(o.hot_routes[0])));
  },
  encode(message: MsgSetHotRoutes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.hotRoutes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHotRoutes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): MsgSetHotRoutes {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      hotRoutes: Array.isArray(object?.hotRoutes) ? object.hotRoutes.map((e: any) => TokenPairArbRoutes.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSetHotRoutes): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.hotRoutes) {
      obj.hotRoutes = message.hotRoutes.map(e => e ? TokenPairArbRoutes.toJSON(e) : undefined);
    } else {
      obj.hotRoutes = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgSetHotRoutes>): MsgSetHotRoutes {
    const message = createBaseMsgSetHotRoutes();
    message.admin = object.admin ?? "";
    message.hotRoutes = object.hotRoutes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSetHotRoutesAmino): MsgSetHotRoutes {
    const message = createBaseMsgSetHotRoutes();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    message.hotRoutes = object.hot_routes?.map(e => TokenPairArbRoutes.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSetHotRoutes): MsgSetHotRoutesAmino {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.hotRoutes) {
      obj.hot_routes = message.hotRoutes.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
    } else {
      obj.hot_routes = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetHotRoutesAminoMsg): MsgSetHotRoutes {
    return MsgSetHotRoutes.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetHotRoutes): MsgSetHotRoutesAminoMsg {
    return {
      type: "osmosis/MsgSetHotRoutes",
      value: MsgSetHotRoutes.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetHotRoutesProtoMsg): MsgSetHotRoutes {
    return MsgSetHotRoutes.decode(message.value);
  },
  toProto(message: MsgSetHotRoutes): Uint8Array {
    return MsgSetHotRoutes.encode(message).finish();
  },
  toProtoMsg(message: MsgSetHotRoutes): MsgSetHotRoutesProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
      value: MsgSetHotRoutes.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetHotRoutes.typeUrl, MsgSetHotRoutes);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetHotRoutes.aminoType, MsgSetHotRoutes.typeUrl);
function createBaseMsgSetHotRoutesResponse(): MsgSetHotRoutesResponse {
  return {};
}
export const MsgSetHotRoutesResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
  aminoType: "osmosis/protorev/set-hot-routes-response",
  is(o: any): o is MsgSetHotRoutesResponse {
    return o && o.$typeUrl === MsgSetHotRoutesResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetHotRoutesResponseSDKType {
    return o && o.$typeUrl === MsgSetHotRoutesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetHotRoutesResponseAmino {
    return o && o.$typeUrl === MsgSetHotRoutesResponse.typeUrl;
  },
  encode(_: MsgSetHotRoutesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHotRoutesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): MsgSetHotRoutesResponse {
    return {};
  },
  toJSON(_: MsgSetHotRoutesResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetHotRoutesResponse>): MsgSetHotRoutesResponse {
    const message = createBaseMsgSetHotRoutesResponse();
    return message;
  },
  fromAmino(_: MsgSetHotRoutesResponseAmino): MsgSetHotRoutesResponse {
    const message = createBaseMsgSetHotRoutesResponse();
    return message;
  },
  toAmino(_: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetHotRoutesResponseAminoMsg): MsgSetHotRoutesResponse {
    return MsgSetHotRoutesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-hot-routes-response",
      value: MsgSetHotRoutesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetHotRoutesResponseProtoMsg): MsgSetHotRoutesResponse {
    return MsgSetHotRoutesResponse.decode(message.value);
  },
  toProto(message: MsgSetHotRoutesResponse): Uint8Array {
    return MsgSetHotRoutesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
      value: MsgSetHotRoutesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetHotRoutesResponse.typeUrl, MsgSetHotRoutesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetHotRoutesResponse.aminoType, MsgSetHotRoutesResponse.typeUrl);
function createBaseMsgSetDeveloperAccount(): MsgSetDeveloperAccount {
  return {
    admin: "",
    developerAccount: ""
  };
}
export const MsgSetDeveloperAccount = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
  aminoType: "osmosis/MsgSetDeveloperAccount",
  is(o: any): o is MsgSetDeveloperAccount {
    return o && (o.$typeUrl === MsgSetDeveloperAccount.typeUrl || typeof o.admin === "string" && typeof o.developerAccount === "string");
  },
  isSDK(o: any): o is MsgSetDeveloperAccountSDKType {
    return o && (o.$typeUrl === MsgSetDeveloperAccount.typeUrl || typeof o.admin === "string" && typeof o.developer_account === "string");
  },
  isAmino(o: any): o is MsgSetDeveloperAccountAmino {
    return o && (o.$typeUrl === MsgSetDeveloperAccount.typeUrl || typeof o.admin === "string" && typeof o.developer_account === "string");
  },
  encode(message: MsgSetDeveloperAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.developerAccount !== "") {
      writer.uint32(18).string(message.developerAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDeveloperAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): MsgSetDeveloperAccount {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      developerAccount: isSet(object.developerAccount) ? String(object.developerAccount) : ""
    };
  },
  toJSON(message: MsgSetDeveloperAccount): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.developerAccount !== undefined && (obj.developerAccount = message.developerAccount);
    return obj;
  },
  fromPartial(object: Partial<MsgSetDeveloperAccount>): MsgSetDeveloperAccount {
    const message = createBaseMsgSetDeveloperAccount();
    message.admin = object.admin ?? "";
    message.developerAccount = object.developerAccount ?? "";
    return message;
  },
  fromAmino(object: MsgSetDeveloperAccountAmino): MsgSetDeveloperAccount {
    const message = createBaseMsgSetDeveloperAccount();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.developer_account !== undefined && object.developer_account !== null) {
      message.developerAccount = object.developer_account;
    }
    return message;
  },
  toAmino(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.developer_account = message.developerAccount;
    return obj;
  },
  fromAminoMsg(object: MsgSetDeveloperAccountAminoMsg): MsgSetDeveloperAccount {
    return MsgSetDeveloperAccount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountAminoMsg {
    return {
      type: "osmosis/MsgSetDeveloperAccount",
      value: MsgSetDeveloperAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDeveloperAccountProtoMsg): MsgSetDeveloperAccount {
    return MsgSetDeveloperAccount.decode(message.value);
  },
  toProto(message: MsgSetDeveloperAccount): Uint8Array {
    return MsgSetDeveloperAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
      value: MsgSetDeveloperAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetDeveloperAccount.typeUrl, MsgSetDeveloperAccount);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetDeveloperAccount.aminoType, MsgSetDeveloperAccount.typeUrl);
function createBaseMsgSetDeveloperAccountResponse(): MsgSetDeveloperAccountResponse {
  return {};
}
export const MsgSetDeveloperAccountResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
  aminoType: "osmosis/protorev/set-developer-account-response",
  is(o: any): o is MsgSetDeveloperAccountResponse {
    return o && o.$typeUrl === MsgSetDeveloperAccountResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetDeveloperAccountResponseSDKType {
    return o && o.$typeUrl === MsgSetDeveloperAccountResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetDeveloperAccountResponseAmino {
    return o && o.$typeUrl === MsgSetDeveloperAccountResponse.typeUrl;
  },
  encode(_: MsgSetDeveloperAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDeveloperAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): MsgSetDeveloperAccountResponse {
    return {};
  },
  toJSON(_: MsgSetDeveloperAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetDeveloperAccountResponse>): MsgSetDeveloperAccountResponse {
    const message = createBaseMsgSetDeveloperAccountResponse();
    return message;
  },
  fromAmino(_: MsgSetDeveloperAccountResponseAmino): MsgSetDeveloperAccountResponse {
    const message = createBaseMsgSetDeveloperAccountResponse();
    return message;
  },
  toAmino(_: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDeveloperAccountResponseAminoMsg): MsgSetDeveloperAccountResponse {
    return MsgSetDeveloperAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-developer-account-response",
      value: MsgSetDeveloperAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDeveloperAccountResponseProtoMsg): MsgSetDeveloperAccountResponse {
    return MsgSetDeveloperAccountResponse.decode(message.value);
  },
  toProto(message: MsgSetDeveloperAccountResponse): Uint8Array {
    return MsgSetDeveloperAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
      value: MsgSetDeveloperAccountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetDeveloperAccountResponse.typeUrl, MsgSetDeveloperAccountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetDeveloperAccountResponse.aminoType, MsgSetDeveloperAccountResponse.typeUrl);
function createBaseMsgSetInfoByPoolType(): MsgSetInfoByPoolType {
  return {
    admin: "",
    infoByPoolType: InfoByPoolType.fromPartial({})
  };
}
export const MsgSetInfoByPoolType = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolType",
  aminoType: "osmosis/MsgSetInfoByPoolType",
  is(o: any): o is MsgSetInfoByPoolType {
    return o && (o.$typeUrl === MsgSetInfoByPoolType.typeUrl || typeof o.admin === "string" && InfoByPoolType.is(o.infoByPoolType));
  },
  isSDK(o: any): o is MsgSetInfoByPoolTypeSDKType {
    return o && (o.$typeUrl === MsgSetInfoByPoolType.typeUrl || typeof o.admin === "string" && InfoByPoolType.isSDK(o.info_by_pool_type));
  },
  isAmino(o: any): o is MsgSetInfoByPoolTypeAmino {
    return o && (o.$typeUrl === MsgSetInfoByPoolType.typeUrl || typeof o.admin === "string" && InfoByPoolType.isAmino(o.info_by_pool_type));
  },
  encode(message: MsgSetInfoByPoolType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.infoByPoolType !== undefined) {
      InfoByPoolType.encode(message.infoByPoolType, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetInfoByPoolType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetInfoByPoolType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.infoByPoolType = InfoByPoolType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetInfoByPoolType {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      infoByPoolType: isSet(object.infoByPoolType) ? InfoByPoolType.fromJSON(object.infoByPoolType) : undefined
    };
  },
  toJSON(message: MsgSetInfoByPoolType): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.infoByPoolType !== undefined && (obj.infoByPoolType = message.infoByPoolType ? InfoByPoolType.toJSON(message.infoByPoolType) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetInfoByPoolType>): MsgSetInfoByPoolType {
    const message = createBaseMsgSetInfoByPoolType();
    message.admin = object.admin ?? "";
    message.infoByPoolType = object.infoByPoolType !== undefined && object.infoByPoolType !== null ? InfoByPoolType.fromPartial(object.infoByPoolType) : undefined;
    return message;
  },
  fromAmino(object: MsgSetInfoByPoolTypeAmino): MsgSetInfoByPoolType {
    const message = createBaseMsgSetInfoByPoolType();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.info_by_pool_type !== undefined && object.info_by_pool_type !== null) {
      message.infoByPoolType = InfoByPoolType.fromAmino(object.info_by_pool_type);
    }
    return message;
  },
  toAmino(message: MsgSetInfoByPoolType): MsgSetInfoByPoolTypeAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.info_by_pool_type = message.infoByPoolType ? InfoByPoolType.toAmino(message.infoByPoolType) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetInfoByPoolTypeAminoMsg): MsgSetInfoByPoolType {
    return MsgSetInfoByPoolType.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetInfoByPoolType): MsgSetInfoByPoolTypeAminoMsg {
    return {
      type: "osmosis/MsgSetInfoByPoolType",
      value: MsgSetInfoByPoolType.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetInfoByPoolTypeProtoMsg): MsgSetInfoByPoolType {
    return MsgSetInfoByPoolType.decode(message.value);
  },
  toProto(message: MsgSetInfoByPoolType): Uint8Array {
    return MsgSetInfoByPoolType.encode(message).finish();
  },
  toProtoMsg(message: MsgSetInfoByPoolType): MsgSetInfoByPoolTypeProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolType",
      value: MsgSetInfoByPoolType.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetInfoByPoolType.typeUrl, MsgSetInfoByPoolType);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetInfoByPoolType.aminoType, MsgSetInfoByPoolType.typeUrl);
function createBaseMsgSetInfoByPoolTypeResponse(): MsgSetInfoByPoolTypeResponse {
  return {};
}
export const MsgSetInfoByPoolTypeResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse",
  aminoType: "osmosis/protorev/set-info-by-pool-type-response",
  is(o: any): o is MsgSetInfoByPoolTypeResponse {
    return o && o.$typeUrl === MsgSetInfoByPoolTypeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetInfoByPoolTypeResponseSDKType {
    return o && o.$typeUrl === MsgSetInfoByPoolTypeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetInfoByPoolTypeResponseAmino {
    return o && o.$typeUrl === MsgSetInfoByPoolTypeResponse.typeUrl;
  },
  encode(_: MsgSetInfoByPoolTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetInfoByPoolTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetInfoByPoolTypeResponse();
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
  fromJSON(_: any): MsgSetInfoByPoolTypeResponse {
    return {};
  },
  toJSON(_: MsgSetInfoByPoolTypeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetInfoByPoolTypeResponse>): MsgSetInfoByPoolTypeResponse {
    const message = createBaseMsgSetInfoByPoolTypeResponse();
    return message;
  },
  fromAmino(_: MsgSetInfoByPoolTypeResponseAmino): MsgSetInfoByPoolTypeResponse {
    const message = createBaseMsgSetInfoByPoolTypeResponse();
    return message;
  },
  toAmino(_: MsgSetInfoByPoolTypeResponse): MsgSetInfoByPoolTypeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetInfoByPoolTypeResponseAminoMsg): MsgSetInfoByPoolTypeResponse {
    return MsgSetInfoByPoolTypeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetInfoByPoolTypeResponse): MsgSetInfoByPoolTypeResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-info-by-pool-type-response",
      value: MsgSetInfoByPoolTypeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetInfoByPoolTypeResponseProtoMsg): MsgSetInfoByPoolTypeResponse {
    return MsgSetInfoByPoolTypeResponse.decode(message.value);
  },
  toProto(message: MsgSetInfoByPoolTypeResponse): Uint8Array {
    return MsgSetInfoByPoolTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetInfoByPoolTypeResponse): MsgSetInfoByPoolTypeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse",
      value: MsgSetInfoByPoolTypeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetInfoByPoolTypeResponse.typeUrl, MsgSetInfoByPoolTypeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetInfoByPoolTypeResponse.aminoType, MsgSetInfoByPoolTypeResponse.typeUrl);
function createBaseMsgSetMaxPoolPointsPerTx(): MsgSetMaxPoolPointsPerTx {
  return {
    admin: "",
    maxPoolPointsPerTx: BigInt(0)
  };
}
export const MsgSetMaxPoolPointsPerTx = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx",
  aminoType: "osmosis/MsgSetMaxPoolPointsPerTx",
  is(o: any): o is MsgSetMaxPoolPointsPerTx {
    return o && (o.$typeUrl === MsgSetMaxPoolPointsPerTx.typeUrl || typeof o.admin === "string" && typeof o.maxPoolPointsPerTx === "bigint");
  },
  isSDK(o: any): o is MsgSetMaxPoolPointsPerTxSDKType {
    return o && (o.$typeUrl === MsgSetMaxPoolPointsPerTx.typeUrl || typeof o.admin === "string" && typeof o.max_pool_points_per_tx === "bigint");
  },
  isAmino(o: any): o is MsgSetMaxPoolPointsPerTxAmino {
    return o && (o.$typeUrl === MsgSetMaxPoolPointsPerTx.typeUrl || typeof o.admin === "string" && typeof o.max_pool_points_per_tx === "bigint");
  },
  encode(message: MsgSetMaxPoolPointsPerTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.maxPoolPointsPerTx !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxPoolPointsPerTx);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetMaxPoolPointsPerTx {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      maxPoolPointsPerTx: isSet(object.maxPoolPointsPerTx) ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgSetMaxPoolPointsPerTx): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.maxPoolPointsPerTx !== undefined && (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgSetMaxPoolPointsPerTx>): MsgSetMaxPoolPointsPerTx {
    const message = createBaseMsgSetMaxPoolPointsPerTx();
    message.admin = object.admin ?? "";
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSetMaxPoolPointsPerTxAmino): MsgSetMaxPoolPointsPerTx {
    const message = createBaseMsgSetMaxPoolPointsPerTx();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.max_pool_points_per_tx !== undefined && object.max_pool_points_per_tx !== null) {
      message.maxPoolPointsPerTx = BigInt(object.max_pool_points_per_tx);
    }
    return message;
  },
  toAmino(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.max_pool_points_per_tx = message.maxPoolPointsPerTx ? message.maxPoolPointsPerTx.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetMaxPoolPointsPerTxAminoMsg): MsgSetMaxPoolPointsPerTx {
    return MsgSetMaxPoolPointsPerTx.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxAminoMsg {
    return {
      type: "osmosis/MsgSetMaxPoolPointsPerTx",
      value: MsgSetMaxPoolPointsPerTx.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMaxPoolPointsPerTxProtoMsg): MsgSetMaxPoolPointsPerTx {
    return MsgSetMaxPoolPointsPerTx.decode(message.value);
  },
  toProto(message: MsgSetMaxPoolPointsPerTx): Uint8Array {
    return MsgSetMaxPoolPointsPerTx.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx",
      value: MsgSetMaxPoolPointsPerTx.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetMaxPoolPointsPerTx.typeUrl, MsgSetMaxPoolPointsPerTx);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetMaxPoolPointsPerTx.aminoType, MsgSetMaxPoolPointsPerTx.typeUrl);
function createBaseMsgSetMaxPoolPointsPerTxResponse(): MsgSetMaxPoolPointsPerTxResponse {
  return {};
}
export const MsgSetMaxPoolPointsPerTxResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse",
  aminoType: "osmosis/protorev/set-max-pool-points-per-tx-response",
  is(o: any): o is MsgSetMaxPoolPointsPerTxResponse {
    return o && o.$typeUrl === MsgSetMaxPoolPointsPerTxResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetMaxPoolPointsPerTxResponseSDKType {
    return o && o.$typeUrl === MsgSetMaxPoolPointsPerTxResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetMaxPoolPointsPerTxResponseAmino {
    return o && o.$typeUrl === MsgSetMaxPoolPointsPerTxResponse.typeUrl;
  },
  encode(_: MsgSetMaxPoolPointsPerTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): MsgSetMaxPoolPointsPerTxResponse {
    return {};
  },
  toJSON(_: MsgSetMaxPoolPointsPerTxResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetMaxPoolPointsPerTxResponse>): MsgSetMaxPoolPointsPerTxResponse {
    const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
    return message;
  },
  fromAmino(_: MsgSetMaxPoolPointsPerTxResponseAmino): MsgSetMaxPoolPointsPerTxResponse {
    const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
    return message;
  },
  toAmino(_: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMaxPoolPointsPerTxResponseAminoMsg): MsgSetMaxPoolPointsPerTxResponse {
    return MsgSetMaxPoolPointsPerTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-max-pool-points-per-tx-response",
      value: MsgSetMaxPoolPointsPerTxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMaxPoolPointsPerTxResponseProtoMsg): MsgSetMaxPoolPointsPerTxResponse {
    return MsgSetMaxPoolPointsPerTxResponse.decode(message.value);
  },
  toProto(message: MsgSetMaxPoolPointsPerTxResponse): Uint8Array {
    return MsgSetMaxPoolPointsPerTxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse",
      value: MsgSetMaxPoolPointsPerTxResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetMaxPoolPointsPerTxResponse.typeUrl, MsgSetMaxPoolPointsPerTxResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetMaxPoolPointsPerTxResponse.aminoType, MsgSetMaxPoolPointsPerTxResponse.typeUrl);
function createBaseMsgSetMaxPoolPointsPerBlock(): MsgSetMaxPoolPointsPerBlock {
  return {
    admin: "",
    maxPoolPointsPerBlock: BigInt(0)
  };
}
export const MsgSetMaxPoolPointsPerBlock = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock",
  aminoType: "osmosis/MsgSetPoolWeights",
  is(o: any): o is MsgSetMaxPoolPointsPerBlock {
    return o && (o.$typeUrl === MsgSetMaxPoolPointsPerBlock.typeUrl || typeof o.admin === "string" && typeof o.maxPoolPointsPerBlock === "bigint");
  },
  isSDK(o: any): o is MsgSetMaxPoolPointsPerBlockSDKType {
    return o && (o.$typeUrl === MsgSetMaxPoolPointsPerBlock.typeUrl || typeof o.admin === "string" && typeof o.max_pool_points_per_block === "bigint");
  },
  isAmino(o: any): o is MsgSetMaxPoolPointsPerBlockAmino {
    return o && (o.$typeUrl === MsgSetMaxPoolPointsPerBlock.typeUrl || typeof o.admin === "string" && typeof o.max_pool_points_per_block === "bigint");
  },
  encode(message: MsgSetMaxPoolPointsPerBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.maxPoolPointsPerBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxPoolPointsPerBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetMaxPoolPointsPerBlock {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      maxPoolPointsPerBlock: isSet(object.maxPoolPointsPerBlock) ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgSetMaxPoolPointsPerBlock): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.maxPoolPointsPerBlock !== undefined && (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgSetMaxPoolPointsPerBlock>): MsgSetMaxPoolPointsPerBlock {
    const message = createBaseMsgSetMaxPoolPointsPerBlock();
    message.admin = object.admin ?? "";
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSetMaxPoolPointsPerBlockAmino): MsgSetMaxPoolPointsPerBlock {
    const message = createBaseMsgSetMaxPoolPointsPerBlock();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.max_pool_points_per_block !== undefined && object.max_pool_points_per_block !== null) {
      message.maxPoolPointsPerBlock = BigInt(object.max_pool_points_per_block);
    }
    return message;
  },
  toAmino(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.max_pool_points_per_block = message.maxPoolPointsPerBlock ? message.maxPoolPointsPerBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetMaxPoolPointsPerBlockAminoMsg): MsgSetMaxPoolPointsPerBlock {
    return MsgSetMaxPoolPointsPerBlock.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockAminoMsg {
    return {
      type: "osmosis/MsgSetPoolWeights",
      value: MsgSetMaxPoolPointsPerBlock.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMaxPoolPointsPerBlockProtoMsg): MsgSetMaxPoolPointsPerBlock {
    return MsgSetMaxPoolPointsPerBlock.decode(message.value);
  },
  toProto(message: MsgSetMaxPoolPointsPerBlock): Uint8Array {
    return MsgSetMaxPoolPointsPerBlock.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock",
      value: MsgSetMaxPoolPointsPerBlock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetMaxPoolPointsPerBlock.typeUrl, MsgSetMaxPoolPointsPerBlock);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetMaxPoolPointsPerBlock.aminoType, MsgSetMaxPoolPointsPerBlock.typeUrl);
function createBaseMsgSetMaxPoolPointsPerBlockResponse(): MsgSetMaxPoolPointsPerBlockResponse {
  return {};
}
export const MsgSetMaxPoolPointsPerBlockResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse",
  aminoType: "osmosis/protorev/set-max-pool-points-per-block-response",
  is(o: any): o is MsgSetMaxPoolPointsPerBlockResponse {
    return o && o.$typeUrl === MsgSetMaxPoolPointsPerBlockResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetMaxPoolPointsPerBlockResponseSDKType {
    return o && o.$typeUrl === MsgSetMaxPoolPointsPerBlockResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetMaxPoolPointsPerBlockResponseAmino {
    return o && o.$typeUrl === MsgSetMaxPoolPointsPerBlockResponse.typeUrl;
  },
  encode(_: MsgSetMaxPoolPointsPerBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): MsgSetMaxPoolPointsPerBlockResponse {
    return {};
  },
  toJSON(_: MsgSetMaxPoolPointsPerBlockResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetMaxPoolPointsPerBlockResponse>): MsgSetMaxPoolPointsPerBlockResponse {
    const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
    return message;
  },
  fromAmino(_: MsgSetMaxPoolPointsPerBlockResponseAmino): MsgSetMaxPoolPointsPerBlockResponse {
    const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
    return message;
  },
  toAmino(_: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMaxPoolPointsPerBlockResponseAminoMsg): MsgSetMaxPoolPointsPerBlockResponse {
    return MsgSetMaxPoolPointsPerBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-max-pool-points-per-block-response",
      value: MsgSetMaxPoolPointsPerBlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMaxPoolPointsPerBlockResponseProtoMsg): MsgSetMaxPoolPointsPerBlockResponse {
    return MsgSetMaxPoolPointsPerBlockResponse.decode(message.value);
  },
  toProto(message: MsgSetMaxPoolPointsPerBlockResponse): Uint8Array {
    return MsgSetMaxPoolPointsPerBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse",
      value: MsgSetMaxPoolPointsPerBlockResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetMaxPoolPointsPerBlockResponse.typeUrl, MsgSetMaxPoolPointsPerBlockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetMaxPoolPointsPerBlockResponse.aminoType, MsgSetMaxPoolPointsPerBlockResponse.typeUrl);
function createBaseMsgSetBaseDenoms(): MsgSetBaseDenoms {
  return {
    admin: "",
    baseDenoms: []
  };
}
export const MsgSetBaseDenoms = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms",
  aminoType: "osmosis/MsgSetBaseDenoms",
  is(o: any): o is MsgSetBaseDenoms {
    return o && (o.$typeUrl === MsgSetBaseDenoms.typeUrl || typeof o.admin === "string" && Array.isArray(o.baseDenoms) && (!o.baseDenoms.length || BaseDenom.is(o.baseDenoms[0])));
  },
  isSDK(o: any): o is MsgSetBaseDenomsSDKType {
    return o && (o.$typeUrl === MsgSetBaseDenoms.typeUrl || typeof o.admin === "string" && Array.isArray(o.base_denoms) && (!o.base_denoms.length || BaseDenom.isSDK(o.base_denoms[0])));
  },
  isAmino(o: any): o is MsgSetBaseDenomsAmino {
    return o && (o.$typeUrl === MsgSetBaseDenoms.typeUrl || typeof o.admin === "string" && Array.isArray(o.base_denoms) && (!o.base_denoms.length || BaseDenom.isAmino(o.base_denoms[0])));
  },
  encode(message: MsgSetBaseDenoms, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetBaseDenoms {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): MsgSetBaseDenoms {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      baseDenoms: Array.isArray(object?.baseDenoms) ? object.baseDenoms.map((e: any) => BaseDenom.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSetBaseDenoms): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.baseDenoms) {
      obj.baseDenoms = message.baseDenoms.map(e => e ? BaseDenom.toJSON(e) : undefined);
    } else {
      obj.baseDenoms = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgSetBaseDenoms>): MsgSetBaseDenoms {
    const message = createBaseMsgSetBaseDenoms();
    message.admin = object.admin ?? "";
    message.baseDenoms = object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSetBaseDenomsAmino): MsgSetBaseDenoms {
    const message = createBaseMsgSetBaseDenoms();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    message.baseDenoms = object.base_denoms?.map(e => BaseDenom.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSetBaseDenoms): MsgSetBaseDenomsAmino {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.baseDenoms) {
      obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toAmino(e) : undefined);
    } else {
      obj.base_denoms = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetBaseDenomsAminoMsg): MsgSetBaseDenoms {
    return MsgSetBaseDenoms.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetBaseDenoms): MsgSetBaseDenomsAminoMsg {
    return {
      type: "osmosis/MsgSetBaseDenoms",
      value: MsgSetBaseDenoms.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetBaseDenomsProtoMsg): MsgSetBaseDenoms {
    return MsgSetBaseDenoms.decode(message.value);
  },
  toProto(message: MsgSetBaseDenoms): Uint8Array {
    return MsgSetBaseDenoms.encode(message).finish();
  },
  toProtoMsg(message: MsgSetBaseDenoms): MsgSetBaseDenomsProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms",
      value: MsgSetBaseDenoms.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetBaseDenoms.typeUrl, MsgSetBaseDenoms);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetBaseDenoms.aminoType, MsgSetBaseDenoms.typeUrl);
function createBaseMsgSetBaseDenomsResponse(): MsgSetBaseDenomsResponse {
  return {};
}
export const MsgSetBaseDenomsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse",
  aminoType: "osmosis/protorev/set-base-denoms-response",
  is(o: any): o is MsgSetBaseDenomsResponse {
    return o && o.$typeUrl === MsgSetBaseDenomsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetBaseDenomsResponseSDKType {
    return o && o.$typeUrl === MsgSetBaseDenomsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetBaseDenomsResponseAmino {
    return o && o.$typeUrl === MsgSetBaseDenomsResponse.typeUrl;
  },
  encode(_: MsgSetBaseDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetBaseDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): MsgSetBaseDenomsResponse {
    return {};
  },
  toJSON(_: MsgSetBaseDenomsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetBaseDenomsResponse>): MsgSetBaseDenomsResponse {
    const message = createBaseMsgSetBaseDenomsResponse();
    return message;
  },
  fromAmino(_: MsgSetBaseDenomsResponseAmino): MsgSetBaseDenomsResponse {
    const message = createBaseMsgSetBaseDenomsResponse();
    return message;
  },
  toAmino(_: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetBaseDenomsResponseAminoMsg): MsgSetBaseDenomsResponse {
    return MsgSetBaseDenomsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-base-denoms-response",
      value: MsgSetBaseDenomsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetBaseDenomsResponseProtoMsg): MsgSetBaseDenomsResponse {
    return MsgSetBaseDenomsResponse.decode(message.value);
  },
  toProto(message: MsgSetBaseDenomsResponse): Uint8Array {
    return MsgSetBaseDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse",
      value: MsgSetBaseDenomsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetBaseDenomsResponse.typeUrl, MsgSetBaseDenomsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetBaseDenomsResponse.aminoType, MsgSetBaseDenomsResponse.typeUrl);