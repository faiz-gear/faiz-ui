'use client'

import { Avatar } from "@faiz-ui/react"

export default function StatusWithVariants() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-4">
        <Avatar name="Primary" color="primary" showStatus status="online" />
        <Avatar name="Secondary" color="secondary" showStatus status="away" />
        <Avatar name="Success" color="success" showStatus status="online" />
        <Avatar name="Warning" color="warning" showStatus status="busy" />
        <Avatar name="Danger" color="danger" showStatus status="offline" />
        <Avatar name="Info" color="info" showStatus status="online" />
      </div>
      
      <div className="flex flex-wrap gap-4">
        <Avatar name="No Border" isBordered={false} showStatus status="online" />
        <Avatar name="No Border" isBordered={false} showStatus status="away" color="secondary" />
        <Avatar name="No Border" isBordered={false} showStatus status="busy" color="warning" />
        <Avatar name="No Border" isBordered={false} showStatus status="offline" color="danger" />
      </div>
    </div>
  )
}
