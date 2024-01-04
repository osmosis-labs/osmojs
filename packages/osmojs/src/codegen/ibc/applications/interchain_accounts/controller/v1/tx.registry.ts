//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount", MsgRegisterInterchainAccount], ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTx", MsgSendTx], ["/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.encode(value).finish()
      };
    },
    sendTx(value: MsgSendTx) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
        value: MsgSendTx.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        value
      };
    },
    sendTx(value: MsgSendTx) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.fromPartial(value)
      };
    },
    sendTx(value: MsgSendTx) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
        value: MsgSendTx.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};