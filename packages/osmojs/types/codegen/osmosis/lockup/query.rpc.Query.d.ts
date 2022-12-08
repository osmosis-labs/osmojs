import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Return full balance of the module */
    moduleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponse>;
    /** Return locked balance of the module */
    moduleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse>;
    /** Returns unlockable coins which are not withdrawn yet */
    accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse>;
    /** Returns unlocking coins */
    accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse>;
    /** Return a locked coins that can't be withdrawn */
    accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse>;
    /** Returns locked records of an account with unlock time beyond timestamp */
    accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse>;
    /**
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     */
    accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
    /** Returns unlocked records with unlock time before timestamp */
    accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse>;
    /** Returns lock records by address, timestamp, denom */
    accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse>;
    /** Returns total locked per denom with longer past given time */
    lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse>;
    /** Returns lock record by id */
    lockedByID(request: LockedRequest): Promise<LockedResponse>;
    /** Returns synthetic lockups by native lockup id */
    syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse>;
    /** Returns account locked records with longer duration */
    accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse>;
    /** Returns account locked records with a specific duration */
    accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse>;
    /**
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     */
    accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
    /** Returns account's locked records for a denom with longer duration */
    accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse>;
    /** Params returns lockup params. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    moduleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponse>;
    moduleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse>;
    accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse>;
    accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse>;
    accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse>;
    accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse>;
    accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
    accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse>;
    accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse>;
    lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse>;
    lockedByID(request: LockedRequest): Promise<LockedResponse>;
    syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse>;
    accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse>;
    accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse>;
    accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
    accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    moduleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponse>;
    moduleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse>;
    accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse>;
    accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse>;
    accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse>;
    accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse>;
    accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
    accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse>;
    accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse>;
    lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse>;
    lockedByID(request: LockedRequest): Promise<LockedResponse>;
    syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse>;
    accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse>;
    accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse>;
    accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
    accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
