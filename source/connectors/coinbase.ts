import { Connector } from "../contracts";

export const coinbase = async (): Promise<Connector> => {
  let provider = Array.isArray(window.ethereum.providers)
    ? window.ethereum.providers.find(
      ({ isWalletLink }) => isWalletLink,
    )
    : window.ethereum;

  await provider.request({
    method: "eth_requestAccounts",
  });

  return provider;
};
