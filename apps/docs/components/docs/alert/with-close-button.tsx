'use client'

import { Alert } from "@faiz-ui/react"
import { useState } from "react"

export default function WithCloseButton() {
  const [visible, setVisible] = useState(true)
  const [visible2, setVisible2] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      {visible && (
        <Alert color="primary" onClose={() => {
          setVisible(false)
          console.log('close')
        }}>
          Alert with close button (click X to dismiss)
        </Alert>
      )}

      {visible2 && (
        <Alert
          color="warning"
          onClose={() => setVisible2(false)}
          action={<button className="px-2 py-1 text-sm bg-amber-100 dark:bg-amber-900 rounded-md">Action</button>}
        >
          Alert with close button and action button
        </Alert>
      )}

      {(!visible || !visible2) && (
        <button 
          className="self-start px-3 py-1.5 bg-blue-100 dark:bg-blue-900 rounded-md"
          onClick={() => {
            setVisible(true)
            setVisible2(true)
          }}
        >
          Reset Alerts
        </button>
      )}
    </div>
  )
} 