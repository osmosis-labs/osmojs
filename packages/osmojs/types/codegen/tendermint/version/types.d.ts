import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface App {
    protocol: Long;
    software: string;
}
export interface AppProtoMsg {
    typeUrl: "/tendermint.version.App";
    value: Uint8Array;
}
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface AppAmino {
    protocol: string;
    software: string;
}
export interface AppAminoMsg {
    type: "/tendermint.version.App";
    value: AppAmino;
}
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface AppSDKType {
    protocol: Long;
    software: string;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface Consensus {
    block: Long;
    app: Long;
}
export interface ConsensusProtoMsg {
    typeUrl: "/tendermint.version.Consensus";
    value: Uint8Array;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface ConsensusAmino {
    block: string;
    app: string;
}
export interface ConsensusAminoMsg {
    type: "/tendermint.version.Consensus";
    value: ConsensusAmino;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface ConsensusSDKType {
    block: Long;
    app: Long;
}
export declare const App: {
    typeUrl: string;
    encode(message: App, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): App;
    fromPartial(object: Partial<App>): App;
    fromAmino(object: AppAmino): App;
    toAmino(message: App): AppAmino;
    fromAminoMsg(object: AppAminoMsg): App;
    fromProtoMsg(message: AppProtoMsg): App;
    toProto(message: App): Uint8Array;
    toProtoMsg(message: App): AppProtoMsg;
};
export declare const Consensus: {
    typeUrl: string;
    encode(message: Consensus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Consensus;
    fromPartial(object: Partial<Consensus>): Consensus;
    fromAmino(object: ConsensusAmino): Consensus;
    toAmino(message: Consensus): ConsensusAmino;
    fromAminoMsg(object: ConsensusAminoMsg): Consensus;
    fromProtoMsg(message: ConsensusProtoMsg): Consensus;
    toProto(message: Consensus): Uint8Array;
    toProtoMsg(message: Consensus): ConsensusProtoMsg;
};
