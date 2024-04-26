//@ts-nocheck
import * as _118 from "./wasm/v1/authz";
import * as _119 from "./wasm/v1/genesis";
import * as _120 from "./wasm/v1/ibc";
import * as _121 from "./wasm/v1/proposal_legacy";
import * as _122 from "./wasm/v1/query";
import * as _123 from "./wasm/v1/tx";
import * as _124 from "./wasm/v1/types";
import * as _325 from "./wasm/v1/tx.amino";
import * as _326 from "./wasm/v1/tx.registry";
import * as _327 from "./wasm/v1/query.lcd";
import * as _328 from "./wasm/v1/query.rpc.Query";
import * as _329 from "./wasm/v1/tx.rpc.msg";
import * as _421 from "./lcd";
import * as _422 from "./rpc.query";
import * as _423 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._325,
      ..._326,
      ..._327,
      ..._328,
      ..._329
    };
  }
  export const ClientFactory = {
    ..._421,
    ..._422,
    ..._423
  };
}