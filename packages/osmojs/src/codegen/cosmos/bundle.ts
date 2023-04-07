import * as _0 from "./ics23/v1/proofs";
import * as _1 from "./authz/v1beta1/authz";
import * as _2 from "./authz/v1beta1/event";
import * as _3 from "./authz/v1beta1/genesis";
import * as _4 from "./authz/v1beta1/query";
import * as _5 from "./authz/v1beta1/tx";
import * as _6 from "./bank/v1beta1/authz";
import * as _7 from "./bank/v1beta1/bank";
import * as _8 from "./bank/v1beta1/genesis";
import * as _9 from "./bank/v1beta1/query";
import * as _10 from "./bank/v1beta1/tx";
import * as _11 from "./base/abci/v1beta1/abci";
import * as _12 from "./base/node/v1beta1/query";
import * as _13 from "./base/query/v1beta1/pagination";
import * as _14 from "./base/reflection/v2alpha1/reflection";
import * as _15 from "./base/v1beta1/coin";
import * as _16 from "./crypto/ed25519/keys";
import * as _17 from "./crypto/multisig/keys";
import * as _18 from "./crypto/secp256k1/keys";
import * as _19 from "./crypto/secp256r1/keys";
import * as _20 from "./crypto/hd/v1/hd";
import * as _21 from "./crypto/keyring/v1/record";
import * as _22 from "./distribution/v1beta1/distribution";
import * as _23 from "./distribution/v1beta1/genesis";
import * as _24 from "./distribution/v1beta1/query";
import * as _25 from "./distribution/v1beta1/tx";
import * as _26 from "./gov/v1beta1/genesis";
import * as _27 from "./gov/v1beta1/gov";
import * as _28 from "./gov/v1beta1/query";
import * as _29 from "./gov/v1beta1/tx";
import * as _30 from "./gov/v1/genesis";
import * as _31 from "./gov/v1/gov";
import * as _32 from "./gov/v1/query";
import * as _33 from "./gov/v1/tx";
import * as _34 from "./staking/v1beta1/authz";
import * as _35 from "./staking/v1beta1/genesis";
import * as _36 from "./staking/v1beta1/query";
import * as _37 from "./staking/v1beta1/staking";
import * as _38 from "./staking/v1beta1/tx";
import * as _39 from "./tx/signing/v1beta1/signing";
import * as _40 from "./tx/v1beta1/service";
import * as _41 from "./tx/v1beta1/tx";
import * as _42 from "./upgrade/v1beta1/query";
import * as _43 from "./upgrade/v1beta1/upgrade";
import * as _44 from "./upgrade/v1beta1/tx";
import * as _185 from "./authz/v1beta1/tx.amino";
import * as _186 from "./bank/v1beta1/tx.amino";
import * as _187 from "./distribution/v1beta1/tx.amino";
import * as _188 from "./gov/v1beta1/tx.amino";
import * as _189 from "./staking/v1beta1/tx.amino";
import * as _190 from "./gov/v1/tx.amino";
import * as _191 from "./upgrade/v1beta1/tx.amino";
import * as _192 from "./authz/v1beta1/tx.registry";
import * as _193 from "./bank/v1beta1/tx.registry";
import * as _194 from "./distribution/v1beta1/tx.registry";
import * as _195 from "./gov/v1beta1/tx.registry";
import * as _196 from "./staking/v1beta1/tx.registry";
import * as _197 from "./gov/v1/tx.registry";
import * as _198 from "./upgrade/v1beta1/tx.registry";
import * as _199 from "./authz/v1beta1/query.lcd";
import * as _200 from "./bank/v1beta1/query.lcd";
import * as _201 from "./base/node/v1beta1/query.lcd";
import * as _202 from "./distribution/v1beta1/query.lcd";
import * as _203 from "./gov/v1beta1/query.lcd";
import * as _204 from "./staking/v1beta1/query.lcd";
import * as _205 from "./tx/v1beta1/service.lcd";
import * as _206 from "./upgrade/v1beta1/query.lcd";
import * as _207 from "./gov/v1/query.lcd";
import * as _208 from "./authz/v1beta1/query.rpc.Query";
import * as _209 from "./bank/v1beta1/query.rpc.Query";
import * as _210 from "./base/node/v1beta1/query.rpc.Service";
import * as _211 from "./distribution/v1beta1/query.rpc.Query";
import * as _212 from "./gov/v1beta1/query.rpc.Query";
import * as _213 from "./staking/v1beta1/query.rpc.Query";
import * as _214 from "./tx/v1beta1/service.rpc.Service";
import * as _215 from "./upgrade/v1beta1/query.rpc.Query";
import * as _216 from "./gov/v1/query.rpc.Query";
import * as _217 from "./authz/v1beta1/tx.rpc.msg";
import * as _218 from "./bank/v1beta1/tx.rpc.msg";
import * as _219 from "./distribution/v1beta1/tx.rpc.msg";
import * as _220 from "./gov/v1beta1/tx.rpc.msg";
import * as _221 from "./staking/v1beta1/tx.rpc.msg";
import * as _222 from "./gov/v1/tx.rpc.msg";
import * as _223 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _330 from "./lcd";
import * as _331 from "./rpc.query";
import * as _332 from "./rpc.tx";
export namespace cosmos {
  export namespace ics23 {
    export const v1 = { ..._0
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._185,
      ..._192,
      ..._199,
      ..._208,
      ..._217
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._186,
      ..._193,
      ..._200,
      ..._209,
      ..._218
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._11
      };
    }
    export namespace node {
      export const v1beta1 = { ..._12,
        ..._201,
        ..._210
      };
    }
    export namespace query {
      export const v1beta1 = { ..._13
      };
    }
    export namespace reflection {
      export const v2alpha1 = { ..._14
      };
    }
    export const v1beta1 = { ..._15
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._16
    };
    export const multisig = { ..._17
    };
    export const secp256k1 = { ..._18
    };
    export const secp256r1 = { ..._19
    };
    export namespace hd {
      export const v1 = { ..._20
      };
    }
    export namespace keyring {
      export const v1 = { ..._21
      };
    }
  }
  export namespace distribution {
    export const v1beta1 = { ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._187,
      ..._194,
      ..._202,
      ..._211,
      ..._219
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._188,
      ..._195,
      ..._203,
      ..._212,
      ..._220
    };
    export const v1 = { ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._190,
      ..._197,
      ..._207,
      ..._216,
      ..._222
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._189,
      ..._196,
      ..._204,
      ..._213,
      ..._221
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._39
      };
    }
    export const v1beta1 = { ..._40,
      ..._41,
      ..._205,
      ..._214
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._42,
      ..._43,
      ..._44,
      ..._191,
      ..._198,
      ..._206,
      ..._215,
      ..._223
    };
  }
  export const ClientFactory = { ..._330,
    ..._331,
    ..._332
  };
}