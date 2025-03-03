import { forwardRef } from '@faiz-ui/system'
import { UseAlertProps, useAlert } from './use-alert'

export interface AlertProps extends UseAlertProps {}

const Alert = forwardRef<'div', AlertProps>((props, ref) => {
  const { Component, domRef, styles, icon, action, isVisible, handleClose, children, ...otherProps } = useAlert({
    ...props,
    ref
  })

  if (!isVisible) {
    return null
  }

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {icon && <div className="flex-shrink-0 mt-0.5">{icon}</div>}
      <div className="flex-grow">{children}</div>
      {action && <div className="flex-shrink-0 ml-auto">{action}</div>}
      {props.onClose && (
        <button
          type="button"
          className="flex-shrink-0 ml-2 -mr-1 p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          onClick={handleClose}
          aria-label="关闭"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </Component>
  )
})

Alert.displayName = 'Alert'

export default Alert
