import * as _139 from "./accum/v1beta1/accum";
import * as _140 from "./concentratedliquidity/params";
import * as _141 from "./cosmwasmpool/v1beta1/genesis";
import * as _142 from "./cosmwasmpool/v1beta1/gov";
import * as _143 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _144 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _145 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _146 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _147 from "./cosmwasmpool/v1beta1/model/pool";
import * as _148 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _149 from "./cosmwasmpool/v1beta1/model/tx";
import * as _150 from "./cosmwasmpool/v1beta1/params";
import * as _151 from "./cosmwasmpool/v1beta1/query";
import * as _152 from "./cosmwasmpool/v1beta1/tx";
import * as _153 from "./downtimedetector/v1beta1/downtime_duration";
import * as _154 from "./downtimedetector/v1beta1/genesis";
import * as _155 from "./downtimedetector/v1beta1/query";
import * as _156 from "./epochs/v1beta1/genesis";
import * as _157 from "./epochs/v1beta1/query";
import * as _158 from "./gamm/poolmodels/balancer/v1beta1/tx";
import * as _159 from "./gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import * as _160 from "./gamm/poolmodels/stableswap/v1beta1/tx";
import * as _161 from "./gamm/v1beta1/balancerPool";
import * as _162 from "./gamm/v1beta1/genesis";
import * as _163 from "./gamm/v1beta1/gov";
import * as _164 from "./gamm/v1beta1/query";
import * as _165 from "./gamm/v1beta1/shared";
import * as _166 from "./gamm/v1beta1/tx";
import * as _167 from "./gamm/v2/query";
import * as _168 from "./ibchooks/genesis";
import * as _169 from "./ibchooks/params";
import * as _170 from "./ibchooks/tx";
import * as _171 from "./ibcratelimit/v1beta1/genesis";
import * as _172 from "./ibcratelimit/v1beta1/params";
import * as _173 from "./ibcratelimit/v1beta1/query";
import * as _174 from "./incentives/gauge";
import * as _175 from "./incentives/genesis";
import * as _176 from "./incentives/gov";
import * as _177 from "./incentives/group";
import * as _178 from "./incentives/params";
import * as _179 from "./incentives/query";
import * as _180 from "./incentives/tx";
import * as _181 from "./lockup/genesis";
import * as _182 from "./lockup/lock";
import * as _183 from "./lockup/params";
import * as _184 from "./lockup/query";
import * as _185 from "./lockup/tx";
import * as _186 from "./mint/v1beta1/genesis";
import * as _187 from "./mint/v1beta1/mint";
import * as _188 from "./mint/v1beta1/query";
import * as _189 from "./poolincentives/v1beta1/genesis";
import * as _190 from "./poolincentives/v1beta1/gov";
import * as _191 from "./poolincentives/v1beta1/incentives";
import * as _192 from "./poolincentives/v1beta1/query";
import * as _193 from "./poolincentives/v1beta1/shared";
import * as _194 from "./poolmanager/v1beta1/genesis";
import * as _195 from "./poolmanager/v1beta1/gov";
import * as _196 from "./poolmanager/v1beta1/module_route";
import * as _197 from "./poolmanager/v1beta1/query";
import * as _198 from "./poolmanager/v1beta1/swap_route";
import * as _199 from "./poolmanager/v1beta1/tracked_volume";
import * as _200 from "./poolmanager/v1beta1/tx";
import * as _201 from "./poolmanager/v2/query";
import * as _202 from "./protorev/v1beta1/genesis";
import * as _203 from "./protorev/v1beta1/gov";
import * as _204 from "./protorev/v1beta1/params";
import * as _205 from "./protorev/v1beta1/protorev";
import * as _206 from "./protorev/v1beta1/query";
import * as _207 from "./protorev/v1beta1/tx";
import * as _208 from "./store/v1beta1/tree";
import * as _209 from "./superfluid/genesis";
import * as _210 from "./superfluid/params";
import * as _211 from "./superfluid/query";
import * as _212 from "./superfluid/superfluid";
import * as _213 from "./superfluid/tx";
import * as _214 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _215 from "./tokenfactory/v1beta1/genesis";
import * as _216 from "./tokenfactory/v1beta1/params";
import * as _217 from "./tokenfactory/v1beta1/query";
import * as _218 from "./tokenfactory/v1beta1/tx";
import * as _219 from "./twap/v1beta1/genesis";
import * as _220 from "./twap/v1beta1/query";
import * as _221 from "./twap/v1beta1/twap_record";
import * as _222 from "./txfees/v1beta1/feetoken";
import * as _223 from "./txfees/v1beta1/genesis";
import * as _224 from "./txfees/v1beta1/gov";
import * as _225 from "./txfees/v1beta1/query";
import * as _226 from "./valsetpref/v1beta1/query";
import * as _227 from "./valsetpref/v1beta1/state";
import * as _228 from "./valsetpref/v1beta1/tx";
import * as _329 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.amino";
import * as _330 from "./concentratedliquidity/v1beta1/tx.amino";
import * as _331 from "./gamm/poolmodels/balancer/v1beta1/tx.amino";
import * as _332 from "./gamm/poolmodels/stableswap/v1beta1/tx.amino";
import * as _333 from "./gamm/v1beta1/tx.amino";
import * as _334 from "./ibchooks/tx.amino";
import * as _335 from "./incentives/tx.amino";
import * as _336 from "./lockup/tx.amino";
import * as _337 from "./poolmanager/v1beta1/tx.amino";
import * as _338 from "./protorev/v1beta1/tx.amino";
import * as _339 from "./superfluid/tx.amino";
import * as _340 from "./tokenfactory/v1beta1/tx.amino";
import * as _341 from "./valsetpref/v1beta1/tx.amino";
import * as _342 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.registry";
import * as _343 from "./concentratedliquidity/v1beta1/tx.registry";
import * as _344 from "./gamm/poolmodels/balancer/v1beta1/tx.registry";
import * as _345 from "./gamm/poolmodels/stableswap/v1beta1/tx.registry";
import * as _346 from "./gamm/v1beta1/tx.registry";
import * as _347 from "./ibchooks/tx.registry";
import * as _348 from "./incentives/tx.registry";
import * as _349 from "./lockup/tx.registry";
import * as _350 from "./poolmanager/v1beta1/tx.registry";
import * as _351 from "./protorev/v1beta1/tx.registry";
import * as _352 from "./superfluid/tx.registry";
import * as _353 from "./tokenfactory/v1beta1/tx.registry";
import * as _354 from "./valsetpref/v1beta1/tx.registry";
import * as _355 from "./concentratedliquidity/v1beta1/query.lcd";
import * as _356 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _357 from "./downtimedetector/v1beta1/query.lcd";
import * as _358 from "./epochs/v1beta1/query.lcd";
import * as _359 from "./gamm/v1beta1/query.lcd";
import * as _360 from "./gamm/v2/query.lcd";
import * as _361 from "./ibcratelimit/v1beta1/query.lcd";
import * as _362 from "./incentives/query.lcd";
import * as _363 from "./lockup/query.lcd";
import * as _364 from "./mint/v1beta1/query.lcd";
import * as _365 from "./poolincentives/v1beta1/query.lcd";
import * as _366 from "./poolmanager/v1beta1/query.lcd";
import * as _367 from "./poolmanager/v2/query.lcd";
import * as _368 from "./protorev/v1beta1/query.lcd";
import * as _369 from "./superfluid/query.lcd";
import * as _370 from "./tokenfactory/v1beta1/query.lcd";
import * as _371 from "./twap/v1beta1/query.lcd";
import * as _372 from "./txfees/v1beta1/query.lcd";
import * as _373 from "./valsetpref/v1beta1/query.lcd";
import * as _374 from "./concentratedliquidity/v1beta1/query.rpc.Query";
import * as _375 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _376 from "./downtimedetector/v1beta1/query.rpc.Query";
import * as _377 from "./epochs/v1beta1/query.rpc.Query";
import * as _378 from "./gamm/v1beta1/query.rpc.Query";
import * as _379 from "./gamm/v2/query.rpc.Query";
import * as _380 from "./ibcratelimit/v1beta1/query.rpc.Query";
import * as _381 from "./incentives/query.rpc.Query";
import * as _382 from "./lockup/query.rpc.Query";
import * as _383 from "./mint/v1beta1/query.rpc.Query";
import * as _384 from "./poolincentives/v1beta1/query.rpc.Query";
import * as _385 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _386 from "./poolmanager/v2/query.rpc.Query";
import * as _387 from "./protorev/v1beta1/query.rpc.Query";
import * as _388 from "./superfluid/query.rpc.Query";
import * as _389 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _390 from "./twap/v1beta1/query.rpc.Query";
import * as _391 from "./txfees/v1beta1/query.rpc.Query";
import * as _392 from "./valsetpref/v1beta1/query.rpc.Query";
import * as _393 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg";
import * as _394 from "./concentratedliquidity/v1beta1/tx.rpc.msg";
import * as _395 from "./gamm/poolmodels/balancer/v1beta1/tx.rpc.msg";
import * as _396 from "./gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg";
import * as _397 from "./gamm/v1beta1/tx.rpc.msg";
import * as _398 from "./ibchooks/tx.rpc.msg";
import * as _399 from "./incentives/tx.rpc.msg";
import * as _400 from "./lockup/tx.rpc.msg";
import * as _401 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _402 from "./protorev/v1beta1/tx.rpc.msg";
import * as _403 from "./superfluid/tx.rpc.msg";
import * as _404 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _405 from "./valsetpref/v1beta1/tx.rpc.msg";
import * as _415 from "./lcd";
import * as _416 from "./rpc.query";
import * as _417 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = {
      ..._139
    };
  }
  export const concentratedliquidity = {
    ..._140,
    poolmodel: {
      concentrated: {
        v1beta1: {
          ..._329,
          ..._342,
          ..._393
        }
      }
    },
    v1beta1: {
      ..._330,
      ..._343,
      ..._355,
      ..._374,
      ..._394
    }
  };
  export namespace cosmwasmpool {
    export const v1beta1 = {
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
      ..._151,
      ..._152,
      ..._356,
      ..._375
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._357,
      ..._376
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._156,
      ..._157,
      ..._358,
      ..._377
    };
  }
  export namespace gamm {
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._158,
          ..._331,
          ..._344,
          ..._395
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._159,
          ..._160,
          ..._332,
          ..._345,
          ..._396
        };
      }
    }
    export const v1beta1 = {
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._333,
      ..._346,
      ..._359,
      ..._378,
      ..._397
    };
    export const v2 = {
      ..._167,
      ..._360,
      ..._379
    };
  }
  export const ibchooks = {
    ..._168,
    ..._169,
    ..._170,
    ..._334,
    ..._347,
    ..._398
  };
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._171,
      ..._172,
      ..._173,
      ..._361,
      ..._380
    };
  }
  export const incentives = {
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._178,
    ..._179,
    ..._180,
    ..._335,
    ..._348,
    ..._362,
    ..._381,
    ..._399
  };
  export const lockup = {
    ..._181,
    ..._182,
    ..._183,
    ..._184,
    ..._185,
    ..._336,
    ..._349,
    ..._363,
    ..._382,
    ..._400
  };
  export namespace mint {
    export const v1beta1 = {
      ..._186,
      ..._187,
      ..._188,
      ..._364,
      ..._383
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._365,
      ..._384
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._337,
      ..._350,
      ..._366,
      ..._385,
      ..._401
    };
    export const v2 = {
      ..._201,
      ..._367,
      ..._386
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._338,
      ..._351,
      ..._368,
      ..._387,
      ..._402
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._208
    };
  }
  export const superfluid = {
    ..._209,
    ..._210,
    ..._211,
    ..._212,
    ..._213,
    ..._339,
    ..._352,
    ..._369,
    ..._388,
    ..._403
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._340,
      ..._353,
      ..._370,
      ..._389,
      ..._404
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._219,
      ..._220,
      ..._221,
      ..._371,
      ..._390
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._372,
      ..._391
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._226,
      ..._227,
      ..._228,
      ..._341,
      ..._354,
      ..._373,
      ..._392,
      ..._405
    };
  }
  export const ClientFactory = {
    ..._415,
    ..._416,
    ..._417
  };
}