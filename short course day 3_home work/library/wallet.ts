import { createAppKit } from "@reown/appkit";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { avalancheFuji } from "wagmi/chains";

const projectId = "ISI_PROJECT_ID_KAMU";

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks: [avalancheFuji],
});

export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks: [avalancheFuji],
  projectId,
});
