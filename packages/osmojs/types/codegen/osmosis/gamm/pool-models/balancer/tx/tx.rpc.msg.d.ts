import { Rpc } from "@osmonauts/helpers";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponseSDKType>;
}
