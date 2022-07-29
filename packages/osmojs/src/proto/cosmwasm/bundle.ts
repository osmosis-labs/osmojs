import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _258 from "./wasm/v1/tx.amino";
import * as _259 from "./wasm/v1/tx.registry";
import * as _260 from "./wasm/v1/query.lcd";
import * as _261 from "./wasm/v1/query.rpc.query";
import * as _262 from "./wasm/v1/tx.rpc.msg";
import * as _326 from "./lcd";
import * as _327 from "./rpc.query";
import * as _328 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._258,
      ..._259,
      ..._260,
      ..._261,
      ..._262
    };
  }
  export const ClientFactory = { ..._326,
    ..._327,
    ..._328
  };
}