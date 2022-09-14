import * as _85 from "./wasm/v1/genesis";
import * as _86 from "./wasm/v1/ibc";
import * as _87 from "./wasm/v1/proposal";
import * as _88 from "./wasm/v1/query";
import * as _89 from "./wasm/v1/tx";
import * as _90 from "./wasm/v1/types";
import * as _244 from "./wasm/v1/tx.amino";
import * as _245 from "./wasm/v1/tx.registry";
import * as _246 from "./wasm/v1/query.lcd";
import * as _247 from "./wasm/v1/query.rpc.query";
import * as _248 from "./wasm/v1/tx.rpc.msg";
import * as _312 from "./lcd";
import * as _313 from "./rpc.query";
import * as _314 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._244,
      ..._245,
      ..._246,
      ..._247,
      ..._248
    };
  }
  export const ClientFactory = { ..._312,
    ..._313,
    ..._314
  };
}