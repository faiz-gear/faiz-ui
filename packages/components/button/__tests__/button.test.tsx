import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Button } from '../src'

describe('Button 组件', () => {
  // 基础渲染测试
  it('应该正确渲染按钮内容', () => {
    render(<Button>测试按钮</Button>)
    expect(screen.getByText('测试按钮')).toBeInTheDocument()
  })

  // 引用转发测试
  it('应该正确转发 ref', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref}>测试按钮</Button>)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('BUTTON')
  })

  // 自定义元素测试
  it('应该支持通过 as 属性渲染为不同元素', () => {
    render(
      <Button as="a" href="#test">
        链接按钮
      </Button>
    )
    const linkButton = screen.getByText('链接按钮')
    expect(linkButton.tagName).toBe('A')
    expect(linkButton).toHaveAttribute('href', '#test')
  })

  // 点击事件测试
  it('应该正确处理点击事件', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>可点击按钮</Button>)

    fireEvent.click(screen.getByText('可点击按钮'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // 禁用状态测试
  it('禁用状态下不应触发点击事件', () => {
    const handleClick = jest.fn()
    render(
      <Button isDisabled onClick={handleClick}>
        禁用按钮
      </Button>
    )

    const button = screen.getByText('禁用按钮')
    expect(button).toBeDisabled()

    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  // 加载状态测试
  it('加载状态下应显示加载指示器和文本', () => {
    render(
      <Button isLoading loadingText="加载中">
        按钮内容
      </Button>
    )

    expect(screen.getByText('加载中')).toBeInTheDocument()
  })

  // 自定义加载指示器测试
  it('应支持自定义加载指示器', () => {
    const customSpinner = <div data-testid="custom-spinner">自定义加载</div>
    render(
      <Button isLoading spinner={customSpinner}>
        按钮内容
      </Button>
    )

    expect(screen.getByTestId('custom-spinner')).toBeInTheDocument()
  })

  // 图标测试
  it('应正确渲染开始和结束图标', () => {
    const startIcon = <span data-testid="start-icon">🔍</span>
    const endIcon = <span data-testid="end-icon">🔎</span>

    render(
      <Button startIcon={startIcon} endIcon={endIcon}>
        带图标按钮
      </Button>
    )

    expect(screen.getByTestId('start-icon')).toBeInTheDocument()
    expect(screen.getByTestId('end-icon')).toBeInTheDocument()
    expect(screen.getByText('带图标按钮')).toBeInTheDocument()
  })

  // 仅图标模式测试
  it('仅图标模式下应只显示图标', () => {
    const icon = <span data-testid="icon">🔍</span>

    render(
      <Button isIconOnly startIcon={icon}>
        按钮文本
      </Button>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
    // 在仅图标模式下，文本内容可能存在于DOM中但不可见
    const textContent = screen.queryByText('按钮文本')
    if (textContent) {
      expect(textContent).not.toBeVisible()
    }
  })

  // 样式变体测试
  describe('样式变体', () => {
    it('应应用颜色变体', () => {
      const { rerender } = render(
        <Button color="primary" data-testid="test-button">
          主要按钮
        </Button>
      )
      let button = screen.getByTestId('test-button')
      expect(button).toHaveClass('text-blue-800')

      rerender(
        <Button color="danger" data-testid="test-button">
          危险按钮
        </Button>
      )
      button = screen.getByTestId('test-button')
      expect(button).toHaveClass('text-red-800')
    })

    it('应应用尺寸变体', () => {
      const { rerender } = render(
        <Button size="sm" data-testid="test-button">
          小按钮
        </Button>
      )
      let button = screen.getByTestId('test-button')
      expect(button).toHaveClass('py-1')

      rerender(
        <Button size="lg" data-testid="test-button">
          大按钮
        </Button>
      )
      button = screen.getByTestId('test-button')
      expect(button).toHaveClass('py-2')
    })

    it('应应用圆角变体', () => {
      const { rerender } = render(
        <Button radius="none" data-testid="test-button">
          无圆角
        </Button>
      )
      let button = screen.getByTestId('test-button')
      expect(button).toHaveClass('rounded-none')

      rerender(
        <Button radius="full" data-testid="test-button">
          全圆角
        </Button>
      )
      button = screen.getByTestId('test-button')
      expect(button).toHaveClass('rounded-full')
    })

    it('应应用按钮变体样式', () => {
      const { rerender } = render(
        <Button variant="outline" data-testid="test-button">
          轮廓按钮
        </Button>
      )
      let button = screen.getByTestId('test-button')
      expect(button).toHaveClass('bg-transparent')

      rerender(
        <Button variant="ghost" data-testid="test-button">
          幽灵按钮
        </Button>
      )
      button = screen.getByTestId('test-button')
      expect(button).toHaveClass('border-dashed')
    })
  })

  // 自定义样式测试
  it('应支持自定义样式', () => {
    render(
      <Button customStyles="test-custom-class" data-testid="test-button">
        自定义样式按钮
      </Button>
    )

    const button = screen.getByTestId('test-button')
    expect(button).toHaveClass('test-custom-class')
  })
})
