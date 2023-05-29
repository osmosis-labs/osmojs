import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the minting state. */
export interface Minter {
    /** epoch_provisions represent rewards for the current epoch. */
    epochProvisions: string;
}
export interface MinterProtoMsg {
    typeUrl: "/osmosis.mint.v1beta1.Minter";
    value: Uint8Array;
}
/** Minter represents the minting state. */
export interface MinterAmino {
    /** epoch_provisions represent rewards for the current epoch. */
    epoch_provisions: string;
}
export interface MinterAminoMsg {
    type: "osmosis/mint/minter";
    value: MinterAmino;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
    epoch_provisions: string;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */
export interface WeightedAddress {
    address: string;
    weight: string;
}
export interface WeightedAddressProtoMsg {
    typeUrl: "/osmosis.mint.v1beta1.WeightedAddress";
    value: Uint8Array;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */
export interface WeightedAddressAmino {
    address: string;
    weight: string;
}
export interface WeightedAddressAminoMsg {
    type: "osmosis/mint/weighted-address";
    value: WeightedAddressAmino;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */
export interface WeightedAddressSDKType {
    address: string;
    weight: string;
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 */
export interface DistributionProportions {
    /**
     * staking defines the proportion of the minted mint_denom that is to be
     * allocated as staking rewards.
     */
    staking: string;
    /**
     * pool_incentives defines the proportion of the minted mint_denom that is
     * to be allocated as pool incentives.
     */
    poolIncentives: string;
    /**
     * developer_rewards defines the proportion of the minted mint_denom that is
     * to be allocated to developer rewards address.
     */
    developerRewards: string;
    /**
     * community_pool defines the proportion of the minted mint_denom that is
     * to be allocated to the community pool.
     */
    communityPool: string;
}
export interface DistributionProportionsProtoMsg {
    typeUrl: "/osmosis.mint.v1beta1.DistributionProportions";
    value: Uint8Array;
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 */
export interface DistributionProportionsAmino {
    /**
     * staking defines the proportion of the minted mint_denom that is to be
     * allocated as staking rewards.
     */
    staking: string;
    /**
     * pool_incentives defines the proportion of the minted mint_denom that is
     * to be allocated as pool incentives.
     */
    pool_incentives: string;
    /**
     * developer_rewards defines the proportion of the minted mint_denom that is
     * to be allocated to developer rewards address.
     */
    developer_rewards: string;
    /**
     * community_pool defines the proportion of the minted mint_denom that is
     * to be allocated to the community pool.
     */
    community_pool: string;
}
export interface DistributionProportionsAminoMsg {
    type: "osmosis/mint/distribution-proportions";
    value: DistributionProportionsAmino;
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 */
export interface DistributionProportionsSDKType {
    staking: string;
    pool_incentives: string;
    developer_rewards: string;
    community_pool: string;
}
/** Params holds parameters for the x/mint module. */
export interface Params {
    /** mint_denom is the denom of the coin to mint. */
    mintDenom: string;
    /** genesis_epoch_provisions epoch provisions from the first epoch. */
    genesisEpochProvisions: string;
    /** epoch_identifier mint epoch identifier e.g. (day, week). */
    epochIdentifier: string;
    /**
     * reduction_period_in_epochs the number of epochs it takes
     * to reduce the rewards.
     */
    reductionPeriodInEpochs: Long;
    /**
     * reduction_factor is the reduction multiplier to execute
     * at the end of each period set by reduction_period_in_epochs.
     */
    reductionFactor: string;
    /**
     * distribution_proportions defines the distribution proportions of the minted
     * denom. In other words, defines which stakeholders will receive the minted
     * denoms and how much.
     */
    distributionProportions?: DistributionProportions;
    /**
     * weighted_developer_rewards_receivers is the address to receive developer
     * rewards with weights assignedt to each address. The final amount that each
     * address receives is: epoch_provisions *
     * distribution_proportions.developer_rewards * Address's Weight.
     */
    weightedDeveloperRewardsReceivers: WeightedAddress[];
    /**
     * minting_rewards_distribution_start_epoch start epoch to distribute minting
     * rewards
     */
    mintingRewardsDistributionStartEpoch: Long;
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.mint.v1beta1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the x/mint module. */
export interface ParamsAmino {
    /** mint_denom is the denom of the coin to mint. */
    mint_denom: string;
    /** genesis_epoch_provisions epoch provisions from the first epoch. */
    genesis_epoch_provisions: string;
    /** epoch_identifier mint epoch identifier e.g. (day, week). */
    epoch_identifier: string;
    /**
     * reduction_period_in_epochs the number of epochs it takes
     * to reduce the rewards.
     */
    reduction_period_in_epochs: string;
    /**
     * reduction_factor is the reduction multiplier to execute
     * at the end of each period set by reduction_period_in_epochs.
     */
    reduction_factor: string;
    /**
     * distribution_proportions defines the distribution proportions of the minted
     * denom. In other words, defines which stakeholders will receive the minted
     * denoms and how much.
     */
    distribution_proportions?: DistributionProportionsAmino;
    /**
     * weighted_developer_rewards_receivers is the address to receive developer
     * rewards with weights assignedt to each address. The final amount that each
     * address receives is: epoch_provisions *
     * distribution_proportions.developer_rewards * Address's Weight.
     */
    weighted_developer_rewards_receivers: WeightedAddressAmino[];
    /**
     * minting_rewards_distribution_start_epoch start epoch to distribute minting
     * rewards
     */
    minting_rewards_distribution_start_epoch: string;
}
export interface ParamsAminoMsg {
    type: "osmosis/mint/params";
    value: ParamsAmino;
}
/** Params holds parameters for the x/mint module. */
export interface ParamsSDKType {
    mint_denom: string;
    genesis_epoch_provisions: string;
    epoch_identifier: string;
    reduction_period_in_epochs: Long;
    reduction_factor: string;
    distribution_proportions?: DistributionProportionsSDKType;
    weighted_developer_rewards_receivers: WeightedAddressSDKType[];
    minting_rewards_distribution_start_epoch: Long;
}
export declare const Minter: {
    typeUrl: string;
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Minter;
    fromPartial(object: Partial<Minter>): Minter;
    fromAmino(object: MinterAmino): Minter;
    toAmino(message: Minter): MinterAmino;
    fromAminoMsg(object: MinterAminoMsg): Minter;
    toAminoMsg(message: Minter): MinterAminoMsg;
    fromProtoMsg(message: MinterProtoMsg): Minter;
    toProto(message: Minter): Uint8Array;
    toProtoMsg(message: Minter): MinterProtoMsg;
};
export declare const WeightedAddress: {
    typeUrl: string;
    encode(message: WeightedAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WeightedAddress;
    fromPartial(object: Partial<WeightedAddress>): WeightedAddress;
    fromAmino(object: WeightedAddressAmino): WeightedAddress;
    toAmino(message: WeightedAddress): WeightedAddressAmino;
    fromAminoMsg(object: WeightedAddressAminoMsg): WeightedAddress;
    toAminoMsg(message: WeightedAddress): WeightedAddressAminoMsg;
    fromProtoMsg(message: WeightedAddressProtoMsg): WeightedAddress;
    toProto(message: WeightedAddress): Uint8Array;
    toProtoMsg(message: WeightedAddress): WeightedAddressProtoMsg;
};
export declare const DistributionProportions: {
    typeUrl: string;
    encode(message: DistributionProportions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions;
    fromPartial(object: Partial<DistributionProportions>): DistributionProportions;
    fromAmino(object: DistributionProportionsAmino): DistributionProportions;
    toAmino(message: DistributionProportions): DistributionProportionsAmino;
    fromAminoMsg(object: DistributionProportionsAminoMsg): DistributionProportions;
    toAminoMsg(message: DistributionProportions): DistributionProportionsAminoMsg;
    fromProtoMsg(message: DistributionProportionsProtoMsg): DistributionProportions;
    toProto(message: DistributionProportions): Uint8Array;
    toProtoMsg(message: DistributionProportions): DistributionProportionsProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
