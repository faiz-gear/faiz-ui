'use client'

import { Breadcrumbs } from '@faiz-ui/react'

export default function Underline() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">None</p>
        <Breadcrumbs underline="none">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">On Hover</p>
        <Breadcrumbs underline="hover">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Always</p>
        <Breadcrumbs underline="always">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Active Only</p>
        <Breadcrumbs underline="active">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
    </div>
  )
}
