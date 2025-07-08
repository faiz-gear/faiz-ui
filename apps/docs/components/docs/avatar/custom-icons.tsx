'use client'

import { Avatar } from "@faiz-ui/react"

export default function CustomIcons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar 
        icon={
          <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" />
          </svg>
        }
        color="info"
      />
      <Avatar 
        icon={<span className="text-lg">🎨</span>}
        color="secondary"
      />
      <Avatar 
        icon={<span className="text-lg">⚙️</span>}
        color="warning"
        showStatus
        status="online"
      />
    </div>
  )
}
