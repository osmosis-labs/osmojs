import * as _58 from "./applications/transfer/v1/genesis";
import * as _59 from "./applications/transfer/v1/query";
import * as _60 from "./applications/transfer/v1/transfer";
import * as _61 from "./applications/transfer/v1/tx";
import * as _62 from "./applications/transfer/v2/packet";
import * as _63 from "./core/channel/v1/channel";
import * as _64 from "./core/channel/v1/genesis";
import * as _65 from "./core/channel/v1/query";
import * as _66 from "./core/channel/v1/tx";
import * as _67 from "./core/client/v1/client";
import * as _68 from "./core/client/v1/genesis";
import * as _69 from "./core/client/v1/query";
import * as _70 from "./core/client/v1/tx";
import * as _71 from "./core/commitment/v1/commitment";
import * as _72 from "./core/connection/v1/connection";
import * as _73 from "./core/connection/v1/genesis";
import * as _74 from "./core/connection/v1/query";
import * as _75 from "./core/connection/v1/tx";
import * as _76 from "./lightclients/localhost/v1/localhost";
import * as _77 from "./lightclients/solomachine/v1/solomachine";
import * as _78 from "./lightclients/solomachine/v2/solomachine";
import * as _79 from "./lightclients/tendermint/v1/tendermint";
import * as _209 from "./applications/transfer/v1/tx.amino";
import * as _210 from "./core/channel/v1/tx.amino";
import * as _211 from "./core/client/v1/tx.amino";
import * as _212 from "./core/connection/v1/tx.amino";
import * as _213 from "./applications/transfer/v1/tx.registry";
import * as _214 from "./core/channel/v1/tx.registry";
import * as _215 from "./core/client/v1/tx.registry";
import * as _216 from "./core/connection/v1/tx.registry";
import * as _217 from "./applications/transfer/v1/query.lcd";
import * as _218 from "./core/channel/v1/query.lcd";
import * as _219 from "./core/client/v1/query.lcd";
import * as _220 from "./core/connection/v1/query.lcd";
import * as _221 from "./applications/transfer/v1/query.rpc.Query";
import * as _222 from "./core/channel/v1/query.rpc.Query";
import * as _223 from "./core/client/v1/query.rpc.Query";
import * as _224 from "./core/connection/v1/query.rpc.Query";
import * as _225 from "./applications/transfer/v1/tx.rpc.msg";
import * as _226 from "./core/channel/v1/tx.rpc.msg";
import * as _227 from "./core/client/v1/tx.rpc.msg";
import * as _228 from "./core/connection/v1/tx.rpc.msg";
import * as _304 from "./lcd";
import * as _305 from "./rpc.query";
import * as _306 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._58,
        ..._59,
        ..._60,
        ..._61,
        ..._209,
        ..._213,
        ..._217,
        ..._221,
        ..._225
      };
      export const v2 = { ..._62
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._63,
        ..._64,
        ..._65,
        ..._66,
        ..._210,
        ..._214,
        ..._218,
        ..._222,
        ..._226
      };
    }
    export namespace client {
      export const v1 = { ..._67,
        ..._68,
        ..._69,
        ..._70,
        ..._211,
        ..._215,
        ..._219,
        ..._223,
        ..._227
      };
    }
    export namespace commitment {
      export const v1 = { ..._71
      };
    }
    export namespace connection {
      export const v1 = { ..._72,
        ..._73,
        ..._74,
        ..._75,
        ..._212,
        ..._216,
        ..._220,
        ..._224,
        ..._228
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._76
      };
    }
    export namespace solomachine {
      export const v1 = { ..._77
      };
      export const v2 = { ..._78
      };
    }
    export namespace tendermint {
      export const v1 = { ..._79
      };
    }
  }
  export const ClientFactory = { ..._304,
    ..._305,
    ..._306
  };
}