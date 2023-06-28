import * as _58 from "./applications/fee/v1/ack";
import * as _59 from "./applications/fee/v1/fee";
import * as _60 from "./applications/fee/v1/genesis";
import * as _61 from "./applications/fee/v1/metadata";
import * as _62 from "./applications/fee/v1/query";
import * as _63 from "./applications/fee/v1/tx";
import * as _64 from "./applications/interchain_accounts/controller/v1/controller";
import * as _65 from "./applications/interchain_accounts/controller/v1/query";
import * as _66 from "./applications/interchain_accounts/controller/v1/tx";
import * as _67 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _68 from "./applications/interchain_accounts/host/v1/host";
import * as _69 from "./applications/interchain_accounts/host/v1/query";
import * as _70 from "./applications/interchain_accounts/v1/account";
import * as _71 from "./applications/interchain_accounts/v1/metadata";
import * as _72 from "./applications/interchain_accounts/v1/packet";
import * as _73 from "./applications/transfer/v1/authz";
import * as _74 from "./applications/transfer/v1/genesis";
import * as _75 from "./applications/transfer/v1/query";
import * as _76 from "./applications/transfer/v1/transfer";
import * as _77 from "./applications/transfer/v1/tx";
import * as _78 from "./applications/transfer/v2/packet";
import * as _79 from "./core/channel/v1/channel";
import * as _80 from "./core/channel/v1/genesis";
import * as _81 from "./core/channel/v1/query";
import * as _82 from "./core/channel/v1/tx";
import * as _83 from "./core/client/v1/client";
import * as _84 from "./core/client/v1/genesis";
import * as _85 from "./core/client/v1/query";
import * as _86 from "./core/client/v1/tx";
import * as _87 from "./core/commitment/v1/commitment";
import * as _88 from "./core/connection/v1/connection";
import * as _89 from "./core/connection/v1/genesis";
import * as _90 from "./core/connection/v1/query";
import * as _91 from "./core/connection/v1/tx";
import * as _92 from "./lightclients/localhost/v2/localhost";
import * as _93 from "./lightclients/solomachine/v2/solomachine";
import * as _94 from "./lightclients/solomachine/v3/solomachine";
import * as _95 from "./lightclients/tendermint/v1/tendermint";
import * as _227 from "./applications/fee/v1/tx.amino";
import * as _228 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _229 from "./applications/transfer/v1/tx.amino";
import * as _230 from "./core/channel/v1/tx.amino";
import * as _231 from "./core/client/v1/tx.amino";
import * as _232 from "./core/connection/v1/tx.amino";
import * as _233 from "./applications/fee/v1/tx.registry";
import * as _234 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _235 from "./applications/transfer/v1/tx.registry";
import * as _236 from "./core/channel/v1/tx.registry";
import * as _237 from "./core/client/v1/tx.registry";
import * as _238 from "./core/connection/v1/tx.registry";
import * as _239 from "./applications/fee/v1/query.lcd";
import * as _240 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _241 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _242 from "./applications/transfer/v1/query.lcd";
import * as _243 from "./core/channel/v1/query.lcd";
import * as _244 from "./core/client/v1/query.lcd";
import * as _245 from "./core/connection/v1/query.lcd";
import * as _246 from "./applications/fee/v1/query.rpc.Query";
import * as _247 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _248 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _249 from "./applications/transfer/v1/query.rpc.Query";
import * as _250 from "./core/channel/v1/query.rpc.Query";
import * as _251 from "./core/client/v1/query.rpc.Query";
import * as _252 from "./core/connection/v1/query.rpc.Query";
import * as _253 from "./applications/fee/v1/tx.rpc.msg";
import * as _254 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _255 from "./applications/transfer/v1/tx.rpc.msg";
import * as _256 from "./core/channel/v1/tx.rpc.msg";
import * as _257 from "./core/client/v1/tx.rpc.msg";
import * as _258 from "./core/connection/v1/tx.rpc.msg";
import * as _339 from "./lcd";
import * as _340 from "./rpc.query";
import * as _341 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = { ..._58,
        ..._59,
        ..._60,
        ..._61,
        ..._62,
        ..._63,
        ..._227,
        ..._233,
        ..._239,
        ..._246,
        ..._253
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._64,
          ..._65,
          ..._66,
          ..._228,
          ..._234,
          ..._240,
          ..._247,
          ..._254
        };
      }
      export namespace genesis {
        export const v1 = { ..._67
        };
      }
      export namespace host {
        export const v1 = { ..._68,
          ..._69,
          ..._241,
          ..._248
        };
      }
      export const v1 = { ..._70,
        ..._71,
        ..._72
      };
    }
    export namespace transfer {
      export const v1 = { ..._73,
        ..._74,
        ..._75,
        ..._76,
        ..._77,
        ..._229,
        ..._235,
        ..._242,
        ..._249,
        ..._255
      };
      export const v2 = { ..._78
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._79,
        ..._80,
        ..._81,
        ..._82,
        ..._230,
        ..._236,
        ..._243,
        ..._250,
        ..._256
      };
    }
    export namespace client {
      export const v1 = { ..._83,
        ..._84,
        ..._85,
        ..._86,
        ..._231,
        ..._237,
        ..._244,
        ..._251,
        ..._257
      };
    }
    export namespace commitment {
      export const v1 = { ..._87
      };
    }
    export namespace connection {
      export const v1 = { ..._88,
        ..._89,
        ..._90,
        ..._91,
        ..._232,
        ..._238,
        ..._245,
        ..._252,
        ..._258
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = { ..._92
      };
    }
    export namespace solomachine {
      export const v2 = { ..._93
      };
      export const v3 = { ..._94
      };
    }
    export namespace tendermint {
      export const v1 = { ..._95
      };
    }
  }
  export const ClientFactory = { ..._339,
    ..._340,
    ..._341
  };
}