import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransfer {
    /** the port on which the packet will be sent */
    sourcePort: string;
    /** the channel by which the packet will be sent */
    sourceChannel: string;
    /** the tokens to be transferred */
    token?: Coin;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeoutHeight?: Height;
    /**
     * Timeout timestamp in absolute nanoseconds since unix epoch.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: Long;
    /** optional memo */
    memo: string;
}
export interface MsgTransferProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransfer";
    value: Uint8Array;
}
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransferAmino {
    /** the port on which the packet will be sent */
    source_port: string;
    /** the channel by which the packet will be sent */
    source_channel: string;
    /** the tokens to be transferred */
    token?: CoinAmino;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeout_height?: HeightAmino;
    /**
     * Timeout timestamp in absolute nanoseconds since unix epoch.
     * The timeout is disabled when set to 0.
     */
    timeout_timestamp: string;
    /** optional memo */
    memo: string;
}
export interface MsgTransferAminoMsg {
    type: "cosmos-sdk/MsgTransfer";
    value: MsgTransferAmino;
}
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransferSDKType {
    source_port: string;
    source_channel: string;
    token?: CoinSDKType;
    sender: string;
    receiver: string;
    timeout_height?: HeightSDKType;
    timeout_timestamp: Long;
    memo: string;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponse {
    /** sequence number of the transfer packet sent */
    sequence: Long;
}
export interface MsgTransferResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse";
    value: Uint8Array;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseAmino {
    /** sequence number of the transfer packet sent */
    sequence: string;
}
export interface MsgTransferResponseAminoMsg {
    type: "cosmos-sdk/MsgTransferResponse";
    value: MsgTransferResponseAmino;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseSDKType {
    sequence: Long;
}
export declare const MsgTransfer: {
    typeUrl: string;
    encode(message: MsgTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransfer;
    fromPartial(object: Partial<MsgTransfer>): MsgTransfer;
    fromAmino(object: MsgTransferAmino): MsgTransfer;
    toAmino(message: MsgTransfer): MsgTransferAmino;
    fromAminoMsg(object: MsgTransferAminoMsg): MsgTransfer;
    toAminoMsg(message: MsgTransfer): MsgTransferAminoMsg;
    fromProtoMsg(message: MsgTransferProtoMsg): MsgTransfer;
    toProto(message: MsgTransfer): Uint8Array;
    toProtoMsg(message: MsgTransfer): MsgTransferProtoMsg;
};
export declare const MsgTransferResponse: {
    typeUrl: string;
    encode(message: MsgTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferResponse;
    fromPartial(object: Partial<MsgTransferResponse>): MsgTransferResponse;
    fromAmino(object: MsgTransferResponseAmino): MsgTransferResponse;
    toAmino(message: MsgTransferResponse): MsgTransferResponseAmino;
    fromAminoMsg(object: MsgTransferResponseAminoMsg): MsgTransferResponse;
    toAminoMsg(message: MsgTransferResponse): MsgTransferResponseAminoMsg;
    fromProtoMsg(message: MsgTransferResponseProtoMsg): MsgTransferResponse;
    toProto(message: MsgTransferResponse): Uint8Array;
    toProtoMsg(message: MsgTransferResponse): MsgTransferResponseProtoMsg;
};
