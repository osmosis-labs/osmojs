import { CapabilityOwners, CapabilityOwnersAmino, CapabilityOwnersSDKType } from "./capability";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
    /** index is the index of the capability owner. */
    index: Long;
    /** index_owners are the owners at the given index. */
    indexOwners?: CapabilityOwners;
}
export interface GenesisOwnersProtoMsg {
    typeUrl: "/capability.v1.GenesisOwners";
    value: Uint8Array;
}
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwnersAmino {
    /** index is the index of the capability owner. */
    index: string;
    /** index_owners are the owners at the given index. */
    index_owners?: CapabilityOwnersAmino;
}
export interface GenesisOwnersAminoMsg {
    type: "/capability.v1.GenesisOwners";
    value: GenesisOwnersAmino;
}
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwnersSDKType {
    index: Long;
    index_owners?: CapabilityOwnersSDKType;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
    /** index is the capability global index. */
    index: Long;
    /**
     * owners represents a map from index to owners of the capability index
     * index key is string to allow amino marshalling.
     */
    owners: GenesisOwners[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/capability.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateAmino {
    /** index is the capability global index. */
    index: string;
    /**
     * owners represents a map from index to owners of the capability index
     * index key is string to allow amino marshalling.
     */
    owners: GenesisOwnersAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/capability.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateSDKType {
    index: Long;
    owners: GenesisOwnersSDKType[];
}
export declare const GenesisOwners: {
    typeUrl: string;
    encode(message: GenesisOwners, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisOwners;
    fromPartial(object: Partial<GenesisOwners>): GenesisOwners;
    fromAmino(object: GenesisOwnersAmino): GenesisOwners;
    toAmino(message: GenesisOwners): GenesisOwnersAmino;
    fromAminoMsg(object: GenesisOwnersAminoMsg): GenesisOwners;
    fromProtoMsg(message: GenesisOwnersProtoMsg): GenesisOwners;
    toProto(message: GenesisOwners): Uint8Array;
    toProtoMsg(message: GenesisOwners): GenesisOwnersProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
