'use client'

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "@faiz-ui/react"

export default function AccordionVariants() {
  return (
    <div className="space-y-4">
      <Accordion variant="solid" defaultValue="solid-1">
        <AccordionItem value="solid-1">
          <AccordionHeader value="solid-1">Solid Variant</AccordionHeader>
          <AccordionContent value="solid-1">
            The default solid style with filled background and strong borders.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Accordion variant="outline" defaultValue="outline-1">
        <AccordionItem value="outline-1">
          <AccordionHeader value="outline-1">Outline Variant</AccordionHeader>
          <AccordionContent value="outline-1">
            Clean outline design with transparent background.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Accordion variant="ghost" defaultValue="ghost-1">
        <AccordionItem value="ghost-1">
          <AccordionHeader value="ghost-1">Ghost Variant</AccordionHeader>
          <AccordionContent value="ghost-1">
            Subtle dashed borders for a lighter appearance.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Accordion variant="light" defaultValue="light-1">
        <AccordionItem value="light-1">
          <AccordionHeader value="light-1">Light Variant</AccordionHeader>
          <AccordionContent value="light-1">
            Soft, light styling perfect for minimal designs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Accordion variant="flat" defaultValue="flat-1">
        <AccordionItem value="flat-1">
          <AccordionHeader value="flat-1">Flat Variant</AccordionHeader>
          <AccordionContent value="flat-1">
            Modern flat design without shadows or depth effects.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Accordion variant="sketchy" defaultValue="sketchy-1">
        <AccordionItem value="sketchy-1">
          <AccordionHeader value="sketchy-1">Sketchy Variant</AccordionHeader>
          <AccordionContent value="sketchy-1">
            Enhanced hand-drawn feel with mixed border styles and extra character.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
