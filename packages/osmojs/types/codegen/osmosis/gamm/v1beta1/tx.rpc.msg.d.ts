import { Rpc } from "../../../helpers";
import { MsgJoinPool, MsgJoinPoolResponse, MsgExitPool, MsgExitPoolResponse, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse } from "./tx";
export interface Msg {
    joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
    exitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
    swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
    swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
    joinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn): Promise<MsgJoinSwapExternAmountInResponse>;
    joinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut): Promise<MsgJoinSwapShareAmountOutResponse>;
    exitSwapExternAmountOut(request: MsgExitSwapExternAmountOut): Promise<MsgExitSwapExternAmountOutResponse>;
    exitSwapShareAmountIn(request: MsgExitSwapShareAmountIn): Promise<MsgExitSwapShareAmountInResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
    exitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
    swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
    swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
    joinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn): Promise<MsgJoinSwapExternAmountInResponse>;
    joinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut): Promise<MsgJoinSwapShareAmountOutResponse>;
    exitSwapExternAmountOut(request: MsgExitSwapExternAmountOut): Promise<MsgExitSwapExternAmountOutResponse>;
    exitSwapShareAmountIn(request: MsgExitSwapShareAmountIn): Promise<MsgExitSwapShareAmountInResponse>;
}
