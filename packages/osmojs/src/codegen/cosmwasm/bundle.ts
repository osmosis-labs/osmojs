import * as _97 from "./wasm/v1/authz";
import * as _98 from "./wasm/v1/genesis";
import * as _99 from "./wasm/v1/ibc";
import * as _100 from "./wasm/v1/proposal";
import * as _101 from "./wasm/v1/query";
import * as _102 from "./wasm/v1/tx";
import * as _103 from "./wasm/v1/types";
import * as _256 from "./wasm/v1/tx.amino";
import * as _257 from "./wasm/v1/tx.registry";
import * as _258 from "./wasm/v1/query.lcd";
import * as _259 from "./wasm/v1/query.rpc.Query";
import * as _260 from "./wasm/v1/tx.rpc.msg";
import * as _336 from "./lcd";
import * as _337 from "./rpc.query";
import * as _338 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._256,
      ..._257,
      ..._258,
      ..._259,
      ..._260
    };
  }
  export const ClientFactory = { ..._336,
    ..._337,
    ..._338
  };
}