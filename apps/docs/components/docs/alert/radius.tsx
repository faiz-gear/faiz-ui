'use client'

import { Alert } from "@faiz-ui/react"

export default function Radius() {
  return (
    <div className="flex flex-col gap-4">
      <Alert radius="none" color="primary">
        No radius alert
      </Alert>
      <Alert radius="sm" color="secondary">
        Small radius alert
      </Alert>
      <Alert radius="md" color="success">
        Medium radius alert
      </Alert>
      <Alert radius="lg" color="warning">
        Large radius alert
      </Alert>
      <Alert radius="xl" color="danger">
        Extra large radius alert
      </Alert>
      <Alert radius="full" color="info">
        Full radius alert
      </Alert>
    </div>
  )
} 