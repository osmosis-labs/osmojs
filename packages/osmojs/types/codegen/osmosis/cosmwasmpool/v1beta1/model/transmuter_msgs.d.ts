import { BinaryReader, BinaryWriter } from "../../../../binary";
/** ===================== JoinPoolExecuteMsg */
export interface EmptyRequest {
}
export interface EmptyRequestProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.EmptyRequest";
    value: Uint8Array;
}
/** ===================== JoinPoolExecuteMsg */
export interface EmptyRequestAmino {
}
export interface EmptyRequestAminoMsg {
    type: "osmosis/cosmwasmpool/empty-request";
    value: EmptyRequestAmino;
}
/** ===================== JoinPoolExecuteMsg */
export interface EmptyRequestSDKType {
}
export interface JoinPoolExecuteMsgRequest {
    /**
     * join_pool is the structure containing all request fields of the join pool
     * execute message.
     */
    joinPool: EmptyRequest;
}
export interface JoinPoolExecuteMsgRequestProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest";
    value: Uint8Array;
}
export interface JoinPoolExecuteMsgRequestAmino {
    /**
     * join_pool is the structure containing all request fields of the join pool
     * execute message.
     */
    join_pool?: EmptyRequestAmino;
}
export interface JoinPoolExecuteMsgRequestAminoMsg {
    type: "osmosis/cosmwasmpool/join-pool-execute-msg-request";
    value: JoinPoolExecuteMsgRequestAmino;
}
export interface JoinPoolExecuteMsgRequestSDKType {
    join_pool: EmptyRequestSDKType;
}
export interface JoinPoolExecuteMsgResponse {
}
export interface JoinPoolExecuteMsgResponseProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse";
    value: Uint8Array;
}
export interface JoinPoolExecuteMsgResponseAmino {
}
export interface JoinPoolExecuteMsgResponseAminoMsg {
    type: "osmosis/cosmwasmpool/join-pool-execute-msg-response";
    value: JoinPoolExecuteMsgResponseAmino;
}
export interface JoinPoolExecuteMsgResponseSDKType {
}
/** ===================== ExitPoolExecuteMsg */
export interface ExitPoolExecuteMsgRequest {
    /**
     * exit_pool is the structure containing all request fields of the exit pool
     * execute message.
     */
    exitPool: EmptyRequest;
}
export interface ExitPoolExecuteMsgRequestProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest";
    value: Uint8Array;
}
/** ===================== ExitPoolExecuteMsg */
export interface ExitPoolExecuteMsgRequestAmino {
    /**
     * exit_pool is the structure containing all request fields of the exit pool
     * execute message.
     */
    exit_pool?: EmptyRequestAmino;
}
export interface ExitPoolExecuteMsgRequestAminoMsg {
    type: "osmosis/cosmwasmpool/exit-pool-execute-msg-request";
    value: ExitPoolExecuteMsgRequestAmino;
}
/** ===================== ExitPoolExecuteMsg */
export interface ExitPoolExecuteMsgRequestSDKType {
    exit_pool: EmptyRequestSDKType;
}
export interface ExitPoolExecuteMsgResponse {
}
export interface ExitPoolExecuteMsgResponseProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse";
    value: Uint8Array;
}
export interface ExitPoolExecuteMsgResponseAmino {
}
export interface ExitPoolExecuteMsgResponseAminoMsg {
    type: "osmosis/cosmwasmpool/exit-pool-execute-msg-response";
    value: ExitPoolExecuteMsgResponseAmino;
}
export interface ExitPoolExecuteMsgResponseSDKType {
}
export declare const EmptyRequest: {
    typeUrl: string;
    encode(_: EmptyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EmptyRequest;
    fromPartial(_: Partial<EmptyRequest>): EmptyRequest;
    fromAmino(_: EmptyRequestAmino): EmptyRequest;
    toAmino(_: EmptyRequest): EmptyRequestAmino;
    fromAminoMsg(object: EmptyRequestAminoMsg): EmptyRequest;
    toAminoMsg(message: EmptyRequest): EmptyRequestAminoMsg;
    fromProtoMsg(message: EmptyRequestProtoMsg): EmptyRequest;
    toProto(message: EmptyRequest): Uint8Array;
    toProtoMsg(message: EmptyRequest): EmptyRequestProtoMsg;
};
export declare const JoinPoolExecuteMsgRequest: {
    typeUrl: string;
    encode(message: JoinPoolExecuteMsgRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): JoinPoolExecuteMsgRequest;
    fromPartial(object: Partial<JoinPoolExecuteMsgRequest>): JoinPoolExecuteMsgRequest;
    fromAmino(object: JoinPoolExecuteMsgRequestAmino): JoinPoolExecuteMsgRequest;
    toAmino(message: JoinPoolExecuteMsgRequest): JoinPoolExecuteMsgRequestAmino;
    fromAminoMsg(object: JoinPoolExecuteMsgRequestAminoMsg): JoinPoolExecuteMsgRequest;
    toAminoMsg(message: JoinPoolExecuteMsgRequest): JoinPoolExecuteMsgRequestAminoMsg;
    fromProtoMsg(message: JoinPoolExecuteMsgRequestProtoMsg): JoinPoolExecuteMsgRequest;
    toProto(message: JoinPoolExecuteMsgRequest): Uint8Array;
    toProtoMsg(message: JoinPoolExecuteMsgRequest): JoinPoolExecuteMsgRequestProtoMsg;
};
export declare const JoinPoolExecuteMsgResponse: {
    typeUrl: string;
    encode(_: JoinPoolExecuteMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): JoinPoolExecuteMsgResponse;
    fromPartial(_: Partial<JoinPoolExecuteMsgResponse>): JoinPoolExecuteMsgResponse;
    fromAmino(_: JoinPoolExecuteMsgResponseAmino): JoinPoolExecuteMsgResponse;
    toAmino(_: JoinPoolExecuteMsgResponse): JoinPoolExecuteMsgResponseAmino;
    fromAminoMsg(object: JoinPoolExecuteMsgResponseAminoMsg): JoinPoolExecuteMsgResponse;
    toAminoMsg(message: JoinPoolExecuteMsgResponse): JoinPoolExecuteMsgResponseAminoMsg;
    fromProtoMsg(message: JoinPoolExecuteMsgResponseProtoMsg): JoinPoolExecuteMsgResponse;
    toProto(message: JoinPoolExecuteMsgResponse): Uint8Array;
    toProtoMsg(message: JoinPoolExecuteMsgResponse): JoinPoolExecuteMsgResponseProtoMsg;
};
export declare const ExitPoolExecuteMsgRequest: {
    typeUrl: string;
    encode(message: ExitPoolExecuteMsgRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExitPoolExecuteMsgRequest;
    fromPartial(object: Partial<ExitPoolExecuteMsgRequest>): ExitPoolExecuteMsgRequest;
    fromAmino(object: ExitPoolExecuteMsgRequestAmino): ExitPoolExecuteMsgRequest;
    toAmino(message: ExitPoolExecuteMsgRequest): ExitPoolExecuteMsgRequestAmino;
    fromAminoMsg(object: ExitPoolExecuteMsgRequestAminoMsg): ExitPoolExecuteMsgRequest;
    toAminoMsg(message: ExitPoolExecuteMsgRequest): ExitPoolExecuteMsgRequestAminoMsg;
    fromProtoMsg(message: ExitPoolExecuteMsgRequestProtoMsg): ExitPoolExecuteMsgRequest;
    toProto(message: ExitPoolExecuteMsgRequest): Uint8Array;
    toProtoMsg(message: ExitPoolExecuteMsgRequest): ExitPoolExecuteMsgRequestProtoMsg;
};
export declare const ExitPoolExecuteMsgResponse: {
    typeUrl: string;
    encode(_: ExitPoolExecuteMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExitPoolExecuteMsgResponse;
    fromPartial(_: Partial<ExitPoolExecuteMsgResponse>): ExitPoolExecuteMsgResponse;
    fromAmino(_: ExitPoolExecuteMsgResponseAmino): ExitPoolExecuteMsgResponse;
    toAmino(_: ExitPoolExecuteMsgResponse): ExitPoolExecuteMsgResponseAmino;
    fromAminoMsg(object: ExitPoolExecuteMsgResponseAminoMsg): ExitPoolExecuteMsgResponse;
    toAminoMsg(message: ExitPoolExecuteMsgResponse): ExitPoolExecuteMsgResponseAminoMsg;
    fromProtoMsg(message: ExitPoolExecuteMsgResponseProtoMsg): ExitPoolExecuteMsgResponse;
    toProto(message: ExitPoolExecuteMsgResponse): Uint8Array;
    toProtoMsg(message: ExitPoolExecuteMsgResponse): ExitPoolExecuteMsgResponseProtoMsg;
};
