import * as React from 'react'
import { HTMLMultiwayUIProps } from '@multiway-ui/system'
import { button, type ButtonVariantProps } from '@multiway-ui/theme'

export type UseButtonProps = HTMLMultiwayUIProps<'div'> &
  ButtonVariantProps & {
    /**
     * Ref to the DOM node.
     */
    ref?:
      | React.RefObject<HTMLElement | null>
      | React.MutableRefObject<HTMLElement | null>
      | React.Ref<HTMLElement | null>
  }

export function useButton(props: UseButtonProps) {
  const { ref, as, color, size, radius, className, ...otherProps } = props

  const domRef = React.useRef(null)

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

  return { Component, domRef, styles, ...otherProps }
}

export type UseButtonReturn = ReturnType<typeof useButton>
