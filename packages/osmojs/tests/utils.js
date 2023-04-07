import fetch from 'node-fetch';

export async function fetchJSON(url, options = {}) {
  const response = await fetch(url, {});
  return await response.json()
};

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
