'use client'

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "@faiz-ui/react"

export default function AccordionSizes() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Small Size</h3>
        <Accordion size="sm" defaultValue="small-1">
          <AccordionItem value="small-1">
            <AccordionHeader value="small-1">Compact Accordion</AccordionHeader>
            <AccordionContent value="small-1">
              Perfect for dense layouts and sidebar content.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Medium Size (Default)</h3>
        <Accordion size="md" defaultValue="medium-1">
          <AccordionItem value="medium-1">
            <AccordionHeader value="medium-1">Standard Accordion</AccordionHeader>
            <AccordionContent value="medium-1">
              The default size, perfect for most use cases and content types.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Large Size</h3>
        <Accordion size="lg" defaultValue="large-1">
          <AccordionItem value="large-1">
            <AccordionHeader value="large-1">Spacious Accordion</AccordionHeader>
            <AccordionContent value="large-1">
              Ideal for prominent content sections and landing pages.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
