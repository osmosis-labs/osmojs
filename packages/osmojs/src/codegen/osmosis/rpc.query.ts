import { connectComet, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await connectComet(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      base: {
        node: {
          v1beta1: (await import("../cosmos/base/node/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      consensus: {
        v1: (await import("../cosmos/consensus/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      orm: {
        query: {
          v1alpha1: (await import("../cosmos/orm/query/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
        }
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    osmosis: {
      concentratedliquidity: {
        v1beta1: (await import("./concentratedliquidity/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      cosmwasmpool: {
        v1beta1: (await import("./cosmwasmpool/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      downtimedetector: {
        v1beta1: (await import("./downtimedetector/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      epochs: {
        v1beta1: (await import("./epochs/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gamm: {
        v1beta1: (await import("./gamm/v1beta1/query.rpc.Query")).createRpcQueryExtension(client),
        v2: (await import("./gamm/v2/query.rpc.Query")).createRpcQueryExtension(client)
      },
      ibcratelimit: {
        v1beta1: (await import("./ibcratelimit/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      incentives: (await import("./incentives/query.rpc.Query")).createRpcQueryExtension(client),
      lockup: (await import("./lockup/query.rpc.Query")).createRpcQueryExtension(client),
      mint: {
        v1beta1: (await import("./mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      poolincentives: {
        v1beta1: (await import("./poolincentives/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      poolmanager: {
        v1beta1: (await import("./poolmanager/v1beta1/query.rpc.Query")).createRpcQueryExtension(client),
        v2: (await import("./poolmanager/v2/query.rpc.Query")).createRpcQueryExtension(client)
      },
      protorev: {
        v1beta1: (await import("./protorev/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      superfluid: (await import("./superfluid/query.rpc.Query")).createRpcQueryExtension(client),
      tokenfactory: {
        v1beta1: (await import("./tokenfactory/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      twap: {
        v1beta1: (await import("./twap/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      txfees: {
        v1beta1: (await import("./txfees/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      valsetpref: {
        v1beta1: (await import("./valsetpref/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};