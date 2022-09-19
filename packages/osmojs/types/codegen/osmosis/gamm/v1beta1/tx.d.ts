import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPool {
    sender: string;
    poolId: Long;
    shareOutAmount: string;
    tokenInMaxs: Coin[];
}
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPoolSDKType {
    sender: string;
    poolId: Long;
    shareOutAmount: string;
    tokenInMaxs: CoinSDKType[];
}
export interface MsgJoinPoolResponse {
}
export interface MsgJoinPoolResponseSDKType {
}
/** ===================== MsgExitPool */
export interface MsgExitPool {
    sender: string;
    poolId: Long;
    shareInAmount: string;
    tokenOutMins: Coin[];
}
/** ===================== MsgExitPool */
export interface MsgExitPoolSDKType {
    sender: string;
    poolId: Long;
    shareInAmount: string;
    tokenOutMins: CoinSDKType[];
}
export interface MsgExitPoolResponse {
}
export interface MsgExitPoolResponseSDKType {
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRoute {
    poolId: Long;
    tokenOutDenom: string;
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRouteSDKType {
    poolId: Long;
    tokenOutDenom: string;
}
export interface MsgSwapExactAmountIn {
    sender: string;
    routes: SwapAmountInRoute[];
    tokenIn: Coin;
    tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInSDKType {
    sender: string;
    routes: SwapAmountInRouteSDKType[];
    tokenIn: CoinSDKType;
    tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface MsgSwapExactAmountInResponseSDKType {
    tokenOutAmount: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRoute {
    poolId: Long;
    tokenInDenom: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRouteSDKType {
    poolId: Long;
    tokenInDenom: string;
}
export interface MsgSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutRoute[];
    tokenInMaxAmount: string;
    tokenOut: Coin;
}
export interface MsgSwapExactAmountOutSDKType {
    sender: string;
    routes: SwapAmountOutRouteSDKType[];
    tokenInMaxAmount: string;
    tokenOut: CoinSDKType;
}
export interface MsgSwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface MsgSwapExactAmountOutResponseSDKType {
    tokenInAmount: string;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountIn {
    sender: string;
    poolId: Long;
    tokenIn: Coin;
    shareOutMinAmount: string;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountInSDKType {
    sender: string;
    poolId: Long;
    tokenIn: CoinSDKType;
    shareOutMinAmount: string;
}
export interface MsgJoinSwapExternAmountInResponse {
    shareOutAmount: string;
}
export interface MsgJoinSwapExternAmountInResponseSDKType {
    shareOutAmount: string;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOut {
    sender: string;
    poolId: Long;
    tokenInDenom: string;
    shareOutAmount: string;
    tokenInMaxAmount: string;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOutSDKType {
    sender: string;
    poolId: Long;
    tokenInDenom: string;
    shareOutAmount: string;
    tokenInMaxAmount: string;
}
export interface MsgJoinSwapShareAmountOutResponse {
    tokenInAmount: string;
}
export interface MsgJoinSwapShareAmountOutResponseSDKType {
    tokenInAmount: string;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountIn {
    sender: string;
    poolId: Long;
    tokenOutDenom: string;
    shareInAmount: string;
    tokenOutMinAmount: string;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountInSDKType {
    sender: string;
    poolId: Long;
    tokenOutDenom: string;
    shareInAmount: string;
    tokenOutMinAmount: string;
}
export interface MsgExitSwapShareAmountInResponse {
    tokenOutAmount: string;
}
export interface MsgExitSwapShareAmountInResponseSDKType {
    tokenOutAmount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOut {
    sender: string;
    poolId: Long;
    tokenOut: Coin;
    shareInMaxAmount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOutSDKType {
    sender: string;
    poolId: Long;
    tokenOut: CoinSDKType;
    shareInMaxAmount: string;
}
export interface MsgExitSwapExternAmountOutResponse {
    shareInAmount: string;
}
export interface MsgExitSwapExternAmountOutResponseSDKType {
    shareInAmount: string;
}
export declare const MsgJoinPool: {
    encode(message: MsgJoinPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPool;
    fromPartial(object: DeepPartial<MsgJoinPool>): MsgJoinPool;
};
export declare const MsgJoinPoolResponse: {
    encode(_: MsgJoinPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPoolResponseSDKType;
    fromPartial(_: DeepPartial<MsgJoinPoolResponse>): MsgJoinPoolResponse;
};
export declare const MsgExitPool: {
    encode(message: MsgExitPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPool;
    fromPartial(object: DeepPartial<MsgExitPool>): MsgExitPool;
};
export declare const MsgExitPoolResponse: {
    encode(_: MsgExitPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPoolResponseSDKType;
    fromPartial(_: DeepPartial<MsgExitPoolResponse>): MsgExitPoolResponse;
};
export declare const SwapAmountInRoute: {
    encode(message: SwapAmountInRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountInRoute;
    fromPartial(object: DeepPartial<SwapAmountInRoute>): SwapAmountInRoute;
};
export declare const MsgSwapExactAmountIn: {
    encode(message: MsgSwapExactAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountIn;
    fromPartial(object: DeepPartial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn;
};
export declare const MsgSwapExactAmountInResponse: {
    encode(message: MsgSwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountInResponseSDKType;
    fromPartial(object: DeepPartial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse;
};
export declare const SwapAmountOutRoute: {
    encode(message: SwapAmountOutRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountOutRoute;
    fromPartial(object: DeepPartial<SwapAmountOutRoute>): SwapAmountOutRoute;
};
export declare const MsgSwapExactAmountOut: {
    encode(message: MsgSwapExactAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOut;
    fromPartial(object: DeepPartial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut;
};
export declare const MsgSwapExactAmountOutResponse: {
    encode(message: MsgSwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOutResponseSDKType;
    fromPartial(object: DeepPartial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse;
};
export declare const MsgJoinSwapExternAmountIn: {
    encode(message: MsgJoinSwapExternAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountIn;
    fromPartial(object: DeepPartial<MsgJoinSwapExternAmountIn>): MsgJoinSwapExternAmountIn;
};
export declare const MsgJoinSwapExternAmountInResponse: {
    encode(message: MsgJoinSwapExternAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountInResponseSDKType;
    fromPartial(object: DeepPartial<MsgJoinSwapExternAmountInResponse>): MsgJoinSwapExternAmountInResponse;
};
export declare const MsgJoinSwapShareAmountOut: {
    encode(message: MsgJoinSwapShareAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOut;
    fromPartial(object: DeepPartial<MsgJoinSwapShareAmountOut>): MsgJoinSwapShareAmountOut;
};
export declare const MsgJoinSwapShareAmountOutResponse: {
    encode(message: MsgJoinSwapShareAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOutResponseSDKType;
    fromPartial(object: DeepPartial<MsgJoinSwapShareAmountOutResponse>): MsgJoinSwapShareAmountOutResponse;
};
export declare const MsgExitSwapShareAmountIn: {
    encode(message: MsgExitSwapShareAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountIn;
    fromPartial(object: DeepPartial<MsgExitSwapShareAmountIn>): MsgExitSwapShareAmountIn;
};
export declare const MsgExitSwapShareAmountInResponse: {
    encode(message: MsgExitSwapShareAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountInResponseSDKType;
    fromPartial(object: DeepPartial<MsgExitSwapShareAmountInResponse>): MsgExitSwapShareAmountInResponse;
};
export declare const MsgExitSwapExternAmountOut: {
    encode(message: MsgExitSwapExternAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOut;
    fromPartial(object: DeepPartial<MsgExitSwapExternAmountOut>): MsgExitSwapExternAmountOut;
};
export declare const MsgExitSwapExternAmountOutResponse: {
    encode(message: MsgExitSwapExternAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOutResponseSDKType;
    fromPartial(object: DeepPartial<MsgExitSwapExternAmountOutResponse>): MsgExitSwapExternAmountOutResponse;
};
