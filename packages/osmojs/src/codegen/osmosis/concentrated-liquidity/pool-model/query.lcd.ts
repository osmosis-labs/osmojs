import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryPoolsRequest, QueryPoolsResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryLiquidityDepthsForRangeRequest, QueryLiquidityDepthsForRangeResponseSDKType, QueryUserPositionsRequest, QueryUserPositionsResponseSDKType, QueryTotalLiquidityForRangeRequest, QueryTotalLiquidityForRangeResponseSDKType, QueryClaimableFeesRequest, QueryClaimableFeesResponseSDKType, QueryPositionByIdRequest, QueryPositionByIdResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.pools = this.pools.bind(this);
    this.params = this.params.bind(this);
    this.liquidityDepthsForRange = this.liquidityDepthsForRange.bind(this);
    this.userPositions = this.userPositions.bind(this);
    this.totalLiquidityForRange = this.totalLiquidityForRange.bind(this);
    this.claimableFees = this.claimableFees.bind(this);
    this.positionById = this.positionById.bind(this);
  }
  /* Pools returns all concentrated liquidity pools */


  async pools(params: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/concentratedliquidity/v1beta1/pools`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint, options);
  }
  /* Params returns concentrated liquidity module params. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/concentratedliquidity/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* LiquidityDepthsForRange returns Liqiudity Depths for given range */


  async liquidityDepthsForRange(params: QueryLiquidityDepthsForRangeRequest): Promise<QueryLiquidityDepthsForRangeResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }

    if (typeof params?.lowerTick !== "undefined") {
      options.params.lower_tick = params.lowerTick;
    }

    if (typeof params?.upperTick !== "undefined") {
      options.params.upper_tick = params.upperTick;
    }

    const endpoint = `osmosis/concentratedliquidity/v1beta1/liquidity_depths_for_range`;
    return await this.req.get<QueryLiquidityDepthsForRangeResponseSDKType>(endpoint, options);
  }
  /* UserPositions returns all concentrated postitions of some address. */


  async userPositions(params: QueryUserPositionsRequest): Promise<QueryUserPositionsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }

    const endpoint = `osmosis/concentratedliquidity/v1beta1/positions/${params.address}`;
    return await this.req.get<QueryUserPositionsResponseSDKType>(endpoint, options);
  }
  /* TotalLiquidityForRange the amount of liquidity existing within given range. */


  async totalLiquidityForRange(params: QueryTotalLiquidityForRangeRequest): Promise<QueryTotalLiquidityForRangeResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }

    const endpoint = `osmosis/concentratedliquidity/v1beta1/total_liquidity_for_range`;
    return await this.req.get<QueryTotalLiquidityForRangeResponseSDKType>(endpoint, options);
  }
  /* ClaimableFees returns the amount of fees that can be claimed by a position
   with the given id. */


  async claimableFees(params: QueryClaimableFeesRequest): Promise<QueryClaimableFeesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.positionId !== "undefined") {
      options.params.position_id = params.positionId;
    }

    const endpoint = `osmosis/concentratedliquidity/v1beta1/claimable_fees`;
    return await this.req.get<QueryClaimableFeesResponseSDKType>(endpoint, options);
  }
  /* PositionById returns a position with the given id. */


  async positionById(params: QueryPositionByIdRequest): Promise<QueryPositionByIdResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.positionId !== "undefined") {
      options.params.position_id = params.positionId;
    }

    const endpoint = `osmosis/concentratedliquidity/v1beta1/position_by_id`;
    return await this.req.get<QueryPositionByIdResponseSDKType>(endpoint, options);
  }

}