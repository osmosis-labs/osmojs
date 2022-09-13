import { PublicKey } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface ValidatorSet {
    validators: Validator[];
    proposer: Validator;
    total_voting_power: Long;
}
export interface Validator {
    address: Uint8Array;
    pub_key: PublicKey;
    voting_power: Long;
    proposer_priority: Long;
}
export interface SimpleValidator {
    pub_key: PublicKey;
    voting_power: Long;
}
export declare const ValidatorSet: {
    encode(message: ValidatorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet;
    fromJSON(object: any): ValidatorSet;
    toJSON(message: ValidatorSet): unknown;
    fromPartial(object: DeepPartial<ValidatorSet>): ValidatorSet;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
export declare const SimpleValidator: {
    encode(message: SimpleValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimpleValidator;
    fromJSON(object: any): SimpleValidator;
    toJSON(message: SimpleValidator): unknown;
    fromPartial(object: DeepPartial<SimpleValidator>): SimpleValidator;
};
