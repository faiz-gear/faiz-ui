'use client'

import { Avatar } from "@faiz-ui/react"

export default function StatusWithImages() {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar 
        name="Online User" 
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        showStatus 
        status="online" 
      />
      <Avatar 
        name="Away User" 
        src="https://images.unsplash.com/photo-1494790108755-2616b9e0e4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        showStatus 
        status="away" 
      />
      <Avatar 
        name="Busy User" 
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        showStatus 
        status="busy" 
      />
    </div>
  )
}
