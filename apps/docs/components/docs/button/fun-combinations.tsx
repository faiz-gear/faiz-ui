 'use client'

import { Button } from "@faiz-ui/react"

export default function FunCombinations() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-4">
        <Button color="primary" variant="ghost" startIcon={<span>📌</span>}>
          Important Note
        </Button>
        <Button color="success" variant="flat" startIcon={<span>✓</span>}>
          Completed
        </Button>
        <Button color="warning" variant="outline" startIcon={<span>⚠️</span>}>
          Notice
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button color="secondary" size="lg" customStyles="[transform:rotate(-2deg)]">
          Twisted Angle
        </Button>
        <Button color="info" size="lg" customStyles="[transform:rotate(1deg)]">
          Slightly Tilted
        </Button>
        <Button color="danger" size="lg" customStyles="[transform:skew(-5deg)]">
          Skewed Transform
        </Button>
      </div>
    </div>
  )
}