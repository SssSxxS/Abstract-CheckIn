import Link from "next/link"
import styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link href={"https://x.com/AbstractCheckIn"} title="https://x.com/AbstractCheckIn" target="_blank">
          @AbstractCheckIn
        </Link>
        <Link href={"https://x.com/AbstractChain"} title="https://x.com/AbstractChain" target="_blank">
          @AbstractChain
        </Link>
        <Link href={"https://x.com/Abstract_Eco"} title="https://x.com/Abstract_Eco" target="_blank">
          @Abstract_Eco
        </Link>
      </div>
      <p>Pasteleft ® 2025 Abstract CheckIn </p>
    </div>
  )
}
