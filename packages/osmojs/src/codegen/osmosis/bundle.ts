import * as _104 from "./accum/v1beta1/accum";
import * as _105 from "./concentrated-liquidity/params";
import * as _106 from "./cosmwasmpool/v1beta1/genesis";
import * as _107 from "./cosmwasmpool/v1beta1/model/pool";
import * as _108 from "./cosmwasmpool/v1beta1/model/tx";
import * as _109 from "./cosmwasmpool/v1beta1/query";
import * as _110 from "./cosmwasmpool/v1beta1/tx";
import * as _111 from "./downtime-detector/v1beta1/downtime_duration";
import * as _112 from "./downtime-detector/v1beta1/genesis";
import * as _113 from "./downtime-detector/v1beta1/query";
import * as _114 from "./epochs/genesis";
import * as _115 from "./epochs/query";
import * as _116 from "./gamm/pool-models/balancer/balancerPool";
import * as _117 from "./gamm/v1beta1/genesis";
import * as _118 from "./gamm/v1beta1/gov";
import * as _119 from "./gamm/v1beta1/query";
import * as _120 from "./gamm/v1beta1/tx";
import * as _121 from "./gamm/pool-models/balancer/tx/tx";
import * as _122 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _123 from "./gamm/pool-models/stableswap/tx";
import * as _124 from "./gamm/v2/query";
import * as _125 from "./ibc-rate-limit/v1beta1/genesis";
import * as _126 from "./ibc-rate-limit/v1beta1/params";
import * as _127 from "./ibc-rate-limit/v1beta1/query";
import * as _128 from "./incentives/gauge";
import * as _129 from "./incentives/genesis";
import * as _130 from "./incentives/params";
import * as _131 from "./incentives/query";
import * as _132 from "./incentives/tx";
import * as _133 from "./lockup/genesis";
import * as _134 from "./lockup/lock";
import * as _135 from "./lockup/params";
import * as _136 from "./lockup/query";
import * as _137 from "./lockup/tx";
import * as _138 from "./mint/v1beta1/genesis";
import * as _139 from "./mint/v1beta1/mint";
import * as _140 from "./mint/v1beta1/query";
import * as _141 from "./pool-incentives/v1beta1/genesis";
import * as _142 from "./pool-incentives/v1beta1/gov";
import * as _143 from "./pool-incentives/v1beta1/incentives";
import * as _144 from "./pool-incentives/v1beta1/query";
import * as _145 from "./poolmanager/v1beta1/genesis";
import * as _146 from "./poolmanager/v1beta1/module_route";
import * as _147 from "./poolmanager/v1beta1/query";
import * as _148 from "./poolmanager/v1beta1/swap_route";
import * as _149 from "./poolmanager/v1beta1/tx";
import * as _150 from "./protorev/v1beta1/genesis";
import * as _151 from "./protorev/v1beta1/gov";
import * as _152 from "./protorev/v1beta1/params";
import * as _153 from "./protorev/v1beta1/protorev";
import * as _154 from "./protorev/v1beta1/query";
import * as _155 from "./protorev/v1beta1/tx";
import * as _156 from "./sumtree/v1beta1/tree";
import * as _157 from "./superfluid/genesis";
import * as _158 from "./superfluid/params";
import * as _159 from "./superfluid/query";
import * as _160 from "./superfluid/superfluid";
import * as _161 from "./superfluid/tx";
import * as _162 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _163 from "./tokenfactory/v1beta1/genesis";
import * as _164 from "./tokenfactory/v1beta1/params";
import * as _165 from "./tokenfactory/v1beta1/query";
import * as _166 from "./tokenfactory/v1beta1/tx";
import * as _167 from "./twap/v1beta1/genesis";
import * as _168 from "./twap/v1beta1/query";
import * as _169 from "./twap/v1beta1/twap_record";
import * as _170 from "./txfees/v1beta1/feetoken";
import * as _171 from "./txfees/v1beta1/genesis";
import * as _172 from "./txfees/v1beta1/gov";
import * as _173 from "./txfees/v1beta1/query";
import * as _174 from "./valset-pref/v1beta1/query";
import * as _175 from "./valset-pref/v1beta1/state";
import * as _176 from "./valset-pref/v1beta1/tx";
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
import * as _273 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _274 from "./gamm/pool-models/stableswap/tx.registry";
import * as _275 from "./gamm/v1beta1/tx.registry";
import * as _276 from "./incentives/tx.registry";
import * as _277 from "./lockup/tx.registry";
import * as _278 from "./poolmanager/v1beta1/tx.registry";
import * as _279 from "./protorev/v1beta1/tx.registry";
import * as _280 from "./superfluid/tx.registry";
import * as _281 from "./tokenfactory/v1beta1/tx.registry";
import * as _282 from "./valset-pref/v1beta1/tx.registry";
import * as _284 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _285 from "./downtime-detector/v1beta1/query.lcd";
import * as _286 from "./epochs/query.lcd";
import * as _287 from "./gamm/v1beta1/query.lcd";
import * as _288 from "./gamm/v2/query.lcd";
import * as _289 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _290 from "./incentives/query.lcd";
import * as _291 from "./lockup/query.lcd";
import * as _292 from "./mint/v1beta1/query.lcd";
import * as _293 from "./pool-incentives/v1beta1/query.lcd";
import * as _294 from "./poolmanager/v1beta1/query.lcd";
import * as _295 from "./protorev/v1beta1/query.lcd";
import * as _296 from "./superfluid/query.lcd";
import * as _297 from "./tokenfactory/v1beta1/query.lcd";
import * as _298 from "./twap/v1beta1/query.lcd";
import * as _299 from "./txfees/v1beta1/query.lcd";
import * as _300 from "./valset-pref/v1beta1/query.lcd";
import * as _302 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _303 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _304 from "./epochs/query.rpc.Query";
import * as _305 from "./gamm/v1beta1/query.rpc.Query";
import * as _306 from "./gamm/v2/query.rpc.Query";
import * as _307 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _308 from "./incentives/query.rpc.Query";
import * as _309 from "./lockup/query.rpc.Query";
import * as _310 from "./mint/v1beta1/query.rpc.Query";
import * as _311 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _312 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _313 from "./protorev/v1beta1/query.rpc.Query";
import * as _314 from "./superfluid/query.rpc.Query";
import * as _315 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _316 from "./twap/v1beta1/query.rpc.Query";
import * as _317 from "./txfees/v1beta1/query.rpc.Query";
import * as _318 from "./valset-pref/v1beta1/query.rpc.Query";
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
    export const v1beta1 = { ..._104
    };
  }
  export const concentratedliquidity = { ..._105
  };
  export namespace cosmwasmpool {
    export const v1beta1 = { ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._284,
      ..._302
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = { ..._111,
      ..._112,
      ..._113,
      ..._285,
      ..._303
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._114,
      ..._115,
      ..._286,
      ..._304
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._264,
      ..._275,
      ..._287,
      ..._305,
      ..._322
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._121,
          ..._262,
          ..._273,
          ..._320
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._122,
          ..._123,
          ..._263,
          ..._274,
          ..._321
        };
      }
    }
    export const v2 = { ..._124,
      ..._288,
      ..._306
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._125,
      ..._126,
      ..._127,
      ..._289,
      ..._307
    };
  }
  export const incentives = { ..._128,
    ..._129,
    ..._130,
    ..._131,
    ..._132,
    ..._265,
    ..._276,
    ..._290,
    ..._308,
    ..._323
  };
  export const lockup = { ..._133,
    ..._134,
    ..._135,
    ..._136,
    ..._137,
    ..._266,
    ..._277,
    ..._291,
    ..._309,
    ..._324
  };
  export namespace mint {
    export const v1beta1 = { ..._138,
      ..._139,
      ..._140,
      ..._292,
      ..._310
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._293,
      ..._311
    };
  }
  export namespace poolmanager {
    export const v1beta1 = { ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._267,
      ..._278,
      ..._294,
      ..._312,
      ..._325
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._268,
      ..._279,
      ..._295,
      ..._313,
      ..._326
    };
  }
  export namespace store {
    export const v1beta1 = { ..._156
    };
  }
  export const superfluid = { ..._157,
    ..._158,
    ..._159,
    ..._160,
    ..._161,
    ..._269,
    ..._280,
    ..._296,
    ..._314,
    ..._327
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._270,
      ..._281,
      ..._297,
      ..._315,
      ..._328
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._167,
      ..._168,
      ..._169,
      ..._298,
      ..._316
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._170,
      ..._171,
      ..._172,
      ..._173,
      ..._299,
      ..._317
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._174,
      ..._175,
      ..._176,
      ..._271,
      ..._282,
      ..._300,
      ..._318,
      ..._329
    };
  }
  export const ClientFactory = { ..._339,
    ..._340,
    ..._341
  };
}