import React from 'react'
import { renderHook, act } from '@testing-library/react'
import { useAvatar } from '../src'

describe('useAvatar', () => {
  it('should return correct default values', () => {
    const { result } = renderHook(() => useAvatar({}))
    
    expect(result.current.Component).toBe('div')
    expect(result.current.showStatus).toBe(false)
    expect(result.current.isClickable).toBe(false)
  })

  it('should generate initials from name', () => {
    const { result } = renderHook(() => useAvatar({ name: 'John Doe' }))

    expect(result.current.generatedInitials).toBe('JD')
    expect(result.current.contentType).toBe('initials')
  })

  it('should use custom initials when provided', () => {
    const { result } = renderHook(() => useAvatar({ name: 'John Doe', initials: 'AB' }))

    expect(result.current.generatedInitials).toBe('AB')
    expect(result.current.contentType).toBe('initials')
  })

  it('should handle click when clickable', () => {
    const onClick = jest.fn()
    const { result } = renderHook(() => useAvatar({ isClickable: true, onClick }))
    
    const mockEvent = { preventDefault: jest.fn() } as any
    act(() => {
      result.current.handleClick(mockEvent)
    })
    
    expect(onClick).toHaveBeenCalledWith(mockEvent)
  })

  it('should not handle click when disabled', () => {
    const onClick = jest.fn()
    const { result } = renderHook(() => useAvatar({ 
      isClickable: true, 
      isDisabled: true, 
      onClick 
    }))
    
    const mockEvent = { preventDefault: jest.fn() } as any
    act(() => {
      result.current.handleClick(mockEvent)
    })
    
    expect(onClick).not.toHaveBeenCalled()
  })

  it('should return correct styles', () => {
    const { result } = renderHook(() => useAvatar({ 
      color: 'primary',
      size: 'md',
      radius: 'full'
    }))
    
    expect(result.current.avatarStyles).toContain('text-blue-800')
    expect(result.current.avatarStyles).toContain('w-10')
    expect(result.current.avatarStyles).toContain('rounded-full')
  })

  it('should handle status styles', () => {
    const { result } = renderHook(() => useAvatar({ 
      showStatus: true,
      status: 'online',
      size: 'md'
    }))
    
    expect(result.current.statusStyles).toContain('bg-green-500')
    expect(result.current.statusStyles).toContain('w-3')
  })
})
