import { Rpc } from "@osmonauts/helpers";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse>;
}
