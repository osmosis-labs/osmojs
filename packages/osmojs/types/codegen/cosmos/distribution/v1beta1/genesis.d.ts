import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../base/v1beta1/coin";
import { ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionAmino, ValidatorAccumulatedCommissionSDKType, ValidatorHistoricalRewards, ValidatorHistoricalRewardsAmino, ValidatorHistoricalRewardsSDKType, ValidatorCurrentRewards, ValidatorCurrentRewardsAmino, ValidatorCurrentRewardsSDKType, DelegatorStartingInfo, DelegatorStartingInfoAmino, DelegatorStartingInfoSDKType, ValidatorSlashEvent, ValidatorSlashEventAmino, ValidatorSlashEventSDKType, Params, ParamsAmino, ParamsSDKType, FeePool, FeePoolAmino, FeePoolSDKType } from "./distribution";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfo {
    /** delegator_address is the address of the delegator. */
    delegatorAddress: string;
    /** withdraw_address is the address to withdraw the delegation rewards to. */
    withdrawAddress: string;
}
export interface DelegatorWithdrawInfoProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo";
    value: Uint8Array;
}
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoAmino {
    /** delegator_address is the address of the delegator. */
    delegator_address: string;
    /** withdraw_address is the address to withdraw the delegation rewards to. */
    withdraw_address: string;
}
export interface DelegatorWithdrawInfoAminoMsg {
    type: "cosmos-sdk/DelegatorWithdrawInfo";
    value: DelegatorWithdrawInfoAmino;
}
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoSDKType {
    delegator_address: string;
    withdraw_address: string;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** outstanding_rewards represents the oustanding rewards of a validator. */
    outstandingRewards: DecCoin[];
}
export interface ValidatorOutstandingRewardsRecordProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord";
    value: Uint8Array;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecordAmino {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** outstanding_rewards represents the oustanding rewards of a validator. */
    outstanding_rewards: DecCoinAmino[];
}
export interface ValidatorOutstandingRewardsRecordAminoMsg {
    type: "cosmos-sdk/ValidatorOutstandingRewardsRecord";
    value: ValidatorOutstandingRewardsRecordAmino;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecordSDKType {
    validator_address: string;
    outstanding_rewards: DecCoinSDKType[];
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** accumulated is the accumulated commission of a validator. */
    accumulated?: ValidatorAccumulatedCommission;
}
export interface ValidatorAccumulatedCommissionRecordProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord";
    value: Uint8Array;
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecordAmino {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** accumulated is the accumulated commission of a validator. */
    accumulated?: ValidatorAccumulatedCommissionAmino;
}
export interface ValidatorAccumulatedCommissionRecordAminoMsg {
    type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord";
    value: ValidatorAccumulatedCommissionRecordAmino;
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecordSDKType {
    validator_address: string;
    accumulated?: ValidatorAccumulatedCommissionSDKType;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** period defines the period the historical rewards apply to. */
    period: Long;
    /** rewards defines the historical rewards of a validator. */
    rewards?: ValidatorHistoricalRewards;
}
export interface ValidatorHistoricalRewardsRecordProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord";
    value: Uint8Array;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecordAmino {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** period defines the period the historical rewards apply to. */
    period: string;
    /** rewards defines the historical rewards of a validator. */
    rewards?: ValidatorHistoricalRewardsAmino;
}
export interface ValidatorHistoricalRewardsRecordAminoMsg {
    type: "cosmos-sdk/ValidatorHistoricalRewardsRecord";
    value: ValidatorHistoricalRewardsRecordAmino;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecordSDKType {
    validator_address: string;
    period: Long;
    rewards?: ValidatorHistoricalRewardsSDKType;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** rewards defines the current rewards of a validator. */
    rewards?: ValidatorCurrentRewards;
}
export interface ValidatorCurrentRewardsRecordProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord";
    value: Uint8Array;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecordAmino {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** rewards defines the current rewards of a validator. */
    rewards?: ValidatorCurrentRewardsAmino;
}
export interface ValidatorCurrentRewardsRecordAminoMsg {
    type: "cosmos-sdk/ValidatorCurrentRewardsRecord";
    value: ValidatorCurrentRewardsRecordAmino;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecordSDKType {
    validator_address: string;
    rewards?: ValidatorCurrentRewardsSDKType;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecord {
    /** delegator_address is the address of the delegator. */
    delegatorAddress: string;
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** starting_info defines the starting info of a delegator. */
    startingInfo?: DelegatorStartingInfo;
}
export interface DelegatorStartingInfoRecordProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord";
    value: Uint8Array;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordAmino {
    /** delegator_address is the address of the delegator. */
    delegator_address: string;
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** starting_info defines the starting info of a delegator. */
    starting_info?: DelegatorStartingInfoAmino;
}
export interface DelegatorStartingInfoRecordAminoMsg {
    type: "cosmos-sdk/DelegatorStartingInfoRecord";
    value: DelegatorStartingInfoRecordAmino;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordSDKType {
    delegator_address: string;
    validator_address: string;
    starting_info?: DelegatorStartingInfoSDKType;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** height defines the block height at which the slash event occured. */
    height: Long;
    /** period is the period of the slash event. */
    period: Long;
    /** validator_slash_event describes the slash event. */
    validatorSlashEvent?: ValidatorSlashEvent;
}
export interface ValidatorSlashEventRecordProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord";
    value: Uint8Array;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecordAmino {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** height defines the block height at which the slash event occured. */
    height: string;
    /** period is the period of the slash event. */
    period: string;
    /** validator_slash_event describes the slash event. */
    validator_slash_event?: ValidatorSlashEventAmino;
}
export interface ValidatorSlashEventRecordAminoMsg {
    type: "cosmos-sdk/ValidatorSlashEventRecord";
    value: ValidatorSlashEventRecordAmino;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecordSDKType {
    validator_address: string;
    height: Long;
    period: Long;
    validator_slash_event?: ValidatorSlashEventSDKType;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params?: Params;
    /** fee_pool defines the fee pool at genesis. */
    feePool?: FeePool;
    /** fee_pool defines the delegator withdraw infos at genesis. */
    delegatorWithdrawInfos: DelegatorWithdrawInfo[];
    /** fee_pool defines the previous proposer at genesis. */
    previousProposer: string;
    /** fee_pool defines the outstanding rewards of all validators at genesis. */
    outstandingRewards: ValidatorOutstandingRewardsRecord[];
    /** fee_pool defines the accumulated commisions of all validators at genesis. */
    validatorAccumulatedCommissions: ValidatorAccumulatedCommissionRecord[];
    /** fee_pool defines the historical rewards of all validators at genesis. */
    validatorHistoricalRewards: ValidatorHistoricalRewardsRecord[];
    /** fee_pool defines the current rewards of all validators at genesis. */
    validatorCurrentRewards: ValidatorCurrentRewardsRecord[];
    /** fee_pool defines the delegator starting infos at genesis. */
    delegatorStartingInfos: DelegatorStartingInfoRecord[];
    /** fee_pool defines the validator slash events at genesis. */
    validatorSlashEvents: ValidatorSlashEventRecord[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of the module. */
    params?: ParamsAmino;
    /** fee_pool defines the fee pool at genesis. */
    fee_pool?: FeePoolAmino;
    /** fee_pool defines the delegator withdraw infos at genesis. */
    delegator_withdraw_infos: DelegatorWithdrawInfoAmino[];
    /** fee_pool defines the previous proposer at genesis. */
    previous_proposer: string;
    /** fee_pool defines the outstanding rewards of all validators at genesis. */
    outstanding_rewards: ValidatorOutstandingRewardsRecordAmino[];
    /** fee_pool defines the accumulated commisions of all validators at genesis. */
    validator_accumulated_commissions: ValidatorAccumulatedCommissionRecordAmino[];
    /** fee_pool defines the historical rewards of all validators at genesis. */
    validator_historical_rewards: ValidatorHistoricalRewardsRecordAmino[];
    /** fee_pool defines the current rewards of all validators at genesis. */
    validator_current_rewards: ValidatorCurrentRewardsRecordAmino[];
    /** fee_pool defines the delegator starting infos at genesis. */
    delegator_starting_infos: DelegatorStartingInfoRecordAmino[];
    /** fee_pool defines the validator slash events at genesis. */
    validator_slash_events: ValidatorSlashEventRecordAmino[];
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    fee_pool?: FeePoolSDKType;
    delegator_withdraw_infos: DelegatorWithdrawInfoSDKType[];
    previous_proposer: string;
    outstanding_rewards: ValidatorOutstandingRewardsRecordSDKType[];
    validator_accumulated_commissions: ValidatorAccumulatedCommissionRecordSDKType[];
    validator_historical_rewards: ValidatorHistoricalRewardsRecordSDKType[];
    validator_current_rewards: ValidatorCurrentRewardsRecordSDKType[];
    delegator_starting_infos: DelegatorStartingInfoRecordSDKType[];
    validator_slash_events: ValidatorSlashEventRecordSDKType[];
}
export declare const DelegatorWithdrawInfo: {
    typeUrl: string;
    encode(message: DelegatorWithdrawInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorWithdrawInfo;
    fromPartial(object: Partial<DelegatorWithdrawInfo>): DelegatorWithdrawInfo;
    fromAmino(object: DelegatorWithdrawInfoAmino): DelegatorWithdrawInfo;
    toAmino(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoAmino;
    fromAminoMsg(object: DelegatorWithdrawInfoAminoMsg): DelegatorWithdrawInfo;
    toAminoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoAminoMsg;
    fromProtoMsg(message: DelegatorWithdrawInfoProtoMsg): DelegatorWithdrawInfo;
    toProto(message: DelegatorWithdrawInfo): Uint8Array;
    toProtoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoProtoMsg;
};
export declare const ValidatorOutstandingRewardsRecord: {
    typeUrl: string;
    encode(message: ValidatorOutstandingRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorOutstandingRewardsRecord;
    fromPartial(object: Partial<ValidatorOutstandingRewardsRecord>): ValidatorOutstandingRewardsRecord;
    fromAmino(object: ValidatorOutstandingRewardsRecordAmino): ValidatorOutstandingRewardsRecord;
    toAmino(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordAmino;
    fromAminoMsg(object: ValidatorOutstandingRewardsRecordAminoMsg): ValidatorOutstandingRewardsRecord;
    toAminoMsg(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordAminoMsg;
    fromProtoMsg(message: ValidatorOutstandingRewardsRecordProtoMsg): ValidatorOutstandingRewardsRecord;
    toProto(message: ValidatorOutstandingRewardsRecord): Uint8Array;
    toProtoMsg(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordProtoMsg;
};
export declare const ValidatorAccumulatedCommissionRecord: {
    typeUrl: string;
    encode(message: ValidatorAccumulatedCommissionRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAccumulatedCommissionRecord;
    fromPartial(object: Partial<ValidatorAccumulatedCommissionRecord>): ValidatorAccumulatedCommissionRecord;
    fromAmino(object: ValidatorAccumulatedCommissionRecordAmino): ValidatorAccumulatedCommissionRecord;
    toAmino(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordAmino;
    fromAminoMsg(object: ValidatorAccumulatedCommissionRecordAminoMsg): ValidatorAccumulatedCommissionRecord;
    toAminoMsg(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordAminoMsg;
    fromProtoMsg(message: ValidatorAccumulatedCommissionRecordProtoMsg): ValidatorAccumulatedCommissionRecord;
    toProto(message: ValidatorAccumulatedCommissionRecord): Uint8Array;
    toProtoMsg(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordProtoMsg;
};
export declare const ValidatorHistoricalRewardsRecord: {
    typeUrl: string;
    encode(message: ValidatorHistoricalRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHistoricalRewardsRecord;
    fromPartial(object: Partial<ValidatorHistoricalRewardsRecord>): ValidatorHistoricalRewardsRecord;
    fromAmino(object: ValidatorHistoricalRewardsRecordAmino): ValidatorHistoricalRewardsRecord;
    toAmino(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordAmino;
    fromAminoMsg(object: ValidatorHistoricalRewardsRecordAminoMsg): ValidatorHistoricalRewardsRecord;
    toAminoMsg(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordAminoMsg;
    fromProtoMsg(message: ValidatorHistoricalRewardsRecordProtoMsg): ValidatorHistoricalRewardsRecord;
    toProto(message: ValidatorHistoricalRewardsRecord): Uint8Array;
    toProtoMsg(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordProtoMsg;
};
export declare const ValidatorCurrentRewardsRecord: {
    typeUrl: string;
    encode(message: ValidatorCurrentRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCurrentRewardsRecord;
    fromPartial(object: Partial<ValidatorCurrentRewardsRecord>): ValidatorCurrentRewardsRecord;
    fromAmino(object: ValidatorCurrentRewardsRecordAmino): ValidatorCurrentRewardsRecord;
    toAmino(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordAmino;
    fromAminoMsg(object: ValidatorCurrentRewardsRecordAminoMsg): ValidatorCurrentRewardsRecord;
    toAminoMsg(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordAminoMsg;
    fromProtoMsg(message: ValidatorCurrentRewardsRecordProtoMsg): ValidatorCurrentRewardsRecord;
    toProto(message: ValidatorCurrentRewardsRecord): Uint8Array;
    toProtoMsg(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordProtoMsg;
};
export declare const DelegatorStartingInfoRecord: {
    typeUrl: string;
    encode(message: DelegatorStartingInfoRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorStartingInfoRecord;
    fromPartial(object: Partial<DelegatorStartingInfoRecord>): DelegatorStartingInfoRecord;
    fromAmino(object: DelegatorStartingInfoRecordAmino): DelegatorStartingInfoRecord;
    toAmino(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordAmino;
    fromAminoMsg(object: DelegatorStartingInfoRecordAminoMsg): DelegatorStartingInfoRecord;
    toAminoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordAminoMsg;
    fromProtoMsg(message: DelegatorStartingInfoRecordProtoMsg): DelegatorStartingInfoRecord;
    toProto(message: DelegatorStartingInfoRecord): Uint8Array;
    toProtoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordProtoMsg;
};
export declare const ValidatorSlashEventRecord: {
    typeUrl: string;
    encode(message: ValidatorSlashEventRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEventRecord;
    fromPartial(object: Partial<ValidatorSlashEventRecord>): ValidatorSlashEventRecord;
    fromAmino(object: ValidatorSlashEventRecordAmino): ValidatorSlashEventRecord;
    toAmino(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordAmino;
    fromAminoMsg(object: ValidatorSlashEventRecordAminoMsg): ValidatorSlashEventRecord;
    toAminoMsg(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordAminoMsg;
    fromProtoMsg(message: ValidatorSlashEventRecordProtoMsg): ValidatorSlashEventRecord;
    toProto(message: ValidatorSlashEventRecord): Uint8Array;
    toProtoMsg(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
