import type { Metadata } from "next"
import { inter } from "@/shared/fonts"
import "@/css/global.scss"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

export const metadata: Metadata = {
  title: "CheckIn",
  description: "fun abstract onchain app",
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <body className={`${inter.variable} ${inter.className}`}>
      <div className={"body"}>
        <Header />
        {children}
        <Footer />
      </div>
    </body>
  )
}
