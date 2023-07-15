import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateConcentratedPool } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createConcentratedPool(value: MsgCreateConcentratedPool): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createConcentratedPool(value: MsgCreateConcentratedPool): {
            typeUrl: string;
            value: MsgCreateConcentratedPool;
        };
    };
    fromPartial: {
        createConcentratedPool(value: MsgCreateConcentratedPool): {
            typeUrl: string;
            value: MsgCreateConcentratedPool;
        };
    };
};
