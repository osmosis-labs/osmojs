import * as _130 from "./epochs/genesis";
import * as _131 from "./epochs/query";
import * as _132 from "./gamm/pool-models/balancer/balancerPool";
import * as _133 from "./gamm/v1beta1/genesis";
import * as _134 from "./gamm/v1beta1/query";
import * as _135 from "./gamm/v1beta1/tx";
import * as _136 from "./gamm/pool-models/balancer/tx";
import * as _137 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _138 from "./gamm/pool-models/stableswap/tx";
import * as _139 from "./incentives/gauge";
import * as _140 from "./incentives/genesis";
import * as _141 from "./incentives/params";
import * as _142 from "./incentives/query";
import * as _143 from "./incentives/tx";
import * as _144 from "./lockup/genesis";
import * as _145 from "./lockup/lock";
import * as _146 from "./lockup/query";
import * as _147 from "./lockup/tx";
import * as _148 from "./mint/v1beta1/genesis";
import * as _149 from "./mint/v1beta1/mint";
import * as _150 from "./mint/v1beta1/query";
import * as _151 from "./pool-incentives/v1beta1/genesis";
import * as _152 from "./pool-incentives/v1beta1/gov";
import * as _153 from "./pool-incentives/v1beta1/incentives";
import * as _154 from "./pool-incentives/v1beta1/query";
import * as _155 from "./store/v1beta1/tree";
import * as _156 from "./superfluid/genesis";
import * as _157 from "./superfluid/params";
import * as _158 from "./superfluid/query";
import * as _159 from "./superfluid/superfluid";
import * as _160 from "./superfluid/tx";
import * as _161 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _162 from "./tokenfactory/v1beta1/genesis";
import * as _163 from "./tokenfactory/v1beta1/params";
import * as _164 from "./tokenfactory/v1beta1/query";
import * as _165 from "./tokenfactory/v1beta1/tx";
import * as _166 from "./txfees/v1beta1/feetoken";
import * as _167 from "./txfees/v1beta1/genesis";
import * as _168 from "./txfees/v1beta1/gov";
import * as _169 from "./txfees/v1beta1/query";
import * as _279 from "./gamm/pool-models/balancer/tx.amino";
import * as _280 from "./gamm/pool-models/stableswap/tx.amino";
import * as _281 from "./gamm/v1beta1/tx.amino";
import * as _282 from "./incentives/tx.amino";
import * as _283 from "./lockup/tx.amino";
import * as _284 from "./superfluid/tx.amino";
import * as _285 from "./tokenfactory/v1beta1/tx.amino";
import * as _286 from "./gamm/pool-models/balancer/tx.registry";
import * as _287 from "./gamm/pool-models/stableswap/tx.registry";
import * as _288 from "./gamm/v1beta1/tx.registry";
import * as _289 from "./incentives/tx.registry";
import * as _290 from "./lockup/tx.registry";
import * as _291 from "./superfluid/tx.registry";
import * as _292 from "./tokenfactory/v1beta1/tx.registry";
import * as _293 from "./epochs/query.lcd";
import * as _294 from "./gamm/v1beta1/query.lcd";
import * as _295 from "./incentives/query.lcd";
import * as _296 from "./lockup/query.lcd";
import * as _297 from "./mint/v1beta1/query.lcd";
import * as _298 from "./pool-incentives/v1beta1/query.lcd";
import * as _299 from "./superfluid/query.lcd";
import * as _300 from "./tokenfactory/v1beta1/query.lcd";
import * as _301 from "./txfees/v1beta1/query.lcd";
import * as _302 from "./epochs/query.rpc.query";
import * as _303 from "./gamm/v1beta1/query.rpc.query";
import * as _304 from "./incentives/query.rpc.query";
import * as _305 from "./lockup/query.rpc.query";
import * as _306 from "./mint/v1beta1/query.rpc.query";
import * as _307 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _308 from "./superfluid/query.rpc.query";
import * as _309 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _310 from "./txfees/v1beta1/query.rpc.query";
import * as _311 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _312 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _313 from "./gamm/v1beta1/tx.rpc.msg";
import * as _314 from "./incentives/tx.rpc.msg";
import * as _315 from "./lockup/tx.rpc.msg";
import * as _316 from "./superfluid/tx.rpc.msg";
import * as _317 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _327 from "./lcd";
import * as _328 from "./rpc.query";
import * as _329 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = { ..._130,
      ..._131,
      ..._293,
      ..._302
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._281,
      ..._288,
      ..._294,
      ..._303,
      ..._313
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._136,
          ..._279,
          ..._286,
          ..._311
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._137,
          ..._138,
          ..._280,
          ..._287,
          ..._312
        };
      }
    }
  }
  export const incentives = { ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._282,
    ..._289,
    ..._295,
    ..._304,
    ..._314
  };
  export const lockup = { ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._283,
    ..._290,
    ..._296,
    ..._305,
    ..._315
  };
  export namespace mint {
    export const v1beta1 = { ..._148,
      ..._149,
      ..._150,
      ..._297,
      ..._306
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._298,
      ..._307
    };
  }
  export namespace store {
    export const v1beta1 = { ..._155
    };
  }
  export const superfluid = { ..._156,
    ..._157,
    ..._158,
    ..._159,
    ..._160,
    ..._284,
    ..._291,
    ..._299,
    ..._308,
    ..._316
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._285,
      ..._292,
      ..._300,
      ..._309,
      ..._317
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._301,
      ..._310
    };
  }
  export const ClientFactory = { ..._327,
    ..._328,
    ..._329
  };
}