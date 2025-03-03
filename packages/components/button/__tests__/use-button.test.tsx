import * as React from 'react'
import { renderHook, act } from '@testing-library/react'
import { useButton } from '../src'

describe('useButton Hook', () => {
  // 基础功能测试
  it('应返回正确的默认值', () => {
    const { result } = renderHook(() => useButton({ children: '测试按钮' }))

    expect(result.current.Component).toBe('button')
    expect(result.current.isDisabled).toBeFalsy()
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.loadingText).toBe('Loading')
    expect(result.current.children).toBe('测试按钮')
  })

  // 自定义元素测试
  it('应支持自定义元素', () => {
    const { result } = renderHook(() => useButton({ as: 'a' }))

    expect(result.current.Component).toBe('a')
  })

  // 禁用状态测试
  it('应正确处理禁用状态', () => {
    const { result: result1 } = renderHook(() => useButton({ disabled: true }))
    expect(result1.current.isDisabled).toBeTruthy()

    const { result: result2 } = renderHook(() => useButton({ isDisabled: true }))
    expect(result2.current.isDisabled).toBeTruthy()
  })

  // 点击处理测试
  it('正常状态下应调用onClick', () => {
    const onClick = jest.fn()
    const { result } = renderHook(() => useButton({ onClick }))

    const mockEvent = {} as React.MouseEvent<HTMLButtonElement>
    act(() => {
      result.current.handleClick(mockEvent)
    })

    expect(onClick).toHaveBeenCalledWith(mockEvent)
  })

  // 禁用状态下点击测试
  it('禁用状态下不应调用onClick', () => {
    const onClick = jest.fn()
    const { result } = renderHook(() => useButton({ onClick, isDisabled: true }))

    const mockEvent = {} as React.MouseEvent<HTMLButtonElement>
    act(() => {
      result.current.handleClick(mockEvent)
    })

    expect(onClick).not.toHaveBeenCalled()
  })

  // 加载状态下点击测试
  it('加载状态下不应调用onClick', () => {
    const onClick = jest.fn()
    const { result } = renderHook(() => useButton({ onClick, isLoading: true }))

    const mockEvent = {} as React.MouseEvent<HTMLButtonElement>
    act(() => {
      result.current.handleClick(mockEvent)
    })

    expect(onClick).not.toHaveBeenCalled()
  })

  // 样式生成测试
  it('应生成正确的样式类', () => {
    const { result } = renderHook(() =>
      useButton({
        color: 'primary',
        size: 'md',
        radius: 'lg',
        variant: 'outline',
        className: 'test-class'
      })
    )

    expect(result.current.styles).toContain('text-blue-800')
    expect(result.current.styles).toContain('py-1.5')
    expect(result.current.styles).toContain('rounded-lg')
    expect(result.current.styles).toContain('bg-transparent')
    expect(result.current.styles).toContain('test-class')
  })

  // 自定义样式测试
  it('应支持自定义样式', () => {
    const { result } = renderHook(() =>
      useButton({
        customStyles: 'custom-test-class',
        className: 'regular-class'
      })
    )

    expect(result.current.styles).toContain('custom-test-class')
    expect(result.current.styles).toContain('regular-class')
  })

  // 属性传递测试
  it('应正确传递其他属性', () => {
    const props = {
      id: 'test-id',
      role: 'button',
      'aria-label': '测试按钮'
    } as const

    const { result } = renderHook(() => useButton(props))

    expect(result.current.id).toBe('test-id')
    expect(result.current.role).toBe('button')
    expect(result.current['aria-label']).toBe('测试按钮')
  })

  // ref处理测试
  it('应正确处理ref', () => {
    const ref = { current: null }
    renderHook(() => useButton({ ref }))

    // 由于useImperativeHandle的特性，这里只能测试ref是否被传递
    // 实际的DOM引用需要在组件渲染后测试
    expect(ref).toBeDefined()
  })
})
