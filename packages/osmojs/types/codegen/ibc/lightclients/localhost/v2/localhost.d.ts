import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import * as _m0 from "protobufjs/minimal";
/** ClientState defines the 09-localhost client state */
export interface ClientState {
    /** the latest block height */
    latestHeight?: Height;
}
export interface ClientStateProtoMsg {
    typeUrl: "/ibc.lightclients.localhost.v2.ClientState";
    value: Uint8Array;
}
/** ClientState defines the 09-localhost client state */
export interface ClientStateAmino {
    /** the latest block height */
    latest_height?: HeightAmino;
}
export interface ClientStateAminoMsg {
    type: "cosmos-sdk/ClientState";
    value: ClientStateAmino;
}
/** ClientState defines the 09-localhost client state */
export interface ClientStateSDKType {
    latest_height?: HeightSDKType;
}
export declare const ClientState: {
    typeUrl: string;
    encode(message: ClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientState;
    fromPartial(object: Partial<ClientState>): ClientState;
    fromAmino(object: ClientStateAmino): ClientState;
    toAmino(message: ClientState): ClientStateAmino;
    fromAminoMsg(object: ClientStateAminoMsg): ClientState;
    toAminoMsg(message: ClientState): ClientStateAminoMsg;
    fromProtoMsg(message: ClientStateProtoMsg): ClientState;
    toProto(message: ClientState): Uint8Array;
    toProtoMsg(message: ClientState): ClientStateProtoMsg;
};
