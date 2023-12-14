import * as _93 from "./wasm/v1/authz";
import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _246 from "./wasm/v1/tx.amino";
import * as _247 from "./wasm/v1/tx.registry";
import * as _248 from "./wasm/v1/query.lcd";
import * as _249 from "./wasm/v1/query.rpc.Query";
import * as _250 from "./wasm/v1/tx.rpc.msg";
import * as _326 from "./lcd";
import * as _327 from "./rpc.query";
import * as _328 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._246,
      ..._247,
      ..._248,
      ..._249,
      ..._250
    };
  }
  export const ClientFactory = {
    ..._326,
    ..._327,
    ..._328
  };
}