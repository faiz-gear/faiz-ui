'use client'

import { Badge } from "@faiz-ui/react"

export default function WithIcons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge 
        icon={<span>★</span>} 
        color="warning"
      >
        Starred
      </Badge>
      <Badge 
        icon={<span>✓</span>} 
        color="success"
        iconPlacement="after"
      >
        Verified
      </Badge>
      <Badge 
        icon={<span>🔥</span>} 
        color="error"
      >
        Hot
      </Badge>
      <Badge 
        icon={<span>💎</span>} 
        color="info"
      >
        Premium
      </Badge>
    </div>
  )
}
