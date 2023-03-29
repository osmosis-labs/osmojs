import { AminoMsg } from "@cosmjs/amino";
import { MsgSetHotRoutes, MsgSetDeveloperAccount, MsgSetMaxPoolPointsPerTx, MsgSetMaxPoolPointsPerBlock, MsgSetPoolWeights, MsgSetBaseDenoms } from "./tx";
export interface AminoMsgSetHotRoutes extends AminoMsg {
    type: "osmosis/protorev/set-hot-routes";
    value: {
        admin: string;
        hot_routes: {
            arb_routes: {
                trades: {
                    pool: string;
                    token_in: string;
                    token_out: string;
                }[];
                step_size: string;
            }[];
            token_in: string;
            token_out: string;
        }[];
    };
}
export interface AminoMsgSetDeveloperAccount extends AminoMsg {
    type: "osmosis/protorev/set-developer-account";
    value: {
        admin: string;
        developer_account: string;
    };
}
export interface AminoMsgSetMaxPoolPointsPerTx extends AminoMsg {
    type: "osmosis/protorev/set-max-pool-points-per-tx";
    value: {
        admin: string;
        max_pool_points_per_tx: string;
    };
}
export interface AminoMsgSetMaxPoolPointsPerBlock extends AminoMsg {
    type: "osmosis/protorev/set-max-pool-points-per-block";
    value: {
        admin: string;
        max_pool_points_per_block: string;
    };
}
export interface AminoMsgSetPoolWeights extends AminoMsg {
    type: "osmosis/protorev/set-pool-weights";
    value: {
        admin: string;
        pool_weights: {
            stable_weight: string;
            balancer_weight: string;
            concentrated_weight: string;
        };
    };
}
export interface AminoMsgSetBaseDenoms extends AminoMsg {
    type: "osmosis/protorev/set-base-denoms";
    value: {
        admin: string;
        base_denoms: {
            denom: string;
            step_size: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
        aminoType: string;
        toAmino: ({ admin, hotRoutes }: MsgSetHotRoutes) => AminoMsgSetHotRoutes["value"];
        fromAmino: ({ admin, hot_routes }: AminoMsgSetHotRoutes["value"]) => MsgSetHotRoutes;
    };
    "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
        aminoType: string;
        toAmino: ({ admin, developerAccount }: MsgSetDeveloperAccount) => AminoMsgSetDeveloperAccount["value"];
        fromAmino: ({ admin, developer_account }: AminoMsgSetDeveloperAccount["value"]) => MsgSetDeveloperAccount;
    };
    "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
        aminoType: string;
        toAmino: ({ admin, maxPoolPointsPerTx }: MsgSetMaxPoolPointsPerTx) => AminoMsgSetMaxPoolPointsPerTx["value"];
        fromAmino: ({ admin, max_pool_points_per_tx }: AminoMsgSetMaxPoolPointsPerTx["value"]) => MsgSetMaxPoolPointsPerTx;
    };
    "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
        aminoType: string;
        toAmino: ({ admin, maxPoolPointsPerBlock }: MsgSetMaxPoolPointsPerBlock) => AminoMsgSetMaxPoolPointsPerBlock["value"];
        fromAmino: ({ admin, max_pool_points_per_block }: AminoMsgSetMaxPoolPointsPerBlock["value"]) => MsgSetMaxPoolPointsPerBlock;
    };
    "/osmosis.protorev.v1beta1.MsgSetPoolWeights": {
        aminoType: string;
        toAmino: ({ admin, poolWeights }: MsgSetPoolWeights) => AminoMsgSetPoolWeights["value"];
        fromAmino: ({ admin, pool_weights }: AminoMsgSetPoolWeights["value"]) => MsgSetPoolWeights;
    };
    "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
        aminoType: string;
        toAmino: ({ admin, baseDenoms }: MsgSetBaseDenoms) => AminoMsgSetBaseDenoms["value"];
        fromAmino: ({ admin, base_denoms }: AminoMsgSetBaseDenoms["value"]) => MsgSetBaseDenoms;
    };
};
