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
import * as _281 from "./gamm/v1beta1/tx.amino";
import * as _282 from "./incentives/tx.amino";
import * as _283 from "./lockup/tx.amino";
import * as _284 from "./superfluid/tx.amino";
import * as _285 from "./gamm/v1beta1/tx.registry";
import * as _286 from "./incentives/tx.registry";
import * as _287 from "./lockup/tx.registry";
import * as _288 from "./superfluid/tx.registry";
import * as _289 from "./claim/v1beta1/query.lcd";
import * as _290 from "./epochs/query.lcd";
import * as _291 from "./gamm/v1beta1/query.lcd";
import * as _292 from "./incentives/query.lcd";
import * as _293 from "./lockup/query.lcd";
import * as _294 from "./mint/v1beta1/query.lcd";
import * as _295 from "./pool-incentives/v1beta1/query.lcd";
import * as _296 from "./superfluid/query.lcd";
import * as _297 from "./txfees/v1beta1/query.lcd";
import * as _298 from "./claim/v1beta1/query.rpc.query";
import * as _299 from "./epochs/query.rpc.query";
import * as _300 from "./gamm/v1beta1/query.rpc.query";
import * as _301 from "./incentives/query.rpc.query";
import * as _302 from "./lockup/query.rpc.query";
import * as _303 from "./mint/v1beta1/query.rpc.query";
import * as _304 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _305 from "./superfluid/query.rpc.query";
import * as _306 from "./txfees/v1beta1/query.rpc.query";
import * as _307 from "./gamm/v1beta1/tx.rpc.msg";
import * as _308 from "./incentives/tx.rpc.msg";
import * as _309 from "./lockup/tx.rpc.msg";
import * as _310 from "./superfluid/tx.rpc.msg";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._289,
      ..._298
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._136,
      ..._137,
      ..._290,
      ..._299
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._281,
      ..._285,
      ..._291,
      ..._300,
      ..._307
    };
  }
  export const incentives = { ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._282,
    ..._286,
    ..._292,
    ..._301,
    ..._308
  };
  export const lockup = { ..._148,
    ..._149,
    ..._150,
    ..._151,
    ..._283,
    ..._287,
    ..._293,
    ..._302,
    ..._309
  };
  export namespace mint {
    export const v1beta1 = { ..._152,
      ..._153,
      ..._154,
      ..._294,
      ..._303
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._295,
      ..._304
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
    ..._284,
    ..._288,
    ..._296,
    ..._305,
    ..._310
  };
  export namespace txfees {
    export const v1beta1 = { ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._297,
      ..._306
    };
  }
}