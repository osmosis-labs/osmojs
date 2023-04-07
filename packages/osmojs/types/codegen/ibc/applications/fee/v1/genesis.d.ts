import { IdentifiedPacketFees, IdentifiedPacketFeesAmino, IdentifiedPacketFeesSDKType } from "./fee";
import { PacketId, PacketIdAmino, PacketIdSDKType } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
    /** list of identified packet fees */
    identifiedFees: IdentifiedPacketFees[];
    /** list of fee enabled channels */
    feeEnabledChannels: FeeEnabledChannel[];
    /** list of registered payees */
    registeredPayees: RegisteredPayee[];
    /** list of registered counterparty payees */
    registeredCounterpartyPayees: RegisteredCounterpartyPayee[];
    /** list of forward relayer addresses */
    forwardRelayers: ForwardRelayerAddress[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisStateAmino {
    /** list of identified packet fees */
    identified_fees: IdentifiedPacketFeesAmino[];
    /** list of fee enabled channels */
    fee_enabled_channels: FeeEnabledChannelAmino[];
    /** list of registered payees */
    registered_payees: RegisteredPayeeAmino[];
    /** list of registered counterparty payees */
    registered_counterparty_payees: RegisteredCounterpartyPayeeAmino[];
    /** list of forward relayer addresses */
    forward_relayers: ForwardRelayerAddressAmino[];
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisStateSDKType {
    identified_fees: IdentifiedPacketFeesSDKType[];
    fee_enabled_channels: FeeEnabledChannelSDKType[];
    registered_payees: RegisteredPayeeSDKType[];
    registered_counterparty_payees: RegisteredCounterpartyPayeeSDKType[];
    forward_relayers: ForwardRelayerAddressSDKType[];
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
export interface FeeEnabledChannelProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.FeeEnabledChannel";
    value: Uint8Array;
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannelAmino {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
}
export interface FeeEnabledChannelAminoMsg {
    type: "cosmos-sdk/FeeEnabledChannel";
    value: FeeEnabledChannelAmino;
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannelSDKType {
    port_id: string;
    channel_id: string;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayee {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the payee address */
    payee: string;
}
export interface RegisteredPayeeProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.RegisteredPayee";
    value: Uint8Array;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayeeAmino {
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address */
    relayer: string;
    /** the payee address */
    payee: string;
}
export interface RegisteredPayeeAminoMsg {
    type: "cosmos-sdk/RegisteredPayee";
    value: RegisteredPayeeAmino;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayeeSDKType {
    channel_id: string;
    relayer: string;
    payee: string;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayee {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the counterparty payee address */
    counterpartyPayee: string;
}
export interface RegisteredCounterpartyPayeeProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.RegisteredCounterpartyPayee";
    value: Uint8Array;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayeeAmino {
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address */
    relayer: string;
    /** the counterparty payee address */
    counterparty_payee: string;
}
export interface RegisteredCounterpartyPayeeAminoMsg {
    type: "cosmos-sdk/RegisteredCounterpartyPayee";
    value: RegisteredCounterpartyPayeeAmino;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayeeSDKType {
    channel_id: string;
    relayer: string;
    counterparty_payee: string;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
    /** the forward relayer address */
    address: string;
    /** unique packet identifer comprised of the channel ID, port ID and sequence */
    packetId?: PacketId;
}
export interface ForwardRelayerAddressProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.ForwardRelayerAddress";
    value: Uint8Array;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddressAmino {
    /** the forward relayer address */
    address: string;
    /** unique packet identifer comprised of the channel ID, port ID and sequence */
    packet_id?: PacketIdAmino;
}
export interface ForwardRelayerAddressAminoMsg {
    type: "cosmos-sdk/ForwardRelayerAddress";
    value: ForwardRelayerAddressAmino;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddressSDKType {
    address: string;
    packet_id?: PacketIdSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const FeeEnabledChannel: {
    typeUrl: string;
    encode(message: FeeEnabledChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeEnabledChannel;
    fromPartial(object: Partial<FeeEnabledChannel>): FeeEnabledChannel;
    fromAmino(object: FeeEnabledChannelAmino): FeeEnabledChannel;
    toAmino(message: FeeEnabledChannel): FeeEnabledChannelAmino;
    fromAminoMsg(object: FeeEnabledChannelAminoMsg): FeeEnabledChannel;
    toAminoMsg(message: FeeEnabledChannel): FeeEnabledChannelAminoMsg;
    fromProtoMsg(message: FeeEnabledChannelProtoMsg): FeeEnabledChannel;
    toProto(message: FeeEnabledChannel): Uint8Array;
    toProtoMsg(message: FeeEnabledChannel): FeeEnabledChannelProtoMsg;
};
export declare const RegisteredPayee: {
    typeUrl: string;
    encode(message: RegisteredPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredPayee;
    fromPartial(object: Partial<RegisteredPayee>): RegisteredPayee;
    fromAmino(object: RegisteredPayeeAmino): RegisteredPayee;
    toAmino(message: RegisteredPayee): RegisteredPayeeAmino;
    fromAminoMsg(object: RegisteredPayeeAminoMsg): RegisteredPayee;
    toAminoMsg(message: RegisteredPayee): RegisteredPayeeAminoMsg;
    fromProtoMsg(message: RegisteredPayeeProtoMsg): RegisteredPayee;
    toProto(message: RegisteredPayee): Uint8Array;
    toProtoMsg(message: RegisteredPayee): RegisteredPayeeProtoMsg;
};
export declare const RegisteredCounterpartyPayee: {
    typeUrl: string;
    encode(message: RegisteredCounterpartyPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredCounterpartyPayee;
    fromPartial(object: Partial<RegisteredCounterpartyPayee>): RegisteredCounterpartyPayee;
    fromAmino(object: RegisteredCounterpartyPayeeAmino): RegisteredCounterpartyPayee;
    toAmino(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeAmino;
    fromAminoMsg(object: RegisteredCounterpartyPayeeAminoMsg): RegisteredCounterpartyPayee;
    toAminoMsg(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeAminoMsg;
    fromProtoMsg(message: RegisteredCounterpartyPayeeProtoMsg): RegisteredCounterpartyPayee;
    toProto(message: RegisteredCounterpartyPayee): Uint8Array;
    toProtoMsg(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeProtoMsg;
};
export declare const ForwardRelayerAddress: {
    typeUrl: string;
    encode(message: ForwardRelayerAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ForwardRelayerAddress;
    fromPartial(object: Partial<ForwardRelayerAddress>): ForwardRelayerAddress;
    fromAmino(object: ForwardRelayerAddressAmino): ForwardRelayerAddress;
    toAmino(message: ForwardRelayerAddress): ForwardRelayerAddressAmino;
    fromAminoMsg(object: ForwardRelayerAddressAminoMsg): ForwardRelayerAddress;
    toAminoMsg(message: ForwardRelayerAddress): ForwardRelayerAddressAminoMsg;
    fromProtoMsg(message: ForwardRelayerAddressProtoMsg): ForwardRelayerAddress;
    toProto(message: ForwardRelayerAddress): Uint8Array;
    toProtoMsg(message: ForwardRelayerAddress): ForwardRelayerAddressProtoMsg;
};
