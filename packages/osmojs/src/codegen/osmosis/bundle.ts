import * as _103 from "./accum/v1beta1/accum";
import * as _104 from "./concentrated-liquidity/params";
import * as _105 from "./cosmwasmpool/v1beta1/genesis";
import * as _106 from "./cosmwasmpool/v1beta1/gov";
import * as _107 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _108 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _109 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _110 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _111 from "./cosmwasmpool/v1beta1/model/pool";
import * as _112 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _113 from "./cosmwasmpool/v1beta1/model/tx";
import * as _114 from "./cosmwasmpool/v1beta1/params";
import * as _115 from "./cosmwasmpool/v1beta1/query";
import * as _116 from "./cosmwasmpool/v1beta1/tx";
import * as _117 from "./downtime-detector/v1beta1/downtime_duration";
import * as _118 from "./downtime-detector/v1beta1/genesis";
import * as _119 from "./downtime-detector/v1beta1/query";
import * as _120 from "./epochs/genesis";
import * as _121 from "./epochs/query";
import * as _122 from "./gamm/pool-models/balancer/balancerPool";
import * as _123 from "./gamm/v1beta1/genesis";
import * as _124 from "./gamm/v1beta1/gov";
import * as _125 from "./gamm/v1beta1/query";
import * as _126 from "./gamm/v1beta1/tx";
import * as _127 from "./gamm/pool-models/balancer/tx/tx";
import * as _128 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _129 from "./gamm/pool-models/stableswap/tx";
import * as _130 from "./gamm/v2/query";
import * as _131 from "./ibc-rate-limit/v1beta1/genesis";
import * as _132 from "./ibc-rate-limit/v1beta1/params";
import * as _133 from "./ibc-rate-limit/v1beta1/query";
import * as _134 from "./incentives/gauge";
import * as _135 from "./incentives/genesis";
import * as _136 from "./incentives/params";
import * as _137 from "./incentives/query";
import * as _138 from "./incentives/tx";
import * as _139 from "./lockup/genesis";
import * as _140 from "./lockup/lock";
import * as _141 from "./lockup/params";
import * as _142 from "./lockup/query";
import * as _143 from "./lockup/tx";
import * as _144 from "./mint/v1beta1/genesis";
import * as _145 from "./mint/v1beta1/mint";
import * as _146 from "./mint/v1beta1/query";
import * as _147 from "./pool-incentives/v1beta1/genesis";
import * as _148 from "./pool-incentives/v1beta1/gov";
import * as _149 from "./pool-incentives/v1beta1/incentives";
import * as _150 from "./pool-incentives/v1beta1/query";
import * as _151 from "./poolmanager/v1beta1/genesis";
import * as _152 from "./poolmanager/v1beta1/module_route";
import * as _153 from "./poolmanager/v1beta1/query";
import * as _154 from "./poolmanager/v1beta1/swap_route";
import * as _155 from "./poolmanager/v1beta1/tx";
import * as _156 from "./protorev/v1beta1/genesis";
import * as _157 from "./protorev/v1beta1/gov";
import * as _158 from "./protorev/v1beta1/params";
import * as _159 from "./protorev/v1beta1/protorev";
import * as _160 from "./protorev/v1beta1/query";
import * as _161 from "./protorev/v1beta1/tx";
import * as _162 from "./sumtree/v1beta1/tree";
import * as _163 from "./superfluid/genesis";
import * as _164 from "./superfluid/params";
import * as _165 from "./superfluid/query";
import * as _166 from "./superfluid/superfluid";
import * as _167 from "./superfluid/tx";
import * as _168 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _169 from "./tokenfactory/v1beta1/genesis";
import * as _170 from "./tokenfactory/v1beta1/params";
import * as _171 from "./tokenfactory/v1beta1/query";
import * as _172 from "./tokenfactory/v1beta1/tx";
import * as _173 from "./twap/v1beta1/genesis";
import * as _174 from "./twap/v1beta1/query";
import * as _175 from "./twap/v1beta1/twap_record";
import * as _176 from "./txfees/v1beta1/feetoken";
import * as _177 from "./txfees/v1beta1/genesis";
import * as _178 from "./txfees/v1beta1/gov";
import * as _179 from "./txfees/v1beta1/query";
import * as _180 from "./valset-pref/v1beta1/query";
import * as _181 from "./valset-pref/v1beta1/state";
import * as _182 from "./valset-pref/v1beta1/tx";
import * as _266 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _267 from "./gamm/pool-models/stableswap/tx.amino";
import * as _268 from "./gamm/v1beta1/tx.amino";
import * as _269 from "./incentives/tx.amino";
import * as _270 from "./lockup/tx.amino";
import * as _271 from "./poolmanager/v1beta1/tx.amino";
import * as _272 from "./protorev/v1beta1/tx.amino";
import * as _273 from "./superfluid/tx.amino";
import * as _274 from "./tokenfactory/v1beta1/tx.amino";
import * as _275 from "./valset-pref/v1beta1/tx.amino";
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
import * as _326 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _327 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _328 from "./gamm/v1beta1/tx.rpc.msg";
import * as _329 from "./incentives/tx.rpc.msg";
import * as _330 from "./lockup/tx.rpc.msg";
import * as _331 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _332 from "./protorev/v1beta1/tx.rpc.msg";
import * as _333 from "./superfluid/tx.rpc.msg";
import * as _334 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _335 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _345 from "./lcd";
import * as _346 from "./rpc.query";
import * as _347 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = { ..._103
    };
  }
  export const concentratedliquidity = { ..._104
  };
  export namespace cosmwasmpool {
    export const v1beta1 = { ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._289,
      ..._307
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = { ..._117,
      ..._118,
      ..._119,
      ..._290,
      ..._308
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._120,
      ..._121,
      ..._291,
      ..._309
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._268,
      ..._280,
      ..._292,
      ..._310,
      ..._328
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._127,
          ..._266,
          ..._278,
          ..._326
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._128,
          ..._129,
          ..._267,
          ..._279,
          ..._327
        };
      }
    }
    export const v2 = { ..._130,
      ..._293,
      ..._311
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._131,
      ..._132,
      ..._133,
      ..._294,
      ..._312
    };
  }
  export const incentives = { ..._134,
    ..._135,
    ..._136,
    ..._137,
    ..._138,
    ..._269,
    ..._281,
    ..._295,
    ..._313,
    ..._329
  };
  export const lockup = { ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._270,
    ..._282,
    ..._296,
    ..._314,
    ..._330
  };
  export namespace mint {
    export const v1beta1 = { ..._144,
      ..._145,
      ..._146,
      ..._297,
      ..._315
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._298,
      ..._316
    };
  }
  export namespace poolmanager {
    export const v1beta1 = { ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._271,
      ..._283,
      ..._299,
      ..._317,
      ..._331
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._272,
      ..._284,
      ..._300,
      ..._318,
      ..._332
    };
  }
  export namespace store {
    export const v1beta1 = { ..._162
    };
  }
  export const superfluid = { ..._163,
    ..._164,
    ..._165,
    ..._166,
    ..._167,
    ..._273,
    ..._285,
    ..._301,
    ..._319,
    ..._333
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._274,
      ..._286,
      ..._302,
      ..._320,
      ..._334
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._173,
      ..._174,
      ..._175,
      ..._303,
      ..._321
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._304,
      ..._322
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._180,
      ..._181,
      ..._182,
      ..._275,
      ..._287,
      ..._305,
      ..._323,
      ..._335
    };
  }
  export const ClientFactory = { ..._345,
    ..._346,
    ..._347
  };
}