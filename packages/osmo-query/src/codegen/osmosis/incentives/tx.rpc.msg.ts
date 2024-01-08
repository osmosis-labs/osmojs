import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgCreateGauge, MsgCreateGaugeResponse, MsgAddToGauge, MsgAddToGaugeResponse, MsgCreateGroup, MsgCreateGroupResponse } from "./tx";
export interface Msg {
  createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
  addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse>;
  createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createGauge = this.createGauge.bind(this);
    this.addToGauge = this.addToGauge.bind(this);
    this.createGroup = this.createGroup.bind(this);
  }
  createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse> {
    const data = MsgCreateGauge.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Msg", "CreateGauge", data);
    return promise.then(data => MsgCreateGaugeResponse.decode(new BinaryReader(data)));
  }
  addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse> {
    const data = MsgAddToGauge.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Msg", "AddToGauge", data);
    return promise.then(data => MsgAddToGaugeResponse.decode(new BinaryReader(data)));
  }
  createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse> {
    const data = MsgCreateGroup.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Msg", "CreateGroup", data);
    return promise.then(data => MsgCreateGroupResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};