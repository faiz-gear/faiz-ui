import React from 'react'
import { Avatar } from './src'

// Example usage of the Avatar component
export function AvatarExample() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Avatar Component Examples</h1>
      
      {/* Basic usage */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Basic Usage</h2>
        <div className="flex gap-4">
          <Avatar name="John Doe" />
          <Avatar initials="AB" />
          <Avatar />
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Sizes</h2>
        <div className="flex items-center gap-4">
          <Avatar name="John Doe" size="xs" />
          <Avatar name="John Doe" size="sm" />
          <Avatar name="John Doe" size="md" />
          <Avatar name="John Doe" size="lg" />
          <Avatar name="John Doe" size="xl" />
        </div>
      </section>

      {/* Colors */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Colors</h2>
        <div className="flex gap-4">
          <Avatar name="Primary" color="primary" />
          <Avatar name="Secondary" color="secondary" />
          <Avatar name="Success" color="success" />
          <Avatar name="Warning" color="warning" />
          <Avatar name="Danger" color="danger" />
          <Avatar name="Info" color="info" />
        </div>
      </section>

      {/* With Status */}
      <section>
        <h2 className="text-lg font-semibold mb-4">With Status</h2>
        <div className="flex gap-4">
          <Avatar name="Online" showStatus status="online" />
          <Avatar name="Away" showStatus status="away" />
          <Avatar name="Busy" showStatus status="busy" />
          <Avatar name="Offline" showStatus status="offline" />
        </div>
      </section>

      {/* Status with Different Sizes */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Status Indicators - All Sizes</h2>
        <div className="flex items-center gap-4">
          <Avatar name="XS" size="xs" showStatus status="online" />
          <Avatar name="SM" size="sm" showStatus status="away" />
          <Avatar name="MD" size="md" showStatus status="busy" />
          <Avatar name="LG" size="lg" showStatus status="offline" />
          <Avatar name="XL" size="xl" showStatus status="online" />
        </div>
      </section>

      {/* With Image */}
      <section>
        <h2 className="text-lg font-semibold mb-4">With Image</h2>
        <div className="flex gap-4">
          <Avatar 
            name="John Doe" 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="John Doe"
          />
          <Avatar 
            name="Jane Smith" 
            src="https://images.unsplash.com/photo-1494790108755-2616b9e0e4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Jane Smith"
            showStatus
            status="online"
          />
        </div>
      </section>

      {/* Clickable */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Clickable</h2>
        <div className="flex gap-4">
          <Avatar 
            name="Click Me" 
            isClickable 
            onClick={() => alert('Avatar clicked!')}
          />
          <Avatar 
            name="Disabled" 
            isClickable 
            isDisabled
            onClick={() => alert('This should not fire')}
          />
        </div>
      </section>

      {/* Custom Icon */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Custom Icon</h2>
        <div className="flex gap-4">
          <Avatar 
            icon={
              <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" />
              </svg>
            }
            color="info"
          />
        </div>
      </section>

      {/* No Border */}
      <section>
        <h2 className="text-lg font-semibold mb-4">No Border</h2>
        <div className="flex gap-4">
          <Avatar name="No Border" isBordered={false} />
          <Avatar name="With Border" isBordered={true} />
        </div>
      </section>

      {/* Status with No Border */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Status Indicators - No Border</h2>
        <div className="flex gap-4">
          <Avatar name="Online" isBordered={false} showStatus status="online" />
          <Avatar name="Away" isBordered={false} showStatus status="away" />
          <Avatar name="Busy" isBordered={false} showStatus status="busy" />
          <Avatar name="Offline" isBordered={false} showStatus status="offline" />
        </div>
      </section>

      {/* Status with Different Colors */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Status Indicators - Different Avatar Colors</h2>
        <div className="flex gap-4">
          <Avatar name="Primary" color="primary" showStatus status="online" />
          <Avatar name="Secondary" color="secondary" showStatus status="away" />
          <Avatar name="Success" color="success" showStatus status="online" />
          <Avatar name="Warning" color="warning" showStatus status="busy" />
          <Avatar name="Danger" color="danger" showStatus status="offline" />
          <Avatar name="Info" color="info" showStatus status="online" />
        </div>
      </section>
    </div>
  )
}
