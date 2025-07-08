'use client'

import { Avatar } from "@faiz-ui/react"

export default function DarkMode() {
  return (
    <div className="dark bg-gray-900 p-6 rounded-lg">
      <div className="flex flex-wrap gap-4 mb-4">
        <Avatar name="Default" />
        <Avatar name="Primary" color="primary" />
        <Avatar name="Secondary" color="secondary" />
        <Avatar name="Success" color="success" />
      </div>
      
      <div className="flex flex-wrap gap-4 mb-4">
        <Avatar name="Online" showStatus status="online" />
        <Avatar name="Away" showStatus status="away" color="warning" />
        <Avatar name="Busy" showStatus status="busy" color="danger" />
        <Avatar name="Offline" showStatus status="offline" />
      </div>
      
      <div className="flex flex-wrap gap-4">
        <Avatar 
          name="Image" 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          showStatus
          status="online"
        />
        <Avatar name="No Border" isBordered={false} showStatus status="away" />
        <Avatar name="Disabled" isDisabled />
      </div>
    </div>
  )
}
