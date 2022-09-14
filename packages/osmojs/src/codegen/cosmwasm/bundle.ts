import * as _85 from "./wasm/v1/genesis";
import * as _86 from "./wasm/v1/ibc";
import * as _87 from "./wasm/v1/proposal";
import * as _88 from "./wasm/v1/query";
import * as _89 from "./wasm/v1/tx";
import * as _90 from "./wasm/v1/types";
import * as _242 from "./wasm/v1/tx.amino";
import * as _243 from "./wasm/v1/tx.registry";
import * as _244 from "./wasm/v1/query.lcd";
import * as _245 from "./wasm/v1/query.rpc.query";
import * as _246 from "./wasm/v1/tx.rpc.msg";
import * as _310 from "./lcd";
import * as _311 from "./rpc.query";
import * as _312 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._246
    };
  }
  export const ClientFactory = { ..._310,
    ..._311,
    ..._312
  };
}