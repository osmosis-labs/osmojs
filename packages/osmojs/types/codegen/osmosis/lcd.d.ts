export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    cosmos: {
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
        };
        gov: {
            v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
            v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
        };
        tx: {
            v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
        };
    };
    osmosis: {
        epochs: {
            v1beta1: import("./epochs/query.lcd").LCDQueryClient;
        };
        gamm: {
            v1beta1: import("./gamm/v1beta1/query.lcd").LCDQueryClient;
        };
        incentives: import("./incentives/query.lcd").LCDQueryClient;
        lockup: import("./lockup/query.lcd").LCDQueryClient;
        mint: {
            v1beta1: import("./mint/v1beta1/query.lcd").LCDQueryClient;
        };
        poolincentives: {
            v1beta1: import("./pool-incentives/v1beta1/query.lcd").LCDQueryClient;
        };
        streamswap: {
            v1: import("./streamswap/v1/query.lcd").LCDQueryClient;
        };
        superfluid: import("./superfluid/query.lcd").LCDQueryClient;
        tokenfactory: {
            v1beta1: import("./tokenfactory/v1beta1/query.lcd").LCDQueryClient;
        };
        twap: {
            v1beta1: import("./twap/v1beta1/query.lcd").LCDQueryClient;
        };
        txfees: {
            v1beta1: import("./txfees/v1beta1/query.lcd").LCDQueryClient;
        };
    };
}>;
