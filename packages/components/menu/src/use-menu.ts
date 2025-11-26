import * as React from 'react'
import { HTMLFaizUIProps } from '@faiz-ui/system'
import { menu, type MenuVariantProps } from '@faiz-ui/theme'
import { ReactRef } from '@faiz-ui/react-utils'

// Context for Menu
interface MenuContextValue {
  selectedKey?: string
  onSelect?: (key: string) => void
  closeOnSelect?: boolean
  color?: MenuVariantProps['color']
  size?: MenuVariantProps['size']
  orientation?: MenuVariantProps['orientation']
  isCompact?: boolean
  slots: ReturnType<typeof menu>
}

const MenuContext = React.createContext<MenuContextValue | null>(null)

export const useMenuContext = () => {
  const context = React.useContext(MenuContext)
  if (!context) {
    throw new Error('useMenuContext must be used within a Menu component')
  }
  return context
}

// Menu Props
export interface UseMenuProps
  extends Omit<HTMLFaizUIProps<'div'>, 'onSelect'>,
    MenuVariantProps {
  ref?: ReactRef<HTMLElement | null>
  selectedKey?: string
  onSelect?: (key: string) => void
  closeOnSelect?: boolean
  title?: string
  customStyles?: string
}

export function useMenu(props: UseMenuProps) {
  const {
    ref,
    as,
    variant = 'solid',
    color = 'default',
    size = 'md',
    orientation = 'vertical',
    isCompact = false,
    selectedKey,
    onSelect,
    closeOnSelect = false,
    title,
    className,
    customStyles,
    ...otherProps
  } = props

  const domRef = React.useRef(null)

  React.useImperativeHandle(ref, () => domRef.current)

  const slots = React.useMemo(
    () =>
      menu({
        variant,
        color,
        size,
        orientation,
        isCompact
      }),
    [variant, color, size, orientation, isCompact]
  )

  const Component = as || 'div'

  const contextValue: MenuContextValue = React.useMemo(
    () => ({
      selectedKey,
      onSelect,
      closeOnSelect,
      color,
      size,
      orientation,
      isCompact,
      slots
    }),
    [selectedKey, onSelect, closeOnSelect, color, size, orientation, isCompact, slots]
  )

  const baseStyles = React.useMemo(
    () => slots.base({ className: [customStyles, className].filter(Boolean).join(' ') }),
    [slots, customStyles, className]
  )

  const titleStyles = React.useMemo(() => slots.title(), [slots])

  return {
    Component,
    domRef,
    contextValue,
    baseStyles,
    titleStyles,
    title,
    MenuContext,
    children: props.children,
    ...otherProps
  }
}

export type UseMenuReturn = ReturnType<typeof useMenu>

// MenuItem Props
export interface UseMenuItemProps extends HTMLFaizUIProps<'div'> {
  ref?: ReactRef<HTMLElement | null>
  itemKey?: string
  isDisabled?: boolean
  isSelected?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  description?: string
  onClick?: (e: React.MouseEvent) => void
  customStyles?: string
}

export function useMenuItem(props: UseMenuItemProps) {
  const {
    ref,
    as,
    itemKey,
    isDisabled = false,
    isSelected: isSelectedProp,
    startIcon,
    endIcon,
    description,
    onClick,
    className,
    customStyles,
    ...otherProps
  } = props

  const context = useMenuContext()
  const domRef = React.useRef(null)

  React.useImperativeHandle(ref, () => domRef.current)

  const isSelected = isSelectedProp ?? (itemKey !== undefined && context.selectedKey === itemKey)

  const itemStyles = React.useMemo(
    () =>
      context.slots.item({
        isDisabled,
        isSelected,
        className: [customStyles, className].filter(Boolean).join(' ')
      }),
    [context.slots, isDisabled, isSelected, customStyles, className]
  )

  const handleClick = (e: React.MouseEvent) => {
    if (isDisabled) return

    onClick?.(e)

    if (itemKey && context.onSelect) {
      context.onSelect(itemKey)
    }
  }

  const Component = as || 'div'

  return {
    Component,
    domRef,
    itemStyles,
    iconStyles: context.slots.itemIcon(),
    contentStyles: context.slots.itemContent(),
    descriptionStyles: context.slots.itemDescription(),
    handleClick,
    isDisabled,
    startIcon,
    endIcon,
    description,
    children: props.children,
    ...otherProps
  }
}

export type UseMenuItemReturn = ReturnType<typeof useMenuItem>

// MenuSection Props
export interface UseMenuSectionProps extends HTMLFaizUIProps<'div'> {
  ref?: ReactRef<HTMLElement | null>
  title?: string
  customStyles?: string
}

export function useMenuSection(props: UseMenuSectionProps) {
  const { ref, as, title, className, customStyles, ...otherProps } = props

  const context = useMenuContext()
  const domRef = React.useRef(null)

  React.useImperativeHandle(ref, () => domRef.current)

  const sectionStyles = React.useMemo(
    () => context.slots.section({ className: [customStyles, className].filter(Boolean).join(' ') }),
    [context.slots, customStyles, className]
  )

  const Component = as || 'div'

  return {
    Component,
    domRef,
    sectionStyles,
    titleStyles: context.slots.sectionTitle(),
    title,
    children: props.children,
    ...otherProps
  }
}

export type UseMenuSectionReturn = ReturnType<typeof useMenuSection>

// MenuDivider Props
export interface UseMenuDividerProps extends HTMLFaizUIProps<'hr'> {
  ref?: ReactRef<HTMLElement | null>
  customStyles?: string
}

export function useMenuDivider(props: UseMenuDividerProps) {
  const { ref, as, className, customStyles, ...otherProps } = props

  const context = useMenuContext()
  const domRef = React.useRef(null)

  React.useImperativeHandle(ref, () => domRef.current)

  const dividerStyles = React.useMemo(
    () => context.slots.divider({ className: [customStyles, className].filter(Boolean).join(' ') }),
    [context.slots, customStyles, className]
  )

  const Component = as || 'hr'

  return {
    Component,
    domRef,
    dividerStyles,
    ...otherProps
  }
}

export type UseMenuDividerReturn = ReturnType<typeof useMenuDivider>

// MenuSubmenu Props
export interface UseMenuSubmenuProps extends HTMLFaizUIProps<'div'> {
  ref?: ReactRef<HTMLElement | null>
  label: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  defaultOpen?: boolean
  isDisabled?: boolean
  customStyles?: string
}

export function useMenuSubmenu(props: UseMenuSubmenuProps) {
  const {
    ref,
    as,
    label,
    startIcon,
    endIcon,
    defaultOpen = false,
    isDisabled = false,
    className,
    customStyles,
    ...otherProps
  } = props

  const context = useMenuContext()
  const domRef = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  React.useImperativeHandle(ref, () => domRef.current)

  const toggleSubmenu = () => {
    if (!isDisabled) {
      setIsOpen((prev) => !prev)
    }
  }

  const submenuStyles = React.useMemo(
    () => context.slots.submenu({ className: [customStyles, className].filter(Boolean).join(' ') }),
    [context.slots, customStyles, className]
  )

  const triggerStyles = React.useMemo(
    () =>
      context.slots.item({
        isDisabled,
        className: context.slots.submenuTrigger()
      }),
    [context.slots, isDisabled]
  )

  const submenuIconStyles = React.useMemo(
    () => context.slots.submenuIcon({ isOpen }),
    [context.slots, isOpen]
  )

  const contentStyles = React.useMemo(
    () => context.slots.submenuContent(),
    [context.slots]
  )

  const Component = as || 'div'

  return {
    Component,
    domRef,
    submenuStyles,
    triggerStyles,
    submenuIconStyles,
    contentStyles,
    iconStyles: context.slots.itemIcon(),
    itemContentStyles: context.slots.itemContent(),
    label,
    startIcon,
    endIcon,
    isOpen,
    isDisabled,
    toggleSubmenu,
    children: props.children,
    ...otherProps
  }
}

export type UseMenuSubmenuReturn = ReturnType<typeof useMenuSubmenu>
