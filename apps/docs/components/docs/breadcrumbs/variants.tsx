'use client'

import { Breadcrumbs } from '@faiz-ui/react'

export default function Variants() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Solid</p>
        <Breadcrumbs variant="solid">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Light</p>
        <Breadcrumbs variant="light">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Bordered</p>
        <Breadcrumbs variant="bordered">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
    </div>
  )
}
