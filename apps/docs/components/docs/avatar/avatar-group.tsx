'use client'

import { Avatar } from "@faiz-ui/react"

export default function AvatarGroup() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex -space-x-2">
        <Avatar name="John Doe" size="md" />
        <Avatar name="Jane Smith" size="md" color="secondary" />
        <Avatar name="Bob Johnson" size="md" color="success" />
        <Avatar name="Alice Brown" size="md" color="warning" />
        <Avatar initials="+5" size="md" color="info" />
      </div>
      
      <div className="flex -space-x-1.5">
        <Avatar name="Small Group" size="sm" showStatus status="online" />
        <Avatar name="User 2" size="sm" showStatus status="away" color="secondary" />
        <Avatar name="User 3" size="sm" showStatus status="busy" color="danger" />
      </div>
      
      <div className="flex -space-x-3">
        <Avatar 
          name="Large User" 
          size="lg" 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <Avatar 
          name="Another User" 
          size="lg" 
          src="https://images.unsplash.com/photo-1494790108755-2616b9e0e4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          color="secondary"
        />
        <Avatar name="Third User" size="lg" color="success" />
      </div>
    </div>
  )
}
