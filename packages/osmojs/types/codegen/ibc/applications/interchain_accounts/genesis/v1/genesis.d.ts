import { Params as Params1 } from "../../controller/v1/controller";
import { ParamsAmino as Params1Amino } from "../../controller/v1/controller";
import { ParamsSDKType as Params1SDKType } from "../../controller/v1/controller";
import { Params as Params2 } from "../../host/v1/host";
import { ParamsAmino as Params2Amino } from "../../host/v1/host";
import { ParamsSDKType as Params2SDKType } from "../../host/v1/host";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisState {
    controllerGenesisState?: ControllerGenesisState;
    hostGenesisState?: HostGenesisState;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisStateAmino {
    controller_genesis_state?: ControllerGenesisStateAmino;
    host_genesis_state?: HostGenesisStateAmino;
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisStateSDKType {
    controller_genesis_state?: ControllerGenesisStateSDKType;
    host_genesis_state?: HostGenesisStateSDKType;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisState {
    activeChannels: ActiveChannel[];
    interchainAccounts: RegisteredInterchainAccount[];
    ports: string[];
    params?: Params1;
}
export interface ControllerGenesisStateProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState";
    value: Uint8Array;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisStateAmino {
    active_channels: ActiveChannelAmino[];
    interchain_accounts: RegisteredInterchainAccountAmino[];
    ports: string[];
    params?: Params1Amino;
}
export interface ControllerGenesisStateAminoMsg {
    type: "cosmos-sdk/ControllerGenesisState";
    value: ControllerGenesisStateAmino;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisStateSDKType {
    active_channels: ActiveChannelSDKType[];
    interchain_accounts: RegisteredInterchainAccountSDKType[];
    ports: string[];
    params?: Params1SDKType;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisState {
    activeChannels: ActiveChannel[];
    interchainAccounts: RegisteredInterchainAccount[];
    port: string;
    params?: Params2;
}
export interface HostGenesisStateProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.HostGenesisState";
    value: Uint8Array;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisStateAmino {
    active_channels: ActiveChannelAmino[];
    interchain_accounts: RegisteredInterchainAccountAmino[];
    port: string;
    params?: Params2Amino;
}
export interface HostGenesisStateAminoMsg {
    type: "cosmos-sdk/HostGenesisState";
    value: HostGenesisStateAmino;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisStateSDKType {
    active_channels: ActiveChannelSDKType[];
    interchain_accounts: RegisteredInterchainAccountSDKType[];
    port: string;
    params?: Params2SDKType;
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 */
export interface ActiveChannel {
    connectionId: string;
    portId: string;
    channelId: string;
    isMiddlewareEnabled: boolean;
}
export interface ActiveChannelProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ActiveChannel";
    value: Uint8Array;
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 */
export interface ActiveChannelAmino {
    connection_id: string;
    port_id: string;
    channel_id: string;
    is_middleware_enabled: boolean;
}
export interface ActiveChannelAminoMsg {
    type: "cosmos-sdk/ActiveChannel";
    value: ActiveChannelAmino;
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 */
export interface ActiveChannelSDKType {
    connection_id: string;
    port_id: string;
    channel_id: string;
    is_middleware_enabled: boolean;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccount {
    connectionId: string;
    portId: string;
    accountAddress: string;
}
export interface RegisteredInterchainAccountProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount";
    value: Uint8Array;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccountAmino {
    connection_id: string;
    port_id: string;
    account_address: string;
}
export interface RegisteredInterchainAccountAminoMsg {
    type: "cosmos-sdk/RegisteredInterchainAccount";
    value: RegisteredInterchainAccountAmino;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccountSDKType {
    connection_id: string;
    port_id: string;
    account_address: string;
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
export declare const ControllerGenesisState: {
    typeUrl: string;
    encode(message: ControllerGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerGenesisState;
    fromPartial(object: Partial<ControllerGenesisState>): ControllerGenesisState;
    fromAmino(object: ControllerGenesisStateAmino): ControllerGenesisState;
    toAmino(message: ControllerGenesisState): ControllerGenesisStateAmino;
    fromAminoMsg(object: ControllerGenesisStateAminoMsg): ControllerGenesisState;
    toAminoMsg(message: ControllerGenesisState): ControllerGenesisStateAminoMsg;
    fromProtoMsg(message: ControllerGenesisStateProtoMsg): ControllerGenesisState;
    toProto(message: ControllerGenesisState): Uint8Array;
    toProtoMsg(message: ControllerGenesisState): ControllerGenesisStateProtoMsg;
};
export declare const HostGenesisState: {
    typeUrl: string;
    encode(message: HostGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HostGenesisState;
    fromPartial(object: Partial<HostGenesisState>): HostGenesisState;
    fromAmino(object: HostGenesisStateAmino): HostGenesisState;
    toAmino(message: HostGenesisState): HostGenesisStateAmino;
    fromAminoMsg(object: HostGenesisStateAminoMsg): HostGenesisState;
    toAminoMsg(message: HostGenesisState): HostGenesisStateAminoMsg;
    fromProtoMsg(message: HostGenesisStateProtoMsg): HostGenesisState;
    toProto(message: HostGenesisState): Uint8Array;
    toProtoMsg(message: HostGenesisState): HostGenesisStateProtoMsg;
};
export declare const ActiveChannel: {
    typeUrl: string;
    encode(message: ActiveChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveChannel;
    fromPartial(object: Partial<ActiveChannel>): ActiveChannel;
    fromAmino(object: ActiveChannelAmino): ActiveChannel;
    toAmino(message: ActiveChannel): ActiveChannelAmino;
    fromAminoMsg(object: ActiveChannelAminoMsg): ActiveChannel;
    toAminoMsg(message: ActiveChannel): ActiveChannelAminoMsg;
    fromProtoMsg(message: ActiveChannelProtoMsg): ActiveChannel;
    toProto(message: ActiveChannel): Uint8Array;
    toProtoMsg(message: ActiveChannel): ActiveChannelProtoMsg;
};
export declare const RegisteredInterchainAccount: {
    typeUrl: string;
    encode(message: RegisteredInterchainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredInterchainAccount;
    fromPartial(object: Partial<RegisteredInterchainAccount>): RegisteredInterchainAccount;
    fromAmino(object: RegisteredInterchainAccountAmino): RegisteredInterchainAccount;
    toAmino(message: RegisteredInterchainAccount): RegisteredInterchainAccountAmino;
    fromAminoMsg(object: RegisteredInterchainAccountAminoMsg): RegisteredInterchainAccount;
    toAminoMsg(message: RegisteredInterchainAccount): RegisteredInterchainAccountAminoMsg;
    fromProtoMsg(message: RegisteredInterchainAccountProtoMsg): RegisteredInterchainAccount;
    toProto(message: RegisteredInterchainAccount): Uint8Array;
    toProtoMsg(message: RegisteredInterchainAccount): RegisteredInterchainAccountProtoMsg;
};
