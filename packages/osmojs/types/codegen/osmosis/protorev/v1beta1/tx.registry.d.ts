import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetHotRoutes, MsgSetDeveloperAccount } from "./tx";
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
    };
};
