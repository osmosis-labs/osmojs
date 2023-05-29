import { MsgSwapExactAmountIn, MsgSwapExactAmountOut } from "./tx";
export declare const AminoConverter: {
    "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: (message: MsgSwapExactAmountIn) => import("./tx").MsgSwapExactAmountInAmino;
        fromAmino: (object: import("./tx").MsgSwapExactAmountInAmino) => MsgSwapExactAmountIn;
    };
    "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: (message: MsgSwapExactAmountOut) => import("./tx").MsgSwapExactAmountOutAmino;
        fromAmino: (object: import("./tx").MsgSwapExactAmountOutAmino) => MsgSwapExactAmountOut;
    };
};
