// "use client";
// import React from "react";

// import { AuthType } from "@particle-network/auth-core";
// import { BaseSepolia } from "@particle-network/chains";
// import {
//   AuthCoreContextProvider,
//   PromptSettingType,
// } from "@particle-network/auth-core-modal";
// import { env } from "~/env";

// export default function Layout2({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <AuthCoreContextProvider
//       options={{
//         projectId: env.NEXT_PUBLIC_REACT_APP_PROJECT_ID,
//         clientKey: env.NEXT_PUBLIC_REACT_APP_CLIENT_KEY,
//         appId: env.NEXT_PUBLIC_REACT_APP_APP_ID,
//         authTypes: [AuthType.email, AuthType.google, AuthType.facebook],
//         themeType: "dark",
//         fiatCoin: "USD",
//         language: "en",
//         erc4337: {
//           name: "SIMPLE",
//           version: "1.0.0",
//         },
//         promptSettingConfig: {
//           promptPaymentPasswordSettingWhenSign: PromptSettingType.first,
//           promptMasterPasswordSettingWhenLogin: PromptSettingType.first,
//         },
//         wallet: {
//           visible: true,
//           customStyle: {
//             supportChains: [BaseSepolia],
//           },
//         },
//       }}
//     >
//       <div>{children}</div>
//     </AuthCoreContextProvider>
//   );
// }
