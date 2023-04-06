import { Rpc } from "../../helpers";
import { MsgCreatePosition, MsgCreatePositionResponse, MsgWithdrawPosition, MsgWithdrawPositionResponse, MsgCollectFees, MsgCollectFeesResponse, MsgCollectIncentives, MsgCollectIncentivesResponse, MsgFungifyChargedPositions, MsgFungifyChargedPositionsResponse } from "./tx";
export interface Msg {
    createPosition(request: MsgCreatePosition): Promise<MsgCreatePositionResponse>;
    withdrawPosition(request: MsgWithdrawPosition): Promise<MsgWithdrawPositionResponse>;
    collectFees(request: MsgCollectFees): Promise<MsgCollectFeesResponse>;
    collectIncentives(request: MsgCollectIncentives): Promise<MsgCollectIncentivesResponse>;
    fungifyChargedPositions(request: MsgFungifyChargedPositions): Promise<MsgFungifyChargedPositionsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createPosition(request: MsgCreatePosition): Promise<MsgCreatePositionResponse>;
    withdrawPosition(request: MsgWithdrawPosition): Promise<MsgWithdrawPositionResponse>;
    collectFees(request: MsgCollectFees): Promise<MsgCollectFeesResponse>;
    collectIncentives(request: MsgCollectIncentives): Promise<MsgCollectIncentivesResponse>;
    fungifyChargedPositions(request: MsgFungifyChargedPositions): Promise<MsgFungifyChargedPositionsResponse>;
}
