'use client'

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "@faiz-ui/react"

export default function AccordionDisabled() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Individual Item Disabled</h3>
        <Accordion defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionHeader value="item-1">Available Item</AccordionHeader>
            <AccordionContent value="item-1">
              This item is available and can be interacted with normally.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" isDisabled>
            <AccordionHeader value="item-2">Disabled Item</AccordionHeader>
            <AccordionContent value="item-2">
              This content cannot be accessed because the item is disabled.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionHeader value="item-3">Another Available Item</AccordionHeader>
            <AccordionContent value="item-3">
              This item is also available for interaction.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Entire Accordion Disabled</h3>
        <Accordion isDisabled defaultValue="disabled-1">
          <AccordionItem value="disabled-1">
            <AccordionHeader value="disabled-1">Disabled Accordion</AccordionHeader>
            <AccordionContent value="disabled-1">
              When the entire accordion is disabled, no items can be interacted with.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="disabled-2">
            <AccordionHeader value="disabled-2">Also Disabled</AccordionHeader>
            <AccordionContent value="disabled-2">
              All items inherit the disabled state from the parent accordion.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
