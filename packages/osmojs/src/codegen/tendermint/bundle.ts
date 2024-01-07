import * as _75 from "./abci/types";
import * as _76 from "./crypto/keys";
import * as _77 from "./crypto/proof";
import * as _78 from "./libs/bits/types";
import * as _79 from "./p2p/types";
import * as _80 from "./types/block";
import * as _81 from "./types/evidence";
import * as _82 from "./types/params";
import * as _83 from "./types/types";
import * as _84 from "./types/validator";
import * as _85 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._75
  };
  export const crypto = {
    ..._76,
    ..._77
  };
  export namespace libs {
    export const bits = {
      ..._78
    };
  }
  export const p2p = {
    ..._79
  };
  export const types = {
    ..._80,
    ..._81,
    ..._82,
    ..._83,
    ..._84
  };
  export const version = {
    ..._85
  };
}