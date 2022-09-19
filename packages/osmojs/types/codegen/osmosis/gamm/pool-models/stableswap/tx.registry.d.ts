import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createStableswapPool(value: MsgCreateStableswapPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        stableSwapAdjustScalingFactors(value: MsgStableSwapAdjustScalingFactors): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createStableswapPool(value: MsgCreateStableswapPool): {
            typeUrl: string;
            value: MsgCreateStableswapPool;
        };
        stableSwapAdjustScalingFactors(value: MsgStableSwapAdjustScalingFactors): {
            typeUrl: string;
            value: MsgStableSwapAdjustScalingFactors;
        };
    };
    toJSON: {
        createStableswapPool(value: MsgCreateStableswapPool): {
            typeUrl: string;
            value: any;
        };
        stableSwapAdjustScalingFactors(value: MsgStableSwapAdjustScalingFactors): {
            typeUrl: string;
            value: any;
        };
    };
    fromJSON: {
        createStableswapPool(value: any): {
            typeUrl: string;
            value: any;
        };
        stableSwapAdjustScalingFactors(value: any): {
            typeUrl: string;
            value: any;
        };
    };
    fromPartial: {
        createStableswapPool(value: MsgCreateStableswapPool): {
            typeUrl: string;
            value: MsgCreateStableswapPool;
        };
        stableSwapAdjustScalingFactors(value: MsgStableSwapAdjustScalingFactors): {
            typeUrl: string;
            value: MsgStableSwapAdjustScalingFactors;
        };
    };
};
