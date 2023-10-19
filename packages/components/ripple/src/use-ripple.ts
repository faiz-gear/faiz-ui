import { useSpring } from '@react-spring/web'
import { useCallback, MouseEvent, useState, Key, useImperativeHandle } from 'react'
import { ReactRef } from '@faiz-ui/react-utils'

export interface UseRippleProps {
  /**
   * Ref to the Ripple.
   */
  ref?: ReactRef<{
    addRipple: (e: MouseEvent<HTMLElement>) => void
  }>
}

export type TRipple = {
  key: Key
  x: number
  y: number
  size: number
}

export function useRipple(props: UseRippleProps) {
  const { ref } = props
  const [ripples, setRipples] = useState<TRipple[]>([])

  const onClick = useCallback((e: MouseEvent<HTMLElement>) => {
    const target = e.currentTarget
    const { width, height, x, y } = target.getBoundingClientRect()
    const size = Math.max(width, height)
    setRipples((pre) => [
      ...pre,
      {
        key: Date.now(),
        x: e.clientX - x - size / 2,
        y: e.clientY - y - size / 2,
        size
      }
    ])
  }, [])

  const onClear = useCallback((key: Key) => {
    console.log('🚀 ~ file: use-ripple.ts ~ line 41 ~ onClear ~ key', key)
    setRipples((pre) => pre.filter((ripple) => ripple.key !== key))
  }, [])

  useImperativeHandle(ref, () => ({
    addRipple: onClick
  }))

  return { ripples, onClick, onClear }
}

export type UseRippleReturn = ReturnType<typeof useRipple>
