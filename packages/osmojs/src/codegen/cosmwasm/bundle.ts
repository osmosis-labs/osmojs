import * as _45 from "./wasm/v1/genesis";
import * as _46 from "./wasm/v1/ibc";
import * as _47 from "./wasm/v1/proposal";
import * as _48 from "./wasm/v1/query";
import * as _49 from "./wasm/v1/tx";
import * as _50 from "./wasm/v1/types";
import * as _176 from "./wasm/v1/tx.amino";
import * as _177 from "./wasm/v1/tx.registry";
import * as _178 from "./wasm/v1/query.lcd";
import * as _179 from "./wasm/v1/query.rpc.Query";
import * as _180 from "./wasm/v1/tx.rpc.msg";
import * as _250 from "./lcd";
import * as _251 from "./rpc.query";
import * as _252 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180
    };
  }
  export const ClientFactory = { ..._250,
    ..._251,
    ..._252
  };
}