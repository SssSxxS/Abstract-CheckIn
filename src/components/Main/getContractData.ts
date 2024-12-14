import contractAbi from "@/shared/contractAbi"
import wagmiConfig from "@/shared/wagmiConfig"
import { useQuery } from "@tanstack/react-query"
import { readContract, simulateContract } from "wagmi/actions"

export const getGlobalCounter = () => {
  const { data, error } = useQuery({
    queryKey: ["getGlobalCounter"],
    queryFn: async () =>
      await readContract(wagmiConfig, {
        abi: contractAbi,
        address: "0x6A6A9970cb7d136383Dc9Ddae495Dff3c64496F5",
        functionName: "getGlobalCheckInCounter",
      }),
    refetchInterval: 10000,
  })

  if (error) {
    console.error("Error fetching global counter: ", error)
  }
  const globalCounter = String(data)
  return { globalCounter }
}
export const getUserCounter = (address: `0x${string}`) => {
  const { data, error } = useQuery({
    queryKey: ["getUserCounter"],
    queryFn: async () =>
      await readContract(wagmiConfig, {
        abi: contractAbi,
        address: "0x6A6A9970cb7d136383Dc9Ddae495Dff3c64496F5",
        functionName: "getCheckInCounterForAddress",
        args: [address],
      }),
    refetchInterval: 10000,
  })

  if (error) {
    console.error("Error fetching user counter: ", error)
  }
  const userCounter = String(data)
  return { userCounter }
}
export const getStreakCounter = (address: `0x${string}`) => {
  const { data, error } = useQuery({
    queryKey: ["getStreakCounter"],
    queryFn: async () =>
      await readContract(wagmiConfig, {
        abi: contractAbi,
        address: "0x6A6A9970cb7d136383Dc9Ddae495Dff3c64496F5",
        functionName: "getCheckInStreakCounterForAddress",
        args: [address],
      }),
    refetchInterval: 10000,
  })

  if (error) {
    console.error("Error fetching streak counter: ", error)
  }
  const streakCounter = String(data)
  return { streakCounter }
}
export const getCheckInRequest = () => {
  const { data, error } = useQuery({
    queryKey: ["getCheckInRequest"],
    queryFn: async () =>
      await simulateContract(wagmiConfig, {
        abi: contractAbi,
        address: "0x6A6A9970cb7d136383Dc9Ddae495Dff3c64496F5",
        functionName: "CheckIn",
      }),
    refetchInterval: 10000,
  })

  let checkInRequest = data?.request
  if (error) {
    console.error("Error simulate CheckIn request: ", error)
    checkInRequest = undefined
  }
  return { checkInRequest }
}
