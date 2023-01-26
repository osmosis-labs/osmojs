import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import * as _m0 from "protobufjs/minimal";
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequest {
    /** user account address */
    address: string;
}
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequestSDKType {
    /** user account address */
    address: string;
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponse {
    preferences: ValidatorPreference[];
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponseSDKType {
    preferences: ValidatorPreferenceSDKType[];
}
export declare const UserValidatorPreferencesRequest: {
    encode(message: UserValidatorPreferencesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserValidatorPreferencesRequest;
    fromPartial(object: Partial<UserValidatorPreferencesRequest>): UserValidatorPreferencesRequest;
};
export declare const UserValidatorPreferencesResponse: {
    encode(message: UserValidatorPreferencesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserValidatorPreferencesResponse;
    fromPartial(object: Partial<UserValidatorPreferencesResponse>): UserValidatorPreferencesResponse;
};
