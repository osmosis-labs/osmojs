import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgLockTokens {
    owner: string;
    duration: Duration;
    coins: Coin[];
}
export interface MsgLockTokensSDKType {
    owner: string;
    duration: DurationSDKType;
    coins: CoinSDKType[];
}
export interface MsgLockTokensResponse {
    ID: Long;
}
export interface MsgLockTokensResponseSDKType {
    ID: Long;
}
export interface MsgBeginUnlockingAll {
    owner: string;
}
export interface MsgBeginUnlockingAllSDKType {
    owner: string;
}
export interface MsgBeginUnlockingAllResponse {
    unlocks: PeriodLock[];
}
export interface MsgBeginUnlockingAllResponseSDKType {
    unlocks: PeriodLockSDKType[];
}
export interface MsgBeginUnlocking {
    owner: string;
    ID: Long;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: Coin[];
}
export interface MsgBeginUnlockingSDKType {
    owner: string;
    ID: Long;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: CoinSDKType[];
}
export interface MsgBeginUnlockingResponse {
    success: boolean;
}
export interface MsgBeginUnlockingResponseSDKType {
    success: boolean;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockup {
    owner: string;
    ID: Long;
    /**
     * duration to be set. fails if lower than the current duration, or is
     * unlocking
     */
    duration: Duration;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupSDKType {
    owner: string;
    ID: Long;
    /**
     * duration to be set. fails if lower than the current duration, or is
     * unlocking
     */
    duration: DurationSDKType;
}
export interface MsgExtendLockupResponse {
    success: boolean;
}
export interface MsgExtendLockupResponseSDKType {
    success: boolean;
}
export declare const MsgLockTokens: {
    encode(message: MsgLockTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockTokens;
    fromPartial(object: DeepPartial<MsgLockTokens>): MsgLockTokens;
    fromSDK(object: MsgLockTokensSDKType): MsgLockTokens;
    toSDK(message: MsgLockTokens): MsgLockTokensSDKType;
};
export declare const MsgLockTokensResponse: {
    encode(message: MsgLockTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockTokensResponseSDKType;
    fromPartial(object: DeepPartial<MsgLockTokensResponse>): MsgLockTokensResponse;
    fromSDK(object: MsgLockTokensResponseSDKType): MsgLockTokensResponse;
    toSDK(message: MsgLockTokensResponse): MsgLockTokensResponseSDKType;
};
export declare const MsgBeginUnlockingAll: {
    encode(message: MsgBeginUnlockingAll, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingAll;
    fromPartial(object: DeepPartial<MsgBeginUnlockingAll>): MsgBeginUnlockingAll;
    fromSDK(object: MsgBeginUnlockingAllSDKType): MsgBeginUnlockingAll;
    toSDK(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllSDKType;
};
export declare const MsgBeginUnlockingAllResponse: {
    encode(message: MsgBeginUnlockingAllResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingAllResponseSDKType;
    fromPartial(object: DeepPartial<MsgBeginUnlockingAllResponse>): MsgBeginUnlockingAllResponse;
    fromSDK(object: MsgBeginUnlockingAllResponseSDKType): MsgBeginUnlockingAllResponse;
    toSDK(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseSDKType;
};
export declare const MsgBeginUnlocking: {
    encode(message: MsgBeginUnlocking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlocking;
    fromPartial(object: DeepPartial<MsgBeginUnlocking>): MsgBeginUnlocking;
    fromSDK(object: MsgBeginUnlockingSDKType): MsgBeginUnlocking;
    toSDK(message: MsgBeginUnlocking): MsgBeginUnlockingSDKType;
};
export declare const MsgBeginUnlockingResponse: {
    encode(message: MsgBeginUnlockingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingResponseSDKType;
    fromPartial(object: DeepPartial<MsgBeginUnlockingResponse>): MsgBeginUnlockingResponse;
    fromSDK(object: MsgBeginUnlockingResponseSDKType): MsgBeginUnlockingResponse;
    toSDK(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseSDKType;
};
export declare const MsgExtendLockup: {
    encode(message: MsgExtendLockup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExtendLockup;
    fromPartial(object: DeepPartial<MsgExtendLockup>): MsgExtendLockup;
    fromSDK(object: MsgExtendLockupSDKType): MsgExtendLockup;
    toSDK(message: MsgExtendLockup): MsgExtendLockupSDKType;
};
export declare const MsgExtendLockupResponse: {
    encode(message: MsgExtendLockupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExtendLockupResponseSDKType;
    fromPartial(object: DeepPartial<MsgExtendLockupResponse>): MsgExtendLockupResponse;
    fromSDK(object: MsgExtendLockupResponseSDKType): MsgExtendLockupResponse;
    toSDK(message: MsgExtendLockupResponse): MsgExtendLockupResponseSDKType;
};
