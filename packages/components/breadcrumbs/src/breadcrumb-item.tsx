import * as React from 'react'
import { forwardRef } from '@faiz-ui/system'
import { HTMLFaizUIProps } from '@faiz-ui/system'
import { ReactRef } from '@faiz-ui/react-utils'

export interface BreadcrumbItemProps extends Omit<HTMLFaizUIProps<'a'>, 'href'> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>
  /**
   * The URL to navigate to when clicked.
   */
  href?: string
  /**
   * Whether this is the current/active breadcrumb.
   * @default false
   */
  isCurrent?: boolean
  /**
   * Whether the breadcrumb is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Slots for styling (passed from parent Breadcrumbs)
   */
  slots?: {
    link: string
    current: string
  }
  /**
   * Custom onClick handler
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const BreadcrumbItem = forwardRef<'a', BreadcrumbItemProps>((props, ref) => {
  const {
    as,
    href,
    isCurrent = false,
    isDisabled = false,
    slots,
    onClick,
    className,
    children,
    ...otherProps
  } = props

  const domRef = React.useRef(null)

  React.useImperativeHandle(ref, () => domRef.current)

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (isDisabled || isCurrent) {
      e.preventDefault()
      return
    }
    onClick?.(e)
  }

  const Component = as || (href ? 'a' : 'span')
  const itemClassName = [
    isCurrent ? slots?.current : slots?.link,
    className
  ].filter(Boolean).join(' ')

  const ariaProps = isCurrent
    ? { 'aria-current': 'page' as const }
    : {}

  return (
    <Component
      ref={domRef}
      href={!isCurrent && !isDisabled ? href : undefined}
      className={itemClassName}
      onClick={handleClick}
      {...ariaProps}
      {...otherProps}
    >
      {children}
    </Component>
  )
})

BreadcrumbItem.displayName = 'BreadcrumbItem'

export default BreadcrumbItem
