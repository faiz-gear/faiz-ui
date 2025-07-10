import { forwardRef } from '@faiz-ui/system'
import { UseBadgeProps, useBadge } from './use-badge'

export interface BadgeProps extends UseBadgeProps {}

const Badge = forwardRef<'span', BadgeProps>((props, ref) => {
  const {
    Component,
    domRef,
    styles,
    contentData,
    children,
    isDisabled,
    isDot,
    position,
    ...otherProps
  } = useBadge({ ...props, ref })

  // Render content based on contentData
  const renderContent = () => {
    if (isDot) return null // Dot variants have no content
    if (!contentData.hasContent) return null

    if (!contentData.icon) return contentData.content

    const iconElement = <span className="badge-icon">{contentData.icon}</span>
    const textElement = contentData.text ? <span className="badge-text">{contentData.text}</span> : null

    if (contentData.iconPlacement === 'after') {
      return (
        <>
          {textElement}
          {iconElement}
        </>
      )
    }

    return (
      <>
        {iconElement}
        {textElement}
      </>
    )
  }

  // If contentData doesn't have content and it's not a dot variant, don't render
  if (!contentData.hasContent && !isDot) return null

  return (
    <Component
      ref={domRef}
      className={styles}
      data-disabled={isDisabled}
      data-dot={isDot}
      data-position={position}
      {...otherProps}
    >
      {renderContent()}
    </Component>
  )
})

Badge.displayName = 'Badge'

export default Badge
