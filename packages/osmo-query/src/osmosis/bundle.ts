//@ts-nocheck
import * as _125 from "./accum/v1beta1/accum";
import * as _126 from "./concentratedliquidity/params";
import * as _127 from "./cosmwasmpool/v1beta1/genesis";
import * as _128 from "./cosmwasmpool/v1beta1/gov";
import * as _129 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _130 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _131 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _132 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _133 from "./cosmwasmpool/v1beta1/model/pool";
import * as _134 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _135 from "./cosmwasmpool/v1beta1/model/tx";
import * as _136 from "./cosmwasmpool/v1beta1/params";
import * as _137 from "./cosmwasmpool/v1beta1/query";
import * as _138 from "./cosmwasmpool/v1beta1/tx";
import * as _139 from "./downtimedetector/v1beta1/downtime_duration";
import * as _140 from "./downtimedetector/v1beta1/genesis";
import * as _141 from "./downtimedetector/v1beta1/query";
import * as _142 from "./epochs/v1beta1/genesis";
import * as _143 from "./epochs/v1beta1/query";
import * as _144 from "./gamm/poolmodels/balancer/v1beta1/tx";
import * as _145 from "./gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import * as _146 from "./gamm/poolmodels/stableswap/v1beta1/tx";
import * as _147 from "./gamm/v1beta1/balancerPool";
import * as _148 from "./gamm/v1beta1/genesis";
import * as _149 from "./gamm/v1beta1/gov";
import * as _150 from "./gamm/v1beta1/query";
import * as _151 from "./gamm/v1beta1/shared";
import * as _152 from "./gamm/v1beta1/tx";
import * as _153 from "./gamm/v2/query";
import * as _154 from "./ibchooks/genesis";
import * as _155 from "./ibchooks/params";
import * as _156 from "./ibchooks/tx";
import * as _157 from "./ibcratelimit/v1beta1/genesis";
import * as _158 from "./ibcratelimit/v1beta1/params";
import * as _159 from "./ibcratelimit/v1beta1/query";
import * as _160 from "./incentives/gauge";
import * as _161 from "./incentives/genesis";
import * as _162 from "./incentives/gov";
import * as _163 from "./incentives/group";
import * as _164 from "./incentives/params";
import * as _165 from "./incentives/query";
import * as _166 from "./incentives/tx";
import * as _167 from "./lockup/genesis";
import * as _168 from "./lockup/lock";
import * as _169 from "./lockup/params";
import * as _170 from "./lockup/query";
import * as _171 from "./lockup/tx";
import * as _172 from "./mint/v1beta1/genesis";
import * as _173 from "./mint/v1beta1/mint";
import * as _174 from "./mint/v1beta1/query";
import * as _175 from "./poolincentives/v1beta1/genesis";
import * as _176 from "./poolincentives/v1beta1/gov";
import * as _177 from "./poolincentives/v1beta1/incentives";
import * as _178 from "./poolincentives/v1beta1/query";
import * as _179 from "./poolincentives/v1beta1/shared";
import * as _180 from "./poolmanager/v1beta1/genesis";
import * as _181 from "./poolmanager/v1beta1/gov";
import * as _182 from "./poolmanager/v1beta1/module_route";
import * as _183 from "./poolmanager/v1beta1/query";
import * as _184 from "./poolmanager/v1beta1/swap_route";
import * as _185 from "./poolmanager/v1beta1/tracked_volume";
import * as _186 from "./poolmanager/v1beta1/tx";
import * as _187 from "./poolmanager/v2/query";
import * as _188 from "./protorev/v1beta1/genesis";
import * as _189 from "./protorev/v1beta1/gov";
import * as _190 from "./protorev/v1beta1/params";
import * as _191 from "./protorev/v1beta1/protorev";
import * as _192 from "./protorev/v1beta1/query";
import * as _193 from "./protorev/v1beta1/tx";
import * as _194 from "./smartaccount/v1beta1/genesis";
import * as _195 from "./smartaccount/v1beta1/models";
import * as _196 from "./smartaccount/v1beta1/params";
import * as _197 from "./smartaccount/v1beta1/query";
import * as _198 from "./smartaccount/v1beta1/tx";
import * as _199 from "./store/v1beta1/tree";
import * as _200 from "./superfluid/genesis";
import * as _201 from "./superfluid/params";
import * as _202 from "./superfluid/query";
import * as _203 from "./superfluid/superfluid";
import * as _204 from "./superfluid/tx";
import * as _205 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _206 from "./tokenfactory/v1beta1/genesis";
import * as _207 from "./tokenfactory/v1beta1/params";
import * as _208 from "./tokenfactory/v1beta1/query";
import * as _209 from "./tokenfactory/v1beta1/tx";
import * as _210 from "./twap/v1beta1/genesis";
import * as _211 from "./twap/v1beta1/query";
import * as _212 from "./twap/v1beta1/twap_record";
import * as _213 from "./txfees/v1beta1/feetoken";
import * as _214 from "./txfees/v1beta1/genesis";
import * as _215 from "./txfees/v1beta1/gov";
import * as _216 from "./txfees/v1beta1/params";
import * as _217 from "./txfees/v1beta1/query";
import * as _218 from "./txfees/v1beta1/tx";
import * as _219 from "./valsetpref/v1beta1/query";
import * as _220 from "./valsetpref/v1beta1/state";
import * as _221 from "./valsetpref/v1beta1/tx";
import * as _330 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.amino";
import * as _331 from "./concentratedliquidity/v1beta1/tx.amino";
import * as _332 from "./gamm/poolmodels/balancer/v1beta1/tx.amino";
import * as _333 from "./gamm/poolmodels/stableswap/v1beta1/tx.amino";
import * as _334 from "./gamm/v1beta1/tx.amino";
import * as _335 from "./ibchooks/tx.amino";
import * as _336 from "./incentives/tx.amino";
import * as _337 from "./lockup/tx.amino";
import * as _338 from "./poolmanager/v1beta1/tx.amino";
import * as _339 from "./protorev/v1beta1/tx.amino";
import * as _340 from "./smartaccount/v1beta1/tx.amino";
import * as _341 from "./superfluid/tx.amino";
import * as _342 from "./tokenfactory/v1beta1/tx.amino";
import * as _343 from "./txfees/v1beta1/tx.amino";
import * as _344 from "./valsetpref/v1beta1/tx.amino";
import * as _345 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.registry";
import * as _346 from "./concentratedliquidity/v1beta1/tx.registry";
import * as _347 from "./gamm/poolmodels/balancer/v1beta1/tx.registry";
import * as _348 from "./gamm/poolmodels/stableswap/v1beta1/tx.registry";
import * as _349 from "./gamm/v1beta1/tx.registry";
import * as _350 from "./ibchooks/tx.registry";
import * as _351 from "./incentives/tx.registry";
import * as _352 from "./lockup/tx.registry";
import * as _353 from "./poolmanager/v1beta1/tx.registry";
import * as _354 from "./protorev/v1beta1/tx.registry";
import * as _355 from "./smartaccount/v1beta1/tx.registry";
import * as _356 from "./superfluid/tx.registry";
import * as _357 from "./tokenfactory/v1beta1/tx.registry";
import * as _358 from "./txfees/v1beta1/tx.registry";
import * as _359 from "./valsetpref/v1beta1/tx.registry";
import * as _360 from "./concentratedliquidity/v1beta1/query.lcd";
import * as _361 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _362 from "./downtimedetector/v1beta1/query.lcd";
import * as _363 from "./epochs/v1beta1/query.lcd";
import * as _364 from "./gamm/v1beta1/query.lcd";
import * as _365 from "./gamm/v2/query.lcd";
import * as _366 from "./ibcratelimit/v1beta1/query.lcd";
import * as _367 from "./incentives/query.lcd";
import * as _368 from "./lockup/query.lcd";
import * as _369 from "./mint/v1beta1/query.lcd";
import * as _370 from "./poolincentives/v1beta1/query.lcd";
import * as _371 from "./poolmanager/v1beta1/query.lcd";
import * as _372 from "./poolmanager/v2/query.lcd";
import * as _373 from "./protorev/v1beta1/query.lcd";
import * as _374 from "./smartaccount/v1beta1/query.lcd";
import * as _375 from "./superfluid/query.lcd";
import * as _376 from "./tokenfactory/v1beta1/query.lcd";
import * as _377 from "./twap/v1beta1/query.lcd";
import * as _378 from "./txfees/v1beta1/query.lcd";
import * as _379 from "./valsetpref/v1beta1/query.lcd";
import * as _380 from "./concentratedliquidity/v1beta1/query.rpc.Query";
import * as _381 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _382 from "./downtimedetector/v1beta1/query.rpc.Query";
import * as _383 from "./epochs/v1beta1/query.rpc.Query";
import * as _384 from "./gamm/v1beta1/query.rpc.Query";
import * as _385 from "./gamm/v2/query.rpc.Query";
import * as _386 from "./ibcratelimit/v1beta1/query.rpc.Query";
import * as _387 from "./incentives/query.rpc.Query";
import * as _388 from "./lockup/query.rpc.Query";
import * as _389 from "./mint/v1beta1/query.rpc.Query";
import * as _390 from "./poolincentives/v1beta1/query.rpc.Query";
import * as _391 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _392 from "./poolmanager/v2/query.rpc.Query";
import * as _393 from "./protorev/v1beta1/query.rpc.Query";
import * as _394 from "./smartaccount/v1beta1/query.rpc.Query";
import * as _395 from "./superfluid/query.rpc.Query";
import * as _396 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _397 from "./twap/v1beta1/query.rpc.Query";
import * as _398 from "./txfees/v1beta1/query.rpc.Query";
import * as _399 from "./valsetpref/v1beta1/query.rpc.Query";
import * as _400 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg";
import * as _401 from "./concentratedliquidity/v1beta1/tx.rpc.msg";
import * as _402 from "./gamm/poolmodels/balancer/v1beta1/tx.rpc.msg";
import * as _403 from "./gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg";
import * as _404 from "./gamm/v1beta1/tx.rpc.msg";
import * as _405 from "./ibchooks/tx.rpc.msg";
import * as _406 from "./incentives/tx.rpc.msg";
import * as _407 from "./lockup/tx.rpc.msg";
import * as _408 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _409 from "./protorev/v1beta1/tx.rpc.msg";
import * as _410 from "./smartaccount/v1beta1/tx.rpc.msg";
import * as _411 from "./superfluid/tx.rpc.msg";
import * as _412 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _413 from "./txfees/v1beta1/tx.rpc.msg";
import * as _414 from "./valsetpref/v1beta1/tx.rpc.msg";
import * as _424 from "./lcd";
import * as _425 from "./rpc.query";
import * as _426 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = {
      ..._125
    };
  }
  export const concentratedliquidity = {
    ..._126,
    poolmodel: {
      concentrated: {
        v1beta1: {
          ..._330,
          ..._345,
          ..._400
        }
      }
    },
    v1beta1: {
      ..._331,
      ..._346,
      ..._360,
      ..._380,
      ..._401
    }
  };
  export namespace cosmwasmpool {
    export const v1beta1 = {
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._361,
      ..._381
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._139,
      ..._140,
      ..._141,
      ..._362,
      ..._382
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._142,
      ..._143,
      ..._363,
      ..._383
    };
  }
  export namespace gamm {
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._144,
          ..._332,
          ..._347,
          ..._402
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._145,
          ..._146,
          ..._333,
          ..._348,
          ..._403
        };
      }
    }
    export const v1beta1 = {
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._334,
      ..._349,
      ..._364,
      ..._384,
      ..._404
    };
    export const v2 = {
      ..._153,
      ..._365,
      ..._385
    };
  }
  export const ibchooks = {
    ..._154,
    ..._155,
    ..._156,
    ..._335,
    ..._350,
    ..._405
  };
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._157,
      ..._158,
      ..._159,
      ..._366,
      ..._386
    };
  }
  export const incentives = {
    ..._160,
    ..._161,
    ..._162,
    ..._163,
    ..._164,
    ..._165,
    ..._166,
    ..._336,
    ..._351,
    ..._367,
    ..._387,
    ..._406
  };
  export const lockup = {
    ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._337,
    ..._352,
    ..._368,
    ..._388,
    ..._407
  };
  export namespace mint {
    export const v1beta1 = {
      ..._172,
      ..._173,
      ..._174,
      ..._369,
      ..._389
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._175,
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._370,
      ..._390
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._186,
      ..._338,
      ..._353,
      ..._371,
      ..._391,
      ..._408
    };
    export const v2 = {
      ..._187,
      ..._372,
      ..._392
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._339,
      ..._354,
      ..._373,
      ..._393,
      ..._409
    };
  }
  export namespace smartaccount {
    export const v1beta1 = {
      ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._340,
      ..._355,
      ..._374,
      ..._394,
      ..._410
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._199
    };
  }
  export const superfluid = {
    ..._200,
    ..._201,
    ..._202,
    ..._203,
    ..._204,
    ..._341,
    ..._356,
    ..._375,
    ..._395,
    ..._411
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._342,
      ..._357,
      ..._376,
      ..._396,
      ..._412
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._210,
      ..._211,
      ..._212,
      ..._377,
      ..._397
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._343,
      ..._358,
      ..._378,
      ..._398,
      ..._413
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._219,
      ..._220,
      ..._221,
      ..._344,
      ..._359,
      ..._379,
      ..._399,
      ..._414
    };
  }
  export const ClientFactory = {
    ..._424,
    ..._425,
    ..._426
  };
}