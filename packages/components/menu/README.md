# @faiz-ui/menu

A hand-drawn style menu component for displaying navigation items and actions, with full feature parity to DaisyUI's menu component.

> This is an internal utility, not intended for public usage.

## Installation

```sh
pnpm add @faiz-ui/menu
# or
npm i @faiz-ui/menu
```

## Features

- ✨ **Multiple Variants**: solid, bordered, light, and flat styles
- 🎨 **Color Options**: default, primary, secondary, success, warning, danger
- 📏 **Size Options**: xs, sm, md, lg
- 🔄 **Orientation Support**: vertical and horizontal layouts
- 📦 **Compact Mode**: space-efficient layout option
- 🏷️ **Menu Title**: optional title for the menu
- 📁 **Menu Sections**: group related items with section titles
- 🔗 **Submenu Support**: nested menus with expand/collapse functionality
- 📋 **Menu Items**: with icons, descriptions, and interactive states
- 🚫 **Disabled State**: disable individual menu items
- ✅ **Selection State**: highlight selected items
- ➖ **Menu Dividers**: visual separators between items

## Components

- `Menu`: Main container for menu items
- `MenuItem`: Individual menu item with optional icons and description
- `MenuSection`: Group of related menu items with optional title
- `MenuDivider`: Visual separator between menu items or sections
- `MenuSubmenu`: Collapsible submenu with nested items

## Usage

### Basic Menu

```tsx
import { Menu, MenuItem } from '@faiz-ui/menu'

function App() {
  return (
    <Menu>
      <MenuItem>Profile</MenuItem>
      <MenuItem>Settings</MenuItem>
      <MenuItem>Dashboard</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  )
}
```

### Menu with Icons

```tsx
import { Menu, MenuItem, MenuDivider } from '@faiz-ui/menu'

function App() {
  return (
    <Menu>
      <MenuItem startIcon={<ProfileIcon />}>Profile</MenuItem>
      <MenuItem startIcon={<SettingsIcon />}>Settings</MenuItem>
      <MenuDivider />
      <MenuItem startIcon={<LogoutIcon />}>Logout</MenuItem>
    </Menu>
  )
}
```

### Menu with Sections

```tsx
import { Menu, MenuItem, MenuSection, MenuDivider } from '@faiz-ui/menu'

function App() {
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
    </Menu>
  )
}
```

### Menu with Submenu

```tsx
import { Menu, MenuItem, MenuSubmenu } from '@faiz-ui/menu'

function App() {
  return (
    <Menu>
      <MenuItem>Home</MenuItem>
      <MenuSubmenu label="Account" defaultOpen>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuSubmenu>
      <MenuItem>Logout</MenuItem>
    </Menu>
  )
}
```

### Horizontal Menu

```tsx
import { Menu, MenuItem } from '@faiz-ui/menu'

function App() {
  return (
    <Menu orientation="horizontal">
      <MenuItem>Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Services</MenuItem>
      <MenuItem>Contact</MenuItem>
    </Menu>
  )
}
```

### Menu with Title

```tsx
import { Menu, MenuItem } from '@faiz-ui/menu'

function App() {
  return (
    <Menu title="Main Menu">
      <MenuItem>Profile</MenuItem>
      <MenuItem>Settings</MenuItem>
      <MenuItem>Dashboard</MenuItem>
    </Menu>
  )
}
```

### Selected State

```tsx
import { Menu, MenuItem } from '@faiz-ui/menu'
import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState('profile')

  return (
    <Menu selectedKey={selected} onSelect={setSelected}>
      <MenuItem itemKey="profile">Profile</MenuItem>
      <MenuItem itemKey="settings">Settings</MenuItem>
      <MenuItem itemKey="dashboard">Dashboard</MenuItem>
    </Menu>
  )
}
```

### Compact Mode

```tsx
import { Menu, MenuItem } from '@faiz-ui/menu'

function App() {
  return (
    <Menu isCompact>
      <MenuItem>Profile</MenuItem>
      <MenuItem>Settings</MenuItem>
      <MenuItem>Dashboard</MenuItem>
    </Menu>
  )
}
```

## API Reference

### Menu Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'bordered' \| 'light' \| 'flat'` | `'solid'` | Menu style variant |
| `color` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Menu color theme |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Menu size |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Menu orientation |
| `isCompact` | `boolean` | `false` | Enable compact mode |
| `title` | `string` | - | Optional menu title |
| `selectedKey` | `string` | - | Currently selected item key |
| `onSelect` | `(key: string) => void` | - | Callback when an item is selected |
| `closeOnSelect` | `boolean` | `false` | Close menu after selection |
| `customStyles` | `string` | - | Custom CSS classes |

### MenuItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `itemKey` | `string` | - | Unique key for selection |
| `isDisabled` | `boolean` | `false` | Disable the item |
| `isSelected` | `boolean` | - | Override selected state |
| `startIcon` | `ReactNode` | - | Icon before the content |
| `endIcon` | `ReactNode` | - | Icon after the content |
| `description` | `string` | - | Description text below the label |
| `onClick` | `(e: MouseEvent) => void` | - | Click handler |
| `customStyles` | `string` | - | Custom CSS classes |

### MenuSection Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Section title |
| `customStyles` | `string` | - | Custom CSS classes |

### MenuSubmenu Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | - | Submenu label (required) |
| `startIcon` | `ReactNode` | - | Icon before the label |
| `endIcon` | `ReactNode` | - | Custom expand/collapse icon |
| `defaultOpen` | `boolean` | `false` | Initial open state |
| `isDisabled` | `boolean` | `false` | Disable the submenu |
| `customStyles` | `string` | - | Custom CSS classes |

### MenuDivider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `customStyles` | `string` | - | Custom CSS classes |

## DaisyUI Feature Parity

This component implements all major features from DaisyUI's menu component:

- ✅ Basic menu with items
- ✅ Menu with icons
- ✅ Menu with titles
- ✅ Menu sections/groups
- ✅ Menu dividers
- ✅ Submenu support with collapse/expand
- ✅ Horizontal orientation
- ✅ Compact mode
- ✅ Disabled items
- ✅ Active/selected state
- ✅ Multiple color variants
- ✅ Multiple size options
- ✅ Item descriptions
- ✅ Nested submenus

## Styling

The component uses hand-drawn styling with:
- 2px solid borders
- Custom shadows for depth
- Slight rotation for handmade feel
- Smooth transitions for interactions
- Support for dark mode
