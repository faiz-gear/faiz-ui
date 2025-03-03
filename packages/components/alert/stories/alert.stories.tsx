import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Alert } from '../src'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
    },
    radius: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full']
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost', 'light', 'flat', 'sketchy']
    },
    hideIcon: {
      control: 'boolean'
    },
    customStyles: {
      control: 'text'
    },
    children: {
      control: 'text'
    }
  },
  args: {
    children: '这是一个提示信息',
    color: 'primary',
    radius: 'md',
    variant: 'solid',
    hideIcon: false
  }
} as const

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert color="primary">这是一个主要提示信息</Alert>
      <Alert color="secondary">这是一个次要提示信息</Alert>
      <Alert color="success">这是一个成功提示信息</Alert>
      <Alert color="warning">这是一个警告提示信息</Alert>
      <Alert color="danger">这是一个危险提示信息</Alert>
      <Alert color="info">这是一个信息提示信息</Alert>
    </div>
  )
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert variant="solid" color="primary">
        实心样式提示信息
      </Alert>
      <Alert variant="outline" color="secondary">
        轮廓样式提示信息
      </Alert>
      <Alert variant="ghost" color="success">
        幽灵样式提示信息
      </Alert>
      <Alert variant="light" color="warning">
        浅色样式提示信息
      </Alert>
      <Alert variant="flat" color="danger">
        扁平样式提示信息
      </Alert>
      <Alert variant="sketchy" color="info">
        素描样式提示信息
      </Alert>
    </div>
  )
}

export const Radius: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert radius="none" color="primary">
        无圆角提示信息
      </Alert>
      <Alert radius="sm" color="secondary">
        小圆角提示信息
      </Alert>
      <Alert radius="md" color="success">
        中圆角提示信息
      </Alert>
      <Alert radius="lg" color="warning">
        大圆角提示信息
      </Alert>
      <Alert radius="xl" color="danger">
        超大圆角提示信息
      </Alert>
      <Alert radius="full" color="info">
        完全圆角提示信息
      </Alert>
    </div>
  )
}

export const CustomIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert
        color="primary"
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        自定义图标提示信息
      </Alert>
      <Alert
        color="success"
        icon={
          <div className="w-6 h-6 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
            <span className="text-green-800 dark:text-green-200">✓</span>
          </div>
        }
      >
        自定义图标提示信息
      </Alert>
    </div>
  )
}

export const WithoutIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert hideIcon color="primary">
        无图标提示信息
      </Alert>
      <Alert hideIcon color="success">
        无图标提示信息
      </Alert>
      <Alert hideIcon color="warning">
        无图标提示信息
      </Alert>
      <Alert hideIcon color="danger">
        无图标提示信息
      </Alert>
    </div>
  )
}

export const WithAction: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert
        color="primary"
        action={<button className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 rounded-md">操作</button>}
      >
        带操作按钮的提示信息
      </Alert>
      <Alert
        color="warning"
        action={
          <div className="flex gap-2">
            <button className="px-2 py-1 text-sm bg-amber-100 dark:bg-amber-900 rounded-md">确认</button>
            <button className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-md">取消</button>
          </div>
        }
      >
        带多个操作按钮的提示信息
      </Alert>
    </div>
  )
}

export const WithCloseButton: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert color="primary" onClose={() => alert('关闭按钮被点击')}>
        带关闭按钮的提示信息
      </Alert>
      <Alert
        color="warning"
        onClose={() => alert('关闭按钮被点击')}
        action={<button className="px-2 py-1 text-sm bg-amber-100 dark:bg-amber-900 rounded-md">操作</button>}
      >
        带关闭按钮和操作按钮的提示信息
      </Alert>
    </div>
  )
}

export const ControlledVisibility: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(true)

    return (
      <div className="flex flex-col gap-4">
        <div className="mb-4">
          <button
            className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 rounded-md"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? '隐藏提示' : '显示提示'}
          </button>
        </div>

        <Alert color="primary" isVisible={isVisible} onClose={() => setIsVisible(false)}>
          可控制显示隐藏的提示信息
        </Alert>
      </div>
    )
  }
}
