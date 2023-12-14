import * as _0 from "./ics23/v1/proofs";
import * as _1 from "./auth/v1beta1/auth";
import * as _2 from "./auth/v1beta1/genesis";
import * as _3 from "./auth/v1beta1/query";
import * as _4 from "./authz/v1beta1/authz";
import * as _5 from "./authz/v1beta1/event";
import * as _6 from "./authz/v1beta1/genesis";
import * as _7 from "./authz/v1beta1/query";
import * as _8 from "./authz/v1beta1/tx";
import * as _9 from "./bank/v1beta1/authz";
import * as _10 from "./bank/v1beta1/bank";
import * as _11 from "./bank/v1beta1/genesis";
import * as _12 from "./bank/v1beta1/query";
import * as _13 from "./bank/v1beta1/tx";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/node/v1beta1/query";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/multisig/keys";
import * as _21 from "./crypto/secp256k1/keys";
import * as _22 from "./crypto/secp256r1/keys";
import * as _23 from "./distribution/v1beta1/distribution";
import * as _24 from "./distribution/v1beta1/genesis";
import * as _25 from "./distribution/v1beta1/query";
import * as _26 from "./distribution/v1beta1/tx";
import * as _27 from "./gov/v1beta1/genesis";
import * as _28 from "./gov/v1beta1/gov";
import * as _29 from "./gov/v1beta1/query";
import * as _30 from "./gov/v1beta1/tx";
import * as _31 from "./staking/v1beta1/authz";
import * as _32 from "./staking/v1beta1/genesis";
import * as _33 from "./staking/v1beta1/query";
import * as _34 from "./staking/v1beta1/staking";
import * as _35 from "./staking/v1beta1/tx";
import * as _36 from "./tx/signing/v1beta1/signing";
import * as _37 from "./tx/v1beta1/service";
import * as _38 from "./tx/v1beta1/tx";
import * as _39 from "./upgrade/v1beta1/query";
import * as _40 from "./upgrade/v1beta1/upgrade";
import * as _181 from "./authz/v1beta1/tx.amino";
import * as _182 from "./bank/v1beta1/tx.amino";
import * as _183 from "./distribution/v1beta1/tx.amino";
import * as _184 from "./gov/v1beta1/tx.amino";
import * as _185 from "./staking/v1beta1/tx.amino";
import * as _186 from "./authz/v1beta1/tx.registry";
import * as _187 from "./bank/v1beta1/tx.registry";
import * as _188 from "./distribution/v1beta1/tx.registry";
import * as _189 from "./gov/v1beta1/tx.registry";
import * as _190 from "./staking/v1beta1/tx.registry";
import * as _191 from "./auth/v1beta1/query.lcd";
import * as _192 from "./authz/v1beta1/query.lcd";
import * as _193 from "./bank/v1beta1/query.lcd";
import * as _194 from "./base/node/v1beta1/query.lcd";
import * as _195 from "./distribution/v1beta1/query.lcd";
import * as _196 from "./gov/v1beta1/query.lcd";
import * as _197 from "./staking/v1beta1/query.lcd";
import * as _198 from "./tx/v1beta1/service.lcd";
import * as _199 from "./upgrade/v1beta1/query.lcd";
import * as _200 from "./auth/v1beta1/query.rpc.Query";
import * as _201 from "./authz/v1beta1/query.rpc.Query";
import * as _202 from "./bank/v1beta1/query.rpc.Query";
import * as _203 from "./base/node/v1beta1/query.rpc.Service";
import * as _204 from "./distribution/v1beta1/query.rpc.Query";
import * as _205 from "./gov/v1beta1/query.rpc.Query";
import * as _206 from "./staking/v1beta1/query.rpc.Query";
import * as _207 from "./tx/v1beta1/service.rpc.Service";
import * as _208 from "./upgrade/v1beta1/query.rpc.Query";
import * as _209 from "./authz/v1beta1/tx.rpc.msg";
import * as _210 from "./bank/v1beta1/tx.rpc.msg";
import * as _211 from "./distribution/v1beta1/tx.rpc.msg";
import * as _212 from "./gov/v1beta1/tx.rpc.msg";
import * as _213 from "./staking/v1beta1/tx.rpc.msg";
import * as _320 from "./lcd";
import * as _321 from "./rpc.query";
import * as _322 from "./rpc.tx";
export namespace cosmos {
  export namespace ics23 {
    export const v1 = {
      ..._0
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._191,
      ..._200
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._181,
      ..._186,
      ..._192,
      ..._201,
      ..._209
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._182,
      ..._187,
      ..._193,
      ..._202,
      ..._210
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._14
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._15,
        ..._194,
        ..._203
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._17
      };
    }
    export const v1beta1 = {
      ..._18
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._19
    };
    export const multisig = {
      ..._20
    };
    export const secp256k1 = {
      ..._21
    };
    export const secp256r1 = {
      ..._22
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._183,
      ..._188,
      ..._195,
      ..._204,
      ..._211
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._184,
      ..._189,
      ..._196,
      ..._205,
      ..._212
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._185,
      ..._190,
      ..._197,
      ..._206,
      ..._213
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._36
      };
    }
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._198,
      ..._207
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._199,
      ..._208
    };
  }
  export const ClientFactory = {
    ..._320,
    ..._321,
    ..._322
  };
}