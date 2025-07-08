import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Avatar } from '../src'

describe('Avatar', () => {
  it('should render correctly', () => {
    render(<Avatar name="John Doe" />)
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('should display custom initials', () => {
    render(<Avatar initials="AB" />)
    expect(screen.getByText('AB')).toBeInTheDocument()
  })

  it('should render image when src is provided', () => {
    render(<Avatar name="John Doe" src="test.jpg" alt="Test Avatar" />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'test.jpg')
    expect(img).toHaveAttribute('alt', 'Test Avatar')
  })

  it('should show status indicator when showStatus is true', () => {
    render(<Avatar name="John Doe" showStatus status="online" />)
    const status = screen.getByLabelText('Status: online')
    expect(status).toBeInTheDocument()
  })

  it('should be clickable when isClickable is true', () => {
    const handleClick = jest.fn()
    render(<Avatar name="John Doe" isClickable onClick={handleClick} />)
    
    const avatar = screen.getByRole('button')
    fireEvent.click(avatar)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should not be clickable when disabled', () => {
    const handleClick = jest.fn()
    render(<Avatar name="John Doe" isClickable isDisabled onClick={handleClick} />)
    
    const avatar = screen.getByRole('button')
    fireEvent.click(avatar)
    
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('should render custom icon', () => {
    const icon = <span data-testid="custom-icon">Icon</span>
    render(<Avatar icon={icon} />)
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })

  it('should render fallback when provided', () => {
    const fallback = <span data-testid="fallback">Fallback</span>
    render(<Avatar fallback={fallback} />)
    expect(screen.getByTestId('fallback')).toBeInTheDocument()
  })

  it('should generate initials from name', () => {
    render(<Avatar name="John Michael Doe" />)
    expect(screen.getByText('JM')).toBeInTheDocument()
  })

  it('should render default user icon when no name or initials', () => {
    const { container } = render(<Avatar />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('should apply custom styles', () => {
    render(<Avatar name="John Doe" customStyles="custom-class" />)
    const avatar = screen.getByText('JD').parentElement?.parentElement
    expect(avatar).toHaveClass('custom-class')
  })

  it('should position status indicator correctly for all sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

    sizes.forEach(size => {
      const { container } = render(
        <Avatar name="Test" size={size} showStatus status="online" />
      )

      const statusIndicator = container.querySelector('[aria-label="Status: online"]')
      expect(statusIndicator).toBeInTheDocument()
      expect(statusIndicator).toHaveClass('absolute', 'z-20', 'rounded-full', 'bg-green-500')

      // Check size-specific positioning
      if (size === 'xs' || size === 'sm') {
        expect(statusIndicator).toHaveClass('-bottom-0.5', '-right-0.5')
      } else if (size === 'lg' || size === 'xl') {
        expect(statusIndicator).toHaveClass('-bottom-1', '-right-1')
      } else {
        expect(statusIndicator).toHaveClass('-bottom-0.5', '-right-0.5')
      }
    })
  })

  it('should render status indicator with proper contrast border', () => {
    const { container } = render(
      <Avatar name="Test" showStatus status="online" />
    )

    const statusIndicator = container.querySelector('[aria-label="Status: online"]')
    expect(statusIndicator).toHaveClass('border-2', 'border-white', 'dark:border-gray-900')
    expect(statusIndicator).toHaveClass('ring-1', 'ring-black/10', 'dark:ring-white/10')
    expect(statusIndicator).toHaveClass('shadow-sm')
  })

  it('should work with different avatar variants', () => {
    // Test with no border
    const { container: noBorderContainer } = render(
      <Avatar name="Test" isBordered={false} showStatus status="online" />
    )
    let statusIndicator = noBorderContainer.querySelector('[aria-label="Status: online"]')
    expect(statusIndicator).toBeInTheDocument()

    // Test with different colors
    const { container: colorContainer } = render(
      <Avatar name="Test" color="danger" showStatus status="busy" />
    )
    statusIndicator = colorContainer.querySelector('[aria-label="Status: busy"]')
    expect(statusIndicator).toBeInTheDocument()
    expect(statusIndicator).toHaveClass('bg-red-500')

    // Test with different radius
    const { container: radiusContainer } = render(
      <Avatar name="Test" radius="md" showStatus status="away" />
    )
    statusIndicator = radiusContainer.querySelector('[aria-label="Status: away"]')
    expect(statusIndicator).toBeInTheDocument()
    expect(statusIndicator).toHaveClass('bg-yellow-500')
  })
})
