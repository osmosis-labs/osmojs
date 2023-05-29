import * as _49 from "./abci/types";
import * as _50 from "./crypto/keys";
import * as _51 from "./crypto/proof";
import * as _52 from "./libs/bits/types";
import * as _53 from "./p2p/types";
import * as _54 from "./types/block";
import * as _55 from "./types/evidence";
import * as _56 from "./types/params";
import * as _57 from "./types/types";
import * as _58 from "./types/validator";
import * as _59 from "./version/types";
export namespace tendermint {
  export const abci = { ..._49
  };
  export const crypto = { ..._50,
    ..._51
  };
  export namespace libs {
    export const bits = { ..._52
    };
  }
  export const p2p = { ..._53
  };
  export const types = { ..._54,
    ..._55,
    ..._56,
    ..._57,
    ..._58
  };
  export const version = { ..._59
  };
}