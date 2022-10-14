import { Rpc } from "../../../../../helpers";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolResponse } from "./tx";
export interface Msg {
    createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse>;
}
