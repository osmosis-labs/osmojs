//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
    aminoType: "osmosis/protorev/set-hot-routes",
    toAmino: ({
      admin,
      hotRoutes
    }: MsgSetHotRoutes): AminoMsgSetHotRoutes["value"] => {
      return {
        admin,
        hot_routes: hotRoutes.map(el0 => ({
          arb_routes: el0.arbRoutes.map(el1 => ({
            trades: el1.trades.map(el2 => ({
              pool: el2.pool.toString(),
              token_in: el2.tokenIn,
              token_out: el2.tokenOut
            }))
          })),
          token_in: el0.tokenIn,
          token_out: el0.tokenOut
        }))
      };
    },
    fromAmino: ({
      admin,
      hot_routes
    }: AminoMsgSetHotRoutes["value"]): MsgSetHotRoutes => {
      return {
        admin,
        hotRoutes: hot_routes.map(el0 => ({
          arbRoutes: el0.arb_routes.map(el1 => ({
            trades: el1.trades.map(el2 => ({
              pool: Long.fromString(el2.pool),
              tokenIn: el2.token_in,
              tokenOut: el2.token_out
            }))
          })),
          tokenIn: el0.token_in,
          tokenOut: el0.token_out
        }))
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
    aminoType: "osmosis/protorev/set-developer-account",
    toAmino: ({
      admin,
      developerAccount
    }: MsgSetDeveloperAccount): AminoMsgSetDeveloperAccount["value"] => {
      return {
        admin,
        developer_account: developerAccount
      };
    },
    fromAmino: ({
      admin,
      developer_account
    }: AminoMsgSetDeveloperAccount["value"]): MsgSetDeveloperAccount => {
      return {
        admin,
        developerAccount: developer_account
      };
    }
  }
};