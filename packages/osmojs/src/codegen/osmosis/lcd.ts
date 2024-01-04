import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    cosmos: {
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      base: {
        node: {
          v1beta1: new (await import("../cosmos/base/node/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      consensus: {
        v1: new (await import("../cosmos/consensus/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    osmosis: {
      concentratedliquidity: {
        v1beta1: new (await import("./concentratedliquidity/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      cosmwasmpool: {
        v1beta1: new (await import("./cosmwasmpool/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      downtimedetector: {
        v1beta1: new (await import("./downtimedetector/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      epochs: {
        v1beta1: new (await import("./epochs/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gamm: {
        v1beta1: new (await import("./gamm/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v2: new (await import("./gamm/v2/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      ibcratelimit: {
        v1beta1: new (await import("./ibcratelimit/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      incentives: new (await import("./incentives/query.lcd")).LCDQueryClient({
        requestClient
      }),
      lockup: new (await import("./lockup/query.lcd")).LCDQueryClient({
        requestClient
      }),
      mint: {
        v1beta1: new (await import("./mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      poolincentives: {
        v1beta1: new (await import("./poolincentives/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      poolmanager: {
        v1beta1: new (await import("./poolmanager/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v2: new (await import("./poolmanager/v2/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      protorev: {
        v1beta1: new (await import("./protorev/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      superfluid: new (await import("./superfluid/query.lcd")).LCDQueryClient({
        requestClient
      }),
      tokenfactory: {
        v1beta1: new (await import("./tokenfactory/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      twap: {
        v1beta1: new (await import("./twap/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      txfees: {
        v1beta1: new (await import("./txfees/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      valsetpref: {
        v1beta1: new (await import("./valsetpref/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    }
  };
};