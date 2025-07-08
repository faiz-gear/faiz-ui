# @faiz-ui/avatar

A versatile Avatar component for displaying user profile images, initials, or icons with a hand-drawn aesthetic.

## Installation

```sh
pnpm add @faiz-ui/avatar
# or
npm i @faiz-ui/avatar
```

## Usage

```tsx
import { Avatar } from '@faiz-ui/avatar'

// Basic usage with name (shows initials)
<Avatar name="John Doe" />

// With image
<Avatar 
  name="John Doe" 
  src="https://example.com/avatar.jpg" 
  alt="John Doe's avatar" 
/>

// With status indicator
<Avatar 
  name="John Doe" 
  showStatus 
  status="online" 
/>

// Custom initials
<Avatar initials="AB" color="secondary" />

// With custom icon
<Avatar 
  icon={<UserIcon />} 
  color="info" 
/>

// Clickable avatar
<Avatar 
  name="John Doe" 
  isClickable 
  onClick={() => console.log('Avatar clicked!')} 
/>
```

## API

### Avatar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | The name of the user. Used to generate initials when image is not available |
| `src` | `string` | - | The source URL of the avatar image |
| `alt` | `string` | - | The alt text for the avatar image |
| `initials` | `string` | - | Custom initials to display instead of generated ones |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` | The color theme of the avatar |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | The size of the avatar |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'full'` | The border radius of the avatar |
| `showStatus` | `boolean` | `false` | Whether to show a status indicator |
| `status` | `'online' \| 'offline' \| 'away' \| 'busy'` | `'online'` | The status of the user |
| `icon` | `ReactNode` | - | Custom icon to display instead of image or initials |
| `fallback` | `ReactNode` | - | Fallback component to render when image fails to load |
| `isBordered` | `boolean` | `true` | Whether to show the border |
| `isDisabled` | `boolean` | `false` | Whether the avatar is disabled |
| `isClickable` | `boolean` | `false` | Whether the avatar is clickable |
| `onError` | `() => void` | - | Callback fired when the image fails to load |
| `onClick` | `(event: MouseEvent) => void` | - | Callback fired when the avatar is clicked |
| `customStyles` | `string` | - | Custom CSS classes to apply |

## Features

- **Image Support**: Display user profile images with automatic fallback to initials
- **Initials Generation**: Automatically generates initials from user names
- **Status Indicators**: Show online/offline/away/busy status with properly positioned colored dots
  - Fully visible status dots that don't get clipped by avatar borders
  - Size-responsive positioning that works across all avatar sizes
  - High contrast borders and shadows for better visibility
  - Works with all avatar variants (bordered/borderless, different colors, etc.)
- **Multiple Sizes**: Support for xs, sm, md, lg, xl sizes
- **Color Variants**: Six color themes following the design system
- **Clickable**: Optional click handling with proper accessibility
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Hand-drawn Style**: Follows the faiz-ui design aesthetic with sketchy borders and shadows
- **TypeScript**: Full TypeScript support with proper type definitions
- **Customizable**: Support for custom icons, fallbacks, and styling

## Examples

### Size Variants
```tsx
<div className="flex gap-4">
  <Avatar name="John Doe" size="xs" />
  <Avatar name="John Doe" size="sm" />
  <Avatar name="John Doe" size="md" />
  <Avatar name="John Doe" size="lg" />
  <Avatar name="John Doe" size="xl" />
</div>
```

### Color Variants
```tsx
<div className="flex gap-4">
  <Avatar name="John Doe" color="primary" />
  <Avatar name="John Doe" color="secondary" />
  <Avatar name="John Doe" color="success" />
  <Avatar name="John Doe" color="warning" />
  <Avatar name="John Doe" color="danger" />
  <Avatar name="John Doe" color="info" />
</div>
```

### Status Indicators
```tsx
<div className="flex gap-4">
  <Avatar name="Online User" showStatus status="online" />
  <Avatar name="Away User" showStatus status="away" />
  <Avatar name="Busy User" showStatus status="busy" />
  <Avatar name="Offline User" showStatus status="offline" />
</div>
```

### Status Indicators with Different Sizes
```tsx
<div className="flex items-center gap-4">
  <Avatar name="XS" size="xs" showStatus status="online" />
  <Avatar name="SM" size="sm" showStatus status="away" />
  <Avatar name="MD" size="md" showStatus status="busy" />
  <Avatar name="LG" size="lg" showStatus status="offline" />
  <Avatar name="XL" size="xl" showStatus status="online" />
</div>
```

### Status Indicators with Images
```tsx
<div className="flex gap-4">
  <Avatar
    name="Online User"
    src="https://example.com/avatar1.jpg"
    showStatus
    status="online"
  />
  <Avatar
    name="Away User"
    src="https://example.com/avatar2.jpg"
    showStatus
    status="away"
  />
</div>
```
