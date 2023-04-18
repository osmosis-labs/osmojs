import { CalcPoolAprsParams } from "./types";
export declare const calcPoolAprs: ({ activeGauges, pool, prices, superfluidPools, aprSuperfluid, lockupDurations, volume7d, swapFee, lockup, includeNonPerpetual, }: CalcPoolAprsParams) => {
    totalApr: string;
    superfluidApr?: undefined;
    gaugeAprs?: undefined;
    swapFeeApr?: undefined;
} | {
    totalApr: string;
    superfluidApr: string | number;
    gaugeAprs: {
        apr: string;
        symbol: string;
        daysRemaining: number;
        distributedCoinPerDay: {
            amount: string;
            denom: string;
        };
        isPerpetual: boolean;
    }[];
    swapFeeApr: {
        swapFeeValuePerDay: string;
        apr: string;
    };
};
