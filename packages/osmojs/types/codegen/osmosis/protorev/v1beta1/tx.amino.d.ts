import { AminoMsg } from "@cosmjs/amino";
import { MsgSetHotRoutes, MsgSetDeveloperAccount } from "./tx";
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
};
