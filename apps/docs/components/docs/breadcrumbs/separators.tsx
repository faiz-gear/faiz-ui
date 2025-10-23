'use client'

import { Breadcrumbs } from '@faiz-ui/react'

export default function Separators() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Default (/)</p>
        <Breadcrumbs>
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Greater Than (&gt;)</p>
        <Breadcrumbs separator=">">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Arrow (→)</p>
        <Breadcrumbs separator="→">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Bullet (•)</p>
        <Breadcrumbs separator="•">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
    </div>
  )
}
