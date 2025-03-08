 'use client'

import { Button } from "@faiz-ui/react"

export default function Disabled() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button isDisabled>Disabled</Button>
      <Button isDisabled color="secondary">Disabled Secondary</Button>
    </div>
  )
}