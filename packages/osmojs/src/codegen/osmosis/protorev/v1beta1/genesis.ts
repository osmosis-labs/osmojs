import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType, BaseDenom, BaseDenomAmino, BaseDenomSDKType, PoolWeights, PoolWeightsAmino, PoolWeightsSDKType, InfoByPoolType, InfoByPoolTypeAmino, InfoByPoolTypeSDKType, CyclicArbTracker, CyclicArbTrackerAmino, CyclicArbTrackerSDKType } from "./protorev";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisState {
  /** Parameters for the protorev module. */
  params: Params;
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
   * 
   * DEPRECATED: This field is deprecated and will be removed in the next
   * release. It is replaced by the `info_by_pool_type` field.
   */
  poolWeights: PoolWeights;
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
  /** All of the profits that have been accumulated by the module. */
  profits: Coin[];
  /**
   * Information that is used to estimate execution time / gas
   * consumption of a swap on a given pool type.
   */
  infoByPoolType: InfoByPoolType;
  cyclicArbTracker?: CyclicArbTracker;
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
  token_pair_arb_routes?: TokenPairArbRoutesAmino[];
  /**
   * The base denominations being used to create cyclic arbitrage routes via the
   * highest liquidity method.
   */
  base_denoms?: BaseDenomAmino[];
  /**
   * The pool weights that are being used to calculate the weight (compute cost)
   * of each route.
   * 
   * DEPRECATED: This field is deprecated and will be removed in the next
   * release. It is replaced by the `info_by_pool_type` field.
   */
  pool_weights?: PoolWeightsAmino;
  /** The number of days since module genesis. */
  days_since_module_genesis?: string;
  /** The fees the developer account has accumulated over time. */
  developer_fees?: CoinAmino[];
  /** The latest block height that the module has processed. */
  latest_block_height?: string;
  /** The developer account address of the module. */
  developer_address?: string;
  /**
   * Max pool points per block i.e. the maximum compute time (in ms)
   * that protorev can use per block.
   */
  max_pool_points_per_block?: string;
  /**
   * Max pool points per tx i.e. the maximum compute time (in ms) that
   * protorev can use per tx.
   */
  max_pool_points_per_tx?: string;
  /** The number of pool points that have been consumed in the current block. */
  point_count_for_block?: string;
  /** All of the profits that have been accumulated by the module. */
  profits?: CoinAmino[];
  /**
   * Information that is used to estimate execution time / gas
   * consumption of a swap on a given pool type.
   */
  info_by_pool_type?: InfoByPoolTypeAmino;
  cyclic_arb_tracker?: CyclicArbTrackerAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/protorev/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  token_pair_arb_routes: TokenPairArbRoutesSDKType[];
  base_denoms: BaseDenomSDKType[];
  pool_weights: PoolWeightsSDKType;
  days_since_module_genesis: bigint;
  developer_fees: CoinSDKType[];
  latest_block_height: bigint;
  developer_address: string;
  max_pool_points_per_block: bigint;
  max_pool_points_per_tx: bigint;
  point_count_for_block: bigint;
  profits: CoinSDKType[];
  info_by_pool_type: InfoByPoolTypeSDKType;
  cyclic_arb_tracker?: CyclicArbTrackerSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tokenPairArbRoutes: [],
    baseDenoms: [],
    poolWeights: PoolWeights.fromPartial({}),
    daysSinceModuleGenesis: BigInt(0),
    developerFees: [],
    latestBlockHeight: BigInt(0),
    developerAddress: "",
    maxPoolPointsPerBlock: BigInt(0),
    maxPoolPointsPerTx: BigInt(0),
    pointCountForBlock: BigInt(0),
    profits: [],
    infoByPoolType: InfoByPoolType.fromPartial({}),
    cyclicArbTracker: undefined
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.protorev.v1beta1.GenesisState",
  aminoType: "osmosis/protorev/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.tokenPairArbRoutes) && (!o.tokenPairArbRoutes.length || TokenPairArbRoutes.is(o.tokenPairArbRoutes[0])) && Array.isArray(o.baseDenoms) && (!o.baseDenoms.length || BaseDenom.is(o.baseDenoms[0])) && PoolWeights.is(o.poolWeights) && typeof o.daysSinceModuleGenesis === "bigint" && Array.isArray(o.developerFees) && (!o.developerFees.length || Coin.is(o.developerFees[0])) && typeof o.latestBlockHeight === "bigint" && typeof o.developerAddress === "string" && typeof o.maxPoolPointsPerBlock === "bigint" && typeof o.maxPoolPointsPerTx === "bigint" && typeof o.pointCountForBlock === "bigint" && Array.isArray(o.profits) && (!o.profits.length || Coin.is(o.profits[0])) && InfoByPoolType.is(o.infoByPoolType));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.token_pair_arb_routes) && (!o.token_pair_arb_routes.length || TokenPairArbRoutes.isSDK(o.token_pair_arb_routes[0])) && Array.isArray(o.base_denoms) && (!o.base_denoms.length || BaseDenom.isSDK(o.base_denoms[0])) && PoolWeights.isSDK(o.pool_weights) && typeof o.days_since_module_genesis === "bigint" && Array.isArray(o.developer_fees) && (!o.developer_fees.length || Coin.isSDK(o.developer_fees[0])) && typeof o.latest_block_height === "bigint" && typeof o.developer_address === "string" && typeof o.max_pool_points_per_block === "bigint" && typeof o.max_pool_points_per_tx === "bigint" && typeof o.point_count_for_block === "bigint" && Array.isArray(o.profits) && (!o.profits.length || Coin.isSDK(o.profits[0])) && InfoByPoolType.isSDK(o.info_by_pool_type));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.token_pair_arb_routes) && (!o.token_pair_arb_routes.length || TokenPairArbRoutes.isAmino(o.token_pair_arb_routes[0])) && Array.isArray(o.base_denoms) && (!o.base_denoms.length || BaseDenom.isAmino(o.base_denoms[0])) && PoolWeights.isAmino(o.pool_weights) && typeof o.days_since_module_genesis === "bigint" && Array.isArray(o.developer_fees) && (!o.developer_fees.length || Coin.isAmino(o.developer_fees[0])) && typeof o.latest_block_height === "bigint" && typeof o.developer_address === "string" && typeof o.max_pool_points_per_block === "bigint" && typeof o.max_pool_points_per_tx === "bigint" && typeof o.point_count_for_block === "bigint" && Array.isArray(o.profits) && (!o.profits.length || Coin.isAmino(o.profits[0])) && InfoByPoolType.isAmino(o.info_by_pool_type));
  },
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
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.infoByPoolType !== undefined) {
      InfoByPoolType.encode(message.infoByPoolType, writer.uint32(106).fork()).ldelim();
    }
    if (message.cyclicArbTracker !== undefined) {
      CyclicArbTracker.encode(message.cyclicArbTracker, writer.uint32(114).fork()).ldelim();
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
          message.daysSinceModuleGenesis = reader.uint64();
          break;
        case 6:
          message.developerFees.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.latestBlockHeight = reader.uint64();
          break;
        case 8:
          message.developerAddress = reader.string();
          break;
        case 9:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        case 10:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        case 11:
          message.pointCountForBlock = reader.uint64();
          break;
        case 12:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;
        case 13:
          message.infoByPoolType = InfoByPoolType.decode(reader, reader.uint32());
          break;
        case 14:
          message.cyclicArbTracker = CyclicArbTracker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      tokenPairArbRoutes: Array.isArray(object?.tokenPairArbRoutes) ? object.tokenPairArbRoutes.map((e: any) => TokenPairArbRoutes.fromJSON(e)) : [],
      baseDenoms: Array.isArray(object?.baseDenoms) ? object.baseDenoms.map((e: any) => BaseDenom.fromJSON(e)) : [],
      poolWeights: isSet(object.poolWeights) ? PoolWeights.fromJSON(object.poolWeights) : undefined,
      daysSinceModuleGenesis: isSet(object.daysSinceModuleGenesis) ? BigInt(object.daysSinceModuleGenesis.toString()) : BigInt(0),
      developerFees: Array.isArray(object?.developerFees) ? object.developerFees.map((e: any) => Coin.fromJSON(e)) : [],
      latestBlockHeight: isSet(object.latestBlockHeight) ? BigInt(object.latestBlockHeight.toString()) : BigInt(0),
      developerAddress: isSet(object.developerAddress) ? String(object.developerAddress) : "",
      maxPoolPointsPerBlock: isSet(object.maxPoolPointsPerBlock) ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0),
      maxPoolPointsPerTx: isSet(object.maxPoolPointsPerTx) ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0),
      pointCountForBlock: isSet(object.pointCountForBlock) ? BigInt(object.pointCountForBlock.toString()) : BigInt(0),
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromJSON(e)) : [],
      infoByPoolType: isSet(object.infoByPoolType) ? InfoByPoolType.fromJSON(object.infoByPoolType) : undefined,
      cyclicArbTracker: isSet(object.cyclicArbTracker) ? CyclicArbTracker.fromJSON(object.cyclicArbTracker) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.tokenPairArbRoutes) {
      obj.tokenPairArbRoutes = message.tokenPairArbRoutes.map(e => e ? TokenPairArbRoutes.toJSON(e) : undefined);
    } else {
      obj.tokenPairArbRoutes = [];
    }
    if (message.baseDenoms) {
      obj.baseDenoms = message.baseDenoms.map(e => e ? BaseDenom.toJSON(e) : undefined);
    } else {
      obj.baseDenoms = [];
    }
    message.poolWeights !== undefined && (obj.poolWeights = message.poolWeights ? PoolWeights.toJSON(message.poolWeights) : undefined);
    message.daysSinceModuleGenesis !== undefined && (obj.daysSinceModuleGenesis = (message.daysSinceModuleGenesis || BigInt(0)).toString());
    if (message.developerFees) {
      obj.developerFees = message.developerFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.developerFees = [];
    }
    message.latestBlockHeight !== undefined && (obj.latestBlockHeight = (message.latestBlockHeight || BigInt(0)).toString());
    message.developerAddress !== undefined && (obj.developerAddress = message.developerAddress);
    message.maxPoolPointsPerBlock !== undefined && (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
    message.maxPoolPointsPerTx !== undefined && (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
    message.pointCountForBlock !== undefined && (obj.pointCountForBlock = (message.pointCountForBlock || BigInt(0)).toString());
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.profits = [];
    }
    message.infoByPoolType !== undefined && (obj.infoByPoolType = message.infoByPoolType ? InfoByPoolType.toJSON(message.infoByPoolType) : undefined);
    message.cyclicArbTracker !== undefined && (obj.cyclicArbTracker = message.cyclicArbTracker ? CyclicArbTracker.toJSON(message.cyclicArbTracker) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenPairArbRoutes = object.tokenPairArbRoutes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    message.baseDenoms = object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? PoolWeights.fromPartial(object.poolWeights) : undefined;
    message.daysSinceModuleGenesis = object.daysSinceModuleGenesis !== undefined && object.daysSinceModuleGenesis !== null ? BigInt(object.daysSinceModuleGenesis.toString()) : BigInt(0);
    message.developerFees = object.developerFees?.map(e => Coin.fromPartial(e)) || [];
    message.latestBlockHeight = object.latestBlockHeight !== undefined && object.latestBlockHeight !== null ? BigInt(object.latestBlockHeight.toString()) : BigInt(0);
    message.developerAddress = object.developerAddress ?? "";
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? BigInt(object.maxPoolPointsPerBlock.toString()) : BigInt(0);
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? BigInt(object.maxPoolPointsPerTx.toString()) : BigInt(0);
    message.pointCountForBlock = object.pointCountForBlock !== undefined && object.pointCountForBlock !== null ? BigInt(object.pointCountForBlock.toString()) : BigInt(0);
    message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
    message.infoByPoolType = object.infoByPoolType !== undefined && object.infoByPoolType !== null ? InfoByPoolType.fromPartial(object.infoByPoolType) : undefined;
    message.cyclicArbTracker = object.cyclicArbTracker !== undefined && object.cyclicArbTracker !== null ? CyclicArbTracker.fromPartial(object.cyclicArbTracker) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.tokenPairArbRoutes = object.token_pair_arb_routes?.map(e => TokenPairArbRoutes.fromAmino(e)) || [];
    message.baseDenoms = object.base_denoms?.map(e => BaseDenom.fromAmino(e)) || [];
    if (object.pool_weights !== undefined && object.pool_weights !== null) {
      message.poolWeights = PoolWeights.fromAmino(object.pool_weights);
    }
    if (object.days_since_module_genesis !== undefined && object.days_since_module_genesis !== null) {
      message.daysSinceModuleGenesis = BigInt(object.days_since_module_genesis);
    }
    message.developerFees = object.developer_fees?.map(e => Coin.fromAmino(e)) || [];
    if (object.latest_block_height !== undefined && object.latest_block_height !== null) {
      message.latestBlockHeight = BigInt(object.latest_block_height);
    }
    if (object.developer_address !== undefined && object.developer_address !== null) {
      message.developerAddress = object.developer_address;
    }
    if (object.max_pool_points_per_block !== undefined && object.max_pool_points_per_block !== null) {
      message.maxPoolPointsPerBlock = BigInt(object.max_pool_points_per_block);
    }
    if (object.max_pool_points_per_tx !== undefined && object.max_pool_points_per_tx !== null) {
      message.maxPoolPointsPerTx = BigInt(object.max_pool_points_per_tx);
    }
    if (object.point_count_for_block !== undefined && object.point_count_for_block !== null) {
      message.pointCountForBlock = BigInt(object.point_count_for_block);
    }
    message.profits = object.profits?.map(e => Coin.fromAmino(e)) || [];
    if (object.info_by_pool_type !== undefined && object.info_by_pool_type !== null) {
      message.infoByPoolType = InfoByPoolType.fromAmino(object.info_by_pool_type);
    }
    if (object.cyclic_arb_tracker !== undefined && object.cyclic_arb_tracker !== null) {
      message.cyclicArbTracker = CyclicArbTracker.fromAmino(object.cyclic_arb_tracker);
    }
    return message;
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
    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.profits = [];
    }
    obj.info_by_pool_type = message.infoByPoolType ? InfoByPoolType.toAmino(message.infoByPoolType) : undefined;
    obj.cyclic_arb_tracker = message.cyclicArbTracker ? CyclicArbTracker.toAmino(message.cyclicArbTracker) : undefined;
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
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);