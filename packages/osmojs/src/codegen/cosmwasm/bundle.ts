import * as _93 from "./wasm/v1/authz";
import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _253 from "./wasm/v1/tx.amino";
import * as _254 from "./wasm/v1/tx.registry";
import * as _255 from "./wasm/v1/query.lcd";
import * as _256 from "./wasm/v1/query.rpc.Query";
import * as _257 from "./wasm/v1/tx.rpc.msg";
import * as _336 from "./lcd";
import * as _337 from "./rpc.query";
import * as _338 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._253,
      ..._254,
      ..._255,
      ..._256,
      ..._257
    };
  }
  export const ClientFactory = { ..._336,
    ..._337,
    ..._338
  };
}