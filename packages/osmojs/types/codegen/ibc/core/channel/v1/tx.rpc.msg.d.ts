import { Rpc } from "@osmonauts/helpers";
import { MsgChannelOpenInit, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    channelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponseSDKType>;
    channelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponseSDKType>;
    channelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponseSDKType>;
    channelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponseSDKType>;
    channelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponseSDKType>;
    channelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponseSDKType>;
    recvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponseSDKType>;
    timeout(request: MsgTimeout): Promise<MsgTimeoutResponseSDKType>;
    timeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponseSDKType>;
    acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    channelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponseSDKType>;
    channelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponseSDKType>;
    channelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponseSDKType>;
    channelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponseSDKType>;
    channelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponseSDKType>;
    channelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponseSDKType>;
    recvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponseSDKType>;
    timeout(request: MsgTimeout): Promise<MsgTimeoutResponseSDKType>;
    timeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponseSDKType>;
    acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponseSDKType>;
}
