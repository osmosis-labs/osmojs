import { Slip10RawIndex } from "@cosmjs/crypto";

export function makeCosmoshubPath(slip44 ,a) {
  return [
    Slip10RawIndex.hardened(44),
    Slip10RawIndex.hardened(slip44),
    Slip10RawIndex.hardened(0),
    Slip10RawIndex.normal(0),
    Slip10RawIndex.normal(a),
  ];
}

// helper functions for testing utils
export const waitForTx = (hash, timeout = 10000, interval = 1000) => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const intervalId = setInterval(async () => {
      const tx = await this.client.getTx(hash);
      if (tx.code === 0) {
        clearInterval(intervalId);
        resolve(tx);
      } else if (Date.now() - startTime > timeout) {
        clearInterval(intervalId);
        reject(new Error('Transaction timeout'));
      }
    }, interval);
  });
}
