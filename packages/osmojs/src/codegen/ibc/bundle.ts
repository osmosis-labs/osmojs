import * as _44 from "./applications/fee/v1/ack";
import * as _45 from "./applications/fee/v1/fee";
import * as _46 from "./applications/fee/v1/genesis";
import * as _47 from "./applications/fee/v1/metadata";
import * as _48 from "./applications/fee/v1/query";
import * as _49 from "./applications/fee/v1/tx";
import * as _50 from "./applications/interchain_accounts/controller/v1/controller";
import * as _51 from "./applications/interchain_accounts/controller/v1/query";
import * as _52 from "./applications/interchain_accounts/controller/v1/tx";
import * as _53 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _54 from "./applications/interchain_accounts/host/v1/host";
import * as _55 from "./applications/interchain_accounts/host/v1/query";
import * as _56 from "./applications/interchain_accounts/v1/account";
import * as _57 from "./applications/interchain_accounts/v1/metadata";
import * as _58 from "./applications/interchain_accounts/v1/packet";
import * as _59 from "./applications/transfer/v1/authz";
import * as _60 from "./applications/transfer/v1/genesis";
import * as _61 from "./applications/transfer/v1/query";
import * as _62 from "./applications/transfer/v1/transfer";
import * as _63 from "./applications/transfer/v1/tx";
import * as _64 from "./applications/transfer/v2/packet";
import * as _65 from "./core/channel/v1/channel";
import * as _66 from "./core/channel/v1/genesis";
import * as _67 from "./core/channel/v1/query";
import * as _68 from "./core/channel/v1/tx";
import * as _69 from "./core/client/v1/client";
import * as _70 from "./core/client/v1/genesis";
import * as _71 from "./core/client/v1/query";
import * as _72 from "./core/client/v1/tx";
import * as _73 from "./core/commitment/v1/commitment";
import * as _74 from "./core/connection/v1/connection";
import * as _75 from "./core/connection/v1/genesis";
import * as _76 from "./core/connection/v1/query";
import * as _77 from "./core/connection/v1/tx";
import * as _78 from "./lightclients/localhost/v2/localhost";
import * as _79 from "./lightclients/solomachine/v2/solomachine";
import * as _80 from "./lightclients/solomachine/v3/solomachine";
import * as _81 from "./lightclients/tendermint/v1/tendermint";
import * as _223 from "./applications/fee/v1/tx.amino";
import * as _224 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _225 from "./applications/transfer/v1/tx.amino";
import * as _226 from "./core/channel/v1/tx.amino";
import * as _227 from "./core/client/v1/tx.amino";
import * as _228 from "./core/connection/v1/tx.amino";
import * as _229 from "./applications/fee/v1/tx.registry";
import * as _230 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _231 from "./applications/transfer/v1/tx.registry";
import * as _232 from "./core/channel/v1/tx.registry";
import * as _233 from "./core/client/v1/tx.registry";
import * as _234 from "./core/connection/v1/tx.registry";
import * as _235 from "./applications/fee/v1/query.lcd";
import * as _236 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _237 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _238 from "./applications/transfer/v1/query.lcd";
import * as _239 from "./core/channel/v1/query.lcd";
import * as _240 from "./core/client/v1/query.lcd";
import * as _241 from "./core/connection/v1/query.lcd";
import * as _242 from "./applications/fee/v1/query.rpc.Query";
import * as _243 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _244 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _245 from "./applications/transfer/v1/query.rpc.Query";
import * as _246 from "./core/channel/v1/query.rpc.Query";
import * as _247 from "./core/client/v1/query.rpc.Query";
import * as _248 from "./core/connection/v1/query.rpc.Query";
import * as _249 from "./applications/fee/v1/tx.rpc.msg";
import * as _250 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _251 from "./applications/transfer/v1/tx.rpc.msg";
import * as _252 from "./core/channel/v1/tx.rpc.msg";
import * as _253 from "./core/client/v1/tx.rpc.msg";
import * as _254 from "./core/connection/v1/tx.rpc.msg";
import * as _335 from "./lcd";
import * as _336 from "./rpc.query";
import * as _337 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = { ..._44,
        ..._45,
        ..._46,
        ..._47,
        ..._48,
        ..._49,
        ..._223,
        ..._229,
        ..._235,
        ..._242,
        ..._249
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._50,
          ..._51,
          ..._52,
          ..._224,
          ..._230,
          ..._236,
          ..._243,
          ..._250
        };
      }
      export namespace genesis {
        export const v1 = { ..._53
        };
      }
      export namespace host {
        export const v1 = { ..._54,
          ..._55,
          ..._237,
          ..._244
        };
      }
      export const v1 = { ..._56,
        ..._57,
        ..._58
      };
    }
    export namespace transfer {
      export const v1 = { ..._59,
        ..._60,
        ..._61,
        ..._62,
        ..._63,
        ..._225,
        ..._231,
        ..._238,
        ..._245,
        ..._251
      };
      export const v2 = { ..._64
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._65,
        ..._66,
        ..._67,
        ..._68,
        ..._226,
        ..._232,
        ..._239,
        ..._246,
        ..._252
      };
    }
    export namespace client {
      export const v1 = { ..._69,
        ..._70,
        ..._71,
        ..._72,
        ..._227,
        ..._233,
        ..._240,
        ..._247,
        ..._253
      };
    }
    export namespace commitment {
      export const v1 = { ..._73
      };
    }
    export namespace connection {
      export const v1 = { ..._74,
        ..._75,
        ..._76,
        ..._77,
        ..._228,
        ..._234,
        ..._241,
        ..._248,
        ..._254
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = { ..._78
      };
    }
    export namespace solomachine {
      export const v2 = { ..._79
      };
      export const v3 = { ..._80
      };
    }
    export namespace tendermint {
      export const v1 = { ..._81
      };
    }
  }
  export const ClientFactory = { ..._335,
    ..._336,
    ..._337
  };
}