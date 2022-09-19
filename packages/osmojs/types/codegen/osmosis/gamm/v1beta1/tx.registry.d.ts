import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        joinPool(value: MsgJoinPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        exitPool(value: MsgExitPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        swapExactAmountIn(value: MsgSwapExactAmountIn): {
            typeUrl: string;
            value: Uint8Array;
        };
        swapExactAmountOut(value: MsgSwapExactAmountOut): {
            typeUrl: string;
            value: Uint8Array;
        };
        joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn): {
            typeUrl: string;
            value: Uint8Array;
        };
        joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut): {
            typeUrl: string;
            value: Uint8Array;
        };
        exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut): {
            typeUrl: string;
            value: Uint8Array;
        };
        exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        joinPool(value: MsgJoinPool): {
            typeUrl: string;
            value: MsgJoinPool;
        };
        exitPool(value: MsgExitPool): {
            typeUrl: string;
            value: MsgExitPool;
        };
        swapExactAmountIn(value: MsgSwapExactAmountIn): {
            typeUrl: string;
            value: MsgSwapExactAmountIn;
        };
        swapExactAmountOut(value: MsgSwapExactAmountOut): {
            typeUrl: string;
            value: MsgSwapExactAmountOut;
        };
        joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn): {
            typeUrl: string;
            value: MsgJoinSwapExternAmountIn;
        };
        joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut): {
            typeUrl: string;
            value: MsgJoinSwapShareAmountOut;
        };
        exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut): {
            typeUrl: string;
            value: MsgExitSwapExternAmountOut;
        };
        exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn): {
            typeUrl: string;
            value: MsgExitSwapShareAmountIn;
        };
    };
    toJSON: {
        joinPool(value: MsgJoinPool): {
            typeUrl: string;
            value: any;
        };
        exitPool(value: MsgExitPool): {
            typeUrl: string;
            value: any;
        };
        swapExactAmountIn(value: MsgSwapExactAmountIn): {
            typeUrl: string;
            value: any;
        };
        swapExactAmountOut(value: MsgSwapExactAmountOut): {
            typeUrl: string;
            value: any;
        };
        joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn): {
            typeUrl: string;
            value: any;
        };
        joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut): {
            typeUrl: string;
            value: any;
        };
        exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut): {
            typeUrl: string;
            value: any;
        };
        exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn): {
            typeUrl: string;
            value: any;
        };
    };
    fromJSON: {
        joinPool(value: any): {
            typeUrl: string;
            value: any;
        };
        exitPool(value: any): {
            typeUrl: string;
            value: any;
        };
        swapExactAmountIn(value: any): {
            typeUrl: string;
            value: any;
        };
        swapExactAmountOut(value: any): {
            typeUrl: string;
            value: any;
        };
        joinSwapExternAmountIn(value: any): {
            typeUrl: string;
            value: any;
        };
        joinSwapShareAmountOut(value: any): {
            typeUrl: string;
            value: any;
        };
        exitSwapExternAmountOut(value: any): {
            typeUrl: string;
            value: any;
        };
        exitSwapShareAmountIn(value: any): {
            typeUrl: string;
            value: any;
        };
    };
    fromPartial: {
        joinPool(value: MsgJoinPool): {
            typeUrl: string;
            value: MsgJoinPool;
        };
        exitPool(value: MsgExitPool): {
            typeUrl: string;
            value: MsgExitPool;
        };
        swapExactAmountIn(value: MsgSwapExactAmountIn): {
            typeUrl: string;
            value: MsgSwapExactAmountIn;
        };
        swapExactAmountOut(value: MsgSwapExactAmountOut): {
            typeUrl: string;
            value: MsgSwapExactAmountOut;
        };
        joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn): {
            typeUrl: string;
            value: MsgJoinSwapExternAmountIn;
        };
        joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut): {
            typeUrl: string;
            value: MsgJoinSwapShareAmountOut;
        };
        exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut): {
            typeUrl: string;
            value: MsgExitSwapExternAmountOut;
        };
        exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn): {
            typeUrl: string;
            value: MsgExitSwapShareAmountIn;
        };
    };
};
