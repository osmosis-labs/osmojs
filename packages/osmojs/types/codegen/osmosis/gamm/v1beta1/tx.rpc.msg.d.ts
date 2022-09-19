import { Rpc } from "@osmonauts/helpers";
import { MsgJoinPool, MsgJoinPoolResponseSDKType, MsgExitPool, MsgExitPoolResponseSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponseSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponseSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponseSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponseSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponseSDKType } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponseSDKType>;
    exitPool(request: MsgExitPool): Promise<MsgExitPoolResponseSDKType>;
    swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponseSDKType>;
    swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponseSDKType>;
    joinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn): Promise<MsgJoinSwapExternAmountInResponseSDKType>;
    joinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut): Promise<MsgJoinSwapShareAmountOutResponseSDKType>;
    exitSwapExternAmountOut(request: MsgExitSwapExternAmountOut): Promise<MsgExitSwapExternAmountOutResponseSDKType>;
    exitSwapShareAmountIn(request: MsgExitSwapShareAmountIn): Promise<MsgExitSwapShareAmountInResponseSDKType>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponseSDKType>;
    exitPool(request: MsgExitPool): Promise<MsgExitPoolResponseSDKType>;
    swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponseSDKType>;
    swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponseSDKType>;
    joinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn): Promise<MsgJoinSwapExternAmountInResponseSDKType>;
    joinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut): Promise<MsgJoinSwapShareAmountOutResponseSDKType>;
    exitSwapExternAmountOut(request: MsgExitSwapExternAmountOut): Promise<MsgExitSwapExternAmountOutResponseSDKType>;
    exitSwapShareAmountIn(request: MsgExitSwapShareAmountIn): Promise<MsgExitSwapShareAmountInResponseSDKType>;
}
