import { Asset, AssetAmino, AssetSDKType, Params, ParamsAmino, ParamsSDKType, AssetWithStatus, AssetWithStatusAmino, AssetWithStatusSDKType } from "./bridge";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgInboundTransfer defines the message structure for the InboundTransfer gRPC
 * service method. It allows a sender to perform an inbound cross-chain
 * transfer, i.e., to transfer their tokens from the source chain to Osmosis and
 * get the equivalent amount of the corresponding token (specified in subdenom)
 * on Osmosis in return. The tokens are minted through the x/tokenfactory module
 * to the destination address.
 */
export interface MsgInboundTransfer {
  /** Sender is a sender's address */
  sender: string;
  /** DestAddr is a destination Osmosis address */
  destAddr: string;
  /** Asset contains a source chain and a target denom */
  asset: Asset;
  /** Amount of coins to transfer */
  amount: string;
}
export interface MsgInboundTransferProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgInboundTransfer";
  value: Uint8Array;
}
/**
 * MsgInboundTransfer defines the message structure for the InboundTransfer gRPC
 * service method. It allows a sender to perform an inbound cross-chain
 * transfer, i.e., to transfer their tokens from the source chain to Osmosis and
 * get the equivalent amount of the corresponding token (specified in subdenom)
 * on Osmosis in return. The tokens are minted through the x/tokenfactory module
 * to the destination address.
 */
export interface MsgInboundTransferAmino {
  /** Sender is a sender's address */
  sender?: string;
  /** DestAddr is a destination Osmosis address */
  dest_addr?: string;
  /** Asset contains a source chain and a target denom */
  asset?: AssetAmino;
  /** Amount of coins to transfer */
  amount?: string;
}
export interface MsgInboundTransferAminoMsg {
  type: "osmosis/bridge/inbound-transfer";
  value: MsgInboundTransferAmino;
}
/**
 * MsgInboundTransfer defines the message structure for the InboundTransfer gRPC
 * service method. It allows a sender to perform an inbound cross-chain
 * transfer, i.e., to transfer their tokens from the source chain to Osmosis and
 * get the equivalent amount of the corresponding token (specified in subdenom)
 * on Osmosis in return. The tokens are minted through the x/tokenfactory module
 * to the destination address.
 */
export interface MsgInboundTransferSDKType {
  sender: string;
  dest_addr: string;
  asset: AssetSDKType;
  amount: string;
}
export interface MsgInboundTransferResponse {}
export interface MsgInboundTransferResponseProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgInboundTransferResponse";
  value: Uint8Array;
}
export interface MsgInboundTransferResponseAmino {}
export interface MsgInboundTransferResponseAminoMsg {
  type: "osmosis/bridge/inbound-transfer-response";
  value: MsgInboundTransferResponseAmino;
}
export interface MsgInboundTransferResponseSDKType {}
/**
 * MsgOutboundTransfer defines the message structure for the OutboundTransfer
 * gRPC service method. It allows a sender to perform an outbound cross-chain
 * transfer, i.e., to transfer their tokens from Osmosis to the destination
 * chain. The tokens are burned through the x/tokenfactory module from the
 * sender's address.
 */
export interface MsgOutboundTransfer {
  /** Sender is a sender's Osmosis address */
  sender: string;
  /** DestAddr is a destination address */
  destAddr: string;
  /** Asset contains a target chain and a source denom */
  asset: Asset;
  /** Amount of coins to transfer */
  amount: string;
}
export interface MsgOutboundTransferProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgOutboundTransfer";
  value: Uint8Array;
}
/**
 * MsgOutboundTransfer defines the message structure for the OutboundTransfer
 * gRPC service method. It allows a sender to perform an outbound cross-chain
 * transfer, i.e., to transfer their tokens from Osmosis to the destination
 * chain. The tokens are burned through the x/tokenfactory module from the
 * sender's address.
 */
export interface MsgOutboundTransferAmino {
  /** Sender is a sender's Osmosis address */
  sender?: string;
  /** DestAddr is a destination address */
  dest_addr?: string;
  /** Asset contains a target chain and a source denom */
  asset?: AssetAmino;
  /** Amount of coins to transfer */
  amount?: string;
}
export interface MsgOutboundTransferAminoMsg {
  type: "osmosis/bridge/outbound-transfer";
  value: MsgOutboundTransferAmino;
}
/**
 * MsgOutboundTransfer defines the message structure for the OutboundTransfer
 * gRPC service method. It allows a sender to perform an outbound cross-chain
 * transfer, i.e., to transfer their tokens from Osmosis to the destination
 * chain. The tokens are burned through the x/tokenfactory module from the
 * sender's address.
 */
export interface MsgOutboundTransferSDKType {
  sender: string;
  dest_addr: string;
  asset: AssetSDKType;
  amount: string;
}
export interface MsgOutboundTransferResponse {}
export interface MsgOutboundTransferResponseProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgOutboundTransferResponse";
  value: Uint8Array;
}
export interface MsgOutboundTransferResponseAmino {}
export interface MsgOutboundTransferResponseAminoMsg {
  type: "osmosis/bridge/outbound-transfer-response";
  value: MsgOutboundTransferResponseAmino;
}
export interface MsgOutboundTransferResponseSDKType {}
/**
 * MsgUpdateParams allows to update module params. It contains UpdateParams
 * instead of just Params to forbid status updating using this method.
 * All new assets introduced with this method have ASSET_STATUS_BLOCKED_BOTH
 * status by default.
 */
export interface MsgUpdateParams {
  /** Sender is a sender's address */
  sender: string;
  /** NewParams should be fully populated */
  newParams: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams allows to update module params. It contains UpdateParams
 * instead of just Params to forbid status updating using this method.
 * All new assets introduced with this method have ASSET_STATUS_BLOCKED_BOTH
 * status by default.
 */
export interface MsgUpdateParamsAmino {
  /** Sender is a sender's address */
  sender?: string;
  /** NewParams should be fully populated */
  new_params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "osmosis/bridge/update-params";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams allows to update module params. It contains UpdateParams
 * instead of just Params to forbid status updating using this method.
 * All new assets introduced with this method have ASSET_STATUS_BLOCKED_BOTH
 * status by default.
 */
export interface MsgUpdateParamsSDKType {
  sender: string;
  new_params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "osmosis/bridge/update-params-response";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
/** MsgChangeAssetStatus changes the status of the provided asset. */
export interface MsgChangeAssetStatus {
  /** Sender is a sender's address */
  sender: string;
  /**
   * NewAssetStatus is a pair of the asset and its new status.
   * The asset should be known; otherwise, the method will failed.
   */
  newAssetStatus: AssetWithStatus;
}
export interface MsgChangeAssetStatusProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgChangeAssetStatus";
  value: Uint8Array;
}
/** MsgChangeAssetStatus changes the status of the provided asset. */
export interface MsgChangeAssetStatusAmino {
  /** Sender is a sender's address */
  sender?: string;
  /**
   * NewAssetStatus is a pair of the asset and its new status.
   * The asset should be known; otherwise, the method will failed.
   */
  new_asset_status?: AssetWithStatusAmino;
}
export interface MsgChangeAssetStatusAminoMsg {
  type: "osmosis/bridge/change-asset-status";
  value: MsgChangeAssetStatusAmino;
}
/** MsgChangeAssetStatus changes the status of the provided asset. */
export interface MsgChangeAssetStatusSDKType {
  sender: string;
  new_asset_status: AssetWithStatusSDKType;
}
export interface MsgChangeAssetStatusResponse {}
export interface MsgChangeAssetStatusResponseProtoMsg {
  typeUrl: "/osmosis.bridge.v1beta1.MsgChangeAssetStatusResponse";
  value: Uint8Array;
}
export interface MsgChangeAssetStatusResponseAmino {}
export interface MsgChangeAssetStatusResponseAminoMsg {
  type: "osmosis/bridge/change-asset-status-response";
  value: MsgChangeAssetStatusResponseAmino;
}
export interface MsgChangeAssetStatusResponseSDKType {}
function createBaseMsgInboundTransfer(): MsgInboundTransfer {
  return {
    sender: "",
    destAddr: "",
    asset: Asset.fromPartial({}),
    amount: ""
  };
}
export const MsgInboundTransfer = {
  typeUrl: "/osmosis.bridge.v1beta1.MsgInboundTransfer",
  aminoType: "osmosis/bridge/inbound-transfer",
  is(o: any): o is MsgInboundTransfer {
    return o && (o.$typeUrl === MsgInboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.destAddr === "string" && Asset.is(o.asset) && typeof o.amount === "string");
  },
  isSDK(o: any): o is MsgInboundTransferSDKType {
    return o && (o.$typeUrl === MsgInboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.dest_addr === "string" && Asset.isSDK(o.asset) && typeof o.amount === "string");
  },
  isAmino(o: any): o is MsgInboundTransferAmino {
    return o && (o.$typeUrl === MsgInboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.dest_addr === "string" && Asset.isAmino(o.asset) && typeof o.amount === "string");
  },
  encode(message: MsgInboundTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInboundTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInboundTransfer();
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
  fromPartial(object: Partial<MsgInboundTransfer>): MsgInboundTransfer {
    const message = createBaseMsgInboundTransfer();
    message.sender = object.sender ?? "";
    message.destAddr = object.destAddr ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgInboundTransferAmino): MsgInboundTransfer {
    const message = createBaseMsgInboundTransfer();
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
  toAmino(message: MsgInboundTransfer): MsgInboundTransferAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.dest_addr = message.destAddr;
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgInboundTransferAminoMsg): MsgInboundTransfer {
    return MsgInboundTransfer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInboundTransfer): MsgInboundTransferAminoMsg {
    return {
      type: "osmosis/bridge/inbound-transfer",
      value: MsgInboundTransfer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInboundTransferProtoMsg): MsgInboundTransfer {
    return MsgInboundTransfer.decode(message.value);
  },
  toProto(message: MsgInboundTransfer): Uint8Array {
    return MsgInboundTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgInboundTransfer): MsgInboundTransferProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.MsgInboundTransfer",
      value: MsgInboundTransfer.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInboundTransfer.typeUrl, MsgInboundTransfer);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInboundTransfer.aminoType, MsgInboundTransfer.typeUrl);
function createBaseMsgInboundTransferResponse(): MsgInboundTransferResponse {
  return {};
}
export const MsgInboundTransferResponse = {
  typeUrl: "/osmosis.bridge.v1beta1.MsgInboundTransferResponse",
  aminoType: "osmosis/bridge/inbound-transfer-response",
  is(o: any): o is MsgInboundTransferResponse {
    return o && o.$typeUrl === MsgInboundTransferResponse.typeUrl;
  },
  isSDK(o: any): o is MsgInboundTransferResponseSDKType {
    return o && o.$typeUrl === MsgInboundTransferResponse.typeUrl;
  },
  isAmino(o: any): o is MsgInboundTransferResponseAmino {
    return o && o.$typeUrl === MsgInboundTransferResponse.typeUrl;
  },
  encode(_: MsgInboundTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInboundTransferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInboundTransferResponse();
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
  fromPartial(_: Partial<MsgInboundTransferResponse>): MsgInboundTransferResponse {
    const message = createBaseMsgInboundTransferResponse();
    return message;
  },
  fromAmino(_: MsgInboundTransferResponseAmino): MsgInboundTransferResponse {
    const message = createBaseMsgInboundTransferResponse();
    return message;
  },
  toAmino(_: MsgInboundTransferResponse): MsgInboundTransferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgInboundTransferResponseAminoMsg): MsgInboundTransferResponse {
    return MsgInboundTransferResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInboundTransferResponse): MsgInboundTransferResponseAminoMsg {
    return {
      type: "osmosis/bridge/inbound-transfer-response",
      value: MsgInboundTransferResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInboundTransferResponseProtoMsg): MsgInboundTransferResponse {
    return MsgInboundTransferResponse.decode(message.value);
  },
  toProto(message: MsgInboundTransferResponse): Uint8Array {
    return MsgInboundTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInboundTransferResponse): MsgInboundTransferResponseProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.MsgInboundTransferResponse",
      value: MsgInboundTransferResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInboundTransferResponse.typeUrl, MsgInboundTransferResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInboundTransferResponse.aminoType, MsgInboundTransferResponse.typeUrl);
function createBaseMsgOutboundTransfer(): MsgOutboundTransfer {
  return {
    sender: "",
    destAddr: "",
    asset: Asset.fromPartial({}),
    amount: ""
  };
}
export const MsgOutboundTransfer = {
  typeUrl: "/osmosis.bridge.v1beta1.MsgOutboundTransfer",
  aminoType: "osmosis/bridge/outbound-transfer",
  is(o: any): o is MsgOutboundTransfer {
    return o && (o.$typeUrl === MsgOutboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.destAddr === "string" && Asset.is(o.asset) && typeof o.amount === "string");
  },
  isSDK(o: any): o is MsgOutboundTransferSDKType {
    return o && (o.$typeUrl === MsgOutboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.dest_addr === "string" && Asset.isSDK(o.asset) && typeof o.amount === "string");
  },
  isAmino(o: any): o is MsgOutboundTransferAmino {
    return o && (o.$typeUrl === MsgOutboundTransfer.typeUrl || typeof o.sender === "string" && typeof o.dest_addr === "string" && Asset.isAmino(o.asset) && typeof o.amount === "string");
  },
  encode(message: MsgOutboundTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOutboundTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOutboundTransfer();
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
  fromPartial(object: Partial<MsgOutboundTransfer>): MsgOutboundTransfer {
    const message = createBaseMsgOutboundTransfer();
    message.sender = object.sender ?? "";
    message.destAddr = object.destAddr ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgOutboundTransferAmino): MsgOutboundTransfer {
    const message = createBaseMsgOutboundTransfer();
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
  toAmino(message: MsgOutboundTransfer): MsgOutboundTransferAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.dest_addr = message.destAddr;
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgOutboundTransferAminoMsg): MsgOutboundTransfer {
    return MsgOutboundTransfer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgOutboundTransfer): MsgOutboundTransferAminoMsg {
    return {
      type: "osmosis/bridge/outbound-transfer",
      value: MsgOutboundTransfer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgOutboundTransferProtoMsg): MsgOutboundTransfer {
    return MsgOutboundTransfer.decode(message.value);
  },
  toProto(message: MsgOutboundTransfer): Uint8Array {
    return MsgOutboundTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgOutboundTransfer): MsgOutboundTransferProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.MsgOutboundTransfer",
      value: MsgOutboundTransfer.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgOutboundTransfer.typeUrl, MsgOutboundTransfer);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgOutboundTransfer.aminoType, MsgOutboundTransfer.typeUrl);
function createBaseMsgOutboundTransferResponse(): MsgOutboundTransferResponse {
  return {};
}
export const MsgOutboundTransferResponse = {
  typeUrl: "/osmosis.bridge.v1beta1.MsgOutboundTransferResponse",
  aminoType: "osmosis/bridge/outbound-transfer-response",
  is(o: any): o is MsgOutboundTransferResponse {
    return o && o.$typeUrl === MsgOutboundTransferResponse.typeUrl;
  },
  isSDK(o: any): o is MsgOutboundTransferResponseSDKType {
    return o && o.$typeUrl === MsgOutboundTransferResponse.typeUrl;
  },
  isAmino(o: any): o is MsgOutboundTransferResponseAmino {
    return o && o.$typeUrl === MsgOutboundTransferResponse.typeUrl;
  },
  encode(_: MsgOutboundTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOutboundTransferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOutboundTransferResponse();
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
  fromPartial(_: Partial<MsgOutboundTransferResponse>): MsgOutboundTransferResponse {
    const message = createBaseMsgOutboundTransferResponse();
    return message;
  },
  fromAmino(_: MsgOutboundTransferResponseAmino): MsgOutboundTransferResponse {
    const message = createBaseMsgOutboundTransferResponse();
    return message;
  },
  toAmino(_: MsgOutboundTransferResponse): MsgOutboundTransferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgOutboundTransferResponseAminoMsg): MsgOutboundTransferResponse {
    return MsgOutboundTransferResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgOutboundTransferResponse): MsgOutboundTransferResponseAminoMsg {
    return {
      type: "osmosis/bridge/outbound-transfer-response",
      value: MsgOutboundTransferResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgOutboundTransferResponseProtoMsg): MsgOutboundTransferResponse {
    return MsgOutboundTransferResponse.decode(message.value);
  },
  toProto(message: MsgOutboundTransferResponse): Uint8Array {
    return MsgOutboundTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgOutboundTransferResponse): MsgOutboundTransferResponseProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.MsgOutboundTransferResponse",
      value: MsgOutboundTransferResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgOutboundTransferResponse.typeUrl, MsgOutboundTransferResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgOutboundTransferResponse.aminoType, MsgOutboundTransferResponse.typeUrl);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    sender: "",
    newParams: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/osmosis.bridge.v1beta1.MsgUpdateParams",
  aminoType: "osmosis/bridge/update-params",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.sender === "string" && Params.is(o.newParams));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.sender === "string" && Params.isSDK(o.new_params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.sender === "string" && Params.isAmino(o.new_params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.newParams !== undefined) {
      Params.encode(message.newParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.newParams = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.sender = object.sender ?? "";
    message.newParams = object.newParams !== undefined && object.newParams !== null ? Params.fromPartial(object.newParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.new_params !== undefined && object.new_params !== null) {
      message.newParams = Params.fromAmino(object.new_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.new_params = message.newParams ? Params.toAmino(message.newParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "osmosis/bridge/update-params",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/osmosis.bridge.v1beta1.MsgUpdateParamsResponse",
  aminoType: "osmosis/bridge/update-params-response",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "osmosis/bridge/update-params-response",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParamsResponse.aminoType, MsgUpdateParamsResponse.typeUrl);
function createBaseMsgChangeAssetStatus(): MsgChangeAssetStatus {
  return {
    sender: "",
    newAssetStatus: AssetWithStatus.fromPartial({})
  };
}
export const MsgChangeAssetStatus = {
  typeUrl: "/osmosis.bridge.v1beta1.MsgChangeAssetStatus",
  aminoType: "osmosis/bridge/change-asset-status",
  is(o: any): o is MsgChangeAssetStatus {
    return o && (o.$typeUrl === MsgChangeAssetStatus.typeUrl || typeof o.sender === "string" && AssetWithStatus.is(o.newAssetStatus));
  },
  isSDK(o: any): o is MsgChangeAssetStatusSDKType {
    return o && (o.$typeUrl === MsgChangeAssetStatus.typeUrl || typeof o.sender === "string" && AssetWithStatus.isSDK(o.new_asset_status));
  },
  isAmino(o: any): o is MsgChangeAssetStatusAmino {
    return o && (o.$typeUrl === MsgChangeAssetStatus.typeUrl || typeof o.sender === "string" && AssetWithStatus.isAmino(o.new_asset_status));
  },
  encode(message: MsgChangeAssetStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.newAssetStatus !== undefined) {
      AssetWithStatus.encode(message.newAssetStatus, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAssetStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAssetStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.newAssetStatus = AssetWithStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChangeAssetStatus>): MsgChangeAssetStatus {
    const message = createBaseMsgChangeAssetStatus();
    message.sender = object.sender ?? "";
    message.newAssetStatus = object.newAssetStatus !== undefined && object.newAssetStatus !== null ? AssetWithStatus.fromPartial(object.newAssetStatus) : undefined;
    return message;
  },
  fromAmino(object: MsgChangeAssetStatusAmino): MsgChangeAssetStatus {
    const message = createBaseMsgChangeAssetStatus();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.new_asset_status !== undefined && object.new_asset_status !== null) {
      message.newAssetStatus = AssetWithStatus.fromAmino(object.new_asset_status);
    }
    return message;
  },
  toAmino(message: MsgChangeAssetStatus): MsgChangeAssetStatusAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.new_asset_status = message.newAssetStatus ? AssetWithStatus.toAmino(message.newAssetStatus) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgChangeAssetStatusAminoMsg): MsgChangeAssetStatus {
    return MsgChangeAssetStatus.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChangeAssetStatus): MsgChangeAssetStatusAminoMsg {
    return {
      type: "osmosis/bridge/change-asset-status",
      value: MsgChangeAssetStatus.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChangeAssetStatusProtoMsg): MsgChangeAssetStatus {
    return MsgChangeAssetStatus.decode(message.value);
  },
  toProto(message: MsgChangeAssetStatus): Uint8Array {
    return MsgChangeAssetStatus.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeAssetStatus): MsgChangeAssetStatusProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.MsgChangeAssetStatus",
      value: MsgChangeAssetStatus.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChangeAssetStatus.typeUrl, MsgChangeAssetStatus);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChangeAssetStatus.aminoType, MsgChangeAssetStatus.typeUrl);
function createBaseMsgChangeAssetStatusResponse(): MsgChangeAssetStatusResponse {
  return {};
}
export const MsgChangeAssetStatusResponse = {
  typeUrl: "/osmosis.bridge.v1beta1.MsgChangeAssetStatusResponse",
  aminoType: "osmosis/bridge/change-asset-status-response",
  is(o: any): o is MsgChangeAssetStatusResponse {
    return o && o.$typeUrl === MsgChangeAssetStatusResponse.typeUrl;
  },
  isSDK(o: any): o is MsgChangeAssetStatusResponseSDKType {
    return o && o.$typeUrl === MsgChangeAssetStatusResponse.typeUrl;
  },
  isAmino(o: any): o is MsgChangeAssetStatusResponseAmino {
    return o && o.$typeUrl === MsgChangeAssetStatusResponse.typeUrl;
  },
  encode(_: MsgChangeAssetStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAssetStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAssetStatusResponse();
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
  fromPartial(_: Partial<MsgChangeAssetStatusResponse>): MsgChangeAssetStatusResponse {
    const message = createBaseMsgChangeAssetStatusResponse();
    return message;
  },
  fromAmino(_: MsgChangeAssetStatusResponseAmino): MsgChangeAssetStatusResponse {
    const message = createBaseMsgChangeAssetStatusResponse();
    return message;
  },
  toAmino(_: MsgChangeAssetStatusResponse): MsgChangeAssetStatusResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeAssetStatusResponseAminoMsg): MsgChangeAssetStatusResponse {
    return MsgChangeAssetStatusResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChangeAssetStatusResponse): MsgChangeAssetStatusResponseAminoMsg {
    return {
      type: "osmosis/bridge/change-asset-status-response",
      value: MsgChangeAssetStatusResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChangeAssetStatusResponseProtoMsg): MsgChangeAssetStatusResponse {
    return MsgChangeAssetStatusResponse.decode(message.value);
  },
  toProto(message: MsgChangeAssetStatusResponse): Uint8Array {
    return MsgChangeAssetStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeAssetStatusResponse): MsgChangeAssetStatusResponseProtoMsg {
    return {
      typeUrl: "/osmosis.bridge.v1beta1.MsgChangeAssetStatusResponse",
      value: MsgChangeAssetStatusResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgChangeAssetStatusResponse.typeUrl, MsgChangeAssetStatusResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChangeAssetStatusResponse.aminoType, MsgChangeAssetStatusResponse.typeUrl);