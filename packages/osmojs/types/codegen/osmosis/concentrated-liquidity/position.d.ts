import * as _m0 from "protobufjs/minimal";
export interface Position {
    liquidity: string;
}
export interface PositionSDKType {
    liquidity: string;
}
export declare const Position: {
    encode(message: Position, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Position;
    fromPartial(object: Partial<Position>): Position;
};
