import { join } from 'path';
import telescope from '@cosmology/telescope';
import { sync as rimraf } from 'rimraf';

const protoDirs = [
  join(__dirname, '/../ics23/proto'),
  join(__dirname, '/../cosmos-sdk/proto'),
  join(__dirname, '/../ibc-go/proto'),
  join(__dirname, '/../wasmd/proto'),
  join(__dirname, '/../osmosis/proto'),
  join(__dirname, '/../proto')
];
const outPath = join(__dirname, '/../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    env: "v-next",
    removeUnusedImports: true,
    tsDisable: {
      patterns: ['**/*amino.ts', '**/*registry.ts']
    },
    experimentalGlobalProtoNamespace: true, //  [ 'v1beta1' ] concentratedliquidity
    interfaces: {
      enabled: true,
      useUnionTypes: false
    },
    prototypes: {
      addTypeUrlToDecoders: true,
      addTypeUrlToObjects: true,
      excluded: {
        packages: [
          // 'ibc.applications.fee.v1',

          'cosmos.app.v1alpha1',
          'cosmos.app.v1beta1',
          'cosmos.autocli.v1',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.base.tendermint.v1beta1',
          'cosmos.capability.v1beta1',
          'cosmos.crisis.v1beta1',
          'cosmos.evidence.v1beta1',
          'cosmos.feegrant.v1beta1',
          'cosmos.genutil.v1beta1',
          'cosmos.gov.v1',
          'cosmos.group.v1',
          'cosmos.group.v1beta1',
          'cosmos.mint.v1beta1',
          'cosmos.msg.v1',
          'cosmos.nft.v1beta1',
          'cosmos.orm.v1',
          'cosmos.orm.v1alpha1',
          'cosmos.params.v1beta1',
          'cosmos.slashing.v1beta1',
          'cosmos.vesting.v1beta1',
          'google.api',
          'ibc.core.port.v1',
          'ibc.core.types.v1',
        ]
      },
      methods: {
        fromJSON: false,
        toJSON: false,

        encode: true,
        decode: true,
        fromPartial: true,

        // toSDK: true,
        // fromSDK: true,

        toAmino: true,
        fromAmino: true,
        fromProto: true,
        toProto: true
      },
      parser: {
        keepCase: false
      },
      typingsFormat: {
        duration: 'duration',
        timestamp: 'date',
        useExact: false,
        useDeepPartial: false,
        num64: 'bigint',
        customTypes: {
          useCosmosSDKDec: true
        }
      }
    },
    aminoEncoding: {
      enabled: true,
      exceptions: {
        // BUG in telescope? why no workie?
        // maybe because it assumes that SDK annotations are the truth!
        '/cosmos.gov.v1beta1.MsgVote': {
          aminoType: 'cosmos-sdk/MsgVote'
        }
      },
      useRecursiveV2encoding: true
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
      useConnectComet: true
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
