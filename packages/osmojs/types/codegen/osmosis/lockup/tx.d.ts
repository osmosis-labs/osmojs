import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType } from "./lock";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgLockTokens {
    owner: string;
    duration?: Duration;
    coins: Coin[];
}
export interface MsgLockTokensProtoMsg {
    typeUrl: "/osmosis.lockup.MsgLockTokens";
    value: Uint8Array;
}
export interface MsgLockTokensAmino {
    owner: string;
    duration?: DurationAmino;
    coins: CoinAmino[];
}
export interface MsgLockTokensAminoMsg {
    type: "osmosis/lockup/lock-tokens";
    value: MsgLockTokensAmino;
}
export interface MsgLockTokensSDKType {
    owner: string;
    duration?: DurationSDKType;
    coins: CoinSDKType[];
}
export interface MsgLockTokensResponse {
    ID: Long;
}
export interface MsgLockTokensResponseProtoMsg {
    typeUrl: "/osmosis.lockup.MsgLockTokensResponse";
    value: Uint8Array;
}
export interface MsgLockTokensResponseAmino {
    ID: string;
}
export interface MsgLockTokensResponseAminoMsg {
    type: "osmosis/lockup/lock-tokens-response";
    value: MsgLockTokensResponseAmino;
}
export interface MsgLockTokensResponseSDKType {
    ID: Long;
}
export interface MsgBeginUnlockingAll {
    owner: string;
}
export interface MsgBeginUnlockingAllProtoMsg {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll";
    value: Uint8Array;
}
export interface MsgBeginUnlockingAllAmino {
    owner: string;
}
export interface MsgBeginUnlockingAllAminoMsg {
    type: "osmosis/lockup/begin-unlock-tokens";
    value: MsgBeginUnlockingAllAmino;
}
export interface MsgBeginUnlockingAllSDKType {
    owner: string;
}
export interface MsgBeginUnlockingAllResponse {
    unlocks: PeriodLock[];
}
export interface MsgBeginUnlockingAllResponseProtoMsg {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse";
    value: Uint8Array;
}
export interface MsgBeginUnlockingAllResponseAmino {
    unlocks: PeriodLockAmino[];
}
export interface MsgBeginUnlockingAllResponseAminoMsg {
    type: "osmosis/lockup/begin-unlocking-all-response";
    value: MsgBeginUnlockingAllResponseAmino;
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
export interface MsgBeginUnlockingProtoMsg {
    typeUrl: "/osmosis.lockup.MsgBeginUnlocking";
    value: Uint8Array;
}
export interface MsgBeginUnlockingAmino {
    owner: string;
    ID: string;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: CoinAmino[];
}
export interface MsgBeginUnlockingAminoMsg {
    type: "osmosis/lockup/begin-unlock-period-lock";
    value: MsgBeginUnlockingAmino;
}
export interface MsgBeginUnlockingSDKType {
    owner: string;
    ID: Long;
    coins: CoinSDKType[];
}
export interface MsgBeginUnlockingResponse {
    success: boolean;
    unlockingLockID: Long;
}
export interface MsgBeginUnlockingResponseProtoMsg {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse";
    value: Uint8Array;
}
export interface MsgBeginUnlockingResponseAmino {
    success: boolean;
    unlockingLockID: string;
}
export interface MsgBeginUnlockingResponseAminoMsg {
    type: "osmosis/lockup/begin-unlocking-response";
    value: MsgBeginUnlockingResponseAmino;
}
export interface MsgBeginUnlockingResponseSDKType {
    success: boolean;
    unlockingLockID: Long;
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
    duration?: Duration;
}
export interface MsgExtendLockupProtoMsg {
    typeUrl: "/osmosis.lockup.MsgExtendLockup";
    value: Uint8Array;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupAmino {
    owner: string;
    ID: string;
    /**
     * duration to be set. fails if lower than the current duration, or is
     * unlocking
     */
    duration?: DurationAmino;
}
export interface MsgExtendLockupAminoMsg {
    type: "osmosis/lockup/extend-lockup";
    value: MsgExtendLockupAmino;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupSDKType {
    owner: string;
    ID: Long;
    duration?: DurationSDKType;
}
export interface MsgExtendLockupResponse {
    success: boolean;
}
export interface MsgExtendLockupResponseProtoMsg {
    typeUrl: "/osmosis.lockup.MsgExtendLockupResponse";
    value: Uint8Array;
}
export interface MsgExtendLockupResponseAmino {
    success: boolean;
}
export interface MsgExtendLockupResponseAminoMsg {
    type: "osmosis/lockup/extend-lockup-response";
    value: MsgExtendLockupResponseAmino;
}
export interface MsgExtendLockupResponseSDKType {
    success: boolean;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlock {
    owner: string;
    ID: Long;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: Coin[];
}
export interface MsgForceUnlockProtoMsg {
    typeUrl: "/osmosis.lockup.MsgForceUnlock";
    value: Uint8Array;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlockAmino {
    owner: string;
    ID: string;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: CoinAmino[];
}
export interface MsgForceUnlockAminoMsg {
    type: "osmosis/lockup/force-unlock";
    value: MsgForceUnlockAmino;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlockSDKType {
    owner: string;
    ID: Long;
    coins: CoinSDKType[];
}
export interface MsgForceUnlockResponse {
    success: boolean;
}
export interface MsgForceUnlockResponseProtoMsg {
    typeUrl: "/osmosis.lockup.MsgForceUnlockResponse";
    value: Uint8Array;
}
export interface MsgForceUnlockResponseAmino {
    success: boolean;
}
export interface MsgForceUnlockResponseAminoMsg {
    type: "osmosis/lockup/force-unlock-response";
    value: MsgForceUnlockResponseAmino;
}
export interface MsgForceUnlockResponseSDKType {
    success: boolean;
}
export declare const MsgLockTokens: {
    typeUrl: string;
    encode(message: MsgLockTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockTokens;
    fromPartial(object: Partial<MsgLockTokens>): MsgLockTokens;
    fromAmino(object: MsgLockTokensAmino): MsgLockTokens;
    toAmino(message: MsgLockTokens): MsgLockTokensAmino;
    fromAminoMsg(object: MsgLockTokensAminoMsg): MsgLockTokens;
    toAminoMsg(message: MsgLockTokens): MsgLockTokensAminoMsg;
    fromProtoMsg(message: MsgLockTokensProtoMsg): MsgLockTokens;
    toProto(message: MsgLockTokens): Uint8Array;
    toProtoMsg(message: MsgLockTokens): MsgLockTokensProtoMsg;
};
export declare const MsgLockTokensResponse: {
    typeUrl: string;
    encode(message: MsgLockTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockTokensResponse;
    fromPartial(object: Partial<MsgLockTokensResponse>): MsgLockTokensResponse;
    fromAmino(object: MsgLockTokensResponseAmino): MsgLockTokensResponse;
    toAmino(message: MsgLockTokensResponse): MsgLockTokensResponseAmino;
    fromAminoMsg(object: MsgLockTokensResponseAminoMsg): MsgLockTokensResponse;
    toAminoMsg(message: MsgLockTokensResponse): MsgLockTokensResponseAminoMsg;
    fromProtoMsg(message: MsgLockTokensResponseProtoMsg): MsgLockTokensResponse;
    toProto(message: MsgLockTokensResponse): Uint8Array;
    toProtoMsg(message: MsgLockTokensResponse): MsgLockTokensResponseProtoMsg;
};
export declare const MsgBeginUnlockingAll: {
    typeUrl: string;
    encode(message: MsgBeginUnlockingAll, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingAll;
    fromPartial(object: Partial<MsgBeginUnlockingAll>): MsgBeginUnlockingAll;
    fromAmino(object: MsgBeginUnlockingAllAmino): MsgBeginUnlockingAll;
    toAmino(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllAmino;
    fromAminoMsg(object: MsgBeginUnlockingAllAminoMsg): MsgBeginUnlockingAll;
    toAminoMsg(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllAminoMsg;
    fromProtoMsg(message: MsgBeginUnlockingAllProtoMsg): MsgBeginUnlockingAll;
    toProto(message: MsgBeginUnlockingAll): Uint8Array;
    toProtoMsg(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllProtoMsg;
};
export declare const MsgBeginUnlockingAllResponse: {
    typeUrl: string;
    encode(message: MsgBeginUnlockingAllResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingAllResponse;
    fromPartial(object: Partial<MsgBeginUnlockingAllResponse>): MsgBeginUnlockingAllResponse;
    fromAmino(object: MsgBeginUnlockingAllResponseAmino): MsgBeginUnlockingAllResponse;
    toAmino(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseAmino;
    fromAminoMsg(object: MsgBeginUnlockingAllResponseAminoMsg): MsgBeginUnlockingAllResponse;
    toAminoMsg(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseAminoMsg;
    fromProtoMsg(message: MsgBeginUnlockingAllResponseProtoMsg): MsgBeginUnlockingAllResponse;
    toProto(message: MsgBeginUnlockingAllResponse): Uint8Array;
    toProtoMsg(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseProtoMsg;
};
export declare const MsgBeginUnlocking: {
    typeUrl: string;
    encode(message: MsgBeginUnlocking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlocking;
    fromPartial(object: Partial<MsgBeginUnlocking>): MsgBeginUnlocking;
    fromAmino(object: MsgBeginUnlockingAmino): MsgBeginUnlocking;
    toAmino(message: MsgBeginUnlocking): MsgBeginUnlockingAmino;
    fromAminoMsg(object: MsgBeginUnlockingAminoMsg): MsgBeginUnlocking;
    toAminoMsg(message: MsgBeginUnlocking): MsgBeginUnlockingAminoMsg;
    fromProtoMsg(message: MsgBeginUnlockingProtoMsg): MsgBeginUnlocking;
    toProto(message: MsgBeginUnlocking): Uint8Array;
    toProtoMsg(message: MsgBeginUnlocking): MsgBeginUnlockingProtoMsg;
};
export declare const MsgBeginUnlockingResponse: {
    typeUrl: string;
    encode(message: MsgBeginUnlockingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingResponse;
    fromPartial(object: Partial<MsgBeginUnlockingResponse>): MsgBeginUnlockingResponse;
    fromAmino(object: MsgBeginUnlockingResponseAmino): MsgBeginUnlockingResponse;
    toAmino(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseAmino;
    fromAminoMsg(object: MsgBeginUnlockingResponseAminoMsg): MsgBeginUnlockingResponse;
    toAminoMsg(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseAminoMsg;
    fromProtoMsg(message: MsgBeginUnlockingResponseProtoMsg): MsgBeginUnlockingResponse;
    toProto(message: MsgBeginUnlockingResponse): Uint8Array;
    toProtoMsg(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseProtoMsg;
};
export declare const MsgExtendLockup: {
    typeUrl: string;
    encode(message: MsgExtendLockup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExtendLockup;
    fromPartial(object: Partial<MsgExtendLockup>): MsgExtendLockup;
    fromAmino(object: MsgExtendLockupAmino): MsgExtendLockup;
    toAmino(message: MsgExtendLockup): MsgExtendLockupAmino;
    fromAminoMsg(object: MsgExtendLockupAminoMsg): MsgExtendLockup;
    toAminoMsg(message: MsgExtendLockup): MsgExtendLockupAminoMsg;
    fromProtoMsg(message: MsgExtendLockupProtoMsg): MsgExtendLockup;
    toProto(message: MsgExtendLockup): Uint8Array;
    toProtoMsg(message: MsgExtendLockup): MsgExtendLockupProtoMsg;
};
export declare const MsgExtendLockupResponse: {
    typeUrl: string;
    encode(message: MsgExtendLockupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExtendLockupResponse;
    fromPartial(object: Partial<MsgExtendLockupResponse>): MsgExtendLockupResponse;
    fromAmino(object: MsgExtendLockupResponseAmino): MsgExtendLockupResponse;
    toAmino(message: MsgExtendLockupResponse): MsgExtendLockupResponseAmino;
    fromAminoMsg(object: MsgExtendLockupResponseAminoMsg): MsgExtendLockupResponse;
    toAminoMsg(message: MsgExtendLockupResponse): MsgExtendLockupResponseAminoMsg;
    fromProtoMsg(message: MsgExtendLockupResponseProtoMsg): MsgExtendLockupResponse;
    toProto(message: MsgExtendLockupResponse): Uint8Array;
    toProtoMsg(message: MsgExtendLockupResponse): MsgExtendLockupResponseProtoMsg;
};
export declare const MsgForceUnlock: {
    typeUrl: string;
    encode(message: MsgForceUnlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgForceUnlock;
    fromPartial(object: Partial<MsgForceUnlock>): MsgForceUnlock;
    fromAmino(object: MsgForceUnlockAmino): MsgForceUnlock;
    toAmino(message: MsgForceUnlock): MsgForceUnlockAmino;
    fromAminoMsg(object: MsgForceUnlockAminoMsg): MsgForceUnlock;
    toAminoMsg(message: MsgForceUnlock): MsgForceUnlockAminoMsg;
    fromProtoMsg(message: MsgForceUnlockProtoMsg): MsgForceUnlock;
    toProto(message: MsgForceUnlock): Uint8Array;
    toProtoMsg(message: MsgForceUnlock): MsgForceUnlockProtoMsg;
};
export declare const MsgForceUnlockResponse: {
    typeUrl: string;
    encode(message: MsgForceUnlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgForceUnlockResponse;
    fromPartial(object: Partial<MsgForceUnlockResponse>): MsgForceUnlockResponse;
    fromAmino(object: MsgForceUnlockResponseAmino): MsgForceUnlockResponse;
    toAmino(message: MsgForceUnlockResponse): MsgForceUnlockResponseAmino;
    fromAminoMsg(object: MsgForceUnlockResponseAminoMsg): MsgForceUnlockResponse;
    toAminoMsg(message: MsgForceUnlockResponse): MsgForceUnlockResponseAminoMsg;
    fromProtoMsg(message: MsgForceUnlockResponseProtoMsg): MsgForceUnlockResponse;
    toProto(message: MsgForceUnlockResponse): Uint8Array;
    toProtoMsg(message: MsgForceUnlockResponse): MsgForceUnlockResponseProtoMsg;
};
