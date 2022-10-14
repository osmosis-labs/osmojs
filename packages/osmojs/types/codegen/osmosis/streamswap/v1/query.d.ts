import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Sale, SaleSDKType, UserPosition, UserPositionSDKType } from "./state";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface QuerySales {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
export interface QuerySalesSDKType {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestSDKType;
}
export interface QuerySalesResponse {
    sales: Sale[];
    pagination?: PageResponse;
}
export interface QuerySalesResponseSDKType {
    sales: SaleSDKType[];
    pagination?: PageResponseSDKType;
}
/** Request type for Query/Sale */
export interface QuerySale {
    /** Sale ID */
    saleId: Long;
}
/** Request type for Query/Sale */
export interface QuerySaleSDKType {
    /** Sale ID */
    sale_id: Long;
}
export interface QuerySaleResponse {
    sale?: Sale;
}
export interface QuerySaleResponseSDKType {
    sale?: SaleSDKType;
}
/** Request type for Query/Sale */
export interface QueryUserPosition {
    /** ID of the Sale */
    saleId: Long;
    /** user account address */
    user: string;
}
/** Request type for Query/Sale */
export interface QueryUserPositionSDKType {
    /** ID of the Sale */
    sale_id: Long;
    /** user account address */
    user: string;
}
export interface QueryUserPositionResponse {
    userPosition?: UserPosition;
}
export interface QueryUserPositionResponseSDKType {
    user_position?: UserPositionSDKType;
}
export declare const QuerySales: {
    encode(message: QuerySales, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySales;
    fromPartial(object: Partial<QuerySales>): QuerySales;
};
export declare const QuerySalesResponse: {
    encode(message: QuerySalesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySalesResponse;
    fromPartial(object: Partial<QuerySalesResponse>): QuerySalesResponse;
};
export declare const QuerySale: {
    encode(message: QuerySale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySale;
    fromPartial(object: Partial<QuerySale>): QuerySale;
};
export declare const QuerySaleResponse: {
    encode(message: QuerySaleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySaleResponse;
    fromPartial(object: Partial<QuerySaleResponse>): QuerySaleResponse;
};
export declare const QueryUserPosition: {
    encode(message: QueryUserPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserPosition;
    fromPartial(object: Partial<QueryUserPosition>): QueryUserPosition;
};
export declare const QueryUserPositionResponse: {
    encode(message: QueryUserPositionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserPositionResponse;
    fromPartial(object: Partial<QueryUserPositionResponse>): QueryUserPositionResponse;
};
