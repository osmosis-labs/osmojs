import * as _57 from "./applications/transfer/v1/genesis";
import * as _58 from "./applications/transfer/v1/query";
import * as _59 from "./applications/transfer/v1/transfer";
import * as _60 from "./applications/transfer/v1/tx";
import * as _61 from "./applications/transfer/v2/packet";
import * as _62 from "./core/channel/v1/channel";
import * as _63 from "./core/channel/v1/genesis";
import * as _64 from "./core/channel/v1/query";
import * as _65 from "./core/channel/v1/tx";
import * as _66 from "./core/client/v1/client";
import * as _67 from "./core/client/v1/genesis";
import * as _68 from "./core/client/v1/query";
import * as _69 from "./core/client/v1/tx";
import * as _70 from "./core/commitment/v1/commitment";
import * as _71 from "./core/connection/v1/connection";
import * as _72 from "./core/connection/v1/genesis";
import * as _73 from "./core/connection/v1/query";
import * as _74 from "./core/connection/v1/tx";
import * as _75 from "./lightclients/localhost/v1/localhost";
import * as _76 from "./lightclients/solomachine/v1/solomachine";
import * as _77 from "./lightclients/solomachine/v2/solomachine";
import * as _78 from "./lightclients/tendermint/v1/tendermint";
import * as _199 from "./applications/transfer/v1/tx.amino";
import * as _200 from "./core/channel/v1/tx.amino";
import * as _201 from "./core/client/v1/tx.amino";
import * as _202 from "./core/connection/v1/tx.amino";
import * as _203 from "./applications/transfer/v1/tx.registry";
import * as _204 from "./core/channel/v1/tx.registry";
import * as _205 from "./core/client/v1/tx.registry";
import * as _206 from "./core/connection/v1/tx.registry";
import * as _207 from "./applications/transfer/v1/query.lcd";
import * as _208 from "./core/channel/v1/query.lcd";
import * as _209 from "./core/client/v1/query.lcd";
import * as _210 from "./core/connection/v1/query.lcd";
import * as _211 from "./applications/transfer/v1/query.rpc.Query";
import * as _212 from "./core/channel/v1/query.rpc.Query";
import * as _213 from "./core/client/v1/query.rpc.Query";
import * as _214 from "./core/connection/v1/query.rpc.Query";
import * as _215 from "./applications/transfer/v1/tx.rpc.msg";
import * as _216 from "./core/channel/v1/tx.rpc.msg";
import * as _217 from "./core/client/v1/tx.rpc.msg";
import * as _218 from "./core/connection/v1/tx.rpc.msg";
import * as _292 from "./lcd";
import * as _293 from "./rpc.query";
import * as _294 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._57,
        ..._58,
        ..._59,
        ..._60,
        ..._199,
        ..._203,
        ..._207,
        ..._211,
        ..._215
      };
      export const v2 = { ..._61
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._62,
        ..._63,
        ..._64,
        ..._65,
        ..._200,
        ..._204,
        ..._208,
        ..._212,
        ..._216
      };
    }
    export namespace client {
      export const v1 = { ..._66,
        ..._67,
        ..._68,
        ..._69,
        ..._201,
        ..._205,
        ..._209,
        ..._213,
        ..._217
      };
    }
    export namespace commitment {
      export const v1 = { ..._70
      };
    }
    export namespace connection {
      export const v1 = { ..._71,
        ..._72,
        ..._73,
        ..._74,
        ..._202,
        ..._206,
        ..._210,
        ..._214,
        ..._218
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._75
      };
    }
    export namespace solomachine {
      export const v1 = { ..._76
      };
      export const v2 = { ..._77
      };
    }
    export namespace tendermint {
      export const v1 = { ..._78
      };
    }
  }
  export const ClientFactory = { ..._292,
    ..._293,
    ..._294
  };
}