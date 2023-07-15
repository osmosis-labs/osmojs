import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePosition, MsgWithdrawPosition, MsgAddToPosition, MsgCollectSpreadRewards, MsgCollectIncentives } from "./tx";
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
        addToPosition(value: MsgAddToPosition): {
            typeUrl: string;
            value: Uint8Array;
        };
        collectSpreadRewards(value: MsgCollectSpreadRewards): {
            typeUrl: string;
            value: Uint8Array;
        };
        collectIncentives(value: MsgCollectIncentives): {
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
        addToPosition(value: MsgAddToPosition): {
            typeUrl: string;
            value: MsgAddToPosition;
        };
        collectSpreadRewards(value: MsgCollectSpreadRewards): {
            typeUrl: string;
            value: MsgCollectSpreadRewards;
        };
        collectIncentives(value: MsgCollectIncentives): {
            typeUrl: string;
            value: MsgCollectIncentives;
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
        addToPosition(value: MsgAddToPosition): {
            typeUrl: string;
            value: MsgAddToPosition;
        };
        collectSpreadRewards(value: MsgCollectSpreadRewards): {
            typeUrl: string;
            value: MsgCollectSpreadRewards;
        };
        collectIncentives(value: MsgCollectIncentives): {
            typeUrl: string;
            value: MsgCollectIncentives;
        };
    };
};
