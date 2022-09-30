import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse, ParamsResponseSDKType, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapResponseSDKType, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse, ArithmeticTwapToNowResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  params(request?: ParamsRequest): Promise<ParamsResponseSDKType>;
  /*null*/

  arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponseSDKType>;
  /*null*/

  arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponseSDKType>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.arithmeticTwap = this.arithmeticTwap.bind(this);
    this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
  }

  params(request: ParamsRequest = {}): Promise<ParamsResponseSDKType> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new _m0.Reader(data)));
  }

  arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponseSDKType> {
    const data = ArithmeticTwapRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwap", data);
    return promise.then(data => ArithmeticTwapResponse.decode(new _m0.Reader(data)));
  }

  arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponseSDKType> {
    const data = ArithmeticTwapToNowRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwapToNow", data);
    return promise.then(data => ArithmeticTwapToNowResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: ParamsRequest): Promise<ParamsResponseSDKType> {
      return queryService.params(request);
    },

    arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponseSDKType> {
      return queryService.arithmeticTwap(request);
    },

    arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponseSDKType> {
      return queryService.arithmeticTwapToNow(request);
    }

  };
};