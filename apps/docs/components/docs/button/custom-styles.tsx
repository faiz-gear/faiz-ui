'use client'

import { Button } from "@faiz-ui/react"

export default function CustomStyles() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button customStyles="bg-gradient-to-r from-purple-400/60 to-pink-400/60 hover:from-purple-500/60 hover:to-pink-500/60">
        Gradient Background
      </Button>
      <Button customStyles="border-[3px] border-dashed">
        Dashed Border
      </Button>
      <Button customStyles="[transform:rotate(-3deg)_translateY(-2px)] hover:[transform:rotate(0deg)_translateY(0)]">
        Hover Animation
      </Button>
      <Button customStyles="shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-none">
        Heavy Shadow
      </Button>
    </div>
  )
} 