import * as _45 from "./wasm/v1/genesis";
import * as _46 from "./wasm/v1/ibc";
import * as _47 from "./wasm/v1/proposal";
import * as _48 from "./wasm/v1/query";
import * as _49 from "./wasm/v1/tx";
import * as _50 from "./wasm/v1/types";
import * as _194 from "./wasm/v1/tx.amino";
import * as _195 from "./wasm/v1/tx.registry";
import * as _196 from "./wasm/v1/query.lcd";
import * as _197 from "./wasm/v1/query.rpc.Query";
import * as _198 from "./wasm/v1/tx.rpc.msg";
import * as _289 from "./lcd";
import * as _290 from "./rpc.query";
import * as _291 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._198
    };
  }
  export const ClientFactory = { ..._289,
    ..._290,
    ..._291
  };
}