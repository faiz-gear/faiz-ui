'use client'

import { Breadcrumbs } from '@faiz-ui/react'

export default function Colors() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Primary</p>
        <Breadcrumbs color="primary">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Secondary</p>
        <Breadcrumbs color="secondary">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Success</p>
        <Breadcrumbs color="success">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Warning</p>
        <Breadcrumbs color="warning">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Danger</p>
        <Breadcrumbs color="danger">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Info</p>
        <Breadcrumbs color="info">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
    </div>
  )
}
