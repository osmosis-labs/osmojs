import * as _100 from "./accum/v1beta1/accum";
import * as _101 from "./concentrated-liquidity/params";
import * as _102 from "./cosmwasmpool/v1beta1/genesis";
import * as _103 from "./cosmwasmpool/v1beta1/model/pool";
import * as _104 from "./cosmwasmpool/v1beta1/model/tx";
import * as _105 from "./cosmwasmpool/v1beta1/query";
import * as _106 from "./cosmwasmpool/v1beta1/tx";
import * as _107 from "./downtime-detector/v1beta1/downtime_duration";
import * as _108 from "./downtime-detector/v1beta1/genesis";
import * as _109 from "./downtime-detector/v1beta1/query";
import * as _110 from "./epochs/genesis";
import * as _111 from "./epochs/query";
import * as _112 from "./gamm/pool-models/balancer/balancerPool";
import * as _113 from "./gamm/v1beta1/genesis";
import * as _114 from "./gamm/v1beta1/gov";
import * as _115 from "./gamm/v1beta1/query";
import * as _116 from "./gamm/v1beta1/tx";
import * as _117 from "./gamm/pool-models/balancer/tx/tx";
import * as _118 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _119 from "./gamm/pool-models/stableswap/tx";
import * as _120 from "./gamm/v2/query";
import * as _121 from "./ibc-rate-limit/v1beta1/genesis";
import * as _122 from "./ibc-rate-limit/v1beta1/params";
import * as _123 from "./ibc-rate-limit/v1beta1/query";
import * as _124 from "./incentives/gauge";
import * as _125 from "./incentives/genesis";
import * as _126 from "./incentives/params";
import * as _127 from "./incentives/query";
import * as _128 from "./incentives/tx";
import * as _129 from "./lockup/genesis";
import * as _130 from "./lockup/lock";
import * as _131 from "./lockup/params";
import * as _132 from "./lockup/query";
import * as _133 from "./lockup/tx";
import * as _134 from "./mint/v1beta1/genesis";
import * as _135 from "./mint/v1beta1/mint";
import * as _136 from "./mint/v1beta1/query";
import * as _137 from "./pool-incentives/v1beta1/genesis";
import * as _138 from "./pool-incentives/v1beta1/gov";
import * as _139 from "./pool-incentives/v1beta1/incentives";
import * as _140 from "./pool-incentives/v1beta1/query";
import * as _141 from "./poolmanager/v1beta1/genesis";
import * as _142 from "./poolmanager/v1beta1/module_route";
import * as _143 from "./poolmanager/v1beta1/query";
import * as _144 from "./poolmanager/v1beta1/swap_route";
import * as _145 from "./poolmanager/v1beta1/tx";
import * as _146 from "./protorev/v1beta1/genesis";
import * as _147 from "./protorev/v1beta1/gov";
import * as _148 from "./protorev/v1beta1/params";
import * as _149 from "./protorev/v1beta1/protorev";
import * as _150 from "./protorev/v1beta1/query";
import * as _151 from "./protorev/v1beta1/tx";
import * as _152 from "./sumtree/v1beta1/tree";
import * as _153 from "./superfluid/genesis";
import * as _154 from "./superfluid/params";
import * as _155 from "./superfluid/query";
import * as _156 from "./superfluid/superfluid";
import * as _157 from "./superfluid/tx";
import * as _158 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _159 from "./tokenfactory/v1beta1/genesis";
import * as _160 from "./tokenfactory/v1beta1/params";
import * as _161 from "./tokenfactory/v1beta1/query";
import * as _162 from "./tokenfactory/v1beta1/tx";
import * as _163 from "./twap/v1beta1/genesis";
import * as _164 from "./twap/v1beta1/query";
import * as _165 from "./twap/v1beta1/twap_record";
import * as _166 from "./txfees/v1beta1/feetoken";
import * as _167 from "./txfees/v1beta1/genesis";
import * as _168 from "./txfees/v1beta1/gov";
import * as _169 from "./txfees/v1beta1/query";
import * as _170 from "./valset-pref/v1beta1/query";
import * as _171 from "./valset-pref/v1beta1/state";
import * as _172 from "./valset-pref/v1beta1/tx";
import * as _251 from "./concentrated-liquidity/tx.amino";
import * as _252 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _253 from "./gamm/pool-models/stableswap/tx.amino";
import * as _254 from "./gamm/v1beta1/tx.amino";
import * as _255 from "./incentives/tx.amino";
import * as _256 from "./lockup/tx.amino";
import * as _257 from "./poolmanager/v1beta1/tx.amino";
import * as _258 from "./protorev/v1beta1/tx.amino";
import * as _259 from "./superfluid/tx.amino";
import * as _260 from "./tokenfactory/v1beta1/tx.amino";
import * as _261 from "./valset-pref/v1beta1/tx.amino";
import * as _262 from "./concentrated-liquidity/tx.registry";
import * as _263 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _264 from "./gamm/pool-models/stableswap/tx.registry";
import * as _265 from "./gamm/v1beta1/tx.registry";
import * as _266 from "./incentives/tx.registry";
import * as _267 from "./lockup/tx.registry";
import * as _268 from "./poolmanager/v1beta1/tx.registry";
import * as _269 from "./protorev/v1beta1/tx.registry";
import * as _270 from "./superfluid/tx.registry";
import * as _271 from "./tokenfactory/v1beta1/tx.registry";
import * as _272 from "./valset-pref/v1beta1/tx.registry";
import * as _273 from "./concentrated-liquidity/pool-model/query.lcd";
import * as _274 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _275 from "./downtime-detector/v1beta1/query.lcd";
import * as _276 from "./epochs/query.lcd";
import * as _277 from "./gamm/v1beta1/query.lcd";
import * as _278 from "./gamm/v2/query.lcd";
import * as _279 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _280 from "./incentives/query.lcd";
import * as _281 from "./lockup/query.lcd";
import * as _282 from "./mint/v1beta1/query.lcd";
import * as _283 from "./pool-incentives/v1beta1/query.lcd";
import * as _284 from "./poolmanager/v1beta1/query.lcd";
import * as _285 from "./protorev/v1beta1/query.lcd";
import * as _286 from "./superfluid/query.lcd";
import * as _287 from "./tokenfactory/v1beta1/query.lcd";
import * as _288 from "./twap/v1beta1/query.lcd";
import * as _289 from "./txfees/v1beta1/query.lcd";
import * as _290 from "./valset-pref/v1beta1/query.lcd";
import * as _291 from "./concentrated-liquidity/pool-model/query.rpc.Query";
import * as _292 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _293 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _294 from "./epochs/query.rpc.Query";
import * as _295 from "./gamm/v1beta1/query.rpc.Query";
import * as _296 from "./gamm/v2/query.rpc.Query";
import * as _297 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _298 from "./incentives/query.rpc.Query";
import * as _299 from "./lockup/query.rpc.Query";
import * as _300 from "./mint/v1beta1/query.rpc.Query";
import * as _301 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _302 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _303 from "./protorev/v1beta1/query.rpc.Query";
import * as _304 from "./superfluid/query.rpc.Query";
import * as _305 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _306 from "./twap/v1beta1/query.rpc.Query";
import * as _307 from "./txfees/v1beta1/query.rpc.Query";
import * as _308 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _309 from "./concentrated-liquidity/tx.rpc.msg";
import * as _310 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _311 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _312 from "./gamm/v1beta1/tx.rpc.msg";
import * as _313 from "./incentives/tx.rpc.msg";
import * as _314 from "./lockup/tx.rpc.msg";
import * as _315 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _316 from "./protorev/v1beta1/tx.rpc.msg";
import * as _317 from "./superfluid/tx.rpc.msg";
import * as _318 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _319 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _329 from "./lcd";
import * as _330 from "./rpc.query";
import * as _331 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = {
      ..._100
    };
  }
  export const concentratedliquidity = {
    ..._101,
    v1beta1: {
      ..._251,
      ..._262,
      ..._273,
      ..._291,
      ..._309
    }
  };
  export namespace cosmwasmpool {
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._274,
      ..._292
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._275,
      ..._293
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._276,
      ..._294
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._254,
      ..._265,
      ..._277,
      ..._295,
      ..._312
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._117,
          ..._252,
          ..._263,
          ..._310
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._118,
          ..._119,
          ..._253,
          ..._264,
          ..._311
        };
      }
    }
    export const v2 = {
      ..._120,
      ..._278,
      ..._296
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._121,
      ..._122,
      ..._123,
      ..._279,
      ..._297
    };
  }
  export const incentives = {
    ..._124,
    ..._125,
    ..._126,
    ..._127,
    ..._128,
    ..._255,
    ..._266,
    ..._280,
    ..._298,
    ..._313
  };
  export const lockup = {
    ..._129,
    ..._130,
    ..._131,
    ..._132,
    ..._133,
    ..._256,
    ..._267,
    ..._281,
    ..._299,
    ..._314
  };
  export namespace mint {
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._282,
      ..._300
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._283,
      ..._301
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._257,
      ..._268,
      ..._284,
      ..._302,
      ..._315
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._258,
      ..._269,
      ..._285,
      ..._303,
      ..._316
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._152
    };
  }
  export const superfluid = {
    ..._153,
    ..._154,
    ..._155,
    ..._156,
    ..._157,
    ..._259,
    ..._270,
    ..._286,
    ..._304,
    ..._317
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._260,
      ..._271,
      ..._287,
      ..._305,
      ..._318
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._163,
      ..._164,
      ..._165,
      ..._288,
      ..._306
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._289,
      ..._307
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._170,
      ..._171,
      ..._172,
      ..._261,
      ..._272,
      ..._290,
      ..._308,
      ..._319
    };
  }
  export const ClientFactory = {
    ..._329,
    ..._330,
    ..._331
  };
}