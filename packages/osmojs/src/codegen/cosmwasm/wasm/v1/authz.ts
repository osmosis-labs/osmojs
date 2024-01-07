import { AccessConfig, AccessConfigAmino, AccessConfigSDKType } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { toUtf8, fromUtf8 } from "@cosmjs/encoding";
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 */
export interface StoreCodeAuthorization {
  $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeAuthorization";
  /** Grants for code upload */
  grants: CodeGrant[];
}
export interface StoreCodeAuthorizationProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.StoreCodeAuthorization";
  value: Uint8Array;
}
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 */
export interface StoreCodeAuthorizationAmino {
  /** Grants for code upload */
  grants: CodeGrantAmino[];
}
export interface StoreCodeAuthorizationAminoMsg {
  type: "wasm/StoreCodeAuthorization";
  value: StoreCodeAuthorizationAmino;
}
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 */
export interface StoreCodeAuthorizationSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeAuthorization";
  grants: CodeGrantSDKType[];
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorization {
  $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
  /** Grants for contract executions */
  grants: ContractGrant[];
}
export interface ContractExecutionAuthorizationProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
  value: Uint8Array;
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorizationAmino {
  /** Grants for contract executions */
  grants: ContractGrantAmino[];
}
export interface ContractExecutionAuthorizationAminoMsg {
  type: "wasm/ContractExecutionAuthorization";
  value: ContractExecutionAuthorizationAmino;
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorizationSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
  grants: ContractGrantSDKType[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorization {
  $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
  /** Grants for contract migrations */
  grants: ContractGrant[];
}
export interface ContractMigrationAuthorizationProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
  value: Uint8Array;
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorizationAmino {
  /** Grants for contract migrations */
  grants: ContractGrantAmino[];
}
export interface ContractMigrationAuthorizationAminoMsg {
  type: "wasm/ContractMigrationAuthorization";
  value: ContractMigrationAuthorizationAmino;
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorizationSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
  grants: ContractGrantSDKType[];
}
/** CodeGrant a granted permission for a single code */
export interface CodeGrant {
  /**
   * CodeHash is the unique identifier created by wasmvm
   * Wildcard "*" is used to specify any kind of grant.
   */
  codeHash: Uint8Array;
  /**
   * InstantiatePermission is the superset access control to apply
   * on contract creation.
   * Optional
   */
  instantiatePermission?: AccessConfig;
}
export interface CodeGrantProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.CodeGrant";
  value: Uint8Array;
}
/** CodeGrant a granted permission for a single code */
export interface CodeGrantAmino {
  /**
   * CodeHash is the unique identifier created by wasmvm
   * Wildcard "*" is used to specify any kind of grant.
   */
  code_hash?: string;
  /**
   * InstantiatePermission is the superset access control to apply
   * on contract creation.
   * Optional
   */
  instantiate_permission?: AccessConfigAmino;
}
export interface CodeGrantAminoMsg {
  type: "wasm/CodeGrant";
  value: CodeGrantAmino;
}
/** CodeGrant a granted permission for a single code */
export interface CodeGrantSDKType {
  code_hash: Uint8Array;
  instantiate_permission?: AccessConfigSDKType;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrant {
  /** Contract is the bech32 address of the smart contract */
  contract: string;
  /**
   * Limit defines execution limits that are enforced and updated when the grant
   * is applied. When the limit lapsed the grant is removed.
   */
  limit?: MaxCallsLimit | MaxFundsLimit | CombinedLimit | Any | undefined;
  /**
   * Filter define more fine-grained control on the message payload passed
   * to the contract in the operation. When no filter applies on execution, the
   * operation is prohibited.
   */
  filter?: AllowAllMessagesFilter | AcceptedMessageKeysFilter | AcceptedMessagesFilter | Any | undefined;
}
export interface ContractGrantProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ContractGrant";
  value: Uint8Array;
}
export type ContractGrantEncoded = Omit<ContractGrant, "limit" | "filter"> & {
  /**
   * Limit defines execution limits that are enforced and updated when the grant
   * is applied. When the limit lapsed the grant is removed.
   */
  limit?: MaxCallsLimitProtoMsg | MaxFundsLimitProtoMsg | CombinedLimitProtoMsg | AnyProtoMsg | undefined;
  /**
   * Filter define more fine-grained control on the message payload passed
   * to the contract in the operation. When no filter applies on execution, the
   * operation is prohibited.
   */
  filter?: AllowAllMessagesFilterProtoMsg | AcceptedMessageKeysFilterProtoMsg | AcceptedMessagesFilterProtoMsg | AnyProtoMsg | undefined;
};
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrantAmino {
  /** Contract is the bech32 address of the smart contract */
  contract?: string;
  /**
   * Limit defines execution limits that are enforced and updated when the grant
   * is applied. When the limit lapsed the grant is removed.
   */
  limit?: AnyAmino;
  /**
   * Filter define more fine-grained control on the message payload passed
   * to the contract in the operation. When no filter applies on execution, the
   * operation is prohibited.
   */
  filter?: AnyAmino;
}
export interface ContractGrantAminoMsg {
  type: "wasm/ContractGrant";
  value: ContractGrantAmino;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrantSDKType {
  contract: string;
  limit?: MaxCallsLimitSDKType | MaxFundsLimitSDKType | CombinedLimitSDKType | AnySDKType | undefined;
  filter?: AllowAllMessagesFilterSDKType | AcceptedMessageKeysFilterSDKType | AcceptedMessagesFilterSDKType | AnySDKType | undefined;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimit {
  $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
  /** Remaining number that is decremented on each execution */
  remaining: bigint;
}
export interface MaxCallsLimitProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit";
  value: Uint8Array;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimitAmino {
  /** Remaining number that is decremented on each execution */
  remaining?: string;
}
export interface MaxCallsLimitAminoMsg {
  type: "wasm/MaxCallsLimit";
  value: MaxCallsLimitAmino;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimitSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
  remaining: bigint;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimit {
  $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: Coin[];
}
export interface MaxFundsLimitProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit";
  value: Uint8Array;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimitAmino {
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: CoinAmino[];
}
export interface MaxFundsLimitAminoMsg {
  type: "wasm/MaxFundsLimit";
  value: MaxFundsLimitAmino;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimitSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
  amounts: CoinSDKType[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimit {
  $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
  /** Remaining number that is decremented on each execution */
  callsRemaining: bigint;
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: Coin[];
}
export interface CombinedLimitProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.CombinedLimit";
  value: Uint8Array;
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimitAmino {
  /** Remaining number that is decremented on each execution */
  calls_remaining?: string;
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: CoinAmino[];
}
export interface CombinedLimitAminoMsg {
  type: "wasm/CombinedLimit";
  value: CombinedLimitAmino;
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimitSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
  calls_remaining: bigint;
  amounts: CoinSDKType[];
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilter {
  $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
}
export interface AllowAllMessagesFilterProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
  value: Uint8Array;
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilterAmino {}
export interface AllowAllMessagesFilterAminoMsg {
  type: "wasm/AllowAllMessagesFilter";
  value: AllowAllMessagesFilterAmino;
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilterSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilter {
  $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
  /** Messages is the list of unique keys */
  keys: string[];
}
export interface AcceptedMessageKeysFilterProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
  value: Uint8Array;
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilterAmino {
  /** Messages is the list of unique keys */
  keys?: string[];
}
export interface AcceptedMessageKeysFilterAminoMsg {
  type: "wasm/AcceptedMessageKeysFilter";
  value: AcceptedMessageKeysFilterAmino;
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilterSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
  keys: string[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilter {
  $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
  /** Messages is the list of raw contract messages */
  messages: Uint8Array[];
}
export interface AcceptedMessagesFilterProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
  value: Uint8Array;
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilterAmino {
  /** Messages is the list of raw contract messages */
  messages?: any[];
}
export interface AcceptedMessagesFilterAminoMsg {
  type: "wasm/AcceptedMessagesFilter";
  value: AcceptedMessagesFilterAmino;
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilterSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
  messages: Uint8Array[];
}
function createBaseStoreCodeAuthorization(): StoreCodeAuthorization {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.StoreCodeAuthorization",
    grants: []
  };
}
export const StoreCodeAuthorization = {
  typeUrl: "/cosmwasm.wasm.v1.StoreCodeAuthorization",
  aminoType: "wasm/StoreCodeAuthorization",
  is(o: any): o is StoreCodeAuthorization {
    return o && (o.$typeUrl === StoreCodeAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || CodeGrant.is(o.grants[0])));
  },
  isSDK(o: any): o is StoreCodeAuthorizationSDKType {
    return o && (o.$typeUrl === StoreCodeAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || CodeGrant.isSDK(o.grants[0])));
  },
  isAmino(o: any): o is StoreCodeAuthorizationAmino {
    return o && (o.$typeUrl === StoreCodeAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || CodeGrant.isAmino(o.grants[0])));
  },
  encode(message: StoreCodeAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      CodeGrant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreCodeAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(CodeGrant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreCodeAuthorization {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => CodeGrant.fromJSON(e)) : []
    };
  },
  toJSON(message: StoreCodeAuthorization): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? CodeGrant.toJSON(e) : undefined);
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromPartial(object: Partial<StoreCodeAuthorization>): StoreCodeAuthorization {
    const message = createBaseStoreCodeAuthorization();
    message.grants = object.grants?.map(e => CodeGrant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: StoreCodeAuthorizationAmino): StoreCodeAuthorization {
    const message = createBaseStoreCodeAuthorization();
    message.grants = object.grants?.map(e => CodeGrant.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: StoreCodeAuthorization): StoreCodeAuthorizationAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? CodeGrant.toAmino(e) : undefined);
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromAminoMsg(object: StoreCodeAuthorizationAminoMsg): StoreCodeAuthorization {
    return StoreCodeAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: StoreCodeAuthorization): StoreCodeAuthorizationAminoMsg {
    return {
      type: "wasm/StoreCodeAuthorization",
      value: StoreCodeAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: StoreCodeAuthorizationProtoMsg): StoreCodeAuthorization {
    return StoreCodeAuthorization.decode(message.value);
  },
  toProto(message: StoreCodeAuthorization): Uint8Array {
    return StoreCodeAuthorization.encode(message).finish();
  },
  toProtoMsg(message: StoreCodeAuthorization): StoreCodeAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.StoreCodeAuthorization",
      value: StoreCodeAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StoreCodeAuthorization.typeUrl, StoreCodeAuthorization);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreCodeAuthorization.aminoType, StoreCodeAuthorization.typeUrl);
function createBaseContractExecutionAuthorization(): ContractExecutionAuthorization {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
    grants: []
  };
}
export const ContractExecutionAuthorization = {
  typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
  aminoType: "wasm/ContractExecutionAuthorization",
  is(o: any): o is ContractExecutionAuthorization {
    return o && (o.$typeUrl === ContractExecutionAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || ContractGrant.is(o.grants[0])));
  },
  isSDK(o: any): o is ContractExecutionAuthorizationSDKType {
    return o && (o.$typeUrl === ContractExecutionAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || ContractGrant.isSDK(o.grants[0])));
  },
  isAmino(o: any): o is ContractExecutionAuthorizationAmino {
    return o && (o.$typeUrl === ContractExecutionAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || ContractGrant.isAmino(o.grants[0])));
  },
  encode(message: ContractExecutionAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      ContractGrant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractExecutionAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractExecutionAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractExecutionAuthorization {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => ContractGrant.fromJSON(e)) : []
    };
  },
  toJSON(message: ContractExecutionAuthorization): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? ContractGrant.toJSON(e) : undefined);
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ContractExecutionAuthorization>): ContractExecutionAuthorization {
    const message = createBaseContractExecutionAuthorization();
    message.grants = object.grants?.map(e => ContractGrant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ContractExecutionAuthorizationAmino): ContractExecutionAuthorization {
    const message = createBaseContractExecutionAuthorization();
    message.grants = object.grants?.map(e => ContractGrant.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ContractExecutionAuthorization): ContractExecutionAuthorizationAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? ContractGrant.toAmino(e) : undefined);
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromAminoMsg(object: ContractExecutionAuthorizationAminoMsg): ContractExecutionAuthorization {
    return ContractExecutionAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: ContractExecutionAuthorization): ContractExecutionAuthorizationAminoMsg {
    return {
      type: "wasm/ContractExecutionAuthorization",
      value: ContractExecutionAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractExecutionAuthorizationProtoMsg): ContractExecutionAuthorization {
    return ContractExecutionAuthorization.decode(message.value);
  },
  toProto(message: ContractExecutionAuthorization): Uint8Array {
    return ContractExecutionAuthorization.encode(message).finish();
  },
  toProtoMsg(message: ContractExecutionAuthorization): ContractExecutionAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
      value: ContractExecutionAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ContractExecutionAuthorization.typeUrl, ContractExecutionAuthorization);
GlobalDecoderRegistry.registerAminoProtoMapping(ContractExecutionAuthorization.aminoType, ContractExecutionAuthorization.typeUrl);
function createBaseContractMigrationAuthorization(): ContractMigrationAuthorization {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
    grants: []
  };
}
export const ContractMigrationAuthorization = {
  typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
  aminoType: "wasm/ContractMigrationAuthorization",
  is(o: any): o is ContractMigrationAuthorization {
    return o && (o.$typeUrl === ContractMigrationAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || ContractGrant.is(o.grants[0])));
  },
  isSDK(o: any): o is ContractMigrationAuthorizationSDKType {
    return o && (o.$typeUrl === ContractMigrationAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || ContractGrant.isSDK(o.grants[0])));
  },
  isAmino(o: any): o is ContractMigrationAuthorizationAmino {
    return o && (o.$typeUrl === ContractMigrationAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || ContractGrant.isAmino(o.grants[0])));
  },
  encode(message: ContractMigrationAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      ContractGrant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractMigrationAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractMigrationAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractMigrationAuthorization {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => ContractGrant.fromJSON(e)) : []
    };
  },
  toJSON(message: ContractMigrationAuthorization): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? ContractGrant.toJSON(e) : undefined);
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ContractMigrationAuthorization>): ContractMigrationAuthorization {
    const message = createBaseContractMigrationAuthorization();
    message.grants = object.grants?.map(e => ContractGrant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ContractMigrationAuthorizationAmino): ContractMigrationAuthorization {
    const message = createBaseContractMigrationAuthorization();
    message.grants = object.grants?.map(e => ContractGrant.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ContractMigrationAuthorization): ContractMigrationAuthorizationAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? ContractGrant.toAmino(e) : undefined);
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromAminoMsg(object: ContractMigrationAuthorizationAminoMsg): ContractMigrationAuthorization {
    return ContractMigrationAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: ContractMigrationAuthorization): ContractMigrationAuthorizationAminoMsg {
    return {
      type: "wasm/ContractMigrationAuthorization",
      value: ContractMigrationAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractMigrationAuthorizationProtoMsg): ContractMigrationAuthorization {
    return ContractMigrationAuthorization.decode(message.value);
  },
  toProto(message: ContractMigrationAuthorization): Uint8Array {
    return ContractMigrationAuthorization.encode(message).finish();
  },
  toProtoMsg(message: ContractMigrationAuthorization): ContractMigrationAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
      value: ContractMigrationAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ContractMigrationAuthorization.typeUrl, ContractMigrationAuthorization);
GlobalDecoderRegistry.registerAminoProtoMapping(ContractMigrationAuthorization.aminoType, ContractMigrationAuthorization.typeUrl);
function createBaseCodeGrant(): CodeGrant {
  return {
    codeHash: new Uint8Array(),
    instantiatePermission: undefined
  };
}
export const CodeGrant = {
  typeUrl: "/cosmwasm.wasm.v1.CodeGrant",
  aminoType: "wasm/CodeGrant",
  is(o: any): o is CodeGrant {
    return o && (o.$typeUrl === CodeGrant.typeUrl || o.codeHash instanceof Uint8Array || typeof o.codeHash === "string");
  },
  isSDK(o: any): o is CodeGrantSDKType {
    return o && (o.$typeUrl === CodeGrant.typeUrl || o.code_hash instanceof Uint8Array || typeof o.code_hash === "string");
  },
  isAmino(o: any): o is CodeGrantAmino {
    return o && (o.$typeUrl === CodeGrant.typeUrl || o.code_hash instanceof Uint8Array || typeof o.code_hash === "string");
  },
  encode(message: CodeGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CodeGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.bytes();
          break;
        case 2:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CodeGrant {
    return {
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined
    };
  },
  toJSON(message: CodeGrant): unknown {
    const obj: any = {};
    message.codeHash !== undefined && (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },
  fromPartial(object: Partial<CodeGrant>): CodeGrant {
    const message = createBaseCodeGrant();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  },
  fromAmino(object: CodeGrantAmino): CodeGrant {
    const message = createBaseCodeGrant();
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.codeHash = bytesFromBase64(object.code_hash);
    }
    if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
      message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    return message;
  },
  toAmino(message: CodeGrant): CodeGrantAmino {
    const obj: any = {};
    obj.code_hash = message.codeHash ? base64FromBytes(message.codeHash) : undefined;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
    return obj;
  },
  fromAminoMsg(object: CodeGrantAminoMsg): CodeGrant {
    return CodeGrant.fromAmino(object.value);
  },
  toAminoMsg(message: CodeGrant): CodeGrantAminoMsg {
    return {
      type: "wasm/CodeGrant",
      value: CodeGrant.toAmino(message)
    };
  },
  fromProtoMsg(message: CodeGrantProtoMsg): CodeGrant {
    return CodeGrant.decode(message.value);
  },
  toProto(message: CodeGrant): Uint8Array {
    return CodeGrant.encode(message).finish();
  },
  toProtoMsg(message: CodeGrant): CodeGrantProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CodeGrant",
      value: CodeGrant.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CodeGrant.typeUrl, CodeGrant);
GlobalDecoderRegistry.registerAminoProtoMapping(CodeGrant.aminoType, CodeGrant.typeUrl);
function createBaseContractGrant(): ContractGrant {
  return {
    contract: "",
    limit: undefined,
    filter: undefined
  };
}
export const ContractGrant = {
  typeUrl: "/cosmwasm.wasm.v1.ContractGrant",
  aminoType: "wasm/ContractGrant",
  is(o: any): o is ContractGrant {
    return o && (o.$typeUrl === ContractGrant.typeUrl || typeof o.contract === "string");
  },
  isSDK(o: any): o is ContractGrantSDKType {
    return o && (o.$typeUrl === ContractGrant.typeUrl || typeof o.contract === "string");
  },
  isAmino(o: any): o is ContractGrantAmino {
    return o && (o.$typeUrl === ContractGrant.typeUrl || typeof o.contract === "string");
  },
  encode(message: ContractGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.limit !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.limit), writer.uint32(18).fork()).ldelim();
    }
    if (message.filter !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.filter), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.limit = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 3:
          message.filter = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractGrant {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      limit: isSet(object.limit) ? GlobalDecoderRegistry.fromJSON(object.limit) : undefined,
      filter: isSet(object.filter) ? GlobalDecoderRegistry.fromJSON(object.filter) : undefined
    };
  },
  toJSON(message: ContractGrant): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.limit !== undefined && (obj.limit = message.limit ? GlobalDecoderRegistry.toJSON(message.limit) : undefined);
    message.filter !== undefined && (obj.filter = message.filter ? GlobalDecoderRegistry.toJSON(message.filter) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ContractGrant>): ContractGrant {
    const message = createBaseContractGrant();
    message.contract = object.contract ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? GlobalDecoderRegistry.fromPartial(object.limit) : undefined;
    message.filter = object.filter !== undefined && object.filter !== null ? GlobalDecoderRegistry.fromPartial(object.filter) : undefined;
    return message;
  },
  fromAmino(object: ContractGrantAmino): ContractGrant {
    const message = createBaseContractGrant();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = GlobalDecoderRegistry.fromAminoMsg(object.limit);
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = GlobalDecoderRegistry.fromAminoMsg(object.filter);
    }
    return message;
  },
  toAmino(message: ContractGrant): ContractGrantAmino {
    const obj: any = {};
    obj.contract = message.contract;
    obj.limit = message.limit ? GlobalDecoderRegistry.toAminoMsg(message.limit) : undefined;
    obj.filter = message.filter ? GlobalDecoderRegistry.toAminoMsg(message.filter) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractGrantAminoMsg): ContractGrant {
    return ContractGrant.fromAmino(object.value);
  },
  toAminoMsg(message: ContractGrant): ContractGrantAminoMsg {
    return {
      type: "wasm/ContractGrant",
      value: ContractGrant.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractGrantProtoMsg): ContractGrant {
    return ContractGrant.decode(message.value);
  },
  toProto(message: ContractGrant): Uint8Array {
    return ContractGrant.encode(message).finish();
  },
  toProtoMsg(message: ContractGrant): ContractGrantProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractGrant",
      value: ContractGrant.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ContractGrant.typeUrl, ContractGrant);
GlobalDecoderRegistry.registerAminoProtoMapping(ContractGrant.aminoType, ContractGrant.typeUrl);
function createBaseMaxCallsLimit(): MaxCallsLimit {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
    remaining: BigInt(0)
  };
}
export const MaxCallsLimit = {
  typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
  aminoType: "wasm/MaxCallsLimit",
  is(o: any): o is MaxCallsLimit {
    return o && (o.$typeUrl === MaxCallsLimit.typeUrl || typeof o.remaining === "bigint");
  },
  isSDK(o: any): o is MaxCallsLimitSDKType {
    return o && (o.$typeUrl === MaxCallsLimit.typeUrl || typeof o.remaining === "bigint");
  },
  isAmino(o: any): o is MaxCallsLimitAmino {
    return o && (o.$typeUrl === MaxCallsLimit.typeUrl || typeof o.remaining === "bigint");
  },
  encode(message: MaxCallsLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.remaining !== BigInt(0)) {
      writer.uint32(8).uint64(message.remaining);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MaxCallsLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxCallsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remaining = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MaxCallsLimit {
    return {
      remaining: isSet(object.remaining) ? BigInt(object.remaining.toString()) : BigInt(0)
    };
  },
  toJSON(message: MaxCallsLimit): unknown {
    const obj: any = {};
    message.remaining !== undefined && (obj.remaining = (message.remaining || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MaxCallsLimit>): MaxCallsLimit {
    const message = createBaseMaxCallsLimit();
    message.remaining = object.remaining !== undefined && object.remaining !== null ? BigInt(object.remaining.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MaxCallsLimitAmino): MaxCallsLimit {
    const message = createBaseMaxCallsLimit();
    if (object.remaining !== undefined && object.remaining !== null) {
      message.remaining = BigInt(object.remaining);
    }
    return message;
  },
  toAmino(message: MaxCallsLimit): MaxCallsLimitAmino {
    const obj: any = {};
    obj.remaining = message.remaining ? message.remaining.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MaxCallsLimitAminoMsg): MaxCallsLimit {
    return MaxCallsLimit.fromAmino(object.value);
  },
  toAminoMsg(message: MaxCallsLimit): MaxCallsLimitAminoMsg {
    return {
      type: "wasm/MaxCallsLimit",
      value: MaxCallsLimit.toAmino(message)
    };
  },
  fromProtoMsg(message: MaxCallsLimitProtoMsg): MaxCallsLimit {
    return MaxCallsLimit.decode(message.value);
  },
  toProto(message: MaxCallsLimit): Uint8Array {
    return MaxCallsLimit.encode(message).finish();
  },
  toProtoMsg(message: MaxCallsLimit): MaxCallsLimitProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
      value: MaxCallsLimit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MaxCallsLimit.typeUrl, MaxCallsLimit);
GlobalDecoderRegistry.registerAminoProtoMapping(MaxCallsLimit.aminoType, MaxCallsLimit.typeUrl);
function createBaseMaxFundsLimit(): MaxFundsLimit {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
    amounts: []
  };
}
export const MaxFundsLimit = {
  typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
  aminoType: "wasm/MaxFundsLimit",
  is(o: any): o is MaxFundsLimit {
    return o && (o.$typeUrl === MaxFundsLimit.typeUrl || Array.isArray(o.amounts) && (!o.amounts.length || Coin.is(o.amounts[0])));
  },
  isSDK(o: any): o is MaxFundsLimitSDKType {
    return o && (o.$typeUrl === MaxFundsLimit.typeUrl || Array.isArray(o.amounts) && (!o.amounts.length || Coin.isSDK(o.amounts[0])));
  },
  isAmino(o: any): o is MaxFundsLimitAmino {
    return o && (o.$typeUrl === MaxFundsLimit.typeUrl || Array.isArray(o.amounts) && (!o.amounts.length || Coin.isAmino(o.amounts[0])));
  },
  encode(message: MaxFundsLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MaxFundsLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxFundsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amounts.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MaxFundsLimit {
    return {
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MaxFundsLimit): unknown {
    const obj: any = {};
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MaxFundsLimit>): MaxFundsLimit {
    const message = createBaseMaxFundsLimit();
    message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MaxFundsLimitAmino): MaxFundsLimit {
    const message = createBaseMaxFundsLimit();
    message.amounts = object.amounts?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MaxFundsLimit): MaxFundsLimitAmino {
    const obj: any = {};
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: MaxFundsLimitAminoMsg): MaxFundsLimit {
    return MaxFundsLimit.fromAmino(object.value);
  },
  toAminoMsg(message: MaxFundsLimit): MaxFundsLimitAminoMsg {
    return {
      type: "wasm/MaxFundsLimit",
      value: MaxFundsLimit.toAmino(message)
    };
  },
  fromProtoMsg(message: MaxFundsLimitProtoMsg): MaxFundsLimit {
    return MaxFundsLimit.decode(message.value);
  },
  toProto(message: MaxFundsLimit): Uint8Array {
    return MaxFundsLimit.encode(message).finish();
  },
  toProtoMsg(message: MaxFundsLimit): MaxFundsLimitProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
      value: MaxFundsLimit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MaxFundsLimit.typeUrl, MaxFundsLimit);
GlobalDecoderRegistry.registerAminoProtoMapping(MaxFundsLimit.aminoType, MaxFundsLimit.typeUrl);
function createBaseCombinedLimit(): CombinedLimit {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
    callsRemaining: BigInt(0),
    amounts: []
  };
}
export const CombinedLimit = {
  typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
  aminoType: "wasm/CombinedLimit",
  is(o: any): o is CombinedLimit {
    return o && (o.$typeUrl === CombinedLimit.typeUrl || typeof o.callsRemaining === "bigint" && Array.isArray(o.amounts) && (!o.amounts.length || Coin.is(o.amounts[0])));
  },
  isSDK(o: any): o is CombinedLimitSDKType {
    return o && (o.$typeUrl === CombinedLimit.typeUrl || typeof o.calls_remaining === "bigint" && Array.isArray(o.amounts) && (!o.amounts.length || Coin.isSDK(o.amounts[0])));
  },
  isAmino(o: any): o is CombinedLimitAmino {
    return o && (o.$typeUrl === CombinedLimit.typeUrl || typeof o.calls_remaining === "bigint" && Array.isArray(o.amounts) && (!o.amounts.length || Coin.isAmino(o.amounts[0])));
  },
  encode(message: CombinedLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.callsRemaining !== BigInt(0)) {
      writer.uint32(8).uint64(message.callsRemaining);
    }
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CombinedLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCombinedLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callsRemaining = reader.uint64();
          break;
        case 2:
          message.amounts.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CombinedLimit {
    return {
      callsRemaining: isSet(object.callsRemaining) ? BigInt(object.callsRemaining.toString()) : BigInt(0),
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: CombinedLimit): unknown {
    const obj: any = {};
    message.callsRemaining !== undefined && (obj.callsRemaining = (message.callsRemaining || BigInt(0)).toString());
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromPartial(object: Partial<CombinedLimit>): CombinedLimit {
    const message = createBaseCombinedLimit();
    message.callsRemaining = object.callsRemaining !== undefined && object.callsRemaining !== null ? BigInt(object.callsRemaining.toString()) : BigInt(0);
    message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CombinedLimitAmino): CombinedLimit {
    const message = createBaseCombinedLimit();
    if (object.calls_remaining !== undefined && object.calls_remaining !== null) {
      message.callsRemaining = BigInt(object.calls_remaining);
    }
    message.amounts = object.amounts?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CombinedLimit): CombinedLimitAmino {
    const obj: any = {};
    obj.calls_remaining = message.callsRemaining ? message.callsRemaining.toString() : undefined;
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: CombinedLimitAminoMsg): CombinedLimit {
    return CombinedLimit.fromAmino(object.value);
  },
  toAminoMsg(message: CombinedLimit): CombinedLimitAminoMsg {
    return {
      type: "wasm/CombinedLimit",
      value: CombinedLimit.toAmino(message)
    };
  },
  fromProtoMsg(message: CombinedLimitProtoMsg): CombinedLimit {
    return CombinedLimit.decode(message.value);
  },
  toProto(message: CombinedLimit): Uint8Array {
    return CombinedLimit.encode(message).finish();
  },
  toProtoMsg(message: CombinedLimit): CombinedLimitProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
      value: CombinedLimit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CombinedLimit.typeUrl, CombinedLimit);
GlobalDecoderRegistry.registerAminoProtoMapping(CombinedLimit.aminoType, CombinedLimit.typeUrl);
function createBaseAllowAllMessagesFilter(): AllowAllMessagesFilter {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter"
  };
}
export const AllowAllMessagesFilter = {
  typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
  aminoType: "wasm/AllowAllMessagesFilter",
  is(o: any): o is AllowAllMessagesFilter {
    return o && o.$typeUrl === AllowAllMessagesFilter.typeUrl;
  },
  isSDK(o: any): o is AllowAllMessagesFilterSDKType {
    return o && o.$typeUrl === AllowAllMessagesFilter.typeUrl;
  },
  isAmino(o: any): o is AllowAllMessagesFilterAmino {
    return o && o.$typeUrl === AllowAllMessagesFilter.typeUrl;
  },
  encode(_: AllowAllMessagesFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllowAllMessagesFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowAllMessagesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): AllowAllMessagesFilter {
    return {};
  },
  toJSON(_: AllowAllMessagesFilter): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<AllowAllMessagesFilter>): AllowAllMessagesFilter {
    const message = createBaseAllowAllMessagesFilter();
    return message;
  },
  fromAmino(_: AllowAllMessagesFilterAmino): AllowAllMessagesFilter {
    const message = createBaseAllowAllMessagesFilter();
    return message;
  },
  toAmino(_: AllowAllMessagesFilter): AllowAllMessagesFilterAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AllowAllMessagesFilterAminoMsg): AllowAllMessagesFilter {
    return AllowAllMessagesFilter.fromAmino(object.value);
  },
  toAminoMsg(message: AllowAllMessagesFilter): AllowAllMessagesFilterAminoMsg {
    return {
      type: "wasm/AllowAllMessagesFilter",
      value: AllowAllMessagesFilter.toAmino(message)
    };
  },
  fromProtoMsg(message: AllowAllMessagesFilterProtoMsg): AllowAllMessagesFilter {
    return AllowAllMessagesFilter.decode(message.value);
  },
  toProto(message: AllowAllMessagesFilter): Uint8Array {
    return AllowAllMessagesFilter.encode(message).finish();
  },
  toProtoMsg(message: AllowAllMessagesFilter): AllowAllMessagesFilterProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
      value: AllowAllMessagesFilter.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AllowAllMessagesFilter.typeUrl, AllowAllMessagesFilter);
GlobalDecoderRegistry.registerAminoProtoMapping(AllowAllMessagesFilter.aminoType, AllowAllMessagesFilter.typeUrl);
function createBaseAcceptedMessageKeysFilter(): AcceptedMessageKeysFilter {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
    keys: []
  };
}
export const AcceptedMessageKeysFilter = {
  typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
  aminoType: "wasm/AcceptedMessageKeysFilter",
  is(o: any): o is AcceptedMessageKeysFilter {
    return o && (o.$typeUrl === AcceptedMessageKeysFilter.typeUrl || Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
  },
  isSDK(o: any): o is AcceptedMessageKeysFilterSDKType {
    return o && (o.$typeUrl === AcceptedMessageKeysFilter.typeUrl || Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
  },
  isAmino(o: any): o is AcceptedMessageKeysFilterAmino {
    return o && (o.$typeUrl === AcceptedMessageKeysFilter.typeUrl || Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
  },
  encode(message: AcceptedMessageKeysFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AcceptedMessageKeysFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessageKeysFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AcceptedMessageKeysFilter {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: AcceptedMessageKeysFilter): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromPartial(object: Partial<AcceptedMessageKeysFilter>): AcceptedMessageKeysFilter {
    const message = createBaseAcceptedMessageKeysFilter();
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AcceptedMessageKeysFilterAmino): AcceptedMessageKeysFilter {
    const message = createBaseAcceptedMessageKeysFilter();
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  toAmino(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterAmino {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromAminoMsg(object: AcceptedMessageKeysFilterAminoMsg): AcceptedMessageKeysFilter {
    return AcceptedMessageKeysFilter.fromAmino(object.value);
  },
  toAminoMsg(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterAminoMsg {
    return {
      type: "wasm/AcceptedMessageKeysFilter",
      value: AcceptedMessageKeysFilter.toAmino(message)
    };
  },
  fromProtoMsg(message: AcceptedMessageKeysFilterProtoMsg): AcceptedMessageKeysFilter {
    return AcceptedMessageKeysFilter.decode(message.value);
  },
  toProto(message: AcceptedMessageKeysFilter): Uint8Array {
    return AcceptedMessageKeysFilter.encode(message).finish();
  },
  toProtoMsg(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
      value: AcceptedMessageKeysFilter.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AcceptedMessageKeysFilter.typeUrl, AcceptedMessageKeysFilter);
GlobalDecoderRegistry.registerAminoProtoMapping(AcceptedMessageKeysFilter.aminoType, AcceptedMessageKeysFilter.typeUrl);
function createBaseAcceptedMessagesFilter(): AcceptedMessagesFilter {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
    messages: []
  };
}
export const AcceptedMessagesFilter = {
  typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
  aminoType: "wasm/AcceptedMessagesFilter",
  is(o: any): o is AcceptedMessagesFilter {
    return o && (o.$typeUrl === AcceptedMessagesFilter.typeUrl || Array.isArray(o.messages) && (!o.messages.length || o.messages[0] instanceof Uint8Array || typeof o.messages[0] === "string"));
  },
  isSDK(o: any): o is AcceptedMessagesFilterSDKType {
    return o && (o.$typeUrl === AcceptedMessagesFilter.typeUrl || Array.isArray(o.messages) && (!o.messages.length || o.messages[0] instanceof Uint8Array || typeof o.messages[0] === "string"));
  },
  isAmino(o: any): o is AcceptedMessagesFilterAmino {
    return o && (o.$typeUrl === AcceptedMessagesFilter.typeUrl || Array.isArray(o.messages) && (!o.messages.length || o.messages[0] instanceof Uint8Array || typeof o.messages[0] === "string"));
  },
  encode(message: AcceptedMessagesFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AcceptedMessagesFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessagesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AcceptedMessagesFilter {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: AcceptedMessagesFilter): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromPartial(object: Partial<AcceptedMessagesFilter>): AcceptedMessagesFilter {
    const message = createBaseAcceptedMessagesFilter();
    message.messages = object.messages?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AcceptedMessagesFilterAmino): AcceptedMessagesFilter {
    const message = createBaseAcceptedMessagesFilter();
    message.messages = object.messages?.map(e => toUtf8(JSON.stringify(e))) || [];
    return message;
  },
  toAmino(message: AcceptedMessagesFilter): AcceptedMessagesFilterAmino {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => JSON.parse(fromUtf8(e)));
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromAminoMsg(object: AcceptedMessagesFilterAminoMsg): AcceptedMessagesFilter {
    return AcceptedMessagesFilter.fromAmino(object.value);
  },
  toAminoMsg(message: AcceptedMessagesFilter): AcceptedMessagesFilterAminoMsg {
    return {
      type: "wasm/AcceptedMessagesFilter",
      value: AcceptedMessagesFilter.toAmino(message)
    };
  },
  fromProtoMsg(message: AcceptedMessagesFilterProtoMsg): AcceptedMessagesFilter {
    return AcceptedMessagesFilter.decode(message.value);
  },
  toProto(message: AcceptedMessagesFilter): Uint8Array {
    return AcceptedMessagesFilter.encode(message).finish();
  },
  toProtoMsg(message: AcceptedMessagesFilter): AcceptedMessagesFilterProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
      value: AcceptedMessagesFilter.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AcceptedMessagesFilter.typeUrl, AcceptedMessagesFilter);
GlobalDecoderRegistry.registerAminoProtoMapping(AcceptedMessagesFilter.aminoType, AcceptedMessagesFilter.typeUrl);