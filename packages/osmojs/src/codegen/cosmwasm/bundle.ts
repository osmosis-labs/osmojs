import * as _132 from "./wasm/v1/authz";
import * as _133 from "./wasm/v1/genesis";
import * as _134 from "./wasm/v1/ibc";
import * as _135 from "./wasm/v1/proposal_legacy";
import * as _136 from "./wasm/v1/query";
import * as _137 from "./wasm/v1/tx";
import * as _138 from "./wasm/v1/types";
import * as _324 from "./wasm/v1/tx.amino";
import * as _325 from "./wasm/v1/tx.registry";
import * as _326 from "./wasm/v1/query.lcd";
import * as _327 from "./wasm/v1/query.rpc.Query";
import * as _328 from "./wasm/v1/tx.rpc.msg";
import * as _412 from "./lcd";
import * as _413 from "./rpc.query";
import * as _414 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._324,
      ..._325,
      ..._326,
      ..._327,
      ..._328
    };
  }
  export const ClientFactory = {
    ..._412,
    ..._413,
    ..._414
  };
}