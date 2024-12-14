"use client"

import styles from "./Main.module.scss"
import { useAccount } from "wagmi"
import Streak from "./Streak"
import { getCheckInRequest, getGlobalCounter, getUserCounter } from "./getContractData"
import { useState } from "react"
import { writeContract } from "wagmi/actions"
import wagmiConfig from "@/shared/wagmiConfig"
import Link from "next/link"

export default function Main() {
  const { chainId, address } = useAccount()
  const { globalCounter } = getGlobalCounter()
  const { userCounter } = getUserCounter(address as `0x${string}`)
  const { checkInRequest } = getCheckInRequest()
  const [hash, setHash] = useState("")

  const handleCheckIn = async () => {
    if (!checkInRequest) return
    setHash(await writeContract(wagmiConfig, checkInRequest))
  }

  console.log("CheckIn Request: ", checkInRequest)
  return (
    <div className={styles.container}>
      <h1>
        We've already done
        <span> {globalCounter != "undefined" ? globalCounter : "..."} </span>CheckIns!
      </h1>
      {chainId === 11124 ? (
        <h2>
          Your precious contribution: <span>{userCounter != "undefined" ? userCounter : "..."}</span>
          <Streak />
        </h2>
      ) : chainId ? (
        <h2>Change your network to the Abstract Testnet</h2>
      ) : (
        <h2>Join us, connect your wallet</h2>
      )}
      <button
        disabled={!checkInRequest || !chainId || chainId !== 11124}
        className={styles.CheckIn}
        onClick={handleCheckIn}
      >
        CheckIn
      </button>

      {hash && (
        <h3>
          <Link
            href={`https://explorer.testnet.abs.xyz/tx/${hash}`}
            target="_blank"
          >{`https://explorer.testnet.abs.xyz/tx/${hash}`}</Link>
        </h3>
      )}
    </div>
  )
}
