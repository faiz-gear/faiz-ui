'use client'

import { Button } from "@faiz-ui/react"

export default function Colors() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
      <Button color="info">Info</Button>
    </div>
  )
}