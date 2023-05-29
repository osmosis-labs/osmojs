import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKey {
    threshold: number;
    publicKeys: Any[];
}
export interface LegacyAminoPubKeyProtoMsg {
    typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey";
    value: Uint8Array;
}
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKeyAmino {
    threshold: number;
    public_keys: AnyAmino[];
}
export interface LegacyAminoPubKeyAminoMsg {
    type: "tendermint/PubKeyMultisigThreshold";
    value: LegacyAminoPubKeyAmino;
}
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKeySDKType {
    threshold: number;
    public_keys: AnySDKType[];
}
export declare const LegacyAminoPubKey: {
    typeUrl: string;
    encode(message: LegacyAminoPubKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LegacyAminoPubKey;
    fromPartial(object: Partial<LegacyAminoPubKey>): LegacyAminoPubKey;
    fromAmino(object: LegacyAminoPubKeyAmino): LegacyAminoPubKey;
    toAmino(message: LegacyAminoPubKey): LegacyAminoPubKeyAmino;
    fromAminoMsg(object: LegacyAminoPubKeyAminoMsg): LegacyAminoPubKey;
    toAminoMsg(message: LegacyAminoPubKey): LegacyAminoPubKeyAminoMsg;
    fromProtoMsg(message: LegacyAminoPubKeyProtoMsg): LegacyAminoPubKey;
    toProto(message: LegacyAminoPubKey): Uint8Array;
    toProtoMsg(message: LegacyAminoPubKey): LegacyAminoPubKeyProtoMsg;
};
