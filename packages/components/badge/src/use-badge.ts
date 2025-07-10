import * as React from 'react'
import { HTMLFaizUIProps } from '@faiz-ui/system'
import { badge, type BadgeVariantProps } from '@faiz-ui/theme'
import { ReactRef } from '@faiz-ui/react-utils'

export type UseBadgeProps = HTMLFaizUIProps<'span'> &
  BadgeVariantProps & {
    /**
     * Ref to the DOM node.
     */
    ref?: ReactRef<HTMLElement | null>
    /**
     * The content of the badge
     */
    children?: React.ReactNode
    /**
     * Whether the badge is disabled
     * @default false
     */
    disabled?: boolean
    /**
     * Whether the badge is disabled (alias for disabled)
     * @default false
     */
    isDisabled?: boolean
    /**
     * Whether the badge should be rendered as a dot
     * @default false
     */
    isDot?: boolean
    /**
     * The position of the badge when used as a notification badge
     * @default "static"
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center' | 'static'
    /**
     * Icon to display in the badge
     */
    icon?: React.ReactNode
    /**
     * Whether to show the icon before or after the content
     * @default "before"
     */
    iconPlacement?: 'before' | 'after'
    /**
     * Custom styles for the badge
     */
    customStyles?: string
    /**
     * Maximum number to display (for numeric badges)
     * Numbers above this will show as "max+"
     */
    max?: number
    /**
     * Whether to show a zero value
     * @default false
     */
    showZero?: boolean
    /**
     * ARIA label for accessibility
     */
    'aria-label'?: string
  }

export function useBadge(props: UseBadgeProps) {
  const {
    ref,
    as,
    color = 'primary',
    size = 'sm',
    shape = 'pill',
    variant = 'solid',
    disabled,
    isDisabled = disabled,
    isDot = false,
    position = 'static',
    icon,
    iconPlacement = 'before',
    className,
    customStyles,
    max,
    showZero = false,
    children,
    'aria-label': ariaLabel,
    ...otherProps
  } = props

  const domRef = React.useRef(null)

  React.useImperativeHandle(ref, () => domRef.current)

  // Process children for numeric badges
  const processedChildren = React.useMemo(() => {
    if (isDot) return null

    // Handle both number and string numbers (React passes numeric children as strings)
    const numericValue = typeof children === 'number' ? children :
                        typeof children === 'string' && !isNaN(Number(children)) ? Number(children) : null

    if (numericValue !== null) {
      if (numericValue === 0 && !showZero) return null
      if (max && numericValue > max) return `${max}+`
      return numericValue.toString()
    }

    return children
  }, [children, isDot, max, showZero])

  // Generate styles
  const styles = React.useMemo(
    () =>
      badge({
        color,
        size,
        shape,
        variant,
        isDot,
        position,
        isDisabled,
        className: [customStyles, className].filter(Boolean).join(' ')
      }),
    [color, size, shape, variant, isDot, position, isDisabled, customStyles, className]
  )

  // Generate ARIA label
  const computedAriaLabel = React.useMemo(() => {
    if (ariaLabel) return ariaLabel

    if (isDot) {
      return `Status indicator: ${color}`
    }

    // Handle processed children (which could be strings like "99+" or numbers converted to strings)
    if (processedChildren !== null && processedChildren !== undefined) {
      if (typeof processedChildren === 'string') {
        if (!isNaN(Number(processedChildren))) {
          const numValue = Number(processedChildren)
          return `${numValue} notification${numValue === 1 ? '' : 's'}`
        }
        if (processedChildren.includes('+')) {
          return `More than ${max} notifications`
        }
        return processedChildren
      }
      if (typeof processedChildren === 'number') {
        return `${processedChildren} notification${processedChildren === 1 ? '' : 's'}`
      }
    }

    // Fallback to original children if processedChildren is null/undefined
    const numericValue = typeof children === 'number' ? children :
                        typeof children === 'string' && !isNaN(Number(children)) ? Number(children) : null

    if (numericValue !== null) {
      if (numericValue === 0 && !showZero) return 'No notifications'
      if (max && numericValue > max) return `More than ${max} notifications`
      return `${numericValue} notification${numericValue === 1 ? '' : 's'}`
    }

    return typeof children === 'string' ? children : undefined
  }, [ariaLabel, isDot, color, children, processedChildren, max, showZero])

  // Prepare content data for rendering
  const contentData = React.useMemo(() => {
    if (isDot) return { hasContent: true, content: null, isDot: true }

    // If processedChildren is null (e.g., showZero=false and children=0), don't show content
    if (processedChildren === null) return { hasContent: false, content: null }

    if (!icon) return { hasContent: true, content: processedChildren }

    return {
      hasContent: true,
      icon,
      iconPlacement,
      text: processedChildren
    }
  }, [isDot, icon, iconPlacement, processedChildren])

  // For backward compatibility with tests, also return computed children
  const computedChildren = React.useMemo(() => {
    if (isDot) return null
    if (!icon) return processedChildren
    return processedChildren // For tests that expect simple content
  }, [isDot, icon, processedChildren])

  const Component = as || 'span'

  return {
    Component,
    domRef,
    styles,
    contentData,
    children: computedChildren,
    isDisabled,
    isDot,
    position,
    'aria-label': computedAriaLabel,
    role: isDot ? 'status' : 'img',
    ...otherProps
  }
}

export type UseBadgeReturn = ReturnType<typeof useBadge>
