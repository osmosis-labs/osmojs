import { Params, ParamsSDKType } from "./params";
import { TokenPairArbRoutes, TokenPairArbRoutesSDKType, BaseDenom, BaseDenomSDKType, PoolWeights, PoolWeightsSDKType } from "./protorev";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisState {
    /** Parameters for the protorev module. */
    params?: Params;
    /** Token pair arb routes for the protorev module (hot routes). */
    tokenPairArbRoutes: TokenPairArbRoutes[];
    /**
     * The base denominations being used to create cyclic arbitrage routes via the
     * highest liquidity method.
     */
    baseDenoms: BaseDenom[];
    /**
     * The pool weights that are being used to calculate the weight (compute cost)
     * of each route.
     */
    poolWeights?: PoolWeights;
    /** The number of days since module genesis. */
    daysSinceModuleGenesis: Long;
    /** The fees the developer account has accumulated over time. */
    developerFees: Coin[];
    /** The latest block height that the module has processed. */
    latestBlockHeight: Long;
    /** The developer account address of the module. */
    developerAddress: string;
    /**
     * Max pool points per block i.e. the maximum compute time (in ms)
     * that protorev can use per block.
     */
    maxPoolPointsPerBlock: Long;
    /**
     * Max pool points per tx i.e. the maximum compute time (in ms) that
     * protorev can use per tx.
     */
    maxPoolPointsPerTx: Long;
    /** The number of pool points that have been consumed in the current block. */
    pointCountForBlock: Long;
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateSDKType {
    /** Parameters for the protorev module. */
    params?: ParamsSDKType;
    /** Token pair arb routes for the protorev module (hot routes). */
    token_pair_arb_routes: TokenPairArbRoutesSDKType[];
    /**
     * The base denominations being used to create cyclic arbitrage routes via the
     * highest liquidity method.
     */
    base_denoms: BaseDenomSDKType[];
    /**
     * The pool weights that are being used to calculate the weight (compute cost)
     * of each route.
     */
    pool_weights?: PoolWeightsSDKType;
    /** The number of days since module genesis. */
    days_since_module_genesis: Long;
    /** The fees the developer account has accumulated over time. */
    developer_fees: CoinSDKType[];
    /** The latest block height that the module has processed. */
    latest_block_height: Long;
    /** The developer account address of the module. */
    developer_address: string;
    /**
     * Max pool points per block i.e. the maximum compute time (in ms)
     * that protorev can use per block.
     */
    max_pool_points_per_block: Long;
    /**
     * Max pool points per tx i.e. the maximum compute time (in ms) that
     * protorev can use per tx.
     */
    max_pool_points_per_tx: Long;
    /** The number of pool points that have been consumed in the current block. */
    point_count_for_block: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
