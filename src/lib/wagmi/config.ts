import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, bsc } from "wagmi/chains";
import { http } from "viem";

// This file creates a Default Config for the WAGMI and the
// Project ID comes from the WalletConnect Cloud (Reown)

const projectId = "bc94ebd0125ab6796787879528901a55";

export const config = getDefaultConfig({
  appName: "Web 3Expo",
  projectId: projectId,
  chains: [mainnet, bsc],
  ssr: true,
});
