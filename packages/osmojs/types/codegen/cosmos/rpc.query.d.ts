import { Rpc } from "@osmonauts/helpers";
export declare const createRPCQueryClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        app: {
            v1alpha1: import("./app/v1alpha1/query.rpc.query").QueryClientImpl;
        };
        auth: {
            v1beta1: import("./auth/v1beta1/query.rpc.query").QueryClientImpl;
        };
        authz: {
            v1beta1: import("./authz/v1beta1/query.rpc.query").QueryClientImpl;
        };
        bank: {
            v1beta1: import("./bank/v1beta1/query.rpc.query").QueryClientImpl;
        };
        distribution: {
            v1beta1: import("./distribution/v1beta1/query.rpc.query").QueryClientImpl;
        };
        evidence: {
            v1beta1: import("./evidence/v1beta1/query.rpc.query").QueryClientImpl;
        };
        feegrant: {
            v1beta1: import("./feegrant/v1beta1/query.rpc.query").QueryClientImpl;
        };
        gov: {
            v1beta1: import("./gov/v1beta1/query.rpc.query").QueryClientImpl;
        };
        mint: {
            v1beta1: import("./mint/v1beta1/query.rpc.query").QueryClientImpl;
        };
        nft: {
            v1beta1: import("./nft/v1beta1/query.rpc.query").QueryClientImpl;
        };
        params: {
            v1beta1: import("./params/v1beta1/query.rpc.query").QueryClientImpl;
        };
        slashing: {
            v1beta1: import("./slashing/v1beta1/query.rpc.query").QueryClientImpl;
        };
        staking: {
            v1beta1: import("./staking/v1beta1/query.rpc.query").QueryClientImpl;
        };
        upgrade: {
            v1beta1: import("./upgrade/v1beta1/query.rpc.query").QueryClientImpl;
        };
    };
}>;
