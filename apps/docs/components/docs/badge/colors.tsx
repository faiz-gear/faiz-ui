'use client'

import { Badge } from "@faiz-ui/react"

export default function Colors() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge color="default">Default</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
      <Badge color="info">Info</Badge>
    </div>
  )
}
