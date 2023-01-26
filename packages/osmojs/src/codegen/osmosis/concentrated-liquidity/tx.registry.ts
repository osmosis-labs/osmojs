//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePosition, MsgWithdrawPosition, MsgCollectFees } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition", MsgCreatePosition], ["/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition", MsgWithdrawPosition], ["/osmosis.concentratedliquidity.v1beta1.MsgCollectFees", MsgCollectFees]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
        value: MsgCreatePosition.encode(value).finish()
      };
    },

    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value: MsgWithdrawPosition.encode(value).finish()
      };
    },

    collectFees(value: MsgCollectFees) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees",
        value: MsgCollectFees.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
        value
      };
    },

    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value
      };
    },

    collectFees(value: MsgCollectFees) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees",
        value
      };
    }

  },
  fromPartial: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
        value: MsgCreatePosition.fromPartial(value)
      };
    },

    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value: MsgWithdrawPosition.fromPartial(value)
      };
    },

    collectFees(value: MsgCollectFees) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectFees",
        value: MsgCollectFees.fromPartial(value)
      };
    }

  }
};