import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Minter represents the minting state. */
export interface Minter {
    /** current epoch provisions */
    epoch_provisions: string;
}
export interface WeightedAddress {
    address: string;
    weight: string;
}
export interface DistributionProportions {
    /**
     * staking defines the proportion of the minted minted_denom that is to be
     * allocated as staking rewards.
     */
    staking: string;
    /**
     * pool_incentives defines the proportion of the minted minted_denom that is
     * to be allocated as pool incentives.
     */
    pool_incentives: string;
    /**
     * developer_rewards defines the proportion of the minted minted_denom that is
     * to be allocated to developer rewards address.
     */
    developer_rewards: string;
    /**
     * community_pool defines the proportion of the minted minted_denom that is
     * to be allocated to the community pool.
     */
    community_pool: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mint_denom: string;
    /** epoch provisions from the first epoch */
    genesis_epoch_provisions: string;
    /** mint epoch identifier */
    epoch_identifier: string;
    /** number of epochs take to reduce rewards */
    reduction_period_in_epochs: Long;
    /** reduction multiplier to execute on each period */
    reduction_factor: string;
    /** distribution_proportions defines the proportion of the minted denom */
    distribution_proportions: DistributionProportions;
    /** address to receive developer rewards */
    weighted_developer_rewards_receivers: WeightedAddress[];
    /** start epoch to distribute minting rewards */
    minting_rewards_distribution_start_epoch: Long;
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Minter;
    fromJSON(object: any): Minter;
    toJSON(message: Minter): unknown;
    fromPartial(object: DeepPartial<Minter>): Minter;
};
export declare const WeightedAddress: {
    encode(message: WeightedAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WeightedAddress;
    fromJSON(object: any): WeightedAddress;
    toJSON(message: WeightedAddress): unknown;
    fromPartial(object: DeepPartial<WeightedAddress>): WeightedAddress;
};
export declare const DistributionProportions: {
    encode(message: DistributionProportions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions;
    fromJSON(object: any): DistributionProportions;
    toJSON(message: DistributionProportions): unknown;
    fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};