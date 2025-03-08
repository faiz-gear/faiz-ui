'use client'

import { Alert } from "@faiz-ui/react"

export default function CustomIcon() {
  return (
    <div className="flex flex-col gap-4">
      <Alert
        color="primary"
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        Alert with custom icon
      </Alert>
      <Alert
        color="success"
        icon={
          <div className="w-6 h-6 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
            <span className="text-green-800 dark:text-green-200">✓</span>
          </div>
        }
      >
        Alert with custom styled icon
      </Alert>
    </div>
  )
} 