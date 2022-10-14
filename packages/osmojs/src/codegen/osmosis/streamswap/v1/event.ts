import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface EventCreateSale {
  id: Long;
  creator: string;
  tokenIn: string;
  tokenOut?: Coin;
}
export interface EventCreateSaleSDKType {
  id: Long;
  creator: string;
  token_in: string;
  token_out?: CoinSDKType;
}
export interface EventSubscribe {
  sender: string;
  saleId: Long;
  amount: string;
}
export interface EventSubscribeSDKType {
  sender: string;
  sale_id: Long;
  amount: string;
}
export interface EventWithdraw {
  sender: string;
  saleId: Long;
  /** amount of staked token_in withdrawn by user. */

  amount: string;
}
export interface EventWithdrawSDKType {
  sender: string;
  sale_id: Long;
  /** amount of staked token_in withdrawn by user. */

  amount: string;
}
export interface EventExit {
  sender: string;
  saleId: Long;
  /** amount of purchased token_out sent to the user */

  purchased: string;
}
export interface EventExitSDKType {
  sender: string;
  sale_id: Long;
  /** amount of purchased token_out sent to the user */

  purchased: string;
}
export interface EventFinalizeSale {
  saleId: Long;
  /** amount of earned tokens_in */

  income: string;
}
export interface EventFinalizeSaleSDKType {
  sale_id: Long;
  /** amount of earned tokens_in */

  income: string;
}

function createBaseEventCreateSale(): EventCreateSale {
  return {
    id: Long.UZERO,
    creator: "",
    tokenIn: "",
    tokenOut: undefined
  };
}

export const EventCreateSale = {
  encode(message: EventCreateSale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }

    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateSale {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateSale();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.tokenIn = reader.string();
          break;

        case 4:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<EventCreateSale>): EventCreateSale {
    const message = createBaseEventCreateSale();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    return message;
  }

};

function createBaseEventSubscribe(): EventSubscribe {
  return {
    sender: "",
    saleId: Long.UZERO,
    amount: ""
  };
}

export const EventSubscribe = {
  encode(message: EventSubscribe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.saleId.isZero()) {
      writer.uint32(16).uint64(message.saleId);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubscribe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubscribe();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.saleId = (reader.uint64() as Long);
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<EventSubscribe>): EventSubscribe {
    const message = createBaseEventSubscribe();
    message.sender = object.sender ?? "";
    message.saleId = object.saleId !== undefined && object.saleId !== null ? Long.fromValue(object.saleId) : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseEventWithdraw(): EventWithdraw {
  return {
    sender: "",
    saleId: Long.UZERO,
    amount: ""
  };
}

export const EventWithdraw = {
  encode(message: EventWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.saleId.isZero()) {
      writer.uint32(16).uint64(message.saleId);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdraw();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.saleId = (reader.uint64() as Long);
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<EventWithdraw>): EventWithdraw {
    const message = createBaseEventWithdraw();
    message.sender = object.sender ?? "";
    message.saleId = object.saleId !== undefined && object.saleId !== null ? Long.fromValue(object.saleId) : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseEventExit(): EventExit {
  return {
    sender: "",
    saleId: Long.UZERO,
    purchased: ""
  };
}

export const EventExit = {
  encode(message: EventExit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.saleId.isZero()) {
      writer.uint32(16).uint64(message.saleId);
    }

    if (message.purchased !== "") {
      writer.uint32(26).string(message.purchased);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.saleId = (reader.uint64() as Long);
          break;

        case 3:
          message.purchased = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<EventExit>): EventExit {
    const message = createBaseEventExit();
    message.sender = object.sender ?? "";
    message.saleId = object.saleId !== undefined && object.saleId !== null ? Long.fromValue(object.saleId) : Long.UZERO;
    message.purchased = object.purchased ?? "";
    return message;
  }

};

function createBaseEventFinalizeSale(): EventFinalizeSale {
  return {
    saleId: Long.UZERO,
    income: ""
  };
}

export const EventFinalizeSale = {
  encode(message: EventFinalizeSale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.saleId.isZero()) {
      writer.uint32(8).uint64(message.saleId);
    }

    if (message.income !== "") {
      writer.uint32(26).string(message.income);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventFinalizeSale {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFinalizeSale();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.saleId = (reader.uint64() as Long);
          break;

        case 3:
          message.income = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<EventFinalizeSale>): EventFinalizeSale {
    const message = createBaseEventFinalizeSale();
    message.saleId = object.saleId !== undefined && object.saleId !== null ? Long.fromValue(object.saleId) : Long.UZERO;
    message.income = object.income ?? "";
    return message;
  }

};