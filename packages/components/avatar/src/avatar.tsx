import { forwardRef } from '@faiz-ui/system'
import { UseAvatarProps, useAvatar } from './use-avatar'

export interface AvatarProps extends UseAvatarProps {}

const Avatar = forwardRef<'div', AvatarProps>((props, ref) => {
  const {
    Component,
    domRef,
    avatarStyles,
    statusStyles,
    showStatus,
    isClickable,
    handleClick,
    contentType,
    src,
    alt,
    icon,
    fallback,
    generatedInitials,
    imageError,
    imageLoaded,
    handleImageError,
    handleImageLoad,
    children,
    ...otherProps
  } = useAvatar({ ...props, ref })

  // Render content based on type
  const renderContent = () => {
    switch (contentType) {
      case 'icon':
        return <>{icon}</>

      case 'image':
        return (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={handleImageError}
            onLoad={handleImageLoad}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        )

      case 'fallback':
        return <>{fallback}</>

      case 'initials':
        return (
          <span className="font-semibold">
            {generatedInitials}
          </span>
        )

      case 'default':
      default:
        return (
          <svg
            className="w-3/5 h-3/5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        )
    }
  }

  return (
    <Component
      ref={domRef}
      className={avatarStyles}
      onClick={isClickable ? handleClick : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      style={{ cursor: isClickable ? 'pointer' : 'default' }}
      {...otherProps}
    >
      {/* Content wrapper with overflow hidden */}
      <div className="absolute inset-0 overflow-hidden rounded-[inherit] flex items-center justify-center">
        {renderContent()}
        {children}
      </div>
      {/* Status indicator positioned outside content area */}
      {showStatus && (
        <span className={statusStyles} aria-label={`Status: ${props.status || 'online'}`} />
      )}
    </Component>
  )
})

Avatar.displayName = 'Avatar'

export default Avatar
