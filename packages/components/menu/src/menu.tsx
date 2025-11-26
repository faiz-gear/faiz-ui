import { forwardRef } from '@faiz-ui/system'
import {
  UseMenuProps,
  useMenu,
  UseMenuItemProps,
  useMenuItem,
  UseMenuSectionProps,
  useMenuSection,
  UseMenuDividerProps,
  useMenuDivider
} from './use-menu'

export interface MenuProps extends UseMenuProps {}

const Menu = forwardRef<'div', MenuProps>((props, ref) => {
  const { Component, domRef, contextValue, baseStyles, MenuContext, children, ...otherProps } = useMenu({
    ...props,
    ref
  })

  return (
    <MenuContext.Provider value={contextValue}>
      <Component ref={domRef} className={baseStyles} role="menu" {...otherProps}>
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

export { Menu, MenuItem, MenuSection, MenuDivider }
export default Menu
