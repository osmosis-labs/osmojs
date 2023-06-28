import * as _96 from "./wasm/v1/authz";
import * as _97 from "./wasm/v1/genesis";
import * as _98 from "./wasm/v1/ibc";
import * as _99 from "./wasm/v1/proposal";
import * as _100 from "./wasm/v1/query";
import * as _101 from "./wasm/v1/tx";
import * as _102 from "./wasm/v1/types";
import * as _259 from "./wasm/v1/tx.amino";
import * as _260 from "./wasm/v1/tx.registry";
import * as _261 from "./wasm/v1/query.lcd";
import * as _262 from "./wasm/v1/query.rpc.Query";
import * as _263 from "./wasm/v1/tx.rpc.msg";
import * as _342 from "./lcd";
import * as _343 from "./rpc.query";
import * as _344 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._259,
      ..._260,
      ..._261,
      ..._262,
      ..._263
    };
  }
  export const ClientFactory = { ..._342,
    ..._343,
    ..._344
  };
}