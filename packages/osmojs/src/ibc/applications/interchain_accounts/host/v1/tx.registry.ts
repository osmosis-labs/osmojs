//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams", MsgUpdateParams], ["/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe", MsgModuleQuerySafe]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    moduleQuerySafe(value: MsgModuleQuerySafe) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
        value: MsgModuleQuerySafe.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams",
        value
      };
    },
    moduleQuerySafe(value: MsgModuleQuerySafe) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    moduleQuerySafe(value: MsgModuleQuerySafe) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
        value: MsgModuleQuerySafe.fromPartial(value)
      };
    }
  }
};