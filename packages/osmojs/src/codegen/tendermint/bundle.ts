import * as _42 from "./abci/types";
import * as _43 from "./crypto/keys";
import * as _44 from "./crypto/proof";
import * as _45 from "./libs/bits/types";
import * as _46 from "./p2p/types";
import * as _47 from "./types/block";
import * as _48 from "./types/evidence";
import * as _49 from "./types/params";
import * as _50 from "./types/types";
import * as _51 from "./types/validator";
import * as _52 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._42
  };
  export const crypto = {
    ..._43,
    ..._44
  };
  export namespace libs {
    export const bits = {
      ..._45
    };
  }
  export const p2p = {
    ..._46
  };
  export const types = {
    ..._47,
    ..._48,
    ..._49,
    ..._50,
    ..._51
  };
  export const version = {
    ..._52
  };
}