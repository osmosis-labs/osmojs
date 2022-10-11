import { Rpc } from "../../helpers";
import { MsgCreateGauge, MsgCreateGaugeResponse, MsgAddToGauge, MsgAddToGaugeResponse } from "./tx";
export interface Msg {
    createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
    addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
    addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse>;
}
