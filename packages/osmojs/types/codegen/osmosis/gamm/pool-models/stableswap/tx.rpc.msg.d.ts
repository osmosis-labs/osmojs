import { Rpc } from "../../../../helpers";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolResponse, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsResponse } from "./tx";
export interface Msg {
    createStableswapPool(request: MsgCreateStableswapPool): Promise<MsgCreateStableswapPoolResponse>;
    stableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors): Promise<MsgStableSwapAdjustScalingFactorsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createStableswapPool(request: MsgCreateStableswapPool): Promise<MsgCreateStableswapPoolResponse>;
    stableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors): Promise<MsgStableSwapAdjustScalingFactorsResponse>;
}
