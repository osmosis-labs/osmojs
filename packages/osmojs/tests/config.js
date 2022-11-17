import path from "path";

export function getChainInfo(network) {
  const configPath = path.join(__dirname, "configs", "values.json");
  const config = require(configPath);

  let chain = config["defaultChains"][network];

  for (const chainConfig of config.chains) {
    if (chainConfig.type === network) {
      chain = {...chain, ...chainConfig}
    }
  }

  // Add rpc endpoint to chain info
  chain["rpcEndpoint"] = `http://localhost:${chain.ports.rest}`;

  return chain;
}
