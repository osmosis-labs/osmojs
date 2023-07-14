import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
    /**
     * code_ide_whitelist contains the list of code ids that are allowed to be
     * instantiated.
     */
    codeIdWhitelist: Long[];
    /**
     * pool_migration_limit is the maximum number of pools that can be migrated
     * at once via governance proposal. This is to have a constant bound on the
     * number of pools that can be migrated at once and remove the possibility
     * of an unlikely scenario of causing a chain halt due to a large migration.
     */
    poolMigrationLimit: Long;
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    /**
     * code_ide_whitelist contains the list of code ids that are allowed to be
     * instantiated.
     */
    code_id_whitelist: string[];
    /**
     * pool_migration_limit is the maximum number of pools that can be migrated
     * at once via governance proposal. This is to have a constant bound on the
     * number of pools that can be migrated at once and remove the possibility
     * of an unlikely scenario of causing a chain halt due to a large migration.
     */
    pool_migration_limit: string;
}
export interface ParamsAminoMsg {
    type: "osmosis/cosmwasmpool/params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    code_id_whitelist: Long[];
    pool_migration_limit: Long;
}
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
