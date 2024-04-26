//@ts-nocheck
import * as _118 from "./wasm/v1/authz";
import * as _119 from "./wasm/v1/genesis";
import * as _120 from "./wasm/v1/ibc";
import * as _121 from "./wasm/v1/proposal_legacy";
import * as _122 from "./wasm/v1/query";
import * as _123 from "./wasm/v1/tx";
import * as _124 from "./wasm/v1/types";
import * as _330 from "./wasm/v1/tx.amino";
import * as _331 from "./wasm/v1/tx.registry";
import * as _332 from "./wasm/v1/query.lcd";
import * as _333 from "./wasm/v1/query.rpc.Query";
import * as _334 from "./wasm/v1/tx.rpc.msg";
import * as _431 from "./lcd";
import * as _432 from "./rpc.query";
import * as _433 from "./rpc.tx";
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
      ..._330,
      ..._331,
      ..._332,
      ..._333,
      ..._334
    };
  }
  export const ClientFactory = {
    ..._431,
    ..._432,
    ..._433
  };
}