import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosAuthzV1beta1Queryrpc from "./cosmos/authz/v1beta1/query.rpc.Query";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
import * as _CosmosBaseNodeV1beta1Queryrpc from "./cosmos/base/node/v1beta1/query.rpc.Service";
import * as _CosmosDistributionV1beta1Queryrpc from "./cosmos/distribution/v1beta1/query.rpc.Query";
import * as _CosmosGovV1beta1Queryrpc from "./cosmos/gov/v1beta1/query.rpc.Query";
import * as _CosmosStakingV1beta1Queryrpc from "./cosmos/staking/v1beta1/query.rpc.Query";
import * as _CosmosTxV1beta1Servicerpc from "./cosmos/tx/v1beta1/service.rpc.Service";
import * as _CosmosUpgradeV1beta1Queryrpc from "./cosmos/upgrade/v1beta1/query.rpc.Query";
import * as _IbcApplicationsFeeV1Queryrpc from "./ibc/applications/fee/v1/query.rpc.Query";
import * as _IbcApplicationsInterchainAccountsControllerV1Queryrpc from "./ibc/applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _IbcApplicationsInterchainAccountsHostV1Queryrpc from "./ibc/applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _IbcApplicationsTransferV1Queryrpc from "./ibc/applications/transfer/v1/query.rpc.Query";
import * as _IbcCoreChannelV1Queryrpc from "./ibc/core/channel/v1/query.rpc.Query";
import * as _IbcCoreClientV1Queryrpc from "./ibc/core/client/v1/query.rpc.Query";
import * as _IbcCoreConnectionV1Queryrpc from "./ibc/core/connection/v1/query.rpc.Query";
import * as _CosmwasmWasmV1Queryrpc from "./cosmwasm/wasm/v1/query.rpc.Query";
import * as _OsmosisConcentratedliquidityQueryrpc from "./osmosis/concentrated-liquidity/query.rpc.Query";
import * as _OsmosisCosmwasmpoolV1beta1Queryrpc from "./osmosis/cosmwasmpool/v1beta1/query.rpc.Query";
import * as _OsmosisDowntimedetectorV1beta1Queryrpc from "./osmosis/downtime-detector/v1beta1/query.rpc.Query";
import * as _OsmosisEpochsQueryrpc from "./osmosis/epochs/query.rpc.Query";
import * as _OsmosisGammV1beta1Queryrpc from "./osmosis/gamm/v1beta1/query.rpc.Query";
import * as _OsmosisGammV2Queryrpc from "./osmosis/gamm/v2/query.rpc.Query";
import * as _OsmosisIbcratelimitV1beta1Queryrpc from "./osmosis/ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _OsmosisIncentivesQueryrpc from "./osmosis/incentives/query.rpc.Query";
import * as _OsmosisLockupQueryrpc from "./osmosis/lockup/query.rpc.Query";
import * as _OsmosisMintV1beta1Queryrpc from "./osmosis/mint/v1beta1/query.rpc.Query";
import * as _OsmosisPoolincentivesV1beta1Queryrpc from "./osmosis/pool-incentives/v1beta1/query.rpc.Query";
import * as _OsmosisPoolmanagerV1beta1Queryrpc from "./osmosis/poolmanager/v1beta1/query.rpc.Query";
import * as _OsmosisProtorevV1beta1Queryrpc from "./osmosis/protorev/v1beta1/query.rpc.Query";
import * as _OsmosisSuperfluidQueryrpc from "./osmosis/superfluid/query.rpc.Query";
import * as _OsmosisTokenfactoryV1beta1Queryrpc from "./osmosis/tokenfactory/v1beta1/query.rpc.Query";
import * as _OsmosisTwapV1beta1Queryrpc from "./osmosis/twap/v1beta1/query.rpc.Query";
import * as _OsmosisTxfeesV1beta1Queryrpc from "./osmosis/txfees/v1beta1/query.rpc.Query";
import * as _OsmosisValsetprefV1beta1Queryrpc from "./osmosis/valset-pref/v1beta1/query.rpc.Query";
export const createRpcQueryHooks = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    cosmos: {
      auth: {
        v1beta1: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      authz: {
        v1beta1: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      bank: {
        v1beta1: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      base: {
        node: {
          v1beta1: _CosmosBaseNodeV1beta1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      distribution: {
        v1beta1: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      gov: {
        v1beta1: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      staking: {
        v1beta1: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      tx: {
        v1beta1: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc)
      },
      upgrade: {
        v1beta1: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    ibc: {
      applications: {
        fee: {
          v1: _IbcApplicationsFeeV1Queryrpc.createRpcQueryHooks(rpc)
        },
        interchain_accounts: {
          controller: {
            v1: _IbcApplicationsInterchainAccountsControllerV1Queryrpc.createRpcQueryHooks(rpc)
          },
          host: {
            v1: _IbcApplicationsInterchainAccountsHostV1Queryrpc.createRpcQueryHooks(rpc)
          }
        },
        transfer: {
          v1: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      core: {
        channel: {
          v1: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc)
        },
        client: {
          v1: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc)
        },
        connection: {
          v1: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc)
        }
      }
    },
    cosmwasm: {
      wasm: {
        v1: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    osmosis: {
      concentratedliquidity: {
        v1beta1: _OsmosisConcentratedliquidityQueryrpc.createRpcQueryHooks(rpc)
      },
      cosmwasmpool: {
        v1beta1: _OsmosisCosmwasmpoolV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      downtimedetector: {
        v1beta1: _OsmosisDowntimedetectorV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      epochs: {
        v1beta1: _OsmosisEpochsQueryrpc.createRpcQueryHooks(rpc)
      },
      gamm: {
        v1beta1: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc),
        v2: _OsmosisGammV2Queryrpc.createRpcQueryHooks(rpc)
      },
      ibcratelimit: {
        v1beta1: _OsmosisIbcratelimitV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      incentives: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc),
      lockup: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc),
      mint: {
        v1beta1: _OsmosisMintV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      poolincentives: {
        v1beta1: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      poolmanager: {
        v1beta1: _OsmosisPoolmanagerV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      protorev: {
        v1beta1: _OsmosisProtorevV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      superfluid: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc),
      tokenfactory: {
        v1beta1: _OsmosisTokenfactoryV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      twap: {
        v1beta1: _OsmosisTwapV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      txfees: {
        v1beta1: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      valsetpref: {
        v1beta1: _OsmosisValsetprefV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    }
  };
};