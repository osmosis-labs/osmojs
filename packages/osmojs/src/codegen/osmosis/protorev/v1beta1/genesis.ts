import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType, BaseDenom, BaseDenomAmino, BaseDenomSDKType, PoolWeights, PoolWeightsAmino, PoolWeightsSDKType } from "./protorev";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
  daysSinceModuleGenesis: bigint;
  /** The fees the developer account has accumulated over time. */
  developerFees: Coin[];
  /** The latest block height that the module has processed. */
  latestBlockHeight: bigint;
  /** The developer account address of the module. */
  developerAddress: string;
  /**
   * Max pool points per block i.e. the maximum compute time (in ms)
   * that protorev can use per block.
   */
  maxPoolPointsPerBlock: bigint;
  /**
   * Max pool points per tx i.e. the maximum compute time (in ms) that
   * protorev can use per tx.
   */
  maxPoolPointsPerTx: bigint;
  /** The number of pool points that have been consumed in the current block. */
  pointCountForBlock: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateAmino {
  /** Parameters for the protorev module. */
  params?: ParamsAmino;
  /** Token pair arb routes for the protorev module (hot routes). */
  token_pair_arb_routes: TokenPairArbRoutesAmino[];
  /**
   * The base denominations being used to create cyclic arbitrage routes via the
   * highest liquidity method.
   */
  base_denoms: BaseDenomAmino[];
  /**
   * The pool weights that are being used to calculate the weight (compute cost)
   * of each route.
   */
  pool_weights?: PoolWeightsAmino;
  /** The number of days since module genesis. */
  days_since_module_genesis: string;
  /** The fees the developer account has accumulated over time. */
  developer_fees: CoinAmino[];
  /** The latest block height that the module has processed. */
  latest_block_height: string;
  /** The developer account address of the module. */
  developer_address: string;
  /**
   * Max pool points per block i.e. the maximum compute time (in ms)
   * that protorev can use per block.
   */
  max_pool_points_per_block: string;
  /**
   * Max pool points per tx i.e. the maximum compute time (in ms) that
   * protorev can use per tx.
   */
  max_pool_points_per_tx: string;
  /** The number of pool points that have been consumed in the current block. */
  point_count_for_block: string;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/protorev/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  token_pair_arb_routes: TokenPairArbRoutesSDKType[];
  base_denoms: BaseDenomSDKType[];
  pool_weights?: PoolWeightsSDKType;
  days_since_module_genesis: bigint;
  developer_fees: CoinSDKType[];
  latest_block_height: bigint;
  developer_address: string;
  max_pool_points_per_block: bigint;
  max_pool_points_per_tx: bigint;
  point_count_for_block: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    tokenPairArbRoutes: [],
    baseDenoms: [],
    poolWeights: undefined,
    daysSinceModuleGenesis: BigInt("0"),
    developerFees: [],
    latestBlockHeight: BigInt("0"),
    developerAddress: "",
    maxPoolPointsPerBlock: BigInt("0"),
    maxPoolPointsPerTx: BigInt("0"),
    pointCountForBlock: BigInt("0")
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.protorev.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.daysSinceModuleGenesis !== BigInt(0)) {
      writer.uint32(40).uint64(message.daysSinceModuleGenesis);
    }
    for (const v of message.developerFees) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.latestBlockHeight !== BigInt(0)) {
      writer.uint32(56).uint64(message.latestBlockHeight);
    }
    if (message.developerAddress !== "") {
      writer.uint32(66).string(message.developerAddress);
    }
    if (message.maxPoolPointsPerBlock !== BigInt(0)) {
      writer.uint32(72).uint64(message.maxPoolPointsPerBlock);
    }
    if (message.maxPoolPointsPerTx !== BigInt(0)) {
      writer.uint32(80).uint64(message.maxPoolPointsPerTx);
    }
    if (message.pointCountForBlock !== BigInt(0)) {
      writer.uint32(88).uint64(message.pointCountForBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.daysSinceModuleGenesis = BigInt(reader.uint64().toString());
          break;
        case 6:
          message.developerFees.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.latestBlockHeight = BigInt(reader.uint64().toString());
          break;
        case 8:
          message.developerAddress = reader.string();
          break;
        case 9:
          message.maxPoolPointsPerBlock = BigInt(reader.uint64().toString());
          break;
        case 10:
          message.maxPoolPointsPerTx = BigInt(reader.uint64().toString());
          break;
        case 11:
          message.pointCountForBlock = BigInt(reader.uint64().toString());
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
    message.daysSinceModuleGenesis = object.daysSinceModuleGenesis !== undefined && object.daysSinceModuleGenesis !== null ? BigInt(object.daysSinceModuleGenesis.toString()) : BigInt("0");
    message.developerFees = object.developerFees?.map(e => Coin.fromPartial(e)) || [];
    message.latestBlockHeight = object.latestBlockHeight !== undefined && object.latestBlockHeight !== null ? BigInt(object.latestBlockHeight.toString()) : BigInt("0");
    message.developerAddress = object.developerAddress ?? "";
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt("0");
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt("0");
    message.pointCountForBlock = object.pointCountForBlock !== undefined && object.pointCountForBlock !== null ? BigInt(object.pointCountForBlock.toString()) : BigInt("0");
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      tokenPairArbRoutes: Array.isArray(object?.token_pair_arb_routes) ? object.token_pair_arb_routes.map((e: any) => TokenPairArbRoutes.fromAmino(e)) : [],
      baseDenoms: Array.isArray(object?.base_denoms) ? object.base_denoms.map((e: any) => BaseDenom.fromAmino(e)) : [],
      poolWeights: object?.pool_weights ? PoolWeights.fromAmino(object.pool_weights) : undefined,
      daysSinceModuleGenesis: BigInt(object.days_since_module_genesis),
      developerFees: Array.isArray(object?.developer_fees) ? object.developer_fees.map((e: any) => Coin.fromAmino(e)) : [],
      latestBlockHeight: BigInt(object.latest_block_height),
      developerAddress: object.developer_address,
      maxPoolPointsPerBlock: BigInt(object.max_pool_points_per_block),
      maxPoolPointsPerTx: BigInt(object.max_pool_points_per_tx),
      pointCountForBlock: BigInt(object.point_count_for_block)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.tokenPairArbRoutes) {
      obj.token_pair_arb_routes = message.tokenPairArbRoutes.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
    } else {
      obj.token_pair_arb_routes = [];
    }
    if (message.baseDenoms) {
      obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toAmino(e) : undefined);
    } else {
      obj.base_denoms = [];
    }
    obj.pool_weights = message.poolWeights ? PoolWeights.toAmino(message.poolWeights) : undefined;
    obj.days_since_module_genesis = message.daysSinceModuleGenesis ? message.daysSinceModuleGenesis.toString() : undefined;
    if (message.developerFees) {
      obj.developer_fees = message.developerFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.developer_fees = [];
    }
    obj.latest_block_height = message.latestBlockHeight ? message.latestBlockHeight.toString() : undefined;
    obj.developer_address = message.developerAddress;
    obj.max_pool_points_per_block = message.maxPoolPointsPerBlock ? message.maxPoolPointsPerBlock.toString() : undefined;
    obj.max_pool_points_per_tx = message.maxPoolPointsPerTx ? message.maxPoolPointsPerTx.toString() : undefined;
    obj.point_count_for_block = message.pointCountForBlock ? message.pointCountForBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/protorev/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};