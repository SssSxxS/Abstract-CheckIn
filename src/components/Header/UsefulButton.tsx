"use client"

import { useState } from "react"

export default function UsefulButton({ className }: { className?: string }) {
  const [count, setCount] = useState(0)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const [fontSize, setFontSize] = useState(15)
  const [fade, setFade] = useState(false)

  let t: NodeJS.Timeout
  const handleClick = () => {
    clearTimeout(t)
    setCount(count + 1)
    setPosition({ top: Math.random() * 40 - 10, left: Math.random() * 300 - 200 })
    setFontSize(Math.random() * 300 + 15)
    setFade(true)
    t = setTimeout(() => {
      setFade(false)
    }, 2000)
  }

  return (
    <button onClick={handleClick} className={className} style={{ position: "relative" }}>
      UsefulButton
      <span
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          fontSize: fontSize,
          transition: "2s",
          opacity: fade ? "100%" : "0%",
        }}
      >
        {count <= 1000 ? count : "you won the secret code: 0CtZPeNgguiN1h^-^"}
      </span>
    </button>
  )
}
