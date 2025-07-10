'use client'

import { Badge } from "@faiz-ui/react"

export default function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Badge size="xs">XS</Badge>
      <Badge size="sm">SM</Badge>
      <Badge size="md">MD</Badge>
      <Badge size="lg">LG</Badge>
      <Badge size="xl">XL</Badge>
    </div>
  )
}
