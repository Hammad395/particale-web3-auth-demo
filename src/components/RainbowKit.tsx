"use client";
import React, { useMemo } from "react";
import {
  ConnectButton,
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  omniWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

import { ParticleNetwork } from "@particle-network/auth";
import { particleWallet } from "@particle-network/rainbowkit-ext";

import "@rainbow-me/rainbowkit/styles.css";
// import "./App.css";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  arbitrum,
  baseSepolia,
  mainnet,
  optimism,
  polygon,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { env } from "~/env";
import { BaseSepolia } from "@particle-network/chains";

console.log(baseSepolia);

const RainbowKit = () => {
  const particle = useMemo(
    () =>
      new ParticleNetwork({
        projectId: env.NEXT_PUBLIC_REACT_APP_PROJECT_ID,
        clientKey: env.NEXT_PUBLIC_REACT_APP_CLIENT_KEY,
        appId: env.NEXT_PUBLIC_REACT_APP_APP_ID,
        chainName: mainnet.name,
        chainId: mainnet.id,
        wallet: { displayWalletEntry: true },
      }),
    [],
  );

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [publicProvider()],
  );

  const commonOptions = {
    chains,
    projectId: env.NEXT_PUBLIC_REACT_APP_WALLETCONNECT_PROJECT_ID,
  };

  const popularWallets = useMemo(
    () => ({
      groupName: "Popular",
      wallets: [
        particleWallet({ chains, authType: "google" }),
        particleWallet({ chains, authType: "facebook" }),
        particleWallet({ chains, authType: "apple" }),
        particleWallet({ chains }),
        injectedWallet(commonOptions),
        rainbowWallet(commonOptions),
        coinbaseWallet({ appName: "RainbowKit demo", ...commonOptions }),
        metaMaskWallet(commonOptions),
        walletConnectWallet(commonOptions),
      ],
    }),
    [particle],
  );

  const connectors = connectorsForWallets([
    popularWallets,
    {
      groupName: "Other",
      wallets: [
        argentWallet(commonOptions),
        trustWallet(commonOptions),
        omniWallet(commonOptions),
        imTokenWallet(commonOptions),
        ledgerWallet(commonOptions),
      ],
    },
  ]);

  const wagmiClient = createConfig({
    autoConnect: false,
    connectors,
    publicClient,
    webSocketPublicClient,
  });

  return (
    <WagmiConfig config={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="rainbowkit-box">
          <div className="rainbowkit-connect-btn">
            <ConnectButton />
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default RainbowKit;
