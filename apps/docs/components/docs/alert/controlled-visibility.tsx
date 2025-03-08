'use client'

import { Alert } from "@faiz-ui/react"
import { useState } from "react"

export default function ControlledVisibility() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4">
        <button
          className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 rounded-md"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? 'Hide Alert' : 'Show Alert'}
        </button>
      </div>

      <Alert color="primary" isVisible={isVisible} onClose={() => setIsVisible(false)}>
        Alert with controlled visibility. Use the button above to toggle visibility.
      </Alert>
    </div>
  )
} 