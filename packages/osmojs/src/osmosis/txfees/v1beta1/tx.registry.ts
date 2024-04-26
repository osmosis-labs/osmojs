//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetFeeTokens } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.txfees.v1beta1.MsgSetFeeTokens", MsgSetFeeTokens]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setFeeTokens(value: MsgSetFeeTokens) {
      return {
        typeUrl: "/osmosis.txfees.v1beta1.MsgSetFeeTokens",
        value: MsgSetFeeTokens.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setFeeTokens(value: MsgSetFeeTokens) {
      return {
        typeUrl: "/osmosis.txfees.v1beta1.MsgSetFeeTokens",
        value
      };
    }
  },
  fromPartial: {
    setFeeTokens(value: MsgSetFeeTokens) {
      return {
        typeUrl: "/osmosis.txfees.v1beta1.MsgSetFeeTokens",
        value: MsgSetFeeTokens.fromPartial(value)
      };
    }
  }
};