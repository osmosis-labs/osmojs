import * as _137 from "./accum/v1beta1/accum";
import * as _138 from "./concentratedliquidity/params";
import * as _139 from "./cosmwasmpool/v1beta1/genesis";
import * as _140 from "./cosmwasmpool/v1beta1/gov";
import * as _141 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _142 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _143 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _144 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _145 from "./cosmwasmpool/v1beta1/model/pool";
import * as _146 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _147 from "./cosmwasmpool/v1beta1/model/tx";
import * as _148 from "./cosmwasmpool/v1beta1/params";
import * as _149 from "./cosmwasmpool/v1beta1/query";
import * as _150 from "./cosmwasmpool/v1beta1/tx";
import * as _151 from "./downtimedetector/v1beta1/downtime_duration";
import * as _152 from "./downtimedetector/v1beta1/genesis";
import * as _153 from "./downtimedetector/v1beta1/query";
import * as _154 from "./epochs/v1beta1/genesis";
import * as _155 from "./epochs/v1beta1/query";
import * as _156 from "./gamm/poolmodels/balancer/v1beta1/tx";
import * as _157 from "./gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import * as _158 from "./gamm/poolmodels/stableswap/v1beta1/tx";
import * as _159 from "./gamm/v1beta1/balancerPool";
import * as _160 from "./gamm/v1beta1/genesis";
import * as _161 from "./gamm/v1beta1/gov";
import * as _162 from "./gamm/v1beta1/query";
import * as _163 from "./gamm/v1beta1/shared";
import * as _164 from "./gamm/v1beta1/tx";
import * as _165 from "./gamm/v2/query";
import * as _166 from "./ibchooks/genesis";
import * as _167 from "./ibchooks/params";
import * as _168 from "./ibchooks/tx";
import * as _169 from "./ibcratelimit/v1beta1/genesis";
import * as _170 from "./ibcratelimit/v1beta1/params";
import * as _171 from "./ibcratelimit/v1beta1/query";
import * as _172 from "./incentives/gauge";
import * as _173 from "./incentives/genesis";
import * as _174 from "./incentives/gov";
import * as _175 from "./incentives/group";
import * as _176 from "./incentives/params";
import * as _177 from "./incentives/query";
import * as _178 from "./incentives/tx";
import * as _179 from "./lockup/genesis";
import * as _180 from "./lockup/lock";
import * as _181 from "./lockup/params";
import * as _182 from "./lockup/query";
import * as _183 from "./lockup/tx";
import * as _184 from "./mint/v1beta1/genesis";
import * as _185 from "./mint/v1beta1/mint";
import * as _186 from "./mint/v1beta1/query";
import * as _187 from "./poolincentives/v1beta1/genesis";
import * as _188 from "./poolincentives/v1beta1/gov";
import * as _189 from "./poolincentives/v1beta1/incentives";
import * as _190 from "./poolincentives/v1beta1/query";
import * as _191 from "./poolincentives/v1beta1/shared";
import * as _192 from "./poolmanager/v1beta1/genesis";
import * as _193 from "./poolmanager/v1beta1/gov";
import * as _194 from "./poolmanager/v1beta1/module_route";
import * as _195 from "./poolmanager/v1beta1/query";
import * as _196 from "./poolmanager/v1beta1/swap_route";
import * as _197 from "./poolmanager/v1beta1/tracked_volume";
import * as _198 from "./poolmanager/v1beta1/tx";
import * as _199 from "./poolmanager/v2/query";
import * as _200 from "./protorev/v1beta1/genesis";
import * as _201 from "./protorev/v1beta1/gov";
import * as _202 from "./protorev/v1beta1/params";
import * as _203 from "./protorev/v1beta1/protorev";
import * as _204 from "./protorev/v1beta1/query";
import * as _205 from "./protorev/v1beta1/tx";
import * as _206 from "./store/v1beta1/tree";
import * as _207 from "./superfluid/genesis";
import * as _208 from "./superfluid/params";
import * as _209 from "./superfluid/query";
import * as _210 from "./superfluid/superfluid";
import * as _211 from "./superfluid/tx";
import * as _212 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _213 from "./tokenfactory/v1beta1/genesis";
import * as _214 from "./tokenfactory/v1beta1/params";
import * as _215 from "./tokenfactory/v1beta1/query";
import * as _216 from "./tokenfactory/v1beta1/tx";
import * as _217 from "./twap/v1beta1/genesis";
import * as _218 from "./twap/v1beta1/query";
import * as _219 from "./twap/v1beta1/twap_record";
import * as _220 from "./txfees/v1beta1/feetoken";
import * as _221 from "./txfees/v1beta1/genesis";
import * as _222 from "./txfees/v1beta1/gov";
import * as _223 from "./txfees/v1beta1/query";
import * as _224 from "./valsetpref/v1beta1/query";
import * as _225 from "./valsetpref/v1beta1/state";
import * as _226 from "./valsetpref/v1beta1/tx";
import * as _325 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.amino";
import * as _326 from "./concentratedliquidity/v1beta1/tx.amino";
import * as _327 from "./gamm/poolmodels/balancer/v1beta1/tx.amino";
import * as _328 from "./gamm/poolmodels/stableswap/v1beta1/tx.amino";
import * as _329 from "./gamm/v1beta1/tx.amino";
import * as _330 from "./ibchooks/tx.amino";
import * as _331 from "./incentives/tx.amino";
import * as _332 from "./lockup/tx.amino";
import * as _333 from "./poolmanager/v1beta1/tx.amino";
import * as _334 from "./protorev/v1beta1/tx.amino";
import * as _335 from "./superfluid/tx.amino";
import * as _336 from "./tokenfactory/v1beta1/tx.amino";
import * as _337 from "./valsetpref/v1beta1/tx.amino";
import * as _338 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.registry";
import * as _339 from "./concentratedliquidity/v1beta1/tx.registry";
import * as _340 from "./gamm/poolmodels/balancer/v1beta1/tx.registry";
import * as _341 from "./gamm/poolmodels/stableswap/v1beta1/tx.registry";
import * as _342 from "./gamm/v1beta1/tx.registry";
import * as _343 from "./ibchooks/tx.registry";
import * as _344 from "./incentives/tx.registry";
import * as _345 from "./lockup/tx.registry";
import * as _346 from "./poolmanager/v1beta1/tx.registry";
import * as _347 from "./protorev/v1beta1/tx.registry";
import * as _348 from "./superfluid/tx.registry";
import * as _349 from "./tokenfactory/v1beta1/tx.registry";
import * as _350 from "./valsetpref/v1beta1/tx.registry";
import * as _351 from "./concentratedliquidity/v1beta1/query.lcd";
import * as _352 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _353 from "./downtimedetector/v1beta1/query.lcd";
import * as _354 from "./epochs/v1beta1/query.lcd";
import * as _355 from "./gamm/v1beta1/query.lcd";
import * as _356 from "./gamm/v2/query.lcd";
import * as _357 from "./ibcratelimit/v1beta1/query.lcd";
import * as _358 from "./incentives/query.lcd";
import * as _359 from "./lockup/query.lcd";
import * as _360 from "./mint/v1beta1/query.lcd";
import * as _361 from "./poolincentives/v1beta1/query.lcd";
import * as _362 from "./poolmanager/v1beta1/query.lcd";
import * as _363 from "./poolmanager/v2/query.lcd";
import * as _364 from "./protorev/v1beta1/query.lcd";
import * as _365 from "./superfluid/query.lcd";
import * as _366 from "./tokenfactory/v1beta1/query.lcd";
import * as _367 from "./twap/v1beta1/query.lcd";
import * as _368 from "./txfees/v1beta1/query.lcd";
import * as _369 from "./valsetpref/v1beta1/query.lcd";
import * as _370 from "./concentratedliquidity/v1beta1/query.rpc.Query";
import * as _371 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _372 from "./downtimedetector/v1beta1/query.rpc.Query";
import * as _373 from "./epochs/v1beta1/query.rpc.Query";
import * as _374 from "./gamm/v1beta1/query.rpc.Query";
import * as _375 from "./gamm/v2/query.rpc.Query";
import * as _376 from "./ibcratelimit/v1beta1/query.rpc.Query";
import * as _377 from "./incentives/query.rpc.Query";
import * as _378 from "./lockup/query.rpc.Query";
import * as _379 from "./mint/v1beta1/query.rpc.Query";
import * as _380 from "./poolincentives/v1beta1/query.rpc.Query";
import * as _381 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _382 from "./poolmanager/v2/query.rpc.Query";
import * as _383 from "./protorev/v1beta1/query.rpc.Query";
import * as _384 from "./superfluid/query.rpc.Query";
import * as _385 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _386 from "./twap/v1beta1/query.rpc.Query";
import * as _387 from "./txfees/v1beta1/query.rpc.Query";
import * as _388 from "./valsetpref/v1beta1/query.rpc.Query";
import * as _389 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg";
import * as _390 from "./concentratedliquidity/v1beta1/tx.rpc.msg";
import * as _391 from "./gamm/poolmodels/balancer/v1beta1/tx.rpc.msg";
import * as _392 from "./gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg";
import * as _393 from "./gamm/v1beta1/tx.rpc.msg";
import * as _394 from "./ibchooks/tx.rpc.msg";
import * as _395 from "./incentives/tx.rpc.msg";
import * as _396 from "./lockup/tx.rpc.msg";
import * as _397 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _398 from "./protorev/v1beta1/tx.rpc.msg";
import * as _399 from "./superfluid/tx.rpc.msg";
import * as _400 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _401 from "./valsetpref/v1beta1/tx.rpc.msg";
import * as _411 from "./lcd";
import * as _412 from "./rpc.query";
import * as _413 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = {
      ..._137
    };
  }
  export const concentratedliquidity = {
    ..._138,
    poolmodel: {
      concentrated: {
        v1beta1: {
          ..._325,
          ..._338,
          ..._389
        }
      }
    },
    v1beta1: {
      ..._326,
      ..._339,
      ..._351,
      ..._370,
      ..._390
    }
  };
  export namespace cosmwasmpool {
    export const v1beta1 = {
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._352,
      ..._371
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._151,
      ..._152,
      ..._153,
      ..._353,
      ..._372
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._154,
      ..._155,
      ..._354,
      ..._373
    };
  }
  export namespace gamm {
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._156,
          ..._327,
          ..._340,
          ..._391
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._157,
          ..._158,
          ..._328,
          ..._341,
          ..._392
        };
      }
    }
    export const v1beta1 = {
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._329,
      ..._342,
      ..._355,
      ..._374,
      ..._393
    };
    export const v2 = {
      ..._165,
      ..._356,
      ..._375
    };
  }
  export const ibchooks = {
    ..._166,
    ..._167,
    ..._168,
    ..._330,
    ..._343,
    ..._394
  };
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._169,
      ..._170,
      ..._171,
      ..._357,
      ..._376
    };
  }
  export const incentives = {
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._178,
    ..._331,
    ..._344,
    ..._358,
    ..._377,
    ..._395
  };
  export const lockup = {
    ..._179,
    ..._180,
    ..._181,
    ..._182,
    ..._183,
    ..._332,
    ..._345,
    ..._359,
    ..._378,
    ..._396
  };
  export namespace mint {
    export const v1beta1 = {
      ..._184,
      ..._185,
      ..._186,
      ..._360,
      ..._379
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._187,
      ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._361,
      ..._380
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._333,
      ..._346,
      ..._362,
      ..._381,
      ..._397
    };
    export const v2 = {
      ..._199,
      ..._363,
      ..._382
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._334,
      ..._347,
      ..._364,
      ..._383,
      ..._398
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._206
    };
  }
  export const superfluid = {
    ..._207,
    ..._208,
    ..._209,
    ..._210,
    ..._211,
    ..._335,
    ..._348,
    ..._365,
    ..._384,
    ..._399
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._336,
      ..._349,
      ..._366,
      ..._385,
      ..._400
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._217,
      ..._218,
      ..._219,
      ..._367,
      ..._386
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._368,
      ..._387
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._224,
      ..._225,
      ..._226,
      ..._337,
      ..._350,
      ..._369,
      ..._388,
      ..._401
    };
  }
  export const ClientFactory = {
    ..._411,
    ..._412,
    ..._413
  };
}