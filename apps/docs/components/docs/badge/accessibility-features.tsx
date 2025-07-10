'use client'

import { Badge } from "@faiz-ui/react"

export default function AccessibilityFeatures() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge aria-label="5 unread messages">5</Badge>
      <Badge isDot color="success" aria-label="User is online" />
      <Badge color="error" aria-label="Critical alert">!</Badge>
      <Badge color="info" aria-label="Information available">i</Badge>
      <Badge color="warning" aria-label="Warning notification">⚠</Badge>
      <Badge color="primary" aria-label="New feature available">NEW</Badge>
    </div>
  )
}
