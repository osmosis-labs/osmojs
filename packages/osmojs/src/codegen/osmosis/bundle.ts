import * as _107 from "./accum/v1beta1/accum";
import * as _108 from "./concentrated-liquidity/params";
import * as _109 from "./cosmwasmpool/v1beta1/genesis";
import * as _110 from "./cosmwasmpool/v1beta1/gov";
import * as _111 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _112 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _113 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _114 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _115 from "./cosmwasmpool/v1beta1/model/pool";
import * as _116 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _117 from "./cosmwasmpool/v1beta1/model/tx";
import * as _118 from "./cosmwasmpool/v1beta1/params";
import * as _119 from "./cosmwasmpool/v1beta1/query";
import * as _120 from "./cosmwasmpool/v1beta1/tx";
import * as _121 from "./downtime-detector/v1beta1/downtime_duration";
import * as _122 from "./downtime-detector/v1beta1/genesis";
import * as _123 from "./downtime-detector/v1beta1/query";
import * as _124 from "./epochs/genesis";
import * as _125 from "./epochs/query";
import * as _126 from "./gamm/pool-models/balancer/balancerPool";
import * as _127 from "./gamm/v1beta1/genesis";
import * as _128 from "./gamm/v1beta1/gov";
import * as _129 from "./gamm/v1beta1/query";
import * as _130 from "./gamm/v1beta1/tx";
import * as _131 from "./gamm/pool-models/balancer/tx/tx";
import * as _132 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _133 from "./gamm/pool-models/stableswap/tx";
import * as _134 from "./gamm/v2/query";
import * as _135 from "./ibc-rate-limit/v1beta1/genesis";
import * as _136 from "./ibc-rate-limit/v1beta1/params";
import * as _137 from "./ibc-rate-limit/v1beta1/query";
import * as _138 from "./incentives/gauge";
import * as _139 from "./incentives/genesis";
import * as _140 from "./incentives/params";
import * as _141 from "./incentives/query";
import * as _142 from "./incentives/tx";
import * as _143 from "./lockup/genesis";
import * as _144 from "./lockup/lock";
import * as _145 from "./lockup/params";
import * as _146 from "./lockup/query";
import * as _147 from "./lockup/tx";
import * as _148 from "./mint/v1beta1/genesis";
import * as _149 from "./mint/v1beta1/mint";
import * as _150 from "./mint/v1beta1/query";
import * as _151 from "./pool-incentives/v1beta1/genesis";
import * as _152 from "./pool-incentives/v1beta1/gov";
import * as _153 from "./pool-incentives/v1beta1/incentives";
import * as _154 from "./pool-incentives/v1beta1/query";
import * as _155 from "./poolmanager/v1beta1/genesis";
import * as _156 from "./poolmanager/v1beta1/module_route";
import * as _157 from "./poolmanager/v1beta1/query";
import * as _158 from "./poolmanager/v1beta1/swap_route";
import * as _159 from "./poolmanager/v1beta1/tx";
import * as _160 from "./protorev/v1beta1/genesis";
import * as _161 from "./protorev/v1beta1/gov";
import * as _162 from "./protorev/v1beta1/params";
import * as _163 from "./protorev/v1beta1/protorev";
import * as _164 from "./protorev/v1beta1/query";
import * as _165 from "./protorev/v1beta1/tx";
import * as _166 from "./sumtree/v1beta1/tree";
import * as _167 from "./superfluid/genesis";
import * as _168 from "./superfluid/params";
import * as _169 from "./superfluid/query";
import * as _170 from "./superfluid/superfluid";
import * as _171 from "./superfluid/tx";
import * as _172 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _173 from "./tokenfactory/v1beta1/genesis";
import * as _174 from "./tokenfactory/v1beta1/params";
import * as _175 from "./tokenfactory/v1beta1/query";
import * as _176 from "./tokenfactory/v1beta1/tx";
import * as _177 from "./twap/v1beta1/genesis";
import * as _178 from "./twap/v1beta1/query";
import * as _179 from "./twap/v1beta1/twap_record";
import * as _180 from "./txfees/v1beta1/feetoken";
import * as _181 from "./txfees/v1beta1/genesis";
import * as _182 from "./txfees/v1beta1/gov";
import * as _183 from "./txfees/v1beta1/query";
import * as _184 from "./valset-pref/v1beta1/query";
import * as _185 from "./valset-pref/v1beta1/state";
import * as _186 from "./valset-pref/v1beta1/tx";
import * as _275 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _276 from "./gamm/pool-models/stableswap/tx.amino";
import * as _277 from "./gamm/v1beta1/tx.amino";
import * as _278 from "./incentives/tx.amino";
import * as _279 from "./lockup/tx.amino";
import * as _280 from "./poolmanager/v1beta1/tx.amino";
import * as _281 from "./protorev/v1beta1/tx.amino";
import * as _282 from "./superfluid/tx.amino";
import * as _283 from "./tokenfactory/v1beta1/tx.amino";
import * as _284 from "./valset-pref/v1beta1/tx.amino";
import * as _287 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _288 from "./gamm/pool-models/stableswap/tx.registry";
import * as _289 from "./gamm/v1beta1/tx.registry";
import * as _290 from "./incentives/tx.registry";
import * as _291 from "./lockup/tx.registry";
import * as _292 from "./poolmanager/v1beta1/tx.registry";
import * as _293 from "./protorev/v1beta1/tx.registry";
import * as _294 from "./superfluid/tx.registry";
import * as _295 from "./tokenfactory/v1beta1/tx.registry";
import * as _296 from "./valset-pref/v1beta1/tx.registry";
import * as _298 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _299 from "./downtime-detector/v1beta1/query.lcd";
import * as _300 from "./epochs/query.lcd";
import * as _301 from "./gamm/v1beta1/query.lcd";
import * as _302 from "./gamm/v2/query.lcd";
import * as _303 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _304 from "./incentives/query.lcd";
import * as _305 from "./lockup/query.lcd";
import * as _306 from "./mint/v1beta1/query.lcd";
import * as _307 from "./pool-incentives/v1beta1/query.lcd";
import * as _308 from "./poolmanager/v1beta1/query.lcd";
import * as _309 from "./protorev/v1beta1/query.lcd";
import * as _310 from "./superfluid/query.lcd";
import * as _311 from "./tokenfactory/v1beta1/query.lcd";
import * as _312 from "./twap/v1beta1/query.lcd";
import * as _313 from "./txfees/v1beta1/query.lcd";
import * as _314 from "./valset-pref/v1beta1/query.lcd";
import * as _316 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _317 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _318 from "./epochs/query.rpc.Query";
import * as _319 from "./gamm/v1beta1/query.rpc.Query";
import * as _320 from "./gamm/v2/query.rpc.Query";
import * as _321 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _322 from "./incentives/query.rpc.Query";
import * as _323 from "./lockup/query.rpc.Query";
import * as _324 from "./mint/v1beta1/query.rpc.Query";
import * as _325 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _326 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _327 from "./protorev/v1beta1/query.rpc.Query";
import * as _328 from "./superfluid/query.rpc.Query";
import * as _329 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _330 from "./twap/v1beta1/query.rpc.Query";
import * as _331 from "./txfees/v1beta1/query.rpc.Query";
import * as _332 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _335 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _336 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _337 from "./gamm/v1beta1/tx.rpc.msg";
import * as _338 from "./incentives/tx.rpc.msg";
import * as _339 from "./lockup/tx.rpc.msg";
import * as _340 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _341 from "./protorev/v1beta1/tx.rpc.msg";
import * as _342 from "./superfluid/tx.rpc.msg";
import * as _343 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _344 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _354 from "./lcd";
import * as _355 from "./rpc.query";
import * as _356 from "./rpc.tx";
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
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._298,
      ..._316
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = { ..._121,
      ..._122,
      ..._123,
      ..._299,
      ..._317
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._124,
      ..._125,
      ..._300,
      ..._318
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._277,
      ..._289,
      ..._301,
      ..._319,
      ..._337
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._131,
          ..._275,
          ..._287,
          ..._335
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._132,
          ..._133,
          ..._276,
          ..._288,
          ..._336
        };
      }
    }
    export const v2 = { ..._134,
      ..._302,
      ..._320
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._135,
      ..._136,
      ..._137,
      ..._303,
      ..._321
    };
  }
  export const incentives = { ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._278,
    ..._290,
    ..._304,
    ..._322,
    ..._338
  };
  export const lockup = { ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._279,
    ..._291,
    ..._305,
    ..._323,
    ..._339
  };
  export namespace mint {
    export const v1beta1 = { ..._148,
      ..._149,
      ..._150,
      ..._306,
      ..._324
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._307,
      ..._325
    };
  }
  export namespace poolmanager {
    export const v1beta1 = { ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._280,
      ..._292,
      ..._308,
      ..._326,
      ..._340
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._281,
      ..._293,
      ..._309,
      ..._327,
      ..._341
    };
  }
  export namespace store {
    export const v1beta1 = { ..._166
    };
  }
  export const superfluid = { ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._282,
    ..._294,
    ..._310,
    ..._328,
    ..._342
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._283,
      ..._295,
      ..._311,
      ..._329,
      ..._343
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._177,
      ..._178,
      ..._179,
      ..._312,
      ..._330
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._313,
      ..._331
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._184,
      ..._185,
      ..._186,
      ..._284,
      ..._296,
      ..._314,
      ..._332,
      ..._344
    };
  }
  export const ClientFactory = { ..._354,
    ..._355,
    ..._356
  };
}