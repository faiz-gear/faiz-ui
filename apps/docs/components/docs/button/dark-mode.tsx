'use client'

import { Button } from "@faiz-ui/react"

export default function DarkMode() {
  return (
    <div className="dark bg-gray-900 p-6 rounded-lg">
      <div className="flex flex-wrap gap-4 mb-4">
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
      </div>
      <div className="flex flex-wrap gap-4 mb-4">
        <Button variant="outline" color="primary">
          Outline
        </Button>
        <Button variant="ghost" color="secondary">
          Ghost
        </Button>
        <Button variant="light" color="success">
          Light
        </Button>
        <Button variant="flat" color="warning">
          Flat
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button isLoading color="danger">
          Loading
        </Button>
        <Button isIconOnly color="info">
          ℹ️
        </Button>
        <Button isDisabled>Disabled</Button>
      </div>
    </div>
  )
} 