import { Rpc } from "@osmonauts/helpers";
import { MsgSubmitProposal, MsgSubmitProposalResponseSDKType, MsgVote, MsgVoteResponseSDKType, MsgVoteWeighted, MsgVoteWeightedResponseSDKType, MsgDeposit, MsgDepositResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponseSDKType>;
    vote(request: MsgVote): Promise<MsgVoteResponseSDKType>;
    voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponseSDKType>;
    deposit(request: MsgDeposit): Promise<MsgDepositResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponseSDKType>;
    vote(request: MsgVote): Promise<MsgVoteResponseSDKType>;
    voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponseSDKType>;
    deposit(request: MsgDeposit): Promise<MsgDepositResponseSDKType>;
}
