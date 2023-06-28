import * as _100 from "./accum/v1beta1/accum";
import * as _101 from "./concentrated-liquidity/params";
import * as _102 from "./cosmwasmpool/v1beta1/genesis";
import * as _103 from "./cosmwasmpool/v1beta1/gov";
import * as _104 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _105 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _106 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _107 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _108 from "./cosmwasmpool/v1beta1/model/pool";
import * as _109 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _110 from "./cosmwasmpool/v1beta1/model/tx";
import * as _111 from "./cosmwasmpool/v1beta1/params";
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
import * as _260 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _261 from "./gamm/pool-models/stableswap/tx.amino";
import * as _262 from "./gamm/v1beta1/tx.amino";
import * as _263 from "./incentives/tx.amino";
import * as _264 from "./lockup/tx.amino";
import * as _265 from "./poolmanager/v1beta1/tx.amino";
import * as _266 from "./protorev/v1beta1/tx.amino";
import * as _267 from "./superfluid/tx.amino";
import * as _268 from "./tokenfactory/v1beta1/tx.amino";
import * as _269 from "./valset-pref/v1beta1/tx.amino";
import * as _272 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _273 from "./gamm/pool-models/stableswap/tx.registry";
import * as _274 from "./gamm/v1beta1/tx.registry";
import * as _275 from "./incentives/tx.registry";
import * as _276 from "./lockup/tx.registry";
import * as _277 from "./poolmanager/v1beta1/tx.registry";
import * as _278 from "./protorev/v1beta1/tx.registry";
import * as _279 from "./superfluid/tx.registry";
import * as _280 from "./tokenfactory/v1beta1/tx.registry";
import * as _281 from "./valset-pref/v1beta1/tx.registry";
import * as _283 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _284 from "./downtime-detector/v1beta1/query.lcd";
import * as _285 from "./epochs/query.lcd";
import * as _286 from "./gamm/v1beta1/query.lcd";
import * as _287 from "./gamm/v2/query.lcd";
import * as _288 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _289 from "./incentives/query.lcd";
import * as _290 from "./lockup/query.lcd";
import * as _291 from "./mint/v1beta1/query.lcd";
import * as _292 from "./pool-incentives/v1beta1/query.lcd";
import * as _293 from "./poolmanager/v1beta1/query.lcd";
import * as _294 from "./protorev/v1beta1/query.lcd";
import * as _295 from "./superfluid/query.lcd";
import * as _296 from "./tokenfactory/v1beta1/query.lcd";
import * as _297 from "./twap/v1beta1/query.lcd";
import * as _298 from "./txfees/v1beta1/query.lcd";
import * as _299 from "./valset-pref/v1beta1/query.lcd";
import * as _301 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _302 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _303 from "./epochs/query.rpc.Query";
import * as _304 from "./gamm/v1beta1/query.rpc.Query";
import * as _305 from "./gamm/v2/query.rpc.Query";
import * as _306 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _307 from "./incentives/query.rpc.Query";
import * as _308 from "./lockup/query.rpc.Query";
import * as _309 from "./mint/v1beta1/query.rpc.Query";
import * as _310 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _311 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _312 from "./protorev/v1beta1/query.rpc.Query";
import * as _313 from "./superfluid/query.rpc.Query";
import * as _314 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _315 from "./twap/v1beta1/query.rpc.Query";
import * as _316 from "./txfees/v1beta1/query.rpc.Query";
import * as _317 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _320 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _321 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _322 from "./gamm/v1beta1/tx.rpc.msg";
import * as _323 from "./incentives/tx.rpc.msg";
import * as _324 from "./lockup/tx.rpc.msg";
import * as _325 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _326 from "./protorev/v1beta1/tx.rpc.msg";
import * as _327 from "./superfluid/tx.rpc.msg";
import * as _328 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _329 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _339 from "./lcd";
import * as _340 from "./rpc.query";
import * as _341 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = { ..._100
    };
  }
  export const concentratedliquidity = { ..._101
  };
  export namespace cosmwasmpool {
    export const v1beta1 = { ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._283,
      ..._301
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = { ..._114,
      ..._115,
      ..._116,
      ..._284,
      ..._302
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._117,
      ..._118,
      ..._285,
      ..._303
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._262,
      ..._274,
      ..._286,
      ..._304,
      ..._322
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._124,
          ..._260,
          ..._272,
          ..._320
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._125,
          ..._126,
          ..._261,
          ..._273,
          ..._321
        };
      }
    }
    export const v2 = { ..._127,
      ..._287,
      ..._305
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._128,
      ..._129,
      ..._130,
      ..._288,
      ..._306
    };
  }
  export const incentives = { ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._263,
    ..._275,
    ..._289,
    ..._307,
    ..._323
  };
  export const lockup = { ..._136,
    ..._137,
    ..._138,
    ..._139,
    ..._140,
    ..._264,
    ..._276,
    ..._290,
    ..._308,
    ..._324
  };
  export namespace mint {
    export const v1beta1 = { ..._141,
      ..._142,
      ..._143,
      ..._291,
      ..._309
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._292,
      ..._310
    };
  }
  export namespace poolmanager {
    export const v1beta1 = { ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._265,
      ..._277,
      ..._293,
      ..._311,
      ..._325
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._266,
      ..._278,
      ..._294,
      ..._312,
      ..._326
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
    ..._267,
    ..._279,
    ..._295,
    ..._313,
    ..._327
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._268,
      ..._280,
      ..._296,
      ..._314,
      ..._328
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._170,
      ..._171,
      ..._172,
      ..._297,
      ..._315
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._298,
      ..._316
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._177,
      ..._178,
      ..._179,
      ..._269,
      ..._281,
      ..._299,
      ..._317,
      ..._329
    };
  }
  export const ClientFactory = { ..._339,
    ..._340,
    ..._341
  };
}