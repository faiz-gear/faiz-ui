'use client'

import { Breadcrumbs } from '@faiz-ui/react'

export default function Sizes() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Small</p>
        <Breadcrumbs size="sm">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Medium</p>
        <Breadcrumbs size="md">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Large</p>
        <Breadcrumbs size="lg">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
    </div>
  )
}
