import { Rpc } from "@osmonauts/helpers";
import { MsgCreateDenom, MsgCreateDenomResponseSDKType, MsgMint, MsgMintResponseSDKType, MsgBurn, MsgBurnResponseSDKType, MsgChangeAdmin, MsgChangeAdminResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponseSDKType>;
    mint(request: MsgMint): Promise<MsgMintResponseSDKType>;
    burn(request: MsgBurn): Promise<MsgBurnResponseSDKType>;
    changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponseSDKType>;
    mint(request: MsgMint): Promise<MsgMintResponseSDKType>;
    burn(request: MsgBurn): Promise<MsgBurnResponseSDKType>;
    changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponseSDKType>;
}
