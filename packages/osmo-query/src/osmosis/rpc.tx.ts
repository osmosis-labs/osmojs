//@ts-nocheck
import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    auth: {
      v1beta1: new (await import("../cosmos/auth/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    consensus: {
      v1: new (await import("../cosmos/consensus/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  osmosis: {
    concentratedliquidity: {
      poolmodel: {
        concentrated: {
          v1beta1: new (await import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        }
      },
      v1beta1: new (await import("./concentratedliquidity/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gamm: {
      poolmodels: {
        balancer: {
          v1beta1: new (await import("./gamm/poolmodels/balancer/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        stableswap: {
          v1beta1: new (await import("./gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        }
      },
      v1beta1: new (await import("./gamm/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    ibchooks: new (await import("./ibchooks/tx.rpc.msg")).MsgClientImpl(rpc),
    incentives: new (await import("./incentives/tx.rpc.msg")).MsgClientImpl(rpc),
    lockup: new (await import("./lockup/tx.rpc.msg")).MsgClientImpl(rpc),
    poolmanager: {
      v1beta1: new (await import("./poolmanager/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    protorev: {
      v1beta1: new (await import("./protorev/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    smartaccount: {
      v1beta1: new (await import("./smartaccount/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    superfluid: new (await import("./superfluid/tx.rpc.msg")).MsgClientImpl(rpc),
    tokenfactory: {
      v1beta1: new (await import("./tokenfactory/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    txfees: {
      v1beta1: new (await import("./txfees/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    valsetpref: {
      v1beta1: new (await import("./valsetpref/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});