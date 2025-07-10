'use client'

import { Badge } from "@faiz-ui/react"

export default function NumericBadges() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge color="primary">5</Badge>
      <Badge color="error" max={99}>150</Badge>
      <Badge color="success" showZero>0</Badge>
      <Badge color="warning">1</Badge>
      <Badge color="info" max={9}>25</Badge>
      <Badge color="secondary">999</Badge>
    </div>
  )
}
