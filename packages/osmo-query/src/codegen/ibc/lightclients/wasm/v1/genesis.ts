import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
/** GenesisState defines 08-wasm's keeper genesis state */
export interface GenesisState {
  /** uploaded light client wasm contracts */
  contracts: Contract[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines 08-wasm's keeper genesis state */
export interface GenesisStateAmino {
  /** uploaded light client wasm contracts */
  contracts?: ContractAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines 08-wasm's keeper genesis state */
export interface GenesisStateSDKType {
  contracts: ContractSDKType[];
}
/** Contract stores contract code */
export interface Contract {
  /** contract byte code */
  codeBytes: Uint8Array;
}
export interface ContractProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.Contract";
  value: Uint8Array;
}
/** Contract stores contract code */
export interface ContractAmino {
  /** contract byte code */
  code_bytes?: string;
}
export interface ContractAminoMsg {
  type: "cosmos-sdk/Contract";
  value: ContractAmino;
}
/** Contract stores contract code */
export interface ContractSDKType {
  code_bytes: Uint8Array;
}
function createBaseGenesisState(): GenesisState {
  return {
    contracts: []
  };
}
export const GenesisState = {
  typeUrl: "/ibc.lightclients.wasm.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.contracts = object.contracts?.map(e => Contract.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toAmino(e) : undefined);
    } else {
      obj.contracts = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseContract(): Contract {
  return {
    codeBytes: new Uint8Array()
  };
}
export const Contract = {
  typeUrl: "/ibc.lightclients.wasm.v1.Contract",
  encode(message: Contract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeBytes.length !== 0) {
      writer.uint32(10).bytes(message.codeBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Contract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Contract>): Contract {
    const message = createBaseContract();
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ContractAmino): Contract {
    const message = createBaseContract();
    if (object.code_bytes !== undefined && object.code_bytes !== null) {
      message.codeBytes = bytesFromBase64(object.code_bytes);
    }
    return message;
  },
  toAmino(message: Contract): ContractAmino {
    const obj: any = {};
    obj.code_bytes = message.codeBytes ? base64FromBytes(message.codeBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractAminoMsg): Contract {
    return Contract.fromAmino(object.value);
  },
  toAminoMsg(message: Contract): ContractAminoMsg {
    return {
      type: "cosmos-sdk/Contract",
      value: Contract.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractProtoMsg): Contract {
    return Contract.decode(message.value);
  },
  toProto(message: Contract): Uint8Array {
    return Contract.encode(message).finish();
  },
  toProtoMsg(message: Contract): ContractProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.Contract",
      value: Contract.encode(message).finish()
    };
  }
};