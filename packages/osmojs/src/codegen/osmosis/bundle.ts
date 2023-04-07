import * as _93 from "./accum/v1beta1/accum";
import * as _94 from "./concentrated-liquidity/params";
import * as _95 from "./cosmwasmpool/v1beta1/genesis";
import * as _96 from "./cosmwasmpool/v1beta1/model/pool";
import * as _97 from "./cosmwasmpool/v1beta1/model/tx";
import * as _98 from "./cosmwasmpool/v1beta1/query";
import * as _99 from "./cosmwasmpool/v1beta1/tx";
import * as _100 from "./downtime-detector/v1beta1/downtime_duration";
import * as _101 from "./downtime-detector/v1beta1/genesis";
import * as _102 from "./downtime-detector/v1beta1/query";
import * as _103 from "./epochs/genesis";
import * as _104 from "./epochs/query";
import * as _105 from "./gamm/pool-models/balancer/balancerPool";
import * as _106 from "./gamm/v1beta1/genesis";
import * as _107 from "./gamm/v1beta1/gov";
import * as _108 from "./gamm/v1beta1/query";
import * as _109 from "./gamm/v1beta1/tx";
import * as _110 from "./gamm/pool-models/balancer/tx/tx";
import * as _111 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _112 from "./gamm/pool-models/stableswap/tx";
import * as _113 from "./gamm/v2/query";
import * as _114 from "./ibc-rate-limit/v1beta1/genesis";
import * as _115 from "./ibc-rate-limit/v1beta1/params";
import * as _116 from "./ibc-rate-limit/v1beta1/query";
import * as _117 from "./incentives/gauge";
import * as _118 from "./incentives/genesis";
import * as _119 from "./incentives/params";
import * as _120 from "./incentives/query";
import * as _121 from "./incentives/tx";
import * as _122 from "./lockup/genesis";
import * as _123 from "./lockup/lock";
import * as _124 from "./lockup/params";
import * as _125 from "./lockup/query";
import * as _126 from "./lockup/tx";
import * as _127 from "./mint/v1beta1/genesis";
import * as _128 from "./mint/v1beta1/mint";
import * as _129 from "./mint/v1beta1/query";
import * as _130 from "./pool-incentives/v1beta1/genesis";
import * as _131 from "./pool-incentives/v1beta1/gov";
import * as _132 from "./pool-incentives/v1beta1/incentives";
import * as _133 from "./pool-incentives/v1beta1/query";
import * as _134 from "./poolmanager/v1beta1/genesis";
import * as _135 from "./poolmanager/v1beta1/module_route";
import * as _136 from "./poolmanager/v1beta1/query";
import * as _137 from "./poolmanager/v1beta1/swap_route";
import * as _138 from "./poolmanager/v1beta1/tx";
import * as _139 from "./protorev/v1beta1/genesis";
import * as _140 from "./protorev/v1beta1/gov";
import * as _141 from "./protorev/v1beta1/params";
import * as _142 from "./protorev/v1beta1/protorev";
import * as _143 from "./protorev/v1beta1/query";
import * as _144 from "./protorev/v1beta1/tx";
import * as _145 from "./sumtree/v1beta1/tree";
import * as _146 from "./superfluid/genesis";
import * as _147 from "./superfluid/params";
import * as _148 from "./superfluid/query";
import * as _149 from "./superfluid/superfluid";
import * as _150 from "./superfluid/tx";
import * as _151 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _152 from "./tokenfactory/v1beta1/genesis";
import * as _153 from "./tokenfactory/v1beta1/params";
import * as _154 from "./tokenfactory/v1beta1/query";
import * as _155 from "./tokenfactory/v1beta1/tx";
import * as _156 from "./twap/v1beta1/genesis";
import * as _157 from "./twap/v1beta1/query";
import * as _158 from "./twap/v1beta1/twap_record";
import * as _159 from "./txfees/v1beta1/feetoken";
import * as _160 from "./txfees/v1beta1/genesis";
import * as _161 from "./txfees/v1beta1/gov";
import * as _162 from "./txfees/v1beta1/query";
import * as _163 from "./valset-pref/v1beta1/query";
import * as _164 from "./valset-pref/v1beta1/state";
import * as _165 from "./valset-pref/v1beta1/tx";
import * as _231 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _232 from "./gamm/pool-models/stableswap/tx.amino";
import * as _233 from "./gamm/v1beta1/tx.amino";
import * as _234 from "./incentives/tx.amino";
import * as _235 from "./lockup/tx.amino";
import * as _236 from "./poolmanager/v1beta1/tx.amino";
import * as _237 from "./protorev/v1beta1/tx.amino";
import * as _238 from "./superfluid/tx.amino";
import * as _239 from "./tokenfactory/v1beta1/tx.amino";
import * as _240 from "./valset-pref/v1beta1/tx.amino";
import * as _242 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _243 from "./gamm/pool-models/stableswap/tx.registry";
import * as _244 from "./gamm/v1beta1/tx.registry";
import * as _245 from "./incentives/tx.registry";
import * as _246 from "./lockup/tx.registry";
import * as _247 from "./poolmanager/v1beta1/tx.registry";
import * as _248 from "./protorev/v1beta1/tx.registry";
import * as _249 from "./superfluid/tx.registry";
import * as _250 from "./tokenfactory/v1beta1/tx.registry";
import * as _251 from "./valset-pref/v1beta1/tx.registry";
import * as _253 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _254 from "./downtime-detector/v1beta1/query.lcd";
import * as _255 from "./epochs/query.lcd";
import * as _256 from "./gamm/v1beta1/query.lcd";
import * as _257 from "./gamm/v2/query.lcd";
import * as _258 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _259 from "./incentives/query.lcd";
import * as _260 from "./lockup/query.lcd";
import * as _261 from "./mint/v1beta1/query.lcd";
import * as _262 from "./pool-incentives/v1beta1/query.lcd";
import * as _263 from "./poolmanager/v1beta1/query.lcd";
import * as _264 from "./protorev/v1beta1/query.lcd";
import * as _265 from "./superfluid/query.lcd";
import * as _266 from "./tokenfactory/v1beta1/query.lcd";
import * as _267 from "./twap/v1beta1/query.lcd";
import * as _268 from "./txfees/v1beta1/query.lcd";
import * as _269 from "./valset-pref/v1beta1/query.lcd";
import * as _271 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _272 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _273 from "./epochs/query.rpc.Query";
import * as _274 from "./gamm/v1beta1/query.rpc.Query";
import * as _275 from "./gamm/v2/query.rpc.Query";
import * as _276 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _277 from "./incentives/query.rpc.Query";
import * as _278 from "./lockup/query.rpc.Query";
import * as _279 from "./mint/v1beta1/query.rpc.Query";
import * as _280 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _281 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _282 from "./protorev/v1beta1/query.rpc.Query";
import * as _283 from "./superfluid/query.rpc.Query";
import * as _284 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _285 from "./twap/v1beta1/query.rpc.Query";
import * as _286 from "./txfees/v1beta1/query.rpc.Query";
import * as _287 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _289 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _290 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _291 from "./gamm/v1beta1/tx.rpc.msg";
import * as _292 from "./incentives/tx.rpc.msg";
import * as _293 from "./lockup/tx.rpc.msg";
import * as _294 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _295 from "./protorev/v1beta1/tx.rpc.msg";
import * as _296 from "./superfluid/tx.rpc.msg";
import * as _297 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _298 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _308 from "./lcd";
import * as _309 from "./rpc.query";
import * as _310 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = { ..._93
    };
  }
  export const concentratedliquidity = { ..._94
  };
  export namespace cosmwasmpool {
    export const v1beta1 = { ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._253,
      ..._271
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = { ..._100,
      ..._101,
      ..._102,
      ..._254,
      ..._272
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._103,
      ..._104,
      ..._255,
      ..._273
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._233,
      ..._244,
      ..._256,
      ..._274,
      ..._291
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._110,
          ..._231,
          ..._242,
          ..._289
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._111,
          ..._112,
          ..._232,
          ..._243,
          ..._290
        };
      }
    }
    export const v2 = { ..._113,
      ..._257,
      ..._275
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._114,
      ..._115,
      ..._116,
      ..._258,
      ..._276
    };
  }
  export const incentives = { ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._234,
    ..._245,
    ..._259,
    ..._277,
    ..._292
  };
  export const lockup = { ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._235,
    ..._246,
    ..._260,
    ..._278,
    ..._293
  };
  export namespace mint {
    export const v1beta1 = { ..._127,
      ..._128,
      ..._129,
      ..._261,
      ..._279
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._262,
      ..._280
    };
  }
  export namespace poolmanager {
    export const v1beta1 = { ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._236,
      ..._247,
      ..._263,
      ..._281,
      ..._294
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._237,
      ..._248,
      ..._264,
      ..._282,
      ..._295
    };
  }
  export namespace store {
    export const v1beta1 = { ..._145
    };
  }
  export const superfluid = { ..._146,
    ..._147,
    ..._148,
    ..._149,
    ..._150,
    ..._238,
    ..._249,
    ..._265,
    ..._283,
    ..._296
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._239,
      ..._250,
      ..._266,
      ..._284,
      ..._297
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._156,
      ..._157,
      ..._158,
      ..._267,
      ..._285
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._268,
      ..._286
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._163,
      ..._164,
      ..._165,
      ..._240,
      ..._251,
      ..._269,
      ..._287,
      ..._298
    };
  }
  export const ClientFactory = { ..._308,
    ..._309,
    ..._310
  };
}