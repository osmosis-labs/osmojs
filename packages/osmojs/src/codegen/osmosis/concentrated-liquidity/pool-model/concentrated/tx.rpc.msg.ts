import { Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateConcentratedPool, MsgCreateConcentratedPoolResponse } from "./tx";
export interface Msg {
  createConcentratedPool(request: MsgCreateConcentratedPool): Promise<MsgCreateConcentratedPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createConcentratedPool = this.createConcentratedPool.bind(this);
  }

  createConcentratedPool(request: MsgCreateConcentratedPool): Promise<MsgCreateConcentratedPoolResponse> {
    const data = MsgCreateConcentratedPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.Msg", "CreateConcentratedPool", data);
    return promise.then(data => MsgCreateConcentratedPoolResponse.decode(new _m0.Reader(data)));
  }

}