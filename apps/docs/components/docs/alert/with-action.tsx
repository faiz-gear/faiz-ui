'use client'

import { Alert } from "@faiz-ui/react"

export default function WithAction() {
  return (
    <div className="flex flex-col gap-4">
      <Alert
        color="primary"
        action={<button className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 rounded-md">Action</button>}
      >
        Alert with action button
      </Alert>
      <Alert
        color="warning"
        action={
          <div className="flex gap-2">
            <button className="px-2 py-1 text-sm bg-amber-100 dark:bg-amber-900 rounded-md">Confirm</button>
            <button className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-md">Cancel</button>
          </div>
        }
      >
        Alert with multiple action buttons
      </Alert>
    </div>
  )
} 