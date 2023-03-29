import { Rpc } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolResponse, MsgMigrateSharesToFullRangeConcentratedPosition, MsgMigrateSharesToFullRangeConcentratedPositionResponse } from "./tx";
export interface Msg {
  createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse>;
  migrateSharesToFullRangeConcentratedPosition(request: MsgMigrateSharesToFullRangeConcentratedPosition): Promise<MsgMigrateSharesToFullRangeConcentratedPositionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createBalancerPool = this.createBalancerPool.bind(this);
    this.migrateSharesToFullRangeConcentratedPosition = this.migrateSharesToFullRangeConcentratedPosition.bind(this);
  }

  createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse> {
    const data = MsgCreateBalancerPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.poolmodels.balancer.v1beta1.Msg", "CreateBalancerPool", data);
    return promise.then(data => MsgCreateBalancerPoolResponse.decode(new _m0.Reader(data)));
  }

  migrateSharesToFullRangeConcentratedPosition(request: MsgMigrateSharesToFullRangeConcentratedPosition): Promise<MsgMigrateSharesToFullRangeConcentratedPositionResponse> {
    const data = MsgMigrateSharesToFullRangeConcentratedPosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.poolmodels.balancer.v1beta1.Msg", "MigrateSharesToFullRangeConcentratedPosition", data);
    return promise.then(data => MsgMigrateSharesToFullRangeConcentratedPositionResponse.decode(new _m0.Reader(data)));
  }

}