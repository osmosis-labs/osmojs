import { Rpc } from "@osmonauts/helpers";
import { MsgCreateGauge, MsgCreateGaugeResponseSDKType, MsgAddToGauge, MsgAddToGaugeResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponseSDKType>;
    addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponseSDKType>;
    addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponseSDKType>;
}
