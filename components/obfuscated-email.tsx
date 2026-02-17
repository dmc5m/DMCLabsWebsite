"use client"

import type { ReactNode } from "react"

interface ObfuscatedEmailProps {
  user: string
  domain: string
  className?: string
  icon?: ReactNode
}

export function ObfuscatedEmail({ user, domain, className, icon }: ObfuscatedEmailProps) {
  function handleClick() {
    window.location.href = `mailto:${user}@${domain}`
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {icon}
      <span>
        {user}
        <span style={{ display: "none" }}>nope</span>
        <span>&#64;</span>
        {domain}
      </span>
    </button>
  )
}
