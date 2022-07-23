import { join } from 'path';
import telescope from '@osmonauts/telescope';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '/../src/proto');

telescope({
  protoDirs,
  outPath,
  options: {
    includeAminos: true,
    includeLCDClient: true,
    includeRpcClients: true,
    camelRpcMethods: true,
    includePackageVar: false,
    useDate: 'date',
    useDuration: 'duration',
    useExact: false
  }
});
