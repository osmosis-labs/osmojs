import * as _89 from "./accum/v1beta1/accum";
import * as _90 from "./concentrated-liquidity/params";
import * as _91 from "./cosmwasmpool/v1beta1/genesis";
import * as _92 from "./cosmwasmpool/v1beta1/gov";
import * as _93 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _94 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _95 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _96 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _97 from "./cosmwasmpool/v1beta1/model/pool";
import * as _98 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _99 from "./cosmwasmpool/v1beta1/model/tx";
import * as _100 from "./cosmwasmpool/v1beta1/params";
import * as _101 from "./cosmwasmpool/v1beta1/query";
import * as _102 from "./cosmwasmpool/v1beta1/tx";
import * as _103 from "./downtime-detector/v1beta1/downtime_duration";
import * as _104 from "./downtime-detector/v1beta1/genesis";
import * as _105 from "./downtime-detector/v1beta1/query";
import * as _106 from "./epochs/genesis";
import * as _107 from "./epochs/query";
import * as _108 from "./gamm/pool-models/balancer/balancerPool";
import * as _109 from "./gamm/v1beta1/genesis";
import * as _110 from "./gamm/v1beta1/gov";
import * as _111 from "./gamm/v1beta1/query";
import * as _112 from "./gamm/v1beta1/shared";
import * as _113 from "./gamm/v1beta1/tx";
import * as _114 from "./gamm/pool-models/balancer/tx/tx";
import * as _115 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _116 from "./gamm/pool-models/stableswap/tx";
import * as _117 from "./gamm/v2/query";
import * as _118 from "./ibc-rate-limit/v1beta1/genesis";
import * as _119 from "./ibc-rate-limit/v1beta1/params";
import * as _120 from "./ibc-rate-limit/v1beta1/query";
import * as _121 from "./incentives/gauge";
import * as _122 from "./incentives/genesis";
import * as _123 from "./incentives/params";
import * as _124 from "./incentives/query";
import * as _125 from "./incentives/tx";
import * as _126 from "./lockup/genesis";
import * as _127 from "./lockup/lock";
import * as _128 from "./lockup/params";
import * as _129 from "./lockup/query";
import * as _130 from "./lockup/tx";
import * as _131 from "./mint/v1beta1/genesis";
import * as _132 from "./mint/v1beta1/mint";
import * as _133 from "./mint/v1beta1/query";
import * as _134 from "./pool-incentives/v1beta1/genesis";
import * as _135 from "./pool-incentives/v1beta1/gov";
import * as _136 from "./pool-incentives/v1beta1/incentives";
import * as _137 from "./pool-incentives/v1beta1/query";
import * as _138 from "./pool-incentives/v1beta1/shared";
import * as _139 from "./poolmanager/v1beta1/genesis";
import * as _140 from "./poolmanager/v1beta1/module_route";
import * as _141 from "./poolmanager/v1beta1/query";
import * as _142 from "./poolmanager/v1beta1/swap_route";
import * as _143 from "./poolmanager/v1beta1/tx";
import * as _144 from "./protorev/v1beta1/genesis";
import * as _145 from "./protorev/v1beta1/gov";
import * as _146 from "./protorev/v1beta1/params";
import * as _147 from "./protorev/v1beta1/protorev";
import * as _148 from "./protorev/v1beta1/query";
import * as _149 from "./protorev/v1beta1/tx";
import * as _150 from "./sumtree/v1beta1/tree";
import * as _151 from "./superfluid/genesis";
import * as _152 from "./superfluid/params";
import * as _153 from "./superfluid/query";
import * as _154 from "./superfluid/superfluid";
import * as _155 from "./superfluid/tx";
import * as _156 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _157 from "./tokenfactory/v1beta1/genesis";
import * as _158 from "./tokenfactory/v1beta1/params";
import * as _159 from "./tokenfactory/v1beta1/query";
import * as _160 from "./tokenfactory/v1beta1/tx";
import * as _161 from "./twap/v1beta1/genesis";
import * as _162 from "./twap/v1beta1/query";
import * as _163 from "./twap/v1beta1/twap_record";
import * as _164 from "./txfees/v1beta1/feetoken";
import * as _165 from "./txfees/v1beta1/genesis";
import * as _166 from "./txfees/v1beta1/gov";
import * as _167 from "./txfees/v1beta1/query";
import * as _168 from "./valset-pref/v1beta1/query";
import * as _169 from "./valset-pref/v1beta1/state";
import * as _170 from "./valset-pref/v1beta1/tx";
import * as _262 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _263 from "./gamm/pool-models/stableswap/tx.amino";
import * as _264 from "./gamm/v1beta1/tx.amino";
import * as _265 from "./incentives/tx.amino";
import * as _266 from "./lockup/tx.amino";
import * as _267 from "./poolmanager/v1beta1/tx.amino";
import * as _268 from "./protorev/v1beta1/tx.amino";
import * as _269 from "./superfluid/tx.amino";
import * as _270 from "./tokenfactory/v1beta1/tx.amino";
import * as _271 from "./valset-pref/v1beta1/tx.amino";
import * as _274 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _275 from "./gamm/pool-models/stableswap/tx.registry";
import * as _276 from "./gamm/v1beta1/tx.registry";
import * as _277 from "./incentives/tx.registry";
import * as _278 from "./lockup/tx.registry";
import * as _279 from "./poolmanager/v1beta1/tx.registry";
import * as _280 from "./protorev/v1beta1/tx.registry";
import * as _281 from "./superfluid/tx.registry";
import * as _282 from "./tokenfactory/v1beta1/tx.registry";
import * as _283 from "./valset-pref/v1beta1/tx.registry";
import * as _285 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _286 from "./downtime-detector/v1beta1/query.lcd";
import * as _287 from "./epochs/query.lcd";
import * as _288 from "./gamm/v1beta1/query.lcd";
import * as _289 from "./gamm/v2/query.lcd";
import * as _290 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _291 from "./incentives/query.lcd";
import * as _292 from "./lockup/query.lcd";
import * as _293 from "./mint/v1beta1/query.lcd";
import * as _294 from "./pool-incentives/v1beta1/query.lcd";
import * as _295 from "./poolmanager/v1beta1/query.lcd";
import * as _296 from "./protorev/v1beta1/query.lcd";
import * as _297 from "./superfluid/query.lcd";
import * as _298 from "./tokenfactory/v1beta1/query.lcd";
import * as _299 from "./twap/v1beta1/query.lcd";
import * as _300 from "./txfees/v1beta1/query.lcd";
import * as _301 from "./valset-pref/v1beta1/query.lcd";
import * as _303 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _304 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _305 from "./epochs/query.rpc.Query";
import * as _306 from "./gamm/v1beta1/query.rpc.Query";
import * as _307 from "./gamm/v2/query.rpc.Query";
import * as _308 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _309 from "./incentives/query.rpc.Query";
import * as _310 from "./lockup/query.rpc.Query";
import * as _311 from "./mint/v1beta1/query.rpc.Query";
import * as _312 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _313 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _314 from "./protorev/v1beta1/query.rpc.Query";
import * as _315 from "./superfluid/query.rpc.Query";
import * as _316 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _317 from "./twap/v1beta1/query.rpc.Query";
import * as _318 from "./txfees/v1beta1/query.rpc.Query";
import * as _319 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _322 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _323 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _324 from "./gamm/v1beta1/tx.rpc.msg";
import * as _325 from "./incentives/tx.rpc.msg";
import * as _326 from "./lockup/tx.rpc.msg";
import * as _327 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _328 from "./protorev/v1beta1/tx.rpc.msg";
import * as _329 from "./superfluid/tx.rpc.msg";
import * as _330 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _331 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _341 from "./lcd";
import * as _342 from "./rpc.query";
import * as _343 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = { ..._89
    };
  }
  export const concentratedliquidity = { ..._90
  };
  export namespace cosmwasmpool {
    export const v1beta1 = { ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._285,
      ..._303
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = { ..._103,
      ..._104,
      ..._105,
      ..._286,
      ..._304
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._106,
      ..._107,
      ..._287,
      ..._305
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._264,
      ..._276,
      ..._288,
      ..._306,
      ..._324
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._114,
          ..._262,
          ..._274,
          ..._322
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._115,
          ..._116,
          ..._263,
          ..._275,
          ..._323
        };
      }
    }
    export const v2 = { ..._117,
      ..._289,
      ..._307
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._118,
      ..._119,
      ..._120,
      ..._290,
      ..._308
    };
  }
  export const incentives = { ..._121,
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._265,
    ..._277,
    ..._291,
    ..._309,
    ..._325
  };
  export const lockup = { ..._126,
    ..._127,
    ..._128,
    ..._129,
    ..._130,
    ..._266,
    ..._278,
    ..._292,
    ..._310,
    ..._326
  };
  export namespace mint {
    export const v1beta1 = { ..._131,
      ..._132,
      ..._133,
      ..._293,
      ..._311
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._294,
      ..._312
    };
  }
  export namespace poolmanager {
    export const v1beta1 = { ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._267,
      ..._279,
      ..._295,
      ..._313,
      ..._327
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._268,
      ..._280,
      ..._296,
      ..._314,
      ..._328
    };
  }
  export namespace store {
    export const v1beta1 = { ..._150
    };
  }
  export const superfluid = { ..._151,
    ..._152,
    ..._153,
    ..._154,
    ..._155,
    ..._269,
    ..._281,
    ..._297,
    ..._315,
    ..._329
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._270,
      ..._282,
      ..._298,
      ..._316,
      ..._330
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._161,
      ..._162,
      ..._163,
      ..._299,
      ..._317
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._300,
      ..._318
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._168,
      ..._169,
      ..._170,
      ..._271,
      ..._283,
      ..._301,
      ..._319,
      ..._331
    };
  }
  export const ClientFactory = { ..._341,
    ..._342,
    ..._343
  };
}