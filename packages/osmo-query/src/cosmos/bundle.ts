//@ts-nocheck
import * as _0 from "./ics23/v1/proofs";
import * as _1 from "./app/runtime/v1alpha1/module";
import * as _2 from "./auth/module/v1/module";
import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./auth/v1beta1/tx";
import * as _7 from "./authz/module/v1/module";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/module/v1/module";
import * as _14 from "./bank/v1beta1/authz";
import * as _15 from "./bank/v1beta1/bank";
import * as _16 from "./bank/v1beta1/genesis";
import * as _17 from "./bank/v1beta1/query";
import * as _18 from "./bank/v1beta1/tx";
import * as _19 from "./base/abci/v1beta1/abci";
import * as _20 from "./base/node/v1beta1/query";
import * as _21 from "./base/query/v1beta1/pagination";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/v1beta1/coin";
import * as _24 from "./capability/module/v1/module";
import * as _25 from "./consensus/module/v1/module";
import * as _26 from "./consensus/v1/query";
import * as _27 from "./consensus/v1/tx";
import * as _28 from "./crisis/module/v1/module";
import * as _29 from "./crypto/ed25519/keys";
import * as _30 from "./crypto/hd/v1/hd";
import * as _31 from "./crypto/keyring/v1/record";
import * as _32 from "./crypto/multisig/keys";
import * as _33 from "./crypto/secp256k1/keys";
import * as _34 from "./crypto/secp256r1/keys";
import * as _35 from "./distribution/module/v1/module";
import * as _36 from "./distribution/v1beta1/distribution";
import * as _37 from "./distribution/v1beta1/genesis";
import * as _38 from "./distribution/v1beta1/query";
import * as _39 from "./distribution/v1beta1/tx";
import * as _40 from "./evidence/module/v1/module";
import * as _41 from "./feegrant/module/v1/module";
import * as _42 from "./genutil/module/v1/module";
import * as _43 from "./gov/module/v1/module";
import * as _44 from "./gov/v1beta1/genesis";
import * as _45 from "./gov/v1beta1/gov";
import * as _46 from "./gov/v1beta1/query";
import * as _47 from "./gov/v1beta1/tx";
import * as _48 from "./group/module/v1/module";
import * as _49 from "./mint/module/v1/module";
import * as _50 from "./nft/module/v1/module";
import * as _51 from "./orm/module/v1alpha1/module";
import * as _52 from "./orm/query/v1alpha1/query";
import * as _53 from "./params/module/v1/module";
import * as _54 from "./query/v1/query";
import * as _55 from "./reflection/v1/reflection";
import * as _56 from "./slashing/module/v1/module";
import * as _57 from "./staking/module/v1/module";
import * as _58 from "./staking/v1beta1/authz";
import * as _59 from "./staking/v1beta1/genesis";
import * as _60 from "./staking/v1beta1/query";
import * as _61 from "./staking/v1beta1/staking";
import * as _62 from "./staking/v1beta1/tx";
import * as _63 from "./tx/config/v1/config";
import * as _64 from "./tx/signing/v1beta1/signing";
import * as _65 from "./tx/v1beta1/service";
import * as _66 from "./tx/v1beta1/tx";
import * as _67 from "./upgrade/module/v1/module";
import * as _68 from "./upgrade/v1beta1/query";
import * as _69 from "./upgrade/v1beta1/tx";
import * as _70 from "./upgrade/v1beta1/upgrade";
import * as _71 from "./vesting/module/v1/module";
import * as _245 from "./auth/v1beta1/tx.amino";
import * as _246 from "./authz/v1beta1/tx.amino";
import * as _247 from "./bank/v1beta1/tx.amino";
import * as _248 from "./consensus/v1/tx.amino";
import * as _249 from "./distribution/v1beta1/tx.amino";
import * as _250 from "./gov/v1beta1/tx.amino";
import * as _251 from "./staking/v1beta1/tx.amino";
import * as _252 from "./upgrade/v1beta1/tx.amino";
import * as _253 from "./auth/v1beta1/tx.registry";
import * as _254 from "./authz/v1beta1/tx.registry";
import * as _255 from "./bank/v1beta1/tx.registry";
import * as _256 from "./consensus/v1/tx.registry";
import * as _257 from "./distribution/v1beta1/tx.registry";
import * as _258 from "./gov/v1beta1/tx.registry";
import * as _259 from "./staking/v1beta1/tx.registry";
import * as _260 from "./upgrade/v1beta1/tx.registry";
import * as _261 from "./auth/v1beta1/query.lcd";
import * as _262 from "./authz/v1beta1/query.lcd";
import * as _263 from "./bank/v1beta1/query.lcd";
import * as _264 from "./base/node/v1beta1/query.lcd";
import * as _265 from "./consensus/v1/query.lcd";
import * as _266 from "./distribution/v1beta1/query.lcd";
import * as _267 from "./gov/v1beta1/query.lcd";
import * as _268 from "./staking/v1beta1/query.lcd";
import * as _269 from "./tx/v1beta1/service.lcd";
import * as _270 from "./upgrade/v1beta1/query.lcd";
import * as _271 from "./auth/v1beta1/query.rpc.Query";
import * as _272 from "./authz/v1beta1/query.rpc.Query";
import * as _273 from "./bank/v1beta1/query.rpc.Query";
import * as _274 from "./base/node/v1beta1/query.rpc.Service";
import * as _275 from "./consensus/v1/query.rpc.Query";
import * as _276 from "./distribution/v1beta1/query.rpc.Query";
import * as _277 from "./gov/v1beta1/query.rpc.Query";
import * as _278 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _279 from "./staking/v1beta1/query.rpc.Query";
import * as _280 from "./tx/v1beta1/service.rpc.Service";
import * as _281 from "./upgrade/v1beta1/query.rpc.Query";
import * as _282 from "./auth/v1beta1/tx.rpc.msg";
import * as _283 from "./authz/v1beta1/tx.rpc.msg";
import * as _284 from "./bank/v1beta1/tx.rpc.msg";
import * as _285 from "./consensus/v1/tx.rpc.msg";
import * as _286 from "./distribution/v1beta1/tx.rpc.msg";
import * as _287 from "./gov/v1beta1/tx.rpc.msg";
import * as _288 from "./staking/v1beta1/tx.rpc.msg";
import * as _289 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _425 from "./lcd";
import * as _426 from "./rpc.query";
import * as _427 from "./rpc.tx";
export namespace cosmos {
  export namespace ics23 {
    export const v1 = {
      ..._0
    };
  }
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._1
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._2
      };
    }
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._245,
      ..._253,
      ..._261,
      ..._271,
      ..._282
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._7
      };
    }
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._246,
      ..._254,
      ..._262,
      ..._272,
      ..._283
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._13
      };
    }
    export const v1beta1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._247,
      ..._255,
      ..._263,
      ..._273,
      ..._284
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._20,
        ..._264,
        ..._274
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._21
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._22
      };
    }
    export const v1beta1 = {
      ..._23
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._24
      };
    }
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._25
      };
    }
    export const v1 = {
      ..._26,
      ..._27,
      ..._248,
      ..._256,
      ..._265,
      ..._275,
      ..._285
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._28
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._29
    };
    export namespace hd {
      export const v1 = {
        ..._30
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._31
      };
    }
    export const multisig = {
      ..._32
    };
    export const secp256k1 = {
      ..._33
    };
    export const secp256r1 = {
      ..._34
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._35
      };
    }
    export const v1beta1 = {
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._249,
      ..._257,
      ..._266,
      ..._276,
      ..._286
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._40
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._41
      };
    }
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._42
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._43
      };
    }
    export const v1beta1 = {
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._250,
      ..._258,
      ..._267,
      ..._277,
      ..._287
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._48
      };
    }
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._49
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._50
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._51
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._52,
        ..._278
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._53
      };
    }
  }
  export namespace query {
    export const v1 = {
      ..._54
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._55
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._56
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._57
      };
    }
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._251,
      ..._259,
      ..._268,
      ..._279,
      ..._288
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._63
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._64
      };
    }
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._269,
      ..._280
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._67
      };
    }
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._252,
      ..._260,
      ..._270,
      ..._281,
      ..._289
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._71
      };
    }
  }
  export const ClientFactory = {
    ..._425,
    ..._426,
    ..._427
  };
}