import * as _46 from "./abci/types";
import * as _47 from "./crypto/keys";
import * as _48 from "./crypto/proof";
import * as _49 from "./libs/bits/types";
import * as _50 from "./p2p/types";
import * as _51 from "./types/block";
import * as _52 from "./types/evidence";
import * as _53 from "./types/params";
import * as _54 from "./types/types";
import * as _55 from "./types/validator";
import * as _56 from "./version/types";
export namespace tendermint {
  export const abci = { ..._46
  };
  export const crypto = { ..._47,
    ..._48
  };
  export namespace libs {
    export const bits = { ..._49
    };
  }
  export const p2p = { ..._50
  };
  export const types = { ..._51,
    ..._52,
    ..._53,
    ..._54,
    ..._55
  };
  export const version = { ..._56
  };
}