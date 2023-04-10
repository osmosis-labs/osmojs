import * as _m0 from "protobufjs/minimal";
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
    /** the token denomination to be transferred */
    denom: string;
    /** the token amount to be transferred */
    amount: string;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /** optional memo */
    memo: string;
}
export interface FungibleTokenPacketDataProtoMsg {
    typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData";
    value: Uint8Array;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataAmino {
    /** the token denomination to be transferred */
    denom: string;
    /** the token amount to be transferred */
    amount: string;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /** optional memo */
    memo: string;
}
export interface FungibleTokenPacketDataAminoMsg {
    type: "cosmos-sdk/FungibleTokenPacketData";
    value: FungibleTokenPacketDataAmino;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataSDKType {
    denom: string;
    amount: string;
    sender: string;
    receiver: string;
    memo: string;
}
export declare const FungibleTokenPacketData: {
    typeUrl: string;
    encode(message: FungibleTokenPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FungibleTokenPacketData;
    fromPartial(object: Partial<FungibleTokenPacketData>): FungibleTokenPacketData;
    fromAmino(object: FungibleTokenPacketDataAmino): FungibleTokenPacketData;
    toAmino(message: FungibleTokenPacketData): FungibleTokenPacketDataAmino;
    fromAminoMsg(object: FungibleTokenPacketDataAminoMsg): FungibleTokenPacketData;
    toAminoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataAminoMsg;
    fromProtoMsg(message: FungibleTokenPacketDataProtoMsg): FungibleTokenPacketData;
    toProto(message: FungibleTokenPacketData): Uint8Array;
    toProtoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataProtoMsg;
};
