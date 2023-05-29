import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "../../poolmanager/v1beta1/swap_route";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export interface MsgJoinPoolProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool";
    value: Uint8Array;
}
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPoolAmino {
    sender: string;
    pool_id: string;
    share_out_amount: string;
    token_in_maxs: CoinAmino[];
}
export interface MsgJoinPoolAminoMsg {
    type: "osmosis/gamm/join-pool";
    value: MsgJoinPoolAmino;
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
export interface MsgJoinPoolResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse";
    value: Uint8Array;
}
export interface MsgJoinPoolResponseAmino {
    share_out_amount: string;
    token_in: CoinAmino[];
}
export interface MsgJoinPoolResponseAminoMsg {
    type: "osmosis/gamm/join-pool-response";
    value: MsgJoinPoolResponseAmino;
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
export interface MsgExitPoolProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool";
    value: Uint8Array;
}
/** ===================== MsgExitPool */
export interface MsgExitPoolAmino {
    sender: string;
    pool_id: string;
    share_in_amount: string;
    token_out_mins: CoinAmino[];
}
export interface MsgExitPoolAminoMsg {
    type: "osmosis/gamm/exit-pool";
    value: MsgExitPoolAmino;
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
export interface MsgExitPoolResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse";
    value: Uint8Array;
}
export interface MsgExitPoolResponseAmino {
    token_out: CoinAmino[];
}
export interface MsgExitPoolResponseAminoMsg {
    type: "osmosis/gamm/exit-pool-response";
    value: MsgExitPoolResponseAmino;
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
export interface MsgSwapExactAmountInProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn";
    value: Uint8Array;
}
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountInAmino {
    sender: string;
    routes: SwapAmountInRouteAmino[];
    token_in?: CoinAmino;
    token_out_min_amount: string;
}
export interface MsgSwapExactAmountInAminoMsg {
    type: "osmosis/gamm/swap-exact-amount-in";
    value: MsgSwapExactAmountInAmino;
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
export interface MsgSwapExactAmountInResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse";
    value: Uint8Array;
}
export interface MsgSwapExactAmountInResponseAmino {
    token_out_amount: string;
}
export interface MsgSwapExactAmountInResponseAminoMsg {
    type: "osmosis/gamm/swap-exact-amount-in-response";
    value: MsgSwapExactAmountInResponseAmino;
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
export interface MsgSwapExactAmountOutProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut";
    value: Uint8Array;
}
export interface MsgSwapExactAmountOutAmino {
    sender: string;
    routes: SwapAmountOutRouteAmino[];
    token_in_max_amount: string;
    token_out?: CoinAmino;
}
export interface MsgSwapExactAmountOutAminoMsg {
    type: "osmosis/gamm/swap-exact-amount-out";
    value: MsgSwapExactAmountOutAmino;
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
export interface MsgSwapExactAmountOutResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse";
    value: Uint8Array;
}
export interface MsgSwapExactAmountOutResponseAmino {
    token_in_amount: string;
}
export interface MsgSwapExactAmountOutResponseAminoMsg {
    type: "osmosis/gamm/swap-exact-amount-out-response";
    value: MsgSwapExactAmountOutResponseAmino;
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
export interface MsgJoinSwapExternAmountInProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn";
    value: Uint8Array;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountInAmino {
    sender: string;
    pool_id: string;
    token_in?: CoinAmino;
    share_out_min_amount: string;
}
export interface MsgJoinSwapExternAmountInAminoMsg {
    type: "osmosis/gamm/join-swap-extern-amount-in";
    value: MsgJoinSwapExternAmountInAmino;
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
export interface MsgJoinSwapExternAmountInResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse";
    value: Uint8Array;
}
export interface MsgJoinSwapExternAmountInResponseAmino {
    share_out_amount: string;
}
export interface MsgJoinSwapExternAmountInResponseAminoMsg {
    type: "osmosis/gamm/join-swap-extern-amount-in-response";
    value: MsgJoinSwapExternAmountInResponseAmino;
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
export interface MsgJoinSwapShareAmountOutProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut";
    value: Uint8Array;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOutAmino {
    sender: string;
    pool_id: string;
    token_in_denom: string;
    share_out_amount: string;
    token_in_max_amount: string;
}
export interface MsgJoinSwapShareAmountOutAminoMsg {
    type: "osmosis/gamm/join-swap-share-amount-out";
    value: MsgJoinSwapShareAmountOutAmino;
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
export interface MsgJoinSwapShareAmountOutResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse";
    value: Uint8Array;
}
export interface MsgJoinSwapShareAmountOutResponseAmino {
    token_in_amount: string;
}
export interface MsgJoinSwapShareAmountOutResponseAminoMsg {
    type: "osmosis/gamm/join-swap-share-amount-out-response";
    value: MsgJoinSwapShareAmountOutResponseAmino;
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
export interface MsgExitSwapShareAmountInProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn";
    value: Uint8Array;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountInAmino {
    sender: string;
    pool_id: string;
    token_out_denom: string;
    share_in_amount: string;
    token_out_min_amount: string;
}
export interface MsgExitSwapShareAmountInAminoMsg {
    type: "osmosis/gamm/exit-swap-share-amount-in";
    value: MsgExitSwapShareAmountInAmino;
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
export interface MsgExitSwapShareAmountInResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse";
    value: Uint8Array;
}
export interface MsgExitSwapShareAmountInResponseAmino {
    token_out_amount: string;
}
export interface MsgExitSwapShareAmountInResponseAminoMsg {
    type: "osmosis/gamm/exit-swap-share-amount-in-response";
    value: MsgExitSwapShareAmountInResponseAmino;
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
export interface MsgExitSwapExternAmountOutProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut";
    value: Uint8Array;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOutAmino {
    sender: string;
    pool_id: string;
    token_out?: CoinAmino;
    share_in_max_amount: string;
}
export interface MsgExitSwapExternAmountOutAminoMsg {
    type: "osmosis/gamm/exit-swap-extern-amount-out";
    value: MsgExitSwapExternAmountOutAmino;
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
export interface MsgExitSwapExternAmountOutResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse";
    value: Uint8Array;
}
export interface MsgExitSwapExternAmountOutResponseAmino {
    share_in_amount: string;
}
export interface MsgExitSwapExternAmountOutResponseAminoMsg {
    type: "osmosis/gamm/exit-swap-extern-amount-out-response";
    value: MsgExitSwapExternAmountOutResponseAmino;
}
export interface MsgExitSwapExternAmountOutResponseSDKType {
    share_in_amount: string;
}
export declare const MsgJoinPool: {
    typeUrl: string;
    encode(message: MsgJoinPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPool;
    fromPartial(object: Partial<MsgJoinPool>): MsgJoinPool;
    fromAmino(object: MsgJoinPoolAmino): MsgJoinPool;
    toAmino(message: MsgJoinPool): MsgJoinPoolAmino;
    fromAminoMsg(object: MsgJoinPoolAminoMsg): MsgJoinPool;
    toAminoMsg(message: MsgJoinPool): MsgJoinPoolAminoMsg;
    fromProtoMsg(message: MsgJoinPoolProtoMsg): MsgJoinPool;
    toProto(message: MsgJoinPool): Uint8Array;
    toProtoMsg(message: MsgJoinPool): MsgJoinPoolProtoMsg;
};
export declare const MsgJoinPoolResponse: {
    typeUrl: string;
    encode(message: MsgJoinPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPoolResponse;
    fromPartial(object: Partial<MsgJoinPoolResponse>): MsgJoinPoolResponse;
    fromAmino(object: MsgJoinPoolResponseAmino): MsgJoinPoolResponse;
    toAmino(message: MsgJoinPoolResponse): MsgJoinPoolResponseAmino;
    fromAminoMsg(object: MsgJoinPoolResponseAminoMsg): MsgJoinPoolResponse;
    toAminoMsg(message: MsgJoinPoolResponse): MsgJoinPoolResponseAminoMsg;
    fromProtoMsg(message: MsgJoinPoolResponseProtoMsg): MsgJoinPoolResponse;
    toProto(message: MsgJoinPoolResponse): Uint8Array;
    toProtoMsg(message: MsgJoinPoolResponse): MsgJoinPoolResponseProtoMsg;
};
export declare const MsgExitPool: {
    typeUrl: string;
    encode(message: MsgExitPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPool;
    fromPartial(object: Partial<MsgExitPool>): MsgExitPool;
    fromAmino(object: MsgExitPoolAmino): MsgExitPool;
    toAmino(message: MsgExitPool): MsgExitPoolAmino;
    fromAminoMsg(object: MsgExitPoolAminoMsg): MsgExitPool;
    toAminoMsg(message: MsgExitPool): MsgExitPoolAminoMsg;
    fromProtoMsg(message: MsgExitPoolProtoMsg): MsgExitPool;
    toProto(message: MsgExitPool): Uint8Array;
    toProtoMsg(message: MsgExitPool): MsgExitPoolProtoMsg;
};
export declare const MsgExitPoolResponse: {
    typeUrl: string;
    encode(message: MsgExitPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPoolResponse;
    fromPartial(object: Partial<MsgExitPoolResponse>): MsgExitPoolResponse;
    fromAmino(object: MsgExitPoolResponseAmino): MsgExitPoolResponse;
    toAmino(message: MsgExitPoolResponse): MsgExitPoolResponseAmino;
    fromAminoMsg(object: MsgExitPoolResponseAminoMsg): MsgExitPoolResponse;
    toAminoMsg(message: MsgExitPoolResponse): MsgExitPoolResponseAminoMsg;
    fromProtoMsg(message: MsgExitPoolResponseProtoMsg): MsgExitPoolResponse;
    toProto(message: MsgExitPoolResponse): Uint8Array;
    toProtoMsg(message: MsgExitPoolResponse): MsgExitPoolResponseProtoMsg;
};
export declare const MsgSwapExactAmountIn: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountIn;
    fromPartial(object: Partial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn;
    fromAmino(object: MsgSwapExactAmountInAmino): MsgSwapExactAmountIn;
    toAmino(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAmino;
    fromAminoMsg(object: MsgSwapExactAmountInAminoMsg): MsgSwapExactAmountIn;
    toAminoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountInProtoMsg): MsgSwapExactAmountIn;
    toProto(message: MsgSwapExactAmountIn): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInProtoMsg;
};
export declare const MsgSwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountInResponse;
    fromPartial(object: Partial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse;
    fromAmino(object: MsgSwapExactAmountInResponseAmino): MsgSwapExactAmountInResponse;
    toAmino(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAmino;
    fromAminoMsg(object: MsgSwapExactAmountInResponseAminoMsg): MsgSwapExactAmountInResponse;
    toAminoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountInResponseProtoMsg): MsgSwapExactAmountInResponse;
    toProto(message: MsgSwapExactAmountInResponse): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseProtoMsg;
};
export declare const MsgSwapExactAmountOut: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOut;
    fromPartial(object: Partial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut;
    fromAmino(object: MsgSwapExactAmountOutAmino): MsgSwapExactAmountOut;
    toAmino(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAmino;
    fromAminoMsg(object: MsgSwapExactAmountOutAminoMsg): MsgSwapExactAmountOut;
    toAminoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountOutProtoMsg): MsgSwapExactAmountOut;
    toProto(message: MsgSwapExactAmountOut): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutProtoMsg;
};
export declare const MsgSwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse;
    fromPartial(object: Partial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse;
    fromAmino(object: MsgSwapExactAmountOutResponseAmino): MsgSwapExactAmountOutResponse;
    toAmino(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAmino;
    fromAminoMsg(object: MsgSwapExactAmountOutResponseAminoMsg): MsgSwapExactAmountOutResponse;
    toAminoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountOutResponseProtoMsg): MsgSwapExactAmountOutResponse;
    toProto(message: MsgSwapExactAmountOutResponse): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseProtoMsg;
};
export declare const MsgJoinSwapExternAmountIn: {
    typeUrl: string;
    encode(message: MsgJoinSwapExternAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountIn;
    fromPartial(object: Partial<MsgJoinSwapExternAmountIn>): MsgJoinSwapExternAmountIn;
    fromAmino(object: MsgJoinSwapExternAmountInAmino): MsgJoinSwapExternAmountIn;
    toAmino(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInAmino;
    fromAminoMsg(object: MsgJoinSwapExternAmountInAminoMsg): MsgJoinSwapExternAmountIn;
    toAminoMsg(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInAminoMsg;
    fromProtoMsg(message: MsgJoinSwapExternAmountInProtoMsg): MsgJoinSwapExternAmountIn;
    toProto(message: MsgJoinSwapExternAmountIn): Uint8Array;
    toProtoMsg(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInProtoMsg;
};
export declare const MsgJoinSwapExternAmountInResponse: {
    typeUrl: string;
    encode(message: MsgJoinSwapExternAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountInResponse;
    fromPartial(object: Partial<MsgJoinSwapExternAmountInResponse>): MsgJoinSwapExternAmountInResponse;
    fromAmino(object: MsgJoinSwapExternAmountInResponseAmino): MsgJoinSwapExternAmountInResponse;
    toAmino(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseAmino;
    fromAminoMsg(object: MsgJoinSwapExternAmountInResponseAminoMsg): MsgJoinSwapExternAmountInResponse;
    toAminoMsg(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseAminoMsg;
    fromProtoMsg(message: MsgJoinSwapExternAmountInResponseProtoMsg): MsgJoinSwapExternAmountInResponse;
    toProto(message: MsgJoinSwapExternAmountInResponse): Uint8Array;
    toProtoMsg(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseProtoMsg;
};
export declare const MsgJoinSwapShareAmountOut: {
    typeUrl: string;
    encode(message: MsgJoinSwapShareAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOut;
    fromPartial(object: Partial<MsgJoinSwapShareAmountOut>): MsgJoinSwapShareAmountOut;
    fromAmino(object: MsgJoinSwapShareAmountOutAmino): MsgJoinSwapShareAmountOut;
    toAmino(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutAmino;
    fromAminoMsg(object: MsgJoinSwapShareAmountOutAminoMsg): MsgJoinSwapShareAmountOut;
    toAminoMsg(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutAminoMsg;
    fromProtoMsg(message: MsgJoinSwapShareAmountOutProtoMsg): MsgJoinSwapShareAmountOut;
    toProto(message: MsgJoinSwapShareAmountOut): Uint8Array;
    toProtoMsg(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutProtoMsg;
};
export declare const MsgJoinSwapShareAmountOutResponse: {
    typeUrl: string;
    encode(message: MsgJoinSwapShareAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOutResponse;
    fromPartial(object: Partial<MsgJoinSwapShareAmountOutResponse>): MsgJoinSwapShareAmountOutResponse;
    fromAmino(object: MsgJoinSwapShareAmountOutResponseAmino): MsgJoinSwapShareAmountOutResponse;
    toAmino(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseAmino;
    fromAminoMsg(object: MsgJoinSwapShareAmountOutResponseAminoMsg): MsgJoinSwapShareAmountOutResponse;
    toAminoMsg(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseAminoMsg;
    fromProtoMsg(message: MsgJoinSwapShareAmountOutResponseProtoMsg): MsgJoinSwapShareAmountOutResponse;
    toProto(message: MsgJoinSwapShareAmountOutResponse): Uint8Array;
    toProtoMsg(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseProtoMsg;
};
export declare const MsgExitSwapShareAmountIn: {
    typeUrl: string;
    encode(message: MsgExitSwapShareAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountIn;
    fromPartial(object: Partial<MsgExitSwapShareAmountIn>): MsgExitSwapShareAmountIn;
    fromAmino(object: MsgExitSwapShareAmountInAmino): MsgExitSwapShareAmountIn;
    toAmino(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInAmino;
    fromAminoMsg(object: MsgExitSwapShareAmountInAminoMsg): MsgExitSwapShareAmountIn;
    toAminoMsg(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInAminoMsg;
    fromProtoMsg(message: MsgExitSwapShareAmountInProtoMsg): MsgExitSwapShareAmountIn;
    toProto(message: MsgExitSwapShareAmountIn): Uint8Array;
    toProtoMsg(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInProtoMsg;
};
export declare const MsgExitSwapShareAmountInResponse: {
    typeUrl: string;
    encode(message: MsgExitSwapShareAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountInResponse;
    fromPartial(object: Partial<MsgExitSwapShareAmountInResponse>): MsgExitSwapShareAmountInResponse;
    fromAmino(object: MsgExitSwapShareAmountInResponseAmino): MsgExitSwapShareAmountInResponse;
    toAmino(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseAmino;
    fromAminoMsg(object: MsgExitSwapShareAmountInResponseAminoMsg): MsgExitSwapShareAmountInResponse;
    toAminoMsg(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseAminoMsg;
    fromProtoMsg(message: MsgExitSwapShareAmountInResponseProtoMsg): MsgExitSwapShareAmountInResponse;
    toProto(message: MsgExitSwapShareAmountInResponse): Uint8Array;
    toProtoMsg(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseProtoMsg;
};
export declare const MsgExitSwapExternAmountOut: {
    typeUrl: string;
    encode(message: MsgExitSwapExternAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOut;
    fromPartial(object: Partial<MsgExitSwapExternAmountOut>): MsgExitSwapExternAmountOut;
    fromAmino(object: MsgExitSwapExternAmountOutAmino): MsgExitSwapExternAmountOut;
    toAmino(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutAmino;
    fromAminoMsg(object: MsgExitSwapExternAmountOutAminoMsg): MsgExitSwapExternAmountOut;
    toAminoMsg(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutAminoMsg;
    fromProtoMsg(message: MsgExitSwapExternAmountOutProtoMsg): MsgExitSwapExternAmountOut;
    toProto(message: MsgExitSwapExternAmountOut): Uint8Array;
    toProtoMsg(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutProtoMsg;
};
export declare const MsgExitSwapExternAmountOutResponse: {
    typeUrl: string;
    encode(message: MsgExitSwapExternAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOutResponse;
    fromPartial(object: Partial<MsgExitSwapExternAmountOutResponse>): MsgExitSwapExternAmountOutResponse;
    fromAmino(object: MsgExitSwapExternAmountOutResponseAmino): MsgExitSwapExternAmountOutResponse;
    toAmino(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseAmino;
    fromAminoMsg(object: MsgExitSwapExternAmountOutResponseAminoMsg): MsgExitSwapExternAmountOutResponse;
    toAminoMsg(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseAminoMsg;
    fromProtoMsg(message: MsgExitSwapExternAmountOutResponseProtoMsg): MsgExitSwapExternAmountOutResponse;
    toProto(message: MsgExitSwapExternAmountOutResponse): Uint8Array;
    toProtoMsg(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseProtoMsg;
};
