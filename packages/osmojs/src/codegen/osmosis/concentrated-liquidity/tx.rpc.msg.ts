import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreatePosition, MsgCreatePositionResponse, MsgWithdrawPosition, MsgWithdrawPositionResponse, MsgCollectFees, MsgCollectFeesResponse } from "./tx";
export interface Msg {
  createPosition(request: MsgCreatePosition): Promise<MsgCreatePositionResponse>;
  withdrawPosition(request: MsgWithdrawPosition): Promise<MsgWithdrawPositionResponse>;
  collectFees(request: MsgCollectFees): Promise<MsgCollectFeesResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createPosition = this.createPosition.bind(this);
    this.withdrawPosition = this.withdrawPosition.bind(this);
    this.collectFees = this.collectFees.bind(this);
  }

  createPosition(request: MsgCreatePosition): Promise<MsgCreatePositionResponse> {
    const data = MsgCreatePosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CreatePosition", data);
    return promise.then(data => MsgCreatePositionResponse.decode(new _m0.Reader(data)));
  }

  withdrawPosition(request: MsgWithdrawPosition): Promise<MsgWithdrawPositionResponse> {
    const data = MsgWithdrawPosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "WithdrawPosition", data);
    return promise.then(data => MsgWithdrawPositionResponse.decode(new _m0.Reader(data)));
  }

  collectFees(request: MsgCollectFees): Promise<MsgCollectFeesResponse> {
    const data = MsgCollectFees.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CollectFees", data);
    return promise.then(data => MsgCollectFeesResponse.decode(new _m0.Reader(data)));
  }

}