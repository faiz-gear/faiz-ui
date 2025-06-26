'use client'

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "@faiz-ui/react"

export default function AccordionCustomStyles() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Gradient Background</h3>
        <Accordion 
          customStyles="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
          defaultValue="gradient-1"
        >
          <AccordionItem value="gradient-1">
            <AccordionHeader value="gradient-1">Gradient Styled Accordion</AccordionHeader>
            <AccordionContent value="gradient-1">
              This accordion features a beautiful gradient background that enhances the hand-drawn aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Heavy Shadow Effect</h3>
        <Accordion 
          customStyles="[box-shadow:8px_8px_0px_0px_rgba(0,0,0,0.8)] dark:[box-shadow:8px_8px_0px_0px_rgba(255,255,255,0.3)]"
          defaultValue="shadow-1"
        >
          <AccordionItem value="shadow-1">
            <AccordionHeader value="shadow-1">Heavy Shadow Accordion</AccordionHeader>
            <AccordionContent value="shadow-1">
              Enhanced shadow effects create a more pronounced hand-drawn appearance.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Custom Rotation</h3>
        <Accordion 
          customStyles="[transform:rotate(-2deg)] hover:[transform:rotate(0deg)] transition-transform"
          defaultValue="rotation-1"
        >
          <AccordionItem value="rotation-1">
            <AccordionHeader value="rotation-1">Tilted Accordion</AccordionHeader>
            <AccordionContent value="rotation-1">
              Custom rotation angles add personality and enhance the organic feel.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
