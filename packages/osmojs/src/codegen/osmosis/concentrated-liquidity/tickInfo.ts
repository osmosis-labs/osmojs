import { DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface TickInfo {
  liquidityGross: string;
  liquidityNet: string;
  feeGrowthOutside: DecCoin[];
  uptimeTrackers: UptimeTracker[];
}
export interface TickInfoSDKType {
  liquidity_gross: string;
  liquidity_net: string;
  fee_growth_outside: DecCoinSDKType[];
  uptime_trackers: UptimeTrackerSDKType[];
}
export interface UptimeTracker {
  uptimeGrowthOutside: DecCoin[];
}
export interface UptimeTrackerSDKType {
  uptime_growth_outside: DecCoinSDKType[];
}

function createBaseTickInfo(): TickInfo {
  return {
    liquidityGross: "",
    liquidityNet: "",
    feeGrowthOutside: [],
    uptimeTrackers: []
  };
}

export const TickInfo = {
  encode(message: TickInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidityGross !== "") {
      writer.uint32(10).string(message.liquidityGross);
    }

    if (message.liquidityNet !== "") {
      writer.uint32(18).string(message.liquidityNet);
    }

    for (const v of message.feeGrowthOutside) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.uptimeTrackers) {
      UptimeTracker.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TickInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.liquidityGross = reader.string();
          break;

        case 2:
          message.liquidityNet = reader.string();
          break;

        case 3:
          message.feeGrowthOutside.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.uptimeTrackers.push(UptimeTracker.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<TickInfo>): TickInfo {
    const message = createBaseTickInfo();
    message.liquidityGross = object.liquidityGross ?? "";
    message.liquidityNet = object.liquidityNet ?? "";
    message.feeGrowthOutside = object.feeGrowthOutside?.map(e => DecCoin.fromPartial(e)) || [];
    message.uptimeTrackers = object.uptimeTrackers?.map(e => UptimeTracker.fromPartial(e)) || [];
    return message;
  }

};

function createBaseUptimeTracker(): UptimeTracker {
  return {
    uptimeGrowthOutside: []
  };
}

export const UptimeTracker = {
  encode(message: UptimeTracker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.uptimeGrowthOutside) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UptimeTracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUptimeTracker();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.uptimeGrowthOutside.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<UptimeTracker>): UptimeTracker {
    const message = createBaseUptimeTracker();
    message.uptimeGrowthOutside = object.uptimeGrowthOutside?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};