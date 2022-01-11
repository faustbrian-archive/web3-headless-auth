import { Connector } from "../contracts";

export const phantom = async (): Promise<Connector> => {
  await window.solana.connect();

  await window.solana.request({ method: "connect" });

  return window.solana;
};
