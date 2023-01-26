import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setHotRoutes(request: MsgSetHotRoutes): Promise<MsgSetHotRoutesResponse>;
    setDeveloperAccount(request: MsgSetDeveloperAccount): Promise<MsgSetDeveloperAccountResponse>;
}
