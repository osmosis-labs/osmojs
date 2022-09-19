import * as _106 from "./applications/transfer/v1/genesis";
import * as _107 from "./applications/transfer/v1/query";
import * as _108 from "./applications/transfer/v1/transfer";
import * as _109 from "./applications/transfer/v1/tx";
import * as _110 from "./applications/transfer/v2/packet";
import * as _111 from "./core/channel/v1/channel";
import * as _112 from "./core/channel/v1/genesis";
import * as _113 from "./core/channel/v1/query";
import * as _114 from "./core/channel/v1/tx";
import * as _115 from "./core/client/v1/client";
import * as _116 from "./core/client/v1/genesis";
import * as _117 from "./core/client/v1/query";
import * as _118 from "./core/client/v1/tx";
import * as _119 from "./core/commitment/v1/commitment";
import * as _120 from "./core/connection/v1/connection";
import * as _121 from "./core/connection/v1/genesis";
import * as _122 from "./core/connection/v1/query";
import * as _123 from "./core/connection/v1/tx";
import * as _124 from "./core/port/v1/query";
import * as _125 from "./core/types/v1/genesis";
import * as _126 from "./lightclients/localhost/v1/localhost";
import * as _127 from "./lightclients/solomachine/v1/solomachine";
import * as _128 from "./lightclients/solomachine/v2/solomachine";
import * as _129 from "./lightclients/tendermint/v1/tendermint";
import * as _258 from "./applications/transfer/v1/tx.amino";
import * as _259 from "./core/channel/v1/tx.amino";
import * as _260 from "./core/client/v1/tx.amino";
import * as _261 from "./core/connection/v1/tx.amino";
import * as _262 from "./applications/transfer/v1/tx.registry";
import * as _263 from "./core/channel/v1/tx.registry";
import * as _264 from "./core/client/v1/tx.registry";
import * as _265 from "./core/connection/v1/tx.registry";
import * as _266 from "./applications/transfer/v1/query.lcd";
import * as _267 from "./core/channel/v1/query.lcd";
import * as _268 from "./core/client/v1/query.lcd";
import * as _269 from "./core/connection/v1/query.lcd";
import * as _270 from "./applications/transfer/v1/query.rpc.query";
import * as _271 from "./core/channel/v1/query.rpc.query";
import * as _272 from "./core/client/v1/query.rpc.query";
import * as _273 from "./core/connection/v1/query.rpc.query";
import * as _274 from "./core/port/v1/query.rpc.query";
import * as _275 from "./applications/transfer/v1/tx.rpc.msg";
import * as _276 from "./core/channel/v1/tx.rpc.msg";
import * as _277 from "./core/client/v1/tx.rpc.msg";
import * as _278 from "./core/connection/v1/tx.rpc.msg";
import * as _324 from "./lcd";
import * as _325 from "./rpc.query";
import * as _326 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._106,
        ..._107,
        ..._108,
        ..._109,
        ..._258,
        ..._262,
        ..._266,
        ..._270,
        ..._275
      };
      export const v2 = { ..._110
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._259,
        ..._263,
        ..._267,
        ..._271,
        ..._276
      };
    }
    export namespace client {
      export const v1 = { ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._260,
        ..._264,
        ..._268,
        ..._272,
        ..._277
      };
    }
    export namespace commitment {
      export const v1 = { ..._119
      };
    }
    export namespace connection {
      export const v1 = { ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._261,
        ..._265,
        ..._269,
        ..._273,
        ..._278
      };
    }
    export namespace port {
      export const v1 = { ..._124,
        ..._274
      };
    }
    export namespace types {
      export const v1 = { ..._125
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._126
      };
    }
    export namespace solomachine {
      export const v1 = { ..._127
      };
      export const v2 = { ..._128
      };
    }
    export namespace tendermint {
      export const v1 = { ..._129
      };
    }
  }
  export const ClientFactory = { ..._324,
    ..._325,
    ..._326
  };
}