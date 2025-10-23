'use client'

import { Breadcrumbs } from '@faiz-ui/react'

export default function Disabled() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/products" isDisabled>
        Products (Disabled)
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>Current</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}
