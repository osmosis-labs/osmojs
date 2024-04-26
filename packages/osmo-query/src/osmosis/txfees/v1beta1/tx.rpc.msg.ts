//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgSetFeeTokens, MsgSetFeeTokensResponse } from "./tx";
export interface Msg {
  setFeeTokens(request: MsgSetFeeTokens): Promise<MsgSetFeeTokensResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setFeeTokens = this.setFeeTokens.bind(this);
  }
  setFeeTokens(request: MsgSetFeeTokens): Promise<MsgSetFeeTokensResponse> {
    const data = MsgSetFeeTokens.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Msg", "SetFeeTokens", data);
    return promise.then(data => MsgSetFeeTokensResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};