'use client'

import { Avatar } from "@faiz-ui/react"

export default function StatusWithSizes() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar name="XS" size="xs" showStatus status="online" />
      <Avatar name="SM" size="sm" showStatus status="away" />
      <Avatar name="MD" size="md" showStatus status="busy" />
      <Avatar name="LG" size="lg" showStatus status="offline" />
      <Avatar name="XL" size="xl" showStatus status="online" />
    </div>
  )
}
