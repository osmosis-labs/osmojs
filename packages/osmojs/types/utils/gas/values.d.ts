export declare const GAS_VALUES: {
    osmosis: {
        createPool: string;
        joinPool: string;
        joinSwapExternAmountIn: string;
        exitPool: string;
        swapExactAmountIn: string;
        swapExactAmountOut: string;
        lockTokens: string;
        beginUnlocking: string;
        unlockPeriodLock: string;
    };
};
export declare const FEE_VALUES: {
    osmosis: {
        low: string;
        medium: string;
        high: string;
    };
};
export declare const FEES: {
    osmosis: {
        createPool: (fee?: string) => {
            amount: import("@cosmjs/amino").Coin[];
            gas: string;
        };
        joinPool: (fee?: string) => {
            amount: import("@cosmjs/amino").Coin[];
            gas: string;
        };
        joinSwapExternAmountIn: (fee?: string) => {
            amount: import("@cosmjs/amino").Coin[];
            gas: string;
        };
        exitPool: (fee?: string) => {
            amount: import("@cosmjs/amino").Coin[];
            gas: string;
        };
        swapExactAmountIn: (fee?: string) => {
            amount: import("@cosmjs/amino").Coin[];
            gas: string;
        };
        swapExactAmountOut: (fee?: string) => {
            amount: import("@cosmjs/amino").Coin[];
            gas: string;
        };
        lockTokens: (fee?: string) => {
            amount: import("@cosmjs/amino").Coin[];
            gas: string;
        };
        beginUnlocking: (fee?: string) => {
            amount: import("@cosmjs/amino").Coin[];
            gas: string;
        };
        unlockPeriodLock: (fee?: string) => {
            amount: import("@cosmjs/amino").Coin[];
            gas: string;
        };
    };
};
