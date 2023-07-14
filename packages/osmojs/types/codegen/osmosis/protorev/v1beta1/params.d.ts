import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    /** Boolean whether the protorev module is enabled. */
    enabled: boolean;
    /** The admin account (settings manager) of the protorev module. */
    admin: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /** Boolean whether the protorev module is enabled. */
    enabled: boolean;
    /** The admin account (settings manager) of the protorev module. */
    admin: string;
}
export interface ParamsAminoMsg {
    type: "osmosis/protorev/params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    enabled: boolean;
    admin: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
