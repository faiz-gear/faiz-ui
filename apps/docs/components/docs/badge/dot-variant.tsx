'use client'

import { Badge } from "@faiz-ui/react"

export default function DotVariant() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-2">
        <Badge isDot color="success" aria-label="Online" />
        <span>Online</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge isDot color="warning" aria-label="Away" />
        <span>Away</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge isDot color="error" aria-label="Offline" />
        <span>Offline</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge isDot color="info" aria-label="Busy" />
        <span>Busy</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge isDot color="default" aria-label="Unknown" />
        <span>Unknown</span>
      </div>
    </div>
  )
}
