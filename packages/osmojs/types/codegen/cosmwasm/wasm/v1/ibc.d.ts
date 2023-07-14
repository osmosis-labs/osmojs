import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgIBCSend */
export interface MsgIBCSend {
    /** the channel by which the packet will be sent */
    channel: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeoutHeight: bigint;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: bigint;
    /**
     * Data is the payload to transfer. We must not make assumption what format or
     * content is in here.
     */
    data: Uint8Array;
}
export interface MsgIBCSendProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend";
    value: Uint8Array;
}
/** MsgIBCSend */
export interface MsgIBCSendAmino {
    /** the channel by which the packet will be sent */
    channel: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeout_height: string;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeout_timestamp: string;
    /**
     * Data is the payload to transfer. We must not make assumption what format or
     * content is in here.
     */
    data: Uint8Array;
}
export interface MsgIBCSendAminoMsg {
    type: "wasm/MsgIBCSend";
    value: MsgIBCSendAmino;
}
/** MsgIBCSend */
export interface MsgIBCSendSDKType {
    channel: string;
    timeout_height: bigint;
    timeout_timestamp: bigint;
    data: Uint8Array;
}
/** MsgIBCSendResponse */
export interface MsgIBCSendResponse {
    /** Sequence number of the IBC packet sent */
    sequence: bigint;
}
export interface MsgIBCSendResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCSendResponse";
    value: Uint8Array;
}
/** MsgIBCSendResponse */
export interface MsgIBCSendResponseAmino {
    /** Sequence number of the IBC packet sent */
    sequence: string;
}
export interface MsgIBCSendResponseAminoMsg {
    type: "wasm/MsgIBCSendResponse";
    value: MsgIBCSendResponseAmino;
}
/** MsgIBCSendResponse */
export interface MsgIBCSendResponseSDKType {
    sequence: bigint;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
    channel: string;
}
export interface MsgIBCCloseChannelProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel";
    value: Uint8Array;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannelAmino {
    channel: string;
}
export interface MsgIBCCloseChannelAminoMsg {
    type: "wasm/MsgIBCCloseChannel";
    value: MsgIBCCloseChannelAmino;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannelSDKType {
    channel: string;
}
export declare const MsgIBCSend: {
    typeUrl: string;
    encode(message: MsgIBCSend, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSend;
    fromPartial(object: Partial<MsgIBCSend>): MsgIBCSend;
    fromAmino(object: MsgIBCSendAmino): MsgIBCSend;
    toAmino(message: MsgIBCSend): MsgIBCSendAmino;
    fromAminoMsg(object: MsgIBCSendAminoMsg): MsgIBCSend;
    toAminoMsg(message: MsgIBCSend): MsgIBCSendAminoMsg;
    fromProtoMsg(message: MsgIBCSendProtoMsg): MsgIBCSend;
    toProto(message: MsgIBCSend): Uint8Array;
    toProtoMsg(message: MsgIBCSend): MsgIBCSendProtoMsg;
};
export declare const MsgIBCSendResponse: {
    typeUrl: string;
    encode(message: MsgIBCSendResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSendResponse;
    fromPartial(object: Partial<MsgIBCSendResponse>): MsgIBCSendResponse;
    fromAmino(object: MsgIBCSendResponseAmino): MsgIBCSendResponse;
    toAmino(message: MsgIBCSendResponse): MsgIBCSendResponseAmino;
    fromAminoMsg(object: MsgIBCSendResponseAminoMsg): MsgIBCSendResponse;
    toAminoMsg(message: MsgIBCSendResponse): MsgIBCSendResponseAminoMsg;
    fromProtoMsg(message: MsgIBCSendResponseProtoMsg): MsgIBCSendResponse;
    toProto(message: MsgIBCSendResponse): Uint8Array;
    toProtoMsg(message: MsgIBCSendResponse): MsgIBCSendResponseProtoMsg;
};
export declare const MsgIBCCloseChannel: {
    typeUrl: string;
    encode(message: MsgIBCCloseChannel, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCCloseChannel;
    fromPartial(object: Partial<MsgIBCCloseChannel>): MsgIBCCloseChannel;
    fromAmino(object: MsgIBCCloseChannelAmino): MsgIBCCloseChannel;
    toAmino(message: MsgIBCCloseChannel): MsgIBCCloseChannelAmino;
    fromAminoMsg(object: MsgIBCCloseChannelAminoMsg): MsgIBCCloseChannel;
    toAminoMsg(message: MsgIBCCloseChannel): MsgIBCCloseChannelAminoMsg;
    fromProtoMsg(message: MsgIBCCloseChannelProtoMsg): MsgIBCCloseChannel;
    toProto(message: MsgIBCCloseChannel): Uint8Array;
    toProtoMsg(message: MsgIBCCloseChannel): MsgIBCCloseChannelProtoMsg;
};
