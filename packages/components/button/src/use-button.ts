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
    /**
     * Whether the button is disabled.
     */
    disabled?: boolean
    /**
     * Whether the button is in loading state.
     * @default false
     */
    isLoading?: boolean
    /**
     * The icon to display before the button text.
     */
    startIcon?: React.ReactNode
    /**
     * The icon to display after the button text.
     */
    endIcon?: React.ReactNode
    /**
     * When true, the button will be displayed in the icon-only mode.
     * @default false
     */
    isIconOnly?: boolean
    /**
     * Element to be displayed when the button is in loading state.
     */
    spinner?: React.ReactNode
    /**
     * Loading text for accessibility
     * @default "Loading"
     */
    loadingText?: string
    /**
     * Custom styles for the button
     */
    customStyles?: string
  }

export function useButton(props: UseButtonProps) {
  const {
    ref,
    as,
    color = 'primary',
    size,
    radius,
    variant = 'solid',
    disabled,
    isDisabled = disabled,
    isLoading,
    startIcon,
    endIcon,
    isIconOnly,
    spinner,
    loadingText = 'Loading',
    className,
    onClick,
    customStyles,
    ...otherProps
  } = props

  const domRef = React.useRef(null)
  const rippleRef = React.useRef<React.ElementRef<typeof Ripple>>(null)

  React.useImperativeHandle(ref, () => domRef.current)

  const styles = React.useMemo(
    () =>
      button({
        color,
        size,
        radius,
        variant,
        isDisabled,
        isLoading,
        isIconOnly,
        className: [customStyles, className].filter(Boolean).join(' ')
      }),
    [color, size, radius, variant, isDisabled, isLoading, isIconOnly, customStyles, className]
  )

  const handleClick: UseButtonProps['onClick'] = (e) => {
    if (isDisabled || isLoading) return

    onClick?.(e)
    rippleRef?.current?.addRipple?.(e)
  }

  const Component = as || 'button'

  return {
    Component,
    domRef,
    rippleRef,
    styles,
    handleClick,
    isLoading,
    isDisabled,
    startIcon,
    endIcon,
    isIconOnly,
    spinner,
    loadingText,
    children: props.children,
    ...otherProps
  }
}

export type UseButtonReturn = ReturnType<typeof useButton>
