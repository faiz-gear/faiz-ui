'use client'

import { Avatar } from "@faiz-ui/react"

export default function Colors() {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar name="Primary" color="primary" />
      <Avatar name="Secondary" color="secondary" />
      <Avatar name="Success" color="success" />
      <Avatar name="Warning" color="warning" />
      <Avatar name="Danger" color="danger" />
      <Avatar name="Info" color="info" />
    </div>
  )
}
