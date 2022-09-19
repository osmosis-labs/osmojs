import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
}
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSendSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponseSDKType {
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
    inputs: Input[];
    outputs: Output[];
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSendSDKType {
    inputs: InputSDKType[];
    outputs: OutputSDKType[];
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponseSDKType {
}
export declare const MsgSend: {
    encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend;
    fromPartial(object: DeepPartial<MsgSend>): MsgSend;
    fromSDK(object: MsgSendSDKType): MsgSend;
    toSDK(message: MsgSend): MsgSendSDKType;
};
export declare const MsgSendResponse: {
    encode(_: MsgSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponseSDKType;
    fromPartial(_: DeepPartial<MsgSendResponse>): MsgSendResponse;
    fromSDK(_: MsgSendResponseSDKType): MsgSendResponse;
    toSDK(_: MsgSendResponse): MsgSendResponseSDKType;
};
export declare const MsgMultiSend: {
    encode(message: MsgMultiSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSend;
    fromPartial(object: DeepPartial<MsgMultiSend>): MsgMultiSend;
    fromSDK(object: MsgMultiSendSDKType): MsgMultiSend;
    toSDK(message: MsgMultiSend): MsgMultiSendSDKType;
};
export declare const MsgMultiSendResponse: {
    encode(_: MsgMultiSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSendResponseSDKType;
    fromPartial(_: DeepPartial<MsgMultiSendResponse>): MsgMultiSendResponse;
    fromSDK(_: MsgMultiSendResponseSDKType): MsgMultiSendResponse;
    toSDK(_: MsgMultiSendResponse): MsgMultiSendResponseSDKType;
};
