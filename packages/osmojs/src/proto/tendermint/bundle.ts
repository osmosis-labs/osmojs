import * as _172 from "./abci/types";
import * as _173 from "./crypto/keys";
import * as _174 from "./crypto/proof";
import * as _175 from "./libs/bits/types";
import * as _176 from "./p2p/types";
import * as _177 from "./types/block";
import * as _178 from "./types/evidence";
import * as _179 from "./types/params";
import * as _180 from "./types/types";
import * as _181 from "./types/validator";
import * as _182 from "./version/types";
export namespace tendermint {
  export const abci = { ..._172
  };
  export const crypto = { ..._173,
    ..._174
  };
  export namespace libs {
    export const bits = { ..._175
    };
  }
  export const p2p = { ..._176
  };
  export const types = { ..._177,
    ..._178,
    ..._179,
    ..._180,
    ..._181
  };
  export const version = { ..._182
  };
}