//@ts-nocheck
import { AssetID, AssetIDAmino, AssetIDSDKType, Asset, AssetAmino, AssetSDKType, AssetStatus } from "./bridge";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export interface EventInboundTransfer {
  /** Sender is a sender's address */
  sender: string;
  /** DestAddr is a destination Osmosis address */
  destAddr: string;
  /** AssetID is the ID of the asset being transferred */
  assetId: AssetID;
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
  /** AssetID is the ID of the asset being transferred */
  asset_id?: AssetIDAmino;
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
  asset_id: AssetIDSDKType;
  amount: string;
}
export interface EventOutboundTransfer {
  /** Sender is a sender's address */
  sender: string;
  /** DestAddr is a destination Osmosis address */
  destAddr: string;
  /** AssetID is the ID of the asset being transferred */
  assetId: AssetID;
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
  /** AssetID is the ID of the asset being transferred */
  asset_id?: AssetIDAmino;
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
  asset_id: AssetIDSDKType;
  amount: string;
}
export interface EventUpdateParams {
  newSigners: string[];
  createdSigners: string[];
  deletedSigners: string[];
  newAssets: Asset[];
  createdAssets: Asset[];
  deletedAssets: Asset[];
  newVotesNeeded: bigint;
  newFee: string;
}
export interface EventUpdateParamsProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.EventUpdateParams";
  value: Uint8Array;
}
export interface EventUpdateParamsAmino {
  new_signers?: string[];
  created_signers?: string[];
  deleted_signers?: string[];
  new_assets?: AssetAmino[];
  created_assets?: AssetAmino[];
  deleted_assets?: AssetAmino[];
  new_votes_needed?: string;
  new_fee?: string;
}
export interface EventUpdateParamsAminoMsg {
  type: "osmosis/bridge/event-update-params";
  value: EventUpdateParamsAmino;
}
export interface EventUpdateParamsSDKType {
  new_signers: string[];
  created_signers: string[];
  deleted_signers: string[];
  new_assets: AssetSDKType[];
  created_assets: AssetSDKType[];
  deleted_assets: AssetSDKType[];
  new_votes_needed: bigint;
  new_fee: string;
}
export interface EventChangeAssetStatus {
  sender: string;
  assetId: AssetID;
  oldStatus: AssetStatus;
  newStatus: AssetStatus;
}
export interface EventChangeAssetStatusProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.EventChangeAssetStatus";
  value: Uint8Array;
}
export interface EventChangeAssetStatusAmino {
  sender?: string;
  asset_id?: AssetIDAmino;
  old_status?: AssetStatus;
  new_status?: AssetStatus;
}
export interface EventChangeAssetStatusAminoMsg {
  type: "osmosis/bridge/event-change-asset-status";
  value: EventChangeAssetStatusAmino;
}
export interface EventChangeAssetStatusSDKType {
  sender: string;
  asset_id: AssetIDSDKType;
  old_status: AssetStatus;
  new_status: AssetStatus;
}
function createBaseEventInboundTransfer(): EventInboundTransfer {
  return {
    sender: "",
    destAddr: "",
    assetId: AssetID.fromPartial({}),
    amount: ""
  };
}
export const EventInboundTransfer = {
  typeUrl: "/osmosis.bridge.v1beta1.EventInboundTransfer",
  aminoType: "osmosis/bridge/event-inbound-transfer",
  is(o: any): o is EventInboundTransfer {
    return o && (o.$typeUrl === EventInboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.destAddr === "string" && AssetID.is(o.assetId) && typeof o.amount === "string");
  },
  isSDK(o: any): o is EventInboundTransferSDKType {
    return o && (o.$typeUrl === EventInboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.dest_addr === "string" && AssetID.isSDK(o.asset_id) && typeof o.amount === "string");
  },
  isAmino(o: any): o is EventInboundTransferAmino {
    return o && (o.$typeUrl === EventInboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.dest_addr === "string" && AssetID.isAmino(o.asset_id) && typeof o.amount === "string");
  },
  encode(message: EventInboundTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.destAddr !== "") {
      writer.uint32(18).string(message.destAddr);
    }
    if (message.assetId !== undefined) {
      AssetID.encode(message.assetId, writer.uint32(26).fork()).ldelim();
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
          message.assetId = AssetID.decode(reader, reader.uint32());
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
    message.assetId = object.assetId !== undefined && object.assetId !== null ? AssetID.fromPartial(object.assetId) : undefined;
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
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = AssetID.fromAmino(object.asset_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventInboundTransfer): EventInboundTransferAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.dest_addr = message.destAddr === "" ? undefined : message.destAddr;
    obj.asset_id = message.assetId ? AssetID.toAmino(message.assetId) : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
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
    assetId: AssetID.fromPartial({}),
    amount: ""
  };
}
export const EventOutboundTransfer = {
  typeUrl: "/osmosis.bridge.v1beta1.EventOutboundTransfer",
  aminoType: "osmosis/bridge/event-outbound-transfer",
  is(o: any): o is EventOutboundTransfer {
    return o && (o.$typeUrl === EventOutboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.destAddr === "string" && AssetID.is(o.assetId) && typeof o.amount === "string");
  },
  isSDK(o: any): o is EventOutboundTransferSDKType {
    return o && (o.$typeUrl === EventOutboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.dest_addr === "string" && AssetID.isSDK(o.asset_id) && typeof o.amount === "string");
  },
  isAmino(o: any): o is EventOutboundTransferAmino {
    return o && (o.$typeUrl === EventOutboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.dest_addr === "string" && AssetID.isAmino(o.asset_id) && typeof o.amount === "string");
  },
  encode(message: EventOutboundTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.destAddr !== "") {
      writer.uint32(18).string(message.destAddr);
    }
    if (message.assetId !== undefined) {
      AssetID.encode(message.assetId, writer.uint32(26).fork()).ldelim();
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
          message.assetId = AssetID.decode(reader, reader.uint32());
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
    message.assetId = object.assetId !== undefined && object.assetId !== null ? AssetID.fromPartial(object.assetId) : undefined;
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
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = AssetID.fromAmino(object.asset_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventOutboundTransfer): EventOutboundTransferAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.dest_addr = message.destAddr === "" ? undefined : message.destAddr;
    obj.asset_id = message.assetId ? AssetID.toAmino(message.assetId) : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
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
    deletedAssets: [],
    newVotesNeeded: BigInt(0),
    newFee: ""
  };
}
export const EventUpdateParams = {
  typeUrl: "/osmosis.bridge.v1beta1.EventUpdateParams",
  aminoType: "osmosis/bridge/event-update-params",
  is(o: any): o is EventUpdateParams {
    return o && (o.$typeUrl === EventUpdateParams.typeUrl || Array.isArray(o.newSigners) && (!o.newSigners.length || typeof o.newSigners[0] === "string") && Array.isArray(o.createdSigners) && (!o.createdSigners.length || typeof o.createdSigners[0] === "string") && Array.isArray(o.deletedSigners) && (!o.deletedSigners.length || typeof o.deletedSigners[0] === "string") && Array.isArray(o.newAssets) && (!o.newAssets.length || Asset.is(o.newAssets[0])) && Array.isArray(o.createdAssets) && (!o.createdAssets.length || Asset.is(o.createdAssets[0])) && Array.isArray(o.deletedAssets) && (!o.deletedAssets.length || Asset.is(o.deletedAssets[0])) && typeof o.newVotesNeeded === "bigint" && typeof o.newFee === "string");
  },
  isSDK(o: any): o is EventUpdateParamsSDKType {
    return o && (o.$typeUrl === EventUpdateParams.typeUrl || Array.isArray(o.new_signers) && (!o.new_signers.length || typeof o.new_signers[0] === "string") && Array.isArray(o.created_signers) && (!o.created_signers.length || typeof o.created_signers[0] === "string") && Array.isArray(o.deleted_signers) && (!o.deleted_signers.length || typeof o.deleted_signers[0] === "string") && Array.isArray(o.new_assets) && (!o.new_assets.length || Asset.isSDK(o.new_assets[0])) && Array.isArray(o.created_assets) && (!o.created_assets.length || Asset.isSDK(o.created_assets[0])) && Array.isArray(o.deleted_assets) && (!o.deleted_assets.length || Asset.isSDK(o.deleted_assets[0])) && typeof o.new_votes_needed === "bigint" && typeof o.new_fee === "string");
  },
  isAmino(o: any): o is EventUpdateParamsAmino {
    return o && (o.$typeUrl === EventUpdateParams.typeUrl || Array.isArray(o.new_signers) && (!o.new_signers.length || typeof o.new_signers[0] === "string") && Array.isArray(o.created_signers) && (!o.created_signers.length || typeof o.created_signers[0] === "string") && Array.isArray(o.deleted_signers) && (!o.deleted_signers.length || typeof o.deleted_signers[0] === "string") && Array.isArray(o.new_assets) && (!o.new_assets.length || Asset.isAmino(o.new_assets[0])) && Array.isArray(o.created_assets) && (!o.created_assets.length || Asset.isAmino(o.created_assets[0])) && Array.isArray(o.deleted_assets) && (!o.deleted_assets.length || Asset.isAmino(o.deleted_assets[0])) && typeof o.new_votes_needed === "bigint" && typeof o.new_fee === "string");
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
      Asset.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.createdAssets) {
      Asset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.deletedAssets) {
      Asset.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.newVotesNeeded !== BigInt(0)) {
      writer.uint32(56).uint64(message.newVotesNeeded);
    }
    if (message.newFee !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.newFee, 18).atomics);
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
          message.newAssets.push(Asset.decode(reader, reader.uint32()));
          break;
        case 5:
          message.createdAssets.push(Asset.decode(reader, reader.uint32()));
          break;
        case 6:
          message.deletedAssets.push(Asset.decode(reader, reader.uint32()));
          break;
        case 7:
          message.newVotesNeeded = reader.uint64();
          break;
        case 8:
          message.newFee = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.newAssets = object.newAssets?.map(e => Asset.fromPartial(e)) || [];
    message.createdAssets = object.createdAssets?.map(e => Asset.fromPartial(e)) || [];
    message.deletedAssets = object.deletedAssets?.map(e => Asset.fromPartial(e)) || [];
    message.newVotesNeeded = object.newVotesNeeded !== undefined && object.newVotesNeeded !== null ? BigInt(object.newVotesNeeded.toString()) : BigInt(0);
    message.newFee = object.newFee ?? "";
    return message;
  },
  fromAmino(object: EventUpdateParamsAmino): EventUpdateParams {
    const message = createBaseEventUpdateParams();
    message.newSigners = object.new_signers?.map(e => e) || [];
    message.createdSigners = object.created_signers?.map(e => e) || [];
    message.deletedSigners = object.deleted_signers?.map(e => e) || [];
    message.newAssets = object.new_assets?.map(e => Asset.fromAmino(e)) || [];
    message.createdAssets = object.created_assets?.map(e => Asset.fromAmino(e)) || [];
    message.deletedAssets = object.deleted_assets?.map(e => Asset.fromAmino(e)) || [];
    if (object.new_votes_needed !== undefined && object.new_votes_needed !== null) {
      message.newVotesNeeded = BigInt(object.new_votes_needed);
    }
    if (object.new_fee !== undefined && object.new_fee !== null) {
      message.newFee = object.new_fee;
    }
    return message;
  },
  toAmino(message: EventUpdateParams): EventUpdateParamsAmino {
    const obj: any = {};
    if (message.newSigners) {
      obj.new_signers = message.newSigners.map(e => e);
    } else {
      obj.new_signers = message.newSigners;
    }
    if (message.createdSigners) {
      obj.created_signers = message.createdSigners.map(e => e);
    } else {
      obj.created_signers = message.createdSigners;
    }
    if (message.deletedSigners) {
      obj.deleted_signers = message.deletedSigners.map(e => e);
    } else {
      obj.deleted_signers = message.deletedSigners;
    }
    if (message.newAssets) {
      obj.new_assets = message.newAssets.map(e => e ? Asset.toAmino(e) : undefined);
    } else {
      obj.new_assets = message.newAssets;
    }
    if (message.createdAssets) {
      obj.created_assets = message.createdAssets.map(e => e ? Asset.toAmino(e) : undefined);
    } else {
      obj.created_assets = message.createdAssets;
    }
    if (message.deletedAssets) {
      obj.deleted_assets = message.deletedAssets.map(e => e ? Asset.toAmino(e) : undefined);
    } else {
      obj.deleted_assets = message.deletedAssets;
    }
    obj.new_votes_needed = message.newVotesNeeded !== BigInt(0) ? message.newVotesNeeded.toString() : undefined;
    obj.new_fee = message.newFee === "" ? undefined : message.newFee;
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
    assetId: AssetID.fromPartial({}),
    oldStatus: 0,
    newStatus: 0
  };
}
export const EventChangeAssetStatus = {
  typeUrl: "/osmosis.bridge.v1beta1.EventChangeAssetStatus",
  aminoType: "osmosis/bridge/event-change-asset-status",
  is(o: any): o is EventChangeAssetStatus {
    return o && (o.$typeUrl === EventChangeAssetStatus.typeUrl || typeof o.sender === "string" && AssetID.is(o.assetId) && isSet(o.oldStatus) && isSet(o.newStatus));
  },
  isSDK(o: any): o is EventChangeAssetStatusSDKType {
    return o && (o.$typeUrl === EventChangeAssetStatus.typeUrl || typeof o.sender === "string" && AssetID.isSDK(o.asset_id) && isSet(o.old_status) && isSet(o.new_status));
  },
  isAmino(o: any): o is EventChangeAssetStatusAmino {
    return o && (o.$typeUrl === EventChangeAssetStatus.typeUrl || typeof o.sender === "string" && AssetID.isAmino(o.asset_id) && isSet(o.old_status) && isSet(o.new_status));
  },
  encode(message: EventChangeAssetStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.assetId !== undefined) {
      AssetID.encode(message.assetId, writer.uint32(18).fork()).ldelim();
    }
    if (message.oldStatus !== 0) {
      writer.uint32(24).int32(message.oldStatus);
    }
    if (message.newStatus !== 0) {
      writer.uint32(32).int32(message.newStatus);
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
          message.assetId = AssetID.decode(reader, reader.uint32());
          break;
        case 3:
          message.oldStatus = (reader.int32() as any);
          break;
        case 4:
          message.newStatus = (reader.int32() as any);
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
    message.assetId = object.assetId !== undefined && object.assetId !== null ? AssetID.fromPartial(object.assetId) : undefined;
    message.oldStatus = object.oldStatus ?? 0;
    message.newStatus = object.newStatus ?? 0;
    return message;
  },
  fromAmino(object: EventChangeAssetStatusAmino): EventChangeAssetStatus {
    const message = createBaseEventChangeAssetStatus();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = AssetID.fromAmino(object.asset_id);
    }
    if (object.old_status !== undefined && object.old_status !== null) {
      message.oldStatus = object.old_status;
    }
    if (object.new_status !== undefined && object.new_status !== null) {
      message.newStatus = object.new_status;
    }
    return message;
  },
  toAmino(message: EventChangeAssetStatus): EventChangeAssetStatusAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.asset_id = message.assetId ? AssetID.toAmino(message.assetId) : undefined;
    obj.old_status = message.oldStatus === 0 ? undefined : message.oldStatus;
    obj.new_status = message.newStatus === 0 ? undefined : message.newStatus;
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