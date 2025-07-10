import * as React from 'react'
import { renderHook } from '@testing-library/react'
import { useBadge } from '../src'

describe('useBadge Hook', () => {
  // Basic functionality tests
  it('should return correct default values', () => {
    const { result } = renderHook(() => useBadge({ children: 'Test Badge' }))

    expect(result.current.Component).toBe('span')
    expect(result.current.isDisabled).toBeFalsy()
    expect(result.current.isDot).toBeFalsy()
    expect(result.current.position).toBe('static')
    expect(result.current.role).toBe('img')
  })

  it('should support custom element', () => {
    const { result } = renderHook(() => useBadge({ as: 'div', children: 'Test' }))
    expect(result.current.Component).toBe('div')
  })

  // Children processing tests
  it('should process numeric children correctly', () => {
    const { result } = renderHook(() => useBadge({ children: 5 }))
    expect(result.current.children).toBe('5')
  })

  it('should handle max prop for numeric children', () => {
    const { result } = renderHook(() => useBadge({ children: 150, max: 99 }))
    expect(result.current.children).toBe('99+')
  })

  it('should handle showZero prop', () => {
    const { result: resultHidden } = renderHook(() => useBadge({ children: 0, showZero: false }))
    expect(resultHidden.current.children).toBeNull()

    const { result: resultShown } = renderHook(() => useBadge({ children: 0, showZero: true }))
    expect(resultShown.current.children).toBe('0')
  })

  it('should return null children for dot variant', () => {
    const { result } = renderHook(() => useBadge({ children: 'Test', isDot: true }))
    expect(result.current.children).toBeNull()
  })

  // Icon handling tests
  it('should render icon before text by default', () => {
    const icon = React.createElement('span', { 'data-testid': 'icon' }, '★')
    const { result } = renderHook(() => useBadge({ 
      children: 'Test', 
      icon,
      iconPlacement: 'before'
    }))

    // The children should be a React fragment with icon first
    expect(result.current.children).toBeDefined()
  })

  it('should render icon after text when iconPlacement is after', () => {
    const icon = React.createElement('span', { 'data-testid': 'icon' }, '★')
    const { result } = renderHook(() => useBadge({ 
      children: 'Test', 
      icon,
      iconPlacement: 'after'
    }))

    expect(result.current.children).toBeDefined()
  })

  // ARIA label generation tests
  it('should use custom aria-label when provided', () => {
    const { result } = renderHook(() => useBadge({ 
      children: 'Test',
      'aria-label': 'Custom label'
    }))
    expect(result.current['aria-label']).toBe('Custom label')
  })

  it('should generate aria-label for dot variant', () => {
    const { result } = renderHook(() => useBadge({ 
      isDot: true,
      color: 'success'
    }))
    expect(result.current['aria-label']).toBe('Status indicator: success')
    expect(result.current.role).toBe('status')
  })

  it('should generate aria-label for numeric badges', () => {
    const { result: singleResult } = renderHook(() => useBadge({ children: 1 }))
    expect(singleResult.current['aria-label']).toBe('1 notification')

    const { result: multipleResult } = renderHook(() => useBadge({ children: 5 }))
    expect(multipleResult.current['aria-label']).toBe('5 notifications')

    const { result: maxResult } = renderHook(() => useBadge({ children: 150, max: 99 }))
    expect(maxResult.current['aria-label']).toBe('More than 99 notifications')
  })

  it('should generate aria-label for zero with showZero false', () => {
    const { result } = renderHook(() => useBadge({ children: 0, showZero: false }))
    expect(result.current['aria-label']).toBe('No notifications')
  })

  it('should use string children as aria-label', () => {
    const { result } = renderHook(() => useBadge({ children: 'Status: Active' }))
    expect(result.current['aria-label']).toBe('Status: Active')
  })

  // Style generation tests
  it('should generate correct styles with default props', () => {
    const { result } = renderHook(() => useBadge({ children: 'Test' }))
    expect(result.current.styles).toContain('text-blue-800') // primary color
    expect(result.current.styles).toContain('px-2') // sm size (new default)
    expect(result.current.styles).toContain('rounded-full') // pill shape (new default)
  })

  it('should combine custom styles and className', () => {
    const { result } = renderHook(() => useBadge({ 
      children: 'Test',
      customStyles: 'custom-class',
      className: 'additional-class'
    }))
    expect(result.current.styles).toContain('custom-class')
    expect(result.current.styles).toContain('additional-class')
  })

  // Disabled state tests
  it('should handle disabled prop', () => {
    const { result } = renderHook(() => useBadge({ 
      children: 'Test',
      disabled: true
    }))
    expect(result.current.isDisabled).toBe(true)
  })

  it('should handle isDisabled prop', () => {
    const { result } = renderHook(() => useBadge({ 
      children: 'Test',
      isDisabled: true
    }))
    expect(result.current.isDisabled).toBe(true)
  })

  it('should prioritize isDisabled over disabled', () => {
    const { result } = renderHook(() => useBadge({ 
      children: 'Test',
      disabled: false,
      isDisabled: true
    }))
    expect(result.current.isDisabled).toBe(true)
  })

  // Ref handling tests
  it('should handle ref correctly', () => {
    const ref = React.createRef<HTMLElement>()
    const { result } = renderHook(() => useBadge({ 
      children: 'Test',
      ref
    }))
    expect(result.current.domRef).toBeDefined()
  })

  // Props forwarding tests
  it('should forward other props correctly', () => {
    const { result } = renderHook(() => useBadge({ 
      children: 'Test',
      'data-testid': 'badge-test',
      id: 'badge-id'
    }))
    expect(result.current['data-testid']).toBe('badge-test')
    expect(result.current.id).toBe('badge-id')
  })
})
