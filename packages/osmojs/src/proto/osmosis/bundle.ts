import * as _135 from "./epochs/genesis";
import * as _136 from "./epochs/query";
import * as _137 from "./gamm/pool-models/balancer/balancerPool";
import * as _138 from "./gamm/v1beta1/genesis";
import * as _139 from "./gamm/v1beta1/query";
import * as _140 from "./gamm/v1beta1/tx";
import * as _141 from "./gamm/pool-models/balancer/tx";
import * as _142 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _143 from "./gamm/pool-models/stableswap/tx";
import * as _144 from "./incentives/gauge";
import * as _145 from "./incentives/genesis";
import * as _146 from "./incentives/params";
import * as _147 from "./incentives/query";
import * as _148 from "./incentives/tx";
import * as _149 from "./lockup/genesis";
import * as _150 from "./lockup/lock";
import * as _151 from "./lockup/query";
import * as _152 from "./lockup/tx";
import * as _153 from "./mint/v1beta1/genesis";
import * as _154 from "./mint/v1beta1/mint";
import * as _155 from "./mint/v1beta1/query";
import * as _156 from "./pool-incentives/v1beta1/genesis";
import * as _157 from "./pool-incentives/v1beta1/gov";
import * as _158 from "./pool-incentives/v1beta1/incentives";
import * as _159 from "./pool-incentives/v1beta1/query";
import * as _160 from "./store/v1beta1/tree";
import * as _161 from "./superfluid/genesis";
import * as _162 from "./superfluid/params";
import * as _163 from "./superfluid/query";
import * as _164 from "./superfluid/superfluid";
import * as _165 from "./superfluid/tx";
import * as _166 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _167 from "./tokenfactory/v1beta1/genesis";
import * as _168 from "./tokenfactory/v1beta1/params";
import * as _169 from "./tokenfactory/v1beta1/query";
import * as _170 from "./tokenfactory/v1beta1/tx";
import * as _171 from "./txfees/v1beta1/feetoken";
import * as _172 from "./txfees/v1beta1/genesis";
import * as _173 from "./txfees/v1beta1/gov";
import * as _174 from "./txfees/v1beta1/query";
import * as _287 from "./gamm/pool-models/balancer/tx.amino";
import * as _288 from "./gamm/pool-models/stableswap/tx.amino";
import * as _289 from "./gamm/v1beta1/tx.amino";
import * as _290 from "./incentives/tx.amino";
import * as _291 from "./lockup/tx.amino";
import * as _292 from "./superfluid/tx.amino";
import * as _293 from "./tokenfactory/v1beta1/tx.amino";
import * as _294 from "./gamm/pool-models/balancer/tx.registry";
import * as _295 from "./gamm/pool-models/stableswap/tx.registry";
import * as _296 from "./gamm/v1beta1/tx.registry";
import * as _297 from "./incentives/tx.registry";
import * as _298 from "./lockup/tx.registry";
import * as _299 from "./superfluid/tx.registry";
import * as _300 from "./tokenfactory/v1beta1/tx.registry";
import * as _301 from "./epochs/query.lcd";
import * as _302 from "./gamm/v1beta1/query.lcd";
import * as _303 from "./incentives/query.lcd";
import * as _304 from "./lockup/query.lcd";
import * as _305 from "./mint/v1beta1/query.lcd";
import * as _306 from "./pool-incentives/v1beta1/query.lcd";
import * as _307 from "./superfluid/query.lcd";
import * as _308 from "./tokenfactory/v1beta1/query.lcd";
import * as _309 from "./txfees/v1beta1/query.lcd";
import * as _310 from "./epochs/query.rpc.query";
import * as _311 from "./gamm/v1beta1/query.rpc.query";
import * as _312 from "./incentives/query.rpc.query";
import * as _313 from "./lockup/query.rpc.query";
import * as _314 from "./mint/v1beta1/query.rpc.query";
import * as _315 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _316 from "./superfluid/query.rpc.query";
import * as _317 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _318 from "./txfees/v1beta1/query.rpc.query";
import * as _319 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _320 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _321 from "./gamm/v1beta1/tx.rpc.msg";
import * as _322 from "./incentives/tx.rpc.msg";
import * as _323 from "./lockup/tx.rpc.msg";
import * as _324 from "./superfluid/tx.rpc.msg";
import * as _325 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _335 from "./lcd";
import * as _336 from "./rpc.query";
import * as _337 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = { ..._135,
      ..._136,
      ..._301,
      ..._310
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._289,
      ..._296,
      ..._302,
      ..._311,
      ..._321
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._141,
          ..._287,
          ..._294,
          ..._319
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._142,
          ..._143,
          ..._288,
          ..._295,
          ..._320
        };
      }
    }
  }
  export const incentives = { ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._290,
    ..._297,
    ..._303,
    ..._312,
    ..._322
  };
  export const lockup = { ..._149,
    ..._150,
    ..._151,
    ..._152,
    ..._291,
    ..._298,
    ..._304,
    ..._313,
    ..._323
  };
  export namespace mint {
    export const v1beta1 = { ..._153,
      ..._154,
      ..._155,
      ..._305,
      ..._314
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._306,
      ..._315
    };
  }
  export namespace store {
    export const v1beta1 = { ..._160
    };
  }
  export const superfluid = { ..._161,
    ..._162,
    ..._163,
    ..._164,
    ..._165,
    ..._292,
    ..._299,
    ..._307,
    ..._316,
    ..._324
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._293,
      ..._300,
      ..._308,
      ..._317,
      ..._325
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._309,
      ..._318
    };
  }
  export const ClientFactory = { ..._335,
    ..._336,
    ..._337
  };
}