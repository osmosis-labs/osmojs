import * as _62 from "./applications/fee/v1/ack";
import * as _63 from "./applications/fee/v1/fee";
import * as _64 from "./applications/fee/v1/genesis";
import * as _65 from "./applications/fee/v1/metadata";
import * as _66 from "./applications/fee/v1/query";
import * as _67 from "./applications/fee/v1/tx";
import * as _68 from "./applications/interchain_accounts/controller/v1/controller";
import * as _69 from "./applications/interchain_accounts/controller/v1/query";
import * as _70 from "./applications/interchain_accounts/controller/v1/tx";
import * as _71 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _72 from "./applications/interchain_accounts/host/v1/host";
import * as _73 from "./applications/interchain_accounts/host/v1/query";
import * as _74 from "./applications/interchain_accounts/v1/account";
import * as _75 from "./applications/interchain_accounts/v1/metadata";
import * as _76 from "./applications/interchain_accounts/v1/packet";
import * as _77 from "./applications/transfer/v1/authz";
import * as _78 from "./applications/transfer/v1/genesis";
import * as _79 from "./applications/transfer/v1/query";
import * as _80 from "./applications/transfer/v1/transfer";
import * as _81 from "./applications/transfer/v1/tx";
import * as _82 from "./applications/transfer/v2/packet";
import * as _83 from "./core/channel/v1/channel";
import * as _84 from "./core/channel/v1/genesis";
import * as _85 from "./core/channel/v1/query";
import * as _86 from "./core/channel/v1/tx";
import * as _87 from "./core/client/v1/client";
import * as _88 from "./core/client/v1/genesis";
import * as _89 from "./core/client/v1/query";
import * as _90 from "./core/client/v1/tx";
import * as _91 from "./core/commitment/v1/commitment";
import * as _92 from "./core/connection/v1/connection";
import * as _93 from "./core/connection/v1/genesis";
import * as _94 from "./core/connection/v1/query";
import * as _95 from "./core/connection/v1/tx";
import * as _96 from "./lightclients/localhost/v2/localhost";
import * as _97 from "./lightclients/solomachine/v2/solomachine";
import * as _98 from "./lightclients/solomachine/v3/solomachine";
import * as _99 from "./lightclients/tendermint/v1/tendermint";
import * as _229 from "./applications/fee/v1/tx.amino";
import * as _230 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _231 from "./applications/transfer/v1/tx.amino";
import * as _232 from "./core/channel/v1/tx.amino";
import * as _233 from "./core/client/v1/tx.amino";
import * as _234 from "./core/connection/v1/tx.amino";
import * as _235 from "./applications/fee/v1/tx.registry";
import * as _236 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _237 from "./applications/transfer/v1/tx.registry";
import * as _238 from "./core/channel/v1/tx.registry";
import * as _239 from "./core/client/v1/tx.registry";
import * as _240 from "./core/connection/v1/tx.registry";
import * as _241 from "./applications/fee/v1/query.lcd";
import * as _242 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _243 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _244 from "./applications/transfer/v1/query.lcd";
import * as _245 from "./core/channel/v1/query.lcd";
import * as _246 from "./core/client/v1/query.lcd";
import * as _247 from "./core/connection/v1/query.lcd";
import * as _248 from "./applications/fee/v1/query.rpc.Query";
import * as _249 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _250 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _251 from "./applications/transfer/v1/query.rpc.Query";
import * as _252 from "./core/channel/v1/query.rpc.Query";
import * as _253 from "./core/client/v1/query.rpc.Query";
import * as _254 from "./core/connection/v1/query.rpc.Query";
import * as _255 from "./applications/fee/v1/tx.rpc.msg";
import * as _256 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _257 from "./applications/transfer/v1/tx.rpc.msg";
import * as _258 from "./core/channel/v1/tx.rpc.msg";
import * as _259 from "./core/client/v1/tx.rpc.msg";
import * as _260 from "./core/connection/v1/tx.rpc.msg";
import * as _338 from "./lcd";
import * as _339 from "./rpc.query";
import * as _340 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = { ..._62,
        ..._63,
        ..._64,
        ..._65,
        ..._66,
        ..._67,
        ..._229,
        ..._235,
        ..._241,
        ..._248,
        ..._255
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._68,
          ..._69,
          ..._70,
          ..._230,
          ..._236,
          ..._242,
          ..._249,
          ..._256
        };
      }
      export namespace genesis {
        export const v1 = { ..._71
        };
      }
      export namespace host {
        export const v1 = { ..._72,
          ..._73,
          ..._243,
          ..._250
        };
      }
      export const v1 = { ..._74,
        ..._75,
        ..._76
      };
    }
    export namespace transfer {
      export const v1 = { ..._77,
        ..._78,
        ..._79,
        ..._80,
        ..._81,
        ..._231,
        ..._237,
        ..._244,
        ..._251,
        ..._257
      };
      export const v2 = { ..._82
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._83,
        ..._84,
        ..._85,
        ..._86,
        ..._232,
        ..._238,
        ..._245,
        ..._252,
        ..._258
      };
    }
    export namespace client {
      export const v1 = { ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._233,
        ..._239,
        ..._246,
        ..._253,
        ..._259
      };
    }
    export namespace commitment {
      export const v1 = { ..._91
      };
    }
    export namespace connection {
      export const v1 = { ..._92,
        ..._93,
        ..._94,
        ..._95,
        ..._234,
        ..._240,
        ..._247,
        ..._254,
        ..._260
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = { ..._96
      };
    }
    export namespace solomachine {
      export const v2 = { ..._97
      };
      export const v3 = { ..._98
      };
    }
    export namespace tendermint {
      export const v1 = { ..._99
      };
    }
  }
  export const ClientFactory = { ..._338,
    ..._339,
    ..._340
  };
}