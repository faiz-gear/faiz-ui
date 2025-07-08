'use client'

import { Avatar } from "@faiz-ui/react"

export default function FallbackHandling() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-4">
        <Avatar name="John Doe" />
        <Avatar initials="AB" />
        <Avatar />
        <Avatar 
          fallback={<span className="text-lg">👤</span>}
        />
      </div>
      
      <div className="flex flex-wrap gap-4">
        <Avatar 
          name="Broken Image" 
          src="invalid-url.jpg"
          onError={() => console.log('Image failed to load')}
        />
        <Avatar 
          name="Custom Fallback" 
          src="another-invalid-url.jpg"
          fallback={<span className="text-lg">🖼️</span>}
        />
      </div>
    </div>
  )
}
