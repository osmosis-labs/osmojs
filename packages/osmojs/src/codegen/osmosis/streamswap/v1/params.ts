import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the streamswap module */

export interface Params {
  /**
   * fee charged when creating a new sale. The fee will go to the
   * sale_fee_recipient unless it is not defined (empty).
   */
  saleCreationFee: Coin[];
  /** bech32 address of the fee recipient */

  saleCreationFeeRecipient: string;
  /**
   * minimum amount duration of time between the sale creation and the sale
   * start time.
   */

  minDurationUntilStartTime?: Duration;
  /** minimum duration for every new sale. */

  minSaleDuration?: Duration;
}
/** Params holds parameters for the streamswap module */

export interface ParamsSDKType {
  /**
   * fee charged when creating a new sale. The fee will go to the
   * sale_fee_recipient unless it is not defined (empty).
   */
  sale_creation_fee: CoinSDKType[];
  /** bech32 address of the fee recipient */

  sale_creation_fee_recipient: string;
  /**
   * minimum amount duration of time between the sale creation and the sale
   * start time.
   */

  min_duration_until_start_time?: DurationSDKType;
  /** minimum duration for every new sale. */

  min_sale_duration?: DurationSDKType;
}

function createBaseParams(): Params {
  return {
    saleCreationFee: [],
    saleCreationFeeRecipient: "",
    minDurationUntilStartTime: undefined,
    minSaleDuration: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.saleCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.saleCreationFeeRecipient !== "") {
      writer.uint32(18).string(message.saleCreationFeeRecipient);
    }

    if (message.minDurationUntilStartTime !== undefined) {
      Duration.encode(message.minDurationUntilStartTime, writer.uint32(26).fork()).ldelim();
    }

    if (message.minSaleDuration !== undefined) {
      Duration.encode(message.minSaleDuration, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.saleCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.saleCreationFeeRecipient = reader.string();
          break;

        case 3:
          message.minDurationUntilStartTime = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.minSaleDuration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.saleCreationFee = object.saleCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.saleCreationFeeRecipient = object.saleCreationFeeRecipient ?? "";
    message.minDurationUntilStartTime = object.minDurationUntilStartTime !== undefined && object.minDurationUntilStartTime !== null ? Duration.fromPartial(object.minDurationUntilStartTime) : undefined;
    message.minSaleDuration = object.minSaleDuration !== undefined && object.minSaleDuration !== null ? Duration.fromPartial(object.minSaleDuration) : undefined;
    return message;
  }

};