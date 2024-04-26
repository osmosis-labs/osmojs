//@ts-nocheck
import * as _125 from "./accum/v1beta1/accum";
import * as _126 from "./bridge/v1beta1/bridge";
import * as _127 from "./bridge/v1beta1/events";
import * as _128 from "./bridge/v1beta1/genesis";
import * as _129 from "./bridge/v1beta1/query";
import * as _130 from "./bridge/v1beta1/tx";
import * as _131 from "./concentratedliquidity/params";
import * as _132 from "./cosmwasmpool/v1beta1/genesis";
import * as _133 from "./cosmwasmpool/v1beta1/gov";
import * as _134 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _135 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _136 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _137 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _138 from "./cosmwasmpool/v1beta1/model/pool";
import * as _139 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _140 from "./cosmwasmpool/v1beta1/model/tx";
import * as _141 from "./cosmwasmpool/v1beta1/params";
import * as _142 from "./cosmwasmpool/v1beta1/query";
import * as _143 from "./cosmwasmpool/v1beta1/tx";
import * as _144 from "./downtimedetector/v1beta1/downtime_duration";
import * as _145 from "./downtimedetector/v1beta1/genesis";
import * as _146 from "./downtimedetector/v1beta1/query";
import * as _147 from "./epochs/v1beta1/genesis";
import * as _148 from "./epochs/v1beta1/query";
import * as _149 from "./gamm/poolmodels/balancer/v1beta1/tx";
import * as _150 from "./gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import * as _151 from "./gamm/poolmodels/stableswap/v1beta1/tx";
import * as _152 from "./gamm/v1beta1/balancerPool";
import * as _153 from "./gamm/v1beta1/genesis";
import * as _154 from "./gamm/v1beta1/gov";
import * as _155 from "./gamm/v1beta1/query";
import * as _156 from "./gamm/v1beta1/shared";
import * as _157 from "./gamm/v1beta1/tx";
import * as _158 from "./gamm/v2/query";
import * as _159 from "./ibchooks/genesis";
import * as _160 from "./ibchooks/params";
import * as _161 from "./ibchooks/tx";
import * as _162 from "./ibcratelimit/v1beta1/genesis";
import * as _163 from "./ibcratelimit/v1beta1/params";
import * as _164 from "./ibcratelimit/v1beta1/query";
import * as _165 from "./incentives/gauge";
import * as _166 from "./incentives/genesis";
import * as _167 from "./incentives/gov";
import * as _168 from "./incentives/group";
import * as _169 from "./incentives/params";
import * as _170 from "./incentives/query";
import * as _171 from "./incentives/tx";
import * as _172 from "./lockup/genesis";
import * as _173 from "./lockup/lock";
import * as _174 from "./lockup/params";
import * as _175 from "./lockup/query";
import * as _176 from "./lockup/tx";
import * as _177 from "./mint/v1beta1/genesis";
import * as _178 from "./mint/v1beta1/mint";
import * as _179 from "./mint/v1beta1/query";
import * as _180 from "./poolincentives/v1beta1/genesis";
import * as _181 from "./poolincentives/v1beta1/gov";
import * as _182 from "./poolincentives/v1beta1/incentives";
import * as _183 from "./poolincentives/v1beta1/query";
import * as _184 from "./poolincentives/v1beta1/shared";
import * as _185 from "./poolmanager/v1beta1/genesis";
import * as _186 from "./poolmanager/v1beta1/gov";
import * as _187 from "./poolmanager/v1beta1/module_route";
import * as _188 from "./poolmanager/v1beta1/query";
import * as _189 from "./poolmanager/v1beta1/swap_route";
import * as _190 from "./poolmanager/v1beta1/tracked_volume";
import * as _191 from "./poolmanager/v1beta1/tx";
import * as _192 from "./poolmanager/v2/query";
import * as _193 from "./protorev/v1beta1/genesis";
import * as _194 from "./protorev/v1beta1/gov";
import * as _195 from "./protorev/v1beta1/params";
import * as _196 from "./protorev/v1beta1/protorev";
import * as _197 from "./protorev/v1beta1/query";
import * as _198 from "./protorev/v1beta1/tx";
import * as _199 from "./smartaccount/v1beta1/genesis";
import * as _200 from "./smartaccount/v1beta1/models";
import * as _201 from "./smartaccount/v1beta1/params";
import * as _202 from "./smartaccount/v1beta1/query";
import * as _203 from "./smartaccount/v1beta1/tx";
import * as _204 from "./store/v1beta1/tree";
import * as _205 from "./superfluid/genesis";
import * as _206 from "./superfluid/params";
import * as _207 from "./superfluid/query";
import * as _208 from "./superfluid/superfluid";
import * as _209 from "./superfluid/tx";
import * as _210 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _211 from "./tokenfactory/v1beta1/genesis";
import * as _212 from "./tokenfactory/v1beta1/params";
import * as _213 from "./tokenfactory/v1beta1/query";
import * as _214 from "./tokenfactory/v1beta1/tx";
import * as _215 from "./twap/v1beta1/genesis";
import * as _216 from "./twap/v1beta1/query";
import * as _217 from "./twap/v1beta1/twap_record";
import * as _218 from "./txfees/v1beta1/feetoken";
import * as _219 from "./txfees/v1beta1/genesis";
import * as _220 from "./txfees/v1beta1/gov";
import * as _221 from "./txfees/v1beta1/params";
import * as _222 from "./txfees/v1beta1/query";
import * as _223 from "./txfees/v1beta1/tx";
import * as _224 from "./valsetpref/v1beta1/query";
import * as _225 from "./valsetpref/v1beta1/state";
import * as _226 from "./valsetpref/v1beta1/tx";
import * as _335 from "./bridge/v1beta1/tx.amino";
import * as _336 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.amino";
import * as _337 from "./concentratedliquidity/v1beta1/tx.amino";
import * as _338 from "./gamm/poolmodels/balancer/v1beta1/tx.amino";
import * as _339 from "./gamm/poolmodels/stableswap/v1beta1/tx.amino";
import * as _340 from "./gamm/v1beta1/tx.amino";
import * as _341 from "./ibchooks/tx.amino";
import * as _342 from "./incentives/tx.amino";
import * as _343 from "./lockup/tx.amino";
import * as _344 from "./poolmanager/v1beta1/tx.amino";
import * as _345 from "./protorev/v1beta1/tx.amino";
import * as _346 from "./smartaccount/v1beta1/tx.amino";
import * as _347 from "./superfluid/tx.amino";
import * as _348 from "./tokenfactory/v1beta1/tx.amino";
import * as _349 from "./txfees/v1beta1/tx.amino";
import * as _350 from "./valsetpref/v1beta1/tx.amino";
import * as _351 from "./bridge/v1beta1/tx.registry";
import * as _352 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.registry";
import * as _353 from "./concentratedliquidity/v1beta1/tx.registry";
import * as _354 from "./gamm/poolmodels/balancer/v1beta1/tx.registry";
import * as _355 from "./gamm/poolmodels/stableswap/v1beta1/tx.registry";
import * as _356 from "./gamm/v1beta1/tx.registry";
import * as _357 from "./ibchooks/tx.registry";
import * as _358 from "./incentives/tx.registry";
import * as _359 from "./lockup/tx.registry";
import * as _360 from "./poolmanager/v1beta1/tx.registry";
import * as _361 from "./protorev/v1beta1/tx.registry";
import * as _362 from "./smartaccount/v1beta1/tx.registry";
import * as _363 from "./superfluid/tx.registry";
import * as _364 from "./tokenfactory/v1beta1/tx.registry";
import * as _365 from "./txfees/v1beta1/tx.registry";
import * as _366 from "./valsetpref/v1beta1/tx.registry";
import * as _367 from "./bridge/v1beta1/query.lcd";
import * as _368 from "./concentratedliquidity/v1beta1/query.lcd";
import * as _369 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _370 from "./downtimedetector/v1beta1/query.lcd";
import * as _371 from "./epochs/v1beta1/query.lcd";
import * as _372 from "./gamm/v1beta1/query.lcd";
import * as _373 from "./gamm/v2/query.lcd";
import * as _374 from "./ibcratelimit/v1beta1/query.lcd";
import * as _375 from "./incentives/query.lcd";
import * as _376 from "./lockup/query.lcd";
import * as _377 from "./mint/v1beta1/query.lcd";
import * as _378 from "./poolincentives/v1beta1/query.lcd";
import * as _379 from "./poolmanager/v1beta1/query.lcd";
import * as _380 from "./poolmanager/v2/query.lcd";
import * as _381 from "./protorev/v1beta1/query.lcd";
import * as _382 from "./smartaccount/v1beta1/query.lcd";
import * as _383 from "./superfluid/query.lcd";
import * as _384 from "./tokenfactory/v1beta1/query.lcd";
import * as _385 from "./twap/v1beta1/query.lcd";
import * as _386 from "./txfees/v1beta1/query.lcd";
import * as _387 from "./valsetpref/v1beta1/query.lcd";
import * as _388 from "./bridge/v1beta1/query.rpc.Query";
import * as _389 from "./concentratedliquidity/v1beta1/query.rpc.Query";
import * as _390 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _391 from "./downtimedetector/v1beta1/query.rpc.Query";
import * as _392 from "./epochs/v1beta1/query.rpc.Query";
import * as _393 from "./gamm/v1beta1/query.rpc.Query";
import * as _394 from "./gamm/v2/query.rpc.Query";
import * as _395 from "./ibcratelimit/v1beta1/query.rpc.Query";
import * as _396 from "./incentives/query.rpc.Query";
import * as _397 from "./lockup/query.rpc.Query";
import * as _398 from "./mint/v1beta1/query.rpc.Query";
import * as _399 from "./poolincentives/v1beta1/query.rpc.Query";
import * as _400 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _401 from "./poolmanager/v2/query.rpc.Query";
import * as _402 from "./protorev/v1beta1/query.rpc.Query";
import * as _403 from "./smartaccount/v1beta1/query.rpc.Query";
import * as _404 from "./superfluid/query.rpc.Query";
import * as _405 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _406 from "./twap/v1beta1/query.rpc.Query";
import * as _407 from "./txfees/v1beta1/query.rpc.Query";
import * as _408 from "./valsetpref/v1beta1/query.rpc.Query";
import * as _409 from "./bridge/v1beta1/tx.rpc.msg";
import * as _410 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg";
import * as _411 from "./concentratedliquidity/v1beta1/tx.rpc.msg";
import * as _412 from "./gamm/poolmodels/balancer/v1beta1/tx.rpc.msg";
import * as _413 from "./gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg";
import * as _414 from "./gamm/v1beta1/tx.rpc.msg";
import * as _415 from "./ibchooks/tx.rpc.msg";
import * as _416 from "./incentives/tx.rpc.msg";
import * as _417 from "./lockup/tx.rpc.msg";
import * as _418 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _419 from "./protorev/v1beta1/tx.rpc.msg";
import * as _420 from "./smartaccount/v1beta1/tx.rpc.msg";
import * as _421 from "./superfluid/tx.rpc.msg";
import * as _422 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _423 from "./txfees/v1beta1/tx.rpc.msg";
import * as _424 from "./valsetpref/v1beta1/tx.rpc.msg";
import * as _434 from "./lcd";
import * as _435 from "./rpc.query";
import * as _436 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = {
      ..._125
    };
  }
  export namespace bridge {
    export const v1beta1 = {
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._335,
      ..._351,
      ..._367,
      ..._388,
      ..._409
    };
  }
  export const concentratedliquidity = {
    ..._131,
    poolmodel: {
      concentrated: {
        v1beta1: {
          ..._336,
          ..._352,
          ..._410
        }
      }
    },
    v1beta1: {
      ..._337,
      ..._353,
      ..._368,
      ..._389,
      ..._411
    }
  };
  export namespace cosmwasmpool {
    export const v1beta1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._369,
      ..._390
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._144,
      ..._145,
      ..._146,
      ..._370,
      ..._391
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._147,
      ..._148,
      ..._371,
      ..._392
    };
  }
  export namespace gamm {
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._149,
          ..._338,
          ..._354,
          ..._412
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._150,
          ..._151,
          ..._339,
          ..._355,
          ..._413
        };
      }
    }
    export const v1beta1 = {
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._340,
      ..._356,
      ..._372,
      ..._393,
      ..._414
    };
    export const v2 = {
      ..._158,
      ..._373,
      ..._394
    };
  }
  export const ibchooks = {
    ..._159,
    ..._160,
    ..._161,
    ..._341,
    ..._357,
    ..._415
  };
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._162,
      ..._163,
      ..._164,
      ..._374,
      ..._395
    };
  }
  export const incentives = {
    ..._165,
    ..._166,
    ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._342,
    ..._358,
    ..._375,
    ..._396,
    ..._416
  };
  export const lockup = {
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._343,
    ..._359,
    ..._376,
    ..._397,
    ..._417
  };
  export namespace mint {
    export const v1beta1 = {
      ..._177,
      ..._178,
      ..._179,
      ..._377,
      ..._398
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._378,
      ..._399
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._344,
      ..._360,
      ..._379,
      ..._400,
      ..._418
    };
    export const v2 = {
      ..._192,
      ..._380,
      ..._401
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._345,
      ..._361,
      ..._381,
      ..._402,
      ..._419
    };
  }
  export namespace smartaccount {
    export const v1beta1 = {
      ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._346,
      ..._362,
      ..._382,
      ..._403,
      ..._420
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._204
    };
  }
  export const superfluid = {
    ..._205,
    ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._347,
    ..._363,
    ..._383,
    ..._404,
    ..._421
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._348,
      ..._364,
      ..._384,
      ..._405,
      ..._422
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._215,
      ..._216,
      ..._217,
      ..._385,
      ..._406
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._349,
      ..._365,
      ..._386,
      ..._407,
      ..._423
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._224,
      ..._225,
      ..._226,
      ..._350,
      ..._366,
      ..._387,
      ..._408,
      ..._424
    };
  }
  export const ClientFactory = {
    ..._434,
    ..._435,
    ..._436
  };
}