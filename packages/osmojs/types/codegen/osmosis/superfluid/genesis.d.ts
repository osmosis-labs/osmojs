import { Params, ParamsSDKType } from "./params";
import { SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidIntermediaryAccount, SuperfluidIntermediaryAccountSDKType, LockIdIntermediaryAccountConnection, LockIdIntermediaryAccountConnectionSDKType } from "./superfluid";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    params?: Params;
    /**
     * superfluid_assets defines the registered superfluid assets that have been
     * registered via governance.
     */
    superfluidAssets: SuperfluidAsset[];
    /**
     * osmo_equivalent_multipliers is the records of osmo equivalent amount of
     * each superfluid registered pool, updated every epoch.
     */
    osmoEquivalentMultipliers: OsmoEquivalentMultiplierRecord[];
    /**
     * intermediary_accounts is a secondary account for superfluid staking that
     * plays an intermediary role between validators and the delegators.
     */
    intermediaryAccounts: SuperfluidIntermediaryAccount[];
    intemediaryAccountConnections: LockIdIntermediaryAccountConnection[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    /**
     * superfluid_assets defines the registered superfluid assets that have been
     * registered via governance.
     */
    superfluid_assets: SuperfluidAssetSDKType[];
    /**
     * osmo_equivalent_multipliers is the records of osmo equivalent amount of
     * each superfluid registered pool, updated every epoch.
     */
    osmo_equivalent_multipliers: OsmoEquivalentMultiplierRecordSDKType[];
    /**
     * intermediary_accounts is a secondary account for superfluid staking that
     * plays an intermediary role between validators and the delegators.
     */
    intermediary_accounts: SuperfluidIntermediaryAccountSDKType[];
    intemediary_account_connections: LockIdIntermediaryAccountConnectionSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
