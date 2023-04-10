import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecord {
    poolId: Long;
    /**
     * incentive_denom is the denom of the token being distributed as part of this
     * incentive record
     */
    incentiveDenom: string;
    /**
     * incentiveCreator is the address that created the incentive record. This
     * address does not have any special privileges – it is only kept to keep
     * incentive records created by different addresses separate.
     */
    incentiveCreatorAddr: string;
    /** incentive record body holds necessary */
    incentiveRecordBody?: IncentiveRecordBody;
    /**
     * min_uptime is the minimum uptime required for liquidity to qualify for this
     * incentive. It should be always be one of the supported uptimes in
     * types.SupportedUptimes
     */
    minUptime?: Duration;
}
export interface IncentiveRecordProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord";
    value: Uint8Array;
}
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecordAmino {
    pool_id: string;
    /**
     * incentive_denom is the denom of the token being distributed as part of this
     * incentive record
     */
    incentive_denom: string;
    /**
     * incentiveCreator is the address that created the incentive record. This
     * address does not have any special privileges – it is only kept to keep
     * incentive records created by different addresses separate.
     */
    incentive_creator_addr: string;
    /** incentive record body holds necessary */
    incentive_record_body?: IncentiveRecordBodyAmino;
    /**
     * min_uptime is the minimum uptime required for liquidity to qualify for this
     * incentive. It should be always be one of the supported uptimes in
     * types.SupportedUptimes
     */
    min_uptime?: DurationAmino;
}
export interface IncentiveRecordAminoMsg {
    type: "osmosis/concentratedliquidity/incentive-record";
    value: IncentiveRecordAmino;
}
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecordSDKType {
    pool_id: Long;
    incentive_denom: string;
    incentive_creator_addr: string;
    incentive_record_body?: IncentiveRecordBodySDKType;
    min_uptime?: DurationSDKType;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBody {
    /** remaining_amount is the total amount of incentives to be distributed */
    remainingAmount: string;
    /** emission_rate is the incentive emission rate per second */
    emissionRate: string;
    /** start_time is the time when the incentive starts distributing */
    startTime?: Date;
}
export interface IncentiveRecordBodyProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody";
    value: Uint8Array;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBodyAmino {
    /** remaining_amount is the total amount of incentives to be distributed */
    remaining_amount: string;
    /** emission_rate is the incentive emission rate per second */
    emission_rate: string;
    /** start_time is the time when the incentive starts distributing */
    start_time?: Date;
}
export interface IncentiveRecordBodyAminoMsg {
    type: "osmosis/concentratedliquidity/incentive-record-body";
    value: IncentiveRecordBodyAmino;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBodySDKType {
    remaining_amount: string;
    emission_rate: string;
    start_time?: Date;
}
export declare const IncentiveRecord: {
    typeUrl: string;
    encode(message: IncentiveRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncentiveRecord;
    fromPartial(object: Partial<IncentiveRecord>): IncentiveRecord;
    fromAmino(object: IncentiveRecordAmino): IncentiveRecord;
    toAmino(message: IncentiveRecord): IncentiveRecordAmino;
    fromAminoMsg(object: IncentiveRecordAminoMsg): IncentiveRecord;
    toAminoMsg(message: IncentiveRecord): IncentiveRecordAminoMsg;
    fromProtoMsg(message: IncentiveRecordProtoMsg): IncentiveRecord;
    toProto(message: IncentiveRecord): Uint8Array;
    toProtoMsg(message: IncentiveRecord): IncentiveRecordProtoMsg;
};
export declare const IncentiveRecordBody: {
    typeUrl: string;
    encode(message: IncentiveRecordBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncentiveRecordBody;
    fromPartial(object: Partial<IncentiveRecordBody>): IncentiveRecordBody;
    fromAmino(object: IncentiveRecordBodyAmino): IncentiveRecordBody;
    toAmino(message: IncentiveRecordBody): IncentiveRecordBodyAmino;
    fromAminoMsg(object: IncentiveRecordBodyAminoMsg): IncentiveRecordBody;
    toAminoMsg(message: IncentiveRecordBody): IncentiveRecordBodyAminoMsg;
    fromProtoMsg(message: IncentiveRecordBodyProtoMsg): IncentiveRecordBody;
    toProto(message: IncentiveRecordBody): Uint8Array;
    toProtoMsg(message: IncentiveRecordBody): IncentiveRecordBodyProtoMsg;
};
