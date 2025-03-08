'use client'

import { Alert } from "@faiz-ui/react"

export default function SketchyVariant() {
  return (
    <div className="flex flex-col gap-4">
      <Alert variant="sketchy" color="primary">
        Primary sketchy alert
      </Alert>
      <Alert variant="sketchy" color="secondary">
        Secondary sketchy alert with irregular border
      </Alert>
      <Alert variant="sketchy" color="success">
        Success sketchy alert with hand-drawn effect
      </Alert>
      <Alert variant="sketchy" color="warning">
        Warning sketchy alert with semi-realistic style
      </Alert>
      <Alert variant="sketchy" color="danger">
        Danger sketchy alert with dotted line frame
      </Alert>
    </div>
  )
} 