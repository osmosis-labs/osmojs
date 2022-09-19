import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Node {
    children: Child[];
}
export interface NodeSDKType {
    children: ChildSDKType[];
}
export interface Child {
    index: Uint8Array;
    accumulation: string;
}
export interface ChildSDKType {
    index: Uint8Array;
    accumulation: string;
}
export interface Leaf {
    leaf: Child;
}
export interface LeafSDKType {
    leaf: ChildSDKType;
}
export declare const Node: {
    encode(message: Node, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Node;
    fromPartial(object: DeepPartial<Node>): Node;
    fromSDK(object: NodeSDKType): Node;
    toSDK(message: Node): NodeSDKType;
};
export declare const Child: {
    encode(message: Child, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Child;
    fromPartial(object: DeepPartial<Child>): Child;
    fromSDK(object: ChildSDKType): Child;
    toSDK(message: Child): ChildSDKType;
};
export declare const Leaf: {
    encode(message: Leaf, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Leaf;
    fromPartial(object: DeepPartial<Leaf>): Leaf;
    fromSDK(object: LeafSDKType): Leaf;
    toSDK(message: Leaf): LeafSDKType;
};
