import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '../src'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    radius: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full']
    },
    status: {
      control: { type: 'select' },
      options: ['online', 'offline', 'away', 'busy']
    },
    showStatus: {
      control: 'boolean'
    },
    isBordered: {
      control: 'boolean'
    },
    isDisabled: {
      control: 'boolean'
    },
    isClickable: {
      control: 'boolean'
    },
    name: {
      control: 'text'
    },
    src: {
      control: 'text'
    },
    alt: {
      control: 'text'
    },
    initials: {
      control: 'text'
    },
    customStyles: {
      control: 'text'
    }
  },
  args: {
    color: 'primary',
    size: 'md',
    radius: 'full',
    showStatus: false,
    isBordered: true,
    isDisabled: false,
    isClickable: false,
    status: 'online'
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'John Doe'
  }
}

export const WithImage: Story = {
  args: {
    name: 'John Doe',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: 'John Doe'
  }
}

export const WithStatus: Story = {
  args: {
    name: 'John Doe',
    showStatus: true,
    status: 'online'
  }
}

export const CustomInitials: Story = {
  args: {
    initials: 'AB',
    color: 'secondary'
  }
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="John Doe" size="xs" />
      <Avatar name="John Doe" size="sm" />
      <Avatar name="John Doe" size="md" />
      <Avatar name="John Doe" size="lg" />
      <Avatar name="John Doe" size="xl" />
    </div>
  )
}

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="John Doe" color="primary" />
      <Avatar name="John Doe" color="secondary" />
      <Avatar name="John Doe" color="success" />
      <Avatar name="John Doe" color="warning" />
      <Avatar name="John Doe" color="danger" />
      <Avatar name="John Doe" color="info" />
    </div>
  )
}

export const WithIcon: Story = {
  args: {
    icon: (
      <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" />
      </svg>
    ),
    color: 'info'
  }
}

export const Clickable: Story = {
  args: {
    name: 'John Doe',
    isClickable: true,
    onClick: () => alert('Avatar clicked!')
  }
}

export const Disabled: Story = {
  args: {
    name: 'John Doe',
    isDisabled: true
  }
}

export const NoBorder: Story = {
  args: {
    name: 'John Doe',
    isBordered: false
  }
}

export const StatusVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Online" showStatus status="online" />
      <Avatar name="Away" showStatus status="away" />
      <Avatar name="Busy" showStatus status="busy" />
      <Avatar name="Offline" showStatus status="offline" />
    </div>
  )
}

export const StatusWithDifferentSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="XS" size="xs" showStatus status="online" />
      <Avatar name="SM" size="sm" showStatus status="away" />
      <Avatar name="MD" size="md" showStatus status="busy" />
      <Avatar name="LG" size="lg" showStatus status="offline" />
      <Avatar name="XL" size="xl" showStatus status="online" />
    </div>
  )
}

export const StatusWithImages: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        name="Online User"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        showStatus
        status="online"
      />
      <Avatar
        name="Away User"
        src="https://images.unsplash.com/photo-1494790108755-2616b9e0e4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        showStatus
        status="away"
      />
      <Avatar
        name="Busy User"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        showStatus
        status="busy"
      />
    </div>
  )
}

export const StatusWithNoBorder: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Online" isBordered={false} showStatus status="online" />
      <Avatar name="Away" isBordered={false} showStatus status="away" />
      <Avatar name="Busy" isBordered={false} showStatus status="busy" />
      <Avatar name="Offline" isBordered={false} showStatus status="offline" />
    </div>
  )
}

export const StatusWithDifferentColors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Primary" color="primary" showStatus status="online" />
      <Avatar name="Secondary" color="secondary" showStatus status="away" />
      <Avatar name="Success" color="success" showStatus status="online" />
      <Avatar name="Warning" color="warning" showStatus status="busy" />
      <Avatar name="Danger" color="danger" showStatus status="offline" />
      <Avatar name="Info" color="info" showStatus status="online" />
    </div>
  )
}
