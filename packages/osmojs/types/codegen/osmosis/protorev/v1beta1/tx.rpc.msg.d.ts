import { Rpc } from "../../../helpers";
import { MsgSetHotRoutes, MsgSetHotRoutesResponse, MsgSetDeveloperAccount, MsgSetDeveloperAccountResponse, MsgSetMaxPoolPointsPerTx, MsgSetMaxPoolPointsPerTxResponse, MsgSetMaxPoolPointsPerBlock, MsgSetMaxPoolPointsPerBlockResponse, MsgSetPoolWeights, MsgSetPoolWeightsResponse, MsgSetBaseDenoms, MsgSetBaseDenomsResponse } from "./tx";
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
    /**
     * SetMaxPoolPointsPerTx sets the maximum number of pool points that can be
     * consumed per transaction. Can only be called by the admin account.
     */
    setMaxPoolPointsPerTx(request: MsgSetMaxPoolPointsPerTx): Promise<MsgSetMaxPoolPointsPerTxResponse>;
    /**
     * SetMaxPoolPointsPerBlock sets the maximum number of pool points that can be
     * consumed per block. Can only be called by the admin account.
     */
    setMaxPoolPointsPerBlock(request: MsgSetMaxPoolPointsPerBlock): Promise<MsgSetMaxPoolPointsPerBlockResponse>;
    /**
     * SetPoolWeights sets the weights of each pool type in the store. Can only be
     * called by the admin account.
     */
    setPoolWeights(request: MsgSetPoolWeights): Promise<MsgSetPoolWeightsResponse>;
    /**
     * SetBaseDenoms sets the base denoms that will be used to create cyclic
     * arbitrage routes. Can only be called by the admin account.
     */
    setBaseDenoms(request: MsgSetBaseDenoms): Promise<MsgSetBaseDenomsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setHotRoutes(request: MsgSetHotRoutes): Promise<MsgSetHotRoutesResponse>;
    setDeveloperAccount(request: MsgSetDeveloperAccount): Promise<MsgSetDeveloperAccountResponse>;
    setMaxPoolPointsPerTx(request: MsgSetMaxPoolPointsPerTx): Promise<MsgSetMaxPoolPointsPerTxResponse>;
    setMaxPoolPointsPerBlock(request: MsgSetMaxPoolPointsPerBlock): Promise<MsgSetMaxPoolPointsPerBlockResponse>;
    setPoolWeights(request: MsgSetPoolWeights): Promise<MsgSetPoolWeightsResponse>;
    setBaseDenoms(request: MsgSetBaseDenoms): Promise<MsgSetBaseDenomsResponse>;
}
