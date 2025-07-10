'use client'

import { Badge } from "@faiz-ui/react"

export default function Variants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="light">Light</Badge>
      <Badge variant="flat">Flat</Badge>
      <Badge variant="sketchy">Sketchy</Badge>
    </div>
  )
}
