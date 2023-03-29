import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetHotRoutes, MsgSetDeveloperAccount, MsgSetMaxPoolPointsPerTx, MsgSetMaxPoolPointsPerBlock, MsgSetPoolWeights, MsgSetBaseDenoms } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        setHotRoutes(value: MsgSetHotRoutes): {
            typeUrl: string;
            value: Uint8Array;
        };
        setDeveloperAccount(value: MsgSetDeveloperAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        setMaxPoolPointsPerTx(value: MsgSetMaxPoolPointsPerTx): {
            typeUrl: string;
            value: Uint8Array;
        };
        setMaxPoolPointsPerBlock(value: MsgSetMaxPoolPointsPerBlock): {
            typeUrl: string;
            value: Uint8Array;
        };
        setPoolWeights(value: MsgSetPoolWeights): {
            typeUrl: string;
            value: Uint8Array;
        };
        setBaseDenoms(value: MsgSetBaseDenoms): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        setHotRoutes(value: MsgSetHotRoutes): {
            typeUrl: string;
            value: MsgSetHotRoutes;
        };
        setDeveloperAccount(value: MsgSetDeveloperAccount): {
            typeUrl: string;
            value: MsgSetDeveloperAccount;
        };
        setMaxPoolPointsPerTx(value: MsgSetMaxPoolPointsPerTx): {
            typeUrl: string;
            value: MsgSetMaxPoolPointsPerTx;
        };
        setMaxPoolPointsPerBlock(value: MsgSetMaxPoolPointsPerBlock): {
            typeUrl: string;
            value: MsgSetMaxPoolPointsPerBlock;
        };
        setPoolWeights(value: MsgSetPoolWeights): {
            typeUrl: string;
            value: MsgSetPoolWeights;
        };
        setBaseDenoms(value: MsgSetBaseDenoms): {
            typeUrl: string;
            value: MsgSetBaseDenoms;
        };
    };
    fromPartial: {
        setHotRoutes(value: MsgSetHotRoutes): {
            typeUrl: string;
            value: MsgSetHotRoutes;
        };
        setDeveloperAccount(value: MsgSetDeveloperAccount): {
            typeUrl: string;
            value: MsgSetDeveloperAccount;
        };
        setMaxPoolPointsPerTx(value: MsgSetMaxPoolPointsPerTx): {
            typeUrl: string;
            value: MsgSetMaxPoolPointsPerTx;
        };
        setMaxPoolPointsPerBlock(value: MsgSetMaxPoolPointsPerBlock): {
            typeUrl: string;
            value: MsgSetMaxPoolPointsPerBlock;
        };
        setPoolWeights(value: MsgSetPoolWeights): {
            typeUrl: string;
            value: MsgSetPoolWeights;
        };
        setBaseDenoms(value: MsgSetBaseDenoms): {
            typeUrl: string;
            value: MsgSetBaseDenoms;
        };
    };
};
