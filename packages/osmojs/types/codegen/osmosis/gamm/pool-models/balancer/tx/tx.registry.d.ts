import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateBalancerPool, MsgMigrateSharesToFullRangeConcentratedPosition } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createBalancerPool(value: MsgCreateBalancerPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        migrateSharesToFullRangeConcentratedPosition(value: MsgMigrateSharesToFullRangeConcentratedPosition): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createBalancerPool(value: MsgCreateBalancerPool): {
            typeUrl: string;
            value: MsgCreateBalancerPool;
        };
        migrateSharesToFullRangeConcentratedPosition(value: MsgMigrateSharesToFullRangeConcentratedPosition): {
            typeUrl: string;
            value: MsgMigrateSharesToFullRangeConcentratedPosition;
        };
    };
    fromPartial: {
        createBalancerPool(value: MsgCreateBalancerPool): {
            typeUrl: string;
            value: MsgCreateBalancerPool;
        };
        migrateSharesToFullRangeConcentratedPosition(value: MsgMigrateSharesToFullRangeConcentratedPosition): {
            typeUrl: string;
            value: MsgMigrateSharesToFullRangeConcentratedPosition;
        };
    };
};
