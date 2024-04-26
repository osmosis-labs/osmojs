//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
export enum AssetStatus {
  ASSET_STATUS_UNSPECIFIED = 0,
  ASSET_STATUS_OK = 1,
  ASSET_STATUS_BLOCKED_INBOUND = 2,
  ASSET_STATUS_BLOCKED_OUTBOUND = 3,
  ASSET_STATUS_BLOCKED_BOTH = 4,
  UNRECOGNIZED = -1,
}
export const AssetStatusSDKType = AssetStatus;
export const AssetStatusAmino = AssetStatus;
export function assetStatusFromJSON(object: any): AssetStatus {
  switch (object) {
    case 0:
    case "ASSET_STATUS_UNSPECIFIED":
      return AssetStatus.ASSET_STATUS_UNSPECIFIED;
    case 1:
    case "ASSET_STATUS_OK":
      return AssetStatus.ASSET_STATUS_OK;
    case 2:
    case "ASSET_STATUS_BLOCKED_INBOUND":
      return AssetStatus.ASSET_STATUS_BLOCKED_INBOUND;
    case 3:
    case "ASSET_STATUS_BLOCKED_OUTBOUND":
      return AssetStatus.ASSET_STATUS_BLOCKED_OUTBOUND;
    case 4:
    case "ASSET_STATUS_BLOCKED_BOTH":
      return AssetStatus.ASSET_STATUS_BLOCKED_BOTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AssetStatus.UNRECOGNIZED;
  }
}
export function assetStatusToJSON(object: AssetStatus): string {
  switch (object) {
    case AssetStatus.ASSET_STATUS_UNSPECIFIED:
      return "ASSET_STATUS_UNSPECIFIED";
    case AssetStatus.ASSET_STATUS_OK:
      return "ASSET_STATUS_OK";
    case AssetStatus.ASSET_STATUS_BLOCKED_INBOUND:
      return "ASSET_STATUS_BLOCKED_INBOUND";
    case AssetStatus.ASSET_STATUS_BLOCKED_OUTBOUND:
      return "ASSET_STATUS_BLOCKED_OUTBOUND";
    case AssetStatus.ASSET_STATUS_BLOCKED_BOTH:
      return "ASSET_STATUS_BLOCKED_BOTH";
    case AssetStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params defines params for x/bridge module. */
export interface Params {
  /** Signers used to sign inbound and release outbound transactions */
  signers: string[];
  /**
   * Assets is a list used to create tokenfactory denoms
   * for corresponding trading pairs
   */
  assets: Asset[];
  /**
   * VotesNeeded marks how many signers out of the list of signers need
   * to sign until a tx can be considered finalized
   */
  votesNeeded: bigint;
  /**
   * Fee defines a param for fee that go towards the validator set
   * signing the incoming/outgoing txs. The fee is measured as a ratio,
   * so its value lies between 0 and 1.
   */
  fee: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines params for x/bridge module. */
export interface ParamsAmino {
  /** Signers used to sign inbound and release outbound transactions */
  signers?: string[];
  /**
   * Assets is a list used to create tokenfactory denoms
   * for corresponding trading pairs
   */
  assets?: AssetAmino[];
  /**
   * VotesNeeded marks how many signers out of the list of signers need
   * to sign until a tx can be considered finalized
   */
  votes_needed?: string;
  /**
   * Fee defines a param for fee that go towards the validator set
   * signing the incoming/outgoing txs. The fee is measured as a ratio,
   * so its value lies between 0 and 1.
   */
  fee?: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/bridge/params";
  value: ParamsAmino;
}
/** Params defines params for x/bridge module. */
export interface ParamsSDKType {
  signers: string[];
  assets: AssetSDKType[];
  votes_needed: bigint;
  fee: string;
}
/**
 * AssetID defines a pair of the source chain name and its Osmosis
 * representation denoted by denom. AssetID is a primary key for Asset.
 */
export interface AssetID {
  /** SourceChain is a source chain name */
  sourceChain: string;
  /** Denom is the Osmosis representation of the SourceChain */
  denom: string;
}
export interface AssetIDProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.AssetID";
  value: Uint8Array;
}
/**
 * AssetID defines a pair of the source chain name and its Osmosis
 * representation denoted by denom. AssetID is a primary key for Asset.
 */
export interface AssetIDAmino {
  /** SourceChain is a source chain name */
  source_chain?: string;
  /** Denom is the Osmosis representation of the SourceChain */
  denom?: string;
}
export interface AssetIDAminoMsg {
  type: "osmosis/bridge/asset-i-d";
  value: AssetIDAmino;
}
/**
 * AssetID defines a pair of the source chain name and its Osmosis
 * representation denoted by denom. AssetID is a primary key for Asset.
 */
export interface AssetIDSDKType {
  source_chain: string;
  denom: string;
}
/** Asset is a representation of the asset. */
export interface Asset {
  /** ID is the asset's primary key */
  id: AssetID;
  /** Status is a current status of the asset */
  status: AssetStatus;
  /** Exponent represents the power of 10 used for coin representation */
  exponent: bigint;
  /**
   * ExternalConfirmations is a number of the confirmations on the external
   * chain needed to consider the transfer confirmed
   */
  externalConfirmations: bigint;
}
export interface AssetProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.Asset";
  value: Uint8Array;
}
/** Asset is a representation of the asset. */
export interface AssetAmino {
  /** ID is the asset's primary key */
  id?: AssetIDAmino;
  /** Status is a current status of the asset */
  status?: AssetStatus;
  /** Exponent represents the power of 10 used for coin representation */
  exponent?: string;
  /**
   * ExternalConfirmations is a number of the confirmations on the external
   * chain needed to consider the transfer confirmed
   */
  external_confirmations?: string;
}
export interface AssetAminoMsg {
  type: "osmosis/bridge/asset";
  value: AssetAmino;
}
/** Asset is a representation of the asset. */
export interface AssetSDKType {
  id: AssetIDSDKType;
  status: AssetStatus;
  exponent: bigint;
  external_confirmations: bigint;
}
/** InboundTransfer is a representation of the inbound transfer. */
export interface InboundTransfer {
  /**
   * ExternalId is a unique ID of the transfer coming from outside.
   * Serves the purpose of uniquely identifying the transfer in another chain
   * (e.g., this might be the BTC tx hash).
   */
  externalId: string;
  /**
   * ExternalHeight is the height at which the transfer occurred in the external
   * chain
   */
  externalHeight: bigint;
  /** DestAddr is a destination Osmosis address */
  destAddr: string;
  /** AssetID is the ID of the asset being transferred */
  assetId: AssetID;
  /** Amount of coins to transfer */
  amount: string;
  /** Voters is a list of validators signed this transfer */
  voters: string[];
  /**
   * Finalized indicates whether the transfer needs more votes or has
   * already accumulated a sufficient number. The finalised flag is set
   * to true as soon as length(voters) is greater than or equal to
   * the module's param votes_needed.
   */
  finalized: boolean;
}
export interface InboundTransferProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.InboundTransfer";
  value: Uint8Array;
}
/** InboundTransfer is a representation of the inbound transfer. */
export interface InboundTransferAmino {
  /**
   * ExternalId is a unique ID of the transfer coming from outside.
   * Serves the purpose of uniquely identifying the transfer in another chain
   * (e.g., this might be the BTC tx hash).
   */
  external_id?: string;
  /**
   * ExternalHeight is the height at which the transfer occurred in the external
   * chain
   */
  external_height?: string;
  /** DestAddr is a destination Osmosis address */
  dest_addr?: string;
  /** AssetID is the ID of the asset being transferred */
  asset_id?: AssetIDAmino;
  /** Amount of coins to transfer */
  amount?: string;
  /** Voters is a list of validators signed this transfer */
  voters?: string[];
  /**
   * Finalized indicates whether the transfer needs more votes or has
   * already accumulated a sufficient number. The finalised flag is set
   * to true as soon as length(voters) is greater than or equal to
   * the module's param votes_needed.
   */
  finalized?: boolean;
}
export interface InboundTransferAminoMsg {
  type: "osmosis/bridge/inbound-transfer";
  value: InboundTransferAmino;
}
/** InboundTransfer is a representation of the inbound transfer. */
export interface InboundTransferSDKType {
  external_id: string;
  external_height: bigint;
  dest_addr: string;
  asset_id: AssetIDSDKType;
  amount: string;
  voters: string[];
  finalized: boolean;
}
function createBaseParams(): Params {
  return {
    signers: [],
    assets: [],
    votesNeeded: BigInt(0),
    fee: ""
  };
}
export const Params = {
  typeUrl: "/osmosis.bridge.v1beta1.Params",
  aminoType: "osmosis/bridge/params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.signers) && (!o.signers.length || typeof o.signers[0] === "string") && Array.isArray(o.assets) && (!o.assets.length || Asset.is(o.assets[0])) && typeof o.votesNeeded === "bigint" && typeof o.fee === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.signers) && (!o.signers.length || typeof o.signers[0] === "string") && Array.isArray(o.assets) && (!o.assets.length || Asset.isSDK(o.assets[0])) && typeof o.votes_needed === "bigint" && typeof o.fee === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.signers) && (!o.signers.length || typeof o.signers[0] === "string") && Array.isArray(o.assets) && (!o.assets.length || Asset.isAmino(o.assets[0])) && typeof o.votes_needed === "bigint" && typeof o.fee === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.votesNeeded !== BigInt(0)) {
      writer.uint32(24).uint64(message.votesNeeded);
    }
    if (message.fee !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.fee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signers.push(reader.string());
          break;
        case 2:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        case 3:
          message.votesNeeded = reader.uint64();
          break;
        case 4:
          message.fee = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.signers = object.signers?.map(e => e) || [];
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    message.votesNeeded = object.votesNeeded !== undefined && object.votesNeeded !== null ? BigInt(object.votesNeeded.toString()) : BigInt(0);
    message.fee = object.fee ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.signers = object.signers?.map(e => e) || [];
    message.assets = object.assets?.map(e => Asset.fromAmino(e)) || [];
    if (object.votes_needed !== undefined && object.votes_needed !== null) {
      message.votesNeeded = BigInt(object.votes_needed);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = message.signers;
    }
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toAmino(e) : undefined);
    } else {
      obj.assets = message.assets;
    }
    obj.votes_needed = message.votesNeeded !== BigInt(0) ? message.votesNeeded.toString() : undefined;
    obj.fee = message.fee === "" ? undefined : message.fee;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/bridge/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseAssetID(): AssetID {
  return {
    sourceChain: "",
    denom: ""
  };
}
export const AssetID = {
  typeUrl: "/osmosis.bridge.v1beta1.AssetID",
  aminoType: "osmosis/bridge/asset-i-d",
  is(o: any): o is AssetID {
    return o && (o.$typeUrl === AssetID.typeUrl || typeof o.sourceChain === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is AssetIDSDKType {
    return o && (o.$typeUrl === AssetID.typeUrl || typeof o.source_chain === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is AssetIDAmino {
    return o && (o.$typeUrl === AssetID.typeUrl || typeof o.source_chain === "string" && typeof o.denom === "string");
  },
  encode(message: AssetID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourceChain !== "") {
      writer.uint32(10).string(message.sourceChain);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceChain = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AssetID>): AssetID {
    const message = createBaseAssetID();
    message.sourceChain = object.sourceChain ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: AssetIDAmino): AssetID {
    const message = createBaseAssetID();
    if (object.source_chain !== undefined && object.source_chain !== null) {
      message.sourceChain = object.source_chain;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: AssetID): AssetIDAmino {
    const obj: any = {};
    obj.source_chain = message.sourceChain === "" ? undefined : message.sourceChain;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: AssetIDAminoMsg): AssetID {
    return AssetID.fromAmino(object.value);
  },
  toAminoMsg(message: AssetID): AssetIDAminoMsg {
    return {
      type: "osmosis/bridge/asset-i-d",
      value: AssetID.toAmino(message)
    };
  },
  fromProtoMsg(message: AssetIDProtoMsg): AssetID {
    return AssetID.decode(message.value);
  },
  toProto(message: AssetID): Uint8Array {
    return AssetID.encode(message).finish();
  },
  toProtoMsg(message: AssetID): AssetIDProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.AssetID",
      value: AssetID.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AssetID.typeUrl, AssetID);
GlobalDecoderRegistry.registerAminoProtoMapping(AssetID.aminoType, AssetID.typeUrl);
function createBaseAsset(): Asset {
  return {
    id: AssetID.fromPartial({}),
    status: 0,
    exponent: BigInt(0),
    externalConfirmations: BigInt(0)
  };
}
export const Asset = {
  typeUrl: "/osmosis.bridge.v1beta1.Asset",
  aminoType: "osmosis/bridge/asset",
  is(o: any): o is Asset {
    return o && (o.$typeUrl === Asset.typeUrl || AssetID.is(o.id) && isSet(o.status) && typeof o.exponent === "bigint" && typeof o.externalConfirmations === "bigint");
  },
  isSDK(o: any): o is AssetSDKType {
    return o && (o.$typeUrl === Asset.typeUrl || AssetID.isSDK(o.id) && isSet(o.status) && typeof o.exponent === "bigint" && typeof o.external_confirmations === "bigint");
  },
  isAmino(o: any): o is AssetAmino {
    return o && (o.$typeUrl === Asset.typeUrl || AssetID.isAmino(o.id) && isSet(o.status) && typeof o.exponent === "bigint" && typeof o.external_confirmations === "bigint");
  },
  encode(message: Asset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      AssetID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.exponent !== BigInt(0)) {
      writer.uint32(24).uint64(message.exponent);
    }
    if (message.externalConfirmations !== BigInt(0)) {
      writer.uint32(32).uint64(message.externalConfirmations);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Asset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = AssetID.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = (reader.int32() as any);
          break;
        case 3:
          message.exponent = reader.uint64();
          break;
        case 4:
          message.externalConfirmations = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Asset>): Asset {
    const message = createBaseAsset();
    message.id = object.id !== undefined && object.id !== null ? AssetID.fromPartial(object.id) : undefined;
    message.status = object.status ?? 0;
    message.exponent = object.exponent !== undefined && object.exponent !== null ? BigInt(object.exponent.toString()) : BigInt(0);
    message.externalConfirmations = object.externalConfirmations !== undefined && object.externalConfirmations !== null ? BigInt(object.externalConfirmations.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AssetAmino): Asset {
    const message = createBaseAsset();
    if (object.id !== undefined && object.id !== null) {
      message.id = AssetID.fromAmino(object.id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = BigInt(object.exponent);
    }
    if (object.external_confirmations !== undefined && object.external_confirmations !== null) {
      message.externalConfirmations = BigInt(object.external_confirmations);
    }
    return message;
  },
  toAmino(message: Asset): AssetAmino {
    const obj: any = {};
    obj.id = message.id ? AssetID.toAmino(message.id) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.exponent = message.exponent !== BigInt(0) ? message.exponent.toString() : undefined;
    obj.external_confirmations = message.externalConfirmations !== BigInt(0) ? message.externalConfirmations.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetAminoMsg): Asset {
    return Asset.fromAmino(object.value);
  },
  toAminoMsg(message: Asset): AssetAminoMsg {
    return {
      type: "osmosis/bridge/asset",
      value: Asset.toAmino(message)
    };
  },
  fromProtoMsg(message: AssetProtoMsg): Asset {
    return Asset.decode(message.value);
  },
  toProto(message: Asset): Uint8Array {
    return Asset.encode(message).finish();
  },
  toProtoMsg(message: Asset): AssetProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.Asset",
      value: Asset.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Asset.typeUrl, Asset);
GlobalDecoderRegistry.registerAminoProtoMapping(Asset.aminoType, Asset.typeUrl);
function createBaseInboundTransfer(): InboundTransfer {
  return {
    externalId: "",
    externalHeight: BigInt(0),
    destAddr: "",
    assetId: AssetID.fromPartial({}),
    amount: "",
    voters: [],
    finalized: false
  };
}
export const InboundTransfer = {
  typeUrl: "/osmosis.bridge.v1beta1.InboundTransfer",
  aminoType: "osmosis/bridge/inbound-transfer",
  is(o: any): o is InboundTransfer {
    return o && (o.$typeUrl === InboundTransfer.typeUrl || typeof o.externalId === "string" && typeof o.externalHeight === "bigint" && typeof o.destAddr === "string" && AssetID.is(o.assetId) && typeof o.amount === "string" && Array.isArray(o.voters) && (!o.voters.length || typeof o.voters[0] === "string") && typeof o.finalized === "boolean");
  },
  isSDK(o: any): o is InboundTransferSDKType {
    return o && (o.$typeUrl === InboundTransfer.typeUrl || typeof o.external_id === "string" && typeof o.external_height === "bigint" && typeof o.dest_addr === "string" && AssetID.isSDK(o.asset_id) && typeof o.amount === "string" && Array.isArray(o.voters) && (!o.voters.length || typeof o.voters[0] === "string") && typeof o.finalized === "boolean");
  },
  isAmino(o: any): o is InboundTransferAmino {
    return o && (o.$typeUrl === InboundTransfer.typeUrl || typeof o.external_id === "string" && typeof o.external_height === "bigint" && typeof o.dest_addr === "string" && AssetID.isAmino(o.asset_id) && typeof o.amount === "string" && Array.isArray(o.voters) && (!o.voters.length || typeof o.voters[0] === "string") && typeof o.finalized === "boolean");
  },
  encode(message: InboundTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.externalId !== "") {
      writer.uint32(10).string(message.externalId);
    }
    if (message.externalHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.externalHeight);
    }
    if (message.destAddr !== "") {
      writer.uint32(26).string(message.destAddr);
    }
    if (message.assetId !== undefined) {
      AssetID.encode(message.assetId, writer.uint32(34).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    for (const v of message.voters) {
      writer.uint32(50).string(v!);
    }
    if (message.finalized === true) {
      writer.uint32(56).bool(message.finalized);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InboundTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInboundTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalId = reader.string();
          break;
        case 2:
          message.externalHeight = reader.uint64();
          break;
        case 3:
          message.destAddr = reader.string();
          break;
        case 4:
          message.assetId = AssetID.decode(reader, reader.uint32());
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.voters.push(reader.string());
          break;
        case 7:
          message.finalized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InboundTransfer>): InboundTransfer {
    const message = createBaseInboundTransfer();
    message.externalId = object.externalId ?? "";
    message.externalHeight = object.externalHeight !== undefined && object.externalHeight !== null ? BigInt(object.externalHeight.toString()) : BigInt(0);
    message.destAddr = object.destAddr ?? "";
    message.assetId = object.assetId !== undefined && object.assetId !== null ? AssetID.fromPartial(object.assetId) : undefined;
    message.amount = object.amount ?? "";
    message.voters = object.voters?.map(e => e) || [];
    message.finalized = object.finalized ?? false;
    return message;
  },
  fromAmino(object: InboundTransferAmino): InboundTransfer {
    const message = createBaseInboundTransfer();
    if (object.external_id !== undefined && object.external_id !== null) {
      message.externalId = object.external_id;
    }
    if (object.external_height !== undefined && object.external_height !== null) {
      message.externalHeight = BigInt(object.external_height);
    }
    if (object.dest_addr !== undefined && object.dest_addr !== null) {
      message.destAddr = object.dest_addr;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = AssetID.fromAmino(object.asset_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    message.voters = object.voters?.map(e => e) || [];
    if (object.finalized !== undefined && object.finalized !== null) {
      message.finalized = object.finalized;
    }
    return message;
  },
  toAmino(message: InboundTransfer): InboundTransferAmino {
    const obj: any = {};
    obj.external_id = message.externalId === "" ? undefined : message.externalId;
    obj.external_height = message.externalHeight !== BigInt(0) ? message.externalHeight.toString() : undefined;
    obj.dest_addr = message.destAddr === "" ? undefined : message.destAddr;
    obj.asset_id = message.assetId ? AssetID.toAmino(message.assetId) : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    if (message.voters) {
      obj.voters = message.voters.map(e => e);
    } else {
      obj.voters = message.voters;
    }
    obj.finalized = message.finalized === false ? undefined : message.finalized;
    return obj;
  },
  fromAminoMsg(object: InboundTransferAminoMsg): InboundTransfer {
    return InboundTransfer.fromAmino(object.value);
  },
  toAminoMsg(message: InboundTransfer): InboundTransferAminoMsg {
    return {
      type: "osmosis/bridge/inbound-transfer",
      value: InboundTransfer.toAmino(message)
    };
  },
  fromProtoMsg(message: InboundTransferProtoMsg): InboundTransfer {
    return InboundTransfer.decode(message.value);
  },
  toProto(message: InboundTransfer): Uint8Array {
    return InboundTransfer.encode(message).finish();
  },
  toProtoMsg(message: InboundTransfer): InboundTransferProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.InboundTransfer",
      value: InboundTransfer.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InboundTransfer.typeUrl, InboundTransfer);
GlobalDecoderRegistry.registerAminoProtoMapping(InboundTransfer.aminoType, InboundTransfer.typeUrl);