'use client'

import { Avatar } from "@faiz-ui/react"
import { useState } from "react"

export default function ClickableAvatars() {
  const [clickCount, setClickCount] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Avatar 
          name="Click Me" 
          isClickable 
          onClick={() => setClickCount(prev => prev + 1)}
        />
        <Avatar 
          name="Profile" 
          isClickable 
          onClick={() => alert('Profile clicked!')}
          showStatus
          status="online"
        />
        <Avatar 
          name="Disabled" 
          isClickable 
          isDisabled
          onClick={() => alert('This should not fire')}
        />
      </div>
      
      {clickCount > 0 && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          First avatar clicked {clickCount} times
        </p>
      )}
    </div>
  )
}
