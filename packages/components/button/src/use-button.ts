import * as React from 'react'
import { HTMLFaizUIProps } from '@faiz-ui/system'
import { button, type ButtonVariantProps } from '@faiz-ui/theme'
import { ReactRef } from '@faiz-ui/react-utils'
import { Ripple } from '@faiz-ui/ripple'

export type UseButtonProps = HTMLFaizUIProps<'button'> &
  ButtonVariantProps & {
    /**
     * Ref to the DOM node.
     */
    ref?: ReactRef<HTMLElement | null>
  }

export function useButton(props: UseButtonProps) {
  const { ref, as, color, size, radius, className, onClick, ...otherProps } = props

  const domRef = React.useRef(null)
  const rippleRef = React.useRef<React.ElementRef<typeof Ripple>>(null)

  const styles = React.useMemo(
    () =>
      button({
        color,
        size,
        radius,
        className
      }),
    [color, size, radius]
  )

  React.useImperativeHandle(ref, () => domRef.current)
  const Component = as || 'button'

  const handleClick: UseButtonProps['onClick'] = (e) => {
    onClick?.(e)
    rippleRef?.current?.addRipple?.(e)
  }

  return { Component, domRef, rippleRef, styles, handleClick, ...otherProps }
}

export type UseButtonReturn = ReturnType<typeof useButton>
