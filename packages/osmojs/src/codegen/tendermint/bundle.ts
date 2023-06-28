import * as _45 from "./abci/types";
import * as _46 from "./crypto/keys";
import * as _47 from "./crypto/proof";
import * as _48 from "./libs/bits/types";
import * as _49 from "./p2p/types";
import * as _50 from "./types/block";
import * as _51 from "./types/evidence";
import * as _52 from "./types/params";
import * as _53 from "./types/types";
import * as _54 from "./types/validator";
import * as _55 from "./version/types";
export namespace tendermint {
  export const abci = { ..._45
  };
  export const crypto = { ..._46,
    ..._47
  };
  export namespace libs {
    export const bits = { ..._48
    };
  }
  export const p2p = { ..._49
  };
  export const types = { ..._50,
    ..._51,
    ..._52,
    ..._53,
    ..._54
  };
  export const version = { ..._55
  };
}