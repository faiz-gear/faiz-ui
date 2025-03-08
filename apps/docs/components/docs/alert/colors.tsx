'use client'

import { Alert } from "@faiz-ui/react"

export default function Colors() {
  return (
    <div className="flex flex-col gap-4">
      <Alert color="primary">This is a primary alert</Alert>
      <Alert color="secondary">This is a secondary alert</Alert>
      <Alert color="success">This is a success alert</Alert>
      <Alert color="warning">This is a warning alert</Alert>
      <Alert color="danger">This is a danger alert</Alert>
      <Alert color="info">This is an info alert</Alert>
    </div>
  )
} 