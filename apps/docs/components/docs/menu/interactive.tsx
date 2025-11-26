'use client'

import { useState } from 'react'
import { Menu, MenuItem, MenuSection, MenuDivider } from '@faiz-ui/react'

export default function Interactive() {
  const [selected, setSelected] = useState<string>('home')
  const [message, setMessage] = useState('Select an item from the menu')

  const handleSelect = (key: string) => {
    setSelected(key)
    setMessage(`You selected: ${key}`)
  }

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">{message}</p>
      <Menu selectedKey={selected} onSelect={handleSelect} color="primary">
        <MenuSection title="Main">
          <MenuItem itemKey="home">Home</MenuItem>
          <MenuItem itemKey="dashboard">Dashboard</MenuItem>
        </MenuSection>
        <MenuDivider />
        <MenuSection title="Account">
          <MenuItem itemKey="profile">Profile</MenuItem>
          <MenuItem itemKey="settings">Settings</MenuItem>
        </MenuSection>
      </Menu>
    </div>
  )
}
