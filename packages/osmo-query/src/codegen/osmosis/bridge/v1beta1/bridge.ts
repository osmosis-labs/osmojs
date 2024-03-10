import { BinaryReader, BinaryWriter } from "../../../binary";
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
  assets: AssetWithStatus[];
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
  assets?: AssetWithStatusAmino[];
}
export interface ParamsAminoMsg {
  type: "osmosis/bridge/params";
  value: ParamsAmino;
}
/** Params defines params for x/bridge module. */
export interface ParamsSDKType {
  signers: string[];
  assets: AssetWithStatusSDKType[];
}
/** AssetWithStatus defines a pair of the asset and its current status. */
export interface AssetWithStatus {
  asset: Asset;
  assetStatus: AssetStatus;
}
export interface AssetWithStatusProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.AssetWithStatus";
  value: Uint8Array;
}
/** AssetWithStatus defines a pair of the asset and its current status. */
export interface AssetWithStatusAmino {
  asset?: AssetAmino;
  asset_status?: AssetStatus;
}
export interface AssetWithStatusAminoMsg {
  type: "osmosis/bridge/asset-with-status";
  value: AssetWithStatusAmino;
}
/** AssetWithStatus defines a pair of the asset and its current status. */
export interface AssetWithStatusSDKType {
  asset: AssetSDKType;
  asset_status: AssetStatus;
}
/**
 * Asset defines a pair of the source chain name and its Osmosis representation
 * denoted by denom. It also includes a precision used for coins representation.
 */
export interface Asset {
  /** SourceChain is a source chain name */
  sourceChain: string;
  /** Denom is the Osmosis representation of the SourceChain */
  denom: string;
  /** Precision used for coins representation */
  precision: bigint;
}
export interface AssetProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.Asset";
  value: Uint8Array;
}
/**
 * Asset defines a pair of the source chain name and its Osmosis representation
 * denoted by denom. It also includes a precision used for coins representation.
 */
export interface AssetAmino {
  /** SourceChain is a source chain name */
  source_chain?: string;
  /** Denom is the Osmosis representation of the SourceChain */
  denom?: string;
  /** Precision used for coins representation */
  precision?: string;
}
export interface AssetAminoMsg {
  type: "osmosis/bridge/asset";
  value: AssetAmino;
}
/**
 * Asset defines a pair of the source chain name and its Osmosis representation
 * denoted by denom. It also includes a precision used for coins representation.
 */
export interface AssetSDKType {
  source_chain: string;
  denom: string;
  precision: bigint;
}
function createBaseParams(): Params {
  return {
    signers: [],
    assets: []
  };
}
export const Params = {
  typeUrl: "/osmosis.bridge.v1beta1.Params",
  aminoType: "osmosis/bridge/params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.signers) && (!o.signers.length || typeof o.signers[0] === "string") && Array.isArray(o.assets) && (!o.assets.length || AssetWithStatus.is(o.assets[0])));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.signers) && (!o.signers.length || typeof o.signers[0] === "string") && Array.isArray(o.assets) && (!o.assets.length || AssetWithStatus.isSDK(o.assets[0])));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.signers) && (!o.signers.length || typeof o.signers[0] === "string") && Array.isArray(o.assets) && (!o.assets.length || AssetWithStatus.isAmino(o.assets[0])));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.assets) {
      AssetWithStatus.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.assets.push(AssetWithStatus.decode(reader, reader.uint32()));
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
    message.assets = object.assets?.map(e => AssetWithStatus.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.signers = object.signers?.map(e => e) || [];
    message.assets = object.assets?.map(e => AssetWithStatus.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? AssetWithStatus.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }
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
function createBaseAssetWithStatus(): AssetWithStatus {
  return {
    asset: Asset.fromPartial({}),
    assetStatus: 0
  };
}
export const AssetWithStatus = {
  typeUrl: "/osmosis.bridge.v1beta1.AssetWithStatus",
  aminoType: "osmosis/bridge/asset-with-status",
  is(o: any): o is AssetWithStatus {
    return o && (o.$typeUrl === AssetWithStatus.typeUrl || Asset.is(o.asset) && isSet(o.assetStatus));
  },
  isSDK(o: any): o is AssetWithStatusSDKType {
    return o && (o.$typeUrl === AssetWithStatus.typeUrl || Asset.isSDK(o.asset) && isSet(o.asset_status));
  },
  isAmino(o: any): o is AssetWithStatusAmino {
    return o && (o.$typeUrl === AssetWithStatus.typeUrl || Asset.isAmino(o.asset) && isSet(o.asset_status));
  },
  encode(message: AssetWithStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    if (message.assetStatus !== 0) {
      writer.uint32(16).int32(message.assetStatus);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetWithStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetWithStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        case 2:
          message.assetStatus = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AssetWithStatus>): AssetWithStatus {
    const message = createBaseAssetWithStatus();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.assetStatus = object.assetStatus ?? 0;
    return message;
  },
  fromAmino(object: AssetWithStatusAmino): AssetWithStatus {
    const message = createBaseAssetWithStatus();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Asset.fromAmino(object.asset);
    }
    if (object.asset_status !== undefined && object.asset_status !== null) {
      message.assetStatus = assetStatusFromJSON(object.asset_status);
    }
    return message;
  },
  toAmino(message: AssetWithStatus): AssetWithStatusAmino {
    const obj: any = {};
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    obj.asset_status = message.assetStatus;
    return obj;
  },
  fromAminoMsg(object: AssetWithStatusAminoMsg): AssetWithStatus {
    return AssetWithStatus.fromAmino(object.value);
  },
  toAminoMsg(message: AssetWithStatus): AssetWithStatusAminoMsg {
    return {
      type: "osmosis/bridge/asset-with-status",
      value: AssetWithStatus.toAmino(message)
    };
  },
  fromProtoMsg(message: AssetWithStatusProtoMsg): AssetWithStatus {
    return AssetWithStatus.decode(message.value);
  },
  toProto(message: AssetWithStatus): Uint8Array {
    return AssetWithStatus.encode(message).finish();
  },
  toProtoMsg(message: AssetWithStatus): AssetWithStatusProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.AssetWithStatus",
      value: AssetWithStatus.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AssetWithStatus.typeUrl, AssetWithStatus);
GlobalDecoderRegistry.registerAminoProtoMapping(AssetWithStatus.aminoType, AssetWithStatus.typeUrl);
function createBaseAsset(): Asset {
  return {
    sourceChain: "",
    denom: "",
    precision: BigInt(0)
  };
}
export const Asset = {
  typeUrl: "/osmosis.bridge.v1beta1.Asset",
  aminoType: "osmosis/bridge/asset",
  is(o: any): o is Asset {
    return o && (o.$typeUrl === Asset.typeUrl || typeof o.sourceChain === "string" && typeof o.denom === "string" && typeof o.precision === "bigint");
  },
  isSDK(o: any): o is AssetSDKType {
    return o && (o.$typeUrl === Asset.typeUrl || typeof o.source_chain === "string" && typeof o.denom === "string" && typeof o.precision === "bigint");
  },
  isAmino(o: any): o is AssetAmino {
    return o && (o.$typeUrl === Asset.typeUrl || typeof o.source_chain === "string" && typeof o.denom === "string" && typeof o.precision === "bigint");
  },
  encode(message: Asset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourceChain !== "") {
      writer.uint32(10).string(message.sourceChain);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.precision !== BigInt(0)) {
      writer.uint32(24).uint64(message.precision);
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
          message.sourceChain = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.precision = reader.uint64();
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
    message.sourceChain = object.sourceChain ?? "";
    message.denom = object.denom ?? "";
    message.precision = object.precision !== undefined && object.precision !== null ? BigInt(object.precision.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AssetAmino): Asset {
    const message = createBaseAsset();
    if (object.source_chain !== undefined && object.source_chain !== null) {
      message.sourceChain = object.source_chain;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = BigInt(object.precision);
    }
    return message;
  },
  toAmino(message: Asset): AssetAmino {
    const obj: any = {};
    obj.source_chain = message.sourceChain;
    obj.denom = message.denom;
    obj.precision = message.precision ? message.precision.toString() : undefined;
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