import { BinaryReader, BinaryWriter } from "../../binary";
/** Params holds parameters for the incentives module */
export interface Params {
    /**
     * distr_epoch_identifier is what epoch type distribution will be triggered by
     * (day, week, etc.)
     */
    distrEpochIdentifier: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.incentives.Params";
    value: Uint8Array;
}
/** Params holds parameters for the incentives module */
export interface ParamsAmino {
    /**
     * distr_epoch_identifier is what epoch type distribution will be triggered by
     * (day, week, etc.)
     */
    distr_epoch_identifier: string;
}
export interface ParamsAminoMsg {
    type: "osmosis/incentives/params";
    value: ParamsAmino;
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
    distr_epoch_identifier: string;
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
