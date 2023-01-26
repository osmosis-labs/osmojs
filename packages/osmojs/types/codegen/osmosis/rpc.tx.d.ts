import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        gov: {
            v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
            v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
    };
    osmosis: {
        concentratedliquidity: {
            v1beta1: import("./concentrated-liquidity/tx.rpc.msg").MsgClientImpl;
        };
        gamm: {
            poolmodels: {
                balancer: {
                    v1beta1: import("./gamm/pool-models/balancer/tx/tx.rpc.msg").MsgClientImpl;
                };
                stableswap: {
                    v1beta1: import("./gamm/pool-models/stableswap/tx.rpc.msg").MsgClientImpl;
                };
            };
            v1beta1: import("./gamm/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        incentives: import("./incentives/tx.rpc.msg").MsgClientImpl;
        lockup: import("./lockup/tx.rpc.msg").MsgClientImpl;
        poolmanager: {
            v1beta1: import("./poolmanager/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        protorev: {
            v1beta1: import("./protorev/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        superfluid: import("./superfluid/tx.rpc.msg").MsgClientImpl;
        tokenfactory: {
            v1beta1: import("./tokenfactory/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        valsetpref: {
            v1beta1: import("./valset-pref/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
    };
}>;
