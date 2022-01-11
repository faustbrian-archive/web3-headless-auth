import { Connector } from "../contracts";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const walletConnect = async (): Promise<Connector> => {
  const provider = new WalletConnectProvider({
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    chainId: 1,
  });

  await provider.enable();

  return provider;
};
