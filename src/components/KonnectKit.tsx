"use client";

import { ConnectKitProvider, createConfig } from "@particle-network/connectkit";
import { authWalletConnectors } from "@particle-network/connectkit/auth";
import { mainnet } from "@particle-network/connectkit/chains";
import { evmWalletConnectors } from "@particle-network/connectkit/evm";
import { wallet, EntryPosition } from "@particle-network/connectkit/wallet";
import React from "react";
import { env } from "~/env";

const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// particleAuth.init({
//   projectId: env.NEXT_PUBLIC_REACT_APP_PROJECT_ID, // --
//   clientKey: env.NEXT_PUBLIC_REACT_APP_CLIENT_KEY, // Retrived from https://dashboard.particle.network
//   appId: env.NEXT_PUBLIC_REACT_APP_APP_ID,
// });

const config = createConfig({
  projectId: env.NEXT_PUBLIC_REACT_APP_PROJECT_ID, // --
  clientKey: env.NEXT_PUBLIC_REACT_APP_CLIENT_KEY, // Retrived from https://dashboard.particle.network
  appId: env.NEXT_PUBLIC_REACT_APP_APP_ID, // --
  appearance: {
    // Optional, collection of properties to alter the appearance of the connection modal
    // Optional, label and sort wallets (to be shown in the connection modal)
    recommendedWallets: [
      { walletId: "metaMask", label: "Recommended" },
      { walletId: "coinbaseWallet", label: "popular" },
    ],
    splitEmailAndPhone: false, // Optional, displays Email and phone number entry separately
    collapseWalletList: false, // Optional, hide wallet list behind a button
    hideContinueButton: false, // Optional, remove "Continue" button underneath Email or phone number entry
    connectorsOrder: ["email", "phone", "social", "wallet"], //  Optional, sort connection methods (index 0 will be placed at the top)
    language: "en-US", // Optional, also supported ja-JP, zh-CN, zh-TW, and ko-KR
    mode: "dark", // Optional, changes theme between light, dark, or auto (which will change it based on system settings)
    // theme: {
    //   "--pcm-accent-color": "#ff4d4f",
    //   // ... other options
    // },
    logo: "https://...",
    filterCountryCallingCode: (countries) => {
      // Optional, whitelist or blacklist phone numbers from specific countries
      return countries.filter((item) => item === "US");
    },
  },
  walletConnectors: [
    evmWalletConnectors({
      metadata: metadata, // Optional, this is Metadata used by WalletConnect and Coinbase
      walletConnectProjectId:
        env.NEXT_PUBLIC_REACT_APP_WALLETCONNECT_PROJECT_ID, // optional, retrieved from https://cloud.walletconnect.com
    }),
    authWalletConnectors({
      // Optional, configure this if you're using social logins
      authTypes: ["email", "google", "apple"], // Optional, restricts the types of social logins supported
      fiatCoin: "USD", // Optional, also supports CNY, JPY, HKD, INR, and KRW
      promptSettingConfig: {
        // Optional, changes the frequency in which the user is asked to set a master or payment password
        // 0 = Never ask
        // 1 = Ask once
        // 2 = Ask always, upon every entry
        // 3 = Force the user to set this password
        promptMasterPasswordSettingWhenLogin: 1,
        promptPaymentPasswordSettingWhenSign: 1,
      },
    }),
  ],
  plugins: [
    wallet({
      // Optional configurations for the attached embedded wallet modal
      entryPosition: EntryPosition.BR, // Alters the position in which the modal button appears upon login
      visible: true, // Dictates whether or not the wallet modal is included/visible or not
    }),
  ],
  chains: [mainnet],
});

// Export ConnectKitProvider to be used within your index or layout file (or use createConfig directly within those files).
export const ParticleConnectkit = ({ children }: React.PropsWithChildren) => {
  return <ConnectKitProvider config={config}>{children}</ConnectKitProvider>;
};
