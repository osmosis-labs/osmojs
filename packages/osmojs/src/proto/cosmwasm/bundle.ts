import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _261 from "./wasm/v1/tx.amino";
import * as _262 from "./wasm/v1/tx.registry";
import * as _263 from "./wasm/v1/query.lcd";
import * as _264 from "./wasm/v1/query.rpc.query";
import * as _265 from "./wasm/v1/tx.rpc.msg";
import * as _329 from "./lcd";
import * as _330 from "./rpc.query";
import * as _331 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._261,
      ..._262,
      ..._263,
      ..._264,
      ..._265
    };
  }
  export const ClientFactory = { ..._329,
    ..._330,
    ..._331
  };
}