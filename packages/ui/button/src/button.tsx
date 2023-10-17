import { forwardRef } from '@multiway-ui/system'
import { UseButtonProps, useButton } from './use-button'

export interface ButtonProps extends UseButtonProps {}

const Button = forwardRef<'button', ButtonProps>((props, ref) => {
  const { Component, domRef, children, className, ...otherProps } = useButton({ ...props, ref })
  return (
    <Component ref={domRef} className={className} {...otherProps}>
      {children}
    </Component>
  )
})

Button.displayName = 'Button'

export default Button
