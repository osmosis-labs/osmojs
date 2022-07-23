import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateBalancerPool } from "./tx";
export interface AminoMsgCreateBalancerPool extends AminoMsg {
    type: "osmosis/gamm/poolmodels/balancer/create-balancer-pool";
    value: {
        sender: string;
        poolParams: {
            swapFee: string;
            exitFee: string;
            smoothWeightChangeParams: {
                start_time: {
                    seconds: string;
                    nanos: number;
                };
                duration: {
                    seconds: string;
                    nanos: number;
                };
                initialPoolWeights: {
                    token: {
                        denom: string;
                        amount: string;
                    };
                    weight: string;
                }[];
                targetPoolWeights: {
                    token: {
                        denom: string;
                        amount: string;
                    };
                    weight: string;
                }[];
            };
        };
        poolAssets: {
            token: {
                denom: string;
                amount: string;
            };
            weight: string;
        }[];
        future_pool_governor: string;
    };
}
export declare const AminoConverter: {
    "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
        aminoType: string;
        toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: MsgCreateBalancerPool) => AminoMsgCreateBalancerPool["value"];
        fromAmino: ({ sender, poolParams, poolAssets, future_pool_governor }: AminoMsgCreateBalancerPool["value"]) => MsgCreateBalancerPool;
    };
};
