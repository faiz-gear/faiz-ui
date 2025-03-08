'use client'

import { Button } from "@faiz-ui/react"

export default function Loading() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button isLoading>Loading</Button>
      <Button isLoading color="secondary" loadingText="Loading...">Loading</Button>
      <Button isLoading color="success" variant="outline">Loading</Button>
      <Button isLoading color="danger" variant="ghost">Loading</Button>
    </div>
  )
} 