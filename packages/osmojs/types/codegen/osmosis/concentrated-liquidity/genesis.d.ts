import { TickInfo, TickInfoSDKType } from "./tickInfo";
import { Any, AnySDKType } from "../../google/protobuf/any";
import { IncentiveRecord, IncentiveRecordSDKType } from "./incentive_record";
import { Params, ParamsSDKType } from "./params";
import { Position, PositionSDKType } from "./position";
import { AccumulatorContent, AccumulatorContentSDKType } from "../accum/v1beta1/accum";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTick {
    /** pool id associated with the tick. */
    poolId: Long;
    /** tick's index. */
    tickIndex: Long;
    /** tick's info. */
    info?: TickInfo;
}
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTickSDKType {
    /** pool id associated with the tick. */
    pool_id: Long;
    /** tick's index. */
    tick_index: Long;
    /** tick's info. */
    info?: TickInfoSDKType;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolData {
    /** pool struct */
    pool?: Any;
    /** pool's ticks */
    ticks: FullTick[];
    feeAccumulator?: AccumObject;
    incentivesAccumulators: AccumObject[];
    /** incentive records to be set */
    incentiveRecords: IncentiveRecord[];
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolDataSDKType {
    /** pool struct */
    pool?: AnySDKType;
    /** pool's ticks */
    ticks: FullTickSDKType[];
    fee_accumulator?: AccumObjectSDKType;
    incentives_accumulators: AccumObjectSDKType[];
    /** incentive records to be set */
    incentive_records: IncentiveRecordSDKType[];
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisState {
    /** params are all the parameters of the module */
    params?: Params;
    /** pool data containining serialized pool struct and ticks. */
    poolData: PoolData[];
    positions: Position[];
    nextPositionId: Long;
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisStateSDKType {
    /** params are all the parameters of the module */
    params?: ParamsSDKType;
    /** pool data containining serialized pool struct and ticks. */
    pool_data: PoolDataSDKType[];
    positions: PositionSDKType[];
    next_position_id: Long;
}
export interface AccumObject {
    /** Accumulator's name (pulled from AccumulatorContent) */
    name: string;
    accumContent?: AccumulatorContent;
}
export interface AccumObjectSDKType {
    /** Accumulator's name (pulled from AccumulatorContent) */
    name: string;
    accum_content?: AccumulatorContentSDKType;
}
export declare const FullTick: {
    encode(message: FullTick, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FullTick;
    fromPartial(object: Partial<FullTick>): FullTick;
};
export declare const PoolData: {
    encode(message: PoolData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolData;
    fromPartial(object: Partial<PoolData>): PoolData;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const AccumObject: {
    encode(message: AccumObject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccumObject;
    fromPartial(object: Partial<AccumObject>): AccumObject;
};
