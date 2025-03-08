'use client'

import { Button } from "@faiz-ui/react"

export default function IconOnly() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button isIconOnly>+</Button>
      <Button isIconOnly color="secondary">-</Button>
      <Button isIconOnly color="success">✓</Button>
      <Button isIconOnly color="danger">✕</Button>
      <Button isIconOnly color="warning">⚠️</Button>
      <Button isIconOnly color="info">ℹ️</Button>
    </div>
  )
} 