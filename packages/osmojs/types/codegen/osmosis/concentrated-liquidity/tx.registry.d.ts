import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePosition, MsgWithdrawPosition, MsgCollectFees, MsgCollectIncentives, MsgFungifyChargedPositions } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createPosition(value: MsgCreatePosition): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawPosition(value: MsgWithdrawPosition): {
            typeUrl: string;
            value: Uint8Array;
        };
        collectFees(value: MsgCollectFees): {
            typeUrl: string;
            value: Uint8Array;
        };
        collectIncentives(value: MsgCollectIncentives): {
            typeUrl: string;
            value: Uint8Array;
        };
        fungifyChargedPositions(value: MsgFungifyChargedPositions): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createPosition(value: MsgCreatePosition): {
            typeUrl: string;
            value: MsgCreatePosition;
        };
        withdrawPosition(value: MsgWithdrawPosition): {
            typeUrl: string;
            value: MsgWithdrawPosition;
        };
        collectFees(value: MsgCollectFees): {
            typeUrl: string;
            value: MsgCollectFees;
        };
        collectIncentives(value: MsgCollectIncentives): {
            typeUrl: string;
            value: MsgCollectIncentives;
        };
        fungifyChargedPositions(value: MsgFungifyChargedPositions): {
            typeUrl: string;
            value: MsgFungifyChargedPositions;
        };
    };
    fromPartial: {
        createPosition(value: MsgCreatePosition): {
            typeUrl: string;
            value: MsgCreatePosition;
        };
        withdrawPosition(value: MsgWithdrawPosition): {
            typeUrl: string;
            value: MsgWithdrawPosition;
        };
        collectFees(value: MsgCollectFees): {
            typeUrl: string;
            value: MsgCollectFees;
        };
        collectIncentives(value: MsgCollectIncentives): {
            typeUrl: string;
            value: MsgCollectIncentives;
        };
        fungifyChargedPositions(value: MsgFungifyChargedPositions): {
            typeUrl: string;
            value: MsgFungifyChargedPositions;
        };
    };
};
