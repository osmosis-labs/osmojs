import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: Uint8Array;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: Uint8Array;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: Uint8Array;
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: Uint8Array;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: MsgChannelOpenInit;
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: MsgChannelOpenTry;
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: MsgChannelOpenAck;
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: MsgChannelOpenConfirm;
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: MsgChannelCloseInit;
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: MsgChannelCloseConfirm;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: MsgRecvPacket;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: MsgTimeout;
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: MsgTimeoutOnClose;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: MsgAcknowledgement;
        };
    };
    toJSON: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: any;
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: any;
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: any;
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: any;
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: any;
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: any;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: any;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: any;
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: any;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: any;
        };
    };
    fromJSON: {
        channelOpenInit(value: any): {
            typeUrl: string;
            value: any;
        };
        channelOpenTry(value: any): {
            typeUrl: string;
            value: any;
        };
        channelOpenAck(value: any): {
            typeUrl: string;
            value: any;
        };
        channelOpenConfirm(value: any): {
            typeUrl: string;
            value: any;
        };
        channelCloseInit(value: any): {
            typeUrl: string;
            value: any;
        };
        channelCloseConfirm(value: any): {
            typeUrl: string;
            value: any;
        };
        recvPacket(value: any): {
            typeUrl: string;
            value: any;
        };
        timeout(value: any): {
            typeUrl: string;
            value: any;
        };
        timeoutOnClose(value: any): {
            typeUrl: string;
            value: any;
        };
        acknowledgement(value: any): {
            typeUrl: string;
            value: any;
        };
    };
    fromPartial: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: MsgChannelOpenInit;
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: MsgChannelOpenTry;
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: MsgChannelOpenAck;
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: MsgChannelOpenConfirm;
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: MsgChannelCloseInit;
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: MsgChannelCloseConfirm;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: MsgRecvPacket;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: MsgTimeout;
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: MsgTimeoutOnClose;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: MsgAcknowledgement;
        };
    };
};
