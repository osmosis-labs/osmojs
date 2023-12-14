import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  osmosis: {
    concentratedliquidity: {
      v1beta1: new (await import("./concentrated-liquidity/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gamm: {
      poolmodels: {
        balancer: {
          v1beta1: new (await import("./gamm/pool-models/balancer/tx/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        stableswap: {
          v1beta1: new (await import("./gamm/pool-models/stableswap/tx.rpc.msg")).MsgClientImpl(rpc)
        }
      },
      v1beta1: new (await import("./gamm/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    incentives: new (await import("./incentives/tx.rpc.msg")).MsgClientImpl(rpc),
    lockup: new (await import("./lockup/tx.rpc.msg")).MsgClientImpl(rpc),
    poolmanager: {
      v1beta1: new (await import("./poolmanager/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    protorev: {
      v1beta1: new (await import("./protorev/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    superfluid: new (await import("./superfluid/tx.rpc.msg")).MsgClientImpl(rpc),
    tokenfactory: {
      v1beta1: new (await import("./tokenfactory/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    valsetpref: {
      v1beta1: new (await import("./valset-pref/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});