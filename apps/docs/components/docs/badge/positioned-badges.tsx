'use client'

import { Badge } from "@faiz-ui/react"

export default function PositionedBadges() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="relative">
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-lg">
          📧
        </div>
        <Badge position="top-right" color="error" size="xs">3</Badge>
      </div>
      
      <div className="relative">
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-lg">
          🔔
        </div>
        <Badge position="top-left" color="warning" size="xs">!</Badge>
      </div>
      
      <div className="relative">
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-lg">
          👤
        </div>
        <Badge position="bottom-right" isDot color="success" />
      </div>
      
      <div className="relative">
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-lg">
          💬
        </div>
        <Badge position="bottom-left" color="info" size="xs">99+</Badge>
      </div>
      
      <div className="relative">
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-lg">
          🛒
        </div>
        <Badge position="top-right" color="primary" size="sm">12</Badge>
      </div>
    </div>
  )
}
