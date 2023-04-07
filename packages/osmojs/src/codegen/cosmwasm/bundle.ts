import * as _86 from "./wasm/v1/authz";
import * as _87 from "./wasm/v1/genesis";
import * as _88 from "./wasm/v1/ibc";
import * as _89 from "./wasm/v1/proposal";
import * as _90 from "./wasm/v1/query";
import * as _91 from "./wasm/v1/tx";
import * as _92 from "./wasm/v1/types";
import * as _225 from "./wasm/v1/tx.amino";
import * as _226 from "./wasm/v1/tx.registry";
import * as _227 from "./wasm/v1/query.lcd";
import * as _228 from "./wasm/v1/query.rpc.Query";
import * as _229 from "./wasm/v1/tx.rpc.msg";
import * as _305 from "./lcd";
import * as _306 from "./rpc.query";
import * as _307 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._229
    };
  }
  export const ClientFactory = { ..._305,
    ..._306,
    ..._307
  };
}