import * as _81 from "./abci/types";
import * as _82 from "./crypto/keys";
import * as _83 from "./crypto/proof";
import * as _84 from "./libs/bits/types";
import * as _85 from "./p2p/types";
import * as _86 from "./types/block";
import * as _87 from "./types/evidence";
import * as _88 from "./types/params";
import * as _89 from "./types/types";
import * as _90 from "./types/validator";
import * as _91 from "./version/types";
export namespace tendermint {
  export const abci = { ..._81
  };
  export const crypto = { ..._82,
    ..._83
  };
  export namespace libs {
    export const bits = { ..._84
    };
  }
  export const p2p = { ..._85
  };
  export const types = { ..._86,
    ..._87,
    ..._88,
    ..._89,
    ..._90
  };
  export const version = { ..._91
  };
}