'use client'

import { Badge } from "@faiz-ui/react"

export default function Shapes() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge shape="square">Square</Badge>
      <Badge shape="rounded">Rounded</Badge>
      <Badge shape="pill">Pill</Badge>
      <Badge shape="full">Full</Badge>
    </div>
  )
}
