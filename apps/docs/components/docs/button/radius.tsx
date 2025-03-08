 'use client'

import { Button } from "@faiz-ui/react"

export default function Radius() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button radius="none">No Radius</Button>
      <Button radius="sm">Small Radius</Button>
      <Button radius="md">Medium Radius</Button>
      <Button radius="lg">Large Radius</Button>
      <Button radius="xl">Extra Large Radius</Button>
      <Button radius="full">Full Radius</Button>
    </div>
  )
}