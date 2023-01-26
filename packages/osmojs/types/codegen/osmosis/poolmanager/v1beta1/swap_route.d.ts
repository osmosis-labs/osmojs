import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface SwapAmountInRoute {
    poolId: Long;
    tokenOutDenom: string;
}
export interface SwapAmountInRouteSDKType {
    pool_id: Long;
    token_out_denom: string;
}
export interface SwapAmountOutRoute {
    poolId: Long;
    tokenInDenom: string;
}
export interface SwapAmountOutRouteSDKType {
    pool_id: Long;
    token_in_denom: string;
}
export declare const SwapAmountInRoute: {
    encode(message: SwapAmountInRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountInRoute;
    fromPartial(object: Partial<SwapAmountInRoute>): SwapAmountInRoute;
};
export declare const SwapAmountOutRoute: {
    encode(message: SwapAmountOutRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountOutRoute;
    fromPartial(object: Partial<SwapAmountOutRoute>): SwapAmountOutRoute;
};
