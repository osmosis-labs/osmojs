import { Rpc } from "@osmonauts/helpers";
import { MsgSubmitEvidence, MsgSubmitEvidenceResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    submitEvidence(request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    submitEvidence(request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponseSDKType>;
}
