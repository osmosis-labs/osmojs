import { Rpc } from "@osmonauts/helpers";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolResponseSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createStableswapPool(request: MsgCreateStableswapPool): Promise<MsgCreateStableswapPoolResponseSDKType>;
    stableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors): Promise<MsgStableSwapAdjustScalingFactorsResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createStableswapPool(request: MsgCreateStableswapPool): Promise<MsgCreateStableswapPoolResponseSDKType>;
    stableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors): Promise<MsgStableSwapAdjustScalingFactorsResponseSDKType>;
}
