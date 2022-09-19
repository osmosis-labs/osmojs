import * as _89 from "./wasm/v1/genesis";
import * as _90 from "./wasm/v1/ibc";
import * as _91 from "./wasm/v1/proposal";
import * as _92 from "./wasm/v1/query";
import * as _93 from "./wasm/v1/tx";
import * as _94 from "./wasm/v1/types";
import * as _253 from "./wasm/v1/tx.amino";
import * as _254 from "./wasm/v1/tx.registry";
import * as _255 from "./wasm/v1/query.lcd";
import * as _256 from "./wasm/v1/query.rpc.query";
import * as _257 from "./wasm/v1/tx.rpc.msg";
import * as _321 from "./lcd";
import * as _322 from "./rpc.query";
import * as _323 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._253,
      ..._254,
      ..._255,
      ..._256,
      ..._257
    };
  }
  export const ClientFactory = { ..._321,
    ..._322,
    ..._323
  };
}