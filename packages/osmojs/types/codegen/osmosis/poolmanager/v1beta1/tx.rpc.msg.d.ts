import { Rpc } from "../../../helpers";
import { MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountInResponse, MsgSplitRouteSwapExactAmountOut, MsgSplitRouteSwapExactAmountOutResponse } from "./tx";
export interface Msg {
    swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
    swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
    splitRouteSwapExactAmountIn(request: MsgSplitRouteSwapExactAmountIn): Promise<MsgSplitRouteSwapExactAmountInResponse>;
    splitRouteSwapExactAmountOut(request: MsgSplitRouteSwapExactAmountOut): Promise<MsgSplitRouteSwapExactAmountOutResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
    swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
    splitRouteSwapExactAmountIn(request: MsgSplitRouteSwapExactAmountIn): Promise<MsgSplitRouteSwapExactAmountInResponse>;
    splitRouteSwapExactAmountOut(request: MsgSplitRouteSwapExactAmountOut): Promise<MsgSplitRouteSwapExactAmountOutResponse>;
}
