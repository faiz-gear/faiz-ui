import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from '../src'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '面包屑尺寸'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      description: '面包屑颜色'
    },
    variant: {
      control: 'select',
      options: ['solid', 'light', 'bordered'],
      description: '面包屑样式变体'
    },
    underline: {
      control: 'select',
      options: ['none', 'hover', 'always', 'active'],
      description: '下划线样式'
    },
    separator: {
      control: 'text',
      description: '分隔符'
    }
  }
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/products/electronics">Electronics</Breadcrumbs.Item>
      <Breadcrumbs.Item>Laptops</Breadcrumbs.Item>
    </Breadcrumbs>
  ),
  args: {}
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Breadcrumbs size="sm">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs size="md">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs size="lg">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  )
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Breadcrumbs color="primary">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs color="secondary">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs color="success">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs color="warning">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs color="danger">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs color="info">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  )
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Breadcrumbs variant="solid">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs variant="light">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs variant="bordered">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  )
}

export const Underline: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Breadcrumbs underline="none">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs underline="hover">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs underline="always">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs underline="active">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  )
}

export const CustomSeparator: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Breadcrumbs separator=">">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs separator="→">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs separator="•">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  )
}

export const DisabledItems: Story = {
  render: () => (
    <Breadcrumbs>
      <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/products" isDisabled>
        Products (Disabled)
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>Current</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

export const WithIcons: Story = {
  render: () => (
    <Breadcrumbs>
      <Breadcrumbs.Item href="/">
        🏠 Home
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href="/products">
        📦 Products
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href="/products/electronics">
        💻 Electronics
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        🖥️ Laptops
      </Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

export const LongPath: Story = {
  render: () => (
    <Breadcrumbs>
      <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/category">Category</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/category/subcategory">Sub Category</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/category/subcategory/products">Products</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/category/subcategory/products/details">Details</Breadcrumbs.Item>
      <Breadcrumbs.Item>Current Page</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}
