"use client";
import React from "react";
import Wallet from "./Wallet";
import { ConnectButton } from "@particle-network/connectkit";

export default function Login() {
  return (
    <div>
      <ConnectButton />
    </div>
  );
}
