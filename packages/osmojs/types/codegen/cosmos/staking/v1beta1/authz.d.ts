import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * AuthorizationType defines the type of staking module authorization type
 *
 * Since: cosmos-sdk 0.43
 */
export declare enum AuthorizationType {
    /** AUTHORIZATION_TYPE_UNSPECIFIED - AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type */
    AUTHORIZATION_TYPE_UNSPECIFIED = 0,
    /** AUTHORIZATION_TYPE_DELEGATE - AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate */
    AUTHORIZATION_TYPE_DELEGATE = 1,
    /** AUTHORIZATION_TYPE_UNDELEGATE - AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate */
    AUTHORIZATION_TYPE_UNDELEGATE = 2,
    /** AUTHORIZATION_TYPE_REDELEGATE - AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate */
    AUTHORIZATION_TYPE_REDELEGATE = 3,
    UNRECOGNIZED = -1
}
export declare const AuthorizationTypeSDKType: typeof AuthorizationType;
export declare const AuthorizationTypeAmino: typeof AuthorizationType;
export declare function authorizationTypeFromJSON(object: any): AuthorizationType;
export declare function authorizationTypeToJSON(object: AuthorizationType): string;
/**
 * StakeAuthorization defines authorization for delegate/undelegate/redelegate.
 *
 * Since: cosmos-sdk 0.43
 */
export interface StakeAuthorization {
    $typeUrl?: string;
    /**
     * max_tokens specifies the maximum amount of tokens can be delegate to a validator. If it is
     * empty, there is no spend limit and any amount of coins can be delegated.
     */
    maxTokens?: Coin;
    /**
     * allow_list specifies list of validator addresses to whom grantee can delegate tokens on behalf of granter's
     * account.
     */
    allowList?: StakeAuthorization_Validators;
    /** deny_list specifies list of validator addresses to whom grantee can not delegate tokens. */
    denyList?: StakeAuthorization_Validators;
    /** authorization_type defines one of AuthorizationType. */
    authorizationType: AuthorizationType;
}
export interface StakeAuthorizationProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization";
    value: Uint8Array;
}
/**
 * StakeAuthorization defines authorization for delegate/undelegate/redelegate.
 *
 * Since: cosmos-sdk 0.43
 */
export interface StakeAuthorizationAmino {
    /**
     * max_tokens specifies the maximum amount of tokens can be delegate to a validator. If it is
     * empty, there is no spend limit and any amount of coins can be delegated.
     */
    max_tokens?: CoinAmino;
    /**
     * allow_list specifies list of validator addresses to whom grantee can delegate tokens on behalf of granter's
     * account.
     */
    allow_list?: StakeAuthorization_ValidatorsAmino;
    /** deny_list specifies list of validator addresses to whom grantee can not delegate tokens. */
    deny_list?: StakeAuthorization_ValidatorsAmino;
    /** authorization_type defines one of AuthorizationType. */
    authorization_type: AuthorizationType;
}
export interface StakeAuthorizationAminoMsg {
    type: "cosmos-sdk/StakeAuthorization";
    value: StakeAuthorizationAmino;
}
/**
 * StakeAuthorization defines authorization for delegate/undelegate/redelegate.
 *
 * Since: cosmos-sdk 0.43
 */
export interface StakeAuthorizationSDKType {
    $typeUrl?: string;
    max_tokens?: CoinSDKType;
    allow_list?: StakeAuthorization_ValidatorsSDKType;
    deny_list?: StakeAuthorization_ValidatorsSDKType;
    authorization_type: AuthorizationType;
}
/** Validators defines list of validator addresses. */
export interface StakeAuthorization_Validators {
    address: string[];
}
export interface StakeAuthorization_ValidatorsProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.Validators";
    value: Uint8Array;
}
/** Validators defines list of validator addresses. */
export interface StakeAuthorization_ValidatorsAmino {
    address: string[];
}
export interface StakeAuthorization_ValidatorsAminoMsg {
    type: "cosmos-sdk/Validators";
    value: StakeAuthorization_ValidatorsAmino;
}
/** Validators defines list of validator addresses. */
export interface StakeAuthorization_ValidatorsSDKType {
    address: string[];
}
export declare const StakeAuthorization: {
    typeUrl: string;
    encode(message: StakeAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakeAuthorization;
    fromPartial(object: Partial<StakeAuthorization>): StakeAuthorization;
    fromAmino(object: StakeAuthorizationAmino): StakeAuthorization;
    toAmino(message: StakeAuthorization): StakeAuthorizationAmino;
    fromAminoMsg(object: StakeAuthorizationAminoMsg): StakeAuthorization;
    toAminoMsg(message: StakeAuthorization): StakeAuthorizationAminoMsg;
    fromProtoMsg(message: StakeAuthorizationProtoMsg): StakeAuthorization;
    toProto(message: StakeAuthorization): Uint8Array;
    toProtoMsg(message: StakeAuthorization): StakeAuthorizationProtoMsg;
};
export declare const StakeAuthorization_Validators: {
    typeUrl: string;
    encode(message: StakeAuthorization_Validators, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakeAuthorization_Validators;
    fromPartial(object: Partial<StakeAuthorization_Validators>): StakeAuthorization_Validators;
    fromAmino(object: StakeAuthorization_ValidatorsAmino): StakeAuthorization_Validators;
    toAmino(message: StakeAuthorization_Validators): StakeAuthorization_ValidatorsAmino;
    fromAminoMsg(object: StakeAuthorization_ValidatorsAminoMsg): StakeAuthorization_Validators;
    toAminoMsg(message: StakeAuthorization_Validators): StakeAuthorization_ValidatorsAminoMsg;
    fromProtoMsg(message: StakeAuthorization_ValidatorsProtoMsg): StakeAuthorization_Validators;
    toProto(message: StakeAuthorization_Validators): Uint8Array;
    toProtoMsg(message: StakeAuthorization_Validators): StakeAuthorization_ValidatorsProtoMsg;
};
