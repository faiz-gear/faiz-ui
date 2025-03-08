'use client'

import { Button } from "@faiz-ui/react"

export default function Variants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="light">Light</Button>
      <Button variant="flat">Flat</Button>
      <Button variant="sketchy">Sketchy</Button>
    </div>
  )
} 