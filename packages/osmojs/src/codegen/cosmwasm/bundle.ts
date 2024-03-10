import * as _130 from "./wasm/v1/authz";
import * as _131 from "./wasm/v1/genesis";
import * as _132 from "./wasm/v1/ibc";
import * as _133 from "./wasm/v1/proposal_legacy";
import * as _134 from "./wasm/v1/query";
import * as _135 from "./wasm/v1/tx";
import * as _136 from "./wasm/v1/types";
import * as _325 from "./wasm/v1/tx.amino";
import * as _326 from "./wasm/v1/tx.registry";
import * as _327 from "./wasm/v1/query.lcd";
import * as _328 from "./wasm/v1/query.rpc.Query";
import * as _329 from "./wasm/v1/tx.rpc.msg";
import * as _418 from "./lcd";
import * as _419 from "./rpc.query";
import * as _420 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._325,
      ..._326,
      ..._327,
      ..._328,
      ..._329
    };
  }
  export const ClientFactory = {
    ..._418,
    ..._419,
    ..._420
  };
}