import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, AssetTypeRequest, AssetTypeResponseSDKType, AllAssetsRequest, AllAssetsResponseSDKType, AssetMultiplierRequest, AssetMultiplierResponseSDKType, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponseSDKType, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponseSDKType, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponseSDKType, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponseSDKType, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponseSDKType, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponseSDKType, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponseSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponseSDKType, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    assetType(params: AssetTypeRequest): Promise<AssetTypeResponseSDKType>;
    allAssets(_params?: AllAssetsRequest): Promise<AllAssetsResponseSDKType>;
    assetMultiplier(params: AssetMultiplierRequest): Promise<AssetMultiplierResponseSDKType>;
    allIntermediaryAccounts(params?: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponseSDKType>;
    connectedIntermediaryAccount(params: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponseSDKType>;
    totalSuperfluidDelegations(_params?: TotalSuperfluidDelegationsRequest): Promise<TotalSuperfluidDelegationsResponseSDKType>;
    superfluidDelegationAmount(params: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponseSDKType>;
    superfluidDelegationsByDelegator(params: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponseSDKType>;
    superfluidUndelegationsByDelegator(params: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponseSDKType>;
    superfluidDelegationsByValidatorDenom(params: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponseSDKType>;
    estimateSuperfluidDelegatedAmountByValidatorDenom(params: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType>;
    totalDelegationByDelegator(params: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponseSDKType>;
    unpoolWhitelist(_params?: QueryUnpoolWhitelistRequest): Promise<QueryUnpoolWhitelistResponseSDKType>;
}
