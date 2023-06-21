import * as _100 from "./wasm/v1/authz";
import * as _101 from "./wasm/v1/genesis";
import * as _102 from "./wasm/v1/ibc";
import * as _103 from "./wasm/v1/proposal";
import * as _104 from "./wasm/v1/query";
import * as _105 from "./wasm/v1/tx";
import * as _106 from "./wasm/v1/types";
import * as _268 from "./wasm/v1/tx.amino";
import * as _269 from "./wasm/v1/tx.registry";
import * as _270 from "./wasm/v1/query.lcd";
import * as _271 from "./wasm/v1/query.rpc.Query";
import * as _272 from "./wasm/v1/tx.rpc.msg";
import * as _351 from "./lcd";
import * as _352 from "./rpc.query";
import * as _353 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._268,
      ..._269,
      ..._270,
      ..._271,
      ..._272
    };
  }
  export const ClientFactory = { ..._351,
    ..._352,
    ..._353
  };
}