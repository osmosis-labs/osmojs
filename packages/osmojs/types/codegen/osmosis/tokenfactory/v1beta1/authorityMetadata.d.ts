import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
    /** Can be empty for no admin, or a valid osmosis address */
    Admin: string;
}
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadataSDKType {
    /** Can be empty for no admin, or a valid osmosis address */
    Admin: string;
}
export declare const DenomAuthorityMetadata: {
    encode(message: DenomAuthorityMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomAuthorityMetadata;
    fromPartial(object: DeepPartial<DenomAuthorityMetadata>): DenomAuthorityMetadata;
    fromSDK(object: DenomAuthorityMetadataSDKType): DenomAuthorityMetadata;
    toSDK(message: DenomAuthorityMetadata): DenomAuthorityMetadataSDKType;
};
