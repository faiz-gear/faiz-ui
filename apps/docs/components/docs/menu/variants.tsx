'use client'

import { Menu, MenuItem } from '@faiz-ui/react'

export default function Variants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Menu variant="solid">
        <MenuItem>Solid</MenuItem>
        <MenuItem>Variant</MenuItem>
      </Menu>
      <Menu variant="bordered">
        <MenuItem>Bordered</MenuItem>
        <MenuItem>Variant</MenuItem>
      </Menu>
      <Menu variant="light">
        <MenuItem>Light</MenuItem>
        <MenuItem>Variant</MenuItem>
      </Menu>
      <Menu variant="flat">
        <MenuItem>Flat</MenuItem>
        <MenuItem>Variant</MenuItem>
      </Menu>
    </div>
  )
}
