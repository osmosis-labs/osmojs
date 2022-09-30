import * as _82 from "./epochs/genesis";
import * as _83 from "./epochs/query";
import * as _84 from "./gamm/pool-models/balancer/balancerPool";
import * as _85 from "./gamm/v1beta1/genesis";
import * as _86 from "./gamm/v1beta1/query";
import * as _87 from "./gamm/v1beta1/tx";
import * as _88 from "./gamm/pool-models/balancer/tx/tx";
import * as _89 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _90 from "./gamm/pool-models/stableswap/tx";
import * as _91 from "./incentives/gauge";
import * as _92 from "./incentives/genesis";
import * as _93 from "./incentives/params";
import * as _94 from "./incentives/query";
import * as _95 from "./incentives/tx";
import * as _96 from "./lockup/genesis";
import * as _97 from "./lockup/lock";
import * as _98 from "./lockup/query";
import * as _99 from "./lockup/tx";
import * as _100 from "./mint/v1beta1/genesis";
import * as _101 from "./mint/v1beta1/mint";
import * as _102 from "./mint/v1beta1/query";
import * as _103 from "./pool-incentives/v1beta1/genesis";
import * as _104 from "./pool-incentives/v1beta1/gov";
import * as _105 from "./pool-incentives/v1beta1/incentives";
import * as _106 from "./pool-incentives/v1beta1/query";
import * as _107 from "./store/v1beta1/tree";
import * as _108 from "./streamswap/v1/event";
import * as _109 from "./streamswap/v1/genesis";
import * as _110 from "./streamswap/v1/params";
import * as _111 from "./streamswap/v1/query";
import * as _112 from "./streamswap/v1/state";
import * as _113 from "./streamswap/v1/tx";
import * as _114 from "./superfluid/genesis";
import * as _115 from "./superfluid/params";
import * as _116 from "./superfluid/query";
import * as _117 from "./superfluid/superfluid";
import * as _118 from "./superfluid/tx";
import * as _119 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _120 from "./tokenfactory/v1beta1/genesis";
import * as _121 from "./tokenfactory/v1beta1/params";
import * as _122 from "./tokenfactory/v1beta1/query";
import * as _123 from "./tokenfactory/v1beta1/tx";
import * as _124 from "./twap/v1beta1/genesis";
import * as _125 from "./twap/v1beta1/query";
import * as _126 from "./twap/v1beta1/twap_record";
import * as _127 from "./txfees/v1beta1/feetoken";
import * as _128 from "./txfees/v1beta1/genesis";
import * as _129 from "./txfees/v1beta1/gov";
import * as _130 from "./txfees/v1beta1/query";
import * as _204 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _205 from "./gamm/pool-models/stableswap/tx.amino";
import * as _206 from "./gamm/v1beta1/tx.amino";
import * as _207 from "./incentives/tx.amino";
import * as _208 from "./lockup/tx.amino";
import * as _209 from "./streamswap/v1/tx.amino";
import * as _210 from "./superfluid/tx.amino";
import * as _211 from "./tokenfactory/v1beta1/tx.amino";
import * as _212 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _213 from "./gamm/pool-models/stableswap/tx.registry";
import * as _214 from "./gamm/v1beta1/tx.registry";
import * as _215 from "./incentives/tx.registry";
import * as _216 from "./lockup/tx.registry";
import * as _217 from "./streamswap/v1/tx.registry";
import * as _218 from "./superfluid/tx.registry";
import * as _219 from "./tokenfactory/v1beta1/tx.registry";
import * as _220 from "./epochs/query.lcd";
import * as _221 from "./gamm/v1beta1/query.lcd";
import * as _222 from "./incentives/query.lcd";
import * as _223 from "./lockup/query.lcd";
import * as _224 from "./mint/v1beta1/query.lcd";
import * as _225 from "./pool-incentives/v1beta1/query.lcd";
import * as _226 from "./streamswap/v1/query.lcd";
import * as _227 from "./superfluid/query.lcd";
import * as _228 from "./tokenfactory/v1beta1/query.lcd";
import * as _229 from "./twap/v1beta1/query.lcd";
import * as _230 from "./txfees/v1beta1/query.lcd";
import * as _231 from "./epochs/query.rpc.query";
import * as _232 from "./gamm/v1beta1/query.rpc.query";
import * as _233 from "./incentives/query.rpc.query";
import * as _234 from "./lockup/query.rpc.query";
import * as _235 from "./mint/v1beta1/query.rpc.query";
import * as _236 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _237 from "./streamswap/v1/query.rpc.query";
import * as _238 from "./superfluid/query.rpc.query";
import * as _239 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _240 from "./twap/v1beta1/query.rpc.query";
import * as _241 from "./txfees/v1beta1/query.rpc.query";
import * as _242 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _243 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _244 from "./gamm/v1beta1/tx.rpc.msg";
import * as _245 from "./incentives/tx.rpc.msg";
import * as _246 from "./lockup/tx.rpc.msg";
import * as _247 from "./streamswap/v1/tx.rpc.msg";
import * as _248 from "./superfluid/tx.rpc.msg";
import * as _249 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _259 from "./lcd";
import * as _260 from "./rpc.query";
import * as _261 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = { ..._82,
      ..._83,
      ..._220,
      ..._231
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._206,
      ..._214,
      ..._221,
      ..._232,
      ..._244
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._88,
          ..._204,
          ..._212,
          ..._242
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._89,
          ..._90,
          ..._205,
          ..._213,
          ..._243
        };
      }
    }
  }
  export const incentives = { ..._91,
    ..._92,
    ..._93,
    ..._94,
    ..._95,
    ..._207,
    ..._215,
    ..._222,
    ..._233,
    ..._245
  };
  export const lockup = { ..._96,
    ..._97,
    ..._98,
    ..._99,
    ..._208,
    ..._216,
    ..._223,
    ..._234,
    ..._246
  };
  export namespace mint {
    export const v1beta1 = { ..._100,
      ..._101,
      ..._102,
      ..._224,
      ..._235
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._225,
      ..._236
    };
  }
  export namespace store {
    export const v1beta1 = { ..._107
    };
  }
  export namespace streamswap {
    export const v1 = { ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._209,
      ..._217,
      ..._226,
      ..._237,
      ..._247
    };
  }
  export const superfluid = { ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._118,
    ..._210,
    ..._218,
    ..._227,
    ..._238,
    ..._248
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._211,
      ..._219,
      ..._228,
      ..._239,
      ..._249
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._124,
      ..._125,
      ..._126,
      ..._229,
      ..._240
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._230,
      ..._241
    };
  }
  export const ClientFactory = { ..._259,
    ..._260,
    ..._261
  };
}