import * as React from 'react'
import { HTMLFaizUIProps } from '@faiz-ui/system'
import { breadcrumbs, type BreadcrumbsVariantProps } from '@faiz-ui/theme'
import { ReactRef } from '@faiz-ui/react-utils'

export type UseBreadcrumbsProps = HTMLFaizUIProps<'nav'> &
  BreadcrumbsVariantProps & {
    /**
     * Ref to the DOM node.
     */
    ref?: ReactRef<HTMLElement | null>
    /**
     * The separator between breadcrumb items.
     * @default "/"
     */
    separator?: React.ReactNode
    /**
     * Custom styles for the breadcrumbs
     */
    customStyles?: {
      base?: string
      item?: string
      link?: string
      separator?: string
      current?: string
    }
  }

export function useBreadcrumbs(props: UseBreadcrumbsProps) {
  const {
    ref,
    as,
    size = 'md',
    color = 'primary',
    variant = 'solid',
    underline = 'none',
    separator = '/',
    className,
    customStyles,
    ...otherProps
  } = props

  const domRef = React.useRef(null)

  React.useImperativeHandle(ref, () => domRef.current)

  const styles = React.useMemo(
    () =>
      breadcrumbs({
        size,
        color,
        variant,
        underline
      }),
    [size, color, variant, underline]
  )

  const slots = React.useMemo(() => {
    return {
      base: [styles.base(), customStyles?.base, className].filter(Boolean).join(' '),
      item: [styles.item(), customStyles?.item].filter(Boolean).join(' '),
      link: [styles.link(), customStyles?.link].filter(Boolean).join(' '),
      separator: [styles.separator(), customStyles?.separator].filter(Boolean).join(' '),
      current: [styles.current(), customStyles?.current].filter(Boolean).join(' ')
    }
  }, [styles, customStyles, className])

  const Component = as || 'nav'

  return {
    Component,
    domRef,
    slots,
    separator,
    ...otherProps
  }
}

export type UseBreadcrumbsReturn = ReturnType<typeof useBreadcrumbs>
