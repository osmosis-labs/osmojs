import * as _137 from "./accum/v1beta1/accum";
import * as _138 from "./bridge/v1beta1/bridge";
import * as _139 from "./bridge/v1beta1/events";
import * as _140 from "./bridge/v1beta1/genesis";
import * as _141 from "./bridge/v1beta1/query";
import * as _142 from "./bridge/v1beta1/tx";
import * as _143 from "./concentratedliquidity/params";
import * as _144 from "./cosmwasmpool/v1beta1/genesis";
import * as _145 from "./cosmwasmpool/v1beta1/gov";
import * as _146 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _147 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _148 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _149 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _150 from "./cosmwasmpool/v1beta1/model/pool";
import * as _151 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _152 from "./cosmwasmpool/v1beta1/model/tx";
import * as _153 from "./cosmwasmpool/v1beta1/params";
import * as _154 from "./cosmwasmpool/v1beta1/query";
import * as _155 from "./cosmwasmpool/v1beta1/tx";
import * as _156 from "./downtimedetector/v1beta1/downtime_duration";
import * as _157 from "./downtimedetector/v1beta1/genesis";
import * as _158 from "./downtimedetector/v1beta1/query";
import * as _159 from "./epochs/v1beta1/genesis";
import * as _160 from "./epochs/v1beta1/query";
import * as _161 from "./gamm/poolmodels/balancer/v1beta1/tx";
import * as _162 from "./gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import * as _163 from "./gamm/poolmodels/stableswap/v1beta1/tx";
import * as _164 from "./gamm/v1beta1/balancerPool";
import * as _165 from "./gamm/v1beta1/genesis";
import * as _166 from "./gamm/v1beta1/gov";
import * as _167 from "./gamm/v1beta1/query";
import * as _168 from "./gamm/v1beta1/shared";
import * as _169 from "./gamm/v1beta1/tx";
import * as _170 from "./gamm/v2/query";
import * as _171 from "./ibchooks/genesis";
import * as _172 from "./ibchooks/params";
import * as _173 from "./ibchooks/tx";
import * as _174 from "./ibcratelimit/v1beta1/genesis";
import * as _175 from "./ibcratelimit/v1beta1/params";
import * as _176 from "./ibcratelimit/v1beta1/query";
import * as _177 from "./incentives/gauge";
import * as _178 from "./incentives/genesis";
import * as _179 from "./incentives/gov";
import * as _180 from "./incentives/group";
import * as _181 from "./incentives/params";
import * as _182 from "./incentives/query";
import * as _183 from "./incentives/tx";
import * as _184 from "./lockup/genesis";
import * as _185 from "./lockup/lock";
import * as _186 from "./lockup/params";
import * as _187 from "./lockup/query";
import * as _188 from "./lockup/tx";
import * as _189 from "./mint/v1beta1/genesis";
import * as _190 from "./mint/v1beta1/mint";
import * as _191 from "./mint/v1beta1/query";
import * as _192 from "./poolincentives/v1beta1/genesis";
import * as _193 from "./poolincentives/v1beta1/gov";
import * as _194 from "./poolincentives/v1beta1/incentives";
import * as _195 from "./poolincentives/v1beta1/query";
import * as _196 from "./poolincentives/v1beta1/shared";
import * as _197 from "./poolmanager/v1beta1/genesis";
import * as _198 from "./poolmanager/v1beta1/gov";
import * as _199 from "./poolmanager/v1beta1/module_route";
import * as _200 from "./poolmanager/v1beta1/query";
import * as _201 from "./poolmanager/v1beta1/swap_route";
import * as _202 from "./poolmanager/v1beta1/tracked_volume";
import * as _203 from "./poolmanager/v1beta1/tx";
import * as _204 from "./poolmanager/v2/query";
import * as _205 from "./protorev/v1beta1/genesis";
import * as _206 from "./protorev/v1beta1/gov";
import * as _207 from "./protorev/v1beta1/params";
import * as _208 from "./protorev/v1beta1/protorev";
import * as _209 from "./protorev/v1beta1/query";
import * as _210 from "./protorev/v1beta1/tx";
import * as _211 from "./store/v1beta1/tree";
import * as _212 from "./superfluid/genesis";
import * as _213 from "./superfluid/params";
import * as _214 from "./superfluid/query";
import * as _215 from "./superfluid/superfluid";
import * as _216 from "./superfluid/tx";
import * as _217 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _218 from "./tokenfactory/v1beta1/genesis";
import * as _219 from "./tokenfactory/v1beta1/params";
import * as _220 from "./tokenfactory/v1beta1/query";
import * as _221 from "./tokenfactory/v1beta1/tx";
import * as _222 from "./twap/v1beta1/genesis";
import * as _223 from "./twap/v1beta1/query";
import * as _224 from "./twap/v1beta1/twap_record";
import * as _225 from "./txfees/v1beta1/feetoken";
import * as _226 from "./txfees/v1beta1/genesis";
import * as _227 from "./txfees/v1beta1/gov";
import * as _228 from "./txfees/v1beta1/query";
import * as _229 from "./valsetpref/v1beta1/query";
import * as _230 from "./valsetpref/v1beta1/state";
import * as _231 from "./valsetpref/v1beta1/tx";
import * as _330 from "./bridge/v1beta1/tx.amino";
import * as _331 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.amino";
import * as _332 from "./concentratedliquidity/v1beta1/tx.amino";
import * as _333 from "./gamm/poolmodels/balancer/v1beta1/tx.amino";
import * as _334 from "./gamm/poolmodels/stableswap/v1beta1/tx.amino";
import * as _335 from "./gamm/v1beta1/tx.amino";
import * as _336 from "./ibchooks/tx.amino";
import * as _337 from "./incentives/tx.amino";
import * as _338 from "./lockup/tx.amino";
import * as _339 from "./poolmanager/v1beta1/tx.amino";
import * as _340 from "./protorev/v1beta1/tx.amino";
import * as _341 from "./superfluid/tx.amino";
import * as _342 from "./tokenfactory/v1beta1/tx.amino";
import * as _343 from "./valsetpref/v1beta1/tx.amino";
import * as _344 from "./bridge/v1beta1/tx.registry";
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
import * as _355 from "./superfluid/tx.registry";
import * as _356 from "./tokenfactory/v1beta1/tx.registry";
import * as _357 from "./valsetpref/v1beta1/tx.registry";
import * as _358 from "./bridge/v1beta1/query.lcd";
import * as _359 from "./concentratedliquidity/v1beta1/query.lcd";
import * as _360 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _361 from "./downtimedetector/v1beta1/query.lcd";
import * as _362 from "./epochs/v1beta1/query.lcd";
import * as _363 from "./gamm/v1beta1/query.lcd";
import * as _364 from "./gamm/v2/query.lcd";
import * as _365 from "./ibcratelimit/v1beta1/query.lcd";
import * as _366 from "./incentives/query.lcd";
import * as _367 from "./lockup/query.lcd";
import * as _368 from "./mint/v1beta1/query.lcd";
import * as _369 from "./poolincentives/v1beta1/query.lcd";
import * as _370 from "./poolmanager/v1beta1/query.lcd";
import * as _371 from "./poolmanager/v2/query.lcd";
import * as _372 from "./protorev/v1beta1/query.lcd";
import * as _373 from "./superfluid/query.lcd";
import * as _374 from "./tokenfactory/v1beta1/query.lcd";
import * as _375 from "./twap/v1beta1/query.lcd";
import * as _376 from "./txfees/v1beta1/query.lcd";
import * as _377 from "./valsetpref/v1beta1/query.lcd";
import * as _378 from "./bridge/v1beta1/query.rpc.Query";
import * as _379 from "./concentratedliquidity/v1beta1/query.rpc.Query";
import * as _380 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _381 from "./downtimedetector/v1beta1/query.rpc.Query";
import * as _382 from "./epochs/v1beta1/query.rpc.Query";
import * as _383 from "./gamm/v1beta1/query.rpc.Query";
import * as _384 from "./gamm/v2/query.rpc.Query";
import * as _385 from "./ibcratelimit/v1beta1/query.rpc.Query";
import * as _386 from "./incentives/query.rpc.Query";
import * as _387 from "./lockup/query.rpc.Query";
import * as _388 from "./mint/v1beta1/query.rpc.Query";
import * as _389 from "./poolincentives/v1beta1/query.rpc.Query";
import * as _390 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _391 from "./poolmanager/v2/query.rpc.Query";
import * as _392 from "./protorev/v1beta1/query.rpc.Query";
import * as _393 from "./superfluid/query.rpc.Query";
import * as _394 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _395 from "./twap/v1beta1/query.rpc.Query";
import * as _396 from "./txfees/v1beta1/query.rpc.Query";
import * as _397 from "./valsetpref/v1beta1/query.rpc.Query";
import * as _398 from "./bridge/v1beta1/tx.rpc.msg";
import * as _399 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg";
import * as _400 from "./concentratedliquidity/v1beta1/tx.rpc.msg";
import * as _401 from "./gamm/poolmodels/balancer/v1beta1/tx.rpc.msg";
import * as _402 from "./gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg";
import * as _403 from "./gamm/v1beta1/tx.rpc.msg";
import * as _404 from "./ibchooks/tx.rpc.msg";
import * as _405 from "./incentives/tx.rpc.msg";
import * as _406 from "./lockup/tx.rpc.msg";
import * as _407 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _408 from "./protorev/v1beta1/tx.rpc.msg";
import * as _409 from "./superfluid/tx.rpc.msg";
import * as _410 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _411 from "./valsetpref/v1beta1/tx.rpc.msg";
import * as _421 from "./lcd";
import * as _422 from "./rpc.query";
import * as _423 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = {
      ..._137
    };
  }
  export namespace bridge {
    export const v1beta1 = {
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._330,
      ..._344,
      ..._358,
      ..._378,
      ..._398
    };
  }
  export const concentratedliquidity = {
    ..._143,
    poolmodel: {
      concentrated: {
        v1beta1: {
          ..._331,
          ..._345,
          ..._399
        }
      }
    },
    v1beta1: {
      ..._332,
      ..._346,
      ..._359,
      ..._379,
      ..._400
    }
  };
  export namespace cosmwasmpool {
    export const v1beta1 = {
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._360,
      ..._380
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._361,
      ..._381
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._159,
      ..._160,
      ..._362,
      ..._382
    };
  }
  export namespace gamm {
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._161,
          ..._333,
          ..._347,
          ..._401
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._162,
          ..._163,
          ..._334,
          ..._348,
          ..._402
        };
      }
    }
    export const v1beta1 = {
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._335,
      ..._349,
      ..._363,
      ..._383,
      ..._403
    };
    export const v2 = {
      ..._170,
      ..._364,
      ..._384
    };
  }
  export const ibchooks = {
    ..._171,
    ..._172,
    ..._173,
    ..._336,
    ..._350,
    ..._404
  };
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._174,
      ..._175,
      ..._176,
      ..._365,
      ..._385
    };
  }
  export const incentives = {
    ..._177,
    ..._178,
    ..._179,
    ..._180,
    ..._181,
    ..._182,
    ..._183,
    ..._337,
    ..._351,
    ..._366,
    ..._386,
    ..._405
  };
  export const lockup = {
    ..._184,
    ..._185,
    ..._186,
    ..._187,
    ..._188,
    ..._338,
    ..._352,
    ..._367,
    ..._387,
    ..._406
  };
  export namespace mint {
    export const v1beta1 = {
      ..._189,
      ..._190,
      ..._191,
      ..._368,
      ..._388
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._369,
      ..._389
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._339,
      ..._353,
      ..._370,
      ..._390,
      ..._407
    };
    export const v2 = {
      ..._204,
      ..._371,
      ..._391
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._340,
      ..._354,
      ..._372,
      ..._392,
      ..._408
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._211
    };
  }
  export const superfluid = {
    ..._212,
    ..._213,
    ..._214,
    ..._215,
    ..._216,
    ..._341,
    ..._355,
    ..._373,
    ..._393,
    ..._409
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._342,
      ..._356,
      ..._374,
      ..._394,
      ..._410
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._222,
      ..._223,
      ..._224,
      ..._375,
      ..._395
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._376,
      ..._396
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._229,
      ..._230,
      ..._231,
      ..._343,
      ..._357,
      ..._377,
      ..._397,
      ..._411
    };
  }
  export const ClientFactory = {
    ..._421,
    ..._422,
    ..._423
  };
}