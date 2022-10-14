import { Rpc } from "../../../helpers";
import { MsgCreateSale, MsgCreateSaleResponse, MsgSubscribe, MsgWithdraw, MsgExitSale, MsgExitSaleResponse, MsgFinalizeSale, MsgFinalizeSaleResponse } from "./tx";
import { Empty } from "../../../google/protobuf/empty";
export interface Msg {
    /**
     * CreateSale creates new token sale. Anyone can create a new sale.
     * params.SaleBond OSMO will be charged as a bond (returned in FinalizeSale)
     * to avoid spams.
     * The sale follows the streamswap functionality explained in the
     * x/launchapd/spec
     */
    createSale(request: MsgCreateSale): Promise<MsgCreateSaleResponse>;
    /**
     * Subscribe to a token sale. Any use at any time before the sale end can join
     * the sale by sending `token_in` to the Sale through the Subscribe msg.
     * During the sale, user `token_in` will be automatically charged every
     * epoch to purchase `token_out`.
     */
    subscribe(request: MsgSubscribe): Promise<Empty>;
    /**
     * Withdraw sends back `amount` of unspent tokens_in to the user.
     * If `amount` is empty, it will default to all unspent tokens.
     * User can do it any time unless his deposit is empty.
     */
    withdraw(request: MsgWithdraw): Promise<Empty>;
    /**
     * ExitSale withdraws (by a user who subscribed to the sale) purchased
     * tokens_out from the pool and remained tokens_in. Must be called before
     * the sale end.
     */
    exitSale(request: MsgExitSale): Promise<MsgExitSaleResponse>;
    /**
     * FinalizeSale clean ups the sale and sends income (earned tokens_in) to the
     * Sale recipient. Returns error if called before the Sale end. Anyone can
     * call this method.
     */
    finalizeSale(request: MsgFinalizeSale): Promise<MsgFinalizeSaleResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createSale(request: MsgCreateSale): Promise<MsgCreateSaleResponse>;
    subscribe(request: MsgSubscribe): Promise<Empty>;
    withdraw(request: MsgWithdraw): Promise<Empty>;
    exitSale(request: MsgExitSale): Promise<MsgExitSaleResponse>;
    finalizeSale(request: MsgFinalizeSale): Promise<MsgFinalizeSaleResponse>;
}
