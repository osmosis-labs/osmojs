//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponseSDKType, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponseSDKType, QueryBeforeSendHookAddressRequest, QueryBeforeSendHookAddressResponseSDKType, QueryAllBeforeSendHooksAddressesRequest, QueryAllBeforeSendHooksAddressesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
    this.denomsFromCreator = this.denomsFromCreator.bind(this);
    this.beforeSendHookAddress = this.beforeSendHookAddress.bind(this);
    this.allBeforeSendHooksAddresses = this.allBeforeSendHooksAddresses.bind(this);
  }
  /* Params defines a gRPC query method that returns the tokenfactory module's
   parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/tokenfactory/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* DenomAuthorityMetadata defines a gRPC query method for fetching
   DenomAuthorityMetadata for a particular denom. */
  async denomAuthorityMetadata(params: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponseSDKType> {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms/${params.denom}/authority_metadata`;
    return await this.req.get<QueryDenomAuthorityMetadataResponseSDKType>(endpoint);
  }
  /* DenomsFromCreator defines a gRPC query method for fetching all
   denominations created by a specific admin/creator. */
  async denomsFromCreator(params: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponseSDKType> {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms_from_creator/${params.creator}`;
    return await this.req.get<QueryDenomsFromCreatorResponseSDKType>(endpoint);
  }
  /* BeforeSendHookAddress defines a gRPC query method for
   getting the address registered for the before send hook. */
  async beforeSendHookAddress(params: QueryBeforeSendHookAddressRequest): Promise<QueryBeforeSendHookAddressResponseSDKType> {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms/${params.denom}/before_send_hook`;
    return await this.req.get<QueryBeforeSendHookAddressResponseSDKType>(endpoint);
  }
  /* AllBeforeSendHooksAddresses defines a gRPC query method for
   getting all addresses with before send hook registered.
   The response returns two arrays, an array with a list of denom and an array
   of before send hook addresses. The idx of denom corresponds to before send
   hook addresse's idx. */
  async allBeforeSendHooksAddresses(_params: QueryAllBeforeSendHooksAddressesRequest = {}): Promise<QueryAllBeforeSendHooksAddressesResponseSDKType> {
    const endpoint = `osmosis/tokenfactory/v1beta1/all_before_send_hooks`;
    return await this.req.get<QueryAllBeforeSendHooksAddressesResponseSDKType>(endpoint);
  }
}