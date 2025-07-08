import * as React from 'react'
import { HTMLFaizUIProps } from '@faiz-ui/system'
import { avatar, avatarStatus, type AvatarVariantProps, type AvatarStatusVariantProps } from '@faiz-ui/theme'
import { ReactRef } from '@faiz-ui/react-utils'

export type UseAvatarProps = HTMLFaizUIProps<'div'> &
  AvatarVariantProps & {
    /**
     * Ref to the DOM node.
     */
    ref?: ReactRef<HTMLElement | null>
    /**
     * The source URL of the avatar image.
     */
    src?: string
    /**
     * The alt text for the avatar image.
     */
    alt?: string
    /**
     * The name of the user. Used to generate initials when image is not available.
     */
    name?: string
    /**
     * Custom initials to display instead of generated ones.
     */
    initials?: string
    /**
     * Whether to show a status indicator.
     * @default false
     */
    showStatus?: boolean
    /**
     * The status of the user.
     * @default "online"
     */
    status?: AvatarStatusVariantProps['status']
    /**
     * Custom icon to display instead of image or initials.
     */
    icon?: React.ReactNode
    /**
     * Fallback component to render when image fails to load.
     */
    fallback?: React.ReactNode
    /**
     * Callback fired when the image fails to load.
     */
    onError?: () => void
    /**
     * Whether the avatar is clickable.
     * @default false
     */
    isClickable?: boolean
    /**
     * Custom styles for the avatar
     */
    customStyles?: string
  }

export function useAvatar(props: UseAvatarProps) {
  const {
    ref,
    as,
    src,
    alt,
    name,
    initials: customInitials,
    showStatus = false,
    status = 'online',
    icon,
    fallback,
    onError,
    isClickable = false,
    color = 'primary',
    size = 'md',
    radius = 'full',
    isBordered = true,
    isDisabled = false,
    className,
    customStyles,
    onClick,
    ...otherProps
  } = props

  const domRef = React.useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = React.useState(false)
  const [imageLoaded, setImageLoaded] = React.useState(false)

  React.useImperativeHandle(ref, () => domRef.current)

  // Generate initials from name
  const generatedInitials = React.useMemo(() => {
    if (customInitials) return customInitials
    if (!name) return ''
    
    return name
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0).toUpperCase())
      .join('')
  }, [name, customInitials])

  // Handle image error
  const handleImageError = React.useCallback(() => {
    setImageError(true)
    onError?.()
  }, [onError])

  // Handle image load
  const handleImageLoad = React.useCallback(() => {
    setImageLoaded(true)
    setImageError(false)
  }, [])

  // Reset image state when src changes
  React.useEffect(() => {
    if (src) {
      setImageError(false)
      setImageLoaded(false)
    }
  }, [src])

  // Avatar styles
  const avatarStyles = React.useMemo(
    () =>
      avatar({
        color,
        size,
        radius,
        isBordered,
        isDisabled,
        className: [customStyles, className].filter(Boolean).join(' ')
      }),
    [color, size, radius, isBordered, isDisabled, customStyles, className]
  )

  // Status indicator styles
  const statusStyles = React.useMemo(
    () =>
      avatarStatus({
        size,
        status
      }),
    [size, status]
  )

  // Handle click
  const handleClick = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled || !isClickable) return
    onClick?.(e)
  }, [isDisabled, isClickable, onClick])

  // Determine content type to render
  const getContentType = () => {
    if (icon) return 'icon'
    if (src && !imageError) return 'image'
    if (fallback) return 'fallback'
    if (generatedInitials) return 'initials'
    return 'default'
  }

  const contentType = getContentType()

  const Component = as || 'div'

  return {
    Component,
    domRef,
    avatarStyles,
    statusStyles,
    showStatus,
    isClickable,
    handleClick,
    contentType,
    src,
    alt: alt || name || 'Avatar',
    icon,
    fallback,
    generatedInitials,
    imageError,
    imageLoaded,
    handleImageError,
    handleImageLoad,
    children: props.children,
    ...otherProps
  }
}

export type UseAvatarReturn = ReturnType<typeof useAvatar>
