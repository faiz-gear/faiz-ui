import { forwardRef } from '@faiz-ui/system'
import { UseButtonProps, useButton } from './use-button'
import { Ripple } from '@faiz-ui/ripple'

export interface ButtonProps extends UseButtonProps {}

const Button = forwardRef<'button', ButtonProps>((props, ref) => {
  const { Component, domRef, rippleRef, children, styles, handleClick, ...otherProps } = useButton({ ...props, ref })
  return (
    <Component ref={domRef} className={styles} onClick={handleClick} {...otherProps}>
      {children}
      <Ripple ref={rippleRef} />
    </Component>
  )
})

Button.displayName = 'Button'

export default Button
