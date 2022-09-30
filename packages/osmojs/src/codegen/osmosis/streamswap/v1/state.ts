import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, Long, fromTimestamp, DeepPartial } from "@osmonauts/helpers";
export interface Sale {
  /** Destination for the earned token_in */
  treasury: string;
  id: Long;
  /**
   * token_out is a token denom to be bootstraped. May be referred as base
   * currency, or a sale token.
   */

  tokenOut: string;
  /**
   * token_in is a token denom used to buy sale tokens (`token_out`). May be
   * referred as quote_currency or payment token.
   */

  tokenIn: string;
  /** total number of `tokens_out` to be sold during the continuous sale. */

  tokenOutSupply: string;
  /** start time when the token emission starts. */

  startTime: Date;
  /**
   * end time when the token emission ends. Can't be bigger than start +
   * 139years (to avoid round overflow)
   */

  endTime: Date;
  /** Round number when the sale was last time updated. */

  round: Long;
  /** Last round of the Sale; */

  endRound: Long;
  /** amout of remaining token_out to sell */

  outRemaining: string;
  /** amount of token_out sold */

  outSold: string;
  /** out token per share */

  outPerShare: string;
  /** total amount of currently staked coins (token_in) but not spent coins. */

  staked: string;
  /** total amount of earned coins (token_in) */

  income: string;
  /** total amount of shares */

  shares: string;
  /** Name for the sale. */

  name: string;
  /** URL with sale and project details. */

  url: string;
}
export interface SaleSDKType {
  /** Destination for the earned token_in */
  treasury: string;
  id: Long;
  /**
   * token_out is a token denom to be bootstraped. May be referred as base
   * currency, or a sale token.
   */

  token_out: string;
  /**
   * token_in is a token denom used to buy sale tokens (`token_out`). May be
   * referred as quote_currency or payment token.
   */

  token_in: string;
  /** total number of `tokens_out` to be sold during the continuous sale. */

  token_out_supply: string;
  /** start time when the token emission starts. */

  start_time: Date;
  /**
   * end time when the token emission ends. Can't be bigger than start +
   * 139years (to avoid round overflow)
   */

  end_time: Date;
  /** Round number when the sale was last time updated. */

  round: Long;
  /** Last round of the Sale; */

  end_round: Long;
  /** amout of remaining token_out to sell */

  out_remaining: string;
  /** amount of token_out sold */

  out_sold: string;
  /** out token per share */

  out_per_share: string;
  /** total amount of currently staked coins (token_in) but not spent coins. */

  staked: string;
  /** total amount of earned coins (token_in) */

  income: string;
  /** total amount of shares */

  shares: string;
  /** Name for the sale. */

  name: string;
  /** URL with sale and project details. */

  url: string;
}
/** UserPosition represents user account in a sale */

export interface UserPosition {
  shares: string;
  /** total number of currently staked tokens */

  staked: string;
  /** last token/share ratio */

  outPerShare: string;
  /** amount of token_in spent */

  spent: string;
  /** Amount of accumulated, not withdrawn, purchased tokens (token_out) */

  purchased: string;
}
/** UserPosition represents user account in a sale */

export interface UserPositionSDKType {
  shares: string;
  /** total number of currently staked tokens */

  staked: string;
  /** last token/share ratio */

  out_per_share: string;
  /** amount of token_in spent */

  spent: string;
  /** Amount of accumulated, not withdrawn, purchased tokens (token_out) */

  purchased: string;
}

function createBaseSale(): Sale {
  return {
    treasury: "",
    id: Long.UZERO,
    tokenOut: "",
    tokenIn: "",
    tokenOutSupply: "",
    startTime: undefined,
    endTime: undefined,
    round: Long.ZERO,
    endRound: Long.ZERO,
    outRemaining: "",
    outSold: "",
    outPerShare: "",
    staked: "",
    income: "",
    shares: "",
    name: "",
    url: ""
  };
}

export const Sale = {
  encode(message: Sale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.treasury !== "") {
      writer.uint32(10).string(message.treasury);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }

    if (message.tokenIn !== "") {
      writer.uint32(34).string(message.tokenIn);
    }

    if (message.tokenOutSupply !== "") {
      writer.uint32(42).string(message.tokenOutSupply);
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(50).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(58).fork()).ldelim();
    }

    if (!message.round.isZero()) {
      writer.uint32(64).int64(message.round);
    }

    if (!message.endRound.isZero()) {
      writer.uint32(72).int64(message.endRound);
    }

    if (message.outRemaining !== "") {
      writer.uint32(82).string(message.outRemaining);
    }

    if (message.outSold !== "") {
      writer.uint32(90).string(message.outSold);
    }

    if (message.outPerShare !== "") {
      writer.uint32(98).string(message.outPerShare);
    }

    if (message.staked !== "") {
      writer.uint32(106).string(message.staked);
    }

    if (message.income !== "") {
      writer.uint32(114).string(message.income);
    }

    if (message.shares !== "") {
      writer.uint32(122).string(message.shares);
    }

    if (message.name !== "") {
      writer.uint32(162).string(message.name);
    }

    if (message.url !== "") {
      writer.uint32(170).string(message.url);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sale {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSale();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.treasury = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.tokenOut = reader.string();
          break;

        case 4:
          message.tokenIn = reader.string();
          break;

        case 5:
          message.tokenOutSupply = reader.string();
          break;

        case 6:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 8:
          message.round = (reader.int64() as Long);
          break;

        case 9:
          message.endRound = (reader.int64() as Long);
          break;

        case 10:
          message.outRemaining = reader.string();
          break;

        case 11:
          message.outSold = reader.string();
          break;

        case 12:
          message.outPerShare = reader.string();
          break;

        case 13:
          message.staked = reader.string();
          break;

        case 14:
          message.income = reader.string();
          break;

        case 15:
          message.shares = reader.string();
          break;

        case 20:
          message.name = reader.string();
          break;

        case 21:
          message.url = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Sale>): Sale {
    const message = createBaseSale();
    message.treasury = object.treasury ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.tokenOut = object.tokenOut ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOutSupply = object.tokenOutSupply ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.ZERO;
    message.endRound = object.endRound !== undefined && object.endRound !== null ? Long.fromValue(object.endRound) : Long.ZERO;
    message.outRemaining = object.outRemaining ?? "";
    message.outSold = object.outSold ?? "";
    message.outPerShare = object.outPerShare ?? "";
    message.staked = object.staked ?? "";
    message.income = object.income ?? "";
    message.shares = object.shares ?? "";
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    return message;
  }

};

function createBaseUserPosition(): UserPosition {
  return {
    shares: "",
    staked: "",
    outPerShare: "",
    spent: "",
    purchased: ""
  };
}

export const UserPosition = {
  encode(message: UserPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shares !== "") {
      writer.uint32(10).string(message.shares);
    }

    if (message.staked !== "") {
      writer.uint32(18).string(message.staked);
    }

    if (message.outPerShare !== "") {
      writer.uint32(26).string(message.outPerShare);
    }

    if (message.spent !== "") {
      writer.uint32(34).string(message.spent);
    }

    if (message.purchased !== "") {
      writer.uint32(42).string(message.purchased);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.shares = reader.string();
          break;

        case 2:
          message.staked = reader.string();
          break;

        case 3:
          message.outPerShare = reader.string();
          break;

        case 4:
          message.spent = reader.string();
          break;

        case 5:
          message.purchased = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UserPosition>): UserPosition {
    const message = createBaseUserPosition();
    message.shares = object.shares ?? "";
    message.staked = object.staked ?? "";
    message.outPerShare = object.outPerShare ?? "";
    message.spent = object.spent ?? "";
    message.purchased = object.purchased ?? "";
    return message;
  }

};