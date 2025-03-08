'use client'

import * as React from 'react'
import { HTMLFaizUIProps } from '@faiz-ui/system'
import { alert, type AlertVariantProps } from '@faiz-ui/theme'
import { ReactRef } from '@faiz-ui/react-utils'

export type UseAlertProps = HTMLFaizUIProps<'div'> &
  AlertVariantProps & {
    /**
     * Ref to the DOM node.
     */
    ref?: ReactRef<HTMLElement | null>
    /**
     * The icon to display in the alert.
     */
    icon?: React.ReactNode
    /**
     * Whether to hide the icon.
     * @default false
     */
    hideIcon?: boolean
    /**
     * Action component to display in the alert.
     */
    action?: React.ReactNode
    /**
     * Whether the alert is visible.
     * @default true
     */
    isVisible?: boolean
    /**
     * Callback fired when the alert is closed.
     */
    onClose?: () => void
    /**
     * Custom styles for the alert
     */
    customStyles?: string
  }

export function useAlert(props: UseAlertProps) {
  const {
    ref,
    as,
    color,
    radius,
    variant,
    hideIcon,
    icon,
    action,
    isVisible = true,
    onClose,
    className,
    customStyles,
    ...otherProps
  } = props

  const domRef = React.useRef<HTMLDivElement>(null)

  React.useImperativeHandle(ref, () => domRef.current)

  // 根据颜色生成默认图标
  const defaultIcon = React.useMemo(() => {
    if (hideIcon) return null

    switch (color) {
      case 'success':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case 'warning':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 9V13M12 17H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case 'danger':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 9V13M12 17H12.01M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case 'info':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
    }
  }, [color, hideIcon])

  const styles = React.useMemo(
    () =>
      alert({
        color,
        radius,
        variant,
        hideIcon,
        className: [customStyles, className].filter(Boolean).join(' ')
      }),
    [color, radius, variant, hideIcon, customStyles, className]
  )

  const handleClose = React.useCallback(() => {
    onClose?.()
  }, [onClose])

  const Component = as || 'div'

  return {
    Component,
    domRef,
    styles,
    icon: icon || defaultIcon,
    action,
    isVisible,
    handleClose,
    children: props.children,
    ...otherProps
  }
}

export type UseAlertReturn = ReturnType<typeof useAlert>
