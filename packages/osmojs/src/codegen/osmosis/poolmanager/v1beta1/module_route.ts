import * as _m0 from "protobufjs/minimal";
/** PoolType is an enumeration of all supported pool types. */

export enum PoolType {
  /** Balancer - Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. */
  Balancer = 0,

  /**
   * Stableswap - Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
   * in x/gamm.
   */
  Stableswap = 1,

  /**
   * Concentrated - Concentrated is the pool model specific to concentrated liquidity. It is
   * defined in x/concentrated-liquidity.
   */
  Concentrated = 2,
  UNRECOGNIZED = -1,
}
/** PoolType is an enumeration of all supported pool types. */

export enum PoolTypeSDKType {
  /** Balancer - Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. */
  Balancer = 0,

  /**
   * Stableswap - Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
   * in x/gamm.
   */
  Stableswap = 1,

  /**
   * Concentrated - Concentrated is the pool model specific to concentrated liquidity. It is
   * defined in x/concentrated-liquidity.
   */
  Concentrated = 2,
  UNRECOGNIZED = -1,
}
export function poolTypeFromJSON(object: any): PoolType {
  switch (object) {
    case 0:
    case "Balancer":
      return PoolType.Balancer;

    case 1:
    case "Stableswap":
      return PoolType.Stableswap;

    case 2:
    case "Concentrated":
      return PoolType.Concentrated;

    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolType.UNRECOGNIZED;
  }
}
export function poolTypeToJSON(object: PoolType): string {
  switch (object) {
    case PoolType.Balancer:
      return "Balancer";

    case PoolType.Stableswap:
      return "Stableswap";

    case PoolType.Concentrated:
      return "Concentrated";

    case PoolType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */

export interface ModuleRoute {
  /** pool_type specifies the type of the pool */
  poolType: PoolType;
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */

export interface ModuleRouteSDKType {
  /** pool_type specifies the type of the pool */
  pool_type: PoolTypeSDKType;
}

function createBaseModuleRoute(): ModuleRoute {
  return {
    poolType: 0
  };
}

export const ModuleRoute = {
  encode(message: ModuleRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolType !== 0) {
      writer.uint32(8).int32(message.poolType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<ModuleRoute>): ModuleRoute {
    const message = createBaseModuleRoute();
    message.poolType = object.poolType ?? 0;
    return message;
  }

};