import { join } from 'path';
import telescope from '@osmonauts/telescope';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '/../src/proto');

telescope({
  protoDirs,
  outPath,
  options: {
    includePackageVar: false,
    aminoEncoding: {
      enabled: true
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    },
    typingsFormat: {
      duration: 'duration',
      timestamp: 'date',
      useExact: false
    }
  }
}).then(()=>{
  console.log('✨ all done!');
});
