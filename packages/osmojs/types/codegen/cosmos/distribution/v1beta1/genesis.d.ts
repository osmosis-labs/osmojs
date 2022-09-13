import { DecCoin } from "../../base/v1beta1/coin";
import { ValidatorAccumulatedCommission, ValidatorHistoricalRewards, ValidatorCurrentRewards, DelegatorStartingInfo, ValidatorSlashEvent, Params, FeePool } from "./distribution";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfo {
    /** delegator_address is the address of the delegator. */
    delegator_address: string;
    /** withdraw_address is the address to withdraw the delegation rewards to. */
    withdraw_address: string;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecord {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** outstanding_rewards represents the oustanding rewards of a validator. */
    outstanding_rewards: DecCoin[];
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecord {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** accumulated is the accumulated commission of a validator. */
    accumulated: ValidatorAccumulatedCommission;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecord {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** period defines the period the historical rewards apply to. */
    period: Long;
    /** rewards defines the historical rewards of a validator. */
    rewards: ValidatorHistoricalRewards;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecord {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** rewards defines the current rewards of a validator. */
    rewards: ValidatorCurrentRewards;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecord {
    /** delegator_address is the address of the delegator. */
    delegator_address: string;
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** starting_info defines the starting info of a delegator. */
    starting_info: DelegatorStartingInfo;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecord {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** height defines the block height at which the slash event occured. */
    height: Long;
    /** period is the period of the slash event. */
    period: Long;
    /** validator_slash_event describes the slash event. */
    validator_slash_event: ValidatorSlashEvent;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    /** fee_pool defines the fee pool at genesis. */
    fee_pool: FeePool;
    /** fee_pool defines the delegator withdraw infos at genesis. */
    delegator_withdraw_infos: DelegatorWithdrawInfo[];
    /** fee_pool defines the previous proposer at genesis. */
    previous_proposer: string;
    /** fee_pool defines the outstanding rewards of all validators at genesis. */
    outstanding_rewards: ValidatorOutstandingRewardsRecord[];
    /** fee_pool defines the accumulated commisions of all validators at genesis. */
    validator_accumulated_commissions: ValidatorAccumulatedCommissionRecord[];
    /** fee_pool defines the historical rewards of all validators at genesis. */
    validator_historical_rewards: ValidatorHistoricalRewardsRecord[];
    /** fee_pool defines the current rewards of all validators at genesis. */
    validator_current_rewards: ValidatorCurrentRewardsRecord[];
    /** fee_pool defines the delegator starting infos at genesis. */
    delegator_starting_infos: DelegatorStartingInfoRecord[];
    /** fee_pool defines the validator slash events at genesis. */
    validator_slash_events: ValidatorSlashEventRecord[];
}
export declare const DelegatorWithdrawInfo: {
    encode(message: DelegatorWithdrawInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorWithdrawInfo;
    fromJSON(object: any): DelegatorWithdrawInfo;
    toJSON(message: DelegatorWithdrawInfo): unknown;
    fromPartial(object: DeepPartial<DelegatorWithdrawInfo>): DelegatorWithdrawInfo;
};
export declare const ValidatorOutstandingRewardsRecord: {
    encode(message: ValidatorOutstandingRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorOutstandingRewardsRecord;
    fromJSON(object: any): ValidatorOutstandingRewardsRecord;
    toJSON(message: ValidatorOutstandingRewardsRecord): unknown;
    fromPartial(object: DeepPartial<ValidatorOutstandingRewardsRecord>): ValidatorOutstandingRewardsRecord;
};
export declare const ValidatorAccumulatedCommissionRecord: {
    encode(message: ValidatorAccumulatedCommissionRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAccumulatedCommissionRecord;
    fromJSON(object: any): ValidatorAccumulatedCommissionRecord;
    toJSON(message: ValidatorAccumulatedCommissionRecord): unknown;
    fromPartial(object: DeepPartial<ValidatorAccumulatedCommissionRecord>): ValidatorAccumulatedCommissionRecord;
};
export declare const ValidatorHistoricalRewardsRecord: {
    encode(message: ValidatorHistoricalRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHistoricalRewardsRecord;
    fromJSON(object: any): ValidatorHistoricalRewardsRecord;
    toJSON(message: ValidatorHistoricalRewardsRecord): unknown;
    fromPartial(object: DeepPartial<ValidatorHistoricalRewardsRecord>): ValidatorHistoricalRewardsRecord;
};
export declare const ValidatorCurrentRewardsRecord: {
    encode(message: ValidatorCurrentRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCurrentRewardsRecord;
    fromJSON(object: any): ValidatorCurrentRewardsRecord;
    toJSON(message: ValidatorCurrentRewardsRecord): unknown;
    fromPartial(object: DeepPartial<ValidatorCurrentRewardsRecord>): ValidatorCurrentRewardsRecord;
};
export declare const DelegatorStartingInfoRecord: {
    encode(message: DelegatorStartingInfoRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorStartingInfoRecord;
    fromJSON(object: any): DelegatorStartingInfoRecord;
    toJSON(message: DelegatorStartingInfoRecord): unknown;
    fromPartial(object: DeepPartial<DelegatorStartingInfoRecord>): DelegatorStartingInfoRecord;
};
export declare const ValidatorSlashEventRecord: {
    encode(message: ValidatorSlashEventRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEventRecord;
    fromJSON(object: any): ValidatorSlashEventRecord;
    toJSON(message: ValidatorSlashEventRecord): unknown;
    fromPartial(object: DeepPartial<ValidatorSlashEventRecord>): ValidatorSlashEventRecord;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
