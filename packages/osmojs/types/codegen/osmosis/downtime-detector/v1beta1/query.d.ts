import { Downtime } from "./downtime_duration";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequest {
    downtime: Downtime;
    recovery?: Duration;
}
export interface RecoveredSinceDowntimeOfLengthRequestProtoMsg {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest";
    value: Uint8Array;
}
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequestAmino {
    downtime: Downtime;
    recovery?: DurationAmino;
}
export interface RecoveredSinceDowntimeOfLengthRequestAminoMsg {
    type: "osmosis/downtimedetector/recovered-since-downtime-of-length-request";
    value: RecoveredSinceDowntimeOfLengthRequestAmino;
}
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequestSDKType {
    downtime: Downtime;
    recovery?: DurationSDKType;
}
export interface RecoveredSinceDowntimeOfLengthResponse {
    succesfullyRecovered: boolean;
}
export interface RecoveredSinceDowntimeOfLengthResponseProtoMsg {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse";
    value: Uint8Array;
}
export interface RecoveredSinceDowntimeOfLengthResponseAmino {
    succesfully_recovered: boolean;
}
export interface RecoveredSinceDowntimeOfLengthResponseAminoMsg {
    type: "osmosis/downtimedetector/recovered-since-downtime-of-length-response";
    value: RecoveredSinceDowntimeOfLengthResponseAmino;
}
export interface RecoveredSinceDowntimeOfLengthResponseSDKType {
    succesfully_recovered: boolean;
}
export declare const RecoveredSinceDowntimeOfLengthRequest: {
    typeUrl: string;
    encode(message: RecoveredSinceDowntimeOfLengthRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthRequest;
    fromPartial(object: Partial<RecoveredSinceDowntimeOfLengthRequest>): RecoveredSinceDowntimeOfLengthRequest;
    fromAmino(object: RecoveredSinceDowntimeOfLengthRequestAmino): RecoveredSinceDowntimeOfLengthRequest;
    toAmino(message: RecoveredSinceDowntimeOfLengthRequest): RecoveredSinceDowntimeOfLengthRequestAmino;
    fromAminoMsg(object: RecoveredSinceDowntimeOfLengthRequestAminoMsg): RecoveredSinceDowntimeOfLengthRequest;
    toAminoMsg(message: RecoveredSinceDowntimeOfLengthRequest): RecoveredSinceDowntimeOfLengthRequestAminoMsg;
    fromProtoMsg(message: RecoveredSinceDowntimeOfLengthRequestProtoMsg): RecoveredSinceDowntimeOfLengthRequest;
    toProto(message: RecoveredSinceDowntimeOfLengthRequest): Uint8Array;
    toProtoMsg(message: RecoveredSinceDowntimeOfLengthRequest): RecoveredSinceDowntimeOfLengthRequestProtoMsg;
};
export declare const RecoveredSinceDowntimeOfLengthResponse: {
    typeUrl: string;
    encode(message: RecoveredSinceDowntimeOfLengthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthResponse;
    fromPartial(object: Partial<RecoveredSinceDowntimeOfLengthResponse>): RecoveredSinceDowntimeOfLengthResponse;
    fromAmino(object: RecoveredSinceDowntimeOfLengthResponseAmino): RecoveredSinceDowntimeOfLengthResponse;
    toAmino(message: RecoveredSinceDowntimeOfLengthResponse): RecoveredSinceDowntimeOfLengthResponseAmino;
    fromAminoMsg(object: RecoveredSinceDowntimeOfLengthResponseAminoMsg): RecoveredSinceDowntimeOfLengthResponse;
    toAminoMsg(message: RecoveredSinceDowntimeOfLengthResponse): RecoveredSinceDowntimeOfLengthResponseAminoMsg;
    fromProtoMsg(message: RecoveredSinceDowntimeOfLengthResponseProtoMsg): RecoveredSinceDowntimeOfLengthResponse;
    toProto(message: RecoveredSinceDowntimeOfLengthResponse): Uint8Array;
    toProtoMsg(message: RecoveredSinceDowntimeOfLengthResponse): RecoveredSinceDowntimeOfLengthResponseProtoMsg;
};
