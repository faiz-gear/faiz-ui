'use client'

import { Badge } from "@faiz-ui/react"

export default function BadgeUsage() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge>Default Badge</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
    </div>
  )
}
