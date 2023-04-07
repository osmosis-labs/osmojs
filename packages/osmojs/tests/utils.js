import fetch from 'node-fetch';

export async function fetchJSON(url, options = {}) {
  const response = await fetch(url, {});
  return await response.json()
};

export async function getDenomFromTraces(client, denom) {
  const traces = await client.ibc.transfer.denomTraces()
  traces.map(trace => {
    if trace.denomTrace.baseDenom == denom {
      return trace.denomTrace.
    }
  });
}
