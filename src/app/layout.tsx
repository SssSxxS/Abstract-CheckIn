import AbstractWalletProvider from "@/components/Providers/AbstractWalletProvider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <AbstractWalletProvider>{children}</AbstractWalletProvider>
    </html>
  )
}
