import * as _90 from "./epochs/genesis";
import * as _91 from "./epochs/query";
import * as _92 from "./gamm/pool-models/balancer/balancerPool";
import * as _93 from "./gamm/v1beta1/genesis";
import * as _94 from "./gamm/v1beta1/query";
import * as _95 from "./gamm/v1beta1/tx";
import * as _96 from "./gamm/pool-models/balancer/tx/tx";
import * as _97 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _98 from "./gamm/pool-models/stableswap/tx";
import * as _99 from "./gamm/v2/query";
import * as _100 from "./ibc-rate-limit/v1beta1/params";
import * as _101 from "./ibc-rate-limit/v1beta1/query";
import * as _102 from "./incentives/gauge";
import * as _103 from "./incentives/genesis";
import * as _104 from "./incentives/params";
import * as _105 from "./incentives/query";
import * as _106 from "./incentives/tx";
import * as _107 from "./lockup/genesis";
import * as _108 from "./lockup/lock";
import * as _109 from "./lockup/params";
import * as _110 from "./lockup/query";
import * as _111 from "./lockup/tx";
import * as _112 from "./mint/v1beta1/genesis";
import * as _113 from "./mint/v1beta1/mint";
import * as _114 from "./mint/v1beta1/query";
import * as _115 from "./pool-incentives/v1beta1/genesis";
import * as _116 from "./pool-incentives/v1beta1/gov";
import * as _117 from "./pool-incentives/v1beta1/incentives";
import * as _118 from "./pool-incentives/v1beta1/query";
import * as _119 from "./sumtree/v1beta1/tree";
import * as _120 from "./superfluid/genesis";
import * as _121 from "./superfluid/params";
import * as _122 from "./superfluid/query";
import * as _123 from "./superfluid/superfluid";
import * as _124 from "./superfluid/tx";
import * as _125 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _126 from "./tokenfactory/v1beta1/genesis";
import * as _127 from "./tokenfactory/v1beta1/params";
import * as _128 from "./tokenfactory/v1beta1/query";
import * as _129 from "./tokenfactory/v1beta1/tx";
import * as _130 from "./twap/v1beta1/genesis";
import * as _131 from "./twap/v1beta1/query";
import * as _132 from "./twap/v1beta1/twap_record";
import * as _133 from "./txfees/v1beta1/feetoken";
import * as _134 from "./txfees/v1beta1/genesis";
import * as _135 from "./txfees/v1beta1/gov";
import * as _136 from "./txfees/v1beta1/query";
import * as _199 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _200 from "./gamm/pool-models/stableswap/tx.amino";
import * as _201 from "./gamm/v1beta1/tx.amino";
import * as _202 from "./incentives/tx.amino";
import * as _203 from "./lockup/tx.amino";
import * as _204 from "./superfluid/tx.amino";
import * as _205 from "./tokenfactory/v1beta1/tx.amino";
import * as _206 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _207 from "./gamm/pool-models/stableswap/tx.registry";
import * as _208 from "./gamm/v1beta1/tx.registry";
import * as _209 from "./incentives/tx.registry";
import * as _210 from "./lockup/tx.registry";
import * as _211 from "./superfluid/tx.registry";
import * as _212 from "./tokenfactory/v1beta1/tx.registry";
import * as _213 from "./epochs/query.lcd";
import * as _214 from "./gamm/v1beta1/query.lcd";
import * as _215 from "./gamm/v2/query.lcd";
import * as _216 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _217 from "./incentives/query.lcd";
import * as _218 from "./lockup/query.lcd";
import * as _219 from "./mint/v1beta1/query.lcd";
import * as _220 from "./pool-incentives/v1beta1/query.lcd";
import * as _221 from "./superfluid/query.lcd";
import * as _222 from "./tokenfactory/v1beta1/query.lcd";
import * as _223 from "./twap/v1beta1/query.lcd";
import * as _224 from "./txfees/v1beta1/query.lcd";
import * as _225 from "./epochs/query.rpc.Query";
import * as _226 from "./gamm/v1beta1/query.rpc.Query";
import * as _227 from "./gamm/v2/query.rpc.Query";
import * as _228 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _229 from "./incentives/query.rpc.Query";
import * as _230 from "./lockup/query.rpc.Query";
import * as _231 from "./mint/v1beta1/query.rpc.Query";
import * as _232 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _233 from "./superfluid/query.rpc.Query";
import * as _234 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _235 from "./twap/v1beta1/query.rpc.Query";
import * as _236 from "./txfees/v1beta1/query.rpc.Query";
import * as _237 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _238 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _239 from "./gamm/v1beta1/tx.rpc.msg";
import * as _240 from "./incentives/tx.rpc.msg";
import * as _241 from "./lockup/tx.rpc.msg";
import * as _242 from "./superfluid/tx.rpc.msg";
import * as _243 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _253 from "./lcd";
import * as _254 from "./rpc.query";
import * as _255 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = { ..._90,
      ..._91,
      ..._213,
      ..._225
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._201,
      ..._208,
      ..._214,
      ..._226,
      ..._239
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._96,
          ..._199,
          ..._206,
          ..._237
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._97,
          ..._98,
          ..._200,
          ..._207,
          ..._238
        };
      }
    }
    export const v2 = { ..._99,
      ..._215,
      ..._227
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._100,
      ..._101,
      ..._216,
      ..._228
    };
  }
  export const incentives = { ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._106,
    ..._202,
    ..._209,
    ..._217,
    ..._229,
    ..._240
  };
  export const lockup = { ..._107,
    ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._203,
    ..._210,
    ..._218,
    ..._230,
    ..._241
  };
  export namespace mint {
    export const v1beta1 = { ..._112,
      ..._113,
      ..._114,
      ..._219,
      ..._231
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._220,
      ..._232
    };
  }
  export namespace store {
    export const v1beta1 = { ..._119
    };
  }
  export const superfluid = { ..._120,
    ..._121,
    ..._122,
    ..._123,
    ..._124,
    ..._204,
    ..._211,
    ..._221,
    ..._233,
    ..._242
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._205,
      ..._212,
      ..._222,
      ..._234,
      ..._243
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._130,
      ..._131,
      ..._132,
      ..._223,
      ..._235
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._224,
      ..._236
    };
  }
  export const ClientFactory = { ..._253,
    ..._254,
    ..._255
  };
}