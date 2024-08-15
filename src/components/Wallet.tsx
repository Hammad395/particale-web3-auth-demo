// "use client";
// import React, { useEffect, useState } from "react";
// import { ethers } from "ethers";

// // Particle Auth Core
// import {
//   useEthereum,
//   useUserInfo,
//   useAuthCore,
// } from "@particle-network/auth-core-modal";
// import { BaseSepolia } from "@particle-network/chains";

// export default function Wallet() {
//   const { provider, address } = useEthereum();
//   console.log("address by ethereum : ", address);
//   const { userInfo } = useUserInfo();
//   console.log("userInfo : ", userInfo);

//   const { openWallet } = useAuthCore();

//   const [accountAddress, setAccountAddress] = useState<string[]>();

//   const ethersProvider = new ethers.providers.Web3Provider(provider, {
//     name: BaseSepolia.name,
//     chainId: BaseSepolia.id,
//     // ensAddress?: BaseSepolia.;
//     // _defaultProvider?: (providers: any, options?: any) => any;
//   });
//   async function getAccounts() {
//     console.log("function called");
//     const accounts = await ethersProvider.listAccounts();
//     console.log("accounts : ", accounts);
//     setAccountAddress(accounts);
//     // return accounts;
//   }

//   function sendTransaction() {
//     const signer = ethersProvider.getSigner();

//     const txnParams = {
//       to: "0x0ce058780ce2f5451a384f4716360f82e608da54",
//       value: ethers.utils.parseEther("0.002"),
//     };

//     signer
//       .sendTransaction(txnParams)
//       .then((tx) => {
//         console.log(tx);
//       })
//       .catch((error) => {
//         throw error;
//       });
//   }

//   useEffect(() => {
//     void getAccounts();
//   }, []);
//   return (
//     <div>
//       <button className="rounded-md border p-3" onClick={() => openWallet()}>
//         open wallet
//       </button>
//       <p>Wallet Address :{accountAddress?.[0]}</p>
//       {/* 0x3942666699e4F26DaD0F6c03D56F1fd9872Fd3B2 */}
//       <button
//         className="rounded-md border p-3"
//         onClick={() => sendTransaction()}
//       >
//         send 0.001 ETH
//       </button>
//     </div>
//   );
// }
