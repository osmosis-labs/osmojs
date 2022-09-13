import { Params } from "./params";
import { SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidIntermediaryAccount, LockIdIntermediaryAccountConnection } from "./superfluid";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    params: Params;
    superfluid_assets: SuperfluidAsset[];
    osmo_equivalent_multipliers: OsmoEquivalentMultiplierRecord[];
    intermediary_accounts: SuperfluidIntermediaryAccount[];
    intemediary_account_connections: LockIdIntermediaryAccountConnection[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
