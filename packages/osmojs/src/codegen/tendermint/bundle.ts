import * as _73 from "./abci/types";
import * as _74 from "./crypto/keys";
import * as _75 from "./crypto/proof";
import * as _76 from "./libs/bits/types";
import * as _77 from "./p2p/types";
import * as _78 from "./types/block";
import * as _79 from "./types/evidence";
import * as _80 from "./types/params";
import * as _81 from "./types/types";
import * as _82 from "./types/validator";
import * as _83 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._73
  };
  export const crypto = {
    ..._74,
    ..._75
  };
  export namespace libs {
    export const bits = {
      ..._76
    };
  }
  export const p2p = {
    ..._77
  };
  export const types = {
    ..._78,
    ..._79,
    ..._80,
    ..._81,
    ..._82
  };
  export const version = {
    ..._83
  };
}