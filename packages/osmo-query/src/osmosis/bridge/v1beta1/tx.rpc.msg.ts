//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgInboundTransfer, MsgInboundTransferResponse, MsgOutboundTransfer, MsgOutboundTransferResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgChangeAssetStatus, MsgChangeAssetStatusResponse } from "./tx";
/** Msg defines the bridge module's gRPC message service. */
export interface Msg {
  /** InboundTransfer is used for inbound transfers (<other_chain> -> OSMO). */
  inboundTransfer(request: MsgInboundTransfer): Promise<MsgInboundTransferResponse>;
  /** OutboundTransfer is used for outbound transfers (OSMO -> <other_chain>). */
  outboundTransfer(request: MsgOutboundTransfer): Promise<MsgOutboundTransferResponse>;
  /** UpdateParams is used for updating module params. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** ChangeAssetStatus will change the provided asset's status. */
  changeAssetStatus(request: MsgChangeAssetStatus): Promise<MsgChangeAssetStatusResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.inboundTransfer = this.inboundTransfer.bind(this);
    this.outboundTransfer = this.outboundTransfer.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.changeAssetStatus = this.changeAssetStatus.bind(this);
  }
  inboundTransfer(request: MsgInboundTransfer): Promise<MsgInboundTransferResponse> {
    const data = MsgInboundTransfer.encode(request).finish();
    const promise = this.rpc.request("osmosis.bridge.v1beta1.Msg", "InboundTransfer", data);
    return promise.then(data => MsgInboundTransferResponse.decode(new BinaryReader(data)));
  }
  outboundTransfer(request: MsgOutboundTransfer): Promise<MsgOutboundTransferResponse> {
    const data = MsgOutboundTransfer.encode(request).finish();
    const promise = this.rpc.request("osmosis.bridge.v1beta1.Msg", "OutboundTransfer", data);
    return promise.then(data => MsgOutboundTransferResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("osmosis.bridge.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  changeAssetStatus(request: MsgChangeAssetStatus): Promise<MsgChangeAssetStatusResponse> {
    const data = MsgChangeAssetStatus.encode(request).finish();
    const promise = this.rpc.request("osmosis.bridge.v1beta1.Msg", "ChangeAssetStatus", data);
    return promise.then(data => MsgChangeAssetStatusResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};