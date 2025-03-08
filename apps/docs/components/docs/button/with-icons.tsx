'use client'

import { Button } from "@faiz-ui/react"

export default function WithIcons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button startIcon={<span>✏️</span>}>Start Icon</Button>
      <Button endIcon={<span>📝</span>}>End Icon</Button>
      <Button startIcon={<span>🖌️</span>} endIcon={<span>🎨</span>}>
        Both Icons
      </Button>
    </div>
  )
} 