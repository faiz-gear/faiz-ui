import { forwardRef } from '@faiz-ui/system'
import { UseButtonProps, useButton } from './use-button'
import { Ripple } from '@faiz-ui/ripple'

export interface ButtonProps extends UseButtonProps {}

const Button = forwardRef<'button', ButtonProps>((props, ref) => {
  const {
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
    children,
    ...otherProps
  } = useButton({ ...props, ref })

  // 方正手绘风格的加载指示器
  const handDrawnSpinner = (
    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 方形外框 */}
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 2"
        fill="none"
      />

      {/* 加载指示点 */}
      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      <circle cx="18" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="18" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="6" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  )

  // Render button content based on props
  const renderContent = () => {
    // Loading spinner content
    if (isLoading && !spinner) {
      return (
        <>
          {handDrawnSpinner}
          <span>{loadingText}</span>
        </>
      )
    }

    // Start icon + children + end icon
    return (
      <>
        {isLoading && (spinner || handDrawnSpinner)}
        {isLoading && <span>{loadingText}</span>}
        {startIcon && !isIconOnly && <span className="button-start-icon">{startIcon}</span>}
        {!isIconOnly && children}
        {isIconOnly && (startIcon || endIcon || children)}
        {endIcon && !isIconOnly && <span className="button-end-icon">{endIcon}</span>}
      </>
    )
  }

  return (
    <Component ref={domRef} className={styles} onClick={handleClick} disabled={isDisabled} {...otherProps}>
      {renderContent()}
      <Ripple ref={rippleRef} />
    </Component>
  )
})

Button.displayName = 'Button'

export default Button
