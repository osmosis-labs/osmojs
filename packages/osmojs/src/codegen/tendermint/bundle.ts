import * as _166 from "./abci/types";
import * as _167 from "./crypto/keys";
import * as _168 from "./crypto/proof";
import * as _169 from "./libs/bits/types";
import * as _170 from "./p2p/types";
import * as _171 from "./types/block";
import * as _172 from "./types/evidence";
import * as _173 from "./types/params";
import * as _174 from "./types/types";
import * as _175 from "./types/validator";
import * as _176 from "./version/types";
export namespace tendermint {
  export const abci = { ..._166
  };
  export const crypto = { ..._167,
    ..._168
  };
  export namespace libs {
    export const bits = { ..._169
    };
  }
  export const p2p = { ..._170
  };
  export const types = { ..._171,
    ..._172,
    ..._173,
    ..._174,
    ..._175
  };
  export const version = { ..._176
  };
}