'use client'

import { Avatar } from "@faiz-ui/react"

export default function AvatarUsage() {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar name="John Doe" />
      <Avatar name="Jane Smith" color="secondary" />
      <Avatar initials="AB" color="success" />
    </div>
  )
}
