import Image from "next/image"
import styles from "./Main.module.scss"
import { getStreakCounter } from "./getContractData"
import { useAccount } from "wagmi"

export default function Streak() {
  const { address } = useAccount()
  const { streakCounter } = getStreakCounter(address as `0x${string}`)

  return (
    <div className={styles.streak}>
      <h3>Streak</h3>
      <p>
        <span>{streakCounter != "undefined" ? streakCounter : "..."}</span>
      </p>
      <Image src={`/streak-fire.png`} alt="streak background image" width={200} height={200} />
    </div>
  )
}
