import * as _m0 from "protobufjs/minimal";
/** Pairs defines a repeated slice of Pair objects. */
export interface Pairs {
    pairs: Pair[];
}
/** Pair defines a key/value bytes tuple. */
export interface Pair {
    key: Uint8Array;
    value: Uint8Array;
}
export declare const Pairs: {
    encode(message: Pairs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pairs;
    fromJSON(object: any): Pairs;
    toJSON(message: Pairs): unknown;
    fromPartial<I extends {
        pairs?: {
            key?: Uint8Array;
            value?: Uint8Array;
        }[];
    } & {
        pairs?: {
            key?: Uint8Array;
            value?: Uint8Array;
        }[] & ({
            key?: Uint8Array;
            value?: Uint8Array;
        } & {
            key?: Uint8Array;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["pairs"][number], keyof Pair>, never>)[] & Record<Exclude<keyof I["pairs"], keyof {
            key?: Uint8Array;
            value?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, "pairs">, never>>(object: I): Pairs;
};
export declare const Pair: {
    encode(message: Pair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pair;
    fromJSON(object: any): Pair;
    toJSON(message: Pair): unknown;
    fromPartial<I extends {
        key?: Uint8Array;
        value?: Uint8Array;
    } & {
        key?: Uint8Array;
        value?: Uint8Array;
    } & Record<Exclude<keyof I, keyof Pair>, never>>(object: I): Pair;
};
