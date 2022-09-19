import { Rpc } from "@osmonauts/helpers";
import { MsgCreateValidator, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponseSDKType>;
    editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponseSDKType>;
    delegate(request: MsgDelegate): Promise<MsgDelegateResponseSDKType>;
    beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponseSDKType>;
    undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponseSDKType>;
    editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponseSDKType>;
    delegate(request: MsgDelegate): Promise<MsgDelegateResponseSDKType>;
    beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponseSDKType>;
    undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponseSDKType>;
}
