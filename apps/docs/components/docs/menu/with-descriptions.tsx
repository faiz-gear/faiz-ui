'use client'

import { Menu, MenuItem } from '@faiz-ui/react'

export default function WithDescriptions() {
  return (
    <Menu>
      <MenuItem description="View and edit your profile">Profile</MenuItem>
      <MenuItem description="Manage your account settings">Settings</MenuItem>
      <MenuItem description="Access your dashboard">Dashboard</MenuItem>
    </Menu>
  )
}
