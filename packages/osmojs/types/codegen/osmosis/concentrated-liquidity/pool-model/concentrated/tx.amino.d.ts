import { MsgCreateConcentratedPool } from "./tx";
export declare const AminoConverter: {
    "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool": {
        aminoType: string;
        toAmino: (message: MsgCreateConcentratedPool) => import("./tx").MsgCreateConcentratedPoolAmino;
        fromAmino: (object: import("./tx").MsgCreateConcentratedPoolAmino) => MsgCreateConcentratedPool;
    };
};
