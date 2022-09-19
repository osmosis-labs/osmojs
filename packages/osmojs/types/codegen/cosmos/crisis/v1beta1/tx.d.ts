import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariant {
    sender: string;
    invariantModuleName: string;
    invariantRoute: string;
}
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariantSDKType {
    sender: string;
    invariant_module_name: string;
    invariant_route: string;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponse {
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponseSDKType {
}
export declare const MsgVerifyInvariant: {
    encode(message: MsgVerifyInvariant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariant;
    fromPartial(object: DeepPartial<MsgVerifyInvariant>): MsgVerifyInvariant;
    fromSDK(object: MsgVerifyInvariantSDKType): MsgVerifyInvariant;
    toSDK(message: MsgVerifyInvariant): MsgVerifyInvariantSDKType;
};
export declare const MsgVerifyInvariantResponse: {
    encode(_: MsgVerifyInvariantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariantResponseSDKType;
    fromPartial(_: DeepPartial<MsgVerifyInvariantResponse>): MsgVerifyInvariantResponse;
    fromSDK(_: MsgVerifyInvariantResponseSDKType): MsgVerifyInvariantResponse;
    toSDK(_: MsgVerifyInvariantResponse): MsgVerifyInvariantResponseSDKType;
};
