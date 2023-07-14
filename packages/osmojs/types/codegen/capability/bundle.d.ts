import * as _42 from "./v1/capability";
import * as _43 from "./v1/genesis";
export declare namespace capability {
    const v1: {
        GenesisOwners: {
            typeUrl: string;
            encode(message: _43.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.GenesisOwners;
            fromPartial(object: Partial<_43.GenesisOwners>): _43.GenesisOwners;
            fromAmino(object: _43.GenesisOwnersAmino): _43.GenesisOwners;
            toAmino(message: _43.GenesisOwners): _43.GenesisOwnersAmino;
            fromAminoMsg(object: _43.GenesisOwnersAminoMsg): _43.GenesisOwners;
            fromProtoMsg(message: _43.GenesisOwnersProtoMsg): _43.GenesisOwners;
            toProto(message: _43.GenesisOwners): Uint8Array;
            toProtoMsg(message: _43.GenesisOwners): _43.GenesisOwnersProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _43.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.GenesisState;
            fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
            fromAmino(object: _43.GenesisStateAmino): _43.GenesisState;
            toAmino(message: _43.GenesisState): _43.GenesisStateAmino;
            fromAminoMsg(object: _43.GenesisStateAminoMsg): _43.GenesisState;
            fromProtoMsg(message: _43.GenesisStateProtoMsg): _43.GenesisState;
            toProto(message: _43.GenesisState): Uint8Array;
            toProtoMsg(message: _43.GenesisState): _43.GenesisStateProtoMsg;
        };
        Capability: {
            typeUrl: string;
            encode(message: _42.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.Capability;
            fromPartial(object: Partial<_42.Capability>): _42.Capability;
            fromAmino(object: _42.CapabilityAmino): _42.Capability;
            toAmino(message: _42.Capability): _42.CapabilityAmino;
            fromAminoMsg(object: _42.CapabilityAminoMsg): _42.Capability;
            fromProtoMsg(message: _42.CapabilityProtoMsg): _42.Capability;
            toProto(message: _42.Capability): Uint8Array;
            toProtoMsg(message: _42.Capability): _42.CapabilityProtoMsg;
        };
        Owner: {
            typeUrl: string;
            encode(message: _42.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.Owner;
            fromPartial(object: Partial<_42.Owner>): _42.Owner;
            fromAmino(object: _42.OwnerAmino): _42.Owner;
            toAmino(message: _42.Owner): _42.OwnerAmino;
            fromAminoMsg(object: _42.OwnerAminoMsg): _42.Owner;
            fromProtoMsg(message: _42.OwnerProtoMsg): _42.Owner;
            toProto(message: _42.Owner): Uint8Array;
            toProtoMsg(message: _42.Owner): _42.OwnerProtoMsg;
        };
        CapabilityOwners: {
            typeUrl: string;
            encode(message: _42.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.CapabilityOwners;
            fromPartial(object: Partial<_42.CapabilityOwners>): _42.CapabilityOwners;
            fromAmino(object: _42.CapabilityOwnersAmino): _42.CapabilityOwners;
            toAmino(message: _42.CapabilityOwners): _42.CapabilityOwnersAmino;
            fromAminoMsg(object: _42.CapabilityOwnersAminoMsg): _42.CapabilityOwners;
            fromProtoMsg(message: _42.CapabilityOwnersProtoMsg): _42.CapabilityOwners;
            toProto(message: _42.CapabilityOwners): Uint8Array;
            toProtoMsg(message: _42.CapabilityOwners): _42.CapabilityOwnersProtoMsg;
        };
    };
}
