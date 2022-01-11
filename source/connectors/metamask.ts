import { Connector } from "../contracts";

export const metamask = async (): Promise<Connector> => {
  let provider = Array.isArray(window.ethereum.providers)
    ? window.ethereum.providers.find(
      ({ isMetaMask }) => isMetaMask,
    )
    : window.ethereum;

  await provider.request({
    method: "eth_requestAccounts",
  });

  return provider;
};
