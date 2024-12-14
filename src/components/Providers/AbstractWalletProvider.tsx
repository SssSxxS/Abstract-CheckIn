"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiProvider } from "wagmi"
import { ConnectKitProvider } from "connectkit"
import wagmiConfig from "@/shared/wagmiConfig"

const queryClient = new QueryClient()

export default function AbstractWalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          mode="light"
          customTheme={{
            "--ck-font-family": "var(--font-inter)",
            "--ck-connectbutton-border-radius": "var(--header-button-border-radius)",
            "--ck-connectbutton-background": "var(--header-button-background-color)",
            "--ck-connectbutton-box-shadow": "var(--header-button-box-shadow)",
            "--ck-connectbutton-hover-color": "var(--header-button-hover-text-color)",
            "--ck-connectbutton-hover-background": "var(--header-button-background-color)",
            "--ck-connectbutton-hover-box-shadow": "var(--header-button-hover-box-shadow)",
            "--ck-connectbutton-active-color": "var(--header-button-hover-text-color)",
            "--ck-connectbutton-active-background": "var(--header-button-background-color)",
            "--ck-connectbutton-active-box-shadow": "var(--header-button-active-box-shadow)",
          }}
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
