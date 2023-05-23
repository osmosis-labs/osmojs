import * as _108 from "./accum/v1beta1/accum";
import * as _109 from "./concentrated-liquidity/params";
import * as _110 from "./cosmwasmpool/v1beta1/genesis";
import * as _111 from "./cosmwasmpool/v1beta1/model/pool";
import * as _112 from "./cosmwasmpool/v1beta1/model/tx";
import * as _113 from "./cosmwasmpool/v1beta1/query";
import * as _114 from "./cosmwasmpool/v1beta1/tx";
import * as _115 from "./downtime-detector/v1beta1/downtime_duration";
import * as _116 from "./downtime-detector/v1beta1/genesis";
import * as _117 from "./downtime-detector/v1beta1/query";
import * as _118 from "./epochs/genesis";
import * as _119 from "./epochs/query";
import * as _120 from "./gamm/pool-models/balancer/balancerPool";
import * as _121 from "./gamm/v1beta1/genesis";
import * as _122 from "./gamm/v1beta1/gov";
import * as _123 from "./gamm/v1beta1/query";
import * as _124 from "./gamm/v1beta1/tx";
import * as _125 from "./gamm/pool-models/balancer/tx/tx";
import * as _126 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _127 from "./gamm/pool-models/stableswap/tx";
import * as _128 from "./gamm/v2/query";
import * as _129 from "./ibc-rate-limit/v1beta1/genesis";
import * as _130 from "./ibc-rate-limit/v1beta1/params";
import * as _131 from "./ibc-rate-limit/v1beta1/query";
import * as _132 from "./incentives/gauge";
import * as _133 from "./incentives/genesis";
import * as _134 from "./incentives/params";
import * as _135 from "./incentives/query";
import * as _136 from "./incentives/tx";
import * as _137 from "./lockup/genesis";
import * as _138 from "./lockup/lock";
import * as _139 from "./lockup/params";
import * as _140 from "./lockup/query";
import * as _141 from "./lockup/tx";
import * as _142 from "./mint/v1beta1/genesis";
import * as _143 from "./mint/v1beta1/mint";
import * as _144 from "./mint/v1beta1/query";
import * as _145 from "./pool-incentives/v1beta1/genesis";
import * as _146 from "./pool-incentives/v1beta1/gov";
import * as _147 from "./pool-incentives/v1beta1/incentives";
import * as _148 from "./pool-incentives/v1beta1/query";
import * as _149 from "./poolmanager/v1beta1/genesis";
import * as _150 from "./poolmanager/v1beta1/module_route";
import * as _151 from "./poolmanager/v1beta1/query";
import * as _152 from "./poolmanager/v1beta1/swap_route";
import * as _153 from "./poolmanager/v1beta1/tx";
import * as _154 from "./protorev/v1beta1/genesis";
import * as _155 from "./protorev/v1beta1/gov";
import * as _156 from "./protorev/v1beta1/params";
import * as _157 from "./protorev/v1beta1/protorev";
import * as _158 from "./protorev/v1beta1/query";
import * as _159 from "./protorev/v1beta1/tx";
import * as _160 from "./sumtree/v1beta1/tree";
import * as _161 from "./superfluid/genesis";
import * as _162 from "./superfluid/params";
import * as _163 from "./superfluid/query";
import * as _164 from "./superfluid/superfluid";
import * as _165 from "./superfluid/tx";
import * as _166 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _167 from "./tokenfactory/v1beta1/genesis";
import * as _168 from "./tokenfactory/v1beta1/params";
import * as _169 from "./tokenfactory/v1beta1/query";
import * as _170 from "./tokenfactory/v1beta1/tx";
import * as _171 from "./twap/v1beta1/genesis";
import * as _172 from "./twap/v1beta1/query";
import * as _173 from "./twap/v1beta1/twap_record";
import * as _174 from "./txfees/v1beta1/feetoken";
import * as _175 from "./txfees/v1beta1/genesis";
import * as _176 from "./txfees/v1beta1/gov";
import * as _177 from "./txfees/v1beta1/query";
import * as _178 from "./valset-pref/v1beta1/query";
import * as _179 from "./valset-pref/v1beta1/state";
import * as _180 from "./valset-pref/v1beta1/tx";
import * as _270 from "./concentrated-liquidity/tx.amino";
import * as _271 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _272 from "./gamm/pool-models/stableswap/tx.amino";
import * as _273 from "./gamm/v1beta1/tx.amino";
import * as _274 from "./incentives/tx.amino";
import * as _275 from "./lockup/tx.amino";
import * as _276 from "./poolmanager/v1beta1/tx.amino";
import * as _277 from "./protorev/v1beta1/tx.amino";
import * as _278 from "./superfluid/tx.amino";
import * as _279 from "./tokenfactory/v1beta1/tx.amino";
import * as _280 from "./valset-pref/v1beta1/tx.amino";
import * as _281 from "./concentrated-liquidity/tx.registry";
import * as _282 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _283 from "./gamm/pool-models/stableswap/tx.registry";
import * as _284 from "./gamm/v1beta1/tx.registry";
import * as _285 from "./incentives/tx.registry";
import * as _286 from "./lockup/tx.registry";
import * as _287 from "./poolmanager/v1beta1/tx.registry";
import * as _288 from "./protorev/v1beta1/tx.registry";
import * as _289 from "./superfluid/tx.registry";
import * as _290 from "./tokenfactory/v1beta1/tx.registry";
import * as _291 from "./valset-pref/v1beta1/tx.registry";
import * as _292 from "./concentrated-liquidity/pool-model/query.lcd";
import * as _293 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _294 from "./downtime-detector/v1beta1/query.lcd";
import * as _295 from "./epochs/query.lcd";
import * as _296 from "./gamm/v1beta1/query.lcd";
import * as _297 from "./gamm/v2/query.lcd";
import * as _298 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _299 from "./incentives/query.lcd";
import * as _300 from "./lockup/query.lcd";
import * as _301 from "./mint/v1beta1/query.lcd";
import * as _302 from "./pool-incentives/v1beta1/query.lcd";
import * as _303 from "./poolmanager/v1beta1/query.lcd";
import * as _304 from "./protorev/v1beta1/query.lcd";
import * as _305 from "./superfluid/query.lcd";
import * as _306 from "./tokenfactory/v1beta1/query.lcd";
import * as _307 from "./twap/v1beta1/query.lcd";
import * as _308 from "./txfees/v1beta1/query.lcd";
import * as _309 from "./valset-pref/v1beta1/query.lcd";
import * as _310 from "./concentrated-liquidity/pool-model/query.rpc.Query";
import * as _311 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _312 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _313 from "./epochs/query.rpc.Query";
import * as _314 from "./gamm/v1beta1/query.rpc.Query";
import * as _315 from "./gamm/v2/query.rpc.Query";
import * as _316 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _317 from "./incentives/query.rpc.Query";
import * as _318 from "./lockup/query.rpc.Query";
import * as _319 from "./mint/v1beta1/query.rpc.Query";
import * as _320 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _321 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _322 from "./protorev/v1beta1/query.rpc.Query";
import * as _323 from "./superfluid/query.rpc.Query";
import * as _324 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _325 from "./twap/v1beta1/query.rpc.Query";
import * as _326 from "./txfees/v1beta1/query.rpc.Query";
import * as _327 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _328 from "./concentrated-liquidity/tx.rpc.msg";
import * as _329 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _330 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _331 from "./gamm/v1beta1/tx.rpc.msg";
import * as _332 from "./incentives/tx.rpc.msg";
import * as _333 from "./lockup/tx.rpc.msg";
import * as _334 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _335 from "./protorev/v1beta1/tx.rpc.msg";
import * as _336 from "./superfluid/tx.rpc.msg";
import * as _337 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _338 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _348 from "./lcd";
import * as _349 from "./rpc.query";
import * as _350 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = {
      ..._108
    };
  }
  export const concentratedliquidity = {
    ..._109,
    v1beta1: {
      ..._270,
      ..._281,
      ..._292,
      ..._310,
      ..._328
    }
  };
  export namespace cosmwasmpool {
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._293,
      ..._311
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._115,
      ..._116,
      ..._117,
      ..._294,
      ..._312
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._118,
      ..._119,
      ..._295,
      ..._313
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._273,
      ..._284,
      ..._296,
      ..._314,
      ..._331
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._125,
          ..._271,
          ..._282,
          ..._329
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._126,
          ..._127,
          ..._272,
          ..._283,
          ..._330
        };
      }
    }
    export const v2 = {
      ..._128,
      ..._297,
      ..._315
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._129,
      ..._130,
      ..._131,
      ..._298,
      ..._316
    };
  }
  export const incentives = {
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._136,
    ..._274,
    ..._285,
    ..._299,
    ..._317,
    ..._332
  };
  export const lockup = {
    ..._137,
    ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._275,
    ..._286,
    ..._300,
    ..._318,
    ..._333
  };
  export namespace mint {
    export const v1beta1 = {
      ..._142,
      ..._143,
      ..._144,
      ..._301,
      ..._319
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._302,
      ..._320
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._276,
      ..._287,
      ..._303,
      ..._321,
      ..._334
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._277,
      ..._288,
      ..._304,
      ..._322,
      ..._335
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._160
    };
  }
  export const superfluid = {
    ..._161,
    ..._162,
    ..._163,
    ..._164,
    ..._165,
    ..._278,
    ..._289,
    ..._305,
    ..._323,
    ..._336
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._279,
      ..._290,
      ..._306,
      ..._324,
      ..._337
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._171,
      ..._172,
      ..._173,
      ..._307,
      ..._325
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._174,
      ..._175,
      ..._176,
      ..._177,
      ..._308,
      ..._326
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._178,
      ..._179,
      ..._180,
      ..._280,
      ..._291,
      ..._309,
      ..._327,
      ..._338
    };
  }
  export const ClientFactory = {
    ..._348,
    ..._349,
    ..._350
  };
}