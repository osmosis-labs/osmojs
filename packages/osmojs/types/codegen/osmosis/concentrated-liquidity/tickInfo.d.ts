import { DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface TickInfo {
    liquidityGross: string;
    liquidityNet: string;
    feeGrowthOutside: DecCoin[];
}
export interface TickInfoSDKType {
    liquidity_gross: string;
    liquidity_net: string;
    fee_growth_outside: DecCoinSDKType[];
}
export declare const TickInfo: {
    encode(message: TickInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TickInfo;
    fromPartial(object: Partial<TickInfo>): TickInfo;
};
