import { BinaryReader, BinaryWriter } from "../../../binary";
export interface SwapAmountInRoute {
    poolId: bigint;
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
    pool_id: bigint;
    token_out_denom: string;
}
export interface SwapAmountOutRoute {
    poolId: bigint;
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
    pool_id: bigint;
    token_in_denom: string;
}
export interface SwapAmountInSplitRoute {
    pools: SwapAmountInRoute[];
    tokenInAmount: string;
}
export interface SwapAmountInSplitRouteProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountInSplitRoute";
    value: Uint8Array;
}
export interface SwapAmountInSplitRouteAmino {
    pools: SwapAmountInRouteAmino[];
    token_in_amount: string;
}
export interface SwapAmountInSplitRouteAminoMsg {
    type: "osmosis/poolmanager/swap-amount-in-split-route";
    value: SwapAmountInSplitRouteAmino;
}
export interface SwapAmountInSplitRouteSDKType {
    pools: SwapAmountInRouteSDKType[];
    token_in_amount: string;
}
export interface SwapAmountOutSplitRoute {
    pools: SwapAmountOutRoute[];
    tokenOutAmount: string;
}
export interface SwapAmountOutSplitRouteProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountOutSplitRoute";
    value: Uint8Array;
}
export interface SwapAmountOutSplitRouteAmino {
    pools: SwapAmountOutRouteAmino[];
    token_out_amount: string;
}
export interface SwapAmountOutSplitRouteAminoMsg {
    type: "osmosis/poolmanager/swap-amount-out-split-route";
    value: SwapAmountOutSplitRouteAmino;
}
export interface SwapAmountOutSplitRouteSDKType {
    pools: SwapAmountOutRouteSDKType[];
    token_out_amount: string;
}
export declare const SwapAmountInRoute: {
    typeUrl: string;
    encode(message: SwapAmountInRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInRoute;
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
    encode(message: SwapAmountOutRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutRoute;
    fromPartial(object: Partial<SwapAmountOutRoute>): SwapAmountOutRoute;
    fromAmino(object: SwapAmountOutRouteAmino): SwapAmountOutRoute;
    toAmino(message: SwapAmountOutRoute): SwapAmountOutRouteAmino;
    fromAminoMsg(object: SwapAmountOutRouteAminoMsg): SwapAmountOutRoute;
    toAminoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteAminoMsg;
    fromProtoMsg(message: SwapAmountOutRouteProtoMsg): SwapAmountOutRoute;
    toProto(message: SwapAmountOutRoute): Uint8Array;
    toProtoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteProtoMsg;
};
export declare const SwapAmountInSplitRoute: {
    typeUrl: string;
    encode(message: SwapAmountInSplitRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInSplitRoute;
    fromPartial(object: Partial<SwapAmountInSplitRoute>): SwapAmountInSplitRoute;
    fromAmino(object: SwapAmountInSplitRouteAmino): SwapAmountInSplitRoute;
    toAmino(message: SwapAmountInSplitRoute): SwapAmountInSplitRouteAmino;
    fromAminoMsg(object: SwapAmountInSplitRouteAminoMsg): SwapAmountInSplitRoute;
    toAminoMsg(message: SwapAmountInSplitRoute): SwapAmountInSplitRouteAminoMsg;
    fromProtoMsg(message: SwapAmountInSplitRouteProtoMsg): SwapAmountInSplitRoute;
    toProto(message: SwapAmountInSplitRoute): Uint8Array;
    toProtoMsg(message: SwapAmountInSplitRoute): SwapAmountInSplitRouteProtoMsg;
};
export declare const SwapAmountOutSplitRoute: {
    typeUrl: string;
    encode(message: SwapAmountOutSplitRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutSplitRoute;
    fromPartial(object: Partial<SwapAmountOutSplitRoute>): SwapAmountOutSplitRoute;
    fromAmino(object: SwapAmountOutSplitRouteAmino): SwapAmountOutSplitRoute;
    toAmino(message: SwapAmountOutSplitRoute): SwapAmountOutSplitRouteAmino;
    fromAminoMsg(object: SwapAmountOutSplitRouteAminoMsg): SwapAmountOutSplitRoute;
    toAminoMsg(message: SwapAmountOutSplitRoute): SwapAmountOutSplitRouteAminoMsg;
    fromProtoMsg(message: SwapAmountOutSplitRouteProtoMsg): SwapAmountOutSplitRoute;
    toProto(message: SwapAmountOutSplitRoute): Uint8Array;
    toProtoMsg(message: SwapAmountOutSplitRoute): SwapAmountOutSplitRouteProtoMsg;
};
