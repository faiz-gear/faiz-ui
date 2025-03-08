'use client'

import { Alert } from "@faiz-ui/react"

export default function Variants() {
  return (
    <div className="flex flex-col gap-4">
      <Alert variant="solid" color="primary">
        Solid style alert
      </Alert>
      <Alert variant="outline" color="secondary">
        Outline style alert
      </Alert>
      <Alert variant="ghost" color="success">
        Ghost style alert
      </Alert>
      <Alert variant="light" color="warning">
        Light style alert
      </Alert>
      <Alert variant="flat" color="danger">
        Flat style alert
      </Alert>
      <Alert variant="sketchy" color="info">
        Sketchy style alert
      </Alert>
    </div>
  )
} 