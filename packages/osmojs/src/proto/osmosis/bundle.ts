import * as _132 from "./epochs/genesis";
import * as _133 from "./epochs/query";
import * as _134 from "./gamm/pool-models/balancer/balancerPool";
import * as _135 from "./gamm/v1beta1/genesis";
import * as _136 from "./gamm/v1beta1/query";
import * as _137 from "./gamm/v1beta1/tx";
import * as _138 from "./gamm/pool-models/balancer/tx";
import * as _139 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _140 from "./gamm/pool-models/stableswap/tx";
import * as _141 from "./incentives/gauge";
import * as _142 from "./incentives/genesis";
import * as _143 from "./incentives/params";
import * as _144 from "./incentives/query";
import * as _145 from "./incentives/tx";
import * as _146 from "./lockup/genesis";
import * as _147 from "./lockup/lock";
import * as _148 from "./lockup/query";
import * as _149 from "./lockup/tx";
import * as _150 from "./mint/v1beta1/genesis";
import * as _151 from "./mint/v1beta1/mint";
import * as _152 from "./mint/v1beta1/query";
import * as _153 from "./pool-incentives/v1beta1/genesis";
import * as _154 from "./pool-incentives/v1beta1/gov";
import * as _155 from "./pool-incentives/v1beta1/incentives";
import * as _156 from "./pool-incentives/v1beta1/query";
import * as _157 from "./store/v1beta1/tree";
import * as _158 from "./superfluid/genesis";
import * as _159 from "./superfluid/params";
import * as _160 from "./superfluid/query";
import * as _161 from "./superfluid/superfluid";
import * as _162 from "./superfluid/tx";
import * as _163 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _164 from "./tokenfactory/v1beta1/genesis";
import * as _165 from "./tokenfactory/v1beta1/params";
import * as _166 from "./tokenfactory/v1beta1/query";
import * as _167 from "./tokenfactory/v1beta1/tx";
import * as _168 from "./txfees/v1beta1/feetoken";
import * as _169 from "./txfees/v1beta1/genesis";
import * as _170 from "./txfees/v1beta1/gov";
import * as _171 from "./txfees/v1beta1/query";
import * as _284 from "./gamm/pool-models/balancer/tx.amino";
import * as _285 from "./gamm/pool-models/stableswap/tx.amino";
import * as _286 from "./gamm/v1beta1/tx.amino";
import * as _287 from "./incentives/tx.amino";
import * as _288 from "./lockup/tx.amino";
import * as _289 from "./superfluid/tx.amino";
import * as _290 from "./tokenfactory/v1beta1/tx.amino";
import * as _291 from "./gamm/pool-models/balancer/tx.registry";
import * as _292 from "./gamm/pool-models/stableswap/tx.registry";
import * as _293 from "./gamm/v1beta1/tx.registry";
import * as _294 from "./incentives/tx.registry";
import * as _295 from "./lockup/tx.registry";
import * as _296 from "./superfluid/tx.registry";
import * as _297 from "./tokenfactory/v1beta1/tx.registry";
import * as _298 from "./epochs/query.lcd";
import * as _299 from "./gamm/v1beta1/query.lcd";
import * as _300 from "./incentives/query.lcd";
import * as _301 from "./lockup/query.lcd";
import * as _302 from "./mint/v1beta1/query.lcd";
import * as _303 from "./pool-incentives/v1beta1/query.lcd";
import * as _304 from "./superfluid/query.lcd";
import * as _305 from "./tokenfactory/v1beta1/query.lcd";
import * as _306 from "./txfees/v1beta1/query.lcd";
import * as _307 from "./epochs/query.rpc.query";
import * as _308 from "./gamm/v1beta1/query.rpc.query";
import * as _309 from "./incentives/query.rpc.query";
import * as _310 from "./lockup/query.rpc.query";
import * as _311 from "./mint/v1beta1/query.rpc.query";
import * as _312 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _313 from "./superfluid/query.rpc.query";
import * as _314 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _315 from "./txfees/v1beta1/query.rpc.query";
import * as _316 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _317 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _318 from "./gamm/v1beta1/tx.rpc.msg";
import * as _319 from "./incentives/tx.rpc.msg";
import * as _320 from "./lockup/tx.rpc.msg";
import * as _321 from "./superfluid/tx.rpc.msg";
import * as _322 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _332 from "./lcd";
import * as _333 from "./rpc.query";
import * as _334 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = { ..._132,
      ..._133,
      ..._298,
      ..._307
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._286,
      ..._293,
      ..._299,
      ..._308,
      ..._318
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._138,
          ..._284,
          ..._291,
          ..._316
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._139,
          ..._140,
          ..._285,
          ..._292,
          ..._317
        };
      }
    }
  }
  export const incentives = { ..._141,
    ..._142,
    ..._143,
    ..._144,
    ..._145,
    ..._287,
    ..._294,
    ..._300,
    ..._309,
    ..._319
  };
  export const lockup = { ..._146,
    ..._147,
    ..._148,
    ..._149,
    ..._288,
    ..._295,
    ..._301,
    ..._310,
    ..._320
  };
  export namespace mint {
    export const v1beta1 = { ..._150,
      ..._151,
      ..._152,
      ..._302,
      ..._311
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._303,
      ..._312
    };
  }
  export namespace store {
    export const v1beta1 = { ..._157
    };
  }
  export const superfluid = { ..._158,
    ..._159,
    ..._160,
    ..._161,
    ..._162,
    ..._289,
    ..._296,
    ..._304,
    ..._313,
    ..._321
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._290,
      ..._297,
      ..._305,
      ..._314,
      ..._322
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._306,
      ..._315
    };
  }
  export const ClientFactory = { ..._332,
    ..._333,
    ..._334
  };
}