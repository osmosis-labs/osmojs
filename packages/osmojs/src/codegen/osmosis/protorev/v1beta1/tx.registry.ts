//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetHotRoutes, MsgSetDeveloperAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.protorev.v1beta1.MsgSetHotRoutes", MsgSetHotRoutes], ["/osmosis.protorev.v1beta1.MsgSetDeveloperAccount", MsgSetDeveloperAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setHotRoutes(value: MsgSetHotRoutes) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
        value: MsgSetHotRoutes.encode(value).finish()
      };
    },

    setDeveloperAccount(value: MsgSetDeveloperAccount) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
        value: MsgSetDeveloperAccount.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    setHotRoutes(value: MsgSetHotRoutes) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
        value
      };
    },

    setDeveloperAccount(value: MsgSetDeveloperAccount) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
        value
      };
    }

  },
  fromPartial: {
    setHotRoutes(value: MsgSetHotRoutes) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
        value: MsgSetHotRoutes.fromPartial(value)
      };
    },

    setDeveloperAccount(value: MsgSetDeveloperAccount) {
      return {
        typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
        value: MsgSetDeveloperAccount.fromPartial(value)
      };
    }

  }
};