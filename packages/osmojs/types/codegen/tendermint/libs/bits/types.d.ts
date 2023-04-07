import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BitArray {
    bits: Long;
    elems: Long[];
}
export interface BitArrayProtoMsg {
    typeUrl: "/tendermint.libs.bits.BitArray";
    value: Uint8Array;
}
export interface BitArrayAmino {
    bits: string;
    elems: string[];
}
export interface BitArrayAminoMsg {
    type: "/tendermint.libs.bits.BitArray";
    value: BitArrayAmino;
}
export interface BitArraySDKType {
    bits: Long;
    elems: Long[];
}
export declare const BitArray: {
    typeUrl: string;
    encode(message: BitArray, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BitArray;
    fromPartial(object: Partial<BitArray>): BitArray;
    fromAmino(object: BitArrayAmino): BitArray;
    toAmino(message: BitArray): BitArrayAmino;
    fromAminoMsg(object: BitArrayAminoMsg): BitArray;
    fromProtoMsg(message: BitArrayProtoMsg): BitArray;
    toProto(message: BitArray): Uint8Array;
    toProtoMsg(message: BitArray): BitArrayProtoMsg;
};
