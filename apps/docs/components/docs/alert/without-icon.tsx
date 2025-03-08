'use client'

import { Alert } from "@faiz-ui/react"

export default function WithoutIcon() {
  return (
    <div className="flex flex-col gap-4">
      <Alert hideIcon color="primary">
        Alert without icon (primary)
      </Alert>
      <Alert hideIcon color="success">
        Alert without icon (success)
      </Alert>
      <Alert hideIcon color="warning">
        Alert without icon (warning)
      </Alert>
      <Alert hideIcon color="danger">
        Alert without icon (danger)
      </Alert>
    </div>
  )
}