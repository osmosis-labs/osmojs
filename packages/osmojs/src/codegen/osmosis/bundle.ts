import * as _90 from "./accum/v1beta1/accum";
import * as _91 from "./concentrated-liquidity/params";
import * as _92 from "./downtime-detector/v1beta1/downtime_duration";
import * as _93 from "./downtime-detector/v1beta1/genesis";
import * as _94 from "./downtime-detector/v1beta1/query";
import * as _95 from "./epochs/genesis";
import * as _96 from "./epochs/query";
import * as _97 from "./gamm/pool-models/balancer/balancerPool";
import * as _98 from "./gamm/v1beta1/genesis";
import * as _99 from "./gamm/v1beta1/gov";
import * as _100 from "./gamm/v1beta1/query";
import * as _101 from "./gamm/v1beta1/tx";
import * as _102 from "./gamm/pool-models/balancer/tx/tx";
import * as _103 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _104 from "./gamm/pool-models/stableswap/tx";
import * as _105 from "./gamm/v2/query";
import * as _106 from "./ibc-rate-limit/v1beta1/params";
import * as _107 from "./ibc-rate-limit/v1beta1/query";
import * as _108 from "./incentives/gauge";
import * as _109 from "./incentives/genesis";
import * as _110 from "./incentives/params";
import * as _111 from "./incentives/query";
import * as _112 from "./incentives/tx";
import * as _113 from "./lockup/genesis";
import * as _114 from "./lockup/lock";
import * as _115 from "./lockup/params";
import * as _116 from "./lockup/query";
import * as _117 from "./lockup/tx";
import * as _118 from "./mint/v1beta1/genesis";
import * as _119 from "./mint/v1beta1/mint";
import * as _120 from "./mint/v1beta1/query";
import * as _121 from "./pool-incentives/v1beta1/genesis";
import * as _122 from "./pool-incentives/v1beta1/gov";
import * as _123 from "./pool-incentives/v1beta1/incentives";
import * as _124 from "./pool-incentives/v1beta1/query";
import * as _125 from "./poolmanager/v1beta1/genesis";
import * as _126 from "./poolmanager/v1beta1/module_route";
import * as _127 from "./poolmanager/v1beta1/query";
import * as _128 from "./poolmanager/v1beta1/swap_route";
import * as _129 from "./poolmanager/v1beta1/tx";
import * as _130 from "./protorev/v1beta1/genesis";
import * as _131 from "./protorev/v1beta1/gov";
import * as _132 from "./protorev/v1beta1/params";
import * as _133 from "./protorev/v1beta1/protorev";
import * as _134 from "./protorev/v1beta1/query";
import * as _135 from "./protorev/v1beta1/tx";
import * as _136 from "./sumtree/v1beta1/tree";
import * as _137 from "./superfluid/genesis";
import * as _138 from "./superfluid/params";
import * as _139 from "./superfluid/query";
import * as _140 from "./superfluid/superfluid";
import * as _141 from "./superfluid/tx";
import * as _142 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _143 from "./tokenfactory/v1beta1/genesis";
import * as _144 from "./tokenfactory/v1beta1/params";
import * as _145 from "./tokenfactory/v1beta1/query";
import * as _146 from "./tokenfactory/v1beta1/tx";
import * as _147 from "./twap/v1beta1/genesis";
import * as _148 from "./twap/v1beta1/query";
import * as _149 from "./twap/v1beta1/twap_record";
import * as _150 from "./txfees/v1beta1/feetoken";
import * as _151 from "./txfees/v1beta1/genesis";
import * as _152 from "./txfees/v1beta1/gov";
import * as _153 from "./txfees/v1beta1/query";
import * as _154 from "./valset-pref/v1beta1/query";
import * as _155 from "./valset-pref/v1beta1/state";
import * as _156 from "./valset-pref/v1beta1/tx";
import * as _220 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _221 from "./gamm/pool-models/stableswap/tx.amino";
import * as _222 from "./gamm/v1beta1/tx.amino";
import * as _223 from "./incentives/tx.amino";
import * as _224 from "./lockup/tx.amino";
import * as _225 from "./poolmanager/v1beta1/tx.amino";
import * as _226 from "./protorev/v1beta1/tx.amino";
import * as _227 from "./superfluid/tx.amino";
import * as _228 from "./tokenfactory/v1beta1/tx.amino";
import * as _229 from "./valset-pref/v1beta1/tx.amino";
import * as _231 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _232 from "./gamm/pool-models/stableswap/tx.registry";
import * as _233 from "./gamm/v1beta1/tx.registry";
import * as _234 from "./incentives/tx.registry";
import * as _235 from "./lockup/tx.registry";
import * as _236 from "./poolmanager/v1beta1/tx.registry";
import * as _237 from "./protorev/v1beta1/tx.registry";
import * as _238 from "./superfluid/tx.registry";
import * as _239 from "./tokenfactory/v1beta1/tx.registry";
import * as _240 from "./valset-pref/v1beta1/tx.registry";
import * as _242 from "./downtime-detector/v1beta1/query.lcd";
import * as _243 from "./epochs/query.lcd";
import * as _244 from "./gamm/v1beta1/query.lcd";
import * as _245 from "./gamm/v2/query.lcd";
import * as _246 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _247 from "./incentives/query.lcd";
import * as _248 from "./lockup/query.lcd";
import * as _249 from "./mint/v1beta1/query.lcd";
import * as _250 from "./pool-incentives/v1beta1/query.lcd";
import * as _251 from "./poolmanager/v1beta1/query.lcd";
import * as _252 from "./protorev/v1beta1/query.lcd";
import * as _253 from "./superfluid/query.lcd";
import * as _254 from "./tokenfactory/v1beta1/query.lcd";
import * as _255 from "./twap/v1beta1/query.lcd";
import * as _256 from "./txfees/v1beta1/query.lcd";
import * as _257 from "./valset-pref/v1beta1/query.lcd";
import * as _259 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _260 from "./epochs/query.rpc.Query";
import * as _261 from "./gamm/v1beta1/query.rpc.Query";
import * as _262 from "./gamm/v2/query.rpc.Query";
import * as _263 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _264 from "./incentives/query.rpc.Query";
import * as _265 from "./lockup/query.rpc.Query";
import * as _266 from "./mint/v1beta1/query.rpc.Query";
import * as _267 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _268 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _269 from "./protorev/v1beta1/query.rpc.Query";
import * as _270 from "./superfluid/query.rpc.Query";
import * as _271 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _272 from "./twap/v1beta1/query.rpc.Query";
import * as _273 from "./txfees/v1beta1/query.rpc.Query";
import * as _274 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _276 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _277 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _278 from "./gamm/v1beta1/tx.rpc.msg";
import * as _279 from "./incentives/tx.rpc.msg";
import * as _280 from "./lockup/tx.rpc.msg";
import * as _281 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _282 from "./protorev/v1beta1/tx.rpc.msg";
import * as _283 from "./superfluid/tx.rpc.msg";
import * as _284 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _285 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _295 from "./lcd";
import * as _296 from "./rpc.query";
import * as _297 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = { ..._90
    };
  }
  export const concentratedliquidity = { ..._91
  };
  export namespace downtimedetector {
    export const v1beta1 = { ..._92,
      ..._93,
      ..._94,
      ..._242,
      ..._259
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._95,
      ..._96,
      ..._243,
      ..._260
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._222,
      ..._233,
      ..._244,
      ..._261,
      ..._278
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._102,
          ..._220,
          ..._231,
          ..._276
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._103,
          ..._104,
          ..._221,
          ..._232,
          ..._277
        };
      }
    }
    export const v2 = { ..._105,
      ..._245,
      ..._262
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._106,
      ..._107,
      ..._246,
      ..._263
    };
  }
  export const incentives = { ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._112,
    ..._223,
    ..._234,
    ..._247,
    ..._264,
    ..._279
  };
  export const lockup = { ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._224,
    ..._235,
    ..._248,
    ..._265,
    ..._280
  };
  export namespace mint {
    export const v1beta1 = { ..._118,
      ..._119,
      ..._120,
      ..._249,
      ..._266
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._250,
      ..._267
    };
  }
  export namespace poolmanager {
    export const v1beta1 = { ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._225,
      ..._236,
      ..._251,
      ..._268,
      ..._281
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._226,
      ..._237,
      ..._252,
      ..._269,
      ..._282
    };
  }
  export namespace store {
    export const v1beta1 = { ..._136
    };
  }
  export const superfluid = { ..._137,
    ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._227,
    ..._238,
    ..._253,
    ..._270,
    ..._283
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._228,
      ..._239,
      ..._254,
      ..._271,
      ..._284
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._147,
      ..._148,
      ..._149,
      ..._255,
      ..._272
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._256,
      ..._273
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._154,
      ..._155,
      ..._156,
      ..._229,
      ..._240,
      ..._257,
      ..._274,
      ..._285
    };
  }
  export const ClientFactory = { ..._295,
    ..._296,
    ..._297
  };
}