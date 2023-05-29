import * as _m0 from "protobufjs/minimal";
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {
}
export interface ConfigRequestProtoMsg {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest";
    value: Uint8Array;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequestAmino {
}
export interface ConfigRequestAminoMsg {
    type: "cosmos-sdk/ConfigRequest";
    value: ConfigRequestAmino;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequestSDKType {
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
    minimumGasPrice: string;
}
export interface ConfigResponseProtoMsg {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse";
    value: Uint8Array;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseAmino {
    minimum_gas_price: string;
}
export interface ConfigResponseAminoMsg {
    type: "cosmos-sdk/ConfigResponse";
    value: ConfigResponseAmino;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseSDKType {
    minimum_gas_price: string;
}
export declare const ConfigRequest: {
    typeUrl: string;
    encode(_: ConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest;
    fromPartial(_: Partial<ConfigRequest>): ConfigRequest;
    fromAmino(_: ConfigRequestAmino): ConfigRequest;
    toAmino(_: ConfigRequest): ConfigRequestAmino;
    fromAminoMsg(object: ConfigRequestAminoMsg): ConfigRequest;
    toAminoMsg(message: ConfigRequest): ConfigRequestAminoMsg;
    fromProtoMsg(message: ConfigRequestProtoMsg): ConfigRequest;
    toProto(message: ConfigRequest): Uint8Array;
    toProtoMsg(message: ConfigRequest): ConfigRequestProtoMsg;
};
export declare const ConfigResponse: {
    typeUrl: string;
    encode(message: ConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigResponse;
    fromPartial(object: Partial<ConfigResponse>): ConfigResponse;
    fromAmino(object: ConfigResponseAmino): ConfigResponse;
    toAmino(message: ConfigResponse): ConfigResponseAmino;
    fromAminoMsg(object: ConfigResponseAminoMsg): ConfigResponse;
    toAminoMsg(message: ConfigResponse): ConfigResponseAminoMsg;
    fromProtoMsg(message: ConfigResponseProtoMsg): ConfigResponse;
    toProto(message: ConfigResponse): Uint8Array;
    toProtoMsg(message: ConfigResponse): ConfigResponseProtoMsg;
};
