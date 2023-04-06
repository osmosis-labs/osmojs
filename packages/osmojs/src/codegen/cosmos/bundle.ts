import * as _3 from "./authz/v1beta1/authz";
import * as _4 from "./authz/v1beta1/event";
import * as _5 from "./authz/v1beta1/genesis";
import * as _6 from "./authz/v1beta1/query";
import * as _7 from "./authz/v1beta1/tx";
import * as _8 from "./bank/v1beta1/authz";
import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/genesis";
import * as _11 from "./bank/v1beta1/query";
import * as _12 from "./bank/v1beta1/tx";
import * as _13 from "./base/abci/v1beta1/abci";
import * as _14 from "./base/query/v1beta1/pagination";
import * as _15 from "./base/reflection/v2alpha1/reflection";
import * as _16 from "./base/v1beta1/coin";
import * as _17 from "./base/node/v1beta1/query";
import * as _18 from "./crypto/ed25519/keys";
import * as _19 from "./crypto/hd/v1/hd";
import * as _20 from "./crypto/keyring/v1/record";
import * as _21 from "./crypto/multisig/keys";
import * as _22 from "./crypto/secp256k1/keys";
import * as _23 from "./crypto/secp256r1/keys";
import * as _24 from "./distribution/v1beta1/distribution";
import * as _25 from "./distribution/v1beta1/genesis";
import * as _26 from "./distribution/v1beta1/query";
import * as _27 from "./distribution/v1beta1/tx";
import * as _28 from "./gov/v1/genesis";
import * as _29 from "./gov/v1/gov";
import * as _30 from "./gov/v1/query";
import * as _31 from "./gov/v1/tx";
import * as _32 from "./gov/v1beta1/genesis";
import * as _33 from "./gov/v1beta1/gov";
import * as _34 from "./gov/v1beta1/query";
import * as _35 from "./gov/v1beta1/tx";
import * as _36 from "./staking/v1beta1/authz";
import * as _37 from "./staking/v1beta1/genesis";
import * as _38 from "./staking/v1beta1/query";
import * as _39 from "./staking/v1beta1/staking";
import * as _40 from "./staking/v1beta1/tx";
import * as _41 from "./tx/signing/v1beta1/signing";
import * as _42 from "./tx/v1beta1/service";
import * as _43 from "./tx/v1beta1/tx";
import * as _44 from "./upgrade/v1beta1/query";
import * as _45 from "./upgrade/v1beta1/tx";
import * as _46 from "./upgrade/v1beta1/upgrade";
import * as _165 from "./authz/v1beta1/tx.amino";
import * as _166 from "./bank/v1beta1/tx.amino";
import * as _167 from "./distribution/v1beta1/tx.amino";
import * as _168 from "./gov/v1/tx.amino";
import * as _169 from "./gov/v1beta1/tx.amino";
import * as _170 from "./staking/v1beta1/tx.amino";
import * as _171 from "./upgrade/v1beta1/tx.amino";
import * as _172 from "./authz/v1beta1/tx.registry";
import * as _173 from "./bank/v1beta1/tx.registry";
import * as _174 from "./distribution/v1beta1/tx.registry";
import * as _175 from "./gov/v1/tx.registry";
import * as _176 from "./gov/v1beta1/tx.registry";
import * as _177 from "./staking/v1beta1/tx.registry";
import * as _178 from "./upgrade/v1beta1/tx.registry";
import * as _179 from "./authz/v1beta1/query.lcd";
import * as _180 from "./bank/v1beta1/query.lcd";
import * as _181 from "./distribution/v1beta1/query.lcd";
import * as _182 from "./gov/v1/query.lcd";
import * as _183 from "./gov/v1beta1/query.lcd";
import * as _184 from "./staking/v1beta1/query.lcd";
import * as _185 from "./tx/v1beta1/service.lcd";
import * as _186 from "./upgrade/v1beta1/query.lcd";
import * as _187 from "./base/node/v1beta1/query.lcd";
import * as _188 from "./authz/v1beta1/query.rpc.Query";
import * as _189 from "./bank/v1beta1/query.rpc.Query";
import * as _190 from "./distribution/v1beta1/query.rpc.Query";
import * as _191 from "./gov/v1/query.rpc.Query";
import * as _192 from "./gov/v1beta1/query.rpc.Query";
import * as _193 from "./staking/v1beta1/query.rpc.Query";
import * as _194 from "./tx/v1beta1/service.rpc.Service";
import * as _195 from "./upgrade/v1beta1/query.rpc.Query";
import * as _196 from "./base/node/v1beta1/query.rpc.Service";
import * as _197 from "./authz/v1beta1/tx.rpc.msg";
import * as _198 from "./bank/v1beta1/tx.rpc.msg";
import * as _199 from "./distribution/v1beta1/tx.rpc.msg";
import * as _200 from "./gov/v1/tx.rpc.msg";
import * as _201 from "./gov/v1beta1/tx.rpc.msg";
import * as _202 from "./staking/v1beta1/tx.rpc.msg";
import * as _203 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _298 from "./lcd";
import * as _299 from "./rpc.query";
import * as _300 from "./rpc.tx";
export namespace cosmos {
  export namespace authz {
    export const v1beta1 = { ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._165,
      ..._172,
      ..._179,
      ..._188,
      ..._197
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._166,
      ..._173,
      ..._180,
      ..._189,
      ..._198
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._13
      };
    }
    export namespace query {
      export const v1beta1 = { ..._14
      };
    }
    export namespace reflection {
      export const v2alpha1 = { ..._15
      };
    }
    export const v1beta1 = { ..._16
    };
    export namespace node {
      export const v1beta1 = { ..._17,
        ..._187,
        ..._196
      };
    }
  }
  export namespace crypto {
    export const ed25519 = { ..._18
    };
    export namespace hd {
      export const v1 = { ..._19
      };
    }
    export namespace keyring {
      export const v1 = { ..._20
      };
    }
    export const multisig = { ..._21
    };
    export const secp256k1 = { ..._22
    };
    export const secp256r1 = { ..._23
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._167,
      ..._174,
      ..._181,
      ..._190,
      ..._199
    };
  }
  export namespace gov {
    export const v1 = { ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._168,
      ..._175,
      ..._182,
      ..._191,
      ..._200
    };
    export const v1beta1 = { ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._169,
      ..._176,
      ..._183,
      ..._192,
      ..._201
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._170,
      ..._177,
      ..._184,
      ..._193,
      ..._202
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._41
      };
    }
    export const v1beta1 = { ..._42,
      ..._43,
      ..._185,
      ..._194
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._44,
      ..._45,
      ..._46,
      ..._171,
      ..._178,
      ..._186,
      ..._195,
      ..._203
    };
  }
  export const ClientFactory = { ..._298,
    ..._299,
    ..._300
  };
}