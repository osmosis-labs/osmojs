import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** ===================== GetSwapFeeQueryMsg */
export interface GetSwapFeeQueryMsg {
    /** get_swap_fee is the query strcuture to get swap fee. */
    getSwapFee: EmptyStruct;
}
export interface GetSwapFeeQueryMsgProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsg";
    value: Uint8Array;
}
/** ===================== GetSwapFeeQueryMsg */
export interface GetSwapFeeQueryMsgAmino {
    /** get_swap_fee is the query strcuture to get swap fee. */
    get_swap_fee?: EmptyStructAmino;
}
export interface GetSwapFeeQueryMsgAminoMsg {
    type: "osmosis/cosmwasmpool/get-swap-fee-query-msg";
    value: GetSwapFeeQueryMsgAmino;
}
/** ===================== GetSwapFeeQueryMsg */
export interface GetSwapFeeQueryMsgSDKType {
    get_swap_fee: EmptyStructSDKType;
}
export interface GetSwapFeeQueryMsgResponse {
    /** swap_fee is the swap fee for this swap estimate. */
    swapFee: string;
}
export interface GetSwapFeeQueryMsgResponseProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsgResponse";
    value: Uint8Array;
}
export interface GetSwapFeeQueryMsgResponseAmino {
    /** swap_fee is the swap fee for this swap estimate. */
    swap_fee: string;
}
export interface GetSwapFeeQueryMsgResponseAminoMsg {
    type: "osmosis/cosmwasmpool/get-swap-fee-query-msg-response";
    value: GetSwapFeeQueryMsgResponseAmino;
}
export interface GetSwapFeeQueryMsgResponseSDKType {
    swap_fee: string;
}
/** ===================== SpotPriceQueryMsg */
export interface SpotPrice {
    /** quote_asset_denom is the quote asset of the spot query. */
    quoteAssetDenom: string;
    /** base_asset_denom is the base asset of the spot query. */
    baseAssetDenom: string;
}
export interface SpotPriceProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.SpotPrice";
    value: Uint8Array;
}
/** ===================== SpotPriceQueryMsg */
export interface SpotPriceAmino {
    /** quote_asset_denom is the quote asset of the spot query. */
    quote_asset_denom: string;
    /** base_asset_denom is the base asset of the spot query. */
    base_asset_denom: string;
}
export interface SpotPriceAminoMsg {
    type: "osmosis/cosmwasmpool/spot-price";
    value: SpotPriceAmino;
}
/** ===================== SpotPriceQueryMsg */
export interface SpotPriceSDKType {
    quote_asset_denom: string;
    base_asset_denom: string;
}
export interface SpotPriceQueryMsg {
    /**
     * spot_price is the structure containing request field of the spot price
     * query message.
     */
    spotPrice: SpotPrice;
}
export interface SpotPriceQueryMsgProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsg";
    value: Uint8Array;
}
export interface SpotPriceQueryMsgAmino {
    /**
     * spot_price is the structure containing request field of the spot price
     * query message.
     */
    spot_price?: SpotPriceAmino;
}
export interface SpotPriceQueryMsgAminoMsg {
    type: "osmosis/cosmwasmpool/spot-price-query-msg";
    value: SpotPriceQueryMsgAmino;
}
export interface SpotPriceQueryMsgSDKType {
    spot_price: SpotPriceSDKType;
}
export interface SpotPriceQueryMsgResponse {
    /** spot_price is the spot price returned. */
    spotPrice: string;
}
export interface SpotPriceQueryMsgResponseProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsgResponse";
    value: Uint8Array;
}
export interface SpotPriceQueryMsgResponseAmino {
    /** spot_price is the spot price returned. */
    spot_price: string;
}
export interface SpotPriceQueryMsgResponseAminoMsg {
    type: "osmosis/cosmwasmpool/spot-price-query-msg-response";
    value: SpotPriceQueryMsgResponseAmino;
}
export interface SpotPriceQueryMsgResponseSDKType {
    spot_price: string;
}
/** ===================== GetTotalPoolLiquidityQueryMsg */
export interface EmptyStruct {
}
export interface EmptyStructProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.EmptyStruct";
    value: Uint8Array;
}
/** ===================== GetTotalPoolLiquidityQueryMsg */
export interface EmptyStructAmino {
}
export interface EmptyStructAminoMsg {
    type: "osmosis/cosmwasmpool/empty-struct";
    value: EmptyStructAmino;
}
/** ===================== GetTotalPoolLiquidityQueryMsg */
export interface EmptyStructSDKType {
}
export interface GetTotalPoolLiquidityQueryMsg {
    /**
     * get_total_pool_liquidity is the structure containing request field of the
     * total pool liquidity query message.
     */
    getTotalPoolLiquidity: EmptyStruct;
}
export interface GetTotalPoolLiquidityQueryMsgProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsg";
    value: Uint8Array;
}
export interface GetTotalPoolLiquidityQueryMsgAmino {
    /**
     * get_total_pool_liquidity is the structure containing request field of the
     * total pool liquidity query message.
     */
    get_total_pool_liquidity?: EmptyStructAmino;
}
export interface GetTotalPoolLiquidityQueryMsgAminoMsg {
    type: "osmosis/cosmwasmpool/get-total-pool-liquidity-query-msg";
    value: GetTotalPoolLiquidityQueryMsgAmino;
}
export interface GetTotalPoolLiquidityQueryMsgSDKType {
    get_total_pool_liquidity: EmptyStructSDKType;
}
export interface GetTotalPoolLiquidityQueryMsgResponse {
    /**
     * total_pool_liquidity is the total liquidity in the pool denominated in
     *  coins.
     */
    totalPoolLiquidity: Coin[];
}
export interface GetTotalPoolLiquidityQueryMsgResponseProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsgResponse";
    value: Uint8Array;
}
export interface GetTotalPoolLiquidityQueryMsgResponseAmino {
    /**
     * total_pool_liquidity is the total liquidity in the pool denominated in
     *  coins.
     */
    total_pool_liquidity: CoinAmino[];
}
export interface GetTotalPoolLiquidityQueryMsgResponseAminoMsg {
    type: "osmosis/cosmwasmpool/get-total-pool-liquidity-query-msg-response";
    value: GetTotalPoolLiquidityQueryMsgResponseAmino;
}
export interface GetTotalPoolLiquidityQueryMsgResponseSDKType {
    total_pool_liquidity: CoinSDKType[];
}
/** ===================== GetTotalSharesQueryMsg */
export interface GetTotalSharesQueryMsg {
    /**
     * get_total_shares is the structure containing request field of the
     * total shares query message.
     */
    getTotalShares: EmptyStruct;
}
export interface GetTotalSharesQueryMsgProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsg";
    value: Uint8Array;
}
/** ===================== GetTotalSharesQueryMsg */
export interface GetTotalSharesQueryMsgAmino {
    /**
     * get_total_shares is the structure containing request field of the
     * total shares query message.
     */
    get_total_shares?: EmptyStructAmino;
}
export interface GetTotalSharesQueryMsgAminoMsg {
    type: "osmosis/cosmwasmpool/get-total-shares-query-msg";
    value: GetTotalSharesQueryMsgAmino;
}
/** ===================== GetTotalSharesQueryMsg */
export interface GetTotalSharesQueryMsgSDKType {
    get_total_shares: EmptyStructSDKType;
}
export interface GetTotalSharesQueryMsgResponse {
    /** total_shares is the amount of shares returned. */
    totalShares: string;
}
export interface GetTotalSharesQueryMsgResponseProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsgResponse";
    value: Uint8Array;
}
export interface GetTotalSharesQueryMsgResponseAmino {
    /** total_shares is the amount of shares returned. */
    total_shares: string;
}
export interface GetTotalSharesQueryMsgResponseAminoMsg {
    type: "osmosis/cosmwasmpool/get-total-shares-query-msg-response";
    value: GetTotalSharesQueryMsgResponseAmino;
}
export interface GetTotalSharesQueryMsgResponseSDKType {
    total_shares: string;
}
export declare const GetSwapFeeQueryMsg: {
    typeUrl: string;
    encode(message: GetSwapFeeQueryMsg, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetSwapFeeQueryMsg;
    fromPartial(object: Partial<GetSwapFeeQueryMsg>): GetSwapFeeQueryMsg;
    fromAmino(object: GetSwapFeeQueryMsgAmino): GetSwapFeeQueryMsg;
    toAmino(message: GetSwapFeeQueryMsg): GetSwapFeeQueryMsgAmino;
    fromAminoMsg(object: GetSwapFeeQueryMsgAminoMsg): GetSwapFeeQueryMsg;
    toAminoMsg(message: GetSwapFeeQueryMsg): GetSwapFeeQueryMsgAminoMsg;
    fromProtoMsg(message: GetSwapFeeQueryMsgProtoMsg): GetSwapFeeQueryMsg;
    toProto(message: GetSwapFeeQueryMsg): Uint8Array;
    toProtoMsg(message: GetSwapFeeQueryMsg): GetSwapFeeQueryMsgProtoMsg;
};
export declare const GetSwapFeeQueryMsgResponse: {
    typeUrl: string;
    encode(message: GetSwapFeeQueryMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetSwapFeeQueryMsgResponse;
    fromPartial(object: Partial<GetSwapFeeQueryMsgResponse>): GetSwapFeeQueryMsgResponse;
    fromAmino(object: GetSwapFeeQueryMsgResponseAmino): GetSwapFeeQueryMsgResponse;
    toAmino(message: GetSwapFeeQueryMsgResponse): GetSwapFeeQueryMsgResponseAmino;
    fromAminoMsg(object: GetSwapFeeQueryMsgResponseAminoMsg): GetSwapFeeQueryMsgResponse;
    toAminoMsg(message: GetSwapFeeQueryMsgResponse): GetSwapFeeQueryMsgResponseAminoMsg;
    fromProtoMsg(message: GetSwapFeeQueryMsgResponseProtoMsg): GetSwapFeeQueryMsgResponse;
    toProto(message: GetSwapFeeQueryMsgResponse): Uint8Array;
    toProtoMsg(message: GetSwapFeeQueryMsgResponse): GetSwapFeeQueryMsgResponseProtoMsg;
};
export declare const SpotPrice: {
    typeUrl: string;
    encode(message: SpotPrice, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SpotPrice;
    fromPartial(object: Partial<SpotPrice>): SpotPrice;
    fromAmino(object: SpotPriceAmino): SpotPrice;
    toAmino(message: SpotPrice): SpotPriceAmino;
    fromAminoMsg(object: SpotPriceAminoMsg): SpotPrice;
    toAminoMsg(message: SpotPrice): SpotPriceAminoMsg;
    fromProtoMsg(message: SpotPriceProtoMsg): SpotPrice;
    toProto(message: SpotPrice): Uint8Array;
    toProtoMsg(message: SpotPrice): SpotPriceProtoMsg;
};
export declare const SpotPriceQueryMsg: {
    typeUrl: string;
    encode(message: SpotPriceQueryMsg, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceQueryMsg;
    fromPartial(object: Partial<SpotPriceQueryMsg>): SpotPriceQueryMsg;
    fromAmino(object: SpotPriceQueryMsgAmino): SpotPriceQueryMsg;
    toAmino(message: SpotPriceQueryMsg): SpotPriceQueryMsgAmino;
    fromAminoMsg(object: SpotPriceQueryMsgAminoMsg): SpotPriceQueryMsg;
    toAminoMsg(message: SpotPriceQueryMsg): SpotPriceQueryMsgAminoMsg;
    fromProtoMsg(message: SpotPriceQueryMsgProtoMsg): SpotPriceQueryMsg;
    toProto(message: SpotPriceQueryMsg): Uint8Array;
    toProtoMsg(message: SpotPriceQueryMsg): SpotPriceQueryMsgProtoMsg;
};
export declare const SpotPriceQueryMsgResponse: {
    typeUrl: string;
    encode(message: SpotPriceQueryMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceQueryMsgResponse;
    fromPartial(object: Partial<SpotPriceQueryMsgResponse>): SpotPriceQueryMsgResponse;
    fromAmino(object: SpotPriceQueryMsgResponseAmino): SpotPriceQueryMsgResponse;
    toAmino(message: SpotPriceQueryMsgResponse): SpotPriceQueryMsgResponseAmino;
    fromAminoMsg(object: SpotPriceQueryMsgResponseAminoMsg): SpotPriceQueryMsgResponse;
    toAminoMsg(message: SpotPriceQueryMsgResponse): SpotPriceQueryMsgResponseAminoMsg;
    fromProtoMsg(message: SpotPriceQueryMsgResponseProtoMsg): SpotPriceQueryMsgResponse;
    toProto(message: SpotPriceQueryMsgResponse): Uint8Array;
    toProtoMsg(message: SpotPriceQueryMsgResponse): SpotPriceQueryMsgResponseProtoMsg;
};
export declare const EmptyStruct: {
    typeUrl: string;
    encode(_: EmptyStruct, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EmptyStruct;
    fromPartial(_: Partial<EmptyStruct>): EmptyStruct;
    fromAmino(_: EmptyStructAmino): EmptyStruct;
    toAmino(_: EmptyStruct): EmptyStructAmino;
    fromAminoMsg(object: EmptyStructAminoMsg): EmptyStruct;
    toAminoMsg(message: EmptyStruct): EmptyStructAminoMsg;
    fromProtoMsg(message: EmptyStructProtoMsg): EmptyStruct;
    toProto(message: EmptyStruct): Uint8Array;
    toProtoMsg(message: EmptyStruct): EmptyStructProtoMsg;
};
export declare const GetTotalPoolLiquidityQueryMsg: {
    typeUrl: string;
    encode(message: GetTotalPoolLiquidityQueryMsg, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTotalPoolLiquidityQueryMsg;
    fromPartial(object: Partial<GetTotalPoolLiquidityQueryMsg>): GetTotalPoolLiquidityQueryMsg;
    fromAmino(object: GetTotalPoolLiquidityQueryMsgAmino): GetTotalPoolLiquidityQueryMsg;
    toAmino(message: GetTotalPoolLiquidityQueryMsg): GetTotalPoolLiquidityQueryMsgAmino;
    fromAminoMsg(object: GetTotalPoolLiquidityQueryMsgAminoMsg): GetTotalPoolLiquidityQueryMsg;
    toAminoMsg(message: GetTotalPoolLiquidityQueryMsg): GetTotalPoolLiquidityQueryMsgAminoMsg;
    fromProtoMsg(message: GetTotalPoolLiquidityQueryMsgProtoMsg): GetTotalPoolLiquidityQueryMsg;
    toProto(message: GetTotalPoolLiquidityQueryMsg): Uint8Array;
    toProtoMsg(message: GetTotalPoolLiquidityQueryMsg): GetTotalPoolLiquidityQueryMsgProtoMsg;
};
export declare const GetTotalPoolLiquidityQueryMsgResponse: {
    typeUrl: string;
    encode(message: GetTotalPoolLiquidityQueryMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTotalPoolLiquidityQueryMsgResponse;
    fromPartial(object: Partial<GetTotalPoolLiquidityQueryMsgResponse>): GetTotalPoolLiquidityQueryMsgResponse;
    fromAmino(object: GetTotalPoolLiquidityQueryMsgResponseAmino): GetTotalPoolLiquidityQueryMsgResponse;
    toAmino(message: GetTotalPoolLiquidityQueryMsgResponse): GetTotalPoolLiquidityQueryMsgResponseAmino;
    fromAminoMsg(object: GetTotalPoolLiquidityQueryMsgResponseAminoMsg): GetTotalPoolLiquidityQueryMsgResponse;
    toAminoMsg(message: GetTotalPoolLiquidityQueryMsgResponse): GetTotalPoolLiquidityQueryMsgResponseAminoMsg;
    fromProtoMsg(message: GetTotalPoolLiquidityQueryMsgResponseProtoMsg): GetTotalPoolLiquidityQueryMsgResponse;
    toProto(message: GetTotalPoolLiquidityQueryMsgResponse): Uint8Array;
    toProtoMsg(message: GetTotalPoolLiquidityQueryMsgResponse): GetTotalPoolLiquidityQueryMsgResponseProtoMsg;
};
export declare const GetTotalSharesQueryMsg: {
    typeUrl: string;
    encode(message: GetTotalSharesQueryMsg, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTotalSharesQueryMsg;
    fromPartial(object: Partial<GetTotalSharesQueryMsg>): GetTotalSharesQueryMsg;
    fromAmino(object: GetTotalSharesQueryMsgAmino): GetTotalSharesQueryMsg;
    toAmino(message: GetTotalSharesQueryMsg): GetTotalSharesQueryMsgAmino;
    fromAminoMsg(object: GetTotalSharesQueryMsgAminoMsg): GetTotalSharesQueryMsg;
    toAminoMsg(message: GetTotalSharesQueryMsg): GetTotalSharesQueryMsgAminoMsg;
    fromProtoMsg(message: GetTotalSharesQueryMsgProtoMsg): GetTotalSharesQueryMsg;
    toProto(message: GetTotalSharesQueryMsg): Uint8Array;
    toProtoMsg(message: GetTotalSharesQueryMsg): GetTotalSharesQueryMsgProtoMsg;
};
export declare const GetTotalSharesQueryMsgResponse: {
    typeUrl: string;
    encode(message: GetTotalSharesQueryMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTotalSharesQueryMsgResponse;
    fromPartial(object: Partial<GetTotalSharesQueryMsgResponse>): GetTotalSharesQueryMsgResponse;
    fromAmino(object: GetTotalSharesQueryMsgResponseAmino): GetTotalSharesQueryMsgResponse;
    toAmino(message: GetTotalSharesQueryMsgResponse): GetTotalSharesQueryMsgResponseAmino;
    fromAminoMsg(object: GetTotalSharesQueryMsgResponseAminoMsg): GetTotalSharesQueryMsgResponse;
    toAminoMsg(message: GetTotalSharesQueryMsgResponse): GetTotalSharesQueryMsgResponseAminoMsg;
    fromProtoMsg(message: GetTotalSharesQueryMsgResponseProtoMsg): GetTotalSharesQueryMsgResponse;
    toProto(message: GetTotalSharesQueryMsgResponse): Uint8Array;
    toProtoMsg(message: GetTotalSharesQueryMsgResponse): GetTotalSharesQueryMsgResponseProtoMsg;
};
