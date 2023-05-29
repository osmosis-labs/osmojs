import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SwapAmountInRoute {
    poolId: Long;
    tokenOutDenom: string;
}
export interface SwapAmountInRouteProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountInRoute";
    value: Uint8Array;
}
export interface SwapAmountInRouteAmino {
    pool_id: string;
    token_out_denom: string;
}
export interface SwapAmountInRouteAminoMsg {
    type: "osmosis/poolmanager/swap-amount-in-route";
    value: SwapAmountInRouteAmino;
}
export interface SwapAmountInRouteSDKType {
    pool_id: Long;
    token_out_denom: string;
}
export interface SwapAmountOutRoute {
    poolId: Long;
    tokenInDenom: string;
}
export interface SwapAmountOutRouteProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountOutRoute";
    value: Uint8Array;
}
export interface SwapAmountOutRouteAmino {
    pool_id: string;
    token_in_denom: string;
}
export interface SwapAmountOutRouteAminoMsg {
    type: "osmosis/poolmanager/swap-amount-out-route";
    value: SwapAmountOutRouteAmino;
}
export interface SwapAmountOutRouteSDKType {
    pool_id: Long;
    token_in_denom: string;
}
export declare const SwapAmountInRoute: {
    typeUrl: string;
    encode(message: SwapAmountInRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountInRoute;
    fromPartial(object: Partial<SwapAmountInRoute>): SwapAmountInRoute;
    fromAmino(object: SwapAmountInRouteAmino): SwapAmountInRoute;
    toAmino(message: SwapAmountInRoute): SwapAmountInRouteAmino;
    fromAminoMsg(object: SwapAmountInRouteAminoMsg): SwapAmountInRoute;
    toAminoMsg(message: SwapAmountInRoute): SwapAmountInRouteAminoMsg;
    fromProtoMsg(message: SwapAmountInRouteProtoMsg): SwapAmountInRoute;
    toProto(message: SwapAmountInRoute): Uint8Array;
    toProtoMsg(message: SwapAmountInRoute): SwapAmountInRouteProtoMsg;
};
export declare const SwapAmountOutRoute: {
    typeUrl: string;
    encode(message: SwapAmountOutRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountOutRoute;
    fromPartial(object: Partial<SwapAmountOutRoute>): SwapAmountOutRoute;
    fromAmino(object: SwapAmountOutRouteAmino): SwapAmountOutRoute;
    toAmino(message: SwapAmountOutRoute): SwapAmountOutRouteAmino;
    fromAminoMsg(object: SwapAmountOutRouteAminoMsg): SwapAmountOutRoute;
    toAminoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteAminoMsg;
    fromProtoMsg(message: SwapAmountOutRouteProtoMsg): SwapAmountOutRoute;
    toProto(message: SwapAmountOutRoute): Uint8Array;
    toProtoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteProtoMsg;
};
