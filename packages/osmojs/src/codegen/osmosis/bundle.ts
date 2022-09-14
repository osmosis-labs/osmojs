import * as _126 from "./epochs/genesis";
import * as _127 from "./epochs/query";
import * as _128 from "./gamm/pool-models/balancer/balancerPool";
import * as _129 from "./gamm/v1beta1/genesis";
import * as _130 from "./gamm/v1beta1/query";
import * as _131 from "./gamm/v1beta1/tx";
import * as _132 from "./gamm/pool-models/balancer/tx";
import * as _133 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _134 from "./gamm/pool-models/stableswap/tx";
import * as _135 from "./incentives/gauge";
import * as _136 from "./incentives/genesis";
import * as _137 from "./incentives/params";
import * as _138 from "./incentives/query";
import * as _139 from "./incentives/tx";
import * as _140 from "./lockup/genesis";
import * as _141 from "./lockup/lock";
import * as _142 from "./lockup/query";
import * as _143 from "./lockup/tx";
import * as _144 from "./mint/v1beta1/genesis";
import * as _145 from "./mint/v1beta1/mint";
import * as _146 from "./mint/v1beta1/query";
import * as _147 from "./pool-incentives/v1beta1/genesis";
import * as _148 from "./pool-incentives/v1beta1/gov";
import * as _149 from "./pool-incentives/v1beta1/incentives";
import * as _150 from "./pool-incentives/v1beta1/query";
import * as _151 from "./store/v1beta1/tree";
import * as _152 from "./superfluid/genesis";
import * as _153 from "./superfluid/params";
import * as _154 from "./superfluid/query";
import * as _155 from "./superfluid/superfluid";
import * as _156 from "./superfluid/tx";
import * as _157 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _158 from "./tokenfactory/v1beta1/genesis";
import * as _159 from "./tokenfactory/v1beta1/params";
import * as _160 from "./tokenfactory/v1beta1/query";
import * as _161 from "./tokenfactory/v1beta1/tx";
import * as _162 from "./txfees/v1beta1/feetoken";
import * as _163 from "./txfees/v1beta1/genesis";
import * as _164 from "./txfees/v1beta1/gov";
import * as _165 from "./txfees/v1beta1/query";
import * as _270 from "./gamm/pool-models/balancer/tx.amino";
import * as _271 from "./gamm/pool-models/stableswap/tx.amino";
import * as _272 from "./gamm/v1beta1/tx.amino";
import * as _273 from "./incentives/tx.amino";
import * as _274 from "./lockup/tx.amino";
import * as _275 from "./superfluid/tx.amino";
import * as _276 from "./tokenfactory/v1beta1/tx.amino";
import * as _277 from "./gamm/pool-models/balancer/tx.registry";
import * as _278 from "./gamm/pool-models/stableswap/tx.registry";
import * as _279 from "./gamm/v1beta1/tx.registry";
import * as _280 from "./incentives/tx.registry";
import * as _281 from "./lockup/tx.registry";
import * as _282 from "./superfluid/tx.registry";
import * as _283 from "./tokenfactory/v1beta1/tx.registry";
import * as _284 from "./epochs/query.lcd";
import * as _285 from "./gamm/v1beta1/query.lcd";
import * as _286 from "./incentives/query.lcd";
import * as _287 from "./lockup/query.lcd";
import * as _288 from "./mint/v1beta1/query.lcd";
import * as _289 from "./pool-incentives/v1beta1/query.lcd";
import * as _290 from "./superfluid/query.lcd";
import * as _291 from "./tokenfactory/v1beta1/query.lcd";
import * as _292 from "./txfees/v1beta1/query.lcd";
import * as _293 from "./epochs/query.rpc.query";
import * as _294 from "./gamm/v1beta1/query.rpc.query";
import * as _295 from "./incentives/query.rpc.query";
import * as _296 from "./lockup/query.rpc.query";
import * as _297 from "./mint/v1beta1/query.rpc.query";
import * as _298 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _299 from "./superfluid/query.rpc.query";
import * as _300 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _301 from "./txfees/v1beta1/query.rpc.query";
import * as _302 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _303 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _304 from "./gamm/v1beta1/tx.rpc.msg";
import * as _305 from "./incentives/tx.rpc.msg";
import * as _306 from "./lockup/tx.rpc.msg";
import * as _307 from "./superfluid/tx.rpc.msg";
import * as _308 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _318 from "./lcd";
import * as _319 from "./rpc.query";
import * as _320 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = { ..._126,
      ..._127,
      ..._284,
      ..._293
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._272,
      ..._279,
      ..._285,
      ..._294,
      ..._304
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._132,
          ..._270,
          ..._277,
          ..._302
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._133,
          ..._134,
          ..._271,
          ..._278,
          ..._303
        };
      }
    }
  }
  export const incentives = { ..._135,
    ..._136,
    ..._137,
    ..._138,
    ..._139,
    ..._273,
    ..._280,
    ..._286,
    ..._295,
    ..._305
  };
  export const lockup = { ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._274,
    ..._281,
    ..._287,
    ..._296,
    ..._306
  };
  export namespace mint {
    export const v1beta1 = { ..._144,
      ..._145,
      ..._146,
      ..._288,
      ..._297
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._289,
      ..._298
    };
  }
  export namespace store {
    export const v1beta1 = { ..._151
    };
  }
  export const superfluid = { ..._152,
    ..._153,
    ..._154,
    ..._155,
    ..._156,
    ..._275,
    ..._282,
    ..._290,
    ..._299,
    ..._307
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._276,
      ..._283,
      ..._291,
      ..._300,
      ..._308
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._292,
      ..._301
    };
  }
  export const ClientFactory = { ..._318,
    ..._319,
    ..._320
  };
}