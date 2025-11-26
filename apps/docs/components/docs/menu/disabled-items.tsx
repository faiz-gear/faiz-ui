'use client'

import { Menu, MenuItem } from '@faiz-ui/react'

export default function DisabledItems() {
  return (
    <Menu>
      <MenuItem>Active Item</MenuItem>
      <MenuItem isDisabled>Disabled Item</MenuItem>
      <MenuItem>Active Item</MenuItem>
      <MenuItem isDisabled>Disabled Item</MenuItem>
    </Menu>
  )
}
