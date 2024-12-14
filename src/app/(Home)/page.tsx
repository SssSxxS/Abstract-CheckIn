import Image from "next/image"
import styles from "./Home.module.scss"
import Main from "@/components/Main/Main"

export default function Home() {
  return (
    <>
      <Image src={"/grid.svg"} alt="" fill className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.ad_wrapper}>
          <video width="320" height="240" controls preload="auto" muted autoPlay loop>
            <source src="/Fe1HCHxy95BmW683.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Main />
      </div>
    </>
  )
}
