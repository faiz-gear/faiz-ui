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
  customStyles?: string
}

export function useMenu(props: UseMenuProps) {
  const {
    ref,
    as,
    variant = 'solid',
    color = 'default',
    size = 'md',
    selectedKey,
    onSelect,
    closeOnSelect = false,
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
        size
      }),
    [variant, color, size]
  )

  const Component = as || 'div'

  const contextValue: MenuContextValue = React.useMemo(
    () => ({
      selectedKey,
      onSelect,
      closeOnSelect,
      color,
      size,
      slots
    }),
    [selectedKey, onSelect, closeOnSelect, color, size, slots]
  )

  const baseStyles = React.useMemo(
    () => slots.base({ className: [customStyles, className].filter(Boolean).join(' ') }),
    [slots, customStyles, className]
  )

  return {
    Component,
    domRef,
    contextValue,
    baseStyles,
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
