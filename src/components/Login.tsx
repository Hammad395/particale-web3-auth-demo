"use client";
import React from "react";
import { ConnectButton, useAccount } from "@particle-network/connectkit";

export default function Login() {
  const { address, isConnected, chainId } = useAccount();
  return (
    <div>
      <ConnectButton />
      {isConnected && <div>Address : {address}</div>}
      {isConnected && <div>ChainId : {chainId}</div>}
    </div>
  );
}
