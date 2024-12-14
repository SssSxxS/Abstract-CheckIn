"use client"

import { ConnectKitButton } from "connectkit"

export default function Wallet({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ConnectKitButton />
    </div>
  )
}
