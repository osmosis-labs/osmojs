import * as _55 from "./applications/fee/v1/ack";
import * as _56 from "./applications/fee/v1/fee";
import * as _57 from "./applications/fee/v1/genesis";
import * as _58 from "./applications/fee/v1/metadata";
import * as _59 from "./applications/fee/v1/query";
import * as _60 from "./applications/fee/v1/tx";
import * as _61 from "./applications/interchain_accounts/controller/v1/controller";
import * as _62 from "./applications/interchain_accounts/controller/v1/query";
import * as _63 from "./applications/interchain_accounts/controller/v1/tx";
import * as _64 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _65 from "./applications/interchain_accounts/host/v1/host";
import * as _66 from "./applications/interchain_accounts/host/v1/query";
import * as _67 from "./applications/interchain_accounts/v1/account";
import * as _68 from "./applications/interchain_accounts/v1/metadata";
import * as _69 from "./applications/interchain_accounts/v1/packet";
import * as _70 from "./applications/transfer/v1/authz";
import * as _71 from "./applications/transfer/v1/genesis";
import * as _72 from "./applications/transfer/v1/query";
import * as _73 from "./applications/transfer/v1/transfer";
import * as _74 from "./applications/transfer/v1/tx";
import * as _75 from "./applications/transfer/v2/packet";
import * as _76 from "./core/channel/v1/channel";
import * as _77 from "./core/channel/v1/genesis";
import * as _78 from "./core/channel/v1/query";
import * as _79 from "./core/channel/v1/tx";
import * as _80 from "./core/client/v1/client";
import * as _81 from "./core/client/v1/genesis";
import * as _82 from "./core/client/v1/query";
import * as _83 from "./core/client/v1/tx";
import * as _84 from "./core/commitment/v1/commitment";
import * as _85 from "./core/connection/v1/connection";
import * as _86 from "./core/connection/v1/genesis";
import * as _87 from "./core/connection/v1/query";
import * as _88 from "./core/connection/v1/tx";
import * as _89 from "./lightclients/localhost/v2/localhost";
import * as _90 from "./lightclients/solomachine/v2/solomachine";
import * as _91 from "./lightclients/solomachine/v3/solomachine";
import * as _92 from "./lightclients/tendermint/v1/tendermint";
import * as _214 from "./applications/fee/v1/tx.amino";
import * as _215 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _216 from "./applications/transfer/v1/tx.amino";
import * as _217 from "./core/channel/v1/tx.amino";
import * as _218 from "./core/client/v1/tx.amino";
import * as _219 from "./core/connection/v1/tx.amino";
import * as _220 from "./applications/fee/v1/tx.registry";
import * as _221 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _222 from "./applications/transfer/v1/tx.registry";
import * as _223 from "./core/channel/v1/tx.registry";
import * as _224 from "./core/client/v1/tx.registry";
import * as _225 from "./core/connection/v1/tx.registry";
import * as _226 from "./applications/fee/v1/query.lcd";
import * as _227 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _228 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _229 from "./applications/transfer/v1/query.lcd";
import * as _230 from "./core/channel/v1/query.lcd";
import * as _231 from "./core/client/v1/query.lcd";
import * as _232 from "./core/connection/v1/query.lcd";
import * as _233 from "./applications/fee/v1/query.rpc.Query";
import * as _234 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _235 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _236 from "./applications/transfer/v1/query.rpc.Query";
import * as _237 from "./core/channel/v1/query.rpc.Query";
import * as _238 from "./core/client/v1/query.rpc.Query";
import * as _239 from "./core/connection/v1/query.rpc.Query";
import * as _240 from "./applications/fee/v1/tx.rpc.msg";
import * as _241 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _242 from "./applications/transfer/v1/tx.rpc.msg";
import * as _243 from "./core/channel/v1/tx.rpc.msg";
import * as _244 from "./core/client/v1/tx.rpc.msg";
import * as _245 from "./core/connection/v1/tx.rpc.msg";
import * as _323 from "./lcd";
import * as _324 from "./rpc.query";
import * as _325 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._55,
        ..._56,
        ..._57,
        ..._58,
        ..._59,
        ..._60,
        ..._214,
        ..._220,
        ..._226,
        ..._233,
        ..._240
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._61,
          ..._62,
          ..._63,
          ..._215,
          ..._221,
          ..._227,
          ..._234,
          ..._241
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._64
        };
      }
      export namespace host {
        export const v1 = {
          ..._65,
          ..._66,
          ..._228,
          ..._235
        };
      }
      export const v1 = {
        ..._67,
        ..._68,
        ..._69
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._70,
        ..._71,
        ..._72,
        ..._73,
        ..._74,
        ..._216,
        ..._222,
        ..._229,
        ..._236,
        ..._242
      };
      export const v2 = {
        ..._75
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._76,
        ..._77,
        ..._78,
        ..._79,
        ..._217,
        ..._223,
        ..._230,
        ..._237,
        ..._243
      };
    }
    export namespace client {
      export const v1 = {
        ..._80,
        ..._81,
        ..._82,
        ..._83,
        ..._218,
        ..._224,
        ..._231,
        ..._238,
        ..._244
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._84
      };
    }
    export namespace connection {
      export const v1 = {
        ..._85,
        ..._86,
        ..._87,
        ..._88,
        ..._219,
        ..._225,
        ..._232,
        ..._239,
        ..._245
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._89
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._90
      };
      export const v3 = {
        ..._91
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._92
      };
    }
  }
  export const ClientFactory = {
    ..._323,
    ..._324,
    ..._325
  };
}