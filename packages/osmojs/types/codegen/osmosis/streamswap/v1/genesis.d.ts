import { Sale, SaleSDKType, UserPosition, UserPositionSDKType } from "./state";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GenesisState defines the streamswap module's genesis state. */
export interface GenesisState {
    sales: Sale[];
    userPositions: UserPositionKV[];
    nextSaleId: Long;
    params?: Params;
}
/** GenesisState defines the streamswap module's genesis state. */
export interface GenesisStateSDKType {
    sales: SaleSDKType[];
    user_positions: UserPositionKVSDKType[];
    next_sale_id: Long;
    params?: ParamsSDKType;
}
/**
 * UserPositionKV is a record in genesis representing acc_address user position
 * of a sale_id sale.
 */
export interface UserPositionKV {
    /** user account address */
    accAddress: string;
    saleId: Long;
    userPosition?: UserPosition;
}
/**
 * UserPositionKV is a record in genesis representing acc_address user position
 * of a sale_id sale.
 */
export interface UserPositionKVSDKType {
    /** user account address */
    acc_address: string;
    sale_id: Long;
    user_position?: UserPositionSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const UserPositionKV: {
    encode(message: UserPositionKV, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserPositionKV;
    fromPartial(object: Partial<UserPositionKV>): UserPositionKV;
};
