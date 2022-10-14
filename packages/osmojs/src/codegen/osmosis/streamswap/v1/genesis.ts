import { Sale, SaleSDKType, UserPosition, UserPositionSDKType } from "./state";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GenesisState defines the streamswap module's genesis state. */

export interface GenesisState {
  sales: Sale[];
  userPositions: UserPositionKV[];
  nextSaleId: Long;
  params?: Params;
}
/** GenesisState defines the streamswap module's genesis state. */

export interface GenesisStateSDKType {
  sales: SaleSDKType[];
  user_positions: UserPositionKVSDKType[];
  next_sale_id: Long;
  params?: ParamsSDKType;
}
/**
 * UserPositionKV is a record in genesis representing acc_address user position
 * of a sale_id sale.
 */

export interface UserPositionKV {
  /** user account address */
  accAddress: string;
  saleId: Long;
  userPosition?: UserPosition;
}
/**
 * UserPositionKV is a record in genesis representing acc_address user position
 * of a sale_id sale.
 */

export interface UserPositionKVSDKType {
  /** user account address */
  acc_address: string;
  sale_id: Long;
  user_position?: UserPositionSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    sales: [],
    userPositions: [],
    nextSaleId: Long.UZERO,
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sales) {
      Sale.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.userPositions) {
      UserPositionKV.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.nextSaleId.isZero()) {
      writer.uint32(24).uint64(message.nextSaleId);
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
          message.sales.push(Sale.decode(reader, reader.uint32()));
          break;

        case 2:
          message.userPositions.push(UserPositionKV.decode(reader, reader.uint32()));
          break;

        case 3:
          message.nextSaleId = (reader.uint64() as Long);
          break;

        case 4:
          message.params = Params.decode(reader, reader.uint32());
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
    message.sales = object.sales?.map(e => Sale.fromPartial(e)) || [];
    message.userPositions = object.userPositions?.map(e => UserPositionKV.fromPartial(e)) || [];
    message.nextSaleId = object.nextSaleId !== undefined && object.nextSaleId !== null ? Long.fromValue(object.nextSaleId) : Long.UZERO;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseUserPositionKV(): UserPositionKV {
  return {
    accAddress: "",
    saleId: Long.UZERO,
    userPosition: undefined
  };
}

export const UserPositionKV = {
  encode(message: UserPositionKV, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accAddress !== "") {
      writer.uint32(10).string(message.accAddress);
    }

    if (!message.saleId.isZero()) {
      writer.uint32(16).uint64(message.saleId);
    }

    if (message.userPosition !== undefined) {
      UserPosition.encode(message.userPosition, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserPositionKV {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPositionKV();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accAddress = reader.string();
          break;

        case 2:
          message.saleId = (reader.uint64() as Long);
          break;

        case 3:
          message.userPosition = UserPosition.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<UserPositionKV>): UserPositionKV {
    const message = createBaseUserPositionKV();
    message.accAddress = object.accAddress ?? "";
    message.saleId = object.saleId !== undefined && object.saleId !== null ? Long.fromValue(object.saleId) : Long.UZERO;
    message.userPosition = object.userPosition !== undefined && object.userPosition !== null ? UserPosition.fromPartial(object.userPosition) : undefined;
    return message;
  }

};