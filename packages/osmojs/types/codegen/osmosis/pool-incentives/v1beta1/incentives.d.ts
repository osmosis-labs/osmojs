import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface Params {
    /**
     * minted_denom is the denomination of the coin expected to be minted by the
     * minting module. Pool-incentives module doesn’t actually mint the coin
     * itself, but rather manages the distribution of coins that matches the
     * defined minted_denom.
     */
    mintedDenom: string;
}
export interface ParamsSDKType {
    /**
     * minted_denom is the denomination of the coin expected to be minted by the
     * minting module. Pool-incentives module doesn’t actually mint the coin
     * itself, but rather manages the distribution of coins that matches the
     * defined minted_denom.
     */
    minted_denom: string;
}
export interface LockableDurationsInfo {
    lockableDurations: Duration[];
}
export interface LockableDurationsInfoSDKType {
    lockable_durations: DurationSDKType[];
}
export interface DistrInfo {
    totalWeight: string;
    records: DistrRecord[];
}
export interface DistrInfoSDKType {
    total_weight: string;
    records: DistrRecordSDKType[];
}
export interface DistrRecord {
    gaugeId: Long;
    weight: string;
}
export interface DistrRecordSDKType {
    gauge_id: Long;
    weight: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const LockableDurationsInfo: {
    encode(message: LockableDurationsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockableDurationsInfo;
    fromPartial(object: DeepPartial<LockableDurationsInfo>): LockableDurationsInfo;
};
export declare const DistrInfo: {
    encode(message: DistrInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistrInfo;
    fromPartial(object: DeepPartial<DistrInfo>): DistrInfo;
};
export declare const DistrRecord: {
    encode(message: DistrRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistrRecord;
    fromPartial(object: DeepPartial<DistrRecord>): DistrRecord;
};
