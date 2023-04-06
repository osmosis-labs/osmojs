import * as _53 from "./applications/transfer/v1/genesis";
import * as _54 from "./applications/transfer/v1/query";
import * as _55 from "./applications/transfer/v1/transfer";
import * as _56 from "./applications/transfer/v1/tx";
import * as _57 from "./applications/transfer/v2/packet";
import * as _58 from "./core/channel/v1/channel";
import * as _59 from "./core/channel/v1/genesis";
import * as _60 from "./core/channel/v1/query";
import * as _61 from "./core/channel/v1/tx";
import * as _62 from "./core/client/v1/client";
import * as _63 from "./core/client/v1/genesis";
import * as _64 from "./core/client/v1/query";
import * as _65 from "./core/client/v1/tx";
import * as _66 from "./core/commitment/v1/commitment";
import * as _67 from "./core/connection/v1/connection";
import * as _68 from "./core/connection/v1/genesis";
import * as _69 from "./core/connection/v1/query";
import * as _70 from "./core/connection/v1/tx";
import * as _71 from "./lightclients/localhost/v1/localhost";
import * as _72 from "./lightclients/solomachine/v1/solomachine";
import * as _73 from "./lightclients/solomachine/v2/solomachine";
import * as _74 from "./lightclients/tendermint/v1/tendermint";
import * as _205 from "./applications/transfer/v1/tx.amino";
import * as _206 from "./core/channel/v1/tx.amino";
import * as _207 from "./core/client/v1/tx.amino";
import * as _208 from "./core/connection/v1/tx.amino";
import * as _209 from "./applications/transfer/v1/tx.registry";
import * as _210 from "./core/channel/v1/tx.registry";
import * as _211 from "./core/client/v1/tx.registry";
import * as _212 from "./core/connection/v1/tx.registry";
import * as _213 from "./applications/transfer/v1/query.lcd";
import * as _214 from "./core/channel/v1/query.lcd";
import * as _215 from "./core/client/v1/query.lcd";
import * as _216 from "./core/connection/v1/query.lcd";
import * as _217 from "./applications/transfer/v1/query.rpc.Query";
import * as _218 from "./core/channel/v1/query.rpc.Query";
import * as _219 from "./core/client/v1/query.rpc.Query";
import * as _220 from "./core/connection/v1/query.rpc.Query";
import * as _221 from "./applications/transfer/v1/tx.rpc.msg";
import * as _222 from "./core/channel/v1/tx.rpc.msg";
import * as _223 from "./core/client/v1/tx.rpc.msg";
import * as _224 from "./core/connection/v1/tx.rpc.msg";
import * as _302 from "./lcd";
import * as _303 from "./rpc.query";
import * as _304 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._53,
        ..._54,
        ..._55,
        ..._56,
        ..._205,
        ..._209,
        ..._213,
        ..._217,
        ..._221
      };
      export const v2 = { ..._57
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._58,
        ..._59,
        ..._60,
        ..._61,
        ..._206,
        ..._210,
        ..._214,
        ..._218,
        ..._222
      };
    }
    export namespace client {
      export const v1 = { ..._62,
        ..._63,
        ..._64,
        ..._65,
        ..._207,
        ..._211,
        ..._215,
        ..._219,
        ..._223
      };
    }
    export namespace commitment {
      export const v1 = { ..._66
      };
    }
    export namespace connection {
      export const v1 = { ..._67,
        ..._68,
        ..._69,
        ..._70,
        ..._208,
        ..._212,
        ..._216,
        ..._220,
        ..._224
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._71
      };
    }
    export namespace solomachine {
      export const v1 = { ..._72
      };
      export const v2 = { ..._73
      };
    }
    export namespace tendermint {
      export const v1 = { ..._74
      };
    }
  }
  export const ClientFactory = { ..._302,
    ..._303,
    ..._304
  };
}