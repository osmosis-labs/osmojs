import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceRequest {
    poolId: Long;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceRequestSDKType {
    pool_id: Long;
    base_asset_denom: string;
    quote_asset_denom: string;
}
/** Depreacted: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
/** Depreacted: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceResponseSDKType {
    /** String of the Dec. Ex) 10.203uatom */
    spot_price: string;
}
export declare const QuerySpotPriceRequest: {
    encode(message: QuerySpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceRequest;
    fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest;
};
export declare const QuerySpotPriceResponse: {
    encode(message: QuerySpotPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceResponse;
    fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse;
};
