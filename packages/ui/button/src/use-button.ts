import * as React from 'react'
import { HTMLMultiwayUIProps } from '@multiway-ui/system'

export interface UseButtonProps extends HTMLMultiwayUIProps<'div'> {
  /**
   * Ref to the DOM node.
   */
  ref?: React.RefObject<HTMLElement | null> | React.MutableRefObject<HTMLElement | null> | React.Ref<HTMLElement | null>
}

export function useButton(props: UseButtonProps) {
  const { ref, as, ...otherProps } = props

  const domRef = React.useRef(null)

  React.useImperativeHandle(ref, () => domRef.current)
  const Component = as || 'button'

  return { Component, domRef, ...otherProps }
}

export type UseButtonReturn = ReturnType<typeof useButton>
