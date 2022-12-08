import * as _79 from "./abci/types";
import * as _80 from "./crypto/keys";
import * as _81 from "./crypto/proof";
import * as _82 from "./libs/bits/types";
import * as _83 from "./p2p/types";
import * as _84 from "./types/block";
import * as _85 from "./types/evidence";
import * as _86 from "./types/params";
import * as _87 from "./types/types";
import * as _88 from "./types/validator";
import * as _89 from "./version/types";
export namespace tendermint {
  export const abci = { ..._79
  };
  export const crypto = { ..._80,
    ..._81
  };
  export namespace libs {
    export const bits = { ..._82
    };
  }
  export const p2p = { ..._83
  };
  export const types = { ..._84,
    ..._85,
    ..._86,
    ..._87,
    ..._88
  };
  export const version = { ..._89
  };
}