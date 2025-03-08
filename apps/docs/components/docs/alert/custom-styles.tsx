'use client'

import { Alert } from "@faiz-ui/react"

export default function CustomStyles() {
  return (
    <div className="flex flex-col gap-4">
      <Alert customStyles="bg-gradient-to-r from-purple-400/60 to-pink-400/60">
        Alert with gradient background
      </Alert>
      <Alert customStyles="border-[3px] border-dashed">
        Alert with dashed border
      </Alert>
      <Alert customStyles="[transform:rotate(-1deg)] hover:[transform:rotate(0deg)]">
        Alert with rotation effect (hover to see)
      </Alert>
      <Alert customStyles="shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
        Alert with heavy shadow
      </Alert>
    </div>
  )
} 