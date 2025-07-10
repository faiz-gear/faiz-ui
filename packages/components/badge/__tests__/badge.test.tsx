import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Badge } from '../src'

describe('Badge Component', () => {
  // Basic rendering tests
  it('should render badge with text content', () => {
    render(<Badge>Test Badge</Badge>)
    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  it('should render badge with numeric content', () => {
    render(<Badge>5</Badge>)
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>()
    render(<Badge ref={ref}>Test Badge</Badge>)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('SPAN')
  })

  it('should support custom element via as prop', () => {
    render(<Badge as="div">Test Badge</Badge>)
    const badge = screen.getByText('Test Badge')
    expect(badge.tagName).toBe('DIV')
  })

  // Color variants tests
  it('should apply correct color classes', () => {
    const { rerender } = render(<Badge color="primary">Primary</Badge>)
    expect(screen.getByText('Primary')).toHaveClass('text-blue-800')

    rerender(<Badge color="success">Success</Badge>)
    expect(screen.getByText('Success')).toHaveClass('text-green-800')

    rerender(<Badge color="error">Error</Badge>)
    expect(screen.getByText('Error')).toHaveClass('text-red-800')
  })

  // Size variants tests
  it('should apply correct size classes', () => {
    const { rerender } = render(<Badge size="xs">XS Badge</Badge>)
    expect(screen.getByText('XS Badge')).toHaveClass('px-1.5', 'py-0.5', 'text-[10px]')

    rerender(<Badge size="lg">LG Badge</Badge>)
    expect(screen.getByText('LG Badge')).toHaveClass('px-3', 'py-1', 'text-sm')
  })

  // Shape variants tests
  it('should apply correct shape classes', () => {
    const { rerender } = render(<Badge shape="pill">Pill Badge</Badge>)
    expect(screen.getByText('Pill Badge')).toHaveClass('rounded-full')

    rerender(<Badge shape="square">Square Badge</Badge>)
    expect(screen.getByText('Square Badge')).toHaveClass('rounded-sm')
  })

  // Variant tests
  it('should apply correct variant classes', () => {
    const { rerender } = render(<Badge variant="outline">Outline</Badge>)
    expect(screen.getByText('Outline')).toHaveClass('bg-transparent', 'border', 'border-current')

    rerender(<Badge variant="ghost">Ghost</Badge>)
    expect(screen.getByText('Ghost')).toHaveClass('bg-transparent')
  })

  // Dot variant tests
  it('should render as dot when isDot is true', () => {
    render(<Badge isDot color="success" aria-label="Online status" />)
    const dot = screen.getByLabelText('Online status')
    expect(dot).toHaveClass('w-2', 'h-2', 'rounded-full')
    expect(dot).toHaveAttribute('role', 'status')
  })

  // Position tests
  it('should apply correct position classes', () => {
    const { rerender } = render(<Badge position="top-right">Notification</Badge>)
    expect(screen.getByText('Notification')).toHaveClass('absolute', '-top-1', '-right-1')

    rerender(<Badge position="bottom-left">Bottom Left</Badge>)
    expect(screen.getByText('Bottom Left')).toHaveClass('absolute', '-bottom-1', '-left-1')
  })

  // Disabled state tests
  it('should apply disabled styles when isDisabled is true', () => {
    render(<Badge isDisabled>Disabled Badge</Badge>)
    const badge = screen.getByText('Disabled Badge')
    expect(badge).toHaveClass('opacity-40', 'cursor-not-allowed')
    expect(badge).toHaveAttribute('data-disabled', 'true')
  })

  // Icon tests
  it('should render with icon before text', () => {
    const icon = <span data-testid="test-icon">★</span>
    render(<Badge icon={icon}>With Icon</Badge>)
    
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
    expect(screen.getByText('With Icon')).toBeInTheDocument()
  })

  it('should render with icon after text', () => {
    const icon = <span data-testid="test-icon">★</span>
    render(<Badge icon={icon} iconPlacement="after">With Icon</Badge>)
    
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
    expect(screen.getByText('With Icon')).toBeInTheDocument()
  })

  // Numeric badge tests
  it('should handle max prop for numeric badges', () => {
    const { rerender } = render(<Badge max={99}>150</Badge>)
    expect(screen.getByText('99+')).toBeInTheDocument()

    rerender(<Badge max={99}>50</Badge>)
    expect(screen.getByText('50')).toBeInTheDocument()
  })

  it('should handle showZero prop', () => {
    const { rerender } = render(<Badge showZero={false}>0</Badge>)
    expect(screen.queryByText('0')).not.toBeInTheDocument()

    rerender(<Badge showZero={true}>0</Badge>)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  // Accessibility tests
  it('should have proper ARIA attributes', () => {
    render(<Badge aria-label="Custom label">Badge</Badge>)
    expect(screen.getByLabelText('Custom label')).toBeInTheDocument()
  })

  it('should generate appropriate ARIA labels for numeric badges', () => {
    const { rerender } = render(<Badge>5</Badge>)
    expect(screen.getByLabelText('5 notifications')).toBeInTheDocument()

    rerender(<Badge>1</Badge>)
    expect(screen.getByLabelText('1 notification')).toBeInTheDocument()
  })

  // Custom styles tests
  it('should apply custom styles', () => {
    render(<Badge customStyles="custom-class">Custom Badge</Badge>)
    expect(screen.getByText('Custom Badge')).toHaveClass('custom-class')
  })

  it('should combine custom styles with className', () => {
    render(<Badge customStyles="custom-class" className="additional-class">Badge</Badge>)
    const badge = screen.getByText('Badge')
    expect(badge).toHaveClass('custom-class')
    expect(badge).toHaveClass('additional-class')
  })
})
