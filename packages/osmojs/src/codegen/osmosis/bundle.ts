import * as _79 from "./epochs/genesis";
import * as _80 from "./epochs/query";
import * as _81 from "./gamm/pool-models/balancer/balancerPool";
import * as _82 from "./gamm/v1beta1/genesis";
import * as _83 from "./gamm/v1beta1/query";
import * as _84 from "./gamm/v1beta1/tx";
import * as _85 from "./gamm/pool-models/balancer/tx/tx";
import * as _86 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _87 from "./gamm/pool-models/stableswap/tx";
import * as _88 from "./incentives/gauge";
import * as _89 from "./incentives/genesis";
import * as _90 from "./incentives/params";
import * as _91 from "./incentives/query";
import * as _92 from "./incentives/tx";
import * as _93 from "./lockup/genesis";
import * as _94 from "./lockup/lock";
import * as _95 from "./lockup/query";
import * as _96 from "./lockup/tx";
import * as _97 from "./mint/v1beta1/genesis";
import * as _98 from "./mint/v1beta1/mint";
import * as _99 from "./mint/v1beta1/query";
import * as _100 from "./pool-incentives/v1beta1/genesis";
import * as _101 from "./pool-incentives/v1beta1/gov";
import * as _102 from "./pool-incentives/v1beta1/incentives";
import * as _103 from "./pool-incentives/v1beta1/query";
import * as _104 from "./store/v1beta1/tree";
import * as _105 from "./streamswap/v1/event";
import * as _106 from "./streamswap/v1/genesis";
import * as _107 from "./streamswap/v1/params";
import * as _108 from "./streamswap/v1/query";
import * as _109 from "./streamswap/v1/state";
import * as _110 from "./streamswap/v1/tx";
import * as _111 from "./superfluid/genesis";
import * as _112 from "./superfluid/params";
import * as _113 from "./superfluid/query";
import * as _114 from "./superfluid/superfluid";
import * as _115 from "./superfluid/tx";
import * as _116 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _117 from "./tokenfactory/v1beta1/genesis";
import * as _118 from "./tokenfactory/v1beta1/params";
import * as _119 from "./tokenfactory/v1beta1/query";
import * as _120 from "./tokenfactory/v1beta1/tx";
import * as _121 from "./twap/v1beta1/genesis";
import * as _122 from "./twap/v1beta1/query";
import * as _123 from "./twap/v1beta1/twap_record";
import * as _124 from "./txfees/v1beta1/feetoken";
import * as _125 from "./txfees/v1beta1/genesis";
import * as _126 from "./txfees/v1beta1/gov";
import * as _127 from "./txfees/v1beta1/query";
import * as _201 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _202 from "./gamm/pool-models/stableswap/tx.amino";
import * as _203 from "./gamm/v1beta1/tx.amino";
import * as _204 from "./incentives/tx.amino";
import * as _205 from "./lockup/tx.amino";
import * as _206 from "./streamswap/v1/tx.amino";
import * as _207 from "./superfluid/tx.amino";
import * as _208 from "./tokenfactory/v1beta1/tx.amino";
import * as _209 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _210 from "./gamm/pool-models/stableswap/tx.registry";
import * as _211 from "./gamm/v1beta1/tx.registry";
import * as _212 from "./incentives/tx.registry";
import * as _213 from "./lockup/tx.registry";
import * as _214 from "./streamswap/v1/tx.registry";
import * as _215 from "./superfluid/tx.registry";
import * as _216 from "./tokenfactory/v1beta1/tx.registry";
import * as _217 from "./epochs/query.lcd";
import * as _218 from "./gamm/v1beta1/query.lcd";
import * as _219 from "./incentives/query.lcd";
import * as _220 from "./lockup/query.lcd";
import * as _221 from "./mint/v1beta1/query.lcd";
import * as _222 from "./pool-incentives/v1beta1/query.lcd";
import * as _223 from "./streamswap/v1/query.lcd";
import * as _224 from "./superfluid/query.lcd";
import * as _225 from "./tokenfactory/v1beta1/query.lcd";
import * as _226 from "./twap/v1beta1/query.lcd";
import * as _227 from "./txfees/v1beta1/query.lcd";
import * as _228 from "./epochs/query.rpc.Query";
import * as _229 from "./gamm/v1beta1/query.rpc.Query";
import * as _230 from "./incentives/query.rpc.Query";
import * as _231 from "./lockup/query.rpc.Query";
import * as _232 from "./mint/v1beta1/query.rpc.Query";
import * as _233 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _234 from "./streamswap/v1/query.rpc.Query";
import * as _235 from "./superfluid/query.rpc.Query";
import * as _236 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _237 from "./twap/v1beta1/query.rpc.Query";
import * as _238 from "./txfees/v1beta1/query.rpc.Query";
import * as _239 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _240 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _241 from "./gamm/v1beta1/tx.rpc.msg";
import * as _242 from "./incentives/tx.rpc.msg";
import * as _243 from "./lockup/tx.rpc.msg";
import * as _244 from "./streamswap/v1/tx.rpc.msg";
import * as _245 from "./superfluid/tx.rpc.msg";
import * as _246 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _256 from "./lcd";
import * as _257 from "./rpc.query";
import * as _258 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = { ..._79,
      ..._80,
      ..._217,
      ..._228
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._203,
      ..._211,
      ..._218,
      ..._229,
      ..._241
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._85,
          ..._201,
          ..._209,
          ..._239
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._86,
          ..._87,
          ..._202,
          ..._210,
          ..._240
        };
      }
    }
  }
  export const incentives = { ..._88,
    ..._89,
    ..._90,
    ..._91,
    ..._92,
    ..._204,
    ..._212,
    ..._219,
    ..._230,
    ..._242
  };
  export const lockup = { ..._93,
    ..._94,
    ..._95,
    ..._96,
    ..._205,
    ..._213,
    ..._220,
    ..._231,
    ..._243
  };
  export namespace mint {
    export const v1beta1 = { ..._97,
      ..._98,
      ..._99,
      ..._221,
      ..._232
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._222,
      ..._233
    };
  }
  export namespace store {
    export const v1beta1 = { ..._104
    };
  }
  export namespace streamswap {
    export const v1 = { ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._206,
      ..._214,
      ..._223,
      ..._234,
      ..._244
    };
  }
  export const superfluid = { ..._111,
    ..._112,
    ..._113,
    ..._114,
    ..._115,
    ..._207,
    ..._215,
    ..._224,
    ..._235,
    ..._245
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._208,
      ..._216,
      ..._225,
      ..._236,
      ..._246
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._121,
      ..._122,
      ..._123,
      ..._226,
      ..._237
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._227,
      ..._238
    };
  }
  export const ClientFactory = { ..._256,
    ..._257,
    ..._258
  };
}