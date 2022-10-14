import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface EventCreateSale {
    id: Long;
    creator: string;
    tokenIn: string;
    tokenOut?: Coin;
}
export interface EventCreateSaleSDKType {
    id: Long;
    creator: string;
    token_in: string;
    token_out?: CoinSDKType;
}
export interface EventSubscribe {
    sender: string;
    saleId: Long;
    amount: string;
}
export interface EventSubscribeSDKType {
    sender: string;
    sale_id: Long;
    amount: string;
}
export interface EventWithdraw {
    sender: string;
    saleId: Long;
    /** amount of staked token_in withdrawn by user. */
    amount: string;
}
export interface EventWithdrawSDKType {
    sender: string;
    sale_id: Long;
    /** amount of staked token_in withdrawn by user. */
    amount: string;
}
export interface EventExit {
    sender: string;
    saleId: Long;
    /** amount of purchased token_out sent to the user */
    purchased: string;
}
export interface EventExitSDKType {
    sender: string;
    sale_id: Long;
    /** amount of purchased token_out sent to the user */
    purchased: string;
}
export interface EventFinalizeSale {
    saleId: Long;
    /** amount of earned tokens_in */
    income: string;
}
export interface EventFinalizeSaleSDKType {
    sale_id: Long;
    /** amount of earned tokens_in */
    income: string;
}
export declare const EventCreateSale: {
    encode(message: EventCreateSale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateSale;
    fromPartial(object: Partial<EventCreateSale>): EventCreateSale;
};
export declare const EventSubscribe: {
    encode(message: EventSubscribe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSubscribe;
    fromPartial(object: Partial<EventSubscribe>): EventSubscribe;
};
export declare const EventWithdraw: {
    encode(message: EventWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdraw;
    fromPartial(object: Partial<EventWithdraw>): EventWithdraw;
};
export declare const EventExit: {
    encode(message: EventExit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventExit;
    fromPartial(object: Partial<EventExit>): EventExit;
};
export declare const EventFinalizeSale: {
    encode(message: EventFinalizeSale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventFinalizeSale;
    fromPartial(object: Partial<EventFinalizeSale>): EventFinalizeSale;
};
