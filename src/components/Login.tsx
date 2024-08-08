"use client";
import React from "react";
import { useConnect } from "@particle-network/auth-core-modal";
import Wallet from "./Wallet";

export default function Login() {
  const { connect, connected, disconnect, connectionStatus } = useConnect();

  console.log("connected : ", connected);
  console.log("connectionStatus : ", connectionStatus);

  //   async function tryLogin() {
  //     if (connected) {
  //       console.log("first");
  //       const userInfo = await connect();
  //       //   console.log("userInfo : ", userInfo);
  //     } else {
  //       console.log("try to login");
  //     }
  //   }

  //   useEffect(() => {
  //     void tryLogin();
  //   }, [connected]);

  return (
    <div>
      {connected ? (
        <div>
          <button
            className="rounded-md border p-3"
            onClick={() => disconnect()}
          >
            disconnect
          </button>
          <Wallet />
        </div>
      ) : (
        <button className="rounded-md border p-3" onClick={() => connect()}>
          Login
        </button>
      )}
    </div>
  );
}
