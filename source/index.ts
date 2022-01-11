import { Connector } from "./contracts";
import { coinbase } from "./connectors/coinbase";
import { metamask } from "./connectors/metamask";
import { phantom } from "./connectors/phantom";
import { walletConnect } from "./connectors/wallet-connect";

export const createConnector = async (
  name: string,
): Promise<Connector | undefined> => ({
  coinbase,
  metamask,
  phantom,
  walletConnect,
}[name]);
