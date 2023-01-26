import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "../../poolmanager/v1beta1/swap_route";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
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
    pool_id: Long;
    share_out_amount: string;
    token_in_maxs: CoinSDKType[];
}
export interface MsgJoinPoolResponse {
    shareOutAmount: string;
    tokenIn: Coin[];
}
export interface MsgJoinPoolResponseSDKType {
    share_out_amount: string;
    token_in: CoinSDKType[];
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
    pool_id: Long;
    share_in_amount: string;
    token_out_mins: CoinSDKType[];
}
export interface MsgExitPoolResponse {
    tokenOut: Coin[];
}
export interface MsgExitPoolResponseSDKType {
    token_out: CoinSDKType[];
}
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
export interface MsgSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutRoute[];
    tokenInMaxAmount: string;
    tokenOut?: Coin;
}
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
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountIn {
    sender: string;
    poolId: Long;
    tokenIn?: Coin;
    shareOutMinAmount: string;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountInSDKType {
    sender: string;
    pool_id: Long;
    token_in?: CoinSDKType;
    share_out_min_amount: string;
}
export interface MsgJoinSwapExternAmountInResponse {
    shareOutAmount: string;
}
export interface MsgJoinSwapExternAmountInResponseSDKType {
    share_out_amount: string;
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
    pool_id: Long;
    token_in_denom: string;
    share_out_amount: string;
    token_in_max_amount: string;
}
export interface MsgJoinSwapShareAmountOutResponse {
    tokenInAmount: string;
}
export interface MsgJoinSwapShareAmountOutResponseSDKType {
    token_in_amount: string;
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
    pool_id: Long;
    token_out_denom: string;
    share_in_amount: string;
    token_out_min_amount: string;
}
export interface MsgExitSwapShareAmountInResponse {
    tokenOutAmount: string;
}
export interface MsgExitSwapShareAmountInResponseSDKType {
    token_out_amount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOut {
    sender: string;
    poolId: Long;
    tokenOut?: Coin;
    shareInMaxAmount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOutSDKType {
    sender: string;
    pool_id: Long;
    token_out?: CoinSDKType;
    share_in_max_amount: string;
}
export interface MsgExitSwapExternAmountOutResponse {
    shareInAmount: string;
}
export interface MsgExitSwapExternAmountOutResponseSDKType {
    share_in_amount: string;
}
export declare const MsgJoinPool: {
    encode(message: MsgJoinPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPool;
    fromPartial(object: Partial<MsgJoinPool>): MsgJoinPool;
};
export declare const MsgJoinPoolResponse: {
    encode(message: MsgJoinPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPoolResponse;
    fromPartial(object: Partial<MsgJoinPoolResponse>): MsgJoinPoolResponse;
};
export declare const MsgExitPool: {
    encode(message: MsgExitPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPool;
    fromPartial(object: Partial<MsgExitPool>): MsgExitPool;
};
export declare const MsgExitPoolResponse: {
    encode(message: MsgExitPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPoolResponse;
    fromPartial(object: Partial<MsgExitPoolResponse>): MsgExitPoolResponse;
};
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
export declare const MsgJoinSwapExternAmountIn: {
    encode(message: MsgJoinSwapExternAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountIn;
    fromPartial(object: Partial<MsgJoinSwapExternAmountIn>): MsgJoinSwapExternAmountIn;
};
export declare const MsgJoinSwapExternAmountInResponse: {
    encode(message: MsgJoinSwapExternAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountInResponse;
    fromPartial(object: Partial<MsgJoinSwapExternAmountInResponse>): MsgJoinSwapExternAmountInResponse;
};
export declare const MsgJoinSwapShareAmountOut: {
    encode(message: MsgJoinSwapShareAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOut;
    fromPartial(object: Partial<MsgJoinSwapShareAmountOut>): MsgJoinSwapShareAmountOut;
};
export declare const MsgJoinSwapShareAmountOutResponse: {
    encode(message: MsgJoinSwapShareAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOutResponse;
    fromPartial(object: Partial<MsgJoinSwapShareAmountOutResponse>): MsgJoinSwapShareAmountOutResponse;
};
export declare const MsgExitSwapShareAmountIn: {
    encode(message: MsgExitSwapShareAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountIn;
    fromPartial(object: Partial<MsgExitSwapShareAmountIn>): MsgExitSwapShareAmountIn;
};
export declare const MsgExitSwapShareAmountInResponse: {
    encode(message: MsgExitSwapShareAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountInResponse;
    fromPartial(object: Partial<MsgExitSwapShareAmountInResponse>): MsgExitSwapShareAmountInResponse;
};
export declare const MsgExitSwapExternAmountOut: {
    encode(message: MsgExitSwapExternAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOut;
    fromPartial(object: Partial<MsgExitSwapExternAmountOut>): MsgExitSwapExternAmountOut;
};
export declare const MsgExitSwapExternAmountOutResponse: {
    encode(message: MsgExitSwapExternAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOutResponse;
    fromPartial(object: Partial<MsgExitSwapExternAmountOutResponse>): MsgExitSwapExternAmountOutResponse;
};
