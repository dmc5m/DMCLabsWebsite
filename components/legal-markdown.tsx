"use client"

import type { ReactNode } from "react"
import Markdown from "react-markdown"

function ObfuscatedEmailInline({ user, domain }: { user: string; domain: string }) {
  function handleClick() {
    window.location.href = `mailto:${user}@${domain}`
  }

  return (
    <button type="button" onClick={handleClick} className="underline hover:opacity-80 transition-opacity">
      {user}
      <span style={{ display: "none" }}>nope</span>
      <span>&#64;</span>
      {domain}
    </button>
  )
}

function obfuscateNode(children: ReactNode): ReactNode {
  if (typeof children === "string") {
    const pattern = /(\w+)\s*\(at\)\s*([\w.-]+)/g
    const parts: ReactNode[] = []
    let last = 0
    let match
    while ((match = pattern.exec(children)) !== null) {
      if (match.index > last) parts.push(children.slice(last, match.index))
      parts.push(<ObfuscatedEmailInline key={match.index} user={match[1]} domain={match[2]} />)
      last = match.index + match[0].length
    }
    if (parts.length === 0) return children
    if (last < children.length) parts.push(children.slice(last))
    return <>{parts}</>
  }
  if (Array.isArray(children)) {
    return children.map((child, i) =>
      typeof child === "string" ? <span key={i}>{obfuscateNode(child)}</span> : child
    )
  }
  return children
}

const components = {
  p: ({ children }: { children?: ReactNode }) => <p>{obfuscateNode(children)}</p>,
  li: ({ children }: { children?: ReactNode }) => <li>{obfuscateNode(children)}</li>,
}

export function LegalMarkdown({ content }: { content: string }) {
  return <Markdown components={components}>{content}</Markdown>
}
