import { Asset, AssetAmino, AssetSDKType, AssetWithStatus, AssetWithStatusAmino, AssetWithStatusSDKType } from "./bridge";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface EventInboundTransfer {
  /** Sender is a sender's address */
  sender: string;
  /** DestAddr is a destination Osmosis address */
  destAddr: string;
  /** Asset contains a source chain and a target denom */
  asset: Asset;
  /** Amount of coins to transfer */
  amount: string;
}
export interface EventInboundTransferProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.EventInboundTransfer";
  value: Uint8Array;
}
export interface EventInboundTransferAmino {
  /** Sender is a sender's address */
  sender?: string;
  /** DestAddr is a destination Osmosis address */
  dest_addr?: string;
  /** Asset contains a source chain and a target denom */
  asset?: AssetAmino;
  /** Amount of coins to transfer */
  amount?: string;
}
export interface EventInboundTransferAminoMsg {
  type: "osmosis/bridge/event-inbound-transfer";
  value: EventInboundTransferAmino;
}
export interface EventInboundTransferSDKType {
  sender: string;
  dest_addr: string;
  asset: AssetSDKType;
  amount: string;
}
export interface EventOutboundTransfer {
  /** Sender is a sender's address */
  sender: string;
  /** DestAddr is a destination Osmosis address */
  destAddr: string;
  /** Asset contains a source chain and a target denom */
  asset: Asset;
  /** Amount of coins to transfer */
  amount: string;
}
export interface EventOutboundTransferProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.EventOutboundTransfer";
  value: Uint8Array;
}
export interface EventOutboundTransferAmino {
  /** Sender is a sender's address */
  sender?: string;
  /** DestAddr is a destination Osmosis address */
  dest_addr?: string;
  /** Asset contains a source chain and a target denom */
  asset?: AssetAmino;
  /** Amount of coins to transfer */
  amount?: string;
}
export interface EventOutboundTransferAminoMsg {
  type: "osmosis/bridge/event-outbound-transfer";
  value: EventOutboundTransferAmino;
}
export interface EventOutboundTransferSDKType {
  sender: string;
  dest_addr: string;
  asset: AssetSDKType;
  amount: string;
}
export interface EventUpdateParams {
  newSigners: string[];
  createdSigners: string[];
  deletedSigners: string[];
  newAssets: AssetWithStatus[];
  createdAssets: AssetWithStatus[];
  deletedAssets: AssetWithStatus[];
}
export interface EventUpdateParamsProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.EventUpdateParams";
  value: Uint8Array;
}
export interface EventUpdateParamsAmino {
  new_signers?: string[];
  created_signers?: string[];
  deleted_signers?: string[];
  new_assets?: AssetWithStatusAmino[];
  created_assets?: AssetWithStatusAmino[];
  deleted_assets?: AssetWithStatusAmino[];
}
export interface EventUpdateParamsAminoMsg {
  type: "osmosis/bridge/event-update-params";
  value: EventUpdateParamsAmino;
}
export interface EventUpdateParamsSDKType {
  new_signers: string[];
  created_signers: string[];
  deleted_signers: string[];
  new_assets: AssetWithStatusSDKType[];
  created_assets: AssetWithStatusSDKType[];
  deleted_assets: AssetWithStatusSDKType[];
}
export interface EventChangeAssetStatus {
  /** Sender is a sender's address */
  sender: string;
  /** NewAssetStatus is a pair of the asset and its new status */
  oldAssetStatus: AssetWithStatus;
  newAssetStatus: AssetWithStatus;
}
export interface EventChangeAssetStatusProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.EventChangeAssetStatus";
  value: Uint8Array;
}
export interface EventChangeAssetStatusAmino {
  /** Sender is a sender's address */
  sender?: string;
  /** NewAssetStatus is a pair of the asset and its new status */
  old_asset_status?: AssetWithStatusAmino;
  new_asset_status?: AssetWithStatusAmino;
}
export interface EventChangeAssetStatusAminoMsg {
  type: "osmosis/bridge/event-change-asset-status";
  value: EventChangeAssetStatusAmino;
}
export interface EventChangeAssetStatusSDKType {
  sender: string;
  old_asset_status: AssetWithStatusSDKType;
  new_asset_status: AssetWithStatusSDKType;
}
function createBaseEventInboundTransfer(): EventInboundTransfer {
  return {
    sender: "",
    destAddr: "",
    asset: Asset.fromPartial({}),
    amount: ""
  };
}
export const EventInboundTransfer = {
  typeUrl: "/osmosis.bridge.v1beta1.EventInboundTransfer",
  aminoType: "osmosis/bridge/event-inbound-transfer",
  is(o: any): o is EventInboundTransfer {
    return o && (o.$typeUrl === EventInboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.destAddr === "string" && Asset.is(o.asset) && typeof o.amount === "string");
  },
  isSDK(o: any): o is EventInboundTransferSDKType {
    return o && (o.$typeUrl === EventInboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.dest_addr === "string" && Asset.isSDK(o.asset) && typeof o.amount === "string");
  },
  isAmino(o: any): o is EventInboundTransferAmino {
    return o && (o.$typeUrl === EventInboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.dest_addr === "string" && Asset.isAmino(o.asset) && typeof o.amount === "string");
  },
  encode(message: EventInboundTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.destAddr !== "") {
      writer.uint32(18).string(message.destAddr);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventInboundTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInboundTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.destAddr = reader.string();
          break;
        case 3:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventInboundTransfer>): EventInboundTransfer {
    const message = createBaseEventInboundTransfer();
    message.sender = object.sender ?? "";
    message.destAddr = object.destAddr ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventInboundTransferAmino): EventInboundTransfer {
    const message = createBaseEventInboundTransfer();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.dest_addr !== undefined && object.dest_addr !== null) {
      message.destAddr = object.dest_addr;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Asset.fromAmino(object.asset);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventInboundTransfer): EventInboundTransferAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.dest_addr = message.destAddr;
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: EventInboundTransferAminoMsg): EventInboundTransfer {
    return EventInboundTransfer.fromAmino(object.value);
  },
  toAminoMsg(message: EventInboundTransfer): EventInboundTransferAminoMsg {
    return {
      type: "osmosis/bridge/event-inbound-transfer",
      value: EventInboundTransfer.toAmino(message)
    };
  },
  fromProtoMsg(message: EventInboundTransferProtoMsg): EventInboundTransfer {
    return EventInboundTransfer.decode(message.value);
  },
  toProto(message: EventInboundTransfer): Uint8Array {
    return EventInboundTransfer.encode(message).finish();
  },
  toProtoMsg(message: EventInboundTransfer): EventInboundTransferProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.EventInboundTransfer",
      value: EventInboundTransfer.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventInboundTransfer.typeUrl, EventInboundTransfer);
GlobalDecoderRegistry.registerAminoProtoMapping(EventInboundTransfer.aminoType, EventInboundTransfer.typeUrl);
function createBaseEventOutboundTransfer(): EventOutboundTransfer {
  return {
    sender: "",
    destAddr: "",
    asset: Asset.fromPartial({}),
    amount: ""
  };
}
export const EventOutboundTransfer = {
  typeUrl: "/osmosis.bridge.v1beta1.EventOutboundTransfer",
  aminoType: "osmosis/bridge/event-outbound-transfer",
  is(o: any): o is EventOutboundTransfer {
    return o && (o.$typeUrl === EventOutboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.destAddr === "string" && Asset.is(o.asset) && typeof o.amount === "string");
  },
  isSDK(o: any): o is EventOutboundTransferSDKType {
    return o && (o.$typeUrl === EventOutboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.dest_addr === "string" && Asset.isSDK(o.asset) && typeof o.amount === "string");
  },
  isAmino(o: any): o is EventOutboundTransferAmino {
    return o && (o.$typeUrl === EventOutboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.dest_addr === "string" && Asset.isAmino(o.asset) && typeof o.amount === "string");
  },
  encode(message: EventOutboundTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.destAddr !== "") {
      writer.uint32(18).string(message.destAddr);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOutboundTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutboundTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.destAddr = reader.string();
          break;
        case 3:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventOutboundTransfer>): EventOutboundTransfer {
    const message = createBaseEventOutboundTransfer();
    message.sender = object.sender ?? "";
    message.destAddr = object.destAddr ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventOutboundTransferAmino): EventOutboundTransfer {
    const message = createBaseEventOutboundTransfer();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.dest_addr !== undefined && object.dest_addr !== null) {
      message.destAddr = object.dest_addr;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Asset.fromAmino(object.asset);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventOutboundTransfer): EventOutboundTransferAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.dest_addr = message.destAddr;
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: EventOutboundTransferAminoMsg): EventOutboundTransfer {
    return EventOutboundTransfer.fromAmino(object.value);
  },
  toAminoMsg(message: EventOutboundTransfer): EventOutboundTransferAminoMsg {
    return {
      type: "osmosis/bridge/event-outbound-transfer",
      value: EventOutboundTransfer.toAmino(message)
    };
  },
  fromProtoMsg(message: EventOutboundTransferProtoMsg): EventOutboundTransfer {
    return EventOutboundTransfer.decode(message.value);
  },
  toProto(message: EventOutboundTransfer): Uint8Array {
    return EventOutboundTransfer.encode(message).finish();
  },
  toProtoMsg(message: EventOutboundTransfer): EventOutboundTransferProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.EventOutboundTransfer",
      value: EventOutboundTransfer.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventOutboundTransfer.typeUrl, EventOutboundTransfer);
GlobalDecoderRegistry.registerAminoProtoMapping(EventOutboundTransfer.aminoType, EventOutboundTransfer.typeUrl);
function createBaseEventUpdateParams(): EventUpdateParams {
  return {
    newSigners: [],
    createdSigners: [],
    deletedSigners: [],
    newAssets: [],
    createdAssets: [],
    deletedAssets: []
  };
}
export const EventUpdateParams = {
  typeUrl: "/osmosis.bridge.v1beta1.EventUpdateParams",
  aminoType: "osmosis/bridge/event-update-params",
  is(o: any): o is EventUpdateParams {
    return o && (o.$typeUrl === EventUpdateParams.typeUrl || Array.isArray(o.newSigners) && (!o.newSigners.length || typeof o.newSigners[0] === "string") && Array.isArray(o.createdSigners) && (!o.createdSigners.length || typeof o.createdSigners[0] === "string") && Array.isArray(o.deletedSigners) && (!o.deletedSigners.length || typeof o.deletedSigners[0] === "string") && Array.isArray(o.newAssets) && (!o.newAssets.length || AssetWithStatus.is(o.newAssets[0])) && Array.isArray(o.createdAssets) && (!o.createdAssets.length || AssetWithStatus.is(o.createdAssets[0])) && Array.isArray(o.deletedAssets) && (!o.deletedAssets.length || AssetWithStatus.is(o.deletedAssets[0])));
  },
  isSDK(o: any): o is EventUpdateParamsSDKType {
    return o && (o.$typeUrl === EventUpdateParams.typeUrl || Array.isArray(o.new_signers) && (!o.new_signers.length || typeof o.new_signers[0] === "string") && Array.isArray(o.created_signers) && (!o.created_signers.length || typeof o.created_signers[0] === "string") && Array.isArray(o.deleted_signers) && (!o.deleted_signers.length || typeof o.deleted_signers[0] === "string") && Array.isArray(o.new_assets) && (!o.new_assets.length || AssetWithStatus.isSDK(o.new_assets[0])) && Array.isArray(o.created_assets) && (!o.created_assets.length || AssetWithStatus.isSDK(o.created_assets[0])) && Array.isArray(o.deleted_assets) && (!o.deleted_assets.length || AssetWithStatus.isSDK(o.deleted_assets[0])));
  },
  isAmino(o: any): o is EventUpdateParamsAmino {
    return o && (o.$typeUrl === EventUpdateParams.typeUrl || Array.isArray(o.new_signers) && (!o.new_signers.length || typeof o.new_signers[0] === "string") && Array.isArray(o.created_signers) && (!o.created_signers.length || typeof o.created_signers[0] === "string") && Array.isArray(o.deleted_signers) && (!o.deleted_signers.length || typeof o.deleted_signers[0] === "string") && Array.isArray(o.new_assets) && (!o.new_assets.length || AssetWithStatus.isAmino(o.new_assets[0])) && Array.isArray(o.created_assets) && (!o.created_assets.length || AssetWithStatus.isAmino(o.created_assets[0])) && Array.isArray(o.deleted_assets) && (!o.deleted_assets.length || AssetWithStatus.isAmino(o.deleted_assets[0])));
  },
  encode(message: EventUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.newSigners) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.createdSigners) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.deletedSigners) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.newAssets) {
      AssetWithStatus.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.createdAssets) {
      AssetWithStatus.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.deletedAssets) {
      AssetWithStatus.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newSigners.push(reader.string());
          break;
        case 2:
          message.createdSigners.push(reader.string());
          break;
        case 3:
          message.deletedSigners.push(reader.string());
          break;
        case 4:
          message.newAssets.push(AssetWithStatus.decode(reader, reader.uint32()));
          break;
        case 5:
          message.createdAssets.push(AssetWithStatus.decode(reader, reader.uint32()));
          break;
        case 6:
          message.deletedAssets.push(AssetWithStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams {
    const message = createBaseEventUpdateParams();
    message.newSigners = object.newSigners?.map(e => e) || [];
    message.createdSigners = object.createdSigners?.map(e => e) || [];
    message.deletedSigners = object.deletedSigners?.map(e => e) || [];
    message.newAssets = object.newAssets?.map(e => AssetWithStatus.fromPartial(e)) || [];
    message.createdAssets = object.createdAssets?.map(e => AssetWithStatus.fromPartial(e)) || [];
    message.deletedAssets = object.deletedAssets?.map(e => AssetWithStatus.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventUpdateParamsAmino): EventUpdateParams {
    const message = createBaseEventUpdateParams();
    message.newSigners = object.new_signers?.map(e => e) || [];
    message.createdSigners = object.created_signers?.map(e => e) || [];
    message.deletedSigners = object.deleted_signers?.map(e => e) || [];
    message.newAssets = object.new_assets?.map(e => AssetWithStatus.fromAmino(e)) || [];
    message.createdAssets = object.created_assets?.map(e => AssetWithStatus.fromAmino(e)) || [];
    message.deletedAssets = object.deleted_assets?.map(e => AssetWithStatus.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventUpdateParams): EventUpdateParamsAmino {
    const obj: any = {};
    if (message.newSigners) {
      obj.new_signers = message.newSigners.map(e => e);
    } else {
      obj.new_signers = [];
    }
    if (message.createdSigners) {
      obj.created_signers = message.createdSigners.map(e => e);
    } else {
      obj.created_signers = [];
    }
    if (message.deletedSigners) {
      obj.deleted_signers = message.deletedSigners.map(e => e);
    } else {
      obj.deleted_signers = [];
    }
    if (message.newAssets) {
      obj.new_assets = message.newAssets.map(e => e ? AssetWithStatus.toAmino(e) : undefined);
    } else {
      obj.new_assets = [];
    }
    if (message.createdAssets) {
      obj.created_assets = message.createdAssets.map(e => e ? AssetWithStatus.toAmino(e) : undefined);
    } else {
      obj.created_assets = [];
    }
    if (message.deletedAssets) {
      obj.deleted_assets = message.deletedAssets.map(e => e ? AssetWithStatus.toAmino(e) : undefined);
    } else {
      obj.deleted_assets = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventUpdateParamsAminoMsg): EventUpdateParams {
    return EventUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: EventUpdateParams): EventUpdateParamsAminoMsg {
    return {
      type: "osmosis/bridge/event-update-params",
      value: EventUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: EventUpdateParamsProtoMsg): EventUpdateParams {
    return EventUpdateParams.decode(message.value);
  },
  toProto(message: EventUpdateParams): Uint8Array {
    return EventUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateParams): EventUpdateParamsProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.EventUpdateParams",
      value: EventUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventUpdateParams.typeUrl, EventUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(EventUpdateParams.aminoType, EventUpdateParams.typeUrl);
function createBaseEventChangeAssetStatus(): EventChangeAssetStatus {
  return {
    sender: "",
    oldAssetStatus: AssetWithStatus.fromPartial({}),
    newAssetStatus: AssetWithStatus.fromPartial({})
  };
}
export const EventChangeAssetStatus = {
  typeUrl: "/osmosis.bridge.v1beta1.EventChangeAssetStatus",
  aminoType: "osmosis/bridge/event-change-asset-status",
  is(o: any): o is EventChangeAssetStatus {
    return o && (o.$typeUrl === EventChangeAssetStatus.typeUrl || typeof o.sender === "string" && AssetWithStatus.is(o.oldAssetStatus) && AssetWithStatus.is(o.newAssetStatus));
  },
  isSDK(o: any): o is EventChangeAssetStatusSDKType {
    return o && (o.$typeUrl === EventChangeAssetStatus.typeUrl || typeof o.sender === "string" && AssetWithStatus.isSDK(o.old_asset_status) && AssetWithStatus.isSDK(o.new_asset_status));
  },
  isAmino(o: any): o is EventChangeAssetStatusAmino {
    return o && (o.$typeUrl === EventChangeAssetStatus.typeUrl || typeof o.sender === "string" && AssetWithStatus.isAmino(o.old_asset_status) && AssetWithStatus.isAmino(o.new_asset_status));
  },
  encode(message: EventChangeAssetStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.oldAssetStatus !== undefined) {
      AssetWithStatus.encode(message.oldAssetStatus, writer.uint32(18).fork()).ldelim();
    }
    if (message.newAssetStatus !== undefined) {
      AssetWithStatus.encode(message.newAssetStatus, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventChangeAssetStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventChangeAssetStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.oldAssetStatus = AssetWithStatus.decode(reader, reader.uint32());
          break;
        case 3:
          message.newAssetStatus = AssetWithStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventChangeAssetStatus>): EventChangeAssetStatus {
    const message = createBaseEventChangeAssetStatus();
    message.sender = object.sender ?? "";
    message.oldAssetStatus = object.oldAssetStatus !== undefined && object.oldAssetStatus !== null ? AssetWithStatus.fromPartial(object.oldAssetStatus) : undefined;
    message.newAssetStatus = object.newAssetStatus !== undefined && object.newAssetStatus !== null ? AssetWithStatus.fromPartial(object.newAssetStatus) : undefined;
    return message;
  },
  fromAmino(object: EventChangeAssetStatusAmino): EventChangeAssetStatus {
    const message = createBaseEventChangeAssetStatus();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.old_asset_status !== undefined && object.old_asset_status !== null) {
      message.oldAssetStatus = AssetWithStatus.fromAmino(object.old_asset_status);
    }
    if (object.new_asset_status !== undefined && object.new_asset_status !== null) {
      message.newAssetStatus = AssetWithStatus.fromAmino(object.new_asset_status);
    }
    return message;
  },
  toAmino(message: EventChangeAssetStatus): EventChangeAssetStatusAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.old_asset_status = message.oldAssetStatus ? AssetWithStatus.toAmino(message.oldAssetStatus) : undefined;
    obj.new_asset_status = message.newAssetStatus ? AssetWithStatus.toAmino(message.newAssetStatus) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventChangeAssetStatusAminoMsg): EventChangeAssetStatus {
    return EventChangeAssetStatus.fromAmino(object.value);
  },
  toAminoMsg(message: EventChangeAssetStatus): EventChangeAssetStatusAminoMsg {
    return {
      type: "osmosis/bridge/event-change-asset-status",
      value: EventChangeAssetStatus.toAmino(message)
    };
  },
  fromProtoMsg(message: EventChangeAssetStatusProtoMsg): EventChangeAssetStatus {
    return EventChangeAssetStatus.decode(message.value);
  },
  toProto(message: EventChangeAssetStatus): Uint8Array {
    return EventChangeAssetStatus.encode(message).finish();
  },
  toProtoMsg(message: EventChangeAssetStatus): EventChangeAssetStatusProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.EventChangeAssetStatus",
      value: EventChangeAssetStatus.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventChangeAssetStatus.typeUrl, EventChangeAssetStatus);
GlobalDecoderRegistry.registerAminoProtoMapping(EventChangeAssetStatus.aminoType, EventChangeAssetStatus.typeUrl);