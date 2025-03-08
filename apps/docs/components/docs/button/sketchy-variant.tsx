'use client'

import { Button } from "@faiz-ui/react"

export default function SketchyVariant() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="sketchy" color="primary">Sketchy Style</Button>
      <Button variant="sketchy" color="secondary">Irregular Border</Button>
      <Button variant="sketchy" color="success">Hand-drawn Effect</Button>
      <Button variant="sketchy" color="warning">Semi-realistic</Button>
      <Button variant="sketchy" color="danger">Dotted Line Frame</Button>
    </div>
  )
} 