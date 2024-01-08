//@ts-nocheck
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
export const AminoConverter = {
  "/ibc.lightclients.wasm.v1.MsgStoreCode": {
    aminoType: "cosmos-sdk/MsgStoreCode",
    toAmino: MsgStoreCode.toAmino,
    fromAmino: MsgStoreCode.fromAmino
  },
  "/ibc.lightclients.wasm.v1.MsgRemoveChecksum": {
    aminoType: "cosmos-sdk/MsgRemoveChecksum",
    toAmino: MsgRemoveChecksum.toAmino,
    fromAmino: MsgRemoveChecksum.fromAmino
  },
  "/ibc.lightclients.wasm.v1.MsgMigrateContract": {
    aminoType: "cosmos-sdk/MsgMigrateContract",
    toAmino: MsgMigrateContract.toAmino,
    fromAmino: MsgMigrateContract.fromAmino
  }
};