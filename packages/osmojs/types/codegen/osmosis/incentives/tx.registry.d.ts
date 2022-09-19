import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createGauge(value: MsgCreateGauge): {
            typeUrl: string;
            value: Uint8Array;
        };
        addToGauge(value: MsgAddToGauge): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createGauge(value: MsgCreateGauge): {
            typeUrl: string;
            value: MsgCreateGauge;
        };
        addToGauge(value: MsgAddToGauge): {
            typeUrl: string;
            value: MsgAddToGauge;
        };
    };
    toJSON: {
        createGauge(value: MsgCreateGauge): {
            typeUrl: string;
            value: any;
        };
        addToGauge(value: MsgAddToGauge): {
            typeUrl: string;
            value: any;
        };
    };
    fromJSON: {
        createGauge(value: any): {
            typeUrl: string;
            value: any;
        };
        addToGauge(value: any): {
            typeUrl: string;
            value: any;
        };
    };
    fromPartial: {
        createGauge(value: MsgCreateGauge): {
            typeUrl: string;
            value: MsgCreateGauge;
        };
        addToGauge(value: MsgAddToGauge): {
            typeUrl: string;
            value: MsgAddToGauge;
        };
    };
};
