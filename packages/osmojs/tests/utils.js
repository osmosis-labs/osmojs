import fetch from 'node-fetch';

export async function fetchJSON(url, options = {}) {
  const response = await fetch(url, {});
  return await response.json()
};
