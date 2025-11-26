'use client'

import { Menu, MenuItem, MenuSection, MenuDivider } from '@faiz-ui/react'

export default function WithSections() {
  return (
    <Menu>
      <MenuSection title="Account">
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
      </MenuSection>
      <MenuDivider />
      <MenuSection title="Navigation">
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Analytics</MenuItem>
      </MenuSection>
      <MenuDivider />
      <MenuItem>Logout</MenuItem>
    </Menu>
  )
}
