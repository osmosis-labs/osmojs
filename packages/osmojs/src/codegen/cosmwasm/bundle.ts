import * as _46 from "./wasm/v1/genesis";
import * as _47 from "./wasm/v1/ibc";
import * as _48 from "./wasm/v1/proposal";
import * as _49 from "./wasm/v1/query";
import * as _50 from "./wasm/v1/tx";
import * as _51 from "./wasm/v1/types";
import * as _204 from "./wasm/v1/tx.amino";
import * as _205 from "./wasm/v1/tx.registry";
import * as _206 from "./wasm/v1/query.lcd";
import * as _207 from "./wasm/v1/query.rpc.Query";
import * as _208 from "./wasm/v1/tx.rpc.msg";
import * as _301 from "./lcd";
import * as _302 from "./rpc.query";
import * as _303 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._208
    };
  }
  export const ClientFactory = { ..._301,
    ..._302,
    ..._303
  };
}