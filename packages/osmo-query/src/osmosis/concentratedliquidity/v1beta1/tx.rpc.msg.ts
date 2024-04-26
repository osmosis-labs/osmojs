//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreatePosition, MsgCreatePositionResponse, MsgWithdrawPosition, MsgWithdrawPositionResponse, MsgAddToPosition, MsgAddToPositionResponse, MsgCollectSpreadRewards, MsgCollectSpreadRewardsResponse, MsgCollectIncentives, MsgCollectIncentivesResponse, MsgTransferPositions, MsgTransferPositionsResponse } from "./tx";
export interface Msg {
  createPosition(request: MsgCreatePosition): Promise<MsgCreatePositionResponse>;
  withdrawPosition(request: MsgWithdrawPosition): Promise<MsgWithdrawPositionResponse>;
  /**
   * AddToPosition attempts to add amount0 and amount1 to a position
   * with the given position id.
   * To maintain backwards-compatibility with future implementations of
   * charging, this function deletes the old position and creates a new one with
   * the resulting amount after addition.
   */
  addToPosition(request: MsgAddToPosition): Promise<MsgAddToPositionResponse>;
  collectSpreadRewards(request: MsgCollectSpreadRewards): Promise<MsgCollectSpreadRewardsResponse>;
  collectIncentives(request: MsgCollectIncentives): Promise<MsgCollectIncentivesResponse>;
  /**
   * TransferPositions transfers ownership of a set of one or more positions
   * from a sender to a recipient.
   */
  transferPositions(request: MsgTransferPositions): Promise<MsgTransferPositionsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createPosition = this.createPosition.bind(this);
    this.withdrawPosition = this.withdrawPosition.bind(this);
    this.addToPosition = this.addToPosition.bind(this);
    this.collectSpreadRewards = this.collectSpreadRewards.bind(this);
    this.collectIncentives = this.collectIncentives.bind(this);
    this.transferPositions = this.transferPositions.bind(this);
  }
  createPosition(request: MsgCreatePosition): Promise<MsgCreatePositionResponse> {
    const data = MsgCreatePosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CreatePosition", data);
    return promise.then(data => MsgCreatePositionResponse.decode(new BinaryReader(data)));
  }
  withdrawPosition(request: MsgWithdrawPosition): Promise<MsgWithdrawPositionResponse> {
    const data = MsgWithdrawPosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "WithdrawPosition", data);
    return promise.then(data => MsgWithdrawPositionResponse.decode(new BinaryReader(data)));
  }
  addToPosition(request: MsgAddToPosition): Promise<MsgAddToPositionResponse> {
    const data = MsgAddToPosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "AddToPosition", data);
    return promise.then(data => MsgAddToPositionResponse.decode(new BinaryReader(data)));
  }
  collectSpreadRewards(request: MsgCollectSpreadRewards): Promise<MsgCollectSpreadRewardsResponse> {
    const data = MsgCollectSpreadRewards.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CollectSpreadRewards", data);
    return promise.then(data => MsgCollectSpreadRewardsResponse.decode(new BinaryReader(data)));
  }
  collectIncentives(request: MsgCollectIncentives): Promise<MsgCollectIncentivesResponse> {
    const data = MsgCollectIncentives.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CollectIncentives", data);
    return promise.then(data => MsgCollectIncentivesResponse.decode(new BinaryReader(data)));
  }
  transferPositions(request: MsgTransferPositions): Promise<MsgTransferPositionsResponse> {
    const data = MsgTransferPositions.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "TransferPositions", data);
    return promise.then(data => MsgTransferPositionsResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};