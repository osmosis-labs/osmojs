import { Rpc } from "../../../../helpers";
import { MsgCreateConcentratedPool, MsgCreateConcentratedPoolResponse } from "./tx";
export interface Msg {
    createConcentratedPool(request: MsgCreateConcentratedPool): Promise<MsgCreateConcentratedPoolResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createConcentratedPool(request: MsgCreateConcentratedPool): Promise<MsgCreateConcentratedPoolResponse>;
}
