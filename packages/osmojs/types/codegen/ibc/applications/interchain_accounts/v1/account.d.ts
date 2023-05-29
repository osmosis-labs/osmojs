import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../../../cosmos/auth/v1beta1/auth";
import * as _m0 from "protobufjs/minimal";
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccount {
    $typeUrl?: string;
    baseAccount?: BaseAccount;
    accountOwner: string;
}
export interface InterchainAccountProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount";
    value: Uint8Array;
}
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccountAmino {
    base_account?: BaseAccountAmino;
    account_owner: string;
}
export interface InterchainAccountAminoMsg {
    type: "cosmos-sdk/InterchainAccount";
    value: InterchainAccountAmino;
}
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccountSDKType {
    $typeUrl?: string;
    base_account?: BaseAccountSDKType;
    account_owner: string;
}
export declare const InterchainAccount: {
    typeUrl: string;
    encode(message: InterchainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterchainAccount;
    fromPartial(object: Partial<InterchainAccount>): InterchainAccount;
    fromAmino(object: InterchainAccountAmino): InterchainAccount;
    toAmino(message: InterchainAccount): InterchainAccountAmino;
    fromAminoMsg(object: InterchainAccountAminoMsg): InterchainAccount;
    toAminoMsg(message: InterchainAccount): InterchainAccountAminoMsg;
    fromProtoMsg(message: InterchainAccountProtoMsg): InterchainAccount;
    toProto(message: InterchainAccount): Uint8Array;
    toProtoMsg(message: InterchainAccount): InterchainAccountProtoMsg;
};
