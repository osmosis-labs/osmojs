import * as _101 from "./wasm/v1/authz";
import * as _102 from "./wasm/v1/genesis";
import * as _103 from "./wasm/v1/ibc";
import * as _104 from "./wasm/v1/proposal";
import * as _105 from "./wasm/v1/query";
import * as _106 from "./wasm/v1/tx";
import * as _107 from "./wasm/v1/types";
import * as _265 from "./wasm/v1/tx.amino";
import * as _266 from "./wasm/v1/tx.registry";
import * as _267 from "./wasm/v1/query.lcd";
import * as _268 from "./wasm/v1/query.rpc.Query";
import * as _269 from "./wasm/v1/tx.rpc.msg";
import * as _345 from "./lcd";
import * as _346 from "./rpc.query";
import * as _347 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._265,
      ..._266,
      ..._267,
      ..._268,
      ..._269
    };
  }
  export const ClientFactory = {
    ..._345,
    ..._346,
    ..._347
  };
}