import * as _92 from "./accum/v1beta1/accum";
import * as _93 from "./concentrated-liquidity/params";
import * as _94 from "./cosmwasmpool/v1beta1/genesis";
import * as _95 from "./cosmwasmpool/v1beta1/model/pool";
import * as _96 from "./cosmwasmpool/v1beta1/model/tx";
import * as _97 from "./cosmwasmpool/v1beta1/query";
import * as _98 from "./cosmwasmpool/v1beta1/tx";
import * as _99 from "./downtime-detector/v1beta1/downtime_duration";
import * as _100 from "./downtime-detector/v1beta1/genesis";
import * as _101 from "./downtime-detector/v1beta1/query";
import * as _102 from "./epochs/genesis";
import * as _103 from "./epochs/query";
import * as _104 from "./gamm/pool-models/balancer/balancerPool";
import * as _105 from "./gamm/v1beta1/genesis";
import * as _106 from "./gamm/v1beta1/gov";
import * as _107 from "./gamm/v1beta1/query";
import * as _108 from "./gamm/v1beta1/tx";
import * as _109 from "./gamm/pool-models/balancer/tx/tx";
import * as _110 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _111 from "./gamm/pool-models/stableswap/tx";
import * as _112 from "./gamm/v2/query";
import * as _113 from "./ibc-rate-limit/v1beta1/genesis";
import * as _114 from "./ibc-rate-limit/v1beta1/params";
import * as _115 from "./ibc-rate-limit/v1beta1/query";
import * as _116 from "./incentives/gauge";
import * as _117 from "./incentives/genesis";
import * as _118 from "./incentives/params";
import * as _119 from "./incentives/query";
import * as _120 from "./incentives/tx";
import * as _121 from "./lockup/genesis";
import * as _122 from "./lockup/lock";
import * as _123 from "./lockup/params";
import * as _124 from "./lockup/query";
import * as _125 from "./lockup/tx";
import * as _126 from "./mint/v1beta1/genesis";
import * as _127 from "./mint/v1beta1/mint";
import * as _128 from "./mint/v1beta1/query";
import * as _129 from "./pool-incentives/v1beta1/genesis";
import * as _130 from "./pool-incentives/v1beta1/gov";
import * as _131 from "./pool-incentives/v1beta1/incentives";
import * as _132 from "./pool-incentives/v1beta1/query";
import * as _133 from "./poolmanager/v1beta1/genesis";
import * as _134 from "./poolmanager/v1beta1/module_route";
import * as _135 from "./poolmanager/v1beta1/query";
import * as _136 from "./poolmanager/v1beta1/swap_route";
import * as _137 from "./poolmanager/v1beta1/tx";
import * as _138 from "./protorev/v1beta1/genesis";
import * as _139 from "./protorev/v1beta1/gov";
import * as _140 from "./protorev/v1beta1/params";
import * as _141 from "./protorev/v1beta1/protorev";
import * as _142 from "./protorev/v1beta1/query";
import * as _143 from "./protorev/v1beta1/tx";
import * as _144 from "./sumtree/v1beta1/tree";
import * as _145 from "./superfluid/genesis";
import * as _146 from "./superfluid/params";
import * as _147 from "./superfluid/query";
import * as _148 from "./superfluid/superfluid";
import * as _149 from "./superfluid/tx";
import * as _150 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _151 from "./tokenfactory/v1beta1/genesis";
import * as _152 from "./tokenfactory/v1beta1/params";
import * as _153 from "./tokenfactory/v1beta1/query";
import * as _154 from "./tokenfactory/v1beta1/tx";
import * as _155 from "./twap/v1beta1/genesis";
import * as _156 from "./twap/v1beta1/query";
import * as _157 from "./twap/v1beta1/twap_record";
import * as _158 from "./txfees/v1beta1/feetoken";
import * as _159 from "./txfees/v1beta1/genesis";
import * as _160 from "./txfees/v1beta1/gov";
import * as _161 from "./txfees/v1beta1/query";
import * as _162 from "./valset-pref/v1beta1/query";
import * as _163 from "./valset-pref/v1beta1/state";
import * as _164 from "./valset-pref/v1beta1/tx";
import * as _230 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _231 from "./gamm/pool-models/stableswap/tx.amino";
import * as _232 from "./gamm/v1beta1/tx.amino";
import * as _233 from "./incentives/tx.amino";
import * as _234 from "./lockup/tx.amino";
import * as _235 from "./poolmanager/v1beta1/tx.amino";
import * as _236 from "./protorev/v1beta1/tx.amino";
import * as _237 from "./superfluid/tx.amino";
import * as _238 from "./tokenfactory/v1beta1/tx.amino";
import * as _239 from "./valset-pref/v1beta1/tx.amino";
import * as _241 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _242 from "./gamm/pool-models/stableswap/tx.registry";
import * as _243 from "./gamm/v1beta1/tx.registry";
import * as _244 from "./incentives/tx.registry";
import * as _245 from "./lockup/tx.registry";
import * as _246 from "./poolmanager/v1beta1/tx.registry";
import * as _247 from "./protorev/v1beta1/tx.registry";
import * as _248 from "./superfluid/tx.registry";
import * as _249 from "./tokenfactory/v1beta1/tx.registry";
import * as _250 from "./valset-pref/v1beta1/tx.registry";
import * as _252 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _253 from "./downtime-detector/v1beta1/query.lcd";
import * as _254 from "./epochs/query.lcd";
import * as _255 from "./gamm/v1beta1/query.lcd";
import * as _256 from "./gamm/v2/query.lcd";
import * as _257 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _258 from "./incentives/query.lcd";
import * as _259 from "./lockup/query.lcd";
import * as _260 from "./mint/v1beta1/query.lcd";
import * as _261 from "./pool-incentives/v1beta1/query.lcd";
import * as _262 from "./poolmanager/v1beta1/query.lcd";
import * as _263 from "./protorev/v1beta1/query.lcd";
import * as _264 from "./superfluid/query.lcd";
import * as _265 from "./tokenfactory/v1beta1/query.lcd";
import * as _266 from "./twap/v1beta1/query.lcd";
import * as _267 from "./txfees/v1beta1/query.lcd";
import * as _268 from "./valset-pref/v1beta1/query.lcd";
import * as _270 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _271 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _272 from "./epochs/query.rpc.Query";
import * as _273 from "./gamm/v1beta1/query.rpc.Query";
import * as _274 from "./gamm/v2/query.rpc.Query";
import * as _275 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _276 from "./incentives/query.rpc.Query";
import * as _277 from "./lockup/query.rpc.Query";
import * as _278 from "./mint/v1beta1/query.rpc.Query";
import * as _279 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _280 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _281 from "./protorev/v1beta1/query.rpc.Query";
import * as _282 from "./superfluid/query.rpc.Query";
import * as _283 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _284 from "./twap/v1beta1/query.rpc.Query";
import * as _285 from "./txfees/v1beta1/query.rpc.Query";
import * as _286 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _288 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _289 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _290 from "./gamm/v1beta1/tx.rpc.msg";
import * as _291 from "./incentives/tx.rpc.msg";
import * as _292 from "./lockup/tx.rpc.msg";
import * as _293 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _294 from "./protorev/v1beta1/tx.rpc.msg";
import * as _295 from "./superfluid/tx.rpc.msg";
import * as _296 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _297 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _307 from "./lcd";
import * as _308 from "./rpc.query";
import * as _309 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = { ..._92
    };
  }
  export const concentratedliquidity = { ..._93
  };
  export namespace cosmwasmpool {
    export const v1beta1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._252,
      ..._270
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = { ..._99,
      ..._100,
      ..._101,
      ..._253,
      ..._271
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._102,
      ..._103,
      ..._254,
      ..._272
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._232,
      ..._243,
      ..._255,
      ..._273,
      ..._290
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._109,
          ..._230,
          ..._241,
          ..._288
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._110,
          ..._111,
          ..._231,
          ..._242,
          ..._289
        };
      }
    }
    export const v2 = { ..._112,
      ..._256,
      ..._274
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._113,
      ..._114,
      ..._115,
      ..._257,
      ..._275
    };
  }
  export const incentives = { ..._116,
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._233,
    ..._244,
    ..._258,
    ..._276,
    ..._291
  };
  export const lockup = { ..._121,
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._234,
    ..._245,
    ..._259,
    ..._277,
    ..._292
  };
  export namespace mint {
    export const v1beta1 = { ..._126,
      ..._127,
      ..._128,
      ..._260,
      ..._278
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._261,
      ..._279
    };
  }
  export namespace poolmanager {
    export const v1beta1 = { ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._235,
      ..._246,
      ..._262,
      ..._280,
      ..._293
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._236,
      ..._247,
      ..._263,
      ..._281,
      ..._294
    };
  }
  export namespace store {
    export const v1beta1 = { ..._144
    };
  }
  export const superfluid = { ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._149,
    ..._237,
    ..._248,
    ..._264,
    ..._282,
    ..._295
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._238,
      ..._249,
      ..._265,
      ..._283,
      ..._296
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._155,
      ..._156,
      ..._157,
      ..._266,
      ..._284
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._267,
      ..._285
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._162,
      ..._163,
      ..._164,
      ..._239,
      ..._250,
      ..._268,
      ..._286,
      ..._297
    };
  }
  export const ClientFactory = { ..._307,
    ..._308,
    ..._309
  };
}