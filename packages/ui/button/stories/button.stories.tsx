import React from 'react'
import { Meta } from '@storybook/react'

import { Button, ButtonProps } from '../src'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger']
    },
    isDisabled: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta<typeof Button>

const defaultProps = {
  children: 'Button',
  color: 'default',
  isDisabled: false
}

const Template = (args: ButtonProps) => <Button {...args} />

export const Default = {
  render: Template,
  args: {
    ...defaultProps
  }
}
