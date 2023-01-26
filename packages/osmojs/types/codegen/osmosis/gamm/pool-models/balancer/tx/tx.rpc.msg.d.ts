import { Rpc } from "../../../../../helpers";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolResponse, MsgMigrateSharesToFullRangeConcentratedPosition, MsgMigrateSharesToFullRangeConcentratedPositionResponse } from "./tx";
export interface Msg {
    createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse>;
    migrateSharesToFullRangeConcentratedPosition(request: MsgMigrateSharesToFullRangeConcentratedPosition): Promise<MsgMigrateSharesToFullRangeConcentratedPositionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse>;
    migrateSharesToFullRangeConcentratedPosition(request: MsgMigrateSharesToFullRangeConcentratedPosition): Promise<MsgMigrateSharesToFullRangeConcentratedPositionResponse>;
}
