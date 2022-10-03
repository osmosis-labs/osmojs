import * as _128 from "./abci/types";
import * as _129 from "./crypto/keys";
import * as _130 from "./crypto/proof";
import * as _131 from "./libs/bits/types";
import * as _132 from "./p2p/types";
import * as _133 from "./types/block";
import * as _134 from "./types/evidence";
import * as _135 from "./types/params";
import * as _136 from "./types/types";
import * as _137 from "./types/validator";
import * as _138 from "./version/types";
export namespace tendermint {
  export const abci = { ..._128
  };
  export const crypto = { ..._129,
    ..._130
  };
  export namespace libs {
    export const bits = { ..._131
    };
  }
  export const p2p = { ..._132
  };
  export const types = { ..._133,
    ..._134,
    ..._135,
    ..._136,
    ..._137
  };
  export const version = { ..._138
  };
}