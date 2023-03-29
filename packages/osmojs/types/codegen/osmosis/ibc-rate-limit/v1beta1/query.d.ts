import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
/** ParamsRequest is the request type for the Query/Params RPC method. */
export interface ParamsRequest {
}
/** ParamsRequest is the request type for the Query/Params RPC method. */
export interface ParamsRequestSDKType {
}
/** aramsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** aramsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponseSDKType {
    /** params defines the parameters of the module. */
    params?: ParamsSDKType;
}
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
};
