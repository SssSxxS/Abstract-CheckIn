import Link from "next/link"
import styles from "./Header.module.scss"
import Wallet from "./Wallet"
import UsefulButton from "./UsefulButton"

export default function Header() {
  return (
    <nav className={styles.container}>
      <Link href={"/"} className={styles.item}>
        Logo
      </Link>
      <div className={styles.menu}>
        <UsefulButton className={styles.item} />
        <Link href={"/"} className={styles.item}>
          Leaderboard
        </Link>
      </div>
      <Wallet className={styles.item} />
    </nav>
  )
}
