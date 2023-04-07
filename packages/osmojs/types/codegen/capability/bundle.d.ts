import * as _60 from "./v1/capability";
import * as _61 from "./v1/genesis";
export declare namespace capability {
    const v1: {
        GenesisOwners: {
            typeUrl: string;
            encode(message: _61.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenesisOwners;
            fromPartial(object: Partial<_61.GenesisOwners>): _61.GenesisOwners;
            fromAmino(object: _61.GenesisOwnersAmino): _61.GenesisOwners;
            toAmino(message: _61.GenesisOwners): _61.GenesisOwnersAmino;
            fromAminoMsg(object: _61.GenesisOwnersAminoMsg): _61.GenesisOwners;
            fromProtoMsg(message: _61.GenesisOwnersProtoMsg): _61.GenesisOwners;
            toProto(message: _61.GenesisOwners): Uint8Array;
            toProtoMsg(message: _61.GenesisOwners): _61.GenesisOwnersProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenesisState;
            fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
            fromAmino(object: _61.GenesisStateAmino): _61.GenesisState;
            toAmino(message: _61.GenesisState): _61.GenesisStateAmino;
            fromAminoMsg(object: _61.GenesisStateAminoMsg): _61.GenesisState;
            fromProtoMsg(message: _61.GenesisStateProtoMsg): _61.GenesisState;
            toProto(message: _61.GenesisState): Uint8Array;
            toProtoMsg(message: _61.GenesisState): _61.GenesisStateProtoMsg;
        };
        Capability: {
            typeUrl: string;
            encode(message: _60.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Capability;
            fromPartial(object: Partial<_60.Capability>): _60.Capability;
            fromAmino(object: _60.CapabilityAmino): _60.Capability;
            toAmino(message: _60.Capability): _60.CapabilityAmino;
            fromAminoMsg(object: _60.CapabilityAminoMsg): _60.Capability;
            fromProtoMsg(message: _60.CapabilityProtoMsg): _60.Capability;
            toProto(message: _60.Capability): Uint8Array;
            toProtoMsg(message: _60.Capability): _60.CapabilityProtoMsg;
        };
        Owner: {
            typeUrl: string;
            encode(message: _60.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Owner;
            fromPartial(object: Partial<_60.Owner>): _60.Owner;
            fromAmino(object: _60.OwnerAmino): _60.Owner;
            toAmino(message: _60.Owner): _60.OwnerAmino;
            fromAminoMsg(object: _60.OwnerAminoMsg): _60.Owner;
            fromProtoMsg(message: _60.OwnerProtoMsg): _60.Owner;
            toProto(message: _60.Owner): Uint8Array;
            toProtoMsg(message: _60.Owner): _60.OwnerProtoMsg;
        };
        CapabilityOwners: {
            typeUrl: string;
            encode(message: _60.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.CapabilityOwners;
            fromPartial(object: Partial<_60.CapabilityOwners>): _60.CapabilityOwners;
            fromAmino(object: _60.CapabilityOwnersAmino): _60.CapabilityOwners;
            toAmino(message: _60.CapabilityOwners): _60.CapabilityOwnersAmino;
            fromAminoMsg(object: _60.CapabilityOwnersAminoMsg): _60.CapabilityOwners;
            fromProtoMsg(message: _60.CapabilityOwnersProtoMsg): _60.CapabilityOwners;
            toProto(message: _60.CapabilityOwners): Uint8Array;
            toProtoMsg(message: _60.CapabilityOwners): _60.CapabilityOwnersProtoMsg;
        };
    };
}
