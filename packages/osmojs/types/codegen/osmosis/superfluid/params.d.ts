import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Params holds parameters for the superfluid module */
export interface Params {
    /**
     * the risk_factor is to be cut on OSMO equivalent value of lp tokens for
     * superfluid staking, default: 5%
     */
    minimumRiskFactor: string;
}
/** Params holds parameters for the superfluid module */
export interface ParamsSDKType {
    /**
     * the risk_factor is to be cut on OSMO equivalent value of lp tokens for
     * superfluid staking, default: 5%
     */
    minimum_risk_factor: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
