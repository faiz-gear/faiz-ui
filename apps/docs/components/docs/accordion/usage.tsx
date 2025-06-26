'use client'

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "@faiz-ui/react"

export default function AccordionUsage() {
  return (
    <Accordion defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionHeader value="item-1">
          What is hand-drawn design?
        </AccordionHeader>
        <AccordionContent value="item-1">
          Hand-drawn design mimics the organic, imperfect nature of hand-crafted elements,
          creating a warm and approachable user interface.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-2">
        <AccordionHeader value="item-2">
          How does it work?
        </AccordionHeader>
        <AccordionContent value="item-2">
          Through CSS transforms, shadows, and subtle animations, we create the illusion
          of hand-drawn elements while maintaining digital precision.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
