import * as _59 from "./applications/fee/v1/ack";
import * as _60 from "./applications/fee/v1/fee";
import * as _61 from "./applications/fee/v1/genesis";
import * as _62 from "./applications/fee/v1/metadata";
import * as _63 from "./applications/fee/v1/query";
import * as _64 from "./applications/fee/v1/tx";
import * as _65 from "./applications/interchain_accounts/controller/v1/controller";
import * as _66 from "./applications/interchain_accounts/controller/v1/query";
import * as _67 from "./applications/interchain_accounts/controller/v1/tx";
import * as _68 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _69 from "./applications/interchain_accounts/host/v1/host";
import * as _70 from "./applications/interchain_accounts/host/v1/query";
import * as _71 from "./applications/interchain_accounts/v1/account";
import * as _72 from "./applications/interchain_accounts/v1/metadata";
import * as _73 from "./applications/interchain_accounts/v1/packet";
import * as _74 from "./applications/transfer/v1/authz";
import * as _75 from "./applications/transfer/v1/genesis";
import * as _76 from "./applications/transfer/v1/query";
import * as _77 from "./applications/transfer/v1/transfer";
import * as _78 from "./applications/transfer/v1/tx";
import * as _79 from "./applications/transfer/v2/packet";
import * as _80 from "./core/channel/v1/channel";
import * as _81 from "./core/channel/v1/genesis";
import * as _82 from "./core/channel/v1/query";
import * as _83 from "./core/channel/v1/tx";
import * as _84 from "./core/client/v1/client";
import * as _85 from "./core/client/v1/genesis";
import * as _86 from "./core/client/v1/query";
import * as _87 from "./core/client/v1/tx";
import * as _88 from "./core/commitment/v1/commitment";
import * as _89 from "./core/connection/v1/connection";
import * as _90 from "./core/connection/v1/genesis";
import * as _91 from "./core/connection/v1/query";
import * as _92 from "./core/connection/v1/tx";
import * as _93 from "./lightclients/localhost/v2/localhost";
import * as _94 from "./lightclients/solomachine/v2/solomachine";
import * as _95 from "./lightclients/solomachine/v3/solomachine";
import * as _96 from "./lightclients/tendermint/v1/tendermint";
import * as _224 from "./applications/fee/v1/tx.amino";
import * as _225 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _226 from "./applications/transfer/v1/tx.amino";
import * as _227 from "./core/channel/v1/tx.amino";
import * as _228 from "./core/client/v1/tx.amino";
import * as _229 from "./core/connection/v1/tx.amino";
import * as _230 from "./applications/fee/v1/tx.registry";
import * as _231 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _232 from "./applications/transfer/v1/tx.registry";
import * as _233 from "./core/channel/v1/tx.registry";
import * as _234 from "./core/client/v1/tx.registry";
import * as _235 from "./core/connection/v1/tx.registry";
import * as _236 from "./applications/fee/v1/query.lcd";
import * as _237 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _238 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _239 from "./applications/transfer/v1/query.lcd";
import * as _240 from "./core/channel/v1/query.lcd";
import * as _241 from "./core/client/v1/query.lcd";
import * as _242 from "./core/connection/v1/query.lcd";
import * as _243 from "./applications/fee/v1/query.rpc.Query";
import * as _244 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _245 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _246 from "./applications/transfer/v1/query.rpc.Query";
import * as _247 from "./core/channel/v1/query.rpc.Query";
import * as _248 from "./core/client/v1/query.rpc.Query";
import * as _249 from "./core/connection/v1/query.rpc.Query";
import * as _250 from "./applications/fee/v1/tx.rpc.msg";
import * as _251 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _252 from "./applications/transfer/v1/tx.rpc.msg";
import * as _253 from "./core/channel/v1/tx.rpc.msg";
import * as _254 from "./core/client/v1/tx.rpc.msg";
import * as _255 from "./core/connection/v1/tx.rpc.msg";
import * as _333 from "./lcd";
import * as _334 from "./rpc.query";
import * as _335 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = { ..._59,
        ..._60,
        ..._61,
        ..._62,
        ..._63,
        ..._64,
        ..._224,
        ..._230,
        ..._236,
        ..._243,
        ..._250
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._65,
          ..._66,
          ..._67,
          ..._225,
          ..._231,
          ..._237,
          ..._244,
          ..._251
        };
      }
      export namespace genesis {
        export const v1 = { ..._68
        };
      }
      export namespace host {
        export const v1 = { ..._69,
          ..._70,
          ..._238,
          ..._245
        };
      }
      export const v1 = { ..._71,
        ..._72,
        ..._73
      };
    }
    export namespace transfer {
      export const v1 = { ..._74,
        ..._75,
        ..._76,
        ..._77,
        ..._78,
        ..._226,
        ..._232,
        ..._239,
        ..._246,
        ..._252
      };
      export const v2 = { ..._79
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._80,
        ..._81,
        ..._82,
        ..._83,
        ..._227,
        ..._233,
        ..._240,
        ..._247,
        ..._253
      };
    }
    export namespace client {
      export const v1 = { ..._84,
        ..._85,
        ..._86,
        ..._87,
        ..._228,
        ..._234,
        ..._241,
        ..._248,
        ..._254
      };
    }
    export namespace commitment {
      export const v1 = { ..._88
      };
    }
    export namespace connection {
      export const v1 = { ..._89,
        ..._90,
        ..._91,
        ..._92,
        ..._229,
        ..._235,
        ..._242,
        ..._249,
        ..._255
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = { ..._93
      };
    }
    export namespace solomachine {
      export const v2 = { ..._94
      };
      export const v3 = { ..._95
      };
    }
    export namespace tendermint {
      export const v1 = { ..._96
      };
    }
  }
  export const ClientFactory = { ..._333,
    ..._334,
    ..._335
  };
}