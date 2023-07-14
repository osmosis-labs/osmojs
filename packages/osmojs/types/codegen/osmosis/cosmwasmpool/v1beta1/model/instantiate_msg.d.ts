import { BinaryReader, BinaryWriter } from "../../../../binary";
/** ===================== InstantiateMsg */
export interface InstantiateMsg {
    /**
     * pool_asset_denoms is the list of asset denoms that are initialized
     * at pool creation time.
     */
    poolAssetDenoms: string[];
}
export interface InstantiateMsgProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.InstantiateMsg";
    value: Uint8Array;
}
/** ===================== InstantiateMsg */
export interface InstantiateMsgAmino {
    /**
     * pool_asset_denoms is the list of asset denoms that are initialized
     * at pool creation time.
     */
    pool_asset_denoms: string[];
}
export interface InstantiateMsgAminoMsg {
    type: "osmosis/cosmwasmpool/instantiate-msg";
    value: InstantiateMsgAmino;
}
/** ===================== InstantiateMsg */
export interface InstantiateMsgSDKType {
    pool_asset_denoms: string[];
}
export declare const InstantiateMsg: {
    typeUrl: string;
    encode(message: InstantiateMsg, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InstantiateMsg;
    fromPartial(object: Partial<InstantiateMsg>): InstantiateMsg;
    fromAmino(object: InstantiateMsgAmino): InstantiateMsg;
    toAmino(message: InstantiateMsg): InstantiateMsgAmino;
    fromAminoMsg(object: InstantiateMsgAminoMsg): InstantiateMsg;
    toAminoMsg(message: InstantiateMsg): InstantiateMsgAminoMsg;
    fromProtoMsg(message: InstantiateMsgProtoMsg): InstantiateMsg;
    toProto(message: InstantiateMsg): Uint8Array;
    toProtoMsg(message: InstantiateMsg): InstantiateMsgProtoMsg;
};
