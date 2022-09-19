import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ModuleBalanceRequest, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomResponseSDKType, LockedRequest, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponseSDKType } from "./query";
/** Query defines the RPC service */
export interface Query {
    moduleBalance(request: ModuleBalanceRequest): Promise<ModuleBalanceResponseSDKType>;
    moduleLockedAmount(request: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponseSDKType>;
    accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponseSDKType>;
    accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponseSDKType>;
    accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponseSDKType>;
    accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponseSDKType>;
    accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponseSDKType>;
    accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponseSDKType>;
    accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponseSDKType>;
    lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponseSDKType>;
    lockedByID(request: LockedRequest): Promise<LockedResponseSDKType>;
    syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponseSDKType>;
    accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponseSDKType>;
    accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponseSDKType>;
    accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType>;
    accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponseSDKType>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    moduleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponseSDKType>;
    moduleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponseSDKType>;
    accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponseSDKType>;
    accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponseSDKType>;
    accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponseSDKType>;
    accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponseSDKType>;
    accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponseSDKType>;
    accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponseSDKType>;
    accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponseSDKType>;
    lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponseSDKType>;
    lockedByID(request: LockedRequest): Promise<LockedResponseSDKType>;
    syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponseSDKType>;
    accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponseSDKType>;
    accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponseSDKType>;
    accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType>;
    accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponseSDKType>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    moduleBalance(request: ModuleBalanceRequest): Promise<ModuleBalanceResponseSDKType>;
    moduleLockedAmount(request: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponseSDKType>;
    accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponseSDKType>;
    accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponseSDKType>;
    accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponseSDKType>;
    accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponseSDKType>;
    accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponseSDKType>;
    accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponseSDKType>;
    accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponseSDKType>;
    lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponseSDKType>;
    lockedByID(request: LockedRequest): Promise<LockedResponseSDKType>;
    syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponseSDKType>;
    accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponseSDKType>;
    accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponseSDKType>;
    accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType>;
    accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponseSDKType>;
};
