import * as _57 from "./v1/capability";
import * as _58 from "./v1/genesis";
export declare namespace capability {
    const v1: {
        GenesisOwners: {
            typeUrl: string;
            encode(message: _58.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GenesisOwners;
            fromPartial(object: Partial<_58.GenesisOwners>): _58.GenesisOwners;
            fromAmino(object: _58.GenesisOwnersAmino): _58.GenesisOwners;
            toAmino(message: _58.GenesisOwners): _58.GenesisOwnersAmino;
            fromAminoMsg(object: _58.GenesisOwnersAminoMsg): _58.GenesisOwners;
            fromProtoMsg(message: _58.GenesisOwnersProtoMsg): _58.GenesisOwners;
            toProto(message: _58.GenesisOwners): Uint8Array;
            toProtoMsg(message: _58.GenesisOwners): _58.GenesisOwnersProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GenesisState;
            fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
            fromAmino(object: _58.GenesisStateAmino): _58.GenesisState;
            toAmino(message: _58.GenesisState): _58.GenesisStateAmino;
            fromAminoMsg(object: _58.GenesisStateAminoMsg): _58.GenesisState;
            fromProtoMsg(message: _58.GenesisStateProtoMsg): _58.GenesisState;
            toProto(message: _58.GenesisState): Uint8Array;
            toProtoMsg(message: _58.GenesisState): _58.GenesisStateProtoMsg;
        };
        Capability: {
            typeUrl: string;
            encode(message: _57.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Capability;
            fromPartial(object: Partial<_57.Capability>): _57.Capability;
            fromAmino(object: _57.CapabilityAmino): _57.Capability;
            toAmino(message: _57.Capability): _57.CapabilityAmino;
            fromAminoMsg(object: _57.CapabilityAminoMsg): _57.Capability;
            fromProtoMsg(message: _57.CapabilityProtoMsg): _57.Capability;
            toProto(message: _57.Capability): Uint8Array;
            toProtoMsg(message: _57.Capability): _57.CapabilityProtoMsg;
        };
        Owner: {
            typeUrl: string;
            encode(message: _57.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Owner;
            fromPartial(object: Partial<_57.Owner>): _57.Owner;
            fromAmino(object: _57.OwnerAmino): _57.Owner;
            toAmino(message: _57.Owner): _57.OwnerAmino;
            fromAminoMsg(object: _57.OwnerAminoMsg): _57.Owner;
            fromProtoMsg(message: _57.OwnerProtoMsg): _57.Owner;
            toProto(message: _57.Owner): Uint8Array;
            toProtoMsg(message: _57.Owner): _57.OwnerProtoMsg;
        };
        CapabilityOwners: {
            typeUrl: string;
            encode(message: _57.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.CapabilityOwners;
            fromPartial(object: Partial<_57.CapabilityOwners>): _57.CapabilityOwners;
            fromAmino(object: _57.CapabilityOwnersAmino): _57.CapabilityOwners;
            toAmino(message: _57.CapabilityOwners): _57.CapabilityOwnersAmino;
            fromAminoMsg(object: _57.CapabilityOwnersAminoMsg): _57.CapabilityOwners;
            fromProtoMsg(message: _57.CapabilityOwnersProtoMsg): _57.CapabilityOwners;
            toProto(message: _57.CapabilityOwners): Uint8Array;
            toProtoMsg(message: _57.CapabilityOwners): _57.CapabilityOwnersProtoMsg;
        };
    };
}
