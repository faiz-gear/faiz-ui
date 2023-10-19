import React, { useRef } from 'react'
import { Meta } from '@storybook/react'

import { Ripple, RippleProps } from '../src'

const meta: Meta<typeof Ripple> = {
  title: 'Components/Ripple',
  component: Ripple,
  argTypes: {}
}

export default meta

const defaultProps = {}

const Template = (args: RippleProps) => {
  const rippleRef = useRef<any>(null)
  const handleClick = (e) => {
    rippleRef.current?.addRipple?.(e)
  }
  return (
    <div
      className="relative font-semibold text-white py-1 px-3 rounded-full active:opacity-80 bg-blue-500 inline-flex overflow-hidden"
      onClick={handleClick}
    >
      button
      <Ripple ref={rippleRef} {...args} />
    </div>
  )
}

export const Default = {
  render: Template,
  args: {
    ...defaultProps
  }
}
