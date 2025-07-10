'use client'

import { Badge } from "@faiz-ui/react"

export default function SketchyVariant() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge variant="sketchy" color="primary">Primary</Badge>
      <Badge variant="sketchy" color="secondary">Secondary</Badge>
      <Badge variant="sketchy" color="success">Success</Badge>
      <Badge variant="sketchy" color="warning">Warning</Badge>
      <Badge variant="sketchy" color="error">Error</Badge>
      <Badge variant="sketchy" color="info">Info</Badge>
      <Badge variant="sketchy" color="default">Default</Badge>
    </div>
  )
}
