import { Rpc } from "../../../../../helpers";
import { BinaryReader } from "../../../../../binary";
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
    return promise.then(data => MsgCreateConcentratedPoolResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};