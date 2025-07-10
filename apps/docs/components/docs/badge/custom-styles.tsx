'use client'

import { Badge } from "@faiz-ui/react"

export default function CustomStyles() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge customStyles="bg-gradient-to-r from-purple-400/60 to-pink-400/60">
        Gradient
      </Badge>
      <Badge customStyles="border-[3px] border-dashed">
        Dashed
      </Badge>
      <Badge customStyles="[transform:rotate(-2deg)] hover:[transform:rotate(0deg)] transition-transform">
        Tilted
      </Badge>
      <Badge customStyles="shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
        Heavy Shadow
      </Badge>
      <Badge customStyles="animate-pulse">
        Pulsing
      </Badge>
      <Badge customStyles="bg-gradient-to-r from-yellow-400/60 to-orange-400/60 [transform:rotate(1deg)]">
        Sunny
      </Badge>
    </div>
  )
}
