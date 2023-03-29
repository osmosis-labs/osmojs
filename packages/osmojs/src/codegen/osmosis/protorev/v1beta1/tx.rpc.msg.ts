import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetHotRoutes, MsgSetHotRoutesResponse, MsgSetDeveloperAccount, MsgSetDeveloperAccountResponse } from "./tx";
export interface Msg {
  /**
   * SetHotRoutes sets the hot routes that will be explored when creating
   * cyclic arbitrage routes. Can only be called by the admin account.
   */
  setHotRoutes(request: MsgSetHotRoutes): Promise<MsgSetHotRoutesResponse>;
  /**
   * SetDeveloperAccount sets the account that can withdraw a portion of the
   * profits from the protorev module. This will be Skip's address.
   */

  setDeveloperAccount(request: MsgSetDeveloperAccount): Promise<MsgSetDeveloperAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setHotRoutes = this.setHotRoutes.bind(this);
    this.setDeveloperAccount = this.setDeveloperAccount.bind(this);
  }

  setHotRoutes(request: MsgSetHotRoutes): Promise<MsgSetHotRoutesResponse> {
    const data = MsgSetHotRoutes.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetHotRoutes", data);
    return promise.then(data => MsgSetHotRoutesResponse.decode(new _m0.Reader(data)));
  }

  setDeveloperAccount(request: MsgSetDeveloperAccount): Promise<MsgSetDeveloperAccountResponse> {
    const data = MsgSetDeveloperAccount.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetDeveloperAccount", data);
    return promise.then(data => MsgSetDeveloperAccountResponse.decode(new _m0.Reader(data)));
  }

}