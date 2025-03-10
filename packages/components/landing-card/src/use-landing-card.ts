import * as React from 'react'
import { HTMLFaizUIProps } from '@faiz-ui/system'
import { landingCardContainer, landingCardWrapper, type LandingCardContainerVariantProps } from '@faiz-ui/theme'
import { useCallback, useEffect } from 'react'
import styled from 'styled-components'

export type UseLandingCardProps = HTMLFaizUIProps<'div'> &
  LandingCardContainerVariantProps & {
    /**
     * Ref to the DOM node.
     */
    ref?:
      | React.RefObject<HTMLElement | null>
      | React.MutableRefObject<HTMLElement | null>
      | React.Ref<HTMLElement | null>
  }

export function useLandingCard(props: UseLandingCardProps) {
  const { ref, as, color, ...otherProps } = props

  const domRef = React.useRef<HTMLDivElement>(null)

  const landingCardContainerClassNames = React.useMemo(() => landingCardContainer({ color }), [color])
  const landingCardWrapperClassNames = React.useMemo(() => landingCardWrapper(), [])

  const classnames = {
    container: landingCardContainerClassNames,
    wrapper: landingCardWrapperClassNames
  }

  const landingCardContainerStyles = {
    background: ' radial-gradient(250px circle at var(--x) var(--y),var(--tw-gradient-from) 0,transparent 100%)',
    'will-change': 'background'
  }

  const styles = {
    ...landingCardContainerStyles
  }

  const onMouseMove = useCallback((ev: React.MouseEvent<HTMLDivElement>) => {
    const dom = domRef.current
    if (!dom) return
    const { x, y } = dom.getBoundingClientRect()
    console.log('=>(use-landing-card.ts:55) y', y)
    dom.style.setProperty('--x', ev.pageX - x + 'px')
    dom.style.setProperty('--y', ev.pageY - y + 'px')
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove as unknown as EventListener)
  }, [])

  React.useImperativeHandle(ref, () => domRef.current)
  const radialGradient = ` 250px circle at var(--x) var(--y),
        var(--tw-gradient-from) 0,
        transparent 100%`
  const Component = styled(as || 'div')`
    &:before {
      background: radial-gradient(${radialGradient});
      will-change: background;
    }
  `

  return { Component, domRef, classnames, styles, ...otherProps }
}

export type UseLandingCardReturn = ReturnType<typeof useLandingCard>
