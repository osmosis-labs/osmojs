import * as _107 from "./accum/v1beta1/accum";
import * as _108 from "./concentrated-liquidity/params";
import * as _109 from "./cosmwasmpool/v1beta1/genesis";
import * as _110 from "./cosmwasmpool/v1beta1/model/pool";
import * as _111 from "./cosmwasmpool/v1beta1/model/tx";
import * as _112 from "./cosmwasmpool/v1beta1/query";
import * as _113 from "./cosmwasmpool/v1beta1/tx";
import * as _114 from "./downtime-detector/v1beta1/downtime_duration";
import * as _115 from "./downtime-detector/v1beta1/genesis";
import * as _116 from "./downtime-detector/v1beta1/query";
import * as _117 from "./epochs/genesis";
import * as _118 from "./epochs/query";
import * as _119 from "./gamm/pool-models/balancer/balancerPool";
import * as _120 from "./gamm/v1beta1/genesis";
import * as _121 from "./gamm/v1beta1/gov";
import * as _122 from "./gamm/v1beta1/query";
import * as _123 from "./gamm/v1beta1/tx";
import * as _124 from "./gamm/pool-models/balancer/tx/tx";
import * as _125 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _126 from "./gamm/pool-models/stableswap/tx";
import * as _127 from "./gamm/v2/query";
import * as _128 from "./ibc-rate-limit/v1beta1/genesis";
import * as _129 from "./ibc-rate-limit/v1beta1/params";
import * as _130 from "./ibc-rate-limit/v1beta1/query";
import * as _131 from "./incentives/gauge";
import * as _132 from "./incentives/genesis";
import * as _133 from "./incentives/params";
import * as _134 from "./incentives/query";
import * as _135 from "./incentives/tx";
import * as _136 from "./lockup/genesis";
import * as _137 from "./lockup/lock";
import * as _138 from "./lockup/params";
import * as _139 from "./lockup/query";
import * as _140 from "./lockup/tx";
import * as _141 from "./mint/v1beta1/genesis";
import * as _142 from "./mint/v1beta1/mint";
import * as _143 from "./mint/v1beta1/query";
import * as _144 from "./pool-incentives/v1beta1/genesis";
import * as _145 from "./pool-incentives/v1beta1/gov";
import * as _146 from "./pool-incentives/v1beta1/incentives";
import * as _147 from "./pool-incentives/v1beta1/query";
import * as _148 from "./poolmanager/v1beta1/genesis";
import * as _149 from "./poolmanager/v1beta1/module_route";
import * as _150 from "./poolmanager/v1beta1/query";
import * as _151 from "./poolmanager/v1beta1/swap_route";
import * as _152 from "./poolmanager/v1beta1/tx";
import * as _153 from "./protorev/v1beta1/genesis";
import * as _154 from "./protorev/v1beta1/gov";
import * as _155 from "./protorev/v1beta1/params";
import * as _156 from "./protorev/v1beta1/protorev";
import * as _157 from "./protorev/v1beta1/query";
import * as _158 from "./protorev/v1beta1/tx";
import * as _159 from "./sumtree/v1beta1/tree";
import * as _160 from "./superfluid/genesis";
import * as _161 from "./superfluid/params";
import * as _162 from "./superfluid/query";
import * as _163 from "./superfluid/superfluid";
import * as _164 from "./superfluid/tx";
import * as _165 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _166 from "./tokenfactory/v1beta1/genesis";
import * as _167 from "./tokenfactory/v1beta1/params";
import * as _168 from "./tokenfactory/v1beta1/query";
import * as _169 from "./tokenfactory/v1beta1/tx";
import * as _170 from "./twap/v1beta1/genesis";
import * as _171 from "./twap/v1beta1/query";
import * as _172 from "./twap/v1beta1/twap_record";
import * as _173 from "./txfees/v1beta1/feetoken";
import * as _174 from "./txfees/v1beta1/genesis";
import * as _175 from "./txfees/v1beta1/gov";
import * as _176 from "./txfees/v1beta1/query";
import * as _177 from "./valset-pref/v1beta1/query";
import * as _178 from "./valset-pref/v1beta1/state";
import * as _179 from "./valset-pref/v1beta1/tx";
import * as _267 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _268 from "./gamm/pool-models/stableswap/tx.amino";
import * as _269 from "./gamm/v1beta1/tx.amino";
import * as _270 from "./incentives/tx.amino";
import * as _271 from "./lockup/tx.amino";
import * as _272 from "./poolmanager/v1beta1/tx.amino";
import * as _273 from "./protorev/v1beta1/tx.amino";
import * as _274 from "./superfluid/tx.amino";
import * as _275 from "./tokenfactory/v1beta1/tx.amino";
import * as _276 from "./valset-pref/v1beta1/tx.amino";
import * as _278 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _279 from "./gamm/pool-models/stableswap/tx.registry";
import * as _280 from "./gamm/v1beta1/tx.registry";
import * as _281 from "./incentives/tx.registry";
import * as _282 from "./lockup/tx.registry";
import * as _283 from "./poolmanager/v1beta1/tx.registry";
import * as _284 from "./protorev/v1beta1/tx.registry";
import * as _285 from "./superfluid/tx.registry";
import * as _286 from "./tokenfactory/v1beta1/tx.registry";
import * as _287 from "./valset-pref/v1beta1/tx.registry";
import * as _289 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _290 from "./downtime-detector/v1beta1/query.lcd";
import * as _291 from "./epochs/query.lcd";
import * as _292 from "./gamm/v1beta1/query.lcd";
import * as _293 from "./gamm/v2/query.lcd";
import * as _294 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _295 from "./incentives/query.lcd";
import * as _296 from "./lockup/query.lcd";
import * as _297 from "./mint/v1beta1/query.lcd";
import * as _298 from "./pool-incentives/v1beta1/query.lcd";
import * as _299 from "./poolmanager/v1beta1/query.lcd";
import * as _300 from "./protorev/v1beta1/query.lcd";
import * as _301 from "./superfluid/query.lcd";
import * as _302 from "./tokenfactory/v1beta1/query.lcd";
import * as _303 from "./twap/v1beta1/query.lcd";
import * as _304 from "./txfees/v1beta1/query.lcd";
import * as _305 from "./valset-pref/v1beta1/query.lcd";
import * as _307 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _308 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _309 from "./epochs/query.rpc.Query";
import * as _310 from "./gamm/v1beta1/query.rpc.Query";
import * as _311 from "./gamm/v2/query.rpc.Query";
import * as _312 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _313 from "./incentives/query.rpc.Query";
import * as _314 from "./lockup/query.rpc.Query";
import * as _315 from "./mint/v1beta1/query.rpc.Query";
import * as _316 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _317 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _318 from "./protorev/v1beta1/query.rpc.Query";
import * as _319 from "./superfluid/query.rpc.Query";
import * as _320 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _321 from "./twap/v1beta1/query.rpc.Query";
import * as _322 from "./txfees/v1beta1/query.rpc.Query";
import * as _323 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _325 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _326 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _327 from "./gamm/v1beta1/tx.rpc.msg";
import * as _328 from "./incentives/tx.rpc.msg";
import * as _329 from "./lockup/tx.rpc.msg";
import * as _330 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _331 from "./protorev/v1beta1/tx.rpc.msg";
import * as _332 from "./superfluid/tx.rpc.msg";
import * as _333 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _334 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _344 from "./lcd";
import * as _345 from "./rpc.query";
import * as _346 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = { ..._107
    };
  }
  export const concentratedliquidity = { ..._108
  };
  export namespace cosmwasmpool {
    export const v1beta1 = { ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._289,
      ..._307
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = { ..._114,
      ..._115,
      ..._116,
      ..._290,
      ..._308
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._117,
      ..._118,
      ..._291,
      ..._309
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._269,
      ..._280,
      ..._292,
      ..._310,
      ..._327
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._124,
          ..._267,
          ..._278,
          ..._325
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._125,
          ..._126,
          ..._268,
          ..._279,
          ..._326
        };
      }
    }
    export const v2 = { ..._127,
      ..._293,
      ..._311
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._128,
      ..._129,
      ..._130,
      ..._294,
      ..._312
    };
  }
  export const incentives = { ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._270,
    ..._281,
    ..._295,
    ..._313,
    ..._328
  };
  export const lockup = { ..._136,
    ..._137,
    ..._138,
    ..._139,
    ..._140,
    ..._271,
    ..._282,
    ..._296,
    ..._314,
    ..._329
  };
  export namespace mint {
    export const v1beta1 = { ..._141,
      ..._142,
      ..._143,
      ..._297,
      ..._315
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._298,
      ..._316
    };
  }
  export namespace poolmanager {
    export const v1beta1 = { ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._272,
      ..._283,
      ..._299,
      ..._317,
      ..._330
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._273,
      ..._284,
      ..._300,
      ..._318,
      ..._331
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
    ..._274,
    ..._285,
    ..._301,
    ..._319,
    ..._332
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._275,
      ..._286,
      ..._302,
      ..._320,
      ..._333
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._170,
      ..._171,
      ..._172,
      ..._303,
      ..._321
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._304,
      ..._322
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._177,
      ..._178,
      ..._179,
      ..._276,
      ..._287,
      ..._305,
      ..._323,
      ..._334
    };
  }
  export const ClientFactory = { ..._344,
    ..._345,
    ..._346
  };
}