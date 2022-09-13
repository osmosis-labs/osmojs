import { Params } from "./params";
import { SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidIntermediaryAccount, LockIdIntermediaryAccountConnection } from "./superfluid";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  params: Params;
  superfluid_assets: SuperfluidAsset[];
  osmo_equivalent_multipliers: OsmoEquivalentMultiplierRecord[];
  intermediary_accounts: SuperfluidIntermediaryAccount[];
  intemediary_account_connections: LockIdIntermediaryAccountConnection[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    superfluid_assets: [],
    osmo_equivalent_multipliers: [],
    intermediary_accounts: [],
    intemediary_account_connections: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.superfluid_assets) {
      SuperfluidAsset.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.osmo_equivalent_multipliers) {
      OsmoEquivalentMultiplierRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.intermediary_accounts) {
      SuperfluidIntermediaryAccount.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.intemediary_account_connections) {
      LockIdIntermediaryAccountConnection.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.superfluid_assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;

        case 3:
          message.osmo_equivalent_multipliers.push(OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32()));
          break;

        case 4:
          message.intermediary_accounts.push(SuperfluidIntermediaryAccount.decode(reader, reader.uint32()));
          break;

        case 5:
          message.intemediary_account_connections.push(LockIdIntermediaryAccountConnection.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      superfluid_assets: Array.isArray(object?.superfluid_assets) ? object.superfluid_assets.map((e: any) => SuperfluidAsset.fromJSON(e)) : [],
      osmo_equivalent_multipliers: Array.isArray(object?.osmo_equivalent_multipliers) ? object.osmo_equivalent_multipliers.map((e: any) => OsmoEquivalentMultiplierRecord.fromJSON(e)) : [],
      intermediary_accounts: Array.isArray(object?.intermediary_accounts) ? object.intermediary_accounts.map((e: any) => SuperfluidIntermediaryAccount.fromJSON(e)) : [],
      intemediary_account_connections: Array.isArray(object?.intemediary_account_connections) ? object.intemediary_account_connections.map((e: any) => LockIdIntermediaryAccountConnection.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.superfluid_assets) {
      obj.superfluid_assets = message.superfluid_assets.map(e => e ? SuperfluidAsset.toJSON(e) : undefined);
    } else {
      obj.superfluid_assets = [];
    }

    if (message.osmo_equivalent_multipliers) {
      obj.osmo_equivalent_multipliers = message.osmo_equivalent_multipliers.map(e => e ? OsmoEquivalentMultiplierRecord.toJSON(e) : undefined);
    } else {
      obj.osmo_equivalent_multipliers = [];
    }

    if (message.intermediary_accounts) {
      obj.intermediary_accounts = message.intermediary_accounts.map(e => e ? SuperfluidIntermediaryAccount.toJSON(e) : undefined);
    } else {
      obj.intermediary_accounts = [];
    }

    if (message.intemediary_account_connections) {
      obj.intemediary_account_connections = message.intemediary_account_connections.map(e => e ? LockIdIntermediaryAccountConnection.toJSON(e) : undefined);
    } else {
      obj.intemediary_account_connections = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.superfluid_assets = object.superfluid_assets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
    message.osmo_equivalent_multipliers = object.osmo_equivalent_multipliers?.map(e => OsmoEquivalentMultiplierRecord.fromPartial(e)) || [];
    message.intermediary_accounts = object.intermediary_accounts?.map(e => SuperfluidIntermediaryAccount.fromPartial(e)) || [];
    message.intemediary_account_connections = object.intemediary_account_connections?.map(e => LockIdIntermediaryAccountConnection.fromPartial(e)) || [];
    return message;
  }

};