import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountIn {
    sender: string;
    routes: SwapAmountInRoute[];
    tokenIn?: Coin;
    tokenOutMinAmount: string;
}
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountInSDKType {
    sender: string;
    routes: SwapAmountInRouteSDKType[];
    token_in?: CoinSDKType;
    token_out_min_amount: string;
}
export interface MsgSwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface MsgSwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutRoute[];
    tokenInMaxAmount: string;
    tokenOut?: Coin;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOutSDKType {
    sender: string;
    routes: SwapAmountOutRouteSDKType[];
    token_in_max_amount: string;
    token_out?: CoinSDKType;
}
export interface MsgSwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface MsgSwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
export declare const MsgSwapExactAmountIn: {
    encode(message: MsgSwapExactAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountIn;
    fromPartial(object: Partial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn;
};
export declare const MsgSwapExactAmountInResponse: {
    encode(message: MsgSwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountInResponse;
    fromPartial(object: Partial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse;
};
export declare const MsgSwapExactAmountOut: {
    encode(message: MsgSwapExactAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOut;
    fromPartial(object: Partial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut;
};
export declare const MsgSwapExactAmountOutResponse: {
    encode(message: MsgSwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse;
    fromPartial(object: Partial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse;
};
