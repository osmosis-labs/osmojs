import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgEmitIBCAck, MsgEmitIBCAckResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * EmitIBCAck checks the sender can emit the ack and writes the IBC
   * acknowledgement
   */
  emitIBCAck(request: MsgEmitIBCAck): Promise<MsgEmitIBCAckResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.emitIBCAck = this.emitIBCAck.bind(this);
  }
  emitIBCAck(request: MsgEmitIBCAck): Promise<MsgEmitIBCAckResponse> {
    const data = MsgEmitIBCAck.encode(request).finish();
    const promise = this.rpc.request("osmosis.ibchooks.Msg", "EmitIBCAck", data);
    return promise.then(data => MsgEmitIBCAckResponse.decode(new BinaryReader(data)));
  }
}