import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, arbitrumGoerli, mainnet, sepolia } from "viem/chains";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "449e791ba2d53821586580c8ef1a6a25";

// 2. Create wagmiConfig
const metadata = {
  name: "Cibola",
  description: "Cibola Finance",
  url: "https://app.cibola.finance",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum, arbitrumGoerli, sepolia];
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeVariables: {
    "--w3m-accent": "rgba(70, 89, 109, 1)",
  },
  tokens: {
    1: { address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" }, // mainnet
    42161: { address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831" }, //arbitrum
    421613: { address: "0xfd064A18f3BF249cf1f87FC203E90D8f650f2d63" }, // arbitrumGoerli
    11155111: { address: "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8" }, // sepolia
  },
});

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <div>
        <w3m-button
          balance="hide"
          label="Connect wallet"
          data-test="connect-wallet-button"
        />
      </div>
    </WagmiConfig>
  );
}
