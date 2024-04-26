//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { ParamsRequest, ParamsResponseSDKType, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponseSDKType, EstimateSwapExactAmountInWithPrimitiveTypesRequest, EstimateSinglePoolSwapExactAmountInRequest, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponseSDKType, EstimateSwapExactAmountOutWithPrimitiveTypesRequest, EstimateSinglePoolSwapExactAmountOutRequest, NumPoolsRequest, NumPoolsResponseSDKType, PoolRequest, PoolResponseSDKType, AllPoolsRequest, AllPoolsResponseSDKType, ListPoolsByDenomRequest, ListPoolsByDenomResponseSDKType, SpotPriceRequest, SpotPriceResponseSDKType, TotalPoolLiquidityRequest, TotalPoolLiquidityResponseSDKType, TotalLiquidityRequest, TotalLiquidityResponseSDKType, TotalVolumeForPoolRequest, TotalVolumeForPoolResponseSDKType, TradingPairTakerFeeRequest, TradingPairTakerFeeResponseSDKType, EstimateTradeBasedOnPriceImpactRequest, EstimateTradeBasedOnPriceImpactResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountInWithPrimitiveTypes = this.estimateSwapExactAmountInWithPrimitiveTypes.bind(this);
    this.estimateSinglePoolSwapExactAmountIn = this.estimateSinglePoolSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
    this.estimateSwapExactAmountOutWithPrimitiveTypes = this.estimateSwapExactAmountOutWithPrimitiveTypes.bind(this);
    this.estimateSinglePoolSwapExactAmountOut = this.estimateSinglePoolSwapExactAmountOut.bind(this);
    this.numPools = this.numPools.bind(this);
    this.pool = this.pool.bind(this);
    this.allPools = this.allPools.bind(this);
    this.listPoolsByDenom = this.listPoolsByDenom.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
    this.totalVolumeForPool = this.totalVolumeForPool.bind(this);
    this.tradingPairTakerFee = this.tradingPairTakerFee.bind(this);
    this.estimateTradeBasedOnPriceImpact = this.estimateTradeBasedOnPriceImpact.bind(this);
  }
  /* Params */
  async params(_params: ParamsRequest = {}): Promise<ParamsResponseSDKType> {
    const endpoint = `osmosis/poolmanager/v1beta1/Params`;
    return await this.req.get<ParamsResponseSDKType>(endpoint);
  }
  /* Estimates swap amount out given in. */
  async estimateSwapExactAmountIn(params: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/${params.poolId}/estimate/swap_exact_amount_in`;
    return await this.req.get<EstimateSwapExactAmountInResponseSDKType>(endpoint, options);
  }
  /* EstimateSwapExactAmountInWithPrimitiveTypes is an alternative query for
   EstimateSwapExactAmountIn. Supports query via GRPC-Gateway by using
   primitive types instead of repeated structs. Each index in the
   routes_pool_id field corresponds to the respective routes_token_out_denom
   value, thus they are required to have the same length and are grouped
   together as pairs.
   example usage:
   http://0.0.0.0:1317/osmosis/poolmanager/v1beta1/1/estimate/
   swap_exact_amount_in_with_primitive_types?token_in=100000stake&routes_token_out_denom=uatom
   &routes_token_out_denom=uion&routes_pool_id=1&routes_pool_id=2 */
  async estimateSwapExactAmountInWithPrimitiveTypes(params: EstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<EstimateSwapExactAmountInResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.routesPoolId !== "undefined") {
      options.params.routes_pool_id = params.routesPoolId;
    }
    if (typeof params?.routesTokenOutDenom !== "undefined") {
      options.params.routes_token_out_denom = params.routesTokenOutDenom;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/${params.poolId}/estimate/swap_exact_amount_in_with_primitive_types`;
    return await this.req.get<EstimateSwapExactAmountInResponseSDKType>(endpoint, options);
  }
  /* EstimateSinglePoolSwapExactAmountIn */
  async estimateSinglePoolSwapExactAmountIn(params: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOutDenom !== "undefined") {
      options.params.token_out_denom = params.tokenOutDenom;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/${params.poolId}/estimate/single_pool_swap_exact_amount_in`;
    return await this.req.get<EstimateSwapExactAmountInResponseSDKType>(endpoint, options);
  }
  /* Estimates swap amount in given out. */
  async estimateSwapExactAmountOut(params: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/${params.poolId}/estimate/swap_exact_amount_out`;
    return await this.req.get<EstimateSwapExactAmountOutResponseSDKType>(endpoint, options);
  }
  /* Estimates swap amount in given out. */
  async estimateSwapExactAmountOutWithPrimitiveTypes(params: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<EstimateSwapExactAmountOutResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.routesPoolId !== "undefined") {
      options.params.routes_pool_id = params.routesPoolId;
    }
    if (typeof params?.routesTokenInDenom !== "undefined") {
      options.params.routes_token_in_denom = params.routesTokenInDenom;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/${params.poolId}/estimate/swap_exact_amount_out_with_primitive_types`;
    return await this.req.get<EstimateSwapExactAmountOutResponseSDKType>(endpoint, options);
  }
  /* EstimateSinglePoolSwapExactAmountOut */
  async estimateSinglePoolSwapExactAmountOut(params: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenInDenom !== "undefined") {
      options.params.token_in_denom = params.tokenInDenom;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/${params.poolId}/estimate_out/single_pool_swap_exact_amount_out`;
    return await this.req.get<EstimateSwapExactAmountOutResponseSDKType>(endpoint, options);
  }
  /* Returns the total number of pools existing in Osmosis. */
  async numPools(_params: NumPoolsRequest = {}): Promise<NumPoolsResponseSDKType> {
    const endpoint = `osmosis/poolmanager/v1beta1/num_pools`;
    return await this.req.get<NumPoolsResponseSDKType>(endpoint);
  }
  /* Pool returns the Pool specified by the pool id */
  async pool(params: PoolRequest): Promise<PoolResponseSDKType> {
    const endpoint = `osmosis/poolmanager/v1beta1/pools/${params.poolId}`;
    return await this.req.get<PoolResponseSDKType>(endpoint);
  }
  /* AllPools returns all pools on the Osmosis chain sorted by IDs. */
  async allPools(_params: AllPoolsRequest = {}): Promise<AllPoolsResponseSDKType> {
    const endpoint = `osmosis/poolmanager/v1beta1/all-pools`;
    return await this.req.get<AllPoolsResponseSDKType>(endpoint);
  }
  /* ListPoolsByDenom return all pools by denom */
  async listPoolsByDenom(params: ListPoolsByDenomRequest): Promise<ListPoolsByDenomResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/list-pools-by-denom`;
    return await this.req.get<ListPoolsByDenomResponseSDKType>(endpoint, options);
  }
  /* SpotPrice defines a gRPC query handler that returns the spot price given
   a base denomination and a quote denomination. */
  async spotPrice(params: SpotPriceRequest): Promise<SpotPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.baseAssetDenom !== "undefined") {
      options.params.base_asset_denom = params.baseAssetDenom;
    }
    if (typeof params?.quoteAssetDenom !== "undefined") {
      options.params.quote_asset_denom = params.quoteAssetDenom;
    }
    const endpoint = `osmosis/poolmanager/pools/${params.poolId}/prices`;
    return await this.req.get<SpotPriceResponseSDKType>(endpoint, options);
  }
  /* TotalPoolLiquidity returns the total liquidity of the specified pool. */
  async totalPoolLiquidity(params: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponseSDKType> {
    const endpoint = `osmosis/poolmanager/v1beta1/pools/${params.poolId}/total_pool_liquidity`;
    return await this.req.get<TotalPoolLiquidityResponseSDKType>(endpoint);
  }
  /* TotalLiquidity returns the total liquidity across all pools. */
  async totalLiquidity(_params: TotalLiquidityRequest = {}): Promise<TotalLiquidityResponseSDKType> {
    const endpoint = `osmosis/poolmanager/v1beta1/total_liquidity`;
    return await this.req.get<TotalLiquidityResponseSDKType>(endpoint);
  }
  /* TotalVolumeForPool returns the total volume of the specified pool. */
  async totalVolumeForPool(params: TotalVolumeForPoolRequest): Promise<TotalVolumeForPoolResponseSDKType> {
    const endpoint = `osmosis/poolmanager/v1beta1/pools/${params.poolId}/total_volume`;
    return await this.req.get<TotalVolumeForPoolResponseSDKType>(endpoint);
  }
  /* TradingPairTakerFee returns the taker fee for a given set of denoms */
  async tradingPairTakerFee(params: TradingPairTakerFeeRequest): Promise<TradingPairTakerFeeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom0 !== "undefined") {
      options.params.denom_0 = params.denom0;
    }
    if (typeof params?.denom1 !== "undefined") {
      options.params.denom_1 = params.denom1;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/trading_pair_takerfee`;
    return await this.req.get<TradingPairTakerFeeResponseSDKType>(endpoint, options);
  }
  /* EstimateTradeBasedOnPriceImpact returns an estimated trade based on price
   impact, if a trade cannot be estimated a 0 input and 0 output would be
   returned. */
  async estimateTradeBasedOnPriceImpact(params: EstimateTradeBasedOnPriceImpactRequest): Promise<EstimateTradeBasedOnPriceImpactResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.fromCoin !== "undefined") {
      options.params.from_coin = params.fromCoin;
    }
    if (typeof params?.toCoinDenom !== "undefined") {
      options.params.to_coin_denom = params.toCoinDenom;
    }
    if (typeof params?.maxPriceImpact !== "undefined") {
      options.params.max_price_impact = params.maxPriceImpact;
    }
    if (typeof params?.externalPrice !== "undefined") {
      options.params.external_price = params.externalPrice;
    }
    const endpoint = `osmosis/poolmanager/v1beta1/${params.poolId}/estimate_trade`;
    return await this.req.get<EstimateTradeBasedOnPriceImpactResponseSDKType>(endpoint, options);
  }
}