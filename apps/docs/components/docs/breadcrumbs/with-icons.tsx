'use client'

import { Breadcrumbs } from '@faiz-ui/react'

export default function WithIcons() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="/">🏠 Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/products">📦 Products</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/products/electronics">💻 Electronics</Breadcrumbs.Item>
      <Breadcrumbs.Item>🖥️ Laptops</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}
