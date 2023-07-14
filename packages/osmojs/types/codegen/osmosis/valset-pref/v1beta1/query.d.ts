import { ValidatorPreference, ValidatorPreferenceAmino, ValidatorPreferenceSDKType } from "./state";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequest {
    /** user account address */
    address: string;
}
export interface UserValidatorPreferencesRequestProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest";
    value: Uint8Array;
}
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequestAmino {
    /** user account address */
    address: string;
}
export interface UserValidatorPreferencesRequestAminoMsg {
    type: "osmosis/valsetpref/user-validator-preferences-request";
    value: UserValidatorPreferencesRequestAmino;
}
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequestSDKType {
    address: string;
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponse {
    preferences: ValidatorPreference[];
}
export interface UserValidatorPreferencesResponseProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse";
    value: Uint8Array;
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponseAmino {
    preferences: ValidatorPreferenceAmino[];
}
export interface UserValidatorPreferencesResponseAminoMsg {
    type: "osmosis/valsetpref/user-validator-preferences-response";
    value: UserValidatorPreferencesResponseAmino;
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponseSDKType {
    preferences: ValidatorPreferenceSDKType[];
}
export declare const UserValidatorPreferencesRequest: {
    typeUrl: string;
    encode(message: UserValidatorPreferencesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserValidatorPreferencesRequest;
    fromPartial(object: Partial<UserValidatorPreferencesRequest>): UserValidatorPreferencesRequest;
    fromAmino(object: UserValidatorPreferencesRequestAmino): UserValidatorPreferencesRequest;
    toAmino(message: UserValidatorPreferencesRequest): UserValidatorPreferencesRequestAmino;
    fromAminoMsg(object: UserValidatorPreferencesRequestAminoMsg): UserValidatorPreferencesRequest;
    toAminoMsg(message: UserValidatorPreferencesRequest): UserValidatorPreferencesRequestAminoMsg;
    fromProtoMsg(message: UserValidatorPreferencesRequestProtoMsg): UserValidatorPreferencesRequest;
    toProto(message: UserValidatorPreferencesRequest): Uint8Array;
    toProtoMsg(message: UserValidatorPreferencesRequest): UserValidatorPreferencesRequestProtoMsg;
};
export declare const UserValidatorPreferencesResponse: {
    typeUrl: string;
    encode(message: UserValidatorPreferencesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserValidatorPreferencesResponse;
    fromPartial(object: Partial<UserValidatorPreferencesResponse>): UserValidatorPreferencesResponse;
    fromAmino(object: UserValidatorPreferencesResponseAmino): UserValidatorPreferencesResponse;
    toAmino(message: UserValidatorPreferencesResponse): UserValidatorPreferencesResponseAmino;
    fromAminoMsg(object: UserValidatorPreferencesResponseAminoMsg): UserValidatorPreferencesResponse;
    toAminoMsg(message: UserValidatorPreferencesResponse): UserValidatorPreferencesResponseAminoMsg;
    fromProtoMsg(message: UserValidatorPreferencesResponseProtoMsg): UserValidatorPreferencesResponse;
    toProto(message: UserValidatorPreferencesResponse): Uint8Array;
    toProtoMsg(message: UserValidatorPreferencesResponse): UserValidatorPreferencesResponseProtoMsg;
};
