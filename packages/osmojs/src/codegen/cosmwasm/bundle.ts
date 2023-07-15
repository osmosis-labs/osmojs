import * as _82 from "./wasm/v1/authz";
import * as _83 from "./wasm/v1/genesis";
import * as _84 from "./wasm/v1/ibc";
import * as _85 from "./wasm/v1/proposal";
import * as _86 from "./wasm/v1/query";
import * as _87 from "./wasm/v1/tx";
import * as _88 from "./wasm/v1/types";
import * as _255 from "./wasm/v1/tx.amino";
import * as _256 from "./wasm/v1/tx.registry";
import * as _257 from "./wasm/v1/query.lcd";
import * as _258 from "./wasm/v1/query.rpc.Query";
import * as _259 from "./wasm/v1/tx.rpc.msg";
import * as _338 from "./lcd";
import * as _339 from "./rpc.query";
import * as _340 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._255,
      ..._256,
      ..._257,
      ..._258,
      ..._259
    };
  }
  export const ClientFactory = {
    ..._338,
    ..._339,
    ..._340
  };
}