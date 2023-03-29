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

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    tokenPairArbRoutes: [],
    baseDenoms: [],
    poolWeights: undefined,
    daysSinceModuleGenesis: Long.UZERO,
    developerFees: [],
    latestBlockHeight: Long.UZERO,
    developerAddress: "",
    maxPoolPointsPerBlock: Long.UZERO,
    maxPoolPointsPerTx: Long.UZERO,
    pointCountForBlock: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.tokenPairArbRoutes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.poolWeights !== undefined) {
      PoolWeights.encode(message.poolWeights, writer.uint32(34).fork()).ldelim();
    }

    if (!message.daysSinceModuleGenesis.isZero()) {
      writer.uint32(40).uint64(message.daysSinceModuleGenesis);
    }

    for (const v of message.developerFees) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (!message.latestBlockHeight.isZero()) {
      writer.uint32(56).uint64(message.latestBlockHeight);
    }

    if (message.developerAddress !== "") {
      writer.uint32(66).string(message.developerAddress);
    }

    if (!message.maxPoolPointsPerBlock.isZero()) {
      writer.uint32(72).uint64(message.maxPoolPointsPerBlock);
    }

    if (!message.maxPoolPointsPerTx.isZero()) {
      writer.uint32(80).uint64(message.maxPoolPointsPerTx);
    }

    if (!message.pointCountForBlock.isZero()) {
      writer.uint32(88).uint64(message.pointCountForBlock);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.tokenPairArbRoutes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;

        case 3:
          message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
          break;

        case 4:
          message.poolWeights = PoolWeights.decode(reader, reader.uint32());
          break;

        case 5:
          message.daysSinceModuleGenesis = (reader.uint64() as Long);
          break;

        case 6:
          message.developerFees.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.latestBlockHeight = (reader.uint64() as Long);
          break;

        case 8:
          message.developerAddress = reader.string();
          break;

        case 9:
          message.maxPoolPointsPerBlock = (reader.uint64() as Long);
          break;

        case 10:
          message.maxPoolPointsPerTx = (reader.uint64() as Long);
          break;

        case 11:
          message.pointCountForBlock = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenPairArbRoutes = object.tokenPairArbRoutes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    message.baseDenoms = object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? PoolWeights.fromPartial(object.poolWeights) : undefined;
    message.daysSinceModuleGenesis = object.daysSinceModuleGenesis !== undefined && object.daysSinceModuleGenesis !== null ? Long.fromValue(object.daysSinceModuleGenesis) : Long.UZERO;
    message.developerFees = object.developerFees?.map(e => Coin.fromPartial(e)) || [];
    message.latestBlockHeight = object.latestBlockHeight !== undefined && object.latestBlockHeight !== null ? Long.fromValue(object.latestBlockHeight) : Long.UZERO;
    message.developerAddress = object.developerAddress ?? "";
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? Long.fromValue(object.maxPoolPointsPerBlock) : Long.UZERO;
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? Long.fromValue(object.maxPoolPointsPerTx) : Long.UZERO;
    message.pointCountForBlock = object.pointCountForBlock !== undefined && object.pointCountForBlock !== null ? Long.fromValue(object.pointCountForBlock) : Long.UZERO;
    return message;
  }

};