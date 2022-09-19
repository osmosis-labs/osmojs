import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * MsgCreateDenom is the sdk.Msg type for allowing an account to create
 * a new denom. It requires a sender address and a subdenomination.
 * The (sender_address, sub_denomination) pair must be unique and cannot be
 * re-used. The resulting denom created is `factory/{creator
 * address}/{subdenom}`. The resultant denom's admin is originally set to be the
 * creator, but this can be changed later. The token denom does not indicate the
 * current admin.
 */
export interface MsgCreateDenom {
    sender: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom: string;
}
/**
 * MsgCreateDenom is the sdk.Msg type for allowing an account to create
 * a new denom. It requires a sender address and a subdenomination.
 * The (sender_address, sub_denomination) pair must be unique and cannot be
 * re-used. The resulting denom created is `factory/{creator
 * address}/{subdenom}`. The resultant denom's admin is originally set to be the
 * creator, but this can be changed later. The token denom does not indicate the
 * current admin.
 */
export interface MsgCreateDenomSDKType {
    sender: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
    newTokenDenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseSDKType {
    new_token_denom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMint {
    sender: string;
    amount: Coin;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintSDKType {
    sender: string;
    amount: CoinSDKType;
}
export interface MsgMintResponse {
}
export interface MsgMintResponseSDKType {
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurn {
    sender: string;
    amount: Coin;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnSDKType {
    sender: string;
    amount: CoinSDKType;
}
export interface MsgBurnResponse {
}
export interface MsgBurnResponseSDKType {
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
    sender: string;
    denom: string;
    newAdmin: string;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdminSDKType {
    sender: string;
    denom: string;
    newAdmin: string;
}
export interface MsgChangeAdminResponse {
}
export interface MsgChangeAdminResponseSDKType {
}
export declare const MsgCreateDenom: {
    encode(message: MsgCreateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom;
    fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom;
    fromSDK(object: MsgCreateDenomSDKType): MsgCreateDenom;
    toSDK(message: MsgCreateDenom): MsgCreateDenomSDKType;
};
export declare const MsgCreateDenomResponse: {
    encode(message: MsgCreateDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponseSDKType;
    fromPartial(object: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
    fromSDK(object: MsgCreateDenomResponseSDKType): MsgCreateDenomResponse;
    toSDK(message: MsgCreateDenomResponse): MsgCreateDenomResponseSDKType;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint;
    fromPartial(object: DeepPartial<MsgMint>): MsgMint;
    fromSDK(object: MsgMintSDKType): MsgMint;
    toSDK(message: MsgMint): MsgMintSDKType;
};
export declare const MsgMintResponse: {
    encode(_: MsgMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponseSDKType;
    fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse;
    fromSDK(_: MsgMintResponseSDKType): MsgMintResponse;
    toSDK(_: MsgMintResponse): MsgMintResponseSDKType;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn;
    fromPartial(object: DeepPartial<MsgBurn>): MsgBurn;
    fromSDK(object: MsgBurnSDKType): MsgBurn;
    toSDK(message: MsgBurn): MsgBurnSDKType;
};
export declare const MsgBurnResponse: {
    encode(_: MsgBurnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponseSDKType;
    fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse;
    fromSDK(_: MsgBurnResponseSDKType): MsgBurnResponse;
    toSDK(_: MsgBurnResponse): MsgBurnResponseSDKType;
};
export declare const MsgChangeAdmin: {
    encode(message: MsgChangeAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdmin;
    fromPartial(object: DeepPartial<MsgChangeAdmin>): MsgChangeAdmin;
    fromSDK(object: MsgChangeAdminSDKType): MsgChangeAdmin;
    toSDK(message: MsgChangeAdmin): MsgChangeAdminSDKType;
};
export declare const MsgChangeAdminResponse: {
    encode(_: MsgChangeAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdminResponseSDKType;
    fromPartial(_: DeepPartial<MsgChangeAdminResponse>): MsgChangeAdminResponse;
    fromSDK(_: MsgChangeAdminResponseSDKType): MsgChangeAdminResponse;
    toSDK(_: MsgChangeAdminResponse): MsgChangeAdminResponseSDKType;
};
