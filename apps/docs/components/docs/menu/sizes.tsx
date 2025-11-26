'use client'

import { Menu, MenuItem } from '@faiz-ui/react'

export default function Sizes() {
  return (
    <div className="flex flex-wrap gap-4 items-start">
      <Menu size="sm">
        <MenuItem>Small</MenuItem>
        <MenuItem>Menu</MenuItem>
      </Menu>
      <Menu size="md">
        <MenuItem>Medium</MenuItem>
        <MenuItem>Menu</MenuItem>
      </Menu>
      <Menu size="lg">
        <MenuItem>Large</MenuItem>
        <MenuItem>Menu</MenuItem>
      </Menu>
    </div>
  )
}
