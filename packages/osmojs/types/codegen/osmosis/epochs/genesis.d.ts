import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface EpochInfo {
    identifier: string;
    startTime: Date;
    duration: Duration;
    currentEpoch: Long;
    currentEpochStartTime: Date;
    epochCountingStarted: boolean;
    currentEpochStartHeight: Long;
}
export interface EpochInfoSDKType {
    identifier: string;
    start_time: Date;
    duration: DurationSDKType;
    current_epoch: Long;
    current_epoch_start_time: Date;
    epoch_counting_started: boolean;
    current_epoch_start_height: Long;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    epochs: EpochInfo[];
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
    epochs: EpochInfoSDKType[];
}
export declare const EpochInfo: {
    encode(message: EpochInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochInfo;
    fromPartial(object: DeepPartial<EpochInfo>): EpochInfo;
    fromSDK(object: EpochInfoSDKType): EpochInfo;
    toSDK(message: EpochInfo): EpochInfoSDKType;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromSDK(object: GenesisStateSDKType): GenesisState;
    toSDK(message: GenesisState): GenesisStateSDKType;
};
