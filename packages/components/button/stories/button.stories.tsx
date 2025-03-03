import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../src'

const meta = {
  title: 'Components/Button',
  component: Button,
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
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost', 'light', 'flat', 'sketchy']
    },
    isDisabled: {
      control: 'boolean'
    },
    isLoading: {
      control: 'boolean'
    },
    isIconOnly: {
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
    children: '手绘按钮',
    color: 'primary',
    size: 'md',
    radius: 'md',
    variant: 'solid',
    isDisabled: false,
    isLoading: false,
    isIconOnly: false
  }
} as const

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button color="primary">主要</Button>
      <Button color="secondary">次要</Button>
      <Button color="success">成功</Button>
      <Button color="warning">警告</Button>
      <Button color="danger">危险</Button>
      <Button color="info">信息</Button>
    </div>
  )
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">超小</Button>
      <Button size="sm">小</Button>
      <Button size="md">中</Button>
      <Button size="lg">大</Button>
      <Button size="xl">超大</Button>
    </div>
  )
}

export const Radius: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button radius="none">无圆角</Button>
      <Button radius="sm">小圆角</Button>
      <Button radius="md">中圆角</Button>
      <Button radius="lg">大圆角</Button>
      <Button radius="xl">超大圆角</Button>
      <Button radius="full">完全圆角</Button>
    </div>
  )
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="solid">实心</Button>
      <Button variant="outline">轮廓</Button>
      <Button variant="ghost">幽灵</Button>
      <Button variant="light">浅色</Button>
      <Button variant="flat">扁平</Button>
      <Button variant="sketchy">素描</Button>
    </div>
  )
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: '禁用状态'
  }
}

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button isLoading>加载中</Button>
      <Button isLoading color="secondary">
        加载中
      </Button>
      <Button isLoading color="success" variant="outline">
        加载中
      </Button>
      <Button isLoading color="danger" variant="ghost">
        加载中
      </Button>
    </div>
  )
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button startIcon={<span>✏️</span>}>开始图标</Button>
      <Button endIcon={<span>📝</span>}>结束图标</Button>
      <Button startIcon={<span>🖌️</span>} endIcon={<span>🎨</span>}>
        前后图标
      </Button>
    </div>
  )
}

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button isIconOnly>+</Button>
      <Button isIconOnly color="secondary">
        -
      </Button>
      <Button isIconOnly color="success">
        ✓
      </Button>
      <Button isIconOnly color="danger">
        ✕
      </Button>
      <Button isIconOnly color="warning">
        ⚠️
      </Button>
      <Button isIconOnly color="info">
        ℹ️
      </Button>
    </div>
  )
}

export const SketchyVariant: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="sketchy" color="primary">
        素描风格
      </Button>
      <Button variant="sketchy" color="secondary">
        不规则边框
      </Button>
      <Button variant="sketchy" color="success">
        手绘效果
      </Button>
      <Button variant="sketchy" color="warning">
        虚实结合
      </Button>
      <Button variant="sketchy" color="danger">
        点划线框
      </Button>
    </div>
  )
}

export const StandardRadiusVariation: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">标准圆角边框效果</h3>
      <div className="flex flex-wrap gap-4">
        <Button radius="sm" color="primary">
          小圆角
        </Button>
        <Button radius="md" color="secondary">
          中圆角
        </Button>
        <Button radius="lg" color="success">
          大圆角
        </Button>
        <Button radius="xl" color="warning">
          超大圆角
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button radius="sm" variant="outline" color="primary">
          轮廓按钮
        </Button>
        <Button radius="md" variant="ghost" color="secondary">
          幽灵按钮
        </Button>
        <Button radius="lg" variant="sketchy" color="success">
          素描按钮
        </Button>
        <Button radius="xl" variant="flat" color="danger">
          扁平按钮
        </Button>
      </div>
    </div>
  )
}

export const FunCombinations: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-4">
        <Button color="primary" variant="ghost" startIcon={<span>📌</span>}>
          重要笔记
        </Button>
        <Button color="success" variant="flat" startIcon={<span>✓</span>}>
          已完成
        </Button>
        <Button color="warning" variant="outline" startIcon={<span>⚠️</span>}>
          注意事项
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button color="secondary" size="lg" customStyles="[transform:rotate(-2deg)]">
          扭曲角度
        </Button>
        <Button color="info" size="lg" customStyles="[transform:rotate(1deg)]">
          微微倾斜
        </Button>
        <Button color="danger" size="lg" customStyles="[transform:skew(-5deg)]">
          斜向变形
        </Button>
      </div>
    </div>
  )
}

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-6 rounded-lg">
      <div className="flex flex-wrap gap-4 mb-4">
        <Button>默认按钮</Button>
        <Button color="primary">主要按钮</Button>
        <Button color="secondary">次要按钮</Button>
        <Button color="success">成功按钮</Button>
      </div>
      <div className="flex flex-wrap gap-4 mb-4">
        <Button variant="outline" color="primary">
          轮廓按钮
        </Button>
        <Button variant="ghost" color="secondary">
          幽灵按钮
        </Button>
        <Button variant="light" color="success">
          浅色按钮
        </Button>
        <Button variant="flat" color="warning">
          扁平按钮
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button isLoading color="danger">
          加载中
        </Button>
        <Button isIconOnly color="info">
          ℹ️
        </Button>
        <Button isDisabled>禁用状态</Button>
      </div>
    </div>
  )
}

export const CustomStyles: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button customStyles="bg-gradient-to-r from-purple-400/60 to-pink-400/60 hover:from-purple-500/60 hover:to-pink-500/60">
        渐变背景
      </Button>
      <Button customStyles="border-[3px] border-dashed">虚线边框</Button>
      <Button customStyles="[transform:rotate(-3deg)_translateY(-2px)] hover:[transform:rotate(0deg)_translateY(0)]">
        悬浮动画
      </Button>
      <Button customStyles="shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-none">加重阴影</Button>
    </div>
  )
}

export const BackgroundVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">不同背景下的按钮效果</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <h4 className="mb-3 font-medium">白色背景</h4>
          <div className="flex flex-wrap gap-3">
            <Button color="primary">主要按钮</Button>
            <Button color="secondary" variant="outline">
              次要按钮
            </Button>
            <Button color="success" variant="light">
              成功按钮
            </Button>
          </div>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
          <h4 className="mb-3 font-medium">浅灰背景</h4>
          <div className="flex flex-wrap gap-3">
            <Button color="primary">主要按钮</Button>
            <Button color="secondary" variant="outline">
              次要按钮
            </Button>
            <Button color="success" variant="light">
              成功按钮
            </Button>
          </div>
        </div>

        <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="mb-3 font-medium">浅蓝背景</h4>
          <div className="flex flex-wrap gap-3">
            <Button color="primary">主要按钮</Button>
            <Button color="secondary" variant="outline">
              次要按钮
            </Button>
            <Button color="success" variant="light">
              成功按钮
            </Button>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
          <h4 className="mb-3 font-medium">渐变背景</h4>
          <div className="flex flex-wrap gap-3">
            <Button color="primary">主要按钮</Button>
            <Button color="secondary" variant="outline">
              次要按钮
            </Button>
            <Button color="success" variant="light">
              成功按钮
            </Button>
          </div>
        </div>

        <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-100">
          <h4 className="mb-3 font-medium">浅黄背景</h4>
          <div className="flex flex-wrap gap-3">
            <Button color="primary">主要按钮</Button>
            <Button color="warning" variant="outline">
              警告按钮
            </Button>
            <Button color="danger" variant="light">
              危险按钮
            </Button>
          </div>
        </div>

        <div className="p-6 bg-gray-800 text-white rounded-lg">
          <h4 className="mb-3 font-medium">深色背景</h4>
          <div className="flex flex-wrap gap-3">
            <Button color="primary">主要按钮</Button>
            <Button color="info" variant="outline">
              信息按钮
            </Button>
            <Button color="success" variant="light">
              成功按钮
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
