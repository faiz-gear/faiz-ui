import * as React from 'react'
import { forwardRef } from '@faiz-ui/system'
import { UseBreadcrumbsProps, useBreadcrumbs } from './use-breadcrumbs'
import BreadcrumbItem, { BreadcrumbItemProps } from './breadcrumb-item'

export interface BreadcrumbsProps extends UseBreadcrumbsProps {
  children?: React.ReactNode
}

interface BreadcrumbsComponent
  extends React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLElement>> {
  Item: typeof BreadcrumbItem
}

const Breadcrumbs = forwardRef<'nav', BreadcrumbsProps>((props, ref) => {
  const { Component, domRef, slots, separator, children, ...otherProps } = useBreadcrumbs({ ...props, ref })

  const childrenArray = React.Children.toArray(children)
  const lastIndex = childrenArray.length - 1

  return (
    <Component ref={domRef} className={slots.base} aria-label="Breadcrumb" {...otherProps}>
      <ol className={slots.base}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null

          const isLast = index === lastIndex

          return (
            <li key={index} className={slots.item}>
              {React.cloneElement(child as React.ReactElement<any>, {
                isCurrent: isLast,
                slots
              })}
              {!isLast && <span className={slots.separator} aria-hidden="true">{separator}</span>}
            </li>
          )
        })}
      </ol>
    </Component>
  )
}) as BreadcrumbsComponent

Breadcrumbs.displayName = 'Breadcrumbs'
Breadcrumbs.Item = BreadcrumbItem

export default Breadcrumbs
