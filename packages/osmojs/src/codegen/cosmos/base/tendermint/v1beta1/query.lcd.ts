import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { GetNodeInfoRequest, GetNodeInfoResponseSDKType, GetSyncingRequest, GetSyncingResponseSDKType, GetLatestBlockRequest, GetLatestBlockResponseSDKType, GetBlockByHeightRequest, GetBlockByHeightResponseSDKType, GetLatestValidatorSetRequest, GetLatestValidatorSetResponseSDKType, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponseSDKType } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }
  /* GetNodeInfo queries the current node info. */


  async getNodeInfo(_params: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponseSDKType> {
    const endpoint = `cosmos/base/tendermint/v1beta1/node_info`;
    return await this.get<GetNodeInfoResponseSDKType>(endpoint);
  }
  /* GetSyncing queries node syncing. */


  async getSyncing(_params: GetSyncingRequest = {}): Promise<GetSyncingResponseSDKType> {
    const endpoint = `cosmos/base/tendermint/v1beta1/syncing`;
    return await this.get<GetSyncingResponseSDKType>(endpoint);
  }
  /* GetLatestBlock returns the latest block. */


  async getLatestBlock(_params: GetLatestBlockRequest = {}): Promise<GetLatestBlockResponseSDKType> {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/latest`;
    return await this.get<GetLatestBlockResponseSDKType>(endpoint);
  }
  /* GetBlockByHeight queries block for given height. */


  async getBlockByHeight(params: GetBlockByHeightRequest): Promise<GetBlockByHeightResponseSDKType> {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/${params.height}`;
    return await this.get<GetBlockByHeightResponseSDKType>(endpoint);
  }
  /* GetLatestValidatorSet queries latest validator-set. */


  async getLatestValidatorSet(params: GetLatestValidatorSetRequest = {
    pagination: undefined
  }): Promise<GetLatestValidatorSetResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/latest`;
    return await this.get<GetLatestValidatorSetResponseSDKType>(endpoint, options);
  }
  /* GetValidatorSetByHeight queries validator-set at a given height. */


  async getValidatorSetByHeight(params: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/${params.height}`;
    return await this.get<GetValidatorSetByHeightResponseSDKType>(endpoint, options);
  }

}