'use client'

import { Avatar } from "@faiz-ui/react"

export default function CustomStyles() {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar 
        name="Gradient" 
        customStyles="bg-gradient-to-r from-purple-400/60 to-pink-400/60"
      />
      <Avatar 
        name="Dashed" 
        customStyles="border-[3px] border-dashed"
      />
      <Avatar 
        name="Rotated" 
        customStyles="[transform:rotate(-5deg)]"
        showStatus
        status="online"
      />
      <Avatar 
        name="Shadow" 
        customStyles="shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
      />
    </div>
  )
}
