import * as _132 from "./claim/v1beta1/claim";
import * as _133 from "./claim/v1beta1/genesis";
import * as _134 from "./claim/v1beta1/params";
import * as _135 from "./claim/v1beta1/query";
import * as _136 from "./epochs/genesis";
import * as _137 from "./epochs/query";
import * as _138 from "./gamm/pool-models/balancer/balancerPool";
import * as _139 from "./gamm/pool-models/balancer/tx";
import * as _140 from "./gamm/v1beta1/genesis";
import * as _141 from "./gamm/v1beta1/query";
import * as _142 from "./gamm/v1beta1/tx";
import * as _143 from "./incentives/gauge";
import * as _144 from "./incentives/genesis";
import * as _145 from "./incentives/params";
import * as _146 from "./incentives/query";
import * as _147 from "./incentives/tx";
import * as _148 from "./lockup/genesis";
import * as _149 from "./lockup/lock";
import * as _150 from "./lockup/query";
import * as _151 from "./lockup/tx";
import * as _152 from "./mint/v1beta1/genesis";
import * as _153 from "./mint/v1beta1/mint";
import * as _154 from "./mint/v1beta1/query";
import * as _155 from "./pool-incentives/v1beta1/genesis";
import * as _156 from "./pool-incentives/v1beta1/gov";
import * as _157 from "./pool-incentives/v1beta1/incentives";
import * as _158 from "./pool-incentives/v1beta1/query";
import * as _159 from "./store/v1beta1/tree";
import * as _160 from "./superfluid/genesis";
import * as _161 from "./superfluid/params";
import * as _162 from "./superfluid/query";
import * as _163 from "./superfluid/superfluid";
import * as _164 from "./superfluid/tx";
import * as _165 from "./txfees/v1beta1/feetoken";
import * as _166 from "./txfees/v1beta1/genesis";
import * as _167 from "./txfees/v1beta1/gov";
import * as _168 from "./txfees/v1beta1/query";
import * as _261 from "./gamm/v1beta1/tx.amino";
import * as _262 from "./incentives/tx.amino";
import * as _263 from "./lockup/tx.amino";
import * as _264 from "./superfluid/tx.amino";
import * as _265 from "./gamm/v1beta1/tx.registry";
import * as _266 from "./incentives/tx.registry";
import * as _267 from "./lockup/tx.registry";
import * as _268 from "./superfluid/tx.registry";
import * as _269 from "./claim/v1beta1/query.rpc.query";
import * as _270 from "./epochs/query.rpc.query";
import * as _271 from "./gamm/v1beta1/query.rpc.query";
import * as _272 from "./incentives/query.rpc.query";
import * as _273 from "./lockup/query.rpc.query";
import * as _274 from "./mint/v1beta1/query.rpc.query";
import * as _275 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _276 from "./superfluid/query.rpc.query";
import * as _277 from "./txfees/v1beta1/query.rpc.query";
import * as _278 from "./gamm/v1beta1/tx.rpc.msg";
import * as _279 from "./incentives/tx.rpc.msg";
import * as _280 from "./lockup/tx.rpc.msg";
import * as _281 from "./superfluid/tx.rpc.msg";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._269
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._136,
      ..._137,
      ..._270
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._261,
      ..._265,
      ..._271,
      ..._278
    };
  }
  export const incentives = { ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._262,
    ..._266,
    ..._272,
    ..._279
  };
  export const lockup = { ..._148,
    ..._149,
    ..._150,
    ..._151,
    ..._263,
    ..._267,
    ..._273,
    ..._280
  };
  export namespace mint {
    export const v1beta1 = { ..._152,
      ..._153,
      ..._154,
      ..._274
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._275
    };
  }
  export namespace store {
    export const v1beta1 = { ..._159
    };
  }
  export const superfluid = { ..._160,
    ..._161,
    ..._162,
    ..._163,
    ..._164,
    ..._264,
    ..._268,
    ..._276,
    ..._281
  };
  export namespace txfees {
    export const v1beta1 = { ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._277
    };
  }
}