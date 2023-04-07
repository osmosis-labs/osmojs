import * as _100 from "./wasm/v1/authz";
import * as _101 from "./wasm/v1/genesis";
import * as _102 from "./wasm/v1/ibc";
import * as _103 from "./wasm/v1/proposal";
import * as _104 from "./wasm/v1/query";
import * as _105 from "./wasm/v1/tx";
import * as _106 from "./wasm/v1/types";
import * as _261 from "./wasm/v1/tx.amino";
import * as _262 from "./wasm/v1/tx.registry";
import * as _263 from "./wasm/v1/query.lcd";
import * as _264 from "./wasm/v1/query.rpc.Query";
import * as _265 from "./wasm/v1/tx.rpc.msg";
import * as _341 from "./lcd";
import * as _342 from "./rpc.query";
import * as _343 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._261,
      ..._262,
      ..._263,
      ..._264,
      ..._265
    };
  }
  export const ClientFactory = { ..._341,
    ..._342,
    ..._343
  };
}