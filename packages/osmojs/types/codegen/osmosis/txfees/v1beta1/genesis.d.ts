import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisState {
    basedenom: string;
    feetokens: FeeToken[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisStateAmino {
    basedenom: string;
    feetokens: FeeTokenAmino[];
}
export interface GenesisStateAminoMsg {
    type: "osmosis/txfees/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisStateSDKType {
    basedenom: string;
    feetokens: FeeTokenSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
