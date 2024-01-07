//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgEmitIBCAck } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.ibchooks.MsgEmitIBCAck", MsgEmitIBCAck]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    emitIBCAck(value: MsgEmitIBCAck) {
      return {
        typeUrl: "/osmosis.ibchooks.MsgEmitIBCAck",
        value: MsgEmitIBCAck.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    emitIBCAck(value: MsgEmitIBCAck) {
      return {
        typeUrl: "/osmosis.ibchooks.MsgEmitIBCAck",
        value
      };
    }
  },
  toJSON: {
    emitIBCAck(value: MsgEmitIBCAck) {
      return {
        typeUrl: "/osmosis.ibchooks.MsgEmitIBCAck",
        value: MsgEmitIBCAck.toJSON(value)
      };
    }
  },
  fromJSON: {
    emitIBCAck(value: any) {
      return {
        typeUrl: "/osmosis.ibchooks.MsgEmitIBCAck",
        value: MsgEmitIBCAck.fromJSON(value)
      };
    }
  },
  fromPartial: {
    emitIBCAck(value: MsgEmitIBCAck) {
      return {
        typeUrl: "/osmosis.ibchooks.MsgEmitIBCAck",
        value: MsgEmitIBCAck.fromPartial(value)
      };
    }
  }
};