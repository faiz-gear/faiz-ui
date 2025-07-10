import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../src'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info']
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    shape: {
      control: { type: 'select' },
      options: ['square', 'rounded', 'pill', 'full']
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost', 'light', 'flat', 'sketchy']
    },
    position: {
      control: { type: 'select' },
      options: ['static', 'top-right', 'top-left', 'bottom-right', 'bottom-left', 'center']
    },
    iconPlacement: {
      control: { type: 'select' },
      options: ['before', 'after']
    },
    isDisabled: {
      control: 'boolean'
    },
    isDot: {
      control: 'boolean'
    },
    showZero: {
      control: 'boolean'
    },
    max: {
      control: 'number'
    },
    customStyles: {
      control: 'text'
    },
    children: {
      control: 'text'
    },
    'aria-label': {
      control: 'text'
    }
  },
  args: {
    children: 'Badge',
    color: 'primary',
    size: 'md',
    shape: 'rounded',
    variant: 'solid',
    position: 'static',
    iconPlacement: 'before',
    isDisabled: false,
    isDot: false,
    showZero: false
  }
} as const

export default meta
type Story = StoryObj<typeof meta>

// Default story - Basic badge with default styling
export const Default: Story = {
  args: {
    children: 'Default Badge'
  }
}

// Colors story - Different badge color variants
export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge color="default">Default</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
      <Badge color="info">Info</Badge>
    </div>
  )
}

// Variants story - Different badge style variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="light">Light</Badge>
      <Badge variant="flat">Flat</Badge>
      <Badge variant="sketchy">Sketchy</Badge>
    </div>
  )
}

// Sizes story - Multiple size options
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge size="xs">XS</Badge>
      <Badge size="sm">SM</Badge>
      <Badge size="md">MD</Badge>
      <Badge size="lg">LG</Badge>
      <Badge size="xl">XL</Badge>
    </div>
  )
}

// Shapes story - Different shape options
export const Shapes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge shape="square">Square</Badge>
      <Badge shape="rounded">Rounded</Badge>
      <Badge shape="pill">Pill</Badge>
      <Badge shape="full">Full</Badge>
    </div>
  )
}

// With Icons story - Icon badges with different placements
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge icon={<span>★</span>} color="warning">
        Starred
      </Badge>
      <Badge icon={<span>✓</span>} color="success" iconPlacement="after">
        Verified
      </Badge>
      <Badge icon={<span>🔥</span>} color="error">
        Hot
      </Badge>
      <Badge icon={<span>💎</span>} color="info">
        Premium
      </Badge>
      <Badge 
        icon={
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        } 
        color="secondary"
      >
        SVG Icon
      </Badge>
    </div>
  )
}

// Numeric Badges story - Number handling and max prop
export const NumericBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge>5</Badge>
      <Badge>42</Badge>
      <Badge max={99}>150</Badge>
      <Badge max={999}>1500</Badge>
      <Badge showZero={true}>0</Badge>
      <Badge showZero={false}>0</Badge>
      <Badge color="error">999+</Badge>
    </div>
  )
}

// Dot Variant story - Dot badges for status indicators
export const DotVariant: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-2">
        <Badge isDot color="success" aria-label="Online" />
        <span>Online</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge isDot color="warning" aria-label="Away" />
        <span>Away</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge isDot color="error" aria-label="Offline" />
        <span>Offline</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge isDot color="info" aria-label="Busy" />
        <span>Busy</span>
      </div>
    </div>
  )
}

// Positioned Badges story - Different positioning options
export const PositionedBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <div className="relative inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded">
        <div className="w-12 h-12 bg-blue-500 rounded"></div>
        <Badge position="top-right" color="error">3</Badge>
      </div>
      <div className="relative inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded">
        <div className="w-12 h-12 bg-green-500 rounded"></div>
        <Badge position="top-left" color="warning">!</Badge>
      </div>
      <div className="relative inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded">
        <div className="w-12 h-12 bg-purple-500 rounded"></div>
        <Badge position="bottom-right" color="info">NEW</Badge>
      </div>
      <div className="relative inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded">
        <div className="w-12 h-12 bg-orange-500 rounded"></div>
        <Badge position="bottom-left" color="success">✓</Badge>
      </div>
    </div>
  )
}

// Interactive States story - Disabled and hover states
export const InteractiveStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge>Normal</Badge>
      <Badge isDisabled>Disabled</Badge>
      <Badge isDisabled color="success">Disabled Success</Badge>
      <Badge isDisabled variant="outline">Disabled Outline</Badge>
    </div>
  )
}

// Edge Cases story - Empty badges, long text, special characters
export const EdgeCases: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Badge showZero={false}>0</Badge>
        <Badge showZero={true}>0</Badge>
        <Badge></Badge>
        <Badge>{''}</Badge>
      </div>
      <div className="flex flex-wrap gap-4">
        <Badge>Very Long Badge Text That Might Wrap</Badge>
        <Badge size="xs">Long text in small badge</Badge>
        <Badge shape="pill">Extremely long text in pill shaped badge</Badge>
      </div>
      <div className="flex flex-wrap gap-4">
        <Badge>🎉🎊✨</Badge>
        <Badge>@#$%^&*()</Badge>
        <Badge>中文徽章</Badge>
        <Badge>العربية</Badge>
        <Badge>🚀 Rocket</Badge>
      </div>
      <div className="flex flex-wrap gap-4">
        <Badge max={9}>10</Badge>
        <Badge max={99}>100</Badge>
        <Badge max={999}>1000</Badge>
        <Badge max={9999}>10000</Badge>
      </div>
    </div>
  )
}

// Accessibility story - Proper ARIA labels and screen reader support
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
          Accessibility Features
        </h3>
        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• All badges include proper ARIA labels for screen readers</li>
          <li>• Dot badges use role="status" for status indicators</li>
          <li>• Numeric badges announce count information</li>
          <li>• Color is not the only way to convey information</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Badge aria-label="5 unread messages">5</Badge>
        <Badge isDot color="success" aria-label="User is online" />
        <Badge color="error" aria-label="Critical alert">!</Badge>
        <Badge color="info" aria-label="Information available">i</Badge>
        <Badge color="warning" aria-label="Warning notification">⚠</Badge>
        <Badge color="primary" aria-label="New feature available">NEW</Badge>
      </div>

      <div className="flex flex-wrap gap-4">
        <Badge
          icon={<span>📧</span>}
          aria-label="3 new email messages"
        >
          3
        </Badge>
        <Badge
          isDot
          color="error"
          aria-label="System error detected"
        />
        <Badge
          max={99}
          aria-label="More than 99 notifications"
        >
          150
        </Badge>
      </div>
    </div>
  )
}

// Content Variations story - Different types of content
export const ContentVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Badge>Text Badge</Badge>
        <Badge>123</Badge>
        <Badge>NEW</Badge>
        <Badge>BETA</Badge>
        <Badge>PRO</Badge>
      </div>

      <div className="flex flex-wrap gap-4">
        <Badge icon={<span>🎯</span>}>Target</Badge>
        <Badge icon={<span>⭐</span>} iconPlacement="after">Star</Badge>
        <Badge icon={<span>🔔</span>}>5</Badge>
      </div>

      <div className="flex flex-wrap gap-4">
        <Badge isDot color="success" />
        <Badge isDot color="warning" />
        <Badge isDot color="error" />
      </div>

      <div className="flex flex-wrap gap-4">
        <Badge>v1.0.0</Badge>
        <Badge color="success">ACTIVE</Badge>
        <Badge color="warning">PENDING</Badge>
        <Badge color="error">FAILED</Badge>
      </div>
    </div>
  )
}

// All Combinations story - Comprehensive showcase
export const AllCombinations: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
          Solid Variants
        </h3>
        <div className="flex flex-wrap gap-2">
          {['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'].map((color) => (
            <Badge key={color} color={color as any} variant="solid">
              {color}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
          Outline Variants
        </h3>
        <div className="flex flex-wrap gap-2">
          {['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'].map((color) => (
            <Badge key={color} color={color as any} variant="outline">
              {color}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
          Sketchy Variants
        </h3>
        <div className="flex flex-wrap gap-2">
          {['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'].map((color) => (
            <Badge key={color} color={color as any} variant="sketchy">
              {color}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
