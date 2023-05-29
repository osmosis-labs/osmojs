import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordAmino, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordAmino, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/query-params-request";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "osmosis/query-params-response";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface AssetTypeRequest {
    denom: string;
}
export interface AssetTypeRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.AssetTypeRequest";
    value: Uint8Array;
}
export interface AssetTypeRequestAmino {
    denom: string;
}
export interface AssetTypeRequestAminoMsg {
    type: "osmosis/asset-type-request";
    value: AssetTypeRequestAmino;
}
export interface AssetTypeRequestSDKType {
    denom: string;
}
export interface AssetTypeResponse {
    assetType: SuperfluidAssetType;
}
export interface AssetTypeResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.AssetTypeResponse";
    value: Uint8Array;
}
export interface AssetTypeResponseAmino {
    asset_type: SuperfluidAssetType;
}
export interface AssetTypeResponseAminoMsg {
    type: "osmosis/asset-type-response";
    value: AssetTypeResponseAmino;
}
export interface AssetTypeResponseSDKType {
    asset_type: SuperfluidAssetType;
}
export interface AllAssetsRequest {
}
export interface AllAssetsRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.AllAssetsRequest";
    value: Uint8Array;
}
export interface AllAssetsRequestAmino {
}
export interface AllAssetsRequestAminoMsg {
    type: "osmosis/all-assets-request";
    value: AllAssetsRequestAmino;
}
export interface AllAssetsRequestSDKType {
}
export interface AllAssetsResponse {
    assets: SuperfluidAsset[];
}
export interface AllAssetsResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.AllAssetsResponse";
    value: Uint8Array;
}
export interface AllAssetsResponseAmino {
    assets: SuperfluidAssetAmino[];
}
export interface AllAssetsResponseAminoMsg {
    type: "osmosis/all-assets-response";
    value: AllAssetsResponseAmino;
}
export interface AllAssetsResponseSDKType {
    assets: SuperfluidAssetSDKType[];
}
export interface AssetMultiplierRequest {
    denom: string;
}
export interface AssetMultiplierRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.AssetMultiplierRequest";
    value: Uint8Array;
}
export interface AssetMultiplierRequestAmino {
    denom: string;
}
export interface AssetMultiplierRequestAminoMsg {
    type: "osmosis/asset-multiplier-request";
    value: AssetMultiplierRequestAmino;
}
export interface AssetMultiplierRequestSDKType {
    denom: string;
}
export interface AssetMultiplierResponse {
    osmoEquivalentMultiplier?: OsmoEquivalentMultiplierRecord;
}
export interface AssetMultiplierResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.AssetMultiplierResponse";
    value: Uint8Array;
}
export interface AssetMultiplierResponseAmino {
    osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordAmino;
}
export interface AssetMultiplierResponseAminoMsg {
    type: "osmosis/asset-multiplier-response";
    value: AssetMultiplierResponseAmino;
}
export interface AssetMultiplierResponseSDKType {
    osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordSDKType;
}
export interface SuperfluidIntermediaryAccountInfo {
    denom: string;
    valAddr: string;
    gaugeId: Long;
    address: string;
}
export interface SuperfluidIntermediaryAccountInfoProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo";
    value: Uint8Array;
}
export interface SuperfluidIntermediaryAccountInfoAmino {
    denom: string;
    val_addr: string;
    gauge_id: string;
    address: string;
}
export interface SuperfluidIntermediaryAccountInfoAminoMsg {
    type: "osmosis/superfluid-intermediary-account-info";
    value: SuperfluidIntermediaryAccountInfoAmino;
}
export interface SuperfluidIntermediaryAccountInfoSDKType {
    denom: string;
    val_addr: string;
    gauge_id: Long;
    address: string;
}
export interface AllIntermediaryAccountsRequest {
    pagination?: PageRequest;
}
export interface AllIntermediaryAccountsRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest";
    value: Uint8Array;
}
export interface AllIntermediaryAccountsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface AllIntermediaryAccountsRequestAminoMsg {
    type: "osmosis/all-intermediary-accounts-request";
    value: AllIntermediaryAccountsRequestAmino;
}
export interface AllIntermediaryAccountsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface AllIntermediaryAccountsResponse {
    accounts: SuperfluidIntermediaryAccountInfo[];
    pagination?: PageResponse;
}
export interface AllIntermediaryAccountsResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse";
    value: Uint8Array;
}
export interface AllIntermediaryAccountsResponseAmino {
    accounts: SuperfluidIntermediaryAccountInfoAmino[];
    pagination?: PageResponseAmino;
}
export interface AllIntermediaryAccountsResponseAminoMsg {
    type: "osmosis/all-intermediary-accounts-response";
    value: AllIntermediaryAccountsResponseAmino;
}
export interface AllIntermediaryAccountsResponseSDKType {
    accounts: SuperfluidIntermediaryAccountInfoSDKType[];
    pagination?: PageResponseSDKType;
}
export interface ConnectedIntermediaryAccountRequest {
    lockId: Long;
}
export interface ConnectedIntermediaryAccountRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest";
    value: Uint8Array;
}
export interface ConnectedIntermediaryAccountRequestAmino {
    lock_id: string;
}
export interface ConnectedIntermediaryAccountRequestAminoMsg {
    type: "osmosis/connected-intermediary-account-request";
    value: ConnectedIntermediaryAccountRequestAmino;
}
export interface ConnectedIntermediaryAccountRequestSDKType {
    lock_id: Long;
}
export interface ConnectedIntermediaryAccountResponse {
    account?: SuperfluidIntermediaryAccountInfo;
}
export interface ConnectedIntermediaryAccountResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse";
    value: Uint8Array;
}
export interface ConnectedIntermediaryAccountResponseAmino {
    account?: SuperfluidIntermediaryAccountInfoAmino;
}
export interface ConnectedIntermediaryAccountResponseAminoMsg {
    type: "osmosis/connected-intermediary-account-response";
    value: ConnectedIntermediaryAccountResponseAmino;
}
export interface ConnectedIntermediaryAccountResponseSDKType {
    account?: SuperfluidIntermediaryAccountInfoSDKType;
}
export interface QueryTotalDelegationByValidatorForDenomRequest {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest";
    value: Uint8Array;
}
export interface QueryTotalDelegationByValidatorForDenomRequestAmino {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestAminoMsg {
    type: "osmosis/query-total-delegation-by-validator-for-denom-request";
    value: QueryTotalDelegationByValidatorForDenomRequestAmino;
}
export interface QueryTotalDelegationByValidatorForDenomRequestSDKType {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomResponse {
    assets: Delegations[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse";
    value: Uint8Array;
}
export interface QueryTotalDelegationByValidatorForDenomResponseAmino {
    assets: DelegationsAmino[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseAminoMsg {
    type: "osmosis/query-total-delegation-by-validator-for-denom-response";
    value: QueryTotalDelegationByValidatorForDenomResponseAmino;
}
export interface QueryTotalDelegationByValidatorForDenomResponseSDKType {
    assets: DelegationsSDKType[];
}
export interface Delegations {
    valAddr: string;
    amountSfsd: string;
    osmoEquivalent: string;
}
export interface DelegationsProtoMsg {
    typeUrl: "/osmosis.superfluid.Delegations";
    value: Uint8Array;
}
export interface DelegationsAmino {
    val_addr: string;
    amount_sfsd: string;
    osmo_equivalent: string;
}
export interface DelegationsAminoMsg {
    type: "osmosis/delegations";
    value: DelegationsAmino;
}
export interface DelegationsSDKType {
    val_addr: string;
    amount_sfsd: string;
    osmo_equivalent: string;
}
export interface TotalSuperfluidDelegationsRequest {
}
export interface TotalSuperfluidDelegationsRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest";
    value: Uint8Array;
}
export interface TotalSuperfluidDelegationsRequestAmino {
}
export interface TotalSuperfluidDelegationsRequestAminoMsg {
    type: "osmosis/total-superfluid-delegations-request";
    value: TotalSuperfluidDelegationsRequestAmino;
}
export interface TotalSuperfluidDelegationsRequestSDKType {
}
export interface TotalSuperfluidDelegationsResponse {
    totalDelegations: string;
}
export interface TotalSuperfluidDelegationsResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse";
    value: Uint8Array;
}
export interface TotalSuperfluidDelegationsResponseAmino {
    total_delegations: string;
}
export interface TotalSuperfluidDelegationsResponseAminoMsg {
    type: "osmosis/total-superfluid-delegations-response";
    value: TotalSuperfluidDelegationsResponseAmino;
}
export interface TotalSuperfluidDelegationsResponseSDKType {
    total_delegations: string;
}
export interface SuperfluidDelegationAmountRequest {
    delegatorAddress: string;
    validatorAddress: string;
    denom: string;
}
export interface SuperfluidDelegationAmountRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest";
    value: Uint8Array;
}
export interface SuperfluidDelegationAmountRequestAmino {
    delegator_address: string;
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationAmountRequestAminoMsg {
    type: "osmosis/superfluid-delegation-amount-request";
    value: SuperfluidDelegationAmountRequestAmino;
}
export interface SuperfluidDelegationAmountRequestSDKType {
    delegator_address: string;
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationAmountResponse {
    amount: Coin[];
}
export interface SuperfluidDelegationAmountResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse";
    value: Uint8Array;
}
export interface SuperfluidDelegationAmountResponseAmino {
    amount: CoinAmino[];
}
export interface SuperfluidDelegationAmountResponseAminoMsg {
    type: "osmosis/superfluid-delegation-amount-response";
    value: SuperfluidDelegationAmountResponseAmino;
}
export interface SuperfluidDelegationAmountResponseSDKType {
    amount: CoinSDKType[];
}
export interface SuperfluidDelegationsByDelegatorRequest {
    delegatorAddress: string;
}
export interface SuperfluidDelegationsByDelegatorRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByDelegatorRequestAmino {
    delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorRequestAminoMsg {
    type: "osmosis/superfluid-delegations-by-delegator-request";
    value: SuperfluidDelegationsByDelegatorRequestAmino;
}
export interface SuperfluidDelegationsByDelegatorRequestSDKType {
    delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    totalDelegatedCoins: Coin[];
    totalEquivalentStakedAmount?: Coin;
}
export interface SuperfluidDelegationsByDelegatorResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByDelegatorResponseAmino {
    superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
    total_delegated_coins: CoinAmino[];
    total_equivalent_staked_amount?: CoinAmino;
}
export interface SuperfluidDelegationsByDelegatorResponseAminoMsg {
    type: "osmosis/superfluid-delegations-by-delegator-response";
    value: SuperfluidDelegationsByDelegatorResponseAmino;
}
export interface SuperfluidDelegationsByDelegatorResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
    total_delegated_coins: CoinSDKType[];
    total_equivalent_staked_amount?: CoinSDKType;
}
export interface SuperfluidUndelegationsByDelegatorRequest {
    delegatorAddress: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest";
    value: Uint8Array;
}
export interface SuperfluidUndelegationsByDelegatorRequestAmino {
    delegator_address: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestAminoMsg {
    type: "osmosis/superfluid-undelegations-by-delegator-request";
    value: SuperfluidUndelegationsByDelegatorRequestAmino;
}
export interface SuperfluidUndelegationsByDelegatorRequestSDKType {
    delegator_address: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    totalUndelegatedCoins: Coin[];
    syntheticLocks: SyntheticLock[];
}
export interface SuperfluidUndelegationsByDelegatorResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse";
    value: Uint8Array;
}
export interface SuperfluidUndelegationsByDelegatorResponseAmino {
    superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
    total_undelegated_coins: CoinAmino[];
    synthetic_locks: SyntheticLockAmino[];
}
export interface SuperfluidUndelegationsByDelegatorResponseAminoMsg {
    type: "osmosis/superfluid-undelegations-by-delegator-response";
    value: SuperfluidUndelegationsByDelegatorResponseAmino;
}
export interface SuperfluidUndelegationsByDelegatorResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
    total_undelegated_coins: CoinSDKType[];
    synthetic_locks: SyntheticLockSDKType[];
}
export interface SuperfluidDelegationsByValidatorDenomRequest {
    validatorAddress: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByValidatorDenomRequestAmino {
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestAminoMsg {
    type: "osmosis/superfluid-delegations-by-validator-denom-request";
    value: SuperfluidDelegationsByValidatorDenomRequestAmino;
}
export interface SuperfluidDelegationsByValidatorDenomRequestSDKType {
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByValidatorDenomResponseAmino {
    superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseAminoMsg {
    type: "osmosis/superfluid-delegations-by-validator-denom-response";
    value: SuperfluidDelegationsByValidatorDenomResponseAmino;
}
export interface SuperfluidDelegationsByValidatorDenomResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    validatorAddress: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest";
    value: Uint8Array;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino {
    validator_address: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg {
    type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-request";
    value: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
    validator_address: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    totalDelegatedCoins: Coin[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse";
    value: Uint8Array;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino {
    total_delegated_coins: CoinAmino[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg {
    type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-response";
    value: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
    total_delegated_coins: CoinSDKType[];
}
export interface QueryTotalDelegationByDelegatorRequest {
    delegatorAddress: string;
}
export interface QueryTotalDelegationByDelegatorRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest";
    value: Uint8Array;
}
export interface QueryTotalDelegationByDelegatorRequestAmino {
    delegator_address: string;
}
export interface QueryTotalDelegationByDelegatorRequestAminoMsg {
    type: "osmosis/query-total-delegation-by-delegator-request";
    value: QueryTotalDelegationByDelegatorRequestAmino;
}
export interface QueryTotalDelegationByDelegatorRequestSDKType {
    delegator_address: string;
}
export interface QueryTotalDelegationByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    delegationResponse: DelegationResponse[];
    totalDelegatedCoins: Coin[];
    totalEquivalentStakedAmount?: Coin;
}
export interface QueryTotalDelegationByDelegatorResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse";
    value: Uint8Array;
}
export interface QueryTotalDelegationByDelegatorResponseAmino {
    superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
    delegation_response: DelegationResponseAmino[];
    total_delegated_coins: CoinAmino[];
    total_equivalent_staked_amount?: CoinAmino;
}
export interface QueryTotalDelegationByDelegatorResponseAminoMsg {
    type: "osmosis/query-total-delegation-by-delegator-response";
    value: QueryTotalDelegationByDelegatorResponseAmino;
}
export interface QueryTotalDelegationByDelegatorResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
    delegation_response: DelegationResponseSDKType[];
    total_delegated_coins: CoinSDKType[];
    total_equivalent_staked_amount?: CoinSDKType;
}
export interface QueryUnpoolWhitelistRequest {
}
export interface QueryUnpoolWhitelistRequestProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest";
    value: Uint8Array;
}
export interface QueryUnpoolWhitelistRequestAmino {
}
export interface QueryUnpoolWhitelistRequestAminoMsg {
    type: "osmosis/query-unpool-whitelist-request";
    value: QueryUnpoolWhitelistRequestAmino;
}
export interface QueryUnpoolWhitelistRequestSDKType {
}
export interface QueryUnpoolWhitelistResponse {
    poolIds: Long[];
}
export interface QueryUnpoolWhitelistResponseProtoMsg {
    typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse";
    value: Uint8Array;
}
export interface QueryUnpoolWhitelistResponseAmino {
    pool_ids: string[];
}
export interface QueryUnpoolWhitelistResponseAminoMsg {
    type: "osmosis/query-unpool-whitelist-response";
    value: QueryUnpoolWhitelistResponseAmino;
}
export interface QueryUnpoolWhitelistResponseSDKType {
    pool_ids: Long[];
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const AssetTypeRequest: {
    typeUrl: string;
    encode(message: AssetTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeRequest;
    fromPartial(object: Partial<AssetTypeRequest>): AssetTypeRequest;
    fromAmino(object: AssetTypeRequestAmino): AssetTypeRequest;
    toAmino(message: AssetTypeRequest): AssetTypeRequestAmino;
    fromAminoMsg(object: AssetTypeRequestAminoMsg): AssetTypeRequest;
    toAminoMsg(message: AssetTypeRequest): AssetTypeRequestAminoMsg;
    fromProtoMsg(message: AssetTypeRequestProtoMsg): AssetTypeRequest;
    toProto(message: AssetTypeRequest): Uint8Array;
    toProtoMsg(message: AssetTypeRequest): AssetTypeRequestProtoMsg;
};
export declare const AssetTypeResponse: {
    typeUrl: string;
    encode(message: AssetTypeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeResponse;
    fromPartial(object: Partial<AssetTypeResponse>): AssetTypeResponse;
    fromAmino(object: AssetTypeResponseAmino): AssetTypeResponse;
    toAmino(message: AssetTypeResponse): AssetTypeResponseAmino;
    fromAminoMsg(object: AssetTypeResponseAminoMsg): AssetTypeResponse;
    toAminoMsg(message: AssetTypeResponse): AssetTypeResponseAminoMsg;
    fromProtoMsg(message: AssetTypeResponseProtoMsg): AssetTypeResponse;
    toProto(message: AssetTypeResponse): Uint8Array;
    toProtoMsg(message: AssetTypeResponse): AssetTypeResponseProtoMsg;
};
export declare const AllAssetsRequest: {
    typeUrl: string;
    encode(_: AllAssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsRequest;
    fromPartial(_: Partial<AllAssetsRequest>): AllAssetsRequest;
    fromAmino(_: AllAssetsRequestAmino): AllAssetsRequest;
    toAmino(_: AllAssetsRequest): AllAssetsRequestAmino;
    fromAminoMsg(object: AllAssetsRequestAminoMsg): AllAssetsRequest;
    toAminoMsg(message: AllAssetsRequest): AllAssetsRequestAminoMsg;
    fromProtoMsg(message: AllAssetsRequestProtoMsg): AllAssetsRequest;
    toProto(message: AllAssetsRequest): Uint8Array;
    toProtoMsg(message: AllAssetsRequest): AllAssetsRequestProtoMsg;
};
export declare const AllAssetsResponse: {
    typeUrl: string;
    encode(message: AllAssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsResponse;
    fromPartial(object: Partial<AllAssetsResponse>): AllAssetsResponse;
    fromAmino(object: AllAssetsResponseAmino): AllAssetsResponse;
    toAmino(message: AllAssetsResponse): AllAssetsResponseAmino;
    fromAminoMsg(object: AllAssetsResponseAminoMsg): AllAssetsResponse;
    toAminoMsg(message: AllAssetsResponse): AllAssetsResponseAminoMsg;
    fromProtoMsg(message: AllAssetsResponseProtoMsg): AllAssetsResponse;
    toProto(message: AllAssetsResponse): Uint8Array;
    toProtoMsg(message: AllAssetsResponse): AllAssetsResponseProtoMsg;
};
export declare const AssetMultiplierRequest: {
    typeUrl: string;
    encode(message: AssetMultiplierRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierRequest;
    fromPartial(object: Partial<AssetMultiplierRequest>): AssetMultiplierRequest;
    fromAmino(object: AssetMultiplierRequestAmino): AssetMultiplierRequest;
    toAmino(message: AssetMultiplierRequest): AssetMultiplierRequestAmino;
    fromAminoMsg(object: AssetMultiplierRequestAminoMsg): AssetMultiplierRequest;
    toAminoMsg(message: AssetMultiplierRequest): AssetMultiplierRequestAminoMsg;
    fromProtoMsg(message: AssetMultiplierRequestProtoMsg): AssetMultiplierRequest;
    toProto(message: AssetMultiplierRequest): Uint8Array;
    toProtoMsg(message: AssetMultiplierRequest): AssetMultiplierRequestProtoMsg;
};
export declare const AssetMultiplierResponse: {
    typeUrl: string;
    encode(message: AssetMultiplierResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierResponse;
    fromPartial(object: Partial<AssetMultiplierResponse>): AssetMultiplierResponse;
    fromAmino(object: AssetMultiplierResponseAmino): AssetMultiplierResponse;
    toAmino(message: AssetMultiplierResponse): AssetMultiplierResponseAmino;
    fromAminoMsg(object: AssetMultiplierResponseAminoMsg): AssetMultiplierResponse;
    toAminoMsg(message: AssetMultiplierResponse): AssetMultiplierResponseAminoMsg;
    fromProtoMsg(message: AssetMultiplierResponseProtoMsg): AssetMultiplierResponse;
    toProto(message: AssetMultiplierResponse): Uint8Array;
    toProtoMsg(message: AssetMultiplierResponse): AssetMultiplierResponseProtoMsg;
};
export declare const SuperfluidIntermediaryAccountInfo: {
    typeUrl: string;
    encode(message: SuperfluidIntermediaryAccountInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidIntermediaryAccountInfo;
    fromPartial(object: Partial<SuperfluidIntermediaryAccountInfo>): SuperfluidIntermediaryAccountInfo;
    fromAmino(object: SuperfluidIntermediaryAccountInfoAmino): SuperfluidIntermediaryAccountInfo;
    toAmino(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoAmino;
    fromAminoMsg(object: SuperfluidIntermediaryAccountInfoAminoMsg): SuperfluidIntermediaryAccountInfo;
    toAminoMsg(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoAminoMsg;
    fromProtoMsg(message: SuperfluidIntermediaryAccountInfoProtoMsg): SuperfluidIntermediaryAccountInfo;
    toProto(message: SuperfluidIntermediaryAccountInfo): Uint8Array;
    toProtoMsg(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoProtoMsg;
};
export declare const AllIntermediaryAccountsRequest: {
    typeUrl: string;
    encode(message: AllIntermediaryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsRequest;
    fromPartial(object: Partial<AllIntermediaryAccountsRequest>): AllIntermediaryAccountsRequest;
    fromAmino(object: AllIntermediaryAccountsRequestAmino): AllIntermediaryAccountsRequest;
    toAmino(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestAmino;
    fromAminoMsg(object: AllIntermediaryAccountsRequestAminoMsg): AllIntermediaryAccountsRequest;
    toAminoMsg(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestAminoMsg;
    fromProtoMsg(message: AllIntermediaryAccountsRequestProtoMsg): AllIntermediaryAccountsRequest;
    toProto(message: AllIntermediaryAccountsRequest): Uint8Array;
    toProtoMsg(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestProtoMsg;
};
export declare const AllIntermediaryAccountsResponse: {
    typeUrl: string;
    encode(message: AllIntermediaryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsResponse;
    fromPartial(object: Partial<AllIntermediaryAccountsResponse>): AllIntermediaryAccountsResponse;
    fromAmino(object: AllIntermediaryAccountsResponseAmino): AllIntermediaryAccountsResponse;
    toAmino(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseAmino;
    fromAminoMsg(object: AllIntermediaryAccountsResponseAminoMsg): AllIntermediaryAccountsResponse;
    toAminoMsg(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseAminoMsg;
    fromProtoMsg(message: AllIntermediaryAccountsResponseProtoMsg): AllIntermediaryAccountsResponse;
    toProto(message: AllIntermediaryAccountsResponse): Uint8Array;
    toProtoMsg(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseProtoMsg;
};
export declare const ConnectedIntermediaryAccountRequest: {
    typeUrl: string;
    encode(message: ConnectedIntermediaryAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountRequest;
    fromPartial(object: Partial<ConnectedIntermediaryAccountRequest>): ConnectedIntermediaryAccountRequest;
    fromAmino(object: ConnectedIntermediaryAccountRequestAmino): ConnectedIntermediaryAccountRequest;
    toAmino(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestAmino;
    fromAminoMsg(object: ConnectedIntermediaryAccountRequestAminoMsg): ConnectedIntermediaryAccountRequest;
    toAminoMsg(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestAminoMsg;
    fromProtoMsg(message: ConnectedIntermediaryAccountRequestProtoMsg): ConnectedIntermediaryAccountRequest;
    toProto(message: ConnectedIntermediaryAccountRequest): Uint8Array;
    toProtoMsg(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestProtoMsg;
};
export declare const ConnectedIntermediaryAccountResponse: {
    typeUrl: string;
    encode(message: ConnectedIntermediaryAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountResponse;
    fromPartial(object: Partial<ConnectedIntermediaryAccountResponse>): ConnectedIntermediaryAccountResponse;
    fromAmino(object: ConnectedIntermediaryAccountResponseAmino): ConnectedIntermediaryAccountResponse;
    toAmino(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseAmino;
    fromAminoMsg(object: ConnectedIntermediaryAccountResponseAminoMsg): ConnectedIntermediaryAccountResponse;
    toAminoMsg(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseAminoMsg;
    fromProtoMsg(message: ConnectedIntermediaryAccountResponseProtoMsg): ConnectedIntermediaryAccountResponse;
    toProto(message: ConnectedIntermediaryAccountResponse): Uint8Array;
    toProtoMsg(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseProtoMsg;
};
export declare const QueryTotalDelegationByValidatorForDenomRequest: {
    typeUrl: string;
    encode(message: QueryTotalDelegationByValidatorForDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomRequest;
    fromPartial(object: Partial<QueryTotalDelegationByValidatorForDenomRequest>): QueryTotalDelegationByValidatorForDenomRequest;
    fromAmino(object: QueryTotalDelegationByValidatorForDenomRequestAmino): QueryTotalDelegationByValidatorForDenomRequest;
    toAmino(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestAmino;
    fromAminoMsg(object: QueryTotalDelegationByValidatorForDenomRequestAminoMsg): QueryTotalDelegationByValidatorForDenomRequest;
    toAminoMsg(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
    fromProtoMsg(message: QueryTotalDelegationByValidatorForDenomRequestProtoMsg): QueryTotalDelegationByValidatorForDenomRequest;
    toProto(message: QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
    toProtoMsg(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
};
export declare const QueryTotalDelegationByValidatorForDenomResponse: {
    typeUrl: string;
    encode(message: QueryTotalDelegationByValidatorForDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomResponse;
    fromPartial(object: Partial<QueryTotalDelegationByValidatorForDenomResponse>): QueryTotalDelegationByValidatorForDenomResponse;
    fromAmino(object: QueryTotalDelegationByValidatorForDenomResponseAmino): QueryTotalDelegationByValidatorForDenomResponse;
    toAmino(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseAmino;
    fromAminoMsg(object: QueryTotalDelegationByValidatorForDenomResponseAminoMsg): QueryTotalDelegationByValidatorForDenomResponse;
    toAminoMsg(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
    fromProtoMsg(message: QueryTotalDelegationByValidatorForDenomResponseProtoMsg): QueryTotalDelegationByValidatorForDenomResponse;
    toProto(message: QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
    toProtoMsg(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
};
export declare const Delegations: {
    typeUrl: string;
    encode(message: Delegations, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegations;
    fromPartial(object: Partial<Delegations>): Delegations;
    fromAmino(object: DelegationsAmino): Delegations;
    toAmino(message: Delegations): DelegationsAmino;
    fromAminoMsg(object: DelegationsAminoMsg): Delegations;
    toAminoMsg(message: Delegations): DelegationsAminoMsg;
    fromProtoMsg(message: DelegationsProtoMsg): Delegations;
    toProto(message: Delegations): Uint8Array;
    toProtoMsg(message: Delegations): DelegationsProtoMsg;
};
export declare const TotalSuperfluidDelegationsRequest: {
    typeUrl: string;
    encode(_: TotalSuperfluidDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsRequest;
    fromPartial(_: Partial<TotalSuperfluidDelegationsRequest>): TotalSuperfluidDelegationsRequest;
    fromAmino(_: TotalSuperfluidDelegationsRequestAmino): TotalSuperfluidDelegationsRequest;
    toAmino(_: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestAmino;
    fromAminoMsg(object: TotalSuperfluidDelegationsRequestAminoMsg): TotalSuperfluidDelegationsRequest;
    toAminoMsg(message: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestAminoMsg;
    fromProtoMsg(message: TotalSuperfluidDelegationsRequestProtoMsg): TotalSuperfluidDelegationsRequest;
    toProto(message: TotalSuperfluidDelegationsRequest): Uint8Array;
    toProtoMsg(message: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestProtoMsg;
};
export declare const TotalSuperfluidDelegationsResponse: {
    typeUrl: string;
    encode(message: TotalSuperfluidDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsResponse;
    fromPartial(object: Partial<TotalSuperfluidDelegationsResponse>): TotalSuperfluidDelegationsResponse;
    fromAmino(object: TotalSuperfluidDelegationsResponseAmino): TotalSuperfluidDelegationsResponse;
    toAmino(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseAmino;
    fromAminoMsg(object: TotalSuperfluidDelegationsResponseAminoMsg): TotalSuperfluidDelegationsResponse;
    toAminoMsg(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseAminoMsg;
    fromProtoMsg(message: TotalSuperfluidDelegationsResponseProtoMsg): TotalSuperfluidDelegationsResponse;
    toProto(message: TotalSuperfluidDelegationsResponse): Uint8Array;
    toProtoMsg(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseProtoMsg;
};
export declare const SuperfluidDelegationAmountRequest: {
    typeUrl: string;
    encode(message: SuperfluidDelegationAmountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountRequest;
    fromPartial(object: Partial<SuperfluidDelegationAmountRequest>): SuperfluidDelegationAmountRequest;
    fromAmino(object: SuperfluidDelegationAmountRequestAmino): SuperfluidDelegationAmountRequest;
    toAmino(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestAmino;
    fromAminoMsg(object: SuperfluidDelegationAmountRequestAminoMsg): SuperfluidDelegationAmountRequest;
    toAminoMsg(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationAmountRequestProtoMsg): SuperfluidDelegationAmountRequest;
    toProto(message: SuperfluidDelegationAmountRequest): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestProtoMsg;
};
export declare const SuperfluidDelegationAmountResponse: {
    typeUrl: string;
    encode(message: SuperfluidDelegationAmountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountResponse;
    fromPartial(object: Partial<SuperfluidDelegationAmountResponse>): SuperfluidDelegationAmountResponse;
    fromAmino(object: SuperfluidDelegationAmountResponseAmino): SuperfluidDelegationAmountResponse;
    toAmino(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseAmino;
    fromAminoMsg(object: SuperfluidDelegationAmountResponseAminoMsg): SuperfluidDelegationAmountResponse;
    toAminoMsg(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationAmountResponseProtoMsg): SuperfluidDelegationAmountResponse;
    toProto(message: SuperfluidDelegationAmountResponse): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseProtoMsg;
};
export declare const SuperfluidDelegationsByDelegatorRequest: {
    typeUrl: string;
    encode(message: SuperfluidDelegationsByDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorRequest;
    fromPartial(object: Partial<SuperfluidDelegationsByDelegatorRequest>): SuperfluidDelegationsByDelegatorRequest;
    fromAmino(object: SuperfluidDelegationsByDelegatorRequestAmino): SuperfluidDelegationsByDelegatorRequest;
    toAmino(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestAmino;
    fromAminoMsg(object: SuperfluidDelegationsByDelegatorRequestAminoMsg): SuperfluidDelegationsByDelegatorRequest;
    toAminoMsg(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationsByDelegatorRequestProtoMsg): SuperfluidDelegationsByDelegatorRequest;
    toProto(message: SuperfluidDelegationsByDelegatorRequest): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestProtoMsg;
};
export declare const SuperfluidDelegationsByDelegatorResponse: {
    typeUrl: string;
    encode(message: SuperfluidDelegationsByDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorResponse;
    fromPartial(object: Partial<SuperfluidDelegationsByDelegatorResponse>): SuperfluidDelegationsByDelegatorResponse;
    fromAmino(object: SuperfluidDelegationsByDelegatorResponseAmino): SuperfluidDelegationsByDelegatorResponse;
    toAmino(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseAmino;
    fromAminoMsg(object: SuperfluidDelegationsByDelegatorResponseAminoMsg): SuperfluidDelegationsByDelegatorResponse;
    toAminoMsg(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationsByDelegatorResponseProtoMsg): SuperfluidDelegationsByDelegatorResponse;
    toProto(message: SuperfluidDelegationsByDelegatorResponse): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseProtoMsg;
};
export declare const SuperfluidUndelegationsByDelegatorRequest: {
    typeUrl: string;
    encode(message: SuperfluidUndelegationsByDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorRequest;
    fromPartial(object: Partial<SuperfluidUndelegationsByDelegatorRequest>): SuperfluidUndelegationsByDelegatorRequest;
    fromAmino(object: SuperfluidUndelegationsByDelegatorRequestAmino): SuperfluidUndelegationsByDelegatorRequest;
    toAmino(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestAmino;
    fromAminoMsg(object: SuperfluidUndelegationsByDelegatorRequestAminoMsg): SuperfluidUndelegationsByDelegatorRequest;
    toAminoMsg(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestAminoMsg;
    fromProtoMsg(message: SuperfluidUndelegationsByDelegatorRequestProtoMsg): SuperfluidUndelegationsByDelegatorRequest;
    toProto(message: SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
    toProtoMsg(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestProtoMsg;
};
export declare const SuperfluidUndelegationsByDelegatorResponse: {
    typeUrl: string;
    encode(message: SuperfluidUndelegationsByDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorResponse;
    fromPartial(object: Partial<SuperfluidUndelegationsByDelegatorResponse>): SuperfluidUndelegationsByDelegatorResponse;
    fromAmino(object: SuperfluidUndelegationsByDelegatorResponseAmino): SuperfluidUndelegationsByDelegatorResponse;
    toAmino(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseAmino;
    fromAminoMsg(object: SuperfluidUndelegationsByDelegatorResponseAminoMsg): SuperfluidUndelegationsByDelegatorResponse;
    toAminoMsg(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseAminoMsg;
    fromProtoMsg(message: SuperfluidUndelegationsByDelegatorResponseProtoMsg): SuperfluidUndelegationsByDelegatorResponse;
    toProto(message: SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
    toProtoMsg(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseProtoMsg;
};
export declare const SuperfluidDelegationsByValidatorDenomRequest: {
    typeUrl: string;
    encode(message: SuperfluidDelegationsByValidatorDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomRequest;
    fromPartial(object: Partial<SuperfluidDelegationsByValidatorDenomRequest>): SuperfluidDelegationsByValidatorDenomRequest;
    fromAmino(object: SuperfluidDelegationsByValidatorDenomRequestAmino): SuperfluidDelegationsByValidatorDenomRequest;
    toAmino(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestAmino;
    fromAminoMsg(object: SuperfluidDelegationsByValidatorDenomRequestAminoMsg): SuperfluidDelegationsByValidatorDenomRequest;
    toAminoMsg(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationsByValidatorDenomRequestProtoMsg): SuperfluidDelegationsByValidatorDenomRequest;
    toProto(message: SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
};
export declare const SuperfluidDelegationsByValidatorDenomResponse: {
    typeUrl: string;
    encode(message: SuperfluidDelegationsByValidatorDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomResponse;
    fromPartial(object: Partial<SuperfluidDelegationsByValidatorDenomResponse>): SuperfluidDelegationsByValidatorDenomResponse;
    fromAmino(object: SuperfluidDelegationsByValidatorDenomResponseAmino): SuperfluidDelegationsByValidatorDenomResponse;
    toAmino(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseAmino;
    fromAminoMsg(object: SuperfluidDelegationsByValidatorDenomResponseAminoMsg): SuperfluidDelegationsByValidatorDenomResponse;
    toAminoMsg(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationsByValidatorDenomResponseProtoMsg): SuperfluidDelegationsByValidatorDenomResponse;
    toProto(message: SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
    typeUrl: string;
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    fromPartial(object: Partial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
    fromAminoMsg(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toAminoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
    fromProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toProto(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
    toProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
    typeUrl: string;
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    fromPartial(object: Partial<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
    fromAminoMsg(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toAminoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
    fromProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toProto(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
    toProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
};
export declare const QueryTotalDelegationByDelegatorRequest: {
    typeUrl: string;
    encode(message: QueryTotalDelegationByDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorRequest;
    fromPartial(object: Partial<QueryTotalDelegationByDelegatorRequest>): QueryTotalDelegationByDelegatorRequest;
    fromAmino(object: QueryTotalDelegationByDelegatorRequestAmino): QueryTotalDelegationByDelegatorRequest;
    toAmino(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestAmino;
    fromAminoMsg(object: QueryTotalDelegationByDelegatorRequestAminoMsg): QueryTotalDelegationByDelegatorRequest;
    toAminoMsg(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestAminoMsg;
    fromProtoMsg(message: QueryTotalDelegationByDelegatorRequestProtoMsg): QueryTotalDelegationByDelegatorRequest;
    toProto(message: QueryTotalDelegationByDelegatorRequest): Uint8Array;
    toProtoMsg(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestProtoMsg;
};
export declare const QueryTotalDelegationByDelegatorResponse: {
    typeUrl: string;
    encode(message: QueryTotalDelegationByDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorResponse;
    fromPartial(object: Partial<QueryTotalDelegationByDelegatorResponse>): QueryTotalDelegationByDelegatorResponse;
    fromAmino(object: QueryTotalDelegationByDelegatorResponseAmino): QueryTotalDelegationByDelegatorResponse;
    toAmino(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseAmino;
    fromAminoMsg(object: QueryTotalDelegationByDelegatorResponseAminoMsg): QueryTotalDelegationByDelegatorResponse;
    toAminoMsg(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseAminoMsg;
    fromProtoMsg(message: QueryTotalDelegationByDelegatorResponseProtoMsg): QueryTotalDelegationByDelegatorResponse;
    toProto(message: QueryTotalDelegationByDelegatorResponse): Uint8Array;
    toProtoMsg(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseProtoMsg;
};
export declare const QueryUnpoolWhitelistRequest: {
    typeUrl: string;
    encode(_: QueryUnpoolWhitelistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnpoolWhitelistRequest;
    fromPartial(_: Partial<QueryUnpoolWhitelistRequest>): QueryUnpoolWhitelistRequest;
    fromAmino(_: QueryUnpoolWhitelistRequestAmino): QueryUnpoolWhitelistRequest;
    toAmino(_: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestAmino;
    fromAminoMsg(object: QueryUnpoolWhitelistRequestAminoMsg): QueryUnpoolWhitelistRequest;
    toAminoMsg(message: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestAminoMsg;
    fromProtoMsg(message: QueryUnpoolWhitelistRequestProtoMsg): QueryUnpoolWhitelistRequest;
    toProto(message: QueryUnpoolWhitelistRequest): Uint8Array;
    toProtoMsg(message: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestProtoMsg;
};
export declare const QueryUnpoolWhitelistResponse: {
    typeUrl: string;
    encode(message: QueryUnpoolWhitelistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnpoolWhitelistResponse;
    fromPartial(object: Partial<QueryUnpoolWhitelistResponse>): QueryUnpoolWhitelistResponse;
    fromAmino(object: QueryUnpoolWhitelistResponseAmino): QueryUnpoolWhitelistResponse;
    toAmino(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseAmino;
    fromAminoMsg(object: QueryUnpoolWhitelistResponseAminoMsg): QueryUnpoolWhitelistResponse;
    toAminoMsg(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseAminoMsg;
    fromProtoMsg(message: QueryUnpoolWhitelistResponseProtoMsg): QueryUnpoolWhitelistResponse;
    toProto(message: QueryUnpoolWhitelistResponse): Uint8Array;
    toProtoMsg(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseProtoMsg;
};
