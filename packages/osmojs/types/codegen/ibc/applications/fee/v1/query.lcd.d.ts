import { LCDClient } from "@osmonauts/lcd";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponseSDKType, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponseSDKType, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponseSDKType, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponseSDKType, QueryTotalAckFeesRequest, QueryTotalAckFeesResponseSDKType, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponseSDKType, QueryPayeeRequest, QueryPayeeResponseSDKType, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponseSDKType, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponseSDKType, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    incentivizedPackets(params: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponseSDKType>;
    incentivizedPacket(params: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponseSDKType>;
    incentivizedPacketsForChannel(params: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponseSDKType>;
    totalRecvFees(params: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponseSDKType>;
    totalAckFees(params: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponseSDKType>;
    totalTimeoutFees(params: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponseSDKType>;
    payee(params: QueryPayeeRequest): Promise<QueryPayeeResponseSDKType>;
    counterpartyPayee(params: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponseSDKType>;
    feeEnabledChannels(params: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponseSDKType>;
    feeEnabledChannel(params: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponseSDKType>;
}
