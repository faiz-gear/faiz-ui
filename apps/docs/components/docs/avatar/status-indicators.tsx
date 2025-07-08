'use client'

import { Avatar } from "@faiz-ui/react"

export default function StatusIndicators() {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar name="Online" showStatus status="online" />
      <Avatar name="Away" showStatus status="away" />
      <Avatar name="Busy" showStatus status="busy" />
      <Avatar name="Offline" showStatus status="offline" />
    </div>
  )
}
