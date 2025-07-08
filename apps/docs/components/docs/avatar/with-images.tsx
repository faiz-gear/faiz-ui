'use client'

import { Avatar } from "@faiz-ui/react"

export default function WithImages() {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar 
        name="John Doe" 
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="John Doe"
      />
      <Avatar 
        name="Jane Smith" 
        src="https://images.unsplash.com/photo-1494790108755-2616b9e0e4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Jane Smith"
        color="secondary"
      />
      <Avatar 
        name="Fallback Example" 
        src="invalid-url.jpg"
        color="success"
      />
    </div>
  )
}
