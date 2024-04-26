//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType, DistrInfo, DistrInfoAmino, DistrInfoSDKType, AnyPoolToInternalGauges, AnyPoolToInternalGaugesAmino, AnyPoolToInternalGaugesSDKType, ConcentratedPoolToNoLockGauges, ConcentratedPoolToNoLockGaugesAmino, ConcentratedPoolToNoLockGaugesSDKType } from "./incentives";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  lockableDurations: Duration[];
  distrInfo?: DistrInfo;
  /**
   * any_pool_to_internal_gauges defines the gauges for any pool to internal
   * pool. For every pool type (e.g. LP, Concentrated, etc), there is one such
   * link
   */
  anyPoolToInternalGauges?: AnyPoolToInternalGauges;
  /**
   * concentrated_pool_to_no_lock_gauges defines the no lock gauges for
   * concentrated pool. This only exists between concentrated pool and no lock
   * gauges. Both external and internal gauges are included.
   */
  concentratedPoolToNoLockGauges?: ConcentratedPoolToNoLockGauges;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  lockable_durations?: DurationAmino[];
  distr_info?: DistrInfoAmino;
  /**
   * any_pool_to_internal_gauges defines the gauges for any pool to internal
   * pool. For every pool type (e.g. LP, Concentrated, etc), there is one such
   * link
   */
  any_pool_to_internal_gauges?: AnyPoolToInternalGaugesAmino;
  /**
   * concentrated_pool_to_no_lock_gauges defines the no lock gauges for
   * concentrated pool. This only exists between concentrated pool and no lock
   * gauges. Both external and internal gauges are included.
   */
  concentrated_pool_to_no_lock_gauges?: ConcentratedPoolToNoLockGaugesAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/poolincentives/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  lockable_durations: DurationSDKType[];
  distr_info?: DistrInfoSDKType;
  any_pool_to_internal_gauges?: AnyPoolToInternalGaugesSDKType;
  concentrated_pool_to_no_lock_gauges?: ConcentratedPoolToNoLockGaugesSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    lockableDurations: [],
    distrInfo: undefined,
    anyPoolToInternalGauges: undefined,
    concentratedPoolToNoLockGauges: undefined
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
  aminoType: "osmosis/poolincentives/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.lockableDurations) && (!o.lockableDurations.length || Duration.is(o.lockableDurations[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.lockable_durations) && (!o.lockable_durations.length || Duration.isSDK(o.lockable_durations[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.lockable_durations) && (!o.lockable_durations.length || Duration.isAmino(o.lockable_durations[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.distrInfo !== undefined) {
      DistrInfo.encode(message.distrInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.anyPoolToInternalGauges !== undefined) {
      AnyPoolToInternalGauges.encode(message.anyPoolToInternalGauges, writer.uint32(34).fork()).ldelim();
    }
    if (message.concentratedPoolToNoLockGauges !== undefined) {
      ConcentratedPoolToNoLockGauges.encode(message.concentratedPoolToNoLockGauges, writer.uint32(42).fork()).ldelim();
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
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        case 3:
          message.distrInfo = DistrInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.anyPoolToInternalGauges = AnyPoolToInternalGauges.decode(reader, reader.uint32());
          break;
        case 5:
          message.concentratedPoolToNoLockGauges = ConcentratedPoolToNoLockGauges.decode(reader, reader.uint32());
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
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? DistrInfo.fromPartial(object.distrInfo) : undefined;
    message.anyPoolToInternalGauges = object.anyPoolToInternalGauges !== undefined && object.anyPoolToInternalGauges !== null ? AnyPoolToInternalGauges.fromPartial(object.anyPoolToInternalGauges) : undefined;
    message.concentratedPoolToNoLockGauges = object.concentratedPoolToNoLockGauges !== undefined && object.concentratedPoolToNoLockGauges !== null ? ConcentratedPoolToNoLockGauges.fromPartial(object.concentratedPoolToNoLockGauges) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.lockableDurations = object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
    if (object.distr_info !== undefined && object.distr_info !== null) {
      message.distrInfo = DistrInfo.fromAmino(object.distr_info);
    }
    if (object.any_pool_to_internal_gauges !== undefined && object.any_pool_to_internal_gauges !== null) {
      message.anyPoolToInternalGauges = AnyPoolToInternalGauges.fromAmino(object.any_pool_to_internal_gauges);
    }
    if (object.concentrated_pool_to_no_lock_gauges !== undefined && object.concentrated_pool_to_no_lock_gauges !== null) {
      message.concentratedPoolToNoLockGauges = ConcentratedPoolToNoLockGauges.fromAmino(object.concentrated_pool_to_no_lock_gauges);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.lockable_durations = message.lockableDurations;
    }
    obj.distr_info = message.distrInfo ? DistrInfo.toAmino(message.distrInfo) : undefined;
    obj.any_pool_to_internal_gauges = message.anyPoolToInternalGauges ? AnyPoolToInternalGauges.toAmino(message.anyPoolToInternalGauges) : undefined;
    obj.concentrated_pool_to_no_lock_gauges = message.concentratedPoolToNoLockGauges ? ConcentratedPoolToNoLockGauges.toAmino(message.concentratedPoolToNoLockGauges) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/poolincentives/genesis-state",
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
      typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);