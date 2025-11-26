'use client'

import { Menu, MenuItem } from '@faiz-ui/react'

export default function Colors() {
  return (
    <div className="flex flex-wrap gap-4">
      <Menu color="default">
        <MenuItem>Default</MenuItem>
        <MenuItem>Menu</MenuItem>
      </Menu>
      <Menu color="primary">
        <MenuItem>Primary</MenuItem>
        <MenuItem>Menu</MenuItem>
      </Menu>
      <Menu color="secondary">
        <MenuItem>Secondary</MenuItem>
        <MenuItem>Menu</MenuItem>
      </Menu>
      <Menu color="success">
        <MenuItem>Success</MenuItem>
        <MenuItem>Menu</MenuItem>
      </Menu>
      <Menu color="warning">
        <MenuItem>Warning</MenuItem>
        <MenuItem>Menu</MenuItem>
      </Menu>
      <Menu color="danger">
        <MenuItem>Danger</MenuItem>
        <MenuItem>Menu</MenuItem>
      </Menu>
    </div>
  )
}
