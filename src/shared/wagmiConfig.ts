import { abstractWalletConnector } from "@abstract-foundation/agw-react/connectors"
import { abstractTestnet } from "viem/chains"
import { createConfig, http } from "wagmi"

const wagmiConfig = createConfig({
  connectors: [abstractWalletConnector()],
  chains: [abstractTestnet],
  transports: {
    [abstractTestnet.id]: http(),
  },
  ssr: true,
})

export default wagmiConfig
