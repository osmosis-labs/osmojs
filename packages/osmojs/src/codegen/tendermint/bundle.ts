import * as _80 from "./abci/types";
import * as _81 from "./crypto/keys";
import * as _82 from "./crypto/proof";
import * as _83 from "./libs/bits/types";
import * as _84 from "./p2p/types";
import * as _85 from "./types/block";
import * as _86 from "./types/evidence";
import * as _87 from "./types/params";
import * as _88 from "./types/types";
import * as _89 from "./types/validator";
import * as _90 from "./version/types";
export namespace tendermint {
  export const abci = { ..._80
  };
  export const crypto = { ..._81,
    ..._82
  };
  export namespace libs {
    export const bits = { ..._83
    };
  }
  export const p2p = { ..._84
  };
  export const types = { ..._85,
    ..._86,
    ..._87,
    ..._88,
    ..._89
  };
  export const version = { ..._90
  };
}