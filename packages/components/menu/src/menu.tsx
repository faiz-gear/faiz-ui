import { forwardRef } from '@faiz-ui/system'
import {
  UseMenuProps,
  useMenu,
  UseMenuItemProps,
  useMenuItem,
  UseMenuSectionProps,
  useMenuSection,
  UseMenuDividerProps,
  useMenuDivider,
  UseMenuSubmenuProps,
  useMenuSubmenu
} from './use-menu'

export interface MenuProps extends UseMenuProps {}

const Menu = forwardRef<'div', MenuProps>((props, ref) => {
  const { Component, domRef, contextValue, baseStyles, titleStyles, title, MenuContext, children, ...otherProps } = useMenu({
    ...props,
    ref
  })

  return (
    <MenuContext.Provider value={contextValue}>
      <Component ref={domRef} className={baseStyles} role="menu" {...otherProps}>
        {title && <div className={titleStyles}>{title}</div>}
        <div className={contextValue.slots.list()}>{children}</div>
      </Component>
    </MenuContext.Provider>
  )
})

Menu.displayName = 'Menu'

export interface MenuItemProps extends UseMenuItemProps {}

const MenuItem = forwardRef<'div', MenuItemProps>((props, ref) => {
  const {
    Component,
    domRef,
    itemStyles,
    iconStyles,
    contentStyles,
    descriptionStyles,
    handleClick,
    isDisabled,
    startIcon,
    endIcon,
    description,
    children,
    ...otherProps
  } = useMenuItem({ ...props, ref })

  return (
    <Component
      ref={domRef}
      className={itemStyles}
      onClick={handleClick}
      role="menuitem"
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      {...otherProps}
    >
      {startIcon && <span className={iconStyles}>{startIcon}</span>}
      <div className={contentStyles}>
        {children}
        {description && <div className={descriptionStyles}>{description}</div>}
      </div>
      {endIcon && <span className={iconStyles}>{endIcon}</span>}
    </Component>
  )
})

MenuItem.displayName = 'MenuItem'

export interface MenuSectionProps extends UseMenuSectionProps {}

const MenuSection = forwardRef<'div', MenuSectionProps>((props, ref) => {
  const { Component, domRef, sectionStyles, titleStyles, title, children, ...otherProps } = useMenuSection({
    ...props,
    ref
  })

  return (
    <Component ref={domRef} className={sectionStyles} role="group" {...otherProps}>
      {title && <div className={titleStyles}>{title}</div>}
      {children}
    </Component>
  )
})

MenuSection.displayName = 'MenuSection'

export interface MenuDividerProps extends UseMenuDividerProps {}

const MenuDivider = forwardRef<'hr', MenuDividerProps>((props, ref) => {
  const { Component, domRef, dividerStyles, ...otherProps } = useMenuDivider({ ...props, ref })

  return <Component ref={domRef} className={dividerStyles} role="separator" {...otherProps} />
})

MenuDivider.displayName = 'MenuDivider'

export interface MenuSubmenuProps extends UseMenuSubmenuProps {}

const MenuSubmenu = forwardRef<'div', MenuSubmenuProps>((props, ref) => {
  const {
    Component,
    domRef,
    submenuStyles,
    triggerStyles,
    submenuIconStyles,
    contentStyles,
    iconStyles,
    itemContentStyles,
    label,
    startIcon,
    endIcon,
    isOpen,
    isDisabled,
    toggleSubmenu,
    children,
    ...otherProps
  } = useMenuSubmenu({ ...props, ref })

  const defaultChevronIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )

  return (
    <Component ref={domRef} className={submenuStyles} {...otherProps}>
      <div
        className={triggerStyles}
        onClick={toggleSubmenu}
        role="menuitem"
        aria-disabled={isDisabled}
        aria-expanded={isOpen}
        tabIndex={isDisabled ? -1 : 0}
      >
        {startIcon && <span className={iconStyles}>{startIcon}</span>}
        <div className={itemContentStyles}>{label}</div>
        <span className={submenuIconStyles}>{endIcon || defaultChevronIcon}</span>
      </div>
      {isOpen && <div className={contentStyles}>{children}</div>}
    </Component>
  )
})

MenuSubmenu.displayName = 'MenuSubmenu'

export { Menu, MenuItem, MenuSection, MenuDivider, MenuSubmenu }
export default Menu
