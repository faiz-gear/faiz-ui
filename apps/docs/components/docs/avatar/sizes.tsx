'use client'

import { Avatar } from "@faiz-ui/react"

export default function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar name="XS" size="xs" />
      <Avatar name="SM" size="sm" />
      <Avatar name="MD" size="md" />
      <Avatar name="LG" size="lg" />
      <Avatar name="XL" size="xl" />
    </div>
  )
}
