'use client'

import { useState } from 'react'
import { Menu, MenuItem } from '@faiz-ui/react'

export default function SelectedState() {
  const [selected, setSelected] = useState('profile')

  return (
    <Menu selectedKey={selected} onSelect={setSelected}>
      <MenuItem itemKey="profile">Profile</MenuItem>
      <MenuItem itemKey="settings">Settings</MenuItem>
      <MenuItem itemKey="dashboard">Dashboard</MenuItem>
      <MenuItem itemKey="analytics">Analytics</MenuItem>
    </Menu>
  )
}
