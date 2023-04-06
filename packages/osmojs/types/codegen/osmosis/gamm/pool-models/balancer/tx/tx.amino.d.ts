import { MsgCreateBalancerPool, MsgMigrateSharesToFullRangeConcentratedPosition } from "./tx";
export declare const AminoConverter: {
    "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
        aminoType: string;
        toAmino: (message: MsgCreateBalancerPool) => import("./tx").MsgCreateBalancerPoolAmino;
        fromAmino: (object: import("./tx").MsgCreateBalancerPoolAmino) => MsgCreateBalancerPool;
    };
    "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgMigrateSharesToFullRangeConcentratedPosition": {
        aminoType: string;
        toAmino: (message: MsgMigrateSharesToFullRangeConcentratedPosition) => import("./tx").MsgMigrateSharesToFullRangeConcentratedPositionAmino;
        fromAmino: (object: import("./tx").MsgMigrateSharesToFullRangeConcentratedPositionAmino) => MsgMigrateSharesToFullRangeConcentratedPosition;
    };
};
